import BottomFooter from "./bottom-footer";
import TopFooter from "./top-footer";


const Footer = () => {
    return (
        <div className="text-white bg-black/90 ">
            <div className="w-11/12 mx-auto">
                <TopFooter />
                <div className="bg-white h-[1px]" />
                <BottomFooter />
            </div>
        </div>
    );
};

export default Footer;
