import { useState } from "react";

import "./tabs.css";

export default function Tabs({ tabContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(getIndex) {
    setCurrentTabIndex(getIndex);
    onChange(getIndex);
  }

  return (
    <div className="container">
      <div className="tab-head">
        {tabContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
            key={tabItem.lable}
          >
            <span className="lable">{tabItem.lable}</span>
          </div>
        ))}
      </div>
      <div className="tab-content" style={{ color: "red" }}>
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
}
