import nextArrow from "../../images/whiteArrow.png";

const NextArrow = (props) => {
  return (
    <span
      className="flex absolute -bottom-20 right-200 md:right-300 cursor-pointer h-6 md:h-10 lg:h-14"
      onClick={props.onClick}
      type={props.type}
    >
      <h6 className="mr-3 md:mr-5 lg:mr-8 self-center tracking-widest">NEXT</h6>
      <img
        src={nextArrow}
        alt=""
        className="transform rotate-90 h-6 md:h-10 lg:h-14"
      />
    </span>
  );
};

export default NextArrow;
