import {
  FormControlLabel,
  RadioGroup,
  Radio,
  unstable_ClassNameGenerator,
} from "@mui/material";
import { useState, useEffect } from "react";
export default function RadioElement(props) {
  const items = props.items;
  const [item2, setItem] = useState([]);
  const [ok, setOk] = useState();

  function handle1(e) {
    setOk(e.target.value);
    props.fucntionPass(e.target.value);
  }
  useEffect(() => {
    const i = items.map((c, i = 0) => {
      return (
        <FormControlLabel
          key={i++}
          value={c.value}
          control={<Radio />}
          label={c.label}
        />
      );
    });

    setItem(i);
  }, [items]);
  return (
    <RadioGroup
      onClick={handle1}
      name={props.name}
      defaultValue={props.default}
    >
      {item2}
    </RadioGroup>
  );
}
