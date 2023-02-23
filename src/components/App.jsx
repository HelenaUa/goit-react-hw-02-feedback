import React, { Component } from "react";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  
  addNeutral = () => { 
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
   };
  
  render() {
    return (
      <div>
        <Section title="Plese leave feedback" />
        <FeedbackOptions
          addGood={this.addGood}
          addNeutral={this.addNeutral}
          addBad={this.addBad}
          // options={}
          // onLeaveFeedback={ }
        />
        <Statistics 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          // total={ }
          // positivePercentage={ }
          />
          
    </div>
  );
  }
  
};
