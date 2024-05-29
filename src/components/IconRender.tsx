import { IconType } from "react-icons"

type IconRenderProps = {
    Icon: IconType
}
const IconRender = ({ Icon }: IconRenderProps) => {
    return (
        <div className="w-9 h-9 bg-gray-500 flex justify-center items-center rounded-lg">
            <Icon className="w-5 h-5 text-white" />
        </div>
    );
};

export default IconRender;