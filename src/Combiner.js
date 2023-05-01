import { useState } from "react";
import Editor from "./LeftHandSide/Editor";
import Element from "./RightHandSide/Element";
import "./Combiner.css";
import { Button } from "@mui/material";

export default function Combiner() {
  const [fileJson, setFileJson] = useState([
    {
      sort: 1,
      label: "Pasta Name",
      description: "",
      conditions: [
        {
          jsonKey: "pizza_type.type",
          op: "==",
          value: "newyork",
          action: "enable",
        },
      ],
      validate: {
        required: true,
        immutable: false,
        options: [
          {
            label: "Red",
            value: "Red",
            description: "",
            icon: "",
          },
        ],
      },
      jsonKey: "name",
      uiType: "Input",
      icon: "",
      level: 0,
      placeholder: "",
    },
  ]);

  const getJason = (value) => {
    setFileJson(value);
  };

  return (
    <section className="main-page">
      <Editor passfunction={getJason} />
      <Element data={fileJson}></Element>
      <Button variant="filled"></Button>
    </section>
  );
}
