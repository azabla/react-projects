import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getId) {
    setSelected(getId === selected ? null : getId);
  }
  function handleMultipleSelection(getId) {
    let cpymultiple = [...multiple];
    const findIndexOfCurrentId = cpymultiple.indexOf(getId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpymultiple.push(getId);
    else cpymultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpymultiple);
  }
  return (
    <div className="father">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi selection
      </button>
      <div className="accordian">
        {data && data.length ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => {
                  enableMultiSelection
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id);
                }}
              >
                <h2 className="title">
                  {dataItem.question} <span>+</span>
                </h2>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id)!== -1 && (
                      <div className="content">{dataItem.answer}</div>)
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}

                {/* {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !==-1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              
            </div>
          ))
        ) : (
          <div>no data found!</div>
        )}
      </div>
    </div>
  );
}
