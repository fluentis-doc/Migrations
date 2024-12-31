---
title: Forms
sidebar_position: 1
---

## Generale

La form _Forms_ è un'objectform contenente tutte le definizioni della form di Fluentis.<br/>

![formmain](/img/fluentis/forms/forms/form-main.png)

In questa form possiamo definire una form custom o personalizzare i comandi e le ribbon di quelle esistenti. I comandi e ribbon standard non posso essere modificati.
Per poter visualizzare la lista di form disponibili dobbiamo obligatoriamente popolare i filtri *Schema del database*(_deafult_), *Schema di appplicazione*(_defalut_), *Area* e *Modulo*.

:::info
Le form custom vanno create nei moduli custom, per accedervi, aprire il menu contestuale sopra *Modulo* e cliccare apri form
:::

## Azioni

![ribbonaction](/img/fluentis/forms/forms/ribbonaction.png)

Suddivideno le azioni della ribbon in tre pezzi possiamo trovare in ordine le sezioni:
### Generale
Si occupa del **Salvataggio**, **Creazione** ed **Eliminaizione** della form selezionata
### Comandi gruppo
Si occupa dela **Creazione** ed **Eliminaizione** del commando selezionato. Questo gruppo di bottoni si abiliterà soltanto quando il tab comandi è selezionato
### Ribbon
Si occupa dela **Creazione**, **Modifica** ed **Eliminaizione** della ribbon selezionata. Questo gruppo di bottoni si abiliterà soltanto quando il tab ribbon è selezionato

## Form

Lista delle form disponibili in questo modulo, con il menu contestuale è possibile aggiungere una form figlia per una questione visiva e organizzativa, selezionandone una i tab sulla destra mostreranno i dettagli.

![formmain](/img/fluentis/forms/forms/form-main2.png)

## Tab Generale

Nel tab generale possiamo configurare alcune impostazioni di base.<br/>

![general](/img/fluentis/forms/forms/form-general.png)

| <div style={{ width:'150px' }}>***Campo*** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Codice_    |   Codice identificativo della form  |
| _Help url site_    |  obsolete |
| _Titolo_    |  Titolo che comparirà come nome della form in fluenti   |
| _Icona_    |  Icona che comparirà affianco al titolo della form   |
| _Help Context_    |   url di un sito web che si apre premendo _F1_    |

Nella lista titoli è possibile dare un titolo e icona diversa alla stessa form, in base al contesto e alla piattaforma 

## Tab Comandi

Per poter eseguire un'azione tramite un pulsante nella ribbon form è necessario definire un comando in questa lista per identificare cosa performare.

![command](/img/fluentis/forms/forms/form-command.png)

| <div style={{ width:'150px' }}>***Campo*** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Command_    |   Codice identificativo comando  |
| _Nome_    |  Nome visualizzato in fluentis |
| _Descrizione_    |  Descrizione e tooltip del comando   |
| _Diritto_    |  Diritto del bottone, il comando verrà abilitato solo se l'utente possiede i diritti   |

## Tab Ribbon

Diversamente dalla ribbon questa ribbon agisce specificatamente nella ribbon selezionata, in fluentis verrà visualizzata non appena il focus si sposta sulla form.<br/>
è possibile definire più form per la stessa ribbon a seconda dei casi.

![ribbon](/img/fluentis/forms/forms/form-ribbon.png)

| <div style={{ width:'150px' }}>***Campo*** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Nome_    |   Nome identificativo ribbon  |
| _Context_    |  Contesto della ribbon, se il widget prevede un contesto la ribbon caricherà quello corrispondente |
| _Natura_    |  specifica la natura di utilizzo della form   |
| _Diritto_    |  Piattaforma di destinazione    |

Nella parte inferiore del tab è possibile visualizzare la preview della ribbon.

### Modfica Ribbon

![ribbon edit](/img/fluentis/forms/forms/form-ribbon-edit.png)

Entrando in modifica della ribbon form saranno disponibili gli stessi controlli visti per ribbon di fluentis, almeno per quanto rigurda la tree view, con la diferrenza che in questa sezione possiamo abilitare dei template previsti a standard per gestire alcune funzioni come:

| <div style={{ width:'150px' }}>***Template*** </div> |
| -----------------------------------------|         
| _Attività_    |  
| _Document Manager_    |
| _Vesrioni_    | 
| _Workflow_    | 
| _Stampa_    |  
| _Operazioni_    |  
| _Gantt_    |  
| _Ragruppamento_    |  
| _Profilo Form_    |  
| _Filtro sola lettura_    |
| _Filtro RW_    |  
| _Diagramma_    |  
| _Modelli di Gantt_    |  

Il flag permette di attivare il template, mentre la colonna ordine stabilisce in che ordine far spawnare i controlli.