const apiURL1 = "https://api.openweathermap.org/data/2.5/forecast?id=5688025&appid=e7417cd17600333ed2c8368b935da8ef&units=imperial";

    fetch(apiURL1)
        .then(
            (response) => response.json()
        )

        .then(
            (currentWeather) => {
                let currentTemp = currentWeather.main.temp;


                    document.getElementById("currentTemp1").innerHTML = currentTemp + '&deg';
            });

  const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5771826&appid=e7417cd17600333ed2c8368b935da8ef&units=imperial";

             fetch(apiURL2)
        .then(
            (response) => response.json()
        )

        .then(
            (currentWeather) => {
                let currentTemp = currentWeather.main.temp;


                    document.getElementById("currentTemp2").innerHTML = currentTemp + '&deg';
            });


     const apiURL3 = "https://api.openweathermap.org/data/2.5/forecast?id=5808276&appid=e7417cd17600333ed2c8368b935da8ef&units=imperial";


            fetch(apiURL3)
        .then(
            (response) => response.json()
        )

        .then(
            (currentWeather) => {
                let currentTemp = currentWeather.main.temp;


                    document.getElementById("currentTemp3").innerHTML = currentTemp + '&deg';
            });

    const apiURL4 = "https://api.openweathermap.org/data/2.5/forecast?id=5378538&appid=e7417cd17600333ed2c8368b935da8ef&units=imperial";

            fetch(apiURL4)
        .then(
            (response) => response.json()
        )

        .then(
            (currentWeather) => {
                let currentTemp = currentWeather.main.temp;


                    document.getElementById("currentTemp4").innerHTML = currentTemp + '&deg';
            });

       const apiURL5 = "https://api.openweathermap.org/data/2.5/forecast?id=4975802&appid=e7417cd17600333ed2c8368b935da8ef&units=imperial";

            fetch(apiURL5)
        .then(
            (response) => response.json()
        )

        .then(
            (currentWeather) => {
                let currentTemp = currentWeather.main.temp;

                    document.getElementById("currentTemp5").innerHTML = currentTemp + '&deg';
            });

        const apiURL6 = "https://api.openweathermap.org/data/2.5/forecast?id=5811696&appid=e7417cd17600333ed2c8368b935da8ef&units=imperial";

            fetch(apiURL6)
        .then(
            (response) => response.json()
        )

        .then(
            (currentWeather) => {
                let currentTemp = currentWeather.main.temp;


                    document.getElementById("currentTemp6").innerHTML = currentTemp + '&deg';
            });
