import React, { useState } from "react";
import "../App.css";

interface Component {
  Type: String;
  Object: any;
}

interface Comp {
  component: Component;
}

function MCQ(comp: Comp) {
  const {
    component: {
      Object: {
        CorrectOption,
        FeedbackOnIncorrect,
        IncorrectOptions,
        Question,
      },
    },
  } = comp;
  const [selectedButton, setSelectedButton] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.currentTarget.value;
    setSelectedButton(val);
  };

  console.log('?', FeedbackOnIncorrect, { FeedbackOnIncorrect  });
  // const shuffle = (array: any[]) => array.sort(() => Math.random() - 0.5);
  // shuffle options - ideally this should be coming from the config structure - to avoid re-render on change
  const options = [CorrectOption, ...IncorrectOptions];
  return (
    <div className="container">
      <h2>Quick Quiz</h2>
      <p>{Question}</p>
      {options.map((option) => {
        return (
          <>
            <input
              type="radio"
              id="opt"
              name="option"
              value={option}
              checked={selectedButton === option}
              onChange={handleInputChange}
            />
            <label htmlFor="opt">{option}</label>
            <br />
          </>
        );
      })}
      {selectedButton && CorrectOption !== selectedButton && (
        <div className="error">{FeedbackOnIncorrect}</div>
      )}
    </div>
  );
}

export default MCQ;
