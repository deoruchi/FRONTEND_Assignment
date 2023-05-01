import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

export default function SelectElement(props) {
  const items = props.items;
  const [item2, setItem] = useState([]);

  useEffect(() => {
    const i = items.map((c, i = 0) => {
      return (
        <MenuItem key={i++} value={c.value}>
          {c.label}
        </MenuItem>
      );
    });

    setItem(i);
  }, [items]);
  return (
    <div>
      <Select onChange={props.onChange} size="small" sx={{ width: 150 }}>
        {item2}
      </Select>
    </div>
  );
}
