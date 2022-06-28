# MyMusicAppAngular

My Music App is a web application used for songs management. Backend: ASP.NET 6 Web API. Frontend: Angular 13.

## 1) Run only .NET app

Angular app production build was saved to `API/API/wwwroot/` directory and .NET app was configured to serve those static files.

Open `API/API.sln` with Visual Studio 2022, run the app and go to `https://localhost:7266`. Note that if the .NET app is running on a different port from`7266`, you have to modify the `appAPIUrl` variable in the `client\src\environments\environment.ts` file accordingly, create production build again by running `ng build` (make sure to install required node modules by running `npm install` command before) and then run the .NET app.

## 2) Run the Angular app as well

After running .NET app you can also run the Angular app by executing the command `ng serve --open` (make sure to install required node modules by running the `npm install` command before). Note that if the Angular app is running on a different port from`4200`, you have to modify`API/API/Program.cs` file at line 57 accordingly.

## Features

All features are implemented (10 songs are displayed per page and LoggedInModule is lazy-loaded). Login with `username:emir` and `password:1234` to see sample data.
