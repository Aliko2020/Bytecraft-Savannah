import './PrimaryButton.css';

const PrimaryButton = ({ label, onClick, type = 'button', style = {} }) => {
  return (
    <button
      type={type}
      className="primary-button"
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
