import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

type ChangeIconProps = {
    isSelected: boolean;
    className: string;
}

const ChangeIcon = ({ isSelected, className }: ChangeIconProps) => {
    return (
        isSelected ? (
            <SunIcon className={className} />
        ) : (
            <MoonIcon className={className} />
        )
    )
}

export { ChangeIcon };