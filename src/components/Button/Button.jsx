import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string,
  btnType: PropTypes.number,
};

function Button({ text, btnType }) {
  return (
    <div
      className={`flex flex-row justify-center items-center text-3xl ${
        btnType == 1 || btnType == 3 ? null : "bg-brand-btn"
      } ${
        btnType == 1 || btnType == 3 ? "border-2 border-brand-btn" : null
      } w-96 h-16 rounded-md ${
        btnType == 2 || btnType != 3
          ? "text-white border-1 border-white"
          : "text-black"
      } text-lg`}
    >
      {text}
    </div>
  );
}

export default Button;
