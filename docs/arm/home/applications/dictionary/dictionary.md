---
title: Dizionario
sidebar_position: 1
---
## Filter Form
In questa procedura sono state definite tutte le voci, etichette, testi fissi, utilizzati nelle form delle applicazioni. Per ogni voce, è stata definita la relativa traduzione in tutte le lingue abilitate all’interno della form Lingue di ARM. La procedura permette inoltre una ricerca tra le voci già inserite.

La form **Dizionario** è una filter form con filtro, griglia dei risultati e ribbon bar con le azioni consentite all'utente.

![dizionariofilterform](/img/home/dizionario/dictionary.png)

### Filtro
* **Lingua di partenza:** selezione a tendina per definire la lingua della voce sorgente da ricercare.
* **Chiave:** chiave master della traduzione. A questa chiave vengono riferite tutte le traduzioni di una particolare voce. Questa chiave è indipendente dalle selezioni a tendina dei filtri.
* **Da filtro:** stringa per ricercare una voce o parte di essa all’interno del dizionario, a seconda della lingua specificata nel filtro Source Language.
* **Lingua di destinazione:** selezione a tendina per definire la lingua della voce destinazione da ricercare.
* **A filtro:** stringa per ricercare una voce o parte di essa all’interno del dizionario a seconda della lingua specificata nel filtro Destination Language.
* **Schema di applicazione:** selezione a tendina per definire l'applicazione all'interno della quale effettuare la ricerca.

Per poter effettuare una ricerca ristretta è necessario inserire i dati almeno in Chiave oppure in Da filtro e selezionare il filtro in Lingua di partenza.

### Griglia dei risultati
* **Dal contenuto:** verrà visualizzata la traduzione delle voci/chiavi ricercate nella lingua specificata in Source Language.

Le informazioni rappresentate in griglia sono ulteriormente dettagliate con la selezione del row details (+). In questo modo è possibile visualizzare le relative traduzioni divise per lingua. In questa griglia le informazioni sono di sola lettura nel caso in cui l’entry kind della chiave sia impostata come standard.
Nel caso di inserimento di una nuova voce, la traduzione per ogni lingua viene facilitata dall’interrogazione ai provider di ricerca più comunemente utilizzati.
Entrando nella modifica di una riga del dizionario, è possibile visualizzare e gestire le traduzioni per ogni lingua definita in ARM. Sono modificabili solamente le Chiavi master che hanno la Natura diversa da Standard.

La form **Dizionario** per l'inserimento di una nuova voce è costituita da una griglia centrale che contiene la lista delle traduzioni, una serie di informazioni aggiuntive poste esternamente alla griglia e una ribbon bar con le azioni consentite all'utente.

## Object Form
![dizionariofilterform](/img/home/dizionario/dictionaryedit.png)
### Griglia Traduzioni
* **Lingua:** indica la lingua a cui viene associata la traduzione dell voce del dizionario.
* **Contenuto:** indica la traduzione che andiamo ad applicare per la lingua selezionata.
* **Note:** possibile nota aggiuntiva.
* **Tradurre:** permette di selezionare un servizio per la traduzione automatica e tramite pulsante di ottenere la traduzione.

Nella parte finale della form troviamo altre informazioni aggiuntive:
* **Note:** alla chiave master è possibile associare una nota descrittiva.
* **Lunghezza massima:** numero massimo di caratteri che possono essere specificati per ogni traduzione.
* **Schema di applicazione:** consente di specificare una chiave univoca con cui identificare la voce da tradurre dentro Fluentis.
