Full-stack weather forecast application on Nest.js with GraphQL, with frontend as a website on Next.js and a mobile application on React Native. [OpenWeather API](https://openweathermap.org/) used for data.

## Installation

In common folder create run:

```bash
npm run build
npm link
```

To start server (server folder) first fill .env file with your Google credentials. Then:

```bash
npm install
npm link weather-forecast-common
docker compose up
npm run migration:run
npm run start:dev
```