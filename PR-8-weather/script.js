

let api_key = '1709c9e37240d686e3ff7678dde4d81e'


let cityInput = document.querySelector("#city")
let card = document.querySelector("#weatherCard")
let list = document.querySelector("#weatherList")


fetch(`https://pro.openweathermap.org/data/2.5/forecast/?q=paris&appid=1709c9e37240d686e3ff7678dde4d81e`)
  .then((res) => res.json())
  .then((res) => console.log(res))


cityInput.addEventListener("change", function (e) {
  let city = e.target.value
  console.log(city)

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      showWeather(res)
    })

  fetch(`https://pro.openweathermap.org/data/2.5/forecast/?q=${city}&appid=1709c9e37240d686e3ff7678dde4d81e`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      showWeatherList(res)
    })

})



function showWeather(data) {

  card.innerHTML =
    `  
<div class="row d-flex justify-content-center py-5">

    <div class="card text-white" style=" border-radius: 35px; background-color :#868B94">
      <div class="card-body p-4">

        <div class="d-flex">
          <h6 class="flex-grow-1">${data.name}</h6>
          <h6>${data.dt_txt}</h6>
        </div>

        <div class="d-flex flex-column text-center mt-5 mb-4">
          <h6 class="display-6 mb-0 font-weight-bold"> ${(data.main.temp - 273.15).toFixed(2)} &deg;c </h6>
          <span class="small" style="color: #868B94"></span>
        </div>

        <div class="d-flex align-items-center">
          <div class="flex-grow-1" style="font-size: 1rem;">
            <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"><i class="fa-solid fa-wind"></i> ${data.wind.speed} m/s
              </span>
            </div>
            <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"><i class="fa-solid fa-droplet"></i> ${data.main.humidity} %
              </span></div>
            <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> <i class="fa-solid fa-sun"></i> ${data.main.pressure} hPa
              </span></div>
          </div>
          <div>
            <p>${data.weather[0].main}</p> 
            <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />
          </div>
        </div>

      </div>
    </div>
</div>
`
}









