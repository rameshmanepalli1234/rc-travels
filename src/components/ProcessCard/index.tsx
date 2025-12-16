import { StyledProcessCard } from "./style";
import { ProcessCardProps } from "./types";

const ProcessCard = ({ item }: ProcessCardProps) => {
  return (
    <StyledProcessCard data-testid="process-card">
      <div className="process-card-icon">
        <item.Icon className="process-card-icon-image" />
        <span className="process-card-icon-step-number">0{item.id}</span>
      </div>
      <h3 className="process-card-title">{item.title}</h3>
      <div className="process-card-description">{item.description}</div>
    </StyledProcessCard>
  );
};

export default ProcessCard;
