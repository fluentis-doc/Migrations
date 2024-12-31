---
title: Oggetto Business
sidebar_position: 1
---

Il Business Object è l'ingranaggio principale di Fluentis, esso assume un ruolo fondamentale perché qualsiasi documento esistente è associato a un business object di diverso tipo.<br/>
In questa form è possibile visualizzare o modificare, le caratteristiche e funzionalità relative, trovi elencate qui sotto tutte le possibili opzioni di personalizzazione.

## Proprietà oggetto
In questa sezione è possibile cambiare le seguente opzioni legate alla tabella sql, il template e gli alias

![Preview form](/img/fluentis/objects-repository/business-object/proprietaoggetto.png)

| <div style={{ width:'250px' }}>***Nome Campo***</div> | ***Descrizione*** |
| ----------------------------------------- | ----------------------------------------------------------------- |
| _Codice_                                |Nome identificativo dell'oggetto le iniziali FS indicano che l'oggetto è standard|
| _Nome/Descrizione_                      |Nome e descrizione associati all'oggetto|
| _Tabella_                               |Tabella sql per la persistenza dei dati|
| _Mapping Schema/Mapping Table_          |tipo schema utilizzato da sql e tabella associata|
| _Gestione Documentale_                  |Indica se l'oggetto deve essere incluso nella gestione documentale|
| _Object Template_                       |possibilità di una struttura generica predefinita|
| _Alias Formula/Lungo Alias Formula_     |Indica un campo semplice quando l'oggetto è utilizzato come Object Widget, possibilità di estendere l'alias lungo quando la larghezza della colonna lo permette|
| _Larghezza predefinita della colonna_   |Specifica la larghezza da utilizzare di default con l'utilizzo di un Object Widget|



## Moduli di oggetti e spazi dei nomi
Sezione dedicata al namespace e modulo degli oggetti, indica dove gli oggetti vivono, solitamente utile ai programmatori; nel 99% dei casi il modulo corrisponde al namespace

![Preview form](/img/fluentis/objects-repository/business-object/namespace.png)

| <div style={{ width:'250px' }}>***Nome Campo*** </div> | ***Descrizione*** |
| ----------------------------------------- | ----------------------------------------------------------------- |
| _Modulo Read Only_        |Modulo dell'oggetto ReadOnly|
| _Read Only Namespace_     |NameSpace dell'oggetto ReadOnly|
| _Read-Write Module_       |Modulo dell'oggetto ReadWrite|
| _Read-Write Namespace_    |NameSpace dell'oggetto ReadWrite|
| _Shared Interface Module_ |Modulo per immettere l'oggetto nell'interfaccia condivisa|



## Algoritmi
In questa sezione si possono definire degli algoritmi da eseguire dopo determinati eventi

![Preview form](/img/fluentis/objects-repository/business-object/algoritmo.png)

| <div style={{ width:'250px' }}>***Nome Campo*** </div> | ***Descrizione*** |
| ----------------------------------------- | ----------------------------------------------------------------- |
| _Nuovo oggetto proposta_  |In fase di creazione|
| _Dopo inserimento_        |Dopo l'inserimento a DataBase|
| _Dopo l'aggiornamento_    | Dopo l'aggiornamento a DataBase|
| _Dopo cancellazione_      |Dopo l'eliminazione a DataBase|

## Proprietà avanzate

## Titolo
Determina la composizione del titolo sull'header dell'objectform

![Preview form](/img/fluentis/objects-repository/business-object/titolo.png)

| <div style={{ width:'250px' }}>***Nome Campo***</div> | ***Descrizione*** |
| ----------------------------------------- | ----------------------------------------------------------------- |
| _Modello_                 |Box di sola visualizzazione, contente il titolo standard utilizzato quando la custom pattern non è definita|
| _Dipendenze_              |box di sola visualizazione, consente di vedere le proprietà caricate a standard|
| _Custom Pattern_          |Espressione per valorizzare il titolo, è possibile utilizzare le proprietà semplici e voci del dizionario con l'utilizzo delle parentesi graffe|
| _Custom Dependencies_     |Box di sola visualizzazione per utilizzare Business Property non presenti nella Load Request, selezionabili nel riquadro di destra|

