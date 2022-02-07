import React from 'react';
import BlockParser from "./components/BlockParser";
import './App.css';

function App() {
  const config: {
    Type: String;
    Object: any;
  }[] = [
    // {
    //   Type: "Markdown",
    //   Object: {
    //     Text: "## Heading 2\n This is a markdown text with some `highligthed text`.  \n  **This is Bold**,  \n  *This is Italics*",
    //   },
    // },
    {
      Type: "Markdown",
      Object: {
        Text: "## Intuition \n Labeling [or annotation] is the process of identifying the inputs and outputs that are **worth** modeling (not just what could be modeled).  \n  - Use objective as a guide to determine the necessary signals \n  - Explore creating new signals \n  - Iteratively add more features  \n\n  Its also the phase where we can use our deep understanding of the problem, processes, constraints and domain expertise to: \n  - augment the training data split  \n  -  enhance using auxiliary data",
      },
    },
    {
      Type: "MCQ",
      Object: {
        Question: "What color is the sky?",
        CorrectOption: "Blue",
        IncorrectOptions: ["Red", "Green", "Yellow"],
        FeedbackOnIncorrect:
          "Please refer back to instructions in week 1 section 2 to read more about this again",
      },
    },
    {
      Type: "Text-Area",
      Object: {
        Text: "This is the text area example",
      },
    },
  ];

  return (
    <div className="App">
      <h1 className="title">Interactive Articles</h1>\
      <BlockParser config={config} />
    </div>
  );
}

export default App;
