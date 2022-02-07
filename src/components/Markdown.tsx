import React from "react";
import ReactMarkdown from "react-markdown";
import "../App.css";

interface Component {
  Type: String, 
  Object: any,
}

interface Comp {
  component: Component,
}

function Markdown(data: Comp) {
    const {
      component: {
        Object: { Text },
      },
    } = data;

  return (
    <div className="container">
      <ReactMarkdown>{Text}</ReactMarkdown>
    </div>
  );
}

export default Markdown;
