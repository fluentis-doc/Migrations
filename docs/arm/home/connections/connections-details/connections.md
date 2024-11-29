---
title: Connessioni
sidebar_position: 1
---
In questo gruppo vengono mostrati i parametri di connessione ai database di SQL Server. A tali database verranno poi definiti gli accessi alle varie applicazioni.

La form **Connessioni** è costituita da un filtro, un corpo centrale con griglia dei risultati sulla destra e griglia di dettagli sulla destra e una serie di informazioni valide per ogni dettaglio selezionato, poste in un expander in coda alla form e una ribbon bar con le azione a disposizione dell'utente.

**Filtro**
* **Codice**
* **Server**

**Griglia dei risultati**
* **Codice:** codice alfanumerico univoco da assegnare alla connessione.
* **Server:** nome dell’istanza MSSQL.
* **Database:** nome del database caricato sull'istanza MSSQL.
* **Utente:** utente sql server con diritti di accesso al database.
* **Password:** password dell'utente.


Oltre alla griglia dei risultati, sulla sinistra, è presente una griglia di dettaglio **Service Users**, utile per effettuare chiamate WCF all'esterno di Fluentis. Per esempio è possibile utilizzare i Service Users per loggarsi su eventuali server stampa esterni o quando si chiamano delle Web API che necessitano un'utenza.
* **Nome utente**
* **Password**
* **Nome login Fluentis**
* **Disabilitato**

L'expander finale **Proprietà** contiene una serie di proprietà aggiuntive per ogni record di connessione che viene selezionato:
* **Fluentis Server Url:** si tratta dell'indirizzo (endpoint) relativo al cluster di Fluentis. 
* **Utente Aggiornamento Fluentis:** nome utente da utilizzare per aggiornare l’applicativo.
* **Password Aggiornamento Fluentis:** password associata all’utente per autorizzare aggiornamento.
* **Usa utente del pool per Query Studio:** Se questo flag è ‘True’, le query verranno eseguite utilizzando la stessa connection string come Fluentis (utente sql/password definite nella riga della connessione).
* **Utente SQL:** utente utilizzato da Fluentis per eseguire le query su DB MSSQL.
* **Password SQL:** password dell’utente MSSQL utilizzato da Fluentis per eseguire le query.

**Azioni**
* **Ricerca:** per applicare le regole di filtro e caricare la lista delle connessioni disponibili.
* **Salva:** per salvare tutte le modifiche effettuate.

