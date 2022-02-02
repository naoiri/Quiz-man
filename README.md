# Welcome to Quizman

## Introduction
Quizman is a small school project made in the course "Projekt och Entrepenörskap"

## Installation and startup
The easiest way to start the project would be to download the docker image through the commandline. 

> docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=yourStrong(!)Password" -e "MSSQL_PID=Express" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest

To start the app you need to, start both the backend and frontend. 

Navigate to the project through your commandline. 
Go into the frontend. It is run by Node.js. 
> cd frontend
> npm install
> npm run start

Go into the backend. This is run by spring-boot, and should connect to your docker image where the MSSQL is located. 

> cd quizman_backend
> mvn package
> mvn spring-boot:run
