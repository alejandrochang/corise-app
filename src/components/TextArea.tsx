import React, { useState } from "react";
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

    const [currenttext, setSelectedText] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.currentTarget.value;
      setSelectedText(val);
    };

  return (
    <div className="container">
      <h2>This is the text area title</h2>
      <textarea
        onChange={handleInputChange}
        value={currenttext}
        placeholedr={Text}
        id="text-area"
        name="text-area"
        rows={5}
        cols={40}
      >
        {Text}
      </textarea>
    </div>
  );
}

export default Markdown;
