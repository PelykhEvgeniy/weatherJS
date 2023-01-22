const input = document.querySelector(".header__form-input");
const btn = document.querySelector(".header__form-btn");
const textCity = document.querySelector(".name-city");
let city = document.querySelector(".sity");
let temp = document.querySelector(".section__bottom-temp-c");

const apiKey = 'e42a68dd02ef441fabe134027232101';

 //только буквы
input.addEventListener('input', function(e){
    // На случай, если умудрились ввести через копипаст или авто-дополнение.
    input.value = input.value.replace(/[0-9]/g, "");
  });
btn.addEventListener('click', (e) => {
    //Что бы не перезагружалась форма 
    e.preventDefault();
    //   Запуск формы
    weather();
    resetWeather()
})

let t;
function weather() {
    // берем из инпута значение
    let inpValue = input.value;
      t = inpValue
//Запуск функции, для апи погоды 
apiWeather();
}
async function apiWeather(){
  const res = await fetch (`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${t}`);
  const data = await res.json();
  // картинка  
  let img = data.current.condition.icon;
  let imgIcon = document.querySelector(".img").src=`http:${img}`;
  // Вывод информации в див
  city.textContent += data.location.name;
  temp.textContent+= Math. round(data.current.temp_c) + '\xB0';
}

// сброс значений
function resetWeather(){
  city.textContent = '';
  temp.textContent = '';
}