:::caution

Questa opzione si applica per gli oggetti creati da questo momento in poi.

:::

:::danger
Se si desidera applicare tutti i titoli ad ogni record presente in Fluentis, sostituire "YourBusinessObject" con il proprio business object, più record saranno presenti a database e più tempo impiegherà il pool a ricalcolarli
``` sql title="SQL - Ricalcolo titoli"

Declare @ObjectNamespace nvarchar(400)
Declare @ObjectCode nvarchar(400)
Declare @ModuleCode nvarchar(400)
Declare @SchemaName nvarchar(400)
Declare @TableName nvarchar(400)
Declare @IdFieldName nvarchar(400)

declare curObjects cursor for 
Select OBJBO_ReadWriteNamespace, 
       case 
              when OBJBO_Code like 'Arm%' then 'ArmW' + Substring(OBJBO_Code, 4, 999)
              when OBJBO_Code like 'Crm%' then 'CrmW' + Substring(OBJBO_Code, 4, 999)
              when OBJBO_Code like 'FS%' then 'FSW' + Substring(OBJBO_Code, 3, 999)
              else OBJBO_Code
       end, 
OBJBM_Code, OBJBO_MappingSchemaName, OBJBO_MappingTableName, OBJPROIP_MappingFieldName
from Arm.OBJ_BusinessObjects 
Join Arm.OBJ_BusinessModules on OBJBO_ReadWriteModule_OBJBM_Id = OBJBM_Id
Join Arm.OBJ_BusinessObjectProperties on OBJPROIP_BusinessObject_OBJBO_Id = OBJBO_Id And OBJPROIP_PropertyKind = 4
Where OBJBO_TitlePattern is not null 
       and OBJBO_Code = 'YourBusinessObject'
Order by 1,2

open curObjects
fetch next from curObjects into @ObjectNamespace, @ObjectCode, @ModuleCode, @SchemaName, @TableName, @IdFieldName
while @@FETCH_STATUS <> -1
begin
       Declare @Query nvarchar(4000)
       Select @Query = 'INSERT INTO [Arm].[OBJ_TriggerQueue]
       ([OBJTQ_Date], [OBJTQ_BusinessObjectType], [OBJTQ_BusinessObjectId], [OBJTQ_OperationType], [OBJTQ_TriggerImplementation], [OBJTQ_TriggerObjectDescriptor],[OBJTQ_Application], [OBJTQ_Error])
       Select getdate(), ''' + @ObjectNamespace + '.' + @ObjectCode + ', ' + @ModuleCode + ''', ' + @IdFieldName + ', 80, 
              ''Fluentis.Arm.Core.ReadWrite.Triggers.BusinessObjectTitle.BusinessObjectTitleTrigger, Fluentis.Arm.Core.ReadWrite'', 
              ''<TriggerObjectDescriptor objectType="' + @ObjectNamespace + '.' + @ObjectCode + ', ' + @ModuleCode + '" objectId="'' + Convert(nvarchar(50), ' + @IdFieldName + ') + ''">
  <PropertyDescriptors />
  <ChangedPropertyDescriptors />
</TriggerObjectDescriptor>'', ''Fluentis2021'', null
from [' + @SchemaName + '].[' + @TableName + ']
Order by ' + @IdFieldName + ' desc'
       --PRINT(@Query)
       exec(@Query)
       fetch next from curObjects into @ObjectNamespace, @ObjectCode, @ModuleCode, @SchemaName, @TableName, @IdFieldName
end
close curObjects
deallocate curObjects
GO
```
:::
## Tabs
<!--importation for tabs-->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="BusinessProperty"
    values={[
        {label: 'Proprietà', value: 'BusinessProperty'},
        {label: 'Parametri', value: 'Parameters'},
        {label: 'Regole di convalida', value: 'ConvalidRules'},
        {label: 'Modelli di ricerca', value: 'SearchModel'}
    ]}>
