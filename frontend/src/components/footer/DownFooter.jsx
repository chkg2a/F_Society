import { Link } from "react-router-dom";

const DownFooter = () => {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <div>
        <Link to="/">Animal Rescue</Link>
      </div>
      <div>
        <Link to="/signup" className="btn">SignUp</Link>
      </div>
    </div>
  );
};

export default DownFooter;
