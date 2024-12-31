---
title: Restrizioni
sidebar_position: 4
---

La form di gestione delle Restrizioni ci permette di filtrare e cercare la restrizione desiderata ma anche di modificarla o di crearne una nuova.
Da qui è possibile definire un set di regole, strettamente legato alla gestione degli utenti, per definire determinate azioni che lo user non può eseguire.

![directoryscheme](/img/fluentis/objects-repository/restriction.png)

La form **Restrizioni** è una filter form composta da: filtro, griglia dei risultati, griglia di dettaglio e ribbon bar con le azioni consentite all'utente.

## Filtro
* **Nome**
* **Descrizione**

## Griglia Restrizioni

| <div style={{ width:'150px' }}>***Griglia dei risultati*** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Nome_    |   Nome identificativo della restrizione.                                                      |
| _Descrizione_    |  Descrizione.                                        |

## Griglia Regole

| <div style={{ width:'150px' }}>***Griglia dei risultati*** </div> | Descrizione |
| -----------------------------------------|-------------------------------------------------------------|            
| _Oggetto Business_    |   Business Object a cui applicare la Restrizione.                                                    |
| _Tipo Restrizione_    |  (Opzionale) Permette di associare un [Tipo di restrizione](../../home/users/restriction-type) alla regola.                                     |
| _Espressione filtro_     |   Regola della Restrizione.                |
| _Algoritmo_     | (Opzionale) Permette di eseguire un algoritmo in fase di esecuzione della regola.        |

## Azioni
* **Ricerca:** per applicare le regole di filtro e caricare le Restrizioni disponibili.
* **Nuovo:** per aggiungere una nuova Restrizione.
* **Elimina:** per eliminare la Restrizione selezionata.