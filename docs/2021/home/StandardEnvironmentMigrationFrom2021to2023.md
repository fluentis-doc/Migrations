---
id: Standard2021
sidebar_position: 0
---
# Standard Environment Migration From 2021 to 2023  

### How It Works

Come già accennato in precedenza nell'**[Overview](/docs/intro)**, della presente documentazione, i requisiti indispensabili per poter eseguire correttamente la migrazione da Fluentis 2021 a Fluentis 2023, sono i seguenti:  
* disporre di un ambiente 'ponte' Fluentis 2023 completamente standard che fungerà da template per la migrazione che deve essere aggiornato all'ultima patch e release.  
* disporre dell'ambiente da **migrare** (cosiddetto ambiente d'origine) che deve essere aggiornato all'ultima patch e release.   
* disporre di un'istanza del motore database MSSQL caricata su server basato su distribuzione Linux oppure su s.o. Windows. L'istanza del motore database MSSQL può essere la medesima che ospita il database origine oppure essere distinta, a condizione che sia inclusa nella medesima rete aziendale.  

Accediamo ad **Arm 2023**, e dal menu **Home** selezioniamo la voce **Database** così come mostrato in figura.  

![](../../../static/images/20250115155614.png)  

Una volta entrati dentro, la **Form** si presenta così come segue:   
### Ribbon Menu
Il Ribbon menu della form consente all'utente di effettuare determinate operazioni, in particolare:
* *Search*: consente all'utente di eseguire una **ricerca** mirata di gruppi, tabelle e colonne.  
* *Next*: /
* *Previous*: /
* *Show Only Custom Data*:
* *toggle View*: permette di effettuare uno switch di view tra elementi standard ed elementi custom.
* *Fluentis2023 database migration check*: permette di eseguire un controllo preliminare circa la base dati da migrare.   
* *Fluentis2023 database migration*: permette di eseguire la migrazione vera e propria specificando base dati d'origine e base dati di destinazione.  
* *Import Arm Data*: /
* *Convert Script*: /
* *Convert Script files*: /

### Filtro Standard

* Il filtro standard 















### Result Widget
