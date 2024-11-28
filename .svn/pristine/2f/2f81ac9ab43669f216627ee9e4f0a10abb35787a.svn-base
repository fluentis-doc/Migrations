---
title: Proprietà
sidebar_position: 3
---
## Generale
Le Proprietà sono il contenuto dell'Oggetto Business, servono a descriverlo e contenere dati.<br/>
Possono essere di vario tipo e con impostazioni diverse. In ogni Oggetto Business ne troviamo obbligatoriamente sempre una: la proprietà Id, usata per identificare univocamente l'oggetto nel database.<br/>
Le Proprietà possono essere visualizzate nel riquadro di destra del Navigatore Oggetti, cliccando sulla voce Properties o direttamente nella tree view espandendo quest'ultima o nella form di visualizzazione dell'Oggetto Business.<br/>

Infine, attraverso il _menu contestuale_ della tree view è possibile visuallizzare o modificare il dettaglio della proprietà.

![Preview form](/img/fluentis/objects-repository/business-object/business-property/menuconstestuale.png)

Cliccando quindi **Visualizza** o **Modifica** si aprirà una form divisa in due sezioni spiegate di seguito.<br/>

## Impostazioni comuni

![Preview form](/img/fluentis/objects-repository/business-object/business-property/menusx.png)

* **Codice**: Codice della proprietà
* **Nome/Descrizione**: Nome e descrizione da visualizzare in tabella
* **Nome campo in tabella**: Nome del campo della tabella sql
* **Tipo Proprietà**: Tipo della proprietà, scelte disponibili:
>`Proprietà semplice`<br/>
>`Riferimento`: proprietà referenziata verso un'altro oggetto<br/>
>`Collezione`: collezione di oggetti referenziati<br/>
>`Chiave`: proprietà semplice che contribuirà alla chiave primaria dell'oggetto<br/>
>`Padre`: specifica il padre in caso sia una collezione<br/>
>`OneToOne`: specifica l'estensione (non custom) della tabella<br/>
>`Computed`: proprietà calcolata<br/>
* **Tipo semplice/Tipo oggetto**: Specifica il tipo della proprietà
>:::info
>
>N.B. nel caso il tipo proprietà è Riferimento, collection oppure OneToOne, bisognerà specificare un Business Object 
>:::
* **Widget**: Specifica un override di un widget per questa proprietà
* **Metodo Setter**: Specifica un metodo setter 
* **Metodo Proposta**: Specifica un metodo proposta

![Preview form](/img/fluentis/objects-repository/business-object/business-property/menudx.png)
* **Non Nullable**: IL flag indica se la proprietà puo essere salvata con valore null, se _true_, comparirà un campo per il messaggio di convalida impedendoti di salvare.
>![Preview form](/img/fluentis/objects-repository/business-object/business-property/mexdiconvalida.png)
* **Modalità di generazione codice**: Scelte possibili _Normale_, _Interfaccia_, _ReadOnly - ReadWrite_, _Interfaccia ReadOnly - ReadWrite_
* **Escludi dalla Interfaccia Condivisa**: Esclude o no, la proprietà quando si tenta la chiamata da interfaccia
* **Larghezza predefinita della colonna**: Specifica la larghezza predefinita della colonna in Fluentis
* **Valore Predefinito/Alias Null Value**: Specifica un valore che assume di default e un placeholder quando il valore è nullo


## Impostazioni specifiche

Nel lato destro della form compariranno dei campi per impostare alcune qualità secondo il `tipo di proprietà` selezionata.

### Impostazioni Proprietà semplici

