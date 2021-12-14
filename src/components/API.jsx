import React,{useState, useEffect} from 'react';
import axios from 'axios';


export default function API() {

    const[Lat, setLat] = useState('');
    const[Lon,setLon] = useState('');


    function  getLocation () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } 
      }
      
        function showPosition(position) {
      
        setLat( position.coords.latitude);
        setLon( position.coords.longitude);
      
      }


      const[date_air,setDate_air] = useState([]);

    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${Lat}&lon=${Lon}&appid=c295b12ed44a06665ef7187f42a022e3`;
    useEffect(() => {
        axios .get(url) .then((res) => {

            const obj = {
              co : res.data.list[0].components.co,
              no2: res.data.list[0].components.no2,
              o3: res.data.list[0].components.o3,
             pm2_5: res.data.list[0].components.pm2_5,
              so2: res.data.list[0].components.so2,
             pm10: res.data.list[0].components.pm10,
              nh3: res.data.list[0].components.nh3,
        
            }
    
           setDate_air(obj);
          });
      });
    


    return (
        <div>
            {getLocation()}
             <h1>{Lat}</h1> 
              <h1>{Lon}</h1>

             <h2> {date_air.co}</h2>
             <h2> {date_air.no2}</h2>
             <h2> {date_air.pm10}</h2>
             <h2> {date_air.pm2_5}</h2>


            salut
        </div>
    )
}



