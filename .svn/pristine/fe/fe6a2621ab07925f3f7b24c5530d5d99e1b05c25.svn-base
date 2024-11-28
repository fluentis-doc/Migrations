---
title: Workflow
sidebar_position: 5
---

I workflow sono un potente mezzo di gestione dei flussi operativi tra gli utenti definiti in Fluentis, ma anche esterni all’azienda, consentendo di formalizzare e automatizzare i vari passaggi logici tra utenti e ruoli aziendali.  

Fluentis2021 consente di gestire N differenti workflow su ogni oggetto dell’applicativo, vediamone la definizione e le caratteristiche.

## Workflow

Una volta aperto il *Navigatore Oggetti*, ricercare o scorrere la lista degli oggetti per trovare quello sul quale si vuole definire il nuovo workflow: dal menu contestuale all’oggetto scegliere l’opzione *New workflow group*.

![](/img/fluentis/workflow-management/object-navigator.png)

Oppure dal gruppo *WorkflowTransitions* (presente se è già stato creato almeno un workflow per l’oggetto) selezionare un nuovo workflow.

![](/img/fluentis/workflow-management/new-workflow.png)

O aprire in modifica il workflow già esistente: è necessario considerare che i workflow *Standard* (visualizzati in nero) non sono modificabili nelle installazioni partner/cliente, mentre quelli di natura cliente saranno invece editabili su ogni tipo di installazione.  

### Campi della form di Definizione dei dati

![](/img/fluentis/workflow-management/workflow-definition.png)

**Oggetti Business**: è l’oggetto selezionato nel navigatore oggetti per il quale stiamo creando il workflow  
**Codice**: è il codice del Workflow. Deve essere univoco per natura (standard/partner/cliente) in tutti i workflow  
**Nome/Nome localizzato**: sono il nome breve e relativo nome localizzato nella lingua utente  
**Descrizione/Descrizione localizzato**: è la descrizione che si vedrà nel tab di gestione dei workflow all’interno di Fluentis  
**Priorità**: la priorità di visualizzazione nel tab di gestione dei workflow. La priorità con nr. più basso è quella che si vede di default nella form che gestisce l’oggetto  
**Diritto**: si può associare un diritto di visualizzazione del workflow all’interno di Fluentis. Solo gli utenti abilitati vedranno il workflow in Fluentis.

## Natura attività e gruppo attività

Dal Navigatore Oggetti, con right click sull’oggetto, nel menù contestuale appaiono anche le voci *Natura attività* e *Gruppo attività*. Queste consentono di definire delle tipologie di attività da eseguire sui vari stati dei workflow.  
La **Natura attività** viene richiamata nella definizione dei gruppi attività, che consente di definire le singole attività che si possono associare ai workflow. Ogni natura attività ha un codice, una descrizione, una natura (standard, partner, custom), un codice localizzato e una descrizione localizzata, e una immagine.  
La form del **Gruppo attività** si divide in due sezioni: quella relativa all’oggetto di business sul quale siamo e la sezione globale. Nella prima si inserisce a sinistra una descrizione del gruppo e a destra la lista delle attività (senza il flag *Globale*), nel secondo si fa la stessa cosa ma con flag *Globale* (che significa che quell’attività viene condivisa da più workflow di oggetti differenti).
Campi dell’attività sono il codice, la descrizione, la descrizione lunga, la natura (custom, partner cliente), il codice e la descrizione localizzata (il codice localizzato è quello che si vede poi nel workflow).
Per poter lavorare sulle attività all’interno dei workflow, l’utente deve esser autorizzato. Lo si fa dal menù Fluentis, qui

![](/img/fluentis/workflow-management/user-authorization.png)

![](/img/fluentis/workflow-management/activity-rights.png)

Si può definire se l’utente vede le attività, crea nuove attività, le può aggiornare o cancellare.

## Attivazione workflow

Dall’object navigator, tramite pulsante nella ribbon o con menù contestuale sul workflow, si può aprire la pagina di attivazione dei workflow.

