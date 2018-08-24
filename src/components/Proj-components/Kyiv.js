import React, { Component } from 'react'
import '../../styles/Kyiv.scss'

class Kyiv extends Component {
    render() {
      return(
        <div>
            <h1 id="kyiv-title"> Kyiv </h1>

            <div id="kyiv-container">
              <div id="kyiv-img">
              </div>
              <p>
                <b>Kyiv</b> is the capital and largest city of Ukraine, located in the north central part of the country on the Dnieper.
                The population in July 2015 was 2,887,974 (though higher estimated numbers have been cited in the press),
                making Kiev the 7th most populous city in Europe. <br /> Kiev is an important industrial, scientific, educational,
                and cultural centre of Eastern Europe. It is home to many high-tech industries, higher education institutions,
                and world-famous historical landmarks. The city has an extensive infrastructure and highly developed system of public transport,
                including the Kiev Metro. <br />
                The citys name is said to derive from the name of Kyi, one of its four legendary founders (see Name, below).
                During its history, Kiev, one of the oldest cities in Eastern Europe, passed through several stages of great prominence and relative obscurity.
                The city probably existed as a commercial centre as early as the 5th century.
              </p>
            </div>
    		</div>
      )
    }
}

export default Kyiv
