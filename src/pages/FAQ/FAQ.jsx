import "./faq.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is ByteCraft Savannah?",
    answer:
      "ByteCraft Savannah is a tech-driven initiative focused on empowering individuals with skills in software, cloud, and IT solutions.",
  },
  {
    question: "How can I join your training programs?",
    answer:
      "You can apply through our website or follow us on our social platforms to stay updated on upcoming programs and opportunities.",
  },
  {
    question: "Do I need a background in IT to join?",
    answer:
      "Not at all. We welcome beginners as well as those with some experience. Our programs are designed to be beginner-friendly.",
  },
  {
    question: "Is ByteCraft Savannah affiliated with any organizations?",
    answer:
      "Yes, we collaborate with partners like...",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(true);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              <p>{faq.question}</p>
              <FaChevronDown
                color="gray"
                className={`chevron ${openIndex === index ? "rotate" : ""}`}
              />
            </button>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
