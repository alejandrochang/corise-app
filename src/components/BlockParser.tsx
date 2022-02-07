import React from "react";
import Markdown from './Markdown';
import MCQ from './MCQ';
import TextArea from "./TextArea";
import "../App.css";

// interface Details {
//   Question?: String,
//   CorrectOption?: String,
//   FeedbackOnIncorrect?: String,
//   IncorrectOptions?: ["Red", "Green", "Yellow"],
// }

interface SingleConfig {
  Type: String;
  Object: any;
}

interface Config {
  config: SingleConfig[];
}

const formatElements = (component: any) => {
  const { Type } = component;
  if (Type === "Markdown") {
    return <Markdown component={component} />;
  } else if (Type === "MCQ") {
    return <MCQ component={component} />;
  } else if (Type === 'Text-Area') {
    return <TextArea component={component} />
  }
};

function BlockParser(data: Config) {
  return (
    <div className="block-parser">
      {data.config.map((component) => {
        return <>{formatElements(component)}</>;
      })}
    </div>
  );
}

export default BlockParser;
