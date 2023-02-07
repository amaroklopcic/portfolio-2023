import Stars from "./Stars";
import "./NorthernLights.css";

function NorthernLights(props) {
    return (
        <div className="container">
            <div className="auroral-northern" />
            <Stars />
            <div style={{ position: "absolute", top: 0, left: 0 }}>
                {props.children}
            </div>
        </div>
    )
}

export default NorthernLights;
