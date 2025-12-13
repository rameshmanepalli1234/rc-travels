import { useState } from "react";
import { menuBarUtils } from "@/utils/MenuBarUtils";
import { StyledMenuBar } from "./style";

const MenuBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <StyledMenuBar data-testid="section-menu-bar">
      {menuBarUtils.map((item, index) => (
        <div
          key={index}
          className={`menu-bar-item ${activeTab === index ? "active" : ""}`}
          onClick={() => handleTabClick(index)}
          data-testid={`tab-company-${index + 1}`}
        >
          <span className="tab-icon">
            {index === 0 && "🚗"}
            {index === 1 && "🏎️"}
            {index === 2 && "🧹"}
          </span>
          <span className="tab-text">{item.name}</span>
        </div>
      ))}
    </StyledMenuBar>
  );
};

export default MenuBar;
