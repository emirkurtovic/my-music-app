# My Music App

My Music App is a web application used for songs management. Backend: ASP.NET 6 Web API. Frontend: Angular 13.

## 1) Run only .NET app

Angular app production build was saved to `API/API/wwwroot/` directory and .NET app was configured to serve those static files.

Open `API/API.sln` with Visual Studio 2022, run the app and go to `https://localhost:7266`. Note that if the .NET app is running on a different port from`7266`, you have to modify the `appAPIUrl` variable in the `client\src\environments\environment.ts` file accordingly, create production build again by running `ng build` (make sure to install required node modules by running `npm install` command before) and then run the .NET app.

## 2) Run the Angular app as well

After running .NET app you can also run the Angular app by executing the command `ng serve --open` (make sure to install required node modules by running the `npm install` command before). Note that if the Angular app is running on a different port from`4200`, you have to modify`API/API/Program.cs` file at line 57 accordingly.

## Features

All features are implemented (10 songs are displayed per page and LoggedInModule is lazy-loaded). Login with `username:emir` and `password:1234` to see sample data.

## Possible improvements

1. Caching (using Map); Disable updating, filtering and searching if inputs are changed and then returned to initial values.
2. Use ASP.NET Identity; Detailed analysis of security - currently CSRF, SQL Injection and XSS attacks are slightly analyzed.
3. Better UI; Handle categories, artists, favorites and searching better.
4. Code organization - use classes and interfaces on the client-side, and repository pattern on the server-side.
5. URL - make logged-in starting route be `/` instead of `/dashboard`.
6. Maybe set the primary key for songs over name and artist fields (and URL?).
7. ...