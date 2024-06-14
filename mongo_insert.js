const getData = require("./mongodb");
const insert1 = async () => {
  console.log("insert function");
  const db = await getData();
  const result = db.insertOne({
    coord: { lon: 75, lat: 19.5 },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 30.2,
      feels_like: 32.5,
      temp_min: 30.2,
      temp_max: 30.2,
      pressure: 1005,
      humidity: 63,
      sea_level: 1005,
      grnd_level: 950,
    },
    visibility: 10000,
    wind: { speed: 4.5, deg: 310, gust: 5.5 },
    clouds: { all: 95 },
    dt: 1718886261,
    sys: { country: "IN", sunrise: 1718842879, sunset: 1718890740 },
    timezone: 19800,
    id: 1264418,
    name: "Maharashtra",
    cod: 200,
  });
  console.log(result);
};
insert1();
