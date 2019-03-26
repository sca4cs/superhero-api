Create a super hero search REST API that lets to you search for heroes by name, power, and comic universe.

No client side required. Just make sure everything works in Postman and document the API usage

Create an ExpressJS app

Details:

- All the hero data should be in a MySQL database. Add at least 25 heroes to this database.
- The API should keep a log of all search queries in MongoDB.
- All queries should be cached in a redis cache so that a database call isn't required if someone else has performed the same search in the past 24 hours.
- deploy your work to Heroku