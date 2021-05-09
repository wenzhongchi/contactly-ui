import styled, { StyledComponentProps } from "styled-components";

import { AnyObject } from "@type/types";

type StyledCheckMarkIconProps = {
    variant?: "default" | "error" | "disabled";
    hovered: boolean;
    defaultChecked: boolean;
};

type CheckMarkIconProps = StyledComponentProps<"svg", AnyObject, StyledCheckMarkIconProps, never>;

const CheckMarkIcon = styled.svg<CheckMarkIconProps>(
    ({ theme: { colors }, defaultChecked, variant }) => {
        const getIconColor = () => {
            if (defaultChecked) {
                if (variant === "disabled") return colors.icon.disabled;
                if (variant === "error") return colors.icon.error;
                return colors.icon.primary;
            }
            return colors.icon.default;
        };

        return {
            viewBox: "0 0 11 8",
            width: "11px",
            height: "8px",
            fill: "none",
            stroke: getIconColor(),
            strokeWidth: "2px",
        };
    },
);

export default CheckMarkIcon;
