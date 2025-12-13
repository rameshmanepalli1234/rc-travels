import React from "react";
import { useIntl } from "react-intl";
import { infobarUtils, infoIconUtils } from "@utils";
import { InfoBarItem } from "./types";
import { StyledInfoBar } from "./style";

const InfoBar: React.FC = () => {
  const intl = useIntl();
  const items: InfoBarItem[] = infobarUtils(intl);

  return (
    <StyledInfoBar data-testid="section-infobar">
      <div className="info-bar-left-container">
        {items.map((item: InfoBarItem, index: number) => (
          <div key={index} className="info-bar-item">
            <item.Icon />
            <span className="info-bar-item-text">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="info-bar-right-container">
        {infoIconUtils.map((item: InfoBarItem, index: number) => (
          <item.Icon key={index} />
        ))}
      </div>
    </StyledInfoBar>
  );
};

export default InfoBar;
