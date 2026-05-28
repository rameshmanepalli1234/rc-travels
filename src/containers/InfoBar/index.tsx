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
        {items.map((item: InfoBarItem, index: number) => {
          const content = (
            <>
              <item.Icon />
              <span className="info-bar-item-text">{item.name}</span>
            </>
          );

          if (item.href) {
            return (
              <a
                key={index}
                href={item.href}
                className="info-bar-item info-bar-item-link"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={index} className="info-bar-item">
              {content}
            </div>
          );
        })}
      </div>
      <div className="info-bar-right-container">
        {infoIconUtils.map((item: InfoBarItem, index: number) => (
          <a
            key={index}
            href={item.href}
            className="info-bar-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            <item.Icon />
          </a>
        ))}
      </div>
    </StyledInfoBar>
  );
};

export default InfoBar;