<TabItem value="BusinessProperty">

le Business Property sono la costituzione del Business Object, descrive come esso è formato, è possibile aggiungerne di nuove a mano oppure utilizzando il pulsante "Confronto Database" per allinearle dalla tabella in sql.<br/>
La lista di proprietà dell'oggetto si trovano in una tabella
![Preview form](/img/fluentis/objects-repository/business-object/businessProperty.png)

| <div style={{ width:'250px' }}>***Nome Campo***</div> | ***Descrizione*** |
| ----------------------------------------- | ----------------------------------------------------------------- |
| _Codice_                                |Codice identificativo della proprietà.
| _Colonna della tabella_                 |Nome della colonna in Sql
| _Nome campo in tabella_                 |Nome della colonna in Sql
| _Tipo proprietà_                        |Specifica il tipo di proprietà, semplice, riferimento, collezione, OneToOne, Funzione calcolata
| _Tipo (semplice)_                       |Specifica, qual'ora la proprietà sia semplice o una funzione il tipo
| _Tipo (oggetto)_                        |Specifica a quale tipo di oggetto si riferisce
| _Nome_                                  |Nome del campo in colonna da visualizzare su Fluentis
| _Descrizione_                           |Descrizione del campo in colonna da visualizzare su Fluentis
| _Non Nullable_                          |Specifica se è nullable
| _Ordine_                                |Ordine interno per la visualizzazione

## Proprietà selezionata
é possibile cambiare alcuni comportamenti della proprietà selezionata, le proprietà semplici possono avere qualche opzione leggermente differente
![Preview form](/img/fluentis/objects-repository/business-object/proprietaselezionata.png)

| <div style={{ width:'250px' }}>***Nome Campo*** </div> | ***Descrizione*** |
| ----------------------------------------- | ----------------------------------------------------------------- |
| _Codice/Nome Campo in tabella_           |riferimento al codice e il nome della colonna in Sql
| _Metodo Proposta_                        |Metodo algoritmo per proporre un valore non appena si crea l'oggetto
| _Metodo Setter_                          |Metodo algoritmo chiamato ogni volta che si conferma il valore immesso
| _Widget_                                 |Override del widget da chiamare per questo Business Object
| _Valore predefinito/Alias Null Value_    |Valore che assume il widget come predefinito e placeholder in caso di valore nullo
| _Messaggio di Convalida_                 |Messaggio di convalida in caso fosse obbligatoria
| _Larghezza predefinita della colonna_   |Larghezza predefinita della colonna in griglia
| _Modalita generazione codice_            |Modalità di generazione della proprietà: normale, interfaccia, readonly-readwrite, interfaccia readonly-readwrite
| _Escludi dall'interfaccia condivisa_     |Indica se escludere il campo quando utilizzata un'interfaccia

</TabItem>
<TabItem value="Parameters">

I parametri sono obbligatori e devono essere associati a delle proprietà dell'oggetto, il numero di parametri varia in base all'object template utilizzato
![Preview form](/img/fluentis/objects-repository/business-object/parametri.png)

| <div style={{ width:'250px' }}>***Nome Campo*** </div> | ***Descrizione*** |
| ----------------------------------------- | ----------------------------------------------------------------- |
| _Codice_           |Nome del parametro contraddistinto dalla iniziale T
| _Proprietà_        |Proprietà a cui è legato il parametro
| _Tipo semplice_    |Specifica il tipo della proprietà semplice (String, bool, int, etc.)
| _Tipo_             |Specifica il tipo della proprietà (BusinessObject)

