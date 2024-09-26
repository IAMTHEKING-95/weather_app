import * as React from 'react'
import { Box, ChakraProvider, List, extendBaseTheme } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//import Music from './Music.js';
import News from './News.js';
import Music from './Music.js';
import { useState } from 'react';


function WeatherViewTable({ weatherData }) {

    return (
        <Container lg="12" fluid>
            <HeaderView weatherData={weatherData} />
            <ListView  weatherDataList={weatherData} />
        </Container>
    );

}

function HeaderView({ weatherData }) {
   const [data, setData] = useState(weatherData);
    return (
        <Container fluid lg="12">
            <Row className='headerView'>
               <Col lg="6" className='currentWeatherForcast'>
                     <Card className='card'>
                        <div>
                           <h2>{data[0].current.weather[0].main}</h2>
                           <p>
                              <br />
                              Most of the time we will have {data[0].current.weather[0].description}, with a wind speed of {data[0].current.wind_speed} knots.
                           </p>
                        </div>
                     </Card>
               </Col>
               <Col  lg="6" className='currentDegree'>
                  <Card className='cardDegreeView'>
                     <p>12 degree</p>
                  </Card>
               </Col>
            </Row>
        </Container>
    );

}

function ListView({ weatherDataList }) {
   const rows = [];
   console.log(weatherDataList[0].daily)

   weatherDataList[0].daily.forEach((weather) => {
      rows.push( <ListViewRow weather={weather} key={weather.id} /> );
   });

    return (
        <Container fluid  lg="12">
            <Row className='listView'>
               <Col lg="12" className='card'>
                  {rows}
               </Col>
            </Row>
        </Container>
    );
}

function ListViewRow({ weather }) {
    return (
      <div className='cardRow'>
         <p>
            {weather.rain}
         </p>
      </div>
    );
}

export default function weatherApp() {

    return (
         <Container fluid  className='mainView'>
            <Row>
               <Col>      
                  <WeatherViewTable weatherData={weatherData}/>
               </Col>
               <Col>
                  <Music />
                  <News />
               </Col>
            </Row>
         </Container>
      );
      
}






const weatherData = [                
    {
       "lat":33.44,
       "lon":-94.04,
       "timezone":"America/Chicago",
       "timezone_offset":-18000,
       "current":{
          "dt":1684929490,
          "sunrise":1684926645,
          "sunset":1684977332,
          "temp":292.55,
          "feels_like":292.87,
          "pressure":1014,
          "humidity":89,
          "dew_point":290.69,
          "uvi":0.16,
          "clouds":53,
          "visibility":10000,
          "wind_speed":3.13,
          "wind_deg":93,
          "wind_gust":6.71,
          "weather":[
             {
                "id":803,
                "main":"Clouds",
                "description":"broken clouds",
                "icon":"04d"
             }
          ]
       },
       "minutely":[
          {
             "dt":1684929540,
             "precipitation":0
          }
       ],
       "hourly":[
          {
             "dt":1684926000,
             "temp":292.01,
             "feels_like":292.33,
             "pressure":1014,
             "humidity":91,
             "dew_point":290.51,
             "uvi":0,
             "clouds":54,
             "visibility":10000,
             "wind_speed":2.58,
             "wind_deg":86,
             "wind_gust":5.88,
             "weather":[
                {
                   "id":803,
                   "main":"Clouds",
                   "description":"broken clouds",
                   "icon":"04n"
                }
             ],
             "pop":0.15
          }
       ],
       "daily":[
          {
            "id":1,
             "dt":1684951200,
             "sunrise":1684926645,
             "sunset":1684977332,
             "moonrise":1684941060,
             "moonset":1684905480,
             "moon_phase":0.16,
             "summary":"Expect a day of partly cloudy with rain",
             "temp":{
                "day":299.03,
                "min":290.69,
                "max":300.35,
                "night":291.45,
                "eve":297.51,
                "morn":292.55
             },
             "feels_like":{
                "day":299.21,
                "night":291.37,
                "eve":297.86,
                "morn":292.87
             },
             "pressure":1016,
             "humidity":59,
             "dew_point":290.48,
             "wind_speed":3.98,
             "wind_deg":76,
             "wind_gust":8.92,
             "weather":[
                {
                   "id":500,
                   "main":"Rain",
                   "description":"light rain",
                   "icon":"10d"
                }
             ],
             "clouds":92,
             "pop":0.47,
             "rain":0.15,
             "uvi":9.23
          },
          {
            "id":2,
            "dt":1684951200,
            "sunrise":1684926645,
            "sunset":1684977332,
            "moonrise":1684941060,
            "moonset":1684905480,
            "moon_phase":0.16,
            "summary":"Expect a day of partly cloudy with rain",
            "temp":{
               "day":299.03,
               "min":290.69,
               "max":300.35,
               "night":291.45,
               "eve":297.51,
               "morn":292.55
            },
            "feels_like":{
               "day":299.21,
               "night":291.37,
               "eve":297.86,
               "morn":292.87
            },
            "pressure":1016,
            "humidity":59,
            "dew_point":290.48,
            "wind_speed":3.98,
            "wind_deg":76,
            "wind_gust":8.92,
            "weather":[
               {
                  "id":500,
                  "main":"Rain",
                  "description":"light rain",
                  "icon":"10d"
               }
            ],
            "clouds":92,
            "pop":0.47,
            "rain":0.15,
            "uvi":9.23
         },
         {
            "id":3,
            "dt":1684951200,
            "sunrise":1684926645,
            "sunset":1684977332,
            "moonrise":1684941060,
            "moonset":1684905480,
            "moon_phase":0.16,
            "summary":"Expect a day of partly cloudy with rain",
            "temp":{
               "day":299.03,
               "min":290.69,
               "max":300.35,
               "night":291.45,
               "eve":297.51,
               "morn":292.55
            },
            "feels_like":{
               "day":299.21,
               "night":291.37,
               "eve":297.86,
               "morn":292.87
            },
            "pressure":1016,
            "humidity":59,
            "dew_point":290.48,
            "wind_speed":3.98,
            "wind_deg":76,
            "wind_gust":8.92,
            "weather":[
               {
                  "id":500,
                  "main":"Rain",
                  "description":"light rain",
                  "icon":"10d"
               }
            ],
            "clouds":92,
            "pop":0.47,
            "rain":0.15,
            "uvi":9.23
         }
       ],
        "alerts": [
        {
          "sender_name": "NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)",
          "event": "Small Craft Advisory",
          "start": 1684952747,
          "end": 1684988747,
          "description": "...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.",
          "tags": [
    
          ]
        }
      ]
    }            
                  ];