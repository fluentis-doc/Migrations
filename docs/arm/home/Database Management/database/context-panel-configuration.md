---
title: Configurazione Pannelli Contestuali
sidebar_position: 6
---

La form **Configurazione Pannelli Contestuali** permette di gestire la parametrizzazione dei **Context Panel** visualizzabili nell'applicativo Fluentis. I Context Panel, accessibili dal tab sulla spalla destra di Fluentis (vedi immagine), sono delle form o delle dashboard che mostreranno informazioni aggiuntive rispetto all'oggetto selezionato.

![contextPanelFluentis](/img/home/databaseSchemas/database/context-panel-fluentis.png)

In ARM la form **Configurazione Pannelli Contestuali** è una filter form costituita da filtro, griglia dei risultati e un ribbon bar con le azioni consentite all'utente.

![contextPanelForm](/img/home/databaseSchemas/database/context-panel-form.png)


### Filtro
* **Oggetto business**
* **Form**

### Griglia dei risultati
* **Oggetto business:** l'oggetto a cui è collegato il pannello contestuale.
* **Codice localizzato:** nome descrittivo recuperato dal dizionario.
* **Nome:** codice univoco associato all'oggetto da utilizzare al posto del codice localizzato.
* **Form:** nome della form mostrata nel pannello contestuale.
* **Dashboard:** nome della dashboard mostrata nel pannello contestuale (campo alternativo a Form)
* **Stampa:**

### Azioni
* **Ricerca:** per ricercare secondo i filtri impostati i pannelli contestuali disponibili.
* **Nuovo:** per creare un nuovo pannello contestuale.
* **Modifica:** per modificare il record selezionato.
* **Visualizza:** per visualizzare in modalità read only i dettagli relativi al record selezionato.
* **Elimina:** per eliminare il record selezionato.

Le azioni **Nuovo/Modifica/Visualizza** e il doppio click sulla riga selezionata, portano all'apertura dell'object form di dettaglio **Configurazione Pannelli Contestuali** che permette di parametrizzare tutti i dettagli del singolo pannello contestuale.

![contextPanel](/img/home/databaseSchemas/database/context-panel-config.png)

L'object form **Configurazione Pannelli Contestuali** è divisa in due parti: quella in alto contiene tutti i campi di testata, mentre la parte sottostante mostra la lista dei legami sulla sinistra e il dettaglio form/definizione legame sulla destra.

### Campi di testata
* **Oggetto business:** l'oggetto a cui si vuole collegare il pannello contestuale.
* **Codice localizzato:** nome descrittivo recuperato dal dizionario.
* **Nome:** codice univoco associato all'oggetto da utilizzare al posto del codice localizzato.
* **Diritto:** diritto collegato al Context Panel.
* **Tipo:** scegliere tra Form, Dashboard o Stampa.
* **Form/Dashboard/Stampa:** la Form, Dashboard o Stampa da collegare al pannello contestuale.
* **Definizione:** i parametri in ingresso al Data Source.
* **Mostra in Context Menu:**
* **Mostra in Pannello Contestuale:** mostra/nasconde il Context Panel.
* **Immagine:** immagine da assegnare al Context Panel.
* **Contesto form:** da utilizzare per visualizzare il Context Panel solo in una determinata form e non per tutte le occorrenze dell'oggetto. Inserire quindi il campo Help context della form in questione.
* **Ordine:** ordine in cui comparirà il Context Panel, in caso ce ne sia più di uno.
* **Definizione legame predefinita:**

### Legami
* **Proprietà:**
* **Form:**
* **Definizione legame:**

### Azioni
* **Salva:** per salvare le modifiche fatte o confermare la creazione del nuovo pannello contestuale.

