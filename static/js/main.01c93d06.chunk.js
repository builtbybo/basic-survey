(this["webpackJsonpbasic-survey"]=this["webpackJsonpbasic-survey"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logo.25bf045c.svg"},25:function(e,a,t){e.exports=t(52)},30:function(e,a,t){},31:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(18),l=t.n(s),i=(t(30),t(19)),o=t.n(i),u=(t(31),t(20)),c=t(23),m=t(21),d=t(5),h=t(13),w=t(24),v=t(57),b=t(58),y=t(59),E=t(32),p=t(47);E.initializeApp({apiKey:"AIzaSyD0EYybFgtDvcqnwOK90P6gQMs8y_2V1XY",authDomain:"basic-survey.firebaseapp.com",databaseURL:"https://basic-survey.firebaseio.com",projectId:"basic-survey",storageBucket:"basic-survey.appspot.com",messagingSenderId:"91800356453",appId:"1:91800356453:web:cec7c2fc3b96a07b00a88c",measurementId:"G-6R3V7VS6F6"});var g=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={uid:p.v1(),studentName:"",answers:{answer1:"",answer2:"",answer3:"",answer4:"",answer5:""},isSubmitted:!1},t.nameSubmit=t.nameSubmit.bind(Object(d.a)(t)),t.answerSelected=t.answerSelected.bind(Object(d.a)(t)),t.questionsSubmitted=t.questionsSubmitted.bind(Object(d.a)(t)),t}return Object(w.a)(a,e),Object(h.a)(a,[{key:"nameSubmit",value:function(e){var a=this.refs.name.value;this.setState({studentName:a},(function(){console.log(this.state)}))}},{key:"answerSelected",value:function(e){var a=this.state.answers;"answer1"===e.target.name?a.answer1=e.target.value:"answer2"===e.target.name?a.answer2=e.target.value:"answer3"===e.target.name?a.answer3=e.target.value:"answer4"===e.target.name?a.answer4=e.target.value:"answer5"===e.target.name&&(a.answer5=e.target.value),this.setState({answers:a},(function(){console.log(this.state)}))}},{key:"questionsSubmitted",value:function(){E.database().ref("basic-survey/"+this.state.uid).set({studentName:this.state.studentName,answers:this.state.answers}),this.setState({isSubmitted:!0})}}]),Object(h.a)(a,[{key:"render",value:function(){var e,a;return""===this.state.studentName&&!1===this.state.isSubmitted?(e=r.a.createElement("div",null,r.a.createElement("h3",null,"Hey Player! ",r.a.createElement("br",null)," Please enter your name"),r.a.createElement("form",{onSubmit:this.nameSubmit},r.a.createElement("input",{type:"text",placeholder:"Enter your name",ref:"name"}))),a=""):""!==this.state.studentName&&!1===this.state.isSubmitted?(e=r.a.createElement("h3",null," ",this.state.studentName,", please answer these questions:"),a=r.a.createElement("div",null,r.a.createElement("h3",null,"Hello there, ",this.state.studentName," - Here are some questions:"),r.a.createElement(v.a,{onSubmit:this.questionsSubmitted},r.a.createElement("div",null,r.a.createElement(b.a,null,"What's your Hogwarts House?"),r.a.createElement("br",null),r.a.createElement(y.a,{type:"radio",name:"answer1",value:"Gryffindor",onChange:this.answerSelected})," Gryffindor",r.a.createElement(y.a,{type:"radio",name:"answer1",value:"Hufflepuff",onChange:this.answerSelected})," Hufflepuff",r.a.createElement(y.a,{type:"radio",name:"answer1",value:"Ravenclaw",onChange:this.answerSelected})," Ravenclaw",r.a.createElement(y.a,{type:"radio",name:"answer1",value:"Slytherin",onChange:this.answerSelected})," Slytherin"),r.a.createElement("div",null,r.a.createElement(b.a,null,"Who is your favourite Harry Potter character?"),r.a.createElement("br",null),r.a.createElement(y.a,{type:"radio",name:"answer2",value:"Harry",onChange:this.answerSelected})," Harry",r.a.createElement(y.a,{type:"radio",name:"answer2",value:"Ron",onChange:this.answerSelected})," Ron",r.a.createElement(y.a,{type:"radio",name:"answer2",value:"Hermione",onChange:this.answerSelected})," Hermione",r.a.createElement(y.a,{type:"radio",name:"answer2",value:"Other",onChange:this.answerSelected})," Other"),r.a.createElement("div",null,r.a.createElement(b.a,null,"What is your favourite Harry Potter spell?"),r.a.createElement("br",null),r.a.createElement(y.a,{type:"radio",name:"answer3",value:"Lumos",onChange:this.answerSelected})," Lumos",r.a.createElement(y.a,{type:"radio",name:"answer3",value:"Expelliarmus",onChange:this.answerSelected})," Expelliarmus",r.a.createElement(y.a,{type:"radio",name:"answer3",value:"Alohomora",onChange:this.answerSelected})," Alohomora",r.a.createElement(y.a,{type:"radio",name:"answer3",value:"Other",onChange:this.answerSelected})," Other"),r.a.createElement("div",null,r.a.createElement(b.a,null,"Who is your favourite Harry Potter baddie?"),r.a.createElement("br",null),r.a.createElement(y.a,{type:"radio",name:"answer4",value:"Gellert Grindelwald",onChange:this.answerSelected})," Gellert Grindelwald",r.a.createElement(y.a,{type:"radio",name:"answer4",value:"Dolores Umbridge",onChange:this.answerSelected})," Dolores Umbridge",r.a.createElement(y.a,{type:"radio",name:"answer4",value:"Bellatrix Lestrange",onChange:this.answerSelected})," Bellatrix Lestrange",r.a.createElement(y.a,{type:"radio",name:"answer4",value:"Voldemort",onChange:this.answerSelected})," Voldemort"),r.a.createElement("div",null,r.a.createElement(b.a,null,"What is the tastiest Harry Potter candy??"),r.a.createElement("br",null),r.a.createElement(y.a,{type:"radio",name:"answer5",value:"Chocolate Frog",onChange:this.answerSelected})," Chocolate Frog",r.a.createElement(y.a,{type:"radio",name:"answer5",value:"Bertie Botts Beans",onChange:this.answerSelected})," Bertie Botts Beans",r.a.createElement(y.a,{type:"radio",name:"answer5",value:"Butterbeer",onChange:this.answerSelected})," Butterbeer",r.a.createElement(y.a,{type:"radio",name:"answer5",value:"Other",onChange:this.answerSelected})," Other"),r.a.createElement(y.a,{type:"submit",value:"submit"})))):!0===this.state.isSubmitted&&(e=r.a.createElement("h3",null,"Thanks, ",this.state.studentName,". Your answers have been submitted")),r.a.createElement("div",null,e,r.a.createElement("hr",null),a)}}]),a}(n.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),"Basic Survey",r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.01c93d06.chunk.js.map