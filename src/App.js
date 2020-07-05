import React, { Component } from 'react';
import Container from './components/Container';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleChangeStatistics = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  options() {
    return Object.keys(this.state);
  }

  statisticsData() {
    const statistics = Object.entries(this.state);
    statistics.push(
      ['total', this.countTotalFeedback()],
      ['positive feedback', this.countPositiveFeedbackPercentage()],
    );
    return statistics;
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (count, currentValue) => count + currentValue,
    );
  }

  countPositiveFeedbackPercentage() {
    return this.state.good
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options()}
            onLeaveFeedback={this.handleChangeStatistics}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics statistics={this.statisticsData()} />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
