import "./contact.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-content">
        <form className="contact-form">
          <h3>Get in Touch</h3>
          <p>
            Have a question, need tech support, or want to partner with us? Send
            us a message!
          </p>

          {/* Social Links */}
          <div className="contact-socials">
            <div className="social-icons">
              <a
                href="https://wa.me/233507363607"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/bytecraftsavannah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} /> Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} /> Facebook
              </a>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <PrimaryButton
            label="Send Message"
            type="submit"
            style={{ marginTop: "1rem" }} 
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
