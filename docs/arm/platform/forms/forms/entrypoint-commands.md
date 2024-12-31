---
title: EntryPoint Commands
sidebar_position: 2
---

## Generale

La form degli entrypoint command è un'object form composta da un filtro, da una griglia di elementi e un riquadro di dettagli per l'elemento selezionato.<br/>

![entrypoint](/img/fluentis/forms/forms/entrypoint.png)

Gli entry point commands in Fluentis sono dei comandi usati principalmente per richiamare l'apertura di un contenuto, che sia una form, una dashboard, un sito web o altro ancora.

## Filtro

Il filtro deve essere compilato obbligatoriamente per visualizzare gli entrypoint, i campi *Schema Database* e *Schema Applicazione* vengono proposti di default, mentre l'area e il modulo bisognerà inserirli manualmente

## Griglia centrale

Nella griglia, una volta compilati i campi nel filtro, si troveranno tutti gli entrypoint del modulo selezionato.<br/>
Gli entrypoint sono identificati da **codice** e **descrizione**.
Esistono varie _tipologie di entrypoint_ e ognuno di essi puo avere associato anche un **diritto** per limitare l'usabilità.<br/>
Selezionando un entrypoint, sulla destra saranno mostrati i rispettivi parametri:

| <div style={{ width:'150px' }}>***Tipologia entrypoint*** </div> | Parametri per l'apertura | Descrizione parametri |
| -----------------------------------------|-------------------------------------------------------------|--------------|            
| _Chart_    |  Code   |    Codice grafico  |
| _ExternalApplication_    |  CommandLine   |  Codice di comando da lanciare nel cmd |
|                          |  Parameters    |   Parametri dell'applicativo  |
|                          |  WorkingFolder    |  Percorso applicativo  |
| _ExternalFile_    |  FilePath   |   Percorso File  |
|                          |   Verb   | Codice associativo della shell |
| _FluentisDashboard_    |  Code    |  Codice dashboard |
| _FluentisImportOnDemand_    |  Code    |  Codice importazione  |  
| _Form Entrypoint_    |  Form Code    |    Codice form    |
|                      |  Module Code   |   Modulo form   |
|                      |  Parameters    |   Parametri da passare in apertura    |
|                      |    Context     |   Contesto form   |
| _Form Editor_    |  Area    | Area form |
|                   |    Module   | Modulo form |
|                   |   Form    |   Codice Form   |
| _Olap_    |   CubeCode   |    Codice cubo olap    |
| _Pivot grid_    |   Code   |   Codice Cruscotto   |
| _WebApp_    |   NavUrl   |  Url di reindirizzamento  |

<!--| _IdealeDll_    |   Name   |   |
|                |  DllID  |
|               |    Code   |
|                |     TABLE_NAME     |-->
<!--| _MSAccessDatabase_    |   CmdLine   |
|                       |    Parameters   |
|                       |    Loader   |
|                       |    Path   |
|                       |    Code   |-->



<!--| _SqlQueryResult_    |   Code   |
|                       |    Context   |
|                       |    output (Grid/Spreadsheet)   |-->






