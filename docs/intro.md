---
title: Application Resource Manager - Overview
---

L'Application Resource Manager, di seguito anche 'Arm', è un'applicativo che fa parte della Suite Fluentis, e si tratta del principale strumento amministrativo di Fluentis ERP.  

Arm consente infatti sia la configurazione e la parametrizzazione degli utenti a livello di ruoli, diritti, restrizioni, operazioni sia le personalizzazioni tramite codice C# custom.  
L'applicativo Arm non è personalizzabile e/o modificabile dagli utenti, e ogni eventuale modifica dell'applicativo verrà distribuita dalla Società Fluentis S.r.l. tramite Release o patch che potranno essere installate tramite il Fluentis Live Update.  

Come per il prodotto Fluentis ERP anche Arm è un applicativo di tipo client / server sviluppato con la tecnologia **Microsoft Windows Presentation Foundation** (WPF), attraverso il pattern architetturale Model-View-ViewModel (MVVM) che garantisce la separazione tra le Classi (Model), le Viste (View) e le logiche di business (View-Model).

L'applicativo Arm è composto da:

* Un database 'Arm' dedicato e caricato sull'istanza MSSQL dedicata alla suite Fluentis che può essere ospitata su server basato su distribuzione Linux con o senza Docker Engine oppure server Windows.
* Una cartella di pubblicazione che contiene le dll necessarie al funzionamento della parte server.
* Nel caso di installazioni su server Windows un Application Pool dedicato con relativa app su Web server IIS, (e nel caso di installazione su server basato su distribuzione Linux con Docker un container dedicato con web-server nginx).
* Un Client per poter accedere all'istanza server Arm tramite il login.

![alt text](image.png)

Per tutti i dettagli relativi all'installazione dell'**Application Resource Manager**  si rimanda alla documentazione 'Fluentis Live Update Installation' al seguente [LINK](https://docs.fluentis.com/Advanced/FluentisLiveUpdate/).  


