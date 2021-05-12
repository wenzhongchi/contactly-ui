import { variant } from "styled-system";

import { AnyStringObject } from "@contactly-ui/system";

import { ButtonOrientation } from "./ButtonGroup";

const sharedStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 16,
    borderRadius: 4,
    border: 1,
    boxSizing: "border-box",
    appearance: "none",
    ml: 0,
    mr: 0,
    mt: 0,
    mb: 0,
};

const defaultStyles = {
    bg: "button.default",
    borderColor: "button.border-default-default",
    cursor: "pointer",
    "&:hover": {
        bg: "button.hover-default",
        borderColor: "button.border-default-hover",
    },
    "&:focus": {
        bg: "button.hover-default",
        borderColor: "button.border-default-focus",
        borderWidth: 2,
    },
};

const primaryStyles = {
    bg: "button.primary",
    borderColor: "button.border-primary-default",
    cursor: "pointer",
    "&:hover": {
        bg: "button.hover-primary",
        borderColor: "button.border-primary-hover",
    },
    "&:focus": {
        bg: "button.hover-default",
        borderColor: "button.border-primary-focus",
        borderWidth: 2,
    },
};

const secondaryStyles = {
    bg: "button.secondary",
    borderColor: "button.border-secondary-default",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.light",
        borderColor: "button.border-secondary-hover",
    },
    "&:focus": {
        bg: "button.hover-default",
        borderColor: "button.border-secondary-focus",
        borderWidth: 2,
    },
};

const successStyles = {
    bg: "button.success",
    borderColor: "button.border-success-default",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.success",
        borderColor: "button.border-success-hover",
    },
    "&:focus": {
        bg: "button.hover-success",
        borderColor: "button.border-success-focus",
        borderWidth: 2,
    },
};

const warningStyles = {
    bg: "button.warning",
    borderColor: "button.border-warning-default",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.warning",
        borderColor: "button.border-warning-hover",
    },
    "&:focus": {
        bg: "button.hover-default",
        borderColor: "button.border-warning-focus",
        borderWidth: 2,
    },
};

const errorStyles = {
    bg: "button.error",
    borderColor: "button.border-error-default",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.error",
        borderColor: "button.border-error-hover",
    },
    "&:focus": {
        bg: "button.hover-default",
        borderColor: "button.border-error-focus",
        borderWidth: 2,
    },
};

const textStyles = {
    bg: "button.text",
    borderColor: "button.text",
    cursor: "pointer",
    "&:focus": {
        borderColor: "button.border-text-focus",
        borderWidth: 2,
    },
};

export const styleVariants = variant({
    variants: {
        default: {
            ...sharedStyles,
            ...defaultStyles,
        },
        primary: {
            ...sharedStyles,
            ...primaryStyles,
        },
        secondary: {
            ...sharedStyles,
            ...secondaryStyles,
        },
        success: {
            ...sharedStyles,
            ...successStyles,
        },
        error: {
            ...sharedStyles,
            ...errorStyles,
        },
        warning: {
            ...sharedStyles,
            ...warningStyles,
        },
        text: {
            ...sharedStyles,
            ...textStyles,
        },
    },
});

export const sizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            height: "34px",
            padding: "8px 12px",
        },
        md: {
            height: "48px",
            padding: "12px 14px",
        },
        lg: {
            height: "60px",
            padding: "18px 18px",
        },
    },
});

export const getButtonGroupStyle = (
    orientation: ButtonOrientation = "horizontal",
): AnyStringObject => {
    const horizontalStyle = {
        "&:not(:first-of-type)": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        "&:not(:last-of-type)": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        },
    };
    const verticalStyle = {
        "&:not(:first-of-type)": {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        },
        "&:not(:last-of-type)": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
    };
    return orientation === "horizontal" ? horizontalStyle : verticalStyle;
};