</TabItem>
<TabItem value="ConvalidRules">

:::info

Le regole di convalida presenti nell'oggetto business differiscono leggermente da quelle presenti nelle business property.

:::

Le regole di convalida permettono di aggiungere ulteriori controlli all'oggetto al momento del salvataggio in ObjectForm.<br/>
Queste agiscono solo al momento del salvataggio, avvisandoci con un testo ed un livello di criticità personalizzabile, quando la regola, anch'essa customizzabile, non è soddisfatta.<br/>

![Preview form](/img/fluentis/objects-repository/business-object/regolediconvalida.png)

| <div style={{ width:'250px' }}>***Nome Campo*** </div> | ***Descrizione*** |
| ----------------------------------------- | ----------------------------------------------------------------- |
| _Modello di convalida_           |Descrive la regola da applicare
| _Severità_                       |Scala per descrivere quanto è grave non aver rispettato la regola di convalidà, a scopo puramente visivo
| _Messaggio_                      |Messaggio dell'errore da riprodurre a video
| _Codice EA_                      |Codice EA
|_Proprietà_                       |Indica quando la regola è asscociata ad una proprietà, questa compare solo quando la regola viene createa utilizzando il menù contestuale della proprietà nell'object navigator

# Crezione, modifica ed eliminazione
è possibile creare, modificare ed eliminare regole di convalida tramitte gli appositi pulstanti presenti in ribbon; visibile se l'omonimo tab è selezionato.

![Preview form](/img/fluentis/objects-repository/business-object/newregolediconvalida.png)

La creazione o modifica di una regola di convalida si presenta con una maschera molto semplice.<br/>
Nella sezione dedicata alla proprietà oggetto è possibile visualizzare:

![Preview form](/img/fluentis/objects-repository/business-object/editregolediconvalida1.png)
L'*Oggetto Business* è un campo readonly puramente informativo.<br/>
*Severità/Messaggio di convalida* sono, invece, campi adibiti a specificare la gravità d'errore e il messaggio da visualizzare.<br/>
*Codice EA* è un campo readwrite.

![Preview form](/img/fluentis/objects-repository/business-object/editregolediconvalida2.png)

Il modello di convalida decide come applicare le regole.<br/>
Esistono 2 tipi di modelli: *UniqueKey* e *CriteriaOperator*.il primo scecifica la chiave univoca dell'oggetto, il secondo una regola generica da esplicitare nel campo *Regola*.

![Preview form](/img/fluentis/objects-repository/business-object/editregolediconvalida3.png)
Definisce se la regola deve verificarsi quando una proprietà selezionata cambia.

</TabItem>
<TabItem value="SearchModel">
I modelli di ricerca nascono per aggiunere delle regole alla barra di ricerca comune nella maschera del filter widget.<br/>
In questo box può essere fatta una ricerca avanzata usando una particolare sintassi per ottimizzare la ricerca, ma la logica di ricerca si basa su una specifica regola di formattazione che riporta l’insieme dei campi da ricercare e come nel caso concatenare le informazioni<br/>
Possono essere definite anche più regole diverse da combinare tra loro per ottimizzare la ricerca e tutte queste regole sono riportate all’interno del tab Modelli di Ricerca<br/>

![Preview form](/img/fluentis/objects-repository/business-object/modellodiricerca.png)

