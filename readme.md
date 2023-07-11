# PROJECT 2
# Plant Tracker 
**By:** Susie Gordon

</br>

## Description
---
An application used to track and organize a user's planting journey by logging basic plant information and scheduling their specific needs. 

</br>

## Links
---
- [**GitHub**](https://github.com/choisus08/project_2)
- [**Deployment**](https://project2-cio1.onrender.com)
- [**Trello**](https://trello.com/b/dUkgrfOu/project-1)

</br>

## Technologies Used 
---
HTML, JS, CSS, Node, Express, EJS, Mongo

</br>

## UI Mockup
---

**Desktop View**
![Desktop View](./public/images/wireframe1.png)
![Desktop View](./public/images/wireframe2.png)
![Desktop View](./public/images/wireframe3.png)

</br>

**Mobile View**
![Mobile View](./public/images/wireframe4.png)
![Mobile View](./public/images/wireframe5.png)

</br>

## Backend Endpoints
---

| Name | ENDPOINT | METHOD | PURPOSE |
|------|----------|--------|---------|
|INDEX| /plant | GET | return list of plants |
| NEW | /plant/new | GET | render page with a form to create new plant; submits to CREATE route |
|DESTROY| /plant/:id | DELETE | delete specified plant from database |
|UPDATE| /plant/:id | PUT | receive info & update specified plant in database |
|CREATE| /plant | POST | receive info from new form & create new plant in database |
|EDIT| /plant/:id/edit | GET | render page with a form to edit specified plant; submits to UPDATE route |
|SHOW| /plant/:id | GET | render page with the specified plant |


</br>

## ERD (Entity Relationship Diagram)
---

``` mermaid
erDiagram
    USER {
        string createUser
        string login
        string password
    }
    USER ||--o{ HOME : accountPage
    HOME {
        string name
        string dateAcquired
        string watered
        string fertilized
        boolean variegation
        boolean rare
        string notes
    }
    HOME ||--|{ CREATE : createPlant
    CREATE {
          string name
        string dateAcquired
        string watered
        string fertilized
        boolean variegation
        boolean rare
        string notes
    }
    HOME ||--|{ EDIT : editPlant
    EDIT {
          string name
        string dateAcquired
        string watered
        string fertilized
        boolean variegation
        boolean rare
        string notes
    }
    HOME ||--|{ DELETE : deletePlant
    DELETE {
          string name
        string dateAcquired
        string watered
        string fertilized
        boolean variegation
        boolean rare
        string notes
    }
    HOME ||--o{ LOGOUT : logoutUser
    LOGOUT {
        string LogoutMessage
    }
```