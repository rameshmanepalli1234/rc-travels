import { StyledCarbonCleaning } from "./style";
import { travelServiceList } from "@utils";
import ProcessCard from "@components/ProcessCard";

const CarbonCleaning = () => {
  return (
    <StyledCarbonCleaning>
      <div className="carbon-cleaning-container-top">
        <div className="carbon-cleaning-our-specialty">Our Specialty</div>
        <div className="carbon-cleaning-process">
          Premium Tours and Travel Services
        </div>
        <div className="carbon-cleaning-advanced-technology">
          Reliable & Efficient Travel Service
        </div>
      </div>
      <div className="carbon-cleaning-container-bottom">
        {travelServiceList.map((item) => (
          <ProcessCard key={item.title} item={item} />
        ))}
      </div>
    </StyledCarbonCleaning>
  );
};

export default CarbonCleaning;
