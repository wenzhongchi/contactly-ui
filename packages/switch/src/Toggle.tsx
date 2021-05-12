import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import {
    compose,
    layout,
    space,
    position,
    LayoutProps,
    SpaceProps,
    PositionProps,
} from "styled-system";
import { useColor } from "@hooks/useColor";

export type ToggleProps = LayoutProps &
    SpaceProps &
    PositionProps & {
        variant?: "default" | "error";
        defaultChecked?: boolean;
        disabled?: boolean;
        disabledPress?: boolean;
        onChange?: (checked: boolean) => void;
    };

const StyledContainer = styled.label<ToggleProps>(
    {
        position: "relative",
        display: "inline-block",
        width: "28px",
        height: "16px",
    },
    compose(space, layout, position),
);

type StyledProps = {
    defaultCheck?: boolean;
    checkedColor: string;
    uncheckedColor: string;
    highlightColor?: string;
};

const StyledInput = styled.input<StyledProps>(({ checkedColor, uncheckedColor }) => ({
    "&:checked + span": {
        backgroundColor: useColor(checkedColor),
    },
    "&:disabled + span": {
        backgroundColor: useColor(uncheckedColor),
        opacity: 0.4,
        cursor: "not-allowed",
    },
    "&:disabled:checked + span": {
        backgroundColor: useColor(checkedColor),
        opacity: 0.4,
        cursor: "not-allowed",
    },
    "&:focus + span": {
        boxShadow: `0 0 1px ${useColor(checkedColor)}`,
    },
    "&:checked + span:before": {
        transform: `translateX(10px)`,
    },
    display: "none",
}));

const StyledSwitch = styled.span<StyledProps>(
    ({ defaultChecked, checkedColor, uncheckedColor, highlightColor }) => ({
        position: "absolute",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        backgroundColor: defaultChecked ? useColor(checkedColor) : useColor(uncheckedColor),
        "-webkit-transition": "0.2s",
        transition: "0.2s",
        borderRadius: "34px",
        "&:before": {
            position: "relative",
            borderRadius: "50%",
            content: "''",
            height: "12px",
            width: "12px",
            left: "3px",
            backgroundColor: useColor("bg.white"),
            "-webkit-transition": "0.2s",
            transition: "0.2s",
        },
        "&:hover": {
            backgroundColor: highlightColor && useColor(highlightColor),
        },
    }),
);

export const Toggle: React.FC<ToggleProps> = ({
    variant,
    disabled,
    disabledPress,
    defaultChecked,
    onChange,
    ...props
}) => {
    const [check, setCheck] = useState(defaultChecked ?? false);

    const getCheckedColor = () => {
        if (variant === "error") return "toggle.danger";
        return "toggle.primary";
    };

    const handleChange = useCallback(() => {
        if (disabled || disabledPress) return;
        if (onChange) onChange(!check);
        setCheck(!check);
    }, [onChange, check, disabled, disabledPress]);

    useEffect(() => {
        if (disabledPress) setCheck(defaultChecked ?? false);
    }, [defaultChecked, setCheck, disabledPress]);

    return (
        <StyledContainer {...props}>
            <StyledInput
                type="checkbox"
                onChange={handleChange}
                disabled={disabled}
                checked={check}
                checkedColor={getCheckedColor()}
                uncheckedColor={"toggle.secondary"}
            />
            <StyledSwitch
                defaultChecked={check}
                checkedColor={getCheckedColor()}
                uncheckedColor={"toggle.secondary"}
                highlightColor={"highlight.senary"}
            />
        </StyledContainer>
    );
};

Toggle.defaultProps = {
    variant: "default",
};
