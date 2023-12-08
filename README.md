# P13 : Utilisez une API pour un compte utilisateur bancaire avec React
## Par Fannie Presman - Novembre 2023

### Getting started

#### Front-end

First, clone the project with `https://github.com/Moonshield7/P13-Argent-Bank.git`

To install the dependancies, use `npm install` to create the folder node_modules and the file package-lock.json.

To locally start the app, use `npm run dev` and open the tab http://localhost:5173/ in your browser.

#### Back-end

You will also need to use the back-end API provided for the project, that you can find here : https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API

Follow the instructions to get it working.

### Versions

| Name | Version |
| :-: | :-: |
| React | 18.2.0 |
| react-router | 6.18.0 |
| prop-types | 15.8.1 |
| Redux | 4.2.1 |
| react-redux | 8.1.3 |
| Redux Toolkit | 1.9.7 |
| Immer | 10.0.3 |
| ESLint | 8.45.0 |
| Vite | 4.4.5 |

### File organization

The files containing the app are placed in the **src** folder.

The **assets** folder contains the images used in the app.

The **components** folder contains the components that are used to build tha app.

The **pages** folder contains the different pages that we can reach using the app.

The **services** folder contains the calls to the backend API to get the data of the users, and the mock datas found in the public folder.

The **utils** folder contains the Redux logic, with the store and the user slice in the feature folder.

### API documentation for phase 2 : transactions

In order to view the documentation for the transactions part, open the swagger.yaml file from this repository, copy its full content, go to https://editor.swagger.io/ and paste the content of the swagger.yaml file.

![Rendu visuel du fichier swagger dans l'éditeur](./src/assets/img/swagger.PNG?raw=true "Swagger")