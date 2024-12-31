---
title: Load Request
sidebar_position: 4
---
## Generale

Le **Load Request** sono usate principalmente nelle ObjectForm e vengono utilizzate per selezionare le proprietà da inviare al client.<br/>
Lo scopo delle Load Request è limitare i dati da caricare nel client per rendere più veloce il caricamento

## Menu contestuale
Con il menu contestuale nella root delle Load Request è possible crearne una nuova.

![Preview form](/img/fluentis/objects-repository/business-object/load-request/menucontestualeroot.png)

Selezionando una Load Request standard, è possibile visualizzarla.

![Preview form](/img/fluentis/objects-repository/business-object/load-request/menucontestualestd.png)

Selezionando una Load Request Custom, contraddistinta dal testo in rosso, è possibile modificarla o eliminarla.

![Preview form](/img/fluentis/objects-repository/business-object/load-request/menucontestualecustom.png)

## Creazione/Modifica

Entrando in modifica o creandone una nuova, sarà possibile impostare: 
* **Codice**: identificato dal C# per chiamare la Load Request
* **Use all simple properties**: seleziona in automatico tutte le proprietà semplici
* **Before Algorithm Method**: richiama un algoritmo prima che i dati vengano caricati
* **After Algorithm Method**: richiama un algoritmo dopo che i dati vengano caricati
* **Based On**: chiama un'altra Load Request prima di questa

:::info
Per effettuare un override di una Load Request standard è sufficiente assegnarli un codice uguale e identico.
:::

Infine la lista di proprietà da caricare: selezionare il flag **Used** se si intende caricare la proprietà.<br/>
Se OneToOne specificare con l'apposita colonna<br/>
Si applica alle _classi ramificate_, spuntare ReadWrite se si desidera scriverci. 


![Preview form](/img/fluentis/objects-repository/business-object/load-request/menuproprieta.png)

Selezionando una proprietà comparirà un menu di dettaglio sulla destra dove sarà possibile: caricare tutte le proprietà semplici ed eseguire degli algoritmi prima o dopo del caricamento della proprietà selezionata.

![Preview form](/img/fluentis/objects-repository/business-object/load-request/menudettaglio.png)
