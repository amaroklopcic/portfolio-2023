import { Children, cloneElement } from "react";
import "./WorkTimeline.css";

function WorkTimeline(props) {
  return (
    <div className="timeline-container">
      {Children.map(props.children, (child, index) => {
        return (
          <div>
            {cloneElement(child)}
            {index + 1 !== Children.count(props.children)
              ? <hr style={{ margin: "1.5rem 0" }} />
              : <></>
            }
          </div>
        )
      })}
    </div>
  )
}

function TimelineCategory(props) {
  return (
    <div>
      {/* category header section (icon + category/company name) */}
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <img
          src={props.icon}
          alt={props.iconAlt}
          style={{ display: "block", width: "48px", height: "48px", border: "none" }}
        />
        <div className="timeline-category-item-container">
          <b className="timeline-no-space timeline-title-text">{props.name}</b>
          <p className="timeline-no-space">{props.timeWorked}</p>
        </div>
      </div>

      {Children.map(props.children, (child, index) => {
        return (
          <div style={{ marginLeft: "1.3rem", marginBottom: "1rem", marginTop: "1rem" }}>
            {/* different category items (different job positions at the company) */}
            <div
              style={{ display: "flex" }}
            >
              {/* div containing left side dots/lines */}
              <div style={{ marginRight: "1rem" }}>
                <div className="timeline-circle" />
                {index + 1 !== (props.children || []).length
                  ? <div className="timeline-vertical-line"></div>
                  : <></>
                }
              </div>
              {/* TimelineCategoryItem */}
              {cloneElement(child)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function TimelineCategoryItem(props) {
  return (
    <div className="timeline-category-item-container">
      <b className="timeline-no-space">{props.title}</b>
      <p className="timeline-no-space">{props.positionType}</p>
      <p className="timeline-no-space timeline-text-grey">{props.timeWorked}</p>
      <p className="timeline-no-space timeline-text-grey">{props.location}</p>
      <br />
      <p className="timeline-no-space">
        <b style={{ fontSize: "14px" }}>Skills: </b>
        {(props.skills || []).map((skill, index) => {
          return <span>{skill}{index + 1 !== props.skills.length ? " · " : <></>}</span>
        })}
      </p>
    </div>
  )
}


export default WorkTimeline;
export { TimelineCategory, TimelineCategoryItem };
