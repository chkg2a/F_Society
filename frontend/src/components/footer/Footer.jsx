import UpperFooter from "./UpperFooter";
import DownFooter from "./DownFooter";

const Footer = () => {
  return (
    <div className="w-full p-20 bg-[rgba(5,10,30,0.4)] flex-col flex items-center justify-center">
      <div className="w-full lg:w-2/3">
        <UpperFooter />
        <div className="divider"/>
        <DownFooter />
      </div>
    </div>
  );
};

export default Footer;
