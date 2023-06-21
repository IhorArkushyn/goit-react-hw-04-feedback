// import React, { useState } from 'react';
// import { Statistics } from './Statistics/Statistics';
// import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const onLeaveFeedback = option => {
//     // В зависимости от выбранной опции обновляем соответствующее состояние
//     switch (option) {
//       case 'good':
//         setGood(prevGood => prevGood + 1);
//         break;
//       case 'neutral':
//         setNeutral(prevNeutral => prevNeutral + 1);
//         break;
//       case 'bad':
//         setBad(prevBad => prevBad + 1);
//         break;
//       default:
//         break;
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();

//     return total > 0 ? Math.round((good * 100) / total) : 0;
//   };

//   const options = ['good', 'neutral', 'bad'];

//   return (
//     <div>
//       <Section title="Please leave feedback">
//         <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
//       </Section>
//       <Section title="Statistics">
//         {countTotalFeedback() > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// };

// export default App;

import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    // В зависимости от выбранной опции обновляем соответствующее состояние
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  //   const onLeaveFeedback = option => {
  //     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  //   };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    const total = countTotalFeedback();

    return Math.round((good * 100) / total);
  };

  const options = ['good', 'neutral', 'bad'];
  //   const options = Object.keys(this.state);
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );

  //   onLeaveFeedback = option => {
  //     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  //   };

  //   countTotalFeedback = () => {
  //     const { good, neutral, bad } = this.state;

  //     return good + neutral + bad;
  //   };

  //   countPositiveFeedbackPercentage = () => {
  //     const { good } = this.state;
  //     const total = this.countTotalFeedback();

  //     return Math.round((good * 100) / total);
  //   };

  //   render() {
  //     const { good, neutral, bad } = this.state;
  //     const options = Object.keys(this.state);

  //     return (
  //       <div>
  //         <Section title="Please leave feedback">
  //           <FeedbackOptions
  //             onLeaveFeedback={this.onLeaveFeedback}
  //             options={options}
  //           />
  //         </Section>
  //         <Section title="Statistics">
  //           {this.countTotalFeedback() > 0 ? (
  //             <Statistics
  //               good={good}
  //               neutral={neutral}
  //               bad={bad}
  //               total={this.countTotalFeedback()}
  //               positivePercentage={this.countPositiveFeedbackPercentage()}
  //             />
  //           ) : (
  //             <Notification message="There is no feedback" />
  //           )}
  //         </Section>
  //       </div>
  //     );
  //   }
};

export default App;
