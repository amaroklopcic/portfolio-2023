import Envelope from "./envelope.svg";
import GitHub from "./github.svg";
import LinkedIn from "./linkedin.svg";

const iconStyle = {
  width: "48px",
  height: "48px",
  margin: "0 3rem"
};

function ContactInfo() {
  return (
    <div id="contact" className="relative-position">
      <a href="#contact" className="link">
        <h1 style={{ color: "#C1EBF1", fontSize: "32px", marginBottom: "3rem", marginTop: "9rem" }}>
          Contact
        </h1>
      </a>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          fontSize: "2.5rem",
          height: "600px"
        }}>
        <a className="contact-links" href="https://github.com/amaroklopcic">
          <div style={iconStyle}>
            <img src={GitHub} alt="github logo" />
          </div>
        </a>
        <a className="contact-links" href="https://www.linkedin.com/in/amaroklopcic/">
          <div style={iconStyle}>
            <img src={LinkedIn} alt="linkedin logo" />
          </div>
        </a>
        <a className="contact-links" href="mailto:amaroklopcic@outlook.com">
          <div style={iconStyle}>
            <img src={Envelope} alt="envelope icon" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
