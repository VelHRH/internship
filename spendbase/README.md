# Scraping API

Node.js application to scrape data from a static webpage to 3 different formats: JSON, CSV and Google Spreadsheet. Made with Express framework, Drizzle ORM and ❤️

## How to start?

In order to start this application several preparatory steps should be done.

First of all, you need to have [PostgreSQL](https://www.postgresql.org/) installed on your computer. You need to add a connection link to your database in the .env file in the root of your project along with the rest of the information:

```
DB_CONNECTION_STRING=postgresql://{user}:{password}@{host}:{port}/{database}
PORT=4444
SCRAPE_SOURCE=https://interaction24.ixda.org/
DEFAULT_FILENAME=profiles
ACCESS_TOKEN_SECRET=your_secret
REFRESH_TOKEN_SECRET=your_secret2
```

As your .env file is ready, pleas make sure it's ports match the ports specified in docker-compose file.

Secondly, in order to work with Google Spreadsheet API, this app needs a google_credentials.json file with your google credentials. In order to get it, you need to visit your [Google Developer Console](https://console.cloud.google.com/apis/credentials) and enable Google Spreadsheet API.

Finally, start your docker container with `docker-compose up`, and create needed tables in your empty database with `npm run migrations`. You're good to go!

## Usage

The key application route `/parse` (POST) scrapes webpage profiles data and saves it in three different formats: JSON, CSV and Google Spreadsheet. Several query parameters can be used with it:

- dir - **required** (define a directory to save files inside your container)
- spreadSheet - **required** (id of google spreadsheet, you can find it in the link of spreadsheet)
- sheetName - **required** (name of sheet inside spreadsheet)
- filename - optional (DEFAULT_FILENAME is used by default)

The example can look like this: `http://localhost:4444/api/parse?dir=C:/Users/admin/Downloads&sheetName=Sheet1&spreadSheet=1mcNOB8wIB-Cl_gAwKsKyTDjuadEBjIIKcHSbdwmmttk`

But only authorised users can call this route. In order to sign-up you need `/auth/sign-up` (POST), in order to login - `/auth/login` (POST) and in order to logout - `/auth/logout` (GET). It is worth noting that this application implements full authentication using JWT tokens, which means that the access token has a small stale time and requires a refresh token stored in the database. So we need an additional route `/refresh` (POST) which receives a refresh token and returns two new tokens.

The last route of this API is `/parse-requests` (GET), which returns all the scrapes made by users of the app.

## Tools used

The three key tools used in the application other than Node.js and TypeScript are Express.js, PostgreSQL in combination with Drizzle ORM and Google APIs library.

The main advantage of using Express.js is its support for the middleware concept, which allows you to check the request information before it goes directly to the controller and catch errors as easy as that:

```javascript
const errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  console.error(err);
  if (err instanceof ApiError) {
    res.status(err.code).json(returnError(err.error));
    return;
  }
  const error = RequestErrors.INTERNAL.message;
  res.status(RequestErrors.INTERNAL.code).json(returnError(error));
};
```

Drizzle is a progressive ORM made by Ukrainian team which supports multiple database engines, fully TypeScript-compatible and allows you to simplify work with SQL without losing efficiency thanks to the capabilities of the Query Builder. For instance, this left join request will not lose in efficiency compared to a regular SQL query, but you also can write it in a simplified ORMish way if you like:

```javascript
const list = async () => {
  return await db
    .select({ time: parseRequestTable.createdAt, user: userTable.email })
    .from(parseRequestTable)
    .leftJoin(userTable, eq(parseRequestTable.userId, userTable.id));
};
```

JsonWebToken library is used to sign and verify jwt tokens, and bcrypt library was helpful with hashing passwords inside database.

## Code organisation

The application has a classic three-layer architecture with a data layer, a services layer and a controller layer. All constants used in the project are placed in a separate directory in the form of enums. The router has a convenient and easily scalable structure. The middleware folder contains the functions necessary for intermediate processing of requests, and the utils folder contains other utility functions.
