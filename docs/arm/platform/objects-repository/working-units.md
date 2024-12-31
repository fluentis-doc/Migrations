---
title: Unità di lavoro
sidebar_position: 2
---

La form di gestione dell'Unità di lavoro ci permette di impostare e gestire la nostra cartella di lavoro, ovvero quella in cui verranno convogliate le 
personalizzazioni che prevederanno del codice custom.

![directoryscheme](/img/fluentis/objects-repository/working-units/working-units.png)

La form **Working Unit** è una filter form composta da filtro, griglia dei risultati più griglia di dettaglio e ribbon bar con le azioni consentite all'utente.

## Filtro
* **Versione**
* **Cliente**
* **Cartella**

## Griglia Working units

| <div style={{ width:'150px' }}>***Griglia dei risultati*** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Versione_    |   Versione di Fluentis installata                                                      |
| _Cartella_    |   Indica il percorso della cartella di compile                                         |
| _Cliente_     |   Prefisso del cliente, utilizzato per identificare i progetti custom: è possibile aggiungerne uno attraverso _Apri form_ del menu contestuale, oppure tramite azione della form                    |

## Griglia Deploy

Selezionando la cartella di _compile_ sarà mostrata la corrispondente cartella di _deploy_, se già inserita.

| <div style={{ width:'150px' }}>***Griglia dei risultati*** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Server_    |   Server su cui è installata la parte server di Fluentis                                                      |
| _Pool di applicazioni_    |   Nome del pool su cui gira l'istanza server di Fluentis                                         |
| _Cartella IIS_     |   Cartella su cui si trovano le dll e servizi di Fluentis                     |
| _Percorso fisico_     | Percorso fisico della cartella di deploy|
| _Sviluppo_ | Indica se la cartella di deploy corrente è di sviluppo e quindi è possibile rilasciare le personalizzazioni|

## Azioni
* **Ricerca:** per applicare le regole di filtro e caricare le working units disponibili.
* **Elimina:** per eliminare un elemento selezionato.
* **Prefisso Clienti:** per accedere alla filter result form dei prefissi clienti.
* **Esegui tutti:** per eseguire tutti gli step di compilazione nell'ordine e descritti qua sotto:
    - **Compila Business e WebApi:** compila tutti i sorgenti di Business Object, algoritmi e WebApi della cartella di compile 
    - **Pubblica sul cliente:** Pubblica nella cartella di deploy tutte le dll compilate lato server.
    - **Aggiorna modello WebApi:** Esegue l'aggiornamento delle proiezioni dei business object lato server e le ribalta nel client
    - **Compila Moduli client:** Compila tutti i sorgenti View e ViewModel presenti nei sorgerti della cartella compile
    - **Pubblica Moduli Client:** Pubblica tutte le dll compilate lato client nella cartella di deploy, questa voce attiverà il meccanismo di aggiornamento di tutti i client.