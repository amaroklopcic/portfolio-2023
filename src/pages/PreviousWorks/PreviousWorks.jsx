import WorkTimeline, {
  TimelineCategory,
  TimelineCategoryItem
} from "../../components/WorkTimeline/WorkTimeline";
import previousWorksTimelineData from "../../data/previous-works-timeline.json";
import brightfieldLogo from "./brightfield.jpeg";
import gmodLogo from "./gmod.png";

function PreviousWorksSection() {
  previousWorksTimelineData[0]["icon"] = brightfieldLogo;
  previousWorksTimelineData[1]["icon"] = gmodLogo;

  return (
    <div id="previous-work" className="relative-position">
      <a href="#previous-work" className="link">
        <h1 style={{ color: "#C1EBF1", fontSize: "32px", marginBottom: "3rem", marginTop: "9rem" }}>
          Previous Work
        </h1>
      </a>

      <div>
        <div className="previous-work-section">
          <WorkTimeline>
            {previousWorksTimelineData.map((previousWork, index) => {
              return (
                <TimelineCategory
                  key={index}
                  name={previousWork.companyName}
                  categoryLink={previousWork.companyLink}
                  timeWorked={previousWork.timeAtCompany}
                  icon={previousWork.icon}
                  iconAlt={previousWork.iconAlt}
                  link={previousWork.companyWebsiteLink}>
                  {previousWork.positions.map((previousPosition, index) => {
                    return (
                      <TimelineCategoryItem
                        key={index}
                        title={previousPosition.title}
                        categoryItemLink={previousPosition.positionLink}
                        positionType={previousPosition.positionType}
                        timeWorked={previousPosition.positionTimeframe}
                        location={previousPosition.location}
                        description={previousPosition.description}
                        skills={previousPosition.skills}
                      />
                    );
                  })}
                </TimelineCategory>
              );
            })}
          </WorkTimeline>
        </div>
      </div>
    </div>
  );
}

export default PreviousWorksSection;
