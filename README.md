# Ravn Challenge

This is a web application made using React and Graphql as part of the Ravn interview process.

## Run

This application requires to install the next dependencies in order to start the server.

Grapghql using the library Apollo (querys, create and delete mutation)
```sh
npm install @apollo/client
```
Router by react-router-dom package
```sh
npm install react-router-dom
```
Icons by react-icons package
```sh
npm install react-icons
```
Menu to show delete and edit options and alert to confirm delete were created using mui library
```sh
npm install @emotion/react @emotion/styled @mui/material
```
Runs the app in the development mode.
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## File Structure

Files were divided by components

```sh
src
  |components
    |task-column
      |TaskColumn.js
      |TaskColumn.css
    ...
  |pages
  |layouts
  |services
  |constants
  |assets
```

## Screenshoots
Dashboard page
![image](https://user-images.githubusercontent.com/21376137/158316930-d17f255d-3108-4ad4-a97d-b0bb515c5374.png)

My task page
![image](https://user-images.githubusercontent.com/21376137/158317026-56b0872a-b061-42f5-8dfe-d3736a7eec81.png)

New Task
![image](https://user-images.githubusercontent.com/21376137/158317209-35a0314f-9937-495e-8cc1-aee40161b36a.png)
![image](https://user-images.githubusercontent.com/21376137/158317286-fe7a6f49-bcc1-47ba-a01a-dc7d03e3526f.png)

Delete Task

![image](https://user-images.githubusercontent.com/21376137/158317343-51d86723-befc-430e-862d-30b4478b839d.png)
