---
title: Operazioni
sidebar_position: 1
---

La form **Operazioni** permette di inserire, modificare o eliminare un'Operazione e i suoi Valori. Si può accedere alla form, oltre che da Fluentis>Diritti>Operazioni, da Home>Utenti, tab Sicurezza e cliccando col tasto destro nella colonna Operazione.

Attraverso le Operazioni è possibile definire una serie di azioni che l'utente può eseguire su un determinato Oggetto, escludendone altre.<br/>A differenza delle Restrizioni le Operazioni non nascondono alla vista dell'Utente l'Oggetto vietandone qualsiasi interazione, ma piuttosto disabilitano una specifica azione sull'Oggetto.

![](/img/fluentis/rights/operation.png)

## Filtro
* **Codice**
* **Descrizione**

## Griglia Operazioni

| <div style={{ width:'150px' }}>**Nome** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Oggetto Business_                       |   Oggetto su cui creare l'Operazione.                       |
| _Codice_                                 |  Codice dell'Operazione.                                    |
| _Descrizione_                            |  Descrizione dell'Operazione.                               |

## Griglia Valori

| <div style={{ width:'150px' }}>**Nome** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Codice_                                 |  Codice del Valore.                                         |
| _Descrizione_                            |  Descrizione del Valore.                                    | 

## Azioni
* **Ricerca:** per applicare le regole di filtro e caricare le Operazione disponibili.
* **Nuovo:** per aggiungere una nuova Operazione.
* **Elimina:** per eliminare l'Operazione selezionata.

## Come usare le Operazioni

### 1. Creazione
Inseriamo la nostra Operazione nella form **Operazioni**: specifichiamo l'Oggetto sul quale la vogliamo applicare e un codice e una descrizione identificativi.

![](/img/fluentis/rights/operation-detail.png)

Ad ogni Operazione corrispondono uno o più **Valori**. I Valori sono stringhe arbitrarie da associare alla nostra Operazione. Questi ci permetteranno, come vedremo più avanti, di consentire o impedire all'Utente l'esecuzione della nostra Operazione.

### 2. Oggetto Fluentis

Una volta creata l'Operazione sull'oggetto desiderato come visto nello step precedente, in Fluentis, aprendo l'Object Form del suddetto oggetto, nel Ribbon Menu comparirà il seguente tasto:

![](/img/fluentis/rights/operation-button.png)

Al click si aprirà la form sottostante.

![](/img/fluentis/rights/operations-fluentis.png)

A questo punto inseriamo l'Operazione e uno dei **Valori** creati. Stiamo quindi assegnando all'Oggetto (nell'esempio la Fattura) un determinato Valore dell'Operazione. A seconda di quale assoceremo poi all'Utente (**step 3**), gli concederemo o negheremo dei Diritti di modifica dell'Oggetto (**step 4**).


### 3. Assegnazione all'Utente
Torniamo quindi in ARM e assegniamo l'Operazione all'Utente nel [tab Sicurezza](../../../home/users/users-details/users#sicurezza) scegliendo un Valore.

:::important 
Al contrario delle Restrizioni, in questa form è indicata il tipo di Operazione **consentita** all'Utente.
:::

![](/img/fluentis/rights/operation-user.png)

Se il Valore assegnato all'Utente corrisponde a quello che abbiamo assegnato all'Oggetto in Fluentis, all'Utente sarà concesso il Diritto (**step 4**) e negato altrimenti.

### 4. Diritto
Infine, l'ultimo passaggio richiede il legame Diritto-Operazione. In Fluentis possiamo individuare il Diritto associato a un determinato bottone e quindi all'azione che ci interessa, tramite tasto destro del mouse sul bottone in questione e accedendo a **Informazioni**.

Quindi in ARM dal Menu Fluentis>Diritti potremo vedere tutti i Diritti disponibili e, trovato il nostro usando il filtro disponibile nella form, attraverso tasto destro sul Diritto>**Regole condizionali** assegniamo l'Operazione al Diritto.

![](/img/fluentis/rights/operation-rights.png)

<br/>

:::important 
Le Operazioni lavorano soltanto sugli Id degli Oggetti e non è possibile specificare una condizione da verificare.
:::

L'Operazione agirà sull'**Id** dell'Oggetto aperto nel'Object Form allo step 2, assegnando quindi il Diritto a quel _specifico_ Oggetto con quello _specifico_ Id.<br/>
Avendo assegnato _valore1_ sia all'Oggetto che all'Utente, quest'ultimo **potrà eseguire l'Operazione** rappresentata dal Diritto. Al contrario, se assegnassimo _valore2_ all'Oggetto o all'Utente, quest'ultimo non potrebbe eseguire l'Operazione.<br/>
Se specifichiamo il **Percorso** sarà possibile individuare una referenza all'interno del nostro oggetto a cui associare l'Operazione. Questa però farà sempre riferimento al campo **Id** dell'Oggetto specificato.


### 5. Tips

- In Fluentis, **non tutti gli Oggetti hanno una Object Form** da cui poter accedere alla form Operazioni come visto nello step 2. Pertanto se si volesse inserire un'Operazione su uno dei suddetti Oggetti è necessario eseguire manualmente una _insert_ a DB. Di seguito riportiamo un esempio per l'Oggetto FSItemClass.

```sql insert into  Arm.[SEC_ObjectOperationValues]
select [objectStates].[OBJBO_Id]
,[SD_SalesInvoiceTypes].[SDSIT_Id]
,[SEC_SecurityOperations].[SECSO_Id]
,[SEC_OperationValues].[SECOV_Id] 
from  [Arm].[OBJ_BusinessObjects] as objectStates 
join [Fluentis].[SD_SalesInvoiceTypes] on  1=1
join [Arm].[SEC_SecurityOperations] on  [objectStates].[OBJBO_Id] = [SEC_SecurityOperations].[SECSO_BusinessObject_OBJBO_Id]
join [Arm].[SEC_OperationValues] on [SEC_OperationValues].[SECOV_Operation_SECSO_Id] = [SEC_SecurityOperations].[SECSO_Id]
left join [Arm].[SEC_ObjectOperationValues] on [SEC_ObjectOperationValues].[SECOOV_BusinessObject_OBJBO_Id] = [objectStates].[OBJBO_Id] 
and [SEC_ObjectOperationValues].[SECOOV_TableId] = [SD_SalesInvoiceTypes].[SDSIT_Id] 
and [SEC_ObjectOperationValues].[SECOOV_Operation_SECSO_Id] = [SEC_SecurityOperations].[SECSO_Id]
and [SEC_ObjectOperationValues].[SECOOV_OperationValue_SECOV_Id] = [SEC_OperationValues].[SECOV_Id]
where [objectStates].[OBJBO_Code] = 'FSSalesInvoiceType'
and [SEC_SecurityOperations].[SECSO_Code] = 'InvoiceItalia' 
and [SEC_OperationValues].[SECOV_Code] =  [SD_SalesInvoiceTypes].[SDSIT_Code]
and [SEC_ObjectOperationValues].[SECOOV_Id] is null
order by [SD_SalesInvoiceTypes].[SDSIT_Code],[SEC_OperationValues].[SECOV_Code]
```

- L'utente su cui andremo a mettere l'Operazione non deve avere il Ruolo **Admin**.

- Controllare che il **Ruolo assegnato** all'Utente abbia il Diritto che vogliamo utilizzare.
