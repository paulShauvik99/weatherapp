
let currentDate = document.getElementById('date');
const weather = document.getElementById('weather');
const subBtn = document.getElementById('subBtn');
const city_name = document.getElementById('city_name');
const data_hide = document.querySelector('.data_hide');
const temp = document.getElementById('temp');
const tempminmax = document.getElementById('temp_min_max');
const maxtemp = document.getElementById('maxtemp');
const ciCon = document.getElementById('ciCon');
const des = document.getElementById('des');
const feels = document.getElementById('feels');
//Functions
const finDate = () =>{
    
            let date = new Date();
            const weekdays = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
            const Months = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var day = `${weekdays[date.getDay()]} | ${date.getDate()} ${Months[date.getMonth()]}, ${date.getFullYear()}`;
            
            currentDate.innerHTML = day;
}

finDate();
    

const getInfo = async(event) =>{
        
    event.preventDefault();

    if(city_name.value === ""){
        weather.innerHTML = `Please Enter a City name!`;
        data_hide.classList.add('data_hide');
    }else{

        try{
            

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&units=metric&appid=f1ab62f9e79f09208007d7249a981cbd`
            const response = await fetch(url);
        
            const data =await response.json();

            const arrdata = [data];

            
            des.innerText = `${arrdata[0].weather[0].main}`
            ciCon.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp.innerText = `${arrdata[0].main.temp}\u00B0C`;
            temp_min_max.innerText = `Min: ${arrdata[0].main.temp_min}\u00B0C | Max: ${arrdata[0].main.temp_max}`; 
            feels.innerText = `Feels Like: ${arrdata[0].main.feels_like}\u00B0C`

            data_hide.classList.remove('data_hide');
            
            
            const tempStatus = arrdata[0].weather[0].icon;
            
            //icons
            if(tempStatus == "01d"){
                weather.innerHTML = "<i class='fas fa-sun' style='color:#ff8000'></i> ";            
            }else if(tempStatus == "01n"){
                weather.innerHTML = "<i class='fas fa-moon' style='color:#E8F6EF'></i> "; 
            }else if(tempStatus == "02d"){
                weather.innerHTML = "<i class='fas fa-cloud-sun'></i>";
            }else if(tempStatus == "02n"){
                weather.innerHTML = "<i class='fas fa-cloud-moon ></i>";
            }else if(tempStatus == "03d"){
                weather.innerHTML = "<i class='fas fa-cloud style='color:#E8F6EF'></i>";
            }else if(tempStatus == "03n"){  
                weather.innerHTML = "<i class='fas fa-cloud style='color:#E8F6EF'></i>";
            }else if(tempStatus == "04d"){
                weather.innerHTML = "<i class='fas fa-cloud-rain'></i>";
            }else if(tempStatus == "04n"){
                weather.innerHTML = "<i class='fas fa-cloud-rain'></i>";
            }else if(tempStatus == "09d"){
                weather.innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>";
            }else if(tempStatus == "09n"){
                weather.innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>";
            }else if(tempStatus == "10d"){
                weather.innerHTML = "<i class='fas fa-cloud-sun-rain'></i>";
            }else if(tempStatus == "10n"){
                weather.innerHTML = "<i class='fas fa-cloud-moon-rain'></i>";
            }else if(tempStatus == "11d"){
                weather.innerHTML = "<i class='fas fa-bolt'></i>";
            }else if(tempStatus == "11n"){
                weather.innerHTML = "<i class='fas fa-bolt'></i>";
            }else if(tempStatus == "13d"){
                weather.innerHTML = "<i class='fas fa-snowflake'></i>";
            }else if(tempStatus == "13n"){
                weather.innerHTML = "<i class='fas fa-snowflake'></i>";
            }else if(tempStatus == "50d"){
                weather.innerHTML = "<i class='fas fa-smog style='color:#E8F6EF''></i>";
            }else if(tempStatus == "50n"){
                weather.innerHTML = "<i class='fas fa-smog style='color:#E8F6EF''></i>";
            }    
        }catch{
            weather.innerHTML = `Please Enter Correct City Name!`;
            data_hide.classList.add('data_hide');
            
        }

    
    
    }


}

//Add Event Listeners

subBtn.addEventListener("click",getInfo);






