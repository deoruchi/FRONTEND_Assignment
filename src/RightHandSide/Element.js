import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import React from "react";
import "./Element.css";

import Area from "./Area";
import { Button } from "@mui/material";

function Element(props) {
  const dataFile = props.data;
  const [ui, setUi] = useState([]);

  useEffect(() => {
    if (dataFile === null || dataFile === undefined) {
      console.log("no data");
    } else {
      try {
        const op = JSON.parse(dataFile);
        console.log("file exist");
        const newui = op.map((c) => {
          const f = { ...{ ...c.validate } };

          return (
            <Area
              sort={c.sort}
              label={c.label}
              uiType={c.uiType}
              vali={f}
              sub={c.subParameters}
              level={c.level}
              name={props.jsonKey}
            ></Area>
          );
        });
        setUi(newui);
      } catch (error) {
        console.log("error");
      }
    }
  }, [dataFile, props.jsonKey]);

  return (
    <section className="ui-display">
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        {ui}
        <Button
          variant="filled"
          // onSubmit={}
        ></Button>
      </FormControl>
    </section>
  );
}
export default React.memo(Element);
