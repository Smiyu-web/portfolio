import backArrow from "../../images/whiteArrow.png";

const BackArrow = (props) => {
  return (
    <span
      className="flex absolute -bottom-20 left-200 md:left-300 cursor-pointer"
      onClick={props.onClick}
      type={props.type}
    >
      <img
        src={backArrow}
        alt=""
        className="transform -rotate-90 h-6 md:h-10 lg:h-14"
      />
      <h6 className="ml-3 md:ml-5 lg:ml-8 self-center tracking-widest">BACK</h6>
    </span>
  );
};

export default BackArrow;
