# ModalRakyat
ModalRakyat uses `react.js` and `redux` 
for more info [react.js](https://reactjs.org/)  , [redux.js](https://redux.js.org)  

## Quick Installation Guide

    npm install

## Development Environment

    npm start

## Production Environment

    npm run build

## Configuration

you can change your environment configuration by creating an .env file in the root folder of the project

## Creating New Component and Containers

Creating new **Components** should be located in `/src/components` directory, and for **Containers** that contain the **Components** should be located in `/src/containers` folder.

## Routing

you can add or edit existing `route` on `server.js` for a production build
example :

  app.get('/about-us', (request, response) => {
  response.sendFile(path.join(__dirname, '/build/index.html'));
  });

All routes should redirect to index.html as shown above for handling when SEO engine or user try to open the link directly from the URL bar.


## API Request

You can add or edit existing API request on `/src/api` folder.
example :

const GetJsonPlaceholder = () => axios.get(`${url}/posts`);