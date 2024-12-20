---
title: Società
sidebar_position: 1
---

![alt text](../../../static/images/20241204101732.png)




Il medesimo sistema gestionale Fluentis ERP permette di lavorare con più **Società**, ognuna del quale avrà un certo numero di **Divisioni**.
La tabella a DB dove vengono salvate le società è denominata Fluentis.SH_Companies ed è presente sul DB Fluentis.  
Di default Società e Divisione sono già impostate durante la fase d'installazione tramite il Fluentis Live Update.  

![](../../../static/images/20241216163803.png)

La form si compone così come segue.   

**Filtro**
* **Nome**
* **Descrizione**

**Griglia dei risultati**
* **Nome:** Codice numerico identificativo della Società.
* **Descrizione:** Ragione Sociale della Società. 
* **Predefinito:** Checkbox che identifica che verrà caricata di default all'avvio di fluentis.

Le informazioni rappresentate in griglia relativamente ad ogni società, sono ulteriormente dettagliate attraverso la griglia inferiore che visualizza l’elenco delle divisioni per ciascuna Società.  

* **Nome:** Codice numerico identificativo della divisione.
* **Descrizione:** Descrizione della divisione.
* **Predefinito:** Checkbox che identifica la divisione di default per la società.

**Azioni**
* **Ricerca:** per applicare le regole di filtro e caricare la lista delle società disponibili.
* **Elimina:** per eliminare la società selezionata.


