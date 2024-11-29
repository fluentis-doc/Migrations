---
title: Tabella
sidebar_position: 8
---

Le **Tabelle** sono la prima rappresentazione degli oggetti in Fluentis, esse vengono prima create a **DataBase** per la permanenza e poi mappate attraverso NHibernate per avere una rappresentazione Object Oriented all'interno dell'applicativo.

Alla form Tabella si accede visualizzando o creando una nuova Tabella attraverso il [Menu contestuale](menuContestuale).

## Testata
![Testata](/img/home/databaseSchemas/database/contextmenu/testatatabella.png)
Analizzando la form si trova in **Testata**:
* **Schema database**
    >specifica lo schema database
* **Tabella padre**
    >Specificare una tabella padre in caso di creazione di una collection
* **Nome**
    >Specifica il nome che assumerà tabella
* **Prefisso colonna**
    >Specifica il prefisso da usare nelle colonne costituito da _Area_ + _Iniziali Tabella_
* **Template**
    >La scelta del template serve a stabilire la chiave unica e primaria della tabella, ci sono diverse opzioni prestabilite.
    >* **Id** : crea un nuovo indice di tipo chiave primaria.
    >* **Id,Code** e **Id,Code,Description** : crea un nuovo indice di tipo chiave primaria per la colonna _Id_ e un indice di tipo chiave unica sulle colonne _Code/Description_.
    >* **Id,Code,Company** : crea un nuovo indice di tipo chiave primaria per la colonna _Id_ , un indice di tipo chiave unica sulla colonna _Code_ e un indice di tipo.
    >* **Id,Code,Company,Department**, **Id,Code,description,Company,Department** : crea un nuovo indice di tipo chiave primaria per la colonna _Id_, un indice di tipo chiave unica sulle colonne _Code/Description_ e un indice di tipo Indice di chiave sulle colonne _Company e Department_.
* **Vecchio schema DB**
    >Specifica nel vecchio database lo schema della tabella, utile per migrare customizzazioni
* **Vecchio nome**
    >Specifica nel vecchio database il nome di della tabella, utile per migrare customizzazioni
* **Prefisso Obsoleta da**
    >Specifica una data di obsolescenza
* **Documentazione**
    >Descrizione del contenuto tabellare
## Tab
<!--importation for tabs-->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="colonne"
    values={[
        {label: 'Colonne', value: 'colonne'},
        {label: 'Chiave', value: 'chiave'},
        {label: 'Indice', value: 'indice'},
        {label: 'Vincoli', value: 'vincoli'},
    ]}>
<TabItem value="colonne">

Le colonne sono la struttura delle tabella, esse memorizzano i dati.
![Tabs](/img/home/databaseSchemas/database/contextmenu/colonnetabella.png)
* **Nome**
>Nome del campo in tabella. <br/>
>Sintassi campo data: Area + InizialiTabella_ + NomeCampo. <br/>
>Sintassi campo referenza: Area + InizialiTabella_ + NomeCampo_ + InizaliTabellaReference 
* **Tipo Colonna**
>Specifica il tipo di dato da memorizzare
* **Vecchio Nome**
>Nome del vecchio nome, utile per migrare customizzazioni
* **Null**
>Specifica se il campo è nullable o meno
* **Identità**
>Specifica se il campo fa parte della chiave primaria
* **Documentazione**
>Descrizione del campo
* **Lunghezza**
>Utile se il tipo campo è _nvarchar_, specifica la lunghezza massima della stringa 
* **Case Sensitive**
>Utile se il tipo campo è _nvarchar_, specifica se la ricerca deve essere effettuata in case sensitive
* **Precisione**
>Utile se il tipo campo è _decimal_, specifica la precisione
* **Scala Numerica**
>Utile se il tipo campo è _decimal_, specifica la scala numerica
* **Definizione del valore predefinito**
>Specifica un valore proposto di default 
* **Nome vincolo valore predefinito**
>Specifica un vincolo che deve assumere il campo
* **Ordinamento**
>Specifica la posizione che assumere il campo durante la visualizzazione
* **Data Creazione**
>Specifica la data di creazione del campo

</TabItem>
<TabItem value="chiave">

Una chiave esterna rappresenta uno o più campi che fanno riferimento alla chiave primaria di un’altra tabella. Lo scopo della chiave esterna è garantire l’integrità referenziale dei dati.
![Tabs](/img/home/databaseSchemas/database/contextmenu/chiavetabella.png)
* **Nome**
>Nome della chiave esterna
* **Tabella referenziata**
>Nome della tabella referenziata
* **Azione Cancella**
>Specifica azione dopo cancellazione del campo reference.<br/>
>Scelte disponibili: Nessuna azione, Cascata, Imposta a null
* **Azione aggiornamento**
>Specifica azione dopo aggiornamento del campo reference.<br/>
>Scelte disponibili: Nessuna azione, Cascata, Imposta a null
* **Ordine**
>Specifica la posizione che assumere il campo durante la visualizzazione

</TabItem>
<TabItem value="indice">

Un indice è una struttura dati ausiliaria che consente di recuperare più velocemente i dati di una tabella, evitandone la lettura dell'intero contenuto.
![Tabs](/img/home/databaseSchemas/database/contextmenu/indicetabella.png)
* **Nome**
>Nome indice
* **Tipo**
>Tipo indice<br/>
>Scelte disponibili: Chiave primaria, Chiave unica, Indice, Indice di chiave esterna
* **Ordinamento**
>Specifica la posizione che assumere il campo durante la visualizzazione

</TabItem>
<TabItem value="vincoli">

![Tabs](/img/home/databaseSchemas/database/contextmenu/vincolitabella.png)
* **Nome**
>Nome vincolo
* **Definizione**
>definizione
* **Ordinamento**
>Specifica la posizione che assumere il campo durante la visualizzazione

</TabItem>

</Tabs>