* **Sterotipo**: Ne indica la _Formattazione_,le scelte disponibili cambiano in base al `tipo semplice`:
>`Time & DateTime`: _time_ permette di impostare la data, _datetime_ anche l'orario, si applica per tipo semplice: *Date*<br/>
>`Currency`: _currency_ imposta il formato in una valuta, si applica per tipo semplice: *Decimal*<br/>
>`Numeric`: _numeric_ lo imposta in semplice valore numerico, si applica per tipo semplice: *Decimal*, *Double*, *Float*, *Int*, *Long*, *Short*<br/>
>`Color`: _Color_ interpreta un colore,si applica per tipo semplice: *Int*<br/>
>`Year`: _Year_ associa il contenuto all'anno ,si applica per tipo semplice: *Int*, *Short*<br/>
>`MultiLine`: _Multiline_ permette al campo read/write di espandere la scrittura su piu righe, si applica per tipo semplice: *String*<br/>
>`Year`: _Year_ associa il contenuto all'anno ,si applica per tipo semplice: *Int*, *Short*<br/>

### Impostazioni Proprietà collection

![Preview form](/img/fluentis/objects-repository/business-object/business-property/impostazionicollection.png)
* **Collezione nome della classe**: Indica il nome della classe collection generata, sconsigliato cambiarne il contenuto
* **Percorso Collezione classe base**: La classe generata puo se custom puo essere derivata da una classe standard, indicarne il nome qual'ora fosse necessario

### Impostazioni Proprietà OneToOne

![Preview form](/img/fluentis/objects-repository/business-object/business-property/impostazionionetone.png)
* **is child property**: Indica se la collection dovrà essere figlia dell'oggetto, in questo modo genera una correlazione padre attraverso essa

### Impostazioni Proprietà Computed Function

![Preview form](/img/fluentis/objects-repository/business-object/business-property/impostazionionefunction.png)
* **Trasformazione**: Indica una trasformazione da eseguire con la function

:::info
Le Impostazioni specifiche del tipo di proprietà non presenti non sono soggette a ulteriori approfondimenti
:::

## Regole di convalida

Tramite la ribbon nella sezione **Regole di convalida**, è possibile creare modificare ed eliminare un elemento dalla griglia sottostante.<br/>

![Preview form](/img/fluentis/objects-repository/business-object/business-property/modellidiconvalida.png)

Le regole di convalida permettono di aggiungere ulteriori controlli all'oggetto al momento del salvataggio in ObjectForm.
Fluentis, a differenza di quanto visto nelle regole di convalida dell'Oggetto Business, ci avviserà con un piccolo segno di errore o un highlight rosso all'interno del box di edit, oltre a questo se siamo in filter form o griglia, basterà spostare il focus dal campo selezionato per far comparire il messaggio di errore.<br/>

:::info
Non si applica per il cambiamento delle collection ExtraData
:::




Con il pulsante nuovo si accede a una form simile da quella vista nei business object, con qualche opzione di personalizzazione in più.
![Preview form](/img/fluentis/objects-repository/business-object/business-property/regolediconvalida.png)
* **Oggetto Business**: campo readonly puramente informativo
* **Proprietà**: campo readonly puramente informativo
* **Severità/Messaggio di convalida**: campi adibiti a specificare la gravità d'errore e il messaggio da visualizzare
*  **Codice EA**: campo read write

Il modello di convalida decide come applicare le regole.<br/>
Esistono 4 tipi di modelli che definiscono la regola da verificare quando una proprietà selezionata cambia.:
* **Criteria Operator**: permette di inserire una regola a proprio piacimento
* **Object Required**: regola che controlla che la proprietà non sia null 
* **String Length**: regola per determinare la lunghezza su una stringa (si applica solo alle proprietà di tipo stringa)
>Selezionando questa opzione si abiliteranno due edit box dove si dovrà scegliere l'operatore di confronto: _Greater_, _GreaterOrEqual_, _Less_, _LessOrEqual_ e il secondo riquadro con il valore di confronto espresso in intero
* **String Required**: regola che controlla la stringa diversa da null, (si applica solo alle proprietà di tipo stringa)

![Preview form](/img/fluentis/objects-repository/business-object/editregolediconvalida3.png)
