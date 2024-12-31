---
title: Server Stampa
sidebar_position: 2
---

## Configurazione Stampe Xamarin WMS

La stampa dei report legati al WMS Mobile, segue la configurazione al momento dedicata a tutte le stampe Xamarin, radicalmente diversa da quella WPF. <br/>
Nel mondo WPF la stampa avviene dal client e si basa sulle stampanti configurate sul client.<br/>
Nel mondo Xamarin, non è previsto che ci siano stampanti configurate sul dispositivo, quindi la stampa viene gestita lato server.<br/>
Si aprono quindi due scenari:<br/>
- Il server applicativo di Fluentis, farà anche da server di stampa, quindi le stampanti configurate saranno tutte stampanti locali e la stampa potrà essere eseguita direttamente 

- Verranno utilizzati dei server di stampa remoti, quindi il documento da stampare verrà serializzato e poi gestito in una coda di stampa, in attesa che un servizio esterno, installato appunto sul server remoto effettui una chiamata per verificare la presenza di documenti da stampare.

Il servizio di stampa remota funzionerà su tutti i sistemi operativi Windows che supportano .NET 7, incluso Windows Server.

### Configurazione delle stampanti
La configurazione delle stampanti viene effettuata in ARM.<br/>
Menu Fluentis, Stampe, Server Stampa.

![Form](/img/fluentis/Reports/ServerReports/image001.png)

Se le stampanti fossero gestire direttamente dal server applicativo, dovremmo creare un server locale, selezionare la voce LOCAL e procedere a mappare la stampante nella griglia sottostante.<br/>
Se invece la stampante fosse gestita da un server remoto, dovremo prima configurare il server e poi aggiungere la stampante.<br/>
Per configurare il server dobbiamo riportare un **Codice** e una password indicata come **Segreto remoto**, ovvero un codice che dovrà essere riportato anche nel servizio che andremo ad installare sul server remoto.

![Grid Server Reports](/img/fluentis/Reports/ServerReports/image002.png)

Per configurare una stampante su un server, dovremo selezionare il server e nella griglia sottostante, inserire **Codice** e **Id stampante**.

![Server Side Printer](/img/fluentis/Reports/ServerReports/image003.png)

Id stampante è il codice identificativo che possiamo recuperare dal pannello proprietà della stampante.

![Printer Detail](/img/fluentis/Reports/ServerReports/image004.png)

Questo ci darà la possibilità di avere diversi server con diversi servizi che gireranno in modo indipendente.

### Configurazione report

Da Fluentis accediamo all’area **Strumenti, User Interface Wizard, Report Management**.<br/>
Espandiamo l’alberatura fino a identificare il report desiderato e selezioniamolo per poter parametrizzare Stampante server side e Operatore abilitati alla stampa del report.

![Printer Detail](/img/fluentis/Reports/ServerReports/image005.png)

La voce stampante server side permette di selezionare la stampante remota su cui stampare, mentre operatore permette di associare uno specifico operatore per quella stampante.<br/>
Questo consentirà di stampare lo stesso report su stampanti diverse in base all’operatore che lancerà la stampa.<br/>
Se per il report da stampare non esiste una configurazione dedicata all’utente corrente, verrà utilizzata l’eventuale stampante configurata senza utente associato.<br/>
Se anche questa non viene trovata, verrà cercata la stampante associata di default all’utente (questa opzione al momento in F2021 non è stata riportata sulla scheda utente, stanno verificando).<br/>
Se anche questa non viene trovata, su server windows, il sistema proverà ad utilizzare la stampante di default configurata sul server locale, mentre su server Linux non farà nulla.<br/>
Priorità delle parametrizzazioni:
1.	Utente e Stampante configurati sul report
2.	Stampante configurata sul report senza utente
3.	Stampante configurata di default sull’utente (in assenza di parametrizzazione sul report)
4.	Stampante di default sul server locale (solo server Windows)

### Configurazione servizio stampa remota

Come abbiamo detto, nel caso in cui sia previsto un server remoto per la gestione delle stampanti, su questo server deve essere installato un servizio **Fluentis Remote Printing**, che è possibile recuperare dall’area FTP sezione Product.<br/>
Il servizio, che come già anticipato necessita di server Windows, viene installato tramite un eseguibile che da accesso ad una procedura guidata.<br/>
In questa guida non abbiamo avuto modo di mostrare le schermate del servizio, poiché era già installato, dovrebbe comunque richiedere tutte le parametrizzazioni necessarie a generare il file config che andremo ad esaminare, esattamente come l’eseguibile di Fluentis Live Update.<br/>
Il servizio una volta installato risulterà composto da due file, un eseguibile e un file di configurazione. 

![Setting Detail](/img/fluentis/Reports/ServerReports/image006.png)

Il file di configurazione conterrà le seguenti informazioni:
-	FluentisUrl, l’indirizzo di connessione a Fluentis
-	ServiceUser e ServicePassword, le credenziali dell’utente di servizio configurato a livello di connessione ARM
-	RemoteSecret, ovvero il segreto remoto, associato al nome server nella sezione dedicata alla configurazione server
-	IntervalInSecond, che indica ogni quanti secondi il servizio interrogherà la coda di stampa.

![Setting Detail](/img/fluentis/Reports/ServerReports/image007.png)

Se il servizio fosse già installato sulla macchina, accertarsi che sia correttamente avviato nella maschera dei servizi di windows.