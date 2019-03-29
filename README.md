# Superhero API

Search for heroes by name, power, and comic universe

## Endpoints

- GET `https://my-superhero-api.herokuapp.com/` returns a welcome message
- GET `https://my-superhero-api.herokuapp.com/heroes` returns a list of all the heroes
- GET `https://my-superhero-api.herokuapp.com/heroes/:heroName` lets you search for a hero by name
- GET `https://my-superhero-api.herokuapp.com/power/:heroPower` lets you search for a hero by power
- GET `https://my-superhero-api.herokuapp.com/universe/:heroUniverse` lets you search for a hero by universe

---

  All of the search endpoints are case-insensitive. Do not include spaces, but do include dashes where necessary.


  For example, this search: `https://my-superhero-api.herokuapp.com/heroes/greenarrow`


  Should return the following JSON:


    ```JSON
    {
        "id": 24,
        "name": "Green Arrow",
        "power": "acrobatic ability, archery, aviation",
        "universe": "DC"
    }
    ```