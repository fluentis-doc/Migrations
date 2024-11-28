---
title: Forms
sidebar_position: 1
---

In questa form vengono gestite tutte le informazioni proprie delle form dell’applicazione, dalle sue proprietà alla ribbon bar.
Per poter visualizzare tali form con le relative proprietà, l’utente deve selezionare la schema del database, la schema di applicazione, l’area ed il modulo di interesse.
La form di gestione è strutturata sulla sinistra con una visualizzazione ad albero nella quale vengono rappresentate tutte le form del modulo. Nel caso in cui per una form ci siano delle forms figlie (definite in tab da codice), tale struttura viene rappresentata con la visualizzazione padre-figlio. E’ sufficiente selezionare la form padre per vedere le form figlie.

La form **Forms** è una filter form costituita da un filtro (che a differenza delle filter form standard non è legato all'azione di ricerca, ma filtra mano a mano che i campi vengono compilati), una griglia dei risultati con un pannello di dettaglio con diversi tab che consento di gestire le informazioni di ogni riga selezionata e una ribbon bar con tutte le azione eseguibili dall'utente.

## Filtro
* **Schema del database**
* **Area**
* **Codice**
* **Schema di applicazione**
* **Modulo**

**Griglia dei risultati**
* **Form:** contiene la lista delle form disponibili secondo i criteri di filtro, ogni elemento è poi espandibile secondo l'alberatura di dettaglio per identificare le form figlie contenute all'interno.

Il pannello di dettaglio contiene suddivisi in 4 tab tutti gli elementi da definire in merito alla creazione di una form.

## Generale
Il tab **Generale** sono evidenziate le informazioni principali:
* **Codice:** nome univoco della form.
* **Help url site:**
* **Titolo:** nome descrittivo recuperato dal dizionario.
* **Icona:** icona associata alla form.
* **Help context:**
* **Griglia per la definizione di parametri variabili in base al contesto:**
    - **Titolo:** nome alternativo per la form in base al contesto.
    - **Icona:** icona alternativa per la form in base al contesto.
    - **Contesto:** contesto che identifica una particolare situazione funzionale e definisce una serie di dettagli della form diversi rispetto allo standard.
    - **Piattaforma:** piattaforma per cui viene definito il contesto (SL/WPF/Xamarin)


## Comandi
Il tab **Comandi** permette di definire tutti i comandi custom che devono essere disponibili all'interno della form e che possono essere poi associati a specifici pulsanti per essere eseguiti.

Il tab contiene una griglia che può essere compilata direttamente in riga per inserire un nuovo comando:
* **Comando:** nome univoco del comando per la form che dovrà essere poi utilizzato per associare il comando all'azione da compiere.
* **Nome:** nome descrittivo recuperato dal dizionario.
* **Descrizione:** recuperata da dizionario, descrive lo scopo del comando.
* **Diritto:** permette di associare un diritto precedentemente creato per quel tipo di comando, al comando specifico.

## Ribbon
Il tab **Ribbon** permette di personalizzare il ribbon esistente o di crearne uno custom.

Il tab contiene una griglia che può essere compilata direttamente in riga per inserire un nuovo ribbon e permette di visualizzare direttamente l'aspetto della ribbon e tutti i pulsanti in essa contenuti:
* **Nome:** nome univoco nella form da dare alla ribbon.
* **Contesto:** il contesto perfette di definire ribbon bar con funzioni diverse in base al contesto funzionale definito.
* **Natura:** permette di distinguere ribbon standard da ribbon personalizzate.
* **Piattaforma:** piattaforma per cui viene definito il ribbon (SL/WPF/Xamarin).

## Stampe
Il tab **stampe** è costituito da un radio buttons che permette di scegliere tra **Generico/Utente/Ruolo** e una griglia dei risultati che permette di editare direttamente i valori.


**Griglia dei risultati**
* **Report:**
* **Default:**
* **Order:**
* **Context:**

## Azioni
* **Salva:** permette di salvare le modifiche fatte o la nuova form che si sta creando.
* **Nuovo:** permette di procedere alla creazione di una nuova form.
* **Cancella:** permette di cancellare la form selezionata. La rimozione grafica della voce cancellata avviene solo dopo refresh grafico.
* **Nuovo comando:** permette di inserire un nuovo comando nel tab **Comandi**.
* **Cancella comando:** permette di cancellare un comando selezionato nella griglia dei risultati del tab **Comandi**.
* **Nuova Ribbon:** apre la form che permette di creare un nuovo ribbon.
* **Modifica Ribbon:** apre form che permette di editare le proprietà del ribbon selezionato nella griglia dei risultati del tab **Ribbon**.
* **Cancellare Ribbon:** permette di eliminare il ribbon selezionato nella griglia dei risultati del tab **Ribbon**.


La form **Ribbon** permette di creare/modificare un ribbon bar in tutti i suoi componenti.
La form è costituita dalla rappresentazione grafica del ribbon bar che mostra tutti i pulsanti che verranno visualizzati, la Treeview con la struttura di tutto il ribbon organizzata in tab/group/pulsanti sulla sinistra e sulla destra un doppio elemento: tab **Generale/Eccezione** e una griglia con la lista degli elementi di default gestibili nel ribbon.

**TreeView**
Contiene tutta la struttura del ribbon fino al singolo pulsante, permette di selezionare ogni elemento e di gestirne le proprietà, oltre che di organizzare la struttura della ribbon gestendo Tab/Group/StackPanel.

**Griglia elementi di default**
Permette di aggiungere/rimuovere gruppi di pulsanti previsti per le funzioni di default al ribbon, inoltre permette d gestirne l'ordinamento.

**Tab Generale**
Il tab **Generale** permette di impostare le proprietà dell'elemento selezionato nella Treeview. L'elemento fondamentale che andiamo a parametrizzare è il **Button**.

* **Nome:** è il nome univoco del bottone nella ribbon e viene recuperato dal dizionario.
* **Descrizione:** è la descrizione aggiuntiva che si vuole associare la bottone e viene recuperata dal dizionario.
* **Identifier:**
* **Tipo di comando:**
    - **Comando form:** è il pulsante tipico della ribbon bar della form a cui viene poi associato un command definito sulla form stessa.
    - **Comando EntryPoint:** è il pulsante che viene usato come entrypoint per aprire una nuova form, solitamente viene utilizzato per i pulsanti posti sul ribbon form dei menu Fluentis.
    - **Comando template:** è il pulsante utilizzato per generare i report.
* **Comando:** deve contenere il comando creato nel tab **Comandi** e che deve essere eseguito alla pressione del pulsante.
* **Acceleratore toolbar:** permette di associare l'acceleratore con i tasti di scelta rapida creato nella form **Acceleratori**.
* **Dimensione:** permette di scegliere la dimensione del pulsante **Grande/Medio/Piccolo**.
* **Immagine:** permette di associare un icona al pulsante.

In base al tipo comando selezionato le opzioni disponibili possono variare:
* **Comando form:** è quello impostato di default in questo contesto e presenta le opzioni descritte sopra.
* **Comando EntryPoint:** presenta una serie di opzioni aggiuntive che verranno descritte nella sezione dedicata al ribbon bar dei menu Fluentis.
* **Comando template:** presenta un sottoinsieme delle proprietà descritte sopra.

**Tab Eccezione**
Il tab **Eccezione** permette di definire delle eccezioni per il pulsante selezionato definibili per ruolo e nazioni.


Il tab presenta due griglie:
* **Ruoli esclusi**
    - **Ruolo**
    - **Utilizza include**
* **Mostra per queste nazioni**
    - **Nazione**

