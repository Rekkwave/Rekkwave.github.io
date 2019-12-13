fetch('/lesson12/json/temples2.json')
    fetch(apiForecastURL)
        .then(
            (response) => response.json()
        )
        .then(
            (temples) => {
                temples.forEach(
                    temple => {
                        console.log(temple);
                    }
                 )
            }
        )