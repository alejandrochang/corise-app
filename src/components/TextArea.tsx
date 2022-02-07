import React from "react";
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
      <h2>This is the text area title</h2>
      <textarea id="text-area" name="text-area" rows={5} cols={40}>
        {Text}
      </textarea>
    </div>
  );
}

export default Markdown;
