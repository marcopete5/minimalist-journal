import React, { Component } from 'react';

class Box extends Component {
    render() {
        let {info} = this.props;
        return (
            <div className='box'>
                <h3 id='main' >{info.main}</h3>
                <h3 id="travel">{info.travel}</h3>
                <i id='social' class="material-icons">star</i>
                <i id='tv' class="material-icons">skip_previous</i>
                <i id='sarcasm' class="material-icons">favorite</i>
                <span id='scriptures' class='line'></span>
                <span id='prayer' class='line'></span>
                <p id="meditation">{info.meditation}</p>
                <i id='travelArrow' class="material-icons">arrow_right_alt</i>
                <h4 id="voluntary">{info.voluntary}</h4>
                <span id="day1">{info.day1}</span>
                <span id="day2">{info.day2}</span>
                <span id="day3">{info.day3}</span>
                <span id="day4">{info.day4}</span>
                <i id='self' class="material-icons">check</i>
                <p id="meaningful">{info.meaningful}</p>
                <i id='thanks' class="material-icons">lens</i>
                <span id='new1' className="line newPeople"></span>
                <span id='new2' className="line newPeople"></span>
                <span id='new3' className="line newPeople"></span>
                <span id='new4' className="line newPeople"></span>
                <span id='new5' className="line newPeople"></span>
                <i id='personalProject' class="material-icons">radio_button_unchecked</i>
                <p id="topic">{info.topic}</p>
                <p id="article">{info.article}</p>
                <p id="wake">{info.wake}am</p>
                <p id="sleep">{info.sleep}pm</p>
                <i id='bike' class="material-icons">directions_bike</i>
                <p id="diet">{info.diet}</p>
                <p id="cost">${info.cost}</p>
                <p id="exercise">{info.exercise}</p>
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