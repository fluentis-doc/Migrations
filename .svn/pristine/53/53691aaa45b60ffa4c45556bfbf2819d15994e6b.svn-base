---
title: Snapshots
sidebar_position: 1
---

In questo gruppo abbiamo tutte le operazione necessarie alla realizzazione di una fotografia del DB con tutte le informazioni in esso contenute, al fine di generare un pacchetto con le differenze e spostare così le modifiche da un ambiente di sviluppo a uno di test/prod.

![snapshot](/img/home/customDataManagement/snapshot.PNG)

La form **Snapshots** è una filter form con un filtro, una griglia dei risultati e una ribbon bar con le azioni consentite all'utente.

**Filtro**
* **Da data/A data:** per filtrare gli snapshot effettuati in un preciso intervallo temporale.
* **Operatore:** per filtrare gli snapshot effettuati da uno specifico utente.

**Griglia dei risultati**
* **Id:** identificativo univoco dello snapshot.
* **Data:** data in cui è stato effettuato.
* **Operatore:** utente connesso ad Arm che ha effettuato lo snapshot.
* **Informazioni:** dettagli aggiuntivi che descrivono lo snapshot.
* **Descrizione:** descrizione inserita in fase di creazione.

**Azioni**
* **Ricerca:** per applicare le regole di filtro e caricare la lista degli snapshot disponibili.
* **Nuovo:** per creare un nuovo snapshot.
* **Cancella:** per eliminare lo snapshot selezionato.
* **Differenza:** apre un popup che permette di selezionare 2 snapshot per generare il file diff contenete gli script che consentiranno di migrare le modifiche fatte.

Il pulsante **Nuovo** apre un popup che permette di inserire la descrizione dello snapshot che si sta andando a creare, le restanti informazioni verranno inserite in automatico.

Il pulsante **Differenza** apre un popup che permettere di selezionare lo snapshot inziale e lo snapshot finale, ovvero i 2 intervalli temporali che devono essere contenute nel file delle differenze. Il file delle differenze è un file zip autogenerato che contiene tutti gli script necessari a migrare le modifiche fatte tra i 2 snapshot selezionati E' possibile anche selezionare gli snapshot al contrario per ripristinare una situazione precedente che è stata alterata in modo errato. Il flag **Omettere progetti WebApi model**, permette di escludere i WebApi model dal file delle differenze.