il modello serve a capire come eseguire ricerca, è possibile imporre dei controlli, per esempio "!= null" (qual'ora quella proprietà fosse nullable), o concatenare campi, stringhe.<br/>
Nel caso in cui una proprietà non è caricata a standard, possiamo utillizzare il box di destra per selezionarla; in automatico la colonna delle dipendeze si popolerà.

:::caution

Una volta salvata la modifica bisognerà attendere all'incirca 1/2 minuti in base ai tempi di elaborazione del server prima di rendere effettiva la modifica.
Questa opzione si applica per gli oggetti creati da questo momento in poi.

:::

:::danger
 Se si desidera ricalcolare tutti record di un business object lanciare lo script qui sotto su sql, sostituendo "YourBusinessObject" con l'oggetto da ricalcolare, recarsi dunque in fluentis e creare un nuovo oggetto, al momento del salvataggio il pool ricalcolerà tutti gli oggetti con i nuovi modelli di ricerca, attenzione che più record ci saranno da calcolare e più tempo il pool occuperà per smaltire i record da inserire

``` sql title="SQL - Ricalcolo modelli di ricerca"

Declare @ObjectNamespace nvarchar(400)
Declare @ObjectCode nvarchar(400)
Declare @ModuleCode nvarchar(400)
Declare @SchemaName nvarchar(400)
Declare @TableName nvarchar(400)
Declare @IdFieldName nvarchar(400)

declare curObjects cursor for 
Select OBJBO_ReadWriteNamespace, 
       case 
              when OBJBO_Code like 'Arm%' then 'ArmW' + Substring(OBJBO_Code, 4, 999)
              when OBJBO_Code like 'Crm%' then 'CrmW' + Substring(OBJBO_Code, 4, 999)
              when OBJBO_Code like 'FS%' then 'FSW' + Substring(OBJBO_Code, 3, 999)
              else OBJBO_Code
       end, 
OBJBM_Code, OBJBO_MappingSchemaName, OBJBO_MappingTableName, OBJPROIP_MappingFieldName
from Arm.OBJ_BusinessObjects 
Join Arm.OBJ_BusinessModules on OBJBO_ReadWriteModule_OBJBM_Id = OBJBM_Id
Join Arm.OBJ_BusinessObjectProperties on OBJPROIP_BusinessObject_OBJBO_Id = OBJBO_Id And OBJPROIP_PropertyKind = 4
Where exists (Select * from Arm.OBJ_BusinessObjectSearchPatterns Where OBJBOSP_BusinessObject_OBJBO_Id = OBJBO_Id)
       and OBJBO_Code = 'YourBusinessObject'
Order by 1,2

open curObjects
fetch next from curObjects into @ObjectNamespace, @ObjectCode, @ModuleCode, @SchemaName, @TableName, @IdFieldName
while @@FETCH_STATUS <> -1
begin
       Declare @Query nvarchar(4000)
       Select @Query = 'INSERT INTO [Arm].[OBJ_TriggerQueue]
       ([OBJTQ_Date], [OBJTQ_BusinessObjectType], [OBJTQ_BusinessObjectId], [OBJTQ_OperationType], [OBJTQ_TriggerImplementation], [OBJTQ_TriggerObjectDescriptor],[OBJTQ_Application], [OBJTQ_Error])
       Select getdate(), ''' + @ObjectNamespace + '.' + @ObjectCode + ', ' + @ModuleCode + ''', ' + @IdFieldName + ', 80, 
              ''Fluentis.Arm.Core.ReadWrite.Triggers.BusinessObjectSearch.BusinessObjectSearchKeyTrigger, Fluentis.Arm.Core.ReadWrite'', 
              ''<TriggerObjectDescriptor objectType="' + @ObjectNamespace + '.' + @ObjectCode + ', ' + @ModuleCode + '" objectId="'' + Convert(nvarchar(50), ' + @IdFieldName + ') + ''">
  <PropertyDescriptors />
  <ChangedPropertyDescriptors />
</TriggerObjectDescriptor>'', ''Fluentis2021'', null
from [' + @SchemaName + '].[' + @TableName + ']
Order by ' + @IdFieldName + ' desc'
       --PRINT(@Query)
       exec(@Query)
       fetch next from curObjects into @ObjectNamespace, @ObjectCode, @ModuleCode, @SchemaName, @TableName, @IdFieldName
end
close curObjects
deallocate curObjects
```
:::
</TabItem>

</Tabs>