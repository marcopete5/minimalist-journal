import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            main: 'Unproductive Day',
            travel: '',
            social: false,
            tv: 0,
            sarcasm: false,
            scriptures: false,
            prayer: false,
            meditation: '',
            voluntary: '',
            day: '',
            self: false,
            meaningful: '',
            thanks: false,
            newPeople: 0,
            project: false,
            topic: '',
            article: '',
            wake: '',
            sleep: '',
            bike: false,
            diet: '',
            cost: '',
            exercise: 0,
            sleepWell: false,
            tvSleep: false,
            fast: false,
            overate: false,
            mb: false,
            bp: false,
        }
    }
    handleChange = e => {
        let type = e.target.type === 'checkbox' ? 'checkbox': 'other';
        // console.log(e.target.value)
        if(e.target.type === 'checkbox'){
            e.target.value === 'false' || e.target.value === false ? this.setState({[e.target.name]: true}) : this.setState({[e.target.name]: false})
            console.log(e.target.value === 'false')
        }else {
            this.setState({[e.target.name]: e.target.value})
        }
    }
    render() {
        return (
            <div className='myForm'>
            <form>
                <div id="one">
                    <label>Main Accomplishment</label>
                    <input type="text" placeholder='Main Accomplishment' value={this.state.main} name='main' onChange={this.handleChange} />
                </div>
                <div id="two">
                    <label>Travel Location</label>
                    <input type="text" placeholder='Travel Location' value={this.state.travel} name='travel' onChange={this.handleChange} />
                </div>
                <div id="three">
                    <label>Used Social Media</label>
                    <input type="checkbox" value={this.state.social} name='social' onChange={this.handleChange} />
                </div>
                <div id="four">
                    <label>Hours of TV Watched</label>
                    <input type="number" placeholder='Hours of TV watched' value={this.state.tv} name='tv' onChange={this.handleChange} />
                </div>
                <div id="five">
                    <label>Avoided Sarcasm</label>
                    <input type="checkbox" value={this.state.sarcasm} name='sarcasm' onChange={this.handleChange} />
                </div>
                <div id="six">
                    <label>Read Scriptures</label>
                    <input type="checkbox" value={this.state.scriptures} name='scriptures' onChange={this.handleChange} />
                </div>
                <div id="seven">
                    <label>Prayed</label>
                    <input type="checkbox" value={this.state.prayer} name='prayer' onChange={this.handleChange} />
                </div>
                <div id="eight">
                    <label>Meditation Time(in min)</label>
                    <input type="number" placeholder='Meditation Time(min)' value={this.state.meditation} name='meditation' onChange={this.handleChange} />   
                </div>
                <div id="nine">
                    <label>Current Voluntary Suffering</label>
                    <input type="text" placeholder='Current Voluntary Suffering' value={this.state.voluntary} name='voluntary' onChange={this.handleChange} />
                </div>
                <div id="ten">
                    <label>Current Day</label>
                    <input type="number" placeholder='Current Day' value={this.state.day} name='day' onChange={this.handleChange} />
                </div>
                <div id='eleven'>
                    <label>Had Self Time</label>
                    <input type="checkbox" value={this.state.self} name='self' onChange={this.handleChange} />
                </div>
                <div id='twelve'>
                    <label># of Meaningful Encounters</label>
                    <input type="number" placeholder='# of Meaningful Encounters' value={this.state.meaningful} name='meaningful' onChange={this.handleChange} />
                </div>
                <div id="thirteen">
                    <label >Sent Thankful letter/text/phonecall</label>
                    <input type="checkbox" value={this.state.thanks} name='thanks' onChange={this.handleChange} />
                </div>
                <div id="fourteen">
                    <label># of New People Met</label>
                    <input type="number" placeholder='# of New People Met(must remember name)' value={this.state.newPeople} name='newPeople' onChange={this.handleChange} />
                </div>
                <div id="fifteen">
                    <label>Worked on Personal Project</label>
                    <input type="checkbox" value={this.state.project} name='project' onChange={this.handleChange} />
                </div>
                <div id="sixteen">
                    <label>Topics Studied Today</label>
                    <input type="text" placeholder='Topics Studied Today' value={this.state.topic} name='topic' onChange={this.handleChange} />
                </div>
                <div id="seventeen">
                    <label>Article/Blog Post Topic</label>
                    <input type="text" placeholder='Article/Blog Post Topic' value={this.state.article} name='article' onChange={this.handleChange} />
                </div>
                <div id="eighteen">
                    <label>Wake Time</label>
                    <input type="time" placeholder='Wake Time' value={this.state.wake} name='wake' onChange={this.handleChange} />
                </div>
                <div id="nineteen">
                    <label>Bed Time</label>
                    <input type="time" placeholder='Bed Time' value={this.state.sleep} name='sleep' onChange={this.handleChange} />
                </div>
                <div id="twenty">
                    <label>Rode Bie to Work</label>
                    <input type="checkbox" value={this.state.bike} name='bike' onChange={this.handleChange} />
                </div>
                <div id="twentyone">
                    <label>Diet Today</label>
                    <input type="text" placeholder='Diet Today' value={this.state.diet} name='diet' onChange={this.handleChange} />
                </div>
                <div id="twentytwo">
                    <label>Total Cost of Meals</label>
                    <input type="number" placeholder='Total Cost of Meals' value={this.state.cost} name='cost' onChange={this.handleChange} />
                </div>
                <div id="twentythree">
                    <label>Exercise Type</label>
                    <input type="text" placeholder='Exercise Type' value={this.state.exercise} name='exercise' onChange={this.handleChange} />
                </div>
                <div id="twentyfour">
                    <label>Intermittent Fasted</label>
                    <input type="checkbox" value={this.state.fast} name='fast' onChange={this.handleChange} />
                </div>
                <div id="twentyfive">
                    <label>Slept Well</label>
                    <input type="checkbox" value={this.state.sleepWell} name='sleepWell' onChange={this.handleChange} />
                </div>
                <div id="twentysix">
                    <label>Watched TV in Bed</label>
                    <input type="checkbox" value={this.state.tvSleep} name='tvSleep' onChange={this.handleChange} />
                </div>
                <div id="twentyseven">
                    <label>Overate</label>
                    <input type="checkbox" value={this.state.overate} name='overate' onChange={this.handleChange} />
                </div>
                <div id="twentyeight">
                    <label>MB</label>
                    <input type="checkbox" value={this.state.mb} name='mb' onChange={this.handleChange} />
                </div>
                <div id="twentynine">
                    <label>BP</label>
                    <input type="checkbox" value={this.state.bp} name='bp' onChange={this.handleChange} />
                </div>
                <div id="thirty">
                    <button className='blueBtn'>Submit</button>
                </div>
            </form>
            </div>
        );
    }
}

export default Form;