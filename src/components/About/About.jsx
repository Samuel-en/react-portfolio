import React from 'react';
import "./About.css"

function About() {
    return (
        <>
        <div className='about-container'>
            <div className='about-me'>
            <h1>About me</h1>
                <p>
                My name is Samuel Endrias, I am currently studying fullstack web development 
                  at Ga Tech. I hope to get my certification in web development and work in the field to master 
                  the art of programming. I have worked with HTML, CSS, JavaScript, Ajax, JASON, Nodejs. One of 
                  the projects i worked on was creating a web application which tracks the iss space station.
                  ISStracker is a dynamic, responsive codebase created to actively track the location of the 
                  International Space Station at all times. This codebase primarily consists of JavaScript and 
                  jQuery framework used to extract the OpenWeather, Open Notify, Leaflet Map and Wikipedia web APIs
                  via AJAX. When the user searches by their zip code, the system will display the next five times the
                  ISS will pass by their location, as well as the local forecasts for those passby times.
                </p>
            </div>
            </div>

            </>
            )
            }
            export default About