const gamesUrl = "https://api.rawg.io/api/games";

fetch(gamesUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        handleJson(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function handleJson(json) {
    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".row.results");

    function createGames(games) {
        console.dir(games);

        const resultsContainer = document.querySelector(".results");

        let html = "";

        results.forEach(function (result) {
            html += `<div class="game">
        <h2>${result.name}</h2>
        <img src="${result.background_image}" alt=${result.name}>
        </div>`;

            console.log(result.name);
        });
    }

    resultsContainer.innerHTML = html;