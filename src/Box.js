import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div className='box'>
                <h3 id='main' >Minimalist Journaling Began Today</h3>
                <h3 id="travel">California</h3>
                <i id='social' class="material-icons">star</i>
                <i id='tv' class="material-icons">skip_previous</i>
                <i id='sarcasm' class="material-icons">favorite</i>
                <span id='scriptures' class='line'></span>
                <span id='prayer' class='line'></span>
                <p id="meditation">15</p>
                <i id='travelArrow' class="material-icons">arrow_right_alt</i>
                <h4 id="voluntary">No Meat</h4>
                <p id="day">9 6 2 8</p>
                <i id='self' class="material-icons">check</i>
                <p id="meaningful">2</p>
                <i id='thanks' class="material-icons">lens</i>
                <span id='new1' className="line newPeople"></span>
                <span id='new2' className="line newPeople"></span>
                <span id='new3' className="line newPeople"></span>
                <span id='new4' className="line newPeople"></span>
                <span id='new5' className="line newPeople"></span>
                <i id='personalProject' class="material-icons">radio_button_unchecked</i>
                <p id="topic">NWO</p>
                <p id="article">Pickleball</p>
                <p id="wake">8:00am</p>
                <p id="sleep">10:30pm</p>
                <i id='bike' class="material-icons">directions_bike</i>
                <p id="diet">VBMD</p>
                <p id="cost">$9</p>
                <p id="exercise">YIBT</p>
                <i id='sleepWell' class="material-icons">airline_seat_individual_suite</i>
                <span className="line" id="tvSleep"></span>
                <span id="fast">+</span>
                <i id='overate' class="material-icons">nature</i>
                <span className="line" id="mb"></span>
                <span className="line" id="bp"></span>
                <button id='boxBtn' className='blueBtn'>Edit Box</button>
            </div>
        );
    }
}

export default Box;