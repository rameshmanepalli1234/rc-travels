import { StyledCarbonCleaning } from "./style";
import { carbonCleaningList } from "@utils";
import ProcessCard from "@components/ProcessCard";

const CarbonCleaning = () => {
  return (
    <StyledCarbonCleaning>
      <div className="carbon-cleaning-container-top">
        <div className="carbon-cleaning-our-specialty">Our Specialty</div>
        <div className="carbon-cleaning-process">Carbon Cleaning Process</div>
        <div className="carbon-cleaning-advanced-technology">
          Advanced Technology for Superior Engine Performance
        </div>
      </div>
      <div className="carbon-cleaning-container-bottom">
        {carbonCleaningList.map((item) => (
          <ProcessCard key={item.title} item={item} />
        ))}
      </div>
    </StyledCarbonCleaning>
  );
};

export default CarbonCleaning;