![](/img/fluentis/workflow-management/workflow-activation.png)

In questa form si definisce su che **società/divisione** va attivato il singolo workflow, se si **Visualizza il tab di log** direttamente nella form dell’oggetto sul quale il workflow è definito (in modo da non dover entrare nella pagina di gestione dei workflow), un eventuale **Diritto** utente per impostare chi può vedere il workflow, l**’Avvio automatico** e la **Condizione di attivazione** (quest’ultima significa che il workflow non sarà visibile finché la condizione non sarà soddisfatta). (Il campo Ordine non è in uso)

## Definizione dei dati

Ci spostiamo ora all’interno del Workflow a studiarne tutte le caratteristiche.
La scheda di **Definizione dati** consente di gestire una specie di extradata del workflow, per fare in modo che l’utente possa salvare dei valori o dati nel workflow dell’oggetto in gestione.  

### Campi della Definizione dei dati

**Codice**: codice del tipo di dato  
**Nome**: nome del tipo di dato  
**Nome localizzato**: nome nella lingua utente (sarà visualizzato nella form che richiede di valorizzare il dato)  
**Tipo Semplice**: la tipologia di dato richiesto, quando non è tabellato  
**Tipo di oggetto**: se il dato richiesto è legato ad un oggetto/tabella dal quale l’utente potrà scegliere il valore (combo di drop down)  
**Valore predefinito**: valore di default del dato  
**Descrizione**: è la descrizione del valore predefinito, quando è di tipo tabellato. Si vede solo quando il navigatore oggetti è aperto da Fluentis, l’eseguibile Arm non ‘vede’ il dato degli oggetti Fluentis  
**Lista di controllo**: per visualizzare il dato con il pulsante all’estrema destra del workflow, quando questo è nelle ‘Domande’ previste per la transizione  
Il valore è visibile: (?)  
**Background color**: per visualizzazione video  
**Colore testo**: per visualizzazione video  
**Ordine**: ordine di visibilità del dato  
Questo tipo di dato lo si può richiamare all’interno della transizione, nel tab ‘Domanda’, in modo da richiedere all’utente la compilazione/selezione di un valore all’interno di una transizione.  
Il tipo di dato impostato/selezionato viene salvato nelle tabelle di log del workflow.


## Stati

Aggiungendo un **Nuovo stato** e selezionandolo vedremo i seguenti campi:

![](/img/fluentis/workflow-management/status.png)

**Codice**: deve essere univoco nel workflow  
**Nome**: nome dello stato che appare poi a video (se non c’è allora appare il Codice)  
**Ordine**: l’ordine con il quale gli stati sono poi visualizzati nella form di gestione del workflow  
**Disabilitato**: se lo stato (e quindi le transizioni verso di esso) non deve essere visibile  
**Diritto visualizza**: se l’utente non ha il diritto, allora questo stato non è visibile in Fluentis  
**Diritto modifica**: se l’utente non ha il diritto, allora non può cambiare lo stato  
**Diritto cancella**: non utilizzato  
**Tipo stato**: tipologia di appartenenza, non ha una gestione particolare  
**Colore di sfondo**: per la visualizzazione in Fluentis  
**Colore primo piano**: per la visualizzazione in Fluentis  

### Griglia Attività

Sono le attività previste nello stato selezionato, che possono essere facoltative o obbligatorie per poter passare ad un altro stato:

**Tipo attività**: visualizza la lista delle attività (globali + specifiche dell’oggetto)  
**Tipo attività successiva**: indica qual è l’attività successiva da eseguire  
**Obbligatorio**: se è obbligatorio appare un ! rosso a video e l’attività deve essere completata per andare allo stato successivo  
**Crea attività per la prossima attività**: crea una attività (nelle attività Fluentis) per il ‘Tipo attività successiva’  
**Evidenziato**: visualizza un bordo particolare a video  
**Background color**: per la visualizzazione a video  
**Colore testo**: per la visualizzazione a video  


