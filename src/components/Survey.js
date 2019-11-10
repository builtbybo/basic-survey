import React, { Component } from 'react'

const firebase = require('firebase');
const uuid = require('uuid');

const firebaseConfig = {
  apiKey: "AIzaSyD0EYybFgtDvcqnwOK90P6gQMs8y_2V1XY",
  authDomain: "basic-survey.firebaseapp.com",
  databaseURL: "https://basic-survey.firebaseio.com",
  projectId: "basic-survey",
  storageBucket: "basic-survey.appspot.com",
  messagingSenderId: "91800356453",
  appId: "1:91800356453:web:cec7c2fc3b96a07b00a88c",
  measurementId: "G-6R3V7VS6F6"
};

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSENGINGSENDERID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// }


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Survey extends Component {

  nameSubmit(event){
    var userName = this.refs.name.value;
    this.setState({ userName: userName}, function(){
      console.log(this.state)
    })
  }

  answerSelected(event) {
    var answers = this.state.answers;
    if (event.target.name === 'answer1') {
        answers.answer1 = event.target.value;
    } else if (event.target.name === 'answer2') {
      answers.answer2 = event.target.value;
    } else if (event.target.name === 'answer3') {
      answers.answer3 = event.target.value;
    } else if (event.target.name === 'answer4') {
      answers.answer4 = event.target.value;
    } else if (event.target.name === 'answer5') {
      answers.answer5 = event.target.value;
    }

    this.setState({answers: answers}, function(){
      console.log(this.state)
    })
  }

  questionsSubmitted() {
    firebase.database().ref('basic-survey/'+this.state.uid).set({
      userName: this.state.userName,
      answers : this.state.answers
    });

    this.setState({isSubmitted : true })

  }
  constructor(props) {
    super(props)
  
    this.state = {
       uid : uuid.v1(),
      userName: '',
       answers: {
         answer1:'',
         answer2:'',
         answer3:'',
         answer4:'',
         answer5:''
       },
       isSubmitted: false
    };

    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionsSubmitted = this.questionsSubmitted.bind(this)
  }
  

  render() {
    let userName;
    let questions;

    if (this.state.userName === '' && this.state.isSubmitted === false) {
      
      userName =  <div>
                      <form onSubmit={this.nameSubmit}>
                        <input type="text" placeholder="Please enter your name" ref="name" />
                      </form>
                    </div>;
      questions ='';

    } else if (this.state.userName !== '' && this.state.isSubmitted === false) {
      userName = <h3>Hello there <span className="userName">{this.state.userName}</span>, please answer these survey questions:</h3>;
        questions = <div className="container">
                      <form onSubmit={this.questionsSubmitted}>
                        
                        <section>
                        <h3>1. What is your Hogwarts House?</h3>
                            <br/>
                            <ul>
                              <li>
                                <label className="btn-radio">
                                    <input type="radio" name="answer1" value="Gryffindor" onChange={this.answerSelected} /> 
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                                    <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Gryffindor</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                <input type="radio" name="answer1" value="Hufflepuff" onChange={this.answerSelected} /> 
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Hufflepuff</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                <input type="radio" name="answer1" value="Ravenclaw" onChange={this.answerSelected} /> 
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                <span>Ravenclaw</span>
                                </label>

                              </li>
                              <li>
                                <label className="btn-radio">
                                <input type="radio" name="answer1" value="Slytherin" onChange={this.answerSelected} /> 
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                <span>Slytherin</span>
                                </label>

                              </li>
                            </ul>
                        </section>
                        {/* Q2 */}
                        <section>
                        <h3>2. Who is your favourite Harry Potter character?</h3>
                            <br/>
                            <ul>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer2" value="Harry" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Harry</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer2" value="Ron" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Ron</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer2" value="Hermione" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Hermione</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer2" value="Other" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Other</span>
                                </label>
                              </li>
                            </ul>
                           
                        </section>

                        {/*  Q2  */}
                        <section>
                        <h3>3. What is the best wizarding spell?</h3>
                            <ul>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer3" value="Lumos" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Lumos</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer3" value="Expelliarmus" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Expelliarmus</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer3" value="Alohomora" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Alohomora</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer3" value="Other" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Other</span>
                                </label>
                              </li>

                            </ul>
                            
                        </section>
                        <section>
                        <h3>4. Who is the worst Harry Potter baddie?</h3>
                            <br/>
                            <ul>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer4" value="Gellert Grindelwald" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Gellert Grindelwald</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer4" value="Voldemort" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Voldemort</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer4" value="Bellatrix Lestrange" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Bellatrix Lestrange</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer4" value="Dolores Umbridge" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Dolores Umbridge</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer4" value="Other" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Other</span>
                                </label>
                              </li>
                             
                            </ul>
                        </section>


                        <section>
              <h3>5. Who is your favourite Hogwarts staff member? </h3>
                            <ul>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer5" value="Minerva McGonagall" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Minerva McGonagall</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer5" value="Quirinus Quirrell" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Quirinus Quirrell</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer5" value="Albus Dumbledore" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Albus Dumbledore</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer5" value="Severus Snape" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Severus Snape</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer5" value="Rubuis Hagrid" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                <span>Rubuis Hagrid</span>
                                </label>
                              </li>
                              <li>
                                <label className="btn-radio">
                                  <input type="radio" name="answer5" value="Other" onChange={this.answerSelected} />
                                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9"></circle>
                      <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                      <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                  </svg>
                                  <span>Other</span>
                                </label>
                              </li>

                            </ul>
                        </section>
                        <input type="submit"  value="submit" />
                      </form>
                    </div>;
                  
    } else if (this.state.isSubmitted === true) {
      userName = <h3>Thanks, Your answers have been submitted</h3>;
    }
    return (
      <div>
        {userName}
        
        {questions}
      </div>
    )
  }
}

export default Survey