---
title: Configurazione LDAP
sidebar_position: 6
---

Per automatizzare il processo di [importazione](import-ad) degli utenti da Active Directory, è necessario configurare in ARM uno o più LDAP tramite la form **Configurazione LDAP**.

![LDAP](/img/home/users/LDAPconfig.png)

La form in questione è una filter form costituita da filtro, griglia dei risultati e ribbon bar con le azioni consentite all'utente.

### Filtro

| <div style={{ width:'50px' }}>***Nome*** </div> | 
|    -----------------------------------------|            
| _Dominio_                | 
| _Server_                  |  
|_Nome Utente_                | 
|_Indirizzo di dominio_              | 


### Griglia dei risultati

| <div style={{ width:'50px' }}>***Nome*** </div> | <div style={{ width:'150px' }}>Descrizione</div>  | 
|    -----------------------------------------|-----------------------------------------|            
| _Dominio_                | dominio di rete|
| _Dominio Netbios_                  |  dominio di rete FQDN|
|_Server_                |  ip o server host|
|_Porta_                |  porta per il servizio|
|_Nome Utente_                |  username per autenticazione|
|_Password_                |  password dello username|

### Azioni

| <div style={{ width:'50px' }}>***Nome*** </div> | Descrizione | 
|    -----------------------------------------|-----------------------------------------|            
| _Ricerca_                |  applica le regole di filtro e carica la lista delle configurazioni disponibili|
| _Nuovo_                  |  creazione manuale di una nuova configurazione LDAP|
|_Cancella_                |  elimina la configurazione selezionata|
