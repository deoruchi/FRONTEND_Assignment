import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import GroupElement from "./GroupElement";
import { React, useEffect, useState } from "react";
function Area(props) {
  const subgroup = props.sub;

  if (subgroup) {
    const f = subgroup.map((c) => {
      return (
        <GroupElement
          label={c.label}
          ui={c.uiType}
          valid={c.validate}
          name={c.jsonKey}
          value={c.value}
          default={c.defaultValue}
          sub={c.subParameters}
          con={c.conditions}
        ></GroupElement>
      );
    });
    return (
      <div>
        <p required={props.vali.required ? true : false}>{props.label}</p>
        {f}
      </div>
    );
  } else {
    return (
      <div>
        <GroupElement
          label={props.label}
          ui={props.uiType}
          valid={props.vali}
          name={props.jsonKey}
          sub={props.subParameters}
        ></GroupElement>
      </div>
    );
  }
}

export default Area;
