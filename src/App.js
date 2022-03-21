import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Questions';
import './styles.css'
function App() {

  const [questions, setQuestions]=useState(data);
  return (

    <main>
      <div className="container">
        <h4
          style={{ textAlign: "center", color: "#FF9900 ", fontWeight: "400" }}
        >
          AWS & <span style={{ color: "#00a1f1" }}>Microsoft</span>
        </h4>
        <br />
        <h3 style={{ fontFamily: "cursive"}}>
          Have Ques ? 
          <br/>
            <br/>
          get your Answers:-
        </h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
