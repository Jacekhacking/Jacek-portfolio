import ReactDOM from "react-dom";

const Backdrop = ({ onClick }) =>
  ReactDOM.createPortal(
    <div
      onClick={onClick}
      className="fixed inset-0 bg-bg/80 z-40 lg:hidden"
    />,
    document.getElementById("backdrop-hook")
  );

export default Backdrop;
