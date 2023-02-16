import { Envelope, GitHub, LinkedIn } from "../components/Icons";

const iconStyle = {
  width: "48px",
  height: "48px",
  margin: "0 3rem",
};

function ContactInfo() {
  return (
    <div
      id="contact"
      className="relative-position"
    >
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
        }}
      >
        <a className="contact-links" href="https://github.com/amaroklopcic">
          <div style={iconStyle}>
            <GitHub />
          </div>
        </a>
        <a
          className="contact-links"
          href="https://www.linkedin.com/in/amaroklopcic/"
        >
          <div style={iconStyle}>
            <LinkedIn />
          </div>
        </a>
        <a className="contact-links" href="mailto:amaroklopcic@outlook.com">
          <div style={iconStyle}>
            <Envelope />
          </div>
        </a>
      </div>
    </div>
  )
}

export default ContactInfo;
