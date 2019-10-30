import React, { Component } from 'react'
import { Form, Label, Input, } from 'reactstrap';

const firebase = require('firebase');
const uuid = require('uuid');

var firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSENGINGSENDERID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Survey extends Component {

  nameSubmit(event){
    var studentName = this.refs.name.value;
    this.setState({studentName : studentName}, function(){
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
      studentName : this.state.studentName,
      answers : this.state.answers
    });

    this.setState({isSubmitted : true })

  }
  constructor(props) {
    super(props)
  
    this.state = {
       uid : uuid.v1(),
       studentName: '',
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
    let studentName;
    let questions;

    if (this.state.studentName === '' && this.state.isSubmitted === false) {
      
      studentName =  <div>
                      <h3>Hey Player! Please enter your name</h3> 
                      <form onSubmit={this.nameSubmit}>
                        <input type="text" placeholder="Enter your name" ref="name" />
                      </form>
                    </div>;
      questions ='';

    } else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
        studentName = <h3> {this.state.studentName}, please answer these questions:</h3>;
        questions = <div>
                    <h3>Hello there, {this.state.studentName} - Here are some questions:</h3>
                      <Form onSubmit={this.questionsSubmitted}>
                        <div>
                            <Label>What's your Hogwarts House?</Label>
                            <br/>
                            <Input type="radio" name="answer1" value="Gryffindor" onChange={this.answerSelected} /> Gryffindor
                            <Input type="radio" name="answer1" value="Hufflepuff" onChange={this.answerSelected} /> Hufflepuff
                            <Input type="radio" name="answer1" value="Ravenclaw" onChange={this.answerSelected} /> Ravenclaw
                            <Input type="radio" name="answer1" value="Slytherin" onChange={this.answerSelected} /> Slytherin
                        </div>
                        <div>
                            <Label>Who is your favourite Harry Potter character?</Label>
                            <br/>
                            <Input type="radio" name="answer2" value="Harry" onChange={this.answerSelected} /> Harry
                            <Input type="radio" name="answer2" value="Ron" onChange={this.answerSelected} /> Ron
                            <Input type="radio" name="answer2" value="Hermione" onChange={this.answerSelected} /> Hermione
                            <Input type="radio" name="answer2" value="Other" onChange={this.answerSelected} /> Other
                        </div>
                        <div>
                            <Label>What is your favourite Harry Potter spell?</Label>
                            <br/>
                            <Input type="radio" name="answer3" value="Lumos" onChange={this.answerSelected} /> Lumos
                            <Input type="radio" name="answer3" value="Expelliarmus" onChange={this.answerSelected} /> Expelliarmus
                            <Input type="radio" name="answer3" value="Alohomora" onChange={this.answerSelected} /> Alohomora
                            <Input type="radio" name="answer3" value="Other" onChange={this.answerSelected} /> Other
                        </div>
                        <div>
                            <Label>Who is your favourite Harry Potter baddie?</Label>
                            <br/>
                            <Input type="radio" name="answer4" value="Gellert Grindelwald" onChange={this.answerSelected} /> Gellert Grindelwald
                            <Input type="radio" name="answer4" value="Dolores Umbridge" onChange={this.answerSelected} /> Dolores Umbridge
                            <Input type="radio" name="answer4" value="Bellatrix Lestrange" onChange={this.answerSelected} /> Bellatrix Lestrange
                            <Input type="radio" name="answer4" value="Voldemort" onChange={this.answerSelected} /> Voldemort
                        </div>
                        <div>
                            <Label>What is the tastiest Harry Potter candy??</Label>
                            <br/>
                            <Input type="radio" name="answer5" value="Chocolate Frog" onChange={this.answerSelected} /> Chocolate Frog
                            <Input type="radio" name="answer5" value="Bertie Botts Beans" onChange={this.answerSelected} /> Bertie Botts Beans
                            <Input type="radio" name="answer5" value="Butterbeer" onChange={this.answerSelected} /> Butterbeer
                            <Input type="radio" name="answer5" value="Other" onChange={this.answerSelected} /> Other
                        </div>
                        <Input type="submit" value="submit" />
                      </Form>
                    </div>;
                  
    } else if (this.state.isSubmitted === true) {
      studentName = <h3>Thanks, {this.state.studentName}. Your answers have been submitted</h3>;
    }
    return (
      <div>
        {studentName}
        <hr/>
        {questions}
      </div>
    )
  }
}

export default Survey