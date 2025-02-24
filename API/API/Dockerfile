#(1) Base stage: lightweight ASP.NET runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base      
#(2) Sets /app as WORKDIR in the 'base' stage; could be placed later
WORKDIR /app                                                       

#(3) Build stage: full .NET SDK
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build  
#(4) Sets /src as WORKDIR
WORKDIR /src         
#(5) Copies .csproj from host (build context) to /src
COPY ["API.csproj", "./"]	
#(6) Restores NuGet packages
RUN dotnet restore "API.csproj"   
#(7) Copies remaining source files into /src
COPY . .       
#(8) Compiles to /app/build
RUN dotnet build "API.csproj" -c Release -o /app/build             

#(9) New stage, named 'publish', based on the 'build' stage; not necessary
FROM build AS publish       
#(10) Publishes compiled output to /app/publish
RUN dotnet publish "API.csproj" -c Release -o /app/publish  

#(11) Return to the lightweight runtime image
FROM base AS final  
#(12) Ensures /app is the WORKDIR in final stage
WORKDIR /app          
#(13) Copy published binaries from 'publish' stage to /app
COPY --from=publish /app/publish .
#(14) Documents that container listens on port 80
EXPOSE 80               
#(15) Tells ASP.NET to bind to port 80 (built in env in asp.net web api, and Kestrel will use it)
ENV ASPNETCORE_URLS=http://+:80  
#(16) Container startup command
ENTRYPOINT ["dotnet", "API.dll"]  
