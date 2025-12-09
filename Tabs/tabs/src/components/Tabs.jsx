import { useState } from "react";
import "../App.css";

const Tabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = (index) => setActiveIndex(index);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {items.map((item, index) => {
          let tabClass = "tab-item";
          if (activeIndex === index) tabClass = "tab-item active";
          return <div key={index} className={tabClass} onClick={() => handleTabClick(index)}>{item.label}</div>;
        })}
      </div>
      <div className="tabs-content">{items[activeIndex].content}</div>
    </div>
  );
};

export default Tabs;
