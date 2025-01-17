---
id: CustomOneByOne
sidebar_position: 2
---

# Test Migrated Custom 2021 to 2023
Come anticipato in precedenza, nella pagina web [***Link***](docs/2021/home/CustomEnvironmentMigrationFrom2021To2023.md) si spiega che il comportamento relativo alla migrazione può variare a seconda del tipo di personalizzazione.  


## Overview
Di seguito si riporta uno scherma panoramico il quale riassume l'esito della migrazione rispetto alle varie tipologie di personalizzazioni.  

![](../../../static/images/20250117111613.png)


![](../../../static/images/20250117111634.png)  
        *Legenda*

### Utenti, Ruoli, Diritti, Restrizioni, Operazioni
Le parametrizzazioni relative a questi elementi vengono automaticamente migrate da Fluentis2021 a Fluentis2023.      

### Voci di dizionario, Regole di validazione, Regole di ricerca e generazione titoli  
Le parametrizzazioni relative a questi elementi vengono automaticamente migrate da Fluentis2021 a Fluentis2023.  

### Profili
I profili non possono essere migrati da Fluentis 2021 a Fluentis 2023 e dovranno essere ricreati manualmente sull'ambiente di destinazione.  
Non rimane traccia dei vecchi profili nell'ambiente di destinazione.  

### Ribbon menu e pulsanti  
I ribbon menu e il pulsanti custom creati in Fluentis 2021 migrano correttamente; tuttavia, è fortemente raccomandato procedere ad un ricalcolo del Ribbon Menu manuale. Per maggiori approfondimenti si faccia riferimento alla documentazione di Linea di Arm.  

### SQL Query e Datasource  
Le SQL Query ed i Datasource migrano correttamente in Fluentis 2023.  

### Extra-Data
Per quanto concerne gli* Extra-data*, che possono essere basati su n. 3 tipologie diverse, e più nello specifico:  
* Extra-data semplici.  
* Extra-data basati su oggetti.  
* Extra-data basati su un datasource.

La migrazione da Fluentis2021 a Fluentis2023 avviene correttamente per tutti i tre tipi di Extra-data.  

### Report e Dashboard
Le **dashboard** e i **report**, creati con il Report Designer, migrano correttamente.  

### Switchboard (Cruscotti)
Le Switchboard create in Fluentis2021 migrano correttamente in Fluentis2023. Tuttavia, le Viste SQL caricate sulla relativa istanza MSSQL, <ins> ***devono essere riportate manualmente sul database di destinazione*** </ins>.  Dopo aver riportato la StoredProcedure e la Vista SQL su cui si basa è fortemente raccomandato eseguire un ricalcolo del pulsanti del Ribbon Menu.  

### Workflow
Il Workflow creati in Fluentis2021 vengono migrati automaticamente in Fluentis2023;tuttavia, eventuali Kanban non sono oggetto di migrazione.   

### Context Panel
Per ciò che concerne i pannelli contestuali, la migrazione da Fluentis2021 a Fluentis2023 avviene correttamente.   

### Diagrammi
I diagrammi migrano correttamente da Fluentis2021 a Fluentis2023.

### Supervisor
Tutte le parametrizzazioni concernenti l'applicativo <ins> *Supervisor* </ins> migrano automaticamente.

### BizLink
Tutte le parametrizzazioni concernenti l'applicativo <ins> *BizLink* </ins> migrano automaticamente.

### Scripting
Gli <ins> Script </ins>, applicabili nei diversi ambiti di Fluentis, come ad esempio: Server-Side, Client-Side, Workflow, BizLink e Supervisor, migrano automaticamente. Tuttavia, occorre <ins> *abilitare lo scripting lato server nell'ambiente di destinazione* </ins>. Si rimanda all'apposito training [Link](https://training.fluentis.com/course/view.php?id=15&section=11). 

### WebApi
Le parametrizzazioni per le WebApi in Arm 2021 vengono correttamente migrate in Fluentis 2023, sia i controller che i formati, ma non viene migrata la lista dei <ins> metodi. </ins>.  