## Transizioni

Le transizioni sono i collegamenti che creano la logica di flusso dei vari stati e possono eseguire particolari attività.

![](/img/fluentis/workflow-management/transitions.png)

### Campi della Transazione

**Transizione**: questo flag è attivo di default appena si crea la transizione, consente di definire una nuova transizione nel tab in basso.   
**Transizione incorporata**: per richiamare una transizione già creata (se si toglie il flag dal precedente allora si attiva questo combo).  
**Da stato / a stato**: visualizza il collegamento tra i due stati.  
**Priorità**: l’ordine di esecuzione delle transizioni.  
**Disabilitato**: se la transizione è disabilitata.  
**Automatico**: la transizione viene eseguita automaticamente. Se ad esempio questa transizione è associata sia al passaggio da stato A a B e tra B e C, se questo flag è attivo allora l’esecuzione della transizione tra A e B farà scatenare automaticamente anche la transizione tra B e C.  
**Abilita script automatico**: abilita la parte di scripting (Claudio). Eseguendo la transizione, lo script viene eseguito prima dei vari task della transizione.  

#### TAB CONFIGURAZIONE ATTIVITA’

Mostra le attività dello stato di partenza della transizione:

**Stato attività**: è il tipo di attività da richiedere nel corso della transizione  
**Obbligatorio**: per rendere obbligatoria l’attività sullo stato solo quando si esegue questa transizione  
**Avviare la transizione automatica**: implementazione da completare  

#### TAB SCRIPT AUTOMATICO

*Sotto tab Definizioni*   
**Versione**: versione dello script  
**Data rilascio**: data di rilascio dello script  
**Abilita debug**: se lo script può essere eseguito in debug  

*sotto tab Referenze script*  
**Path**: path delle referenze  
**Nome file**: nome del file  

*sotto tab Generale*  
campi descrittivi dello script  

#### TAB/FORM TRANSIZIONE  
**Codice**: codice univoco della transizione  
**Nome/Nome localizzato**: nome e nome localizzato della transizione  
**Descrizione/Descrizione localizzato**: descrizione e descrizione localizzata della transizione  
**Richiedi la motivazione**: per eseguire la transizione viene richiesta una motivazione  
**Richiedere la password**: per eseguire la transizione viene richiesta la password utente  
**Richiedere nota**: per eseguire la transizione viene richiesta una nota  
**Disabilitato**: se la transizione è disabilitata  

GRIGLIA Accettazione  
**Accetta Condizione**: condizione di accettazione per eseguire la transizione  
**Diritto**: diritto utente per poter eseguire la transizione  
**Messaggio**: messaggio che viene eseguito  
**Messaggio di errore**: messaggio di errore (se la condizione non è soddisfatta?)  
**Attiva script**: fa attivare lo scripting della transizione. Lo script viene eseguito prima delle azioni definite nella transizione stessa.  

GRIGLIA Azione  
**Codice**: codice dell’azione  
**Ordine**: ordine di esecuzione dell’azione  
**Tipo Azione**: tipologia di azione. È un nome libero con una lista di form di definizione (che appaiono al di sotto della griglia dell’azione)  
**Condizione ignora azione**: condizione per ignorare l’azione [^1]  
**Asincrono**: campo da cancellare, le transizioni sono sempre eseguite in modo asincrono  
**Disabilitato**: azione disabilitata  

GRIGLIA Domanda  
**Definizione dei dati**: si seleziona il tipo di dato (una specie di extradata del workflow, definito nel tab “Definizione dei dati”) da richiedere all’utente  
**Ordine**: ordine di visualizzazione  
**Obbligatorio**: se è obbligatorio compilarlo per poter completare la transizione  

[^1]: Documentazione DevExpress: [Criteria Language Syntax | Cross-Platform Class Library | DevExpress Documentation](https://docs.devexpress.com/CoreLibraries/4928/devexpress-data-library/criteria-language-syntax#collection-elements-verification)  