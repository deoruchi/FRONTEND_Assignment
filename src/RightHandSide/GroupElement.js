import { FormControl, Portal, TextField } from "@mui/material";
import SelectElement from "./SelectElement";
import RadioElement from "./RadioElement";
import { useState } from "react";

export default function GroupElement(props) {
  const [values, setValues] = useState("");

  const handleFunction = (e) => {
    switch (props.ui) {
      case "Input":
        return (
          <div className="inside-design">
            <p>{props.label}</p>
            <TextField size="small"></TextField>
          </div>
        );
      case "Select":
        return (
          <div className="area-formation">
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <p>{props.label}</p>
              <SelectElement
                name={props.name}
                items={props.valid.options}
                key={props.sort}
              ></SelectElement>
            </FormControl>
          </div>
        );
      case "Radio":
        return (
          <FormControl>
            <RadioElement
              name={props.name}
              items={props.valid.options}
              default={props.defaultValue}
              fucntionPass={handleFunction}
              // onClick={match}
            ></RadioElement>
          </FormControl>
        );

      case "Group":
        return (
          <div className="inside-design">
            <p>{props.label}</p>
            <TextField size="small" name={props.name} ge={props.ge}></TextField>
          </div>
        );

      default:
    }
  };
}
