import { TextareaAutosize } from "@mui/material";
import { useState } from "react";

export default function Editor(props) {
  const [jsonfile, setJsonfile] = useState();
  const handleChange = (e) => {
    setJsonfile(e.target.value);
    props.passfunction(jsonfile);
  };

  return (
    <section className="textArea">
      <TextareaAutosize
        placeholder="paste your ui schema here"
        onChange={handleChange}
        minRows={30}
        style={{ width: 300 }}
        variant="filled"
        color="secondary"
      ></TextareaAutosize>
    </section>
  );
}
