import { Link } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import services from "./services";
import "./services.css";

const ServicesList = () => {
  return (
    <div className="services-container">
      <div className="s-header">
        <h3>Our Services</h3>
        <p className="main-description">
          We provide practical tech solutions, training, and tools to help you
          and your business thrive in today’s digital world. Whether you need a
          reliable laptop, want to boost your digital skills, or bring your
          business online we’re here to support your growth, productivity, and
          success.
        </p>
      </div>
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h3 className="service-title">{service.title}</h3>
          <p className="service-tagline">{service.tagline}</p>
          <p className="service-description">{service.description}</p>
          <ul className="service-highlights">
            {service.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            <Link to={service.link} className="service-link">
              <PrimaryButton label="Learn More" />
            </Link>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
