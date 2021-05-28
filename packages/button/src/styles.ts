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
    background: "linear-gradient(180deg, #FFFFFF 0%, #F4F5F7 100%)",
    borderColor: "button.border-default-default",
    cursor: "pointer",
    "&:hover": {
        bg: "button.hover-default",
        borderColor: "button.border-default-hover",
    },
    "&:disabled": {
        background: "linear-gradient(180deg, #FFFFFF 0%, #F4F5F7 100%)",
        borderColor: "button.border-default-disabled",
        cursor: "not-allowed",
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
    "&:disabled": {
        bg: "button.disabled-primary",
        borderColor: "button.border-primary-disabled",
        cursor: "not-allowed",
    },
};

const secondaryStyles = {
    bg: "button.secondary",
    borderColor: "button.border-secondary-default",
    cursor: "pointer",
    "&:hover": {
        bg: "button.hover-secondary",
        borderColor: "button.border-secondary-hover",
    },
    "&:disabled": {
        bg: "button.disabled-secondary",
        borderColor: "button.border-secondary-disabled",
        cursor: "not-allowed",
    },
};

const successStyles = {
    bg: "button.success",
    borderColor: "button.border-success-default",
    cursor: "pointer",
    "&:hover": {
        bg: "button.hover-success",
        borderColor: "button.border-success-hover",
    },
    "&:disabled": {
        bg: "button.disabled-success",
        borderColor: "button.border-success-disabled",
        cursor: "not-allowed",
    },
};

const warningStyles = {
    bg: "button.warning",
    borderColor: "button.border-warning-default",
    cursor: "pointer",
    "&:hover": {
        bg: "button.hover-warning",
        borderColor: "button.border-warning-hover",
    },
    "&:disabled": {
        bg: "button.disabled-warning",
        borderColor: "button.border-warning-disabled",
        cursor: "not-allowed",
    },
};

const errorStyles = {
    bg: "button.error",
    borderColor: "button.border-error-default",
    cursor: "pointer",
    "&:hover": {
        bg: "button.hover-error",
        borderColor: "button.border-error-hover",
    },
    "&:disabled": {
        bg: "button.disabled-error",
        borderColor: "button.border-error-disabled",
        cursor: "not-allowed",
    },
};

const textStyles = {
    bg: "button.text",
    borderColor: "button.text",
    cursor: "pointer",
    "&:hover": {
        bg: "button.hover-text",
    },
    "&:disabled": {
        bg: "button.disabled-text",
        borderColor: "button.border-text-disabled",
        cursor: "not-allowed",
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
        xs: {
            height: "16px",
            padding: "0px",
        },
        sm: {
            height: "36px",
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

export const iconSizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            height: "36px",
            padding: "8px 8px",
        },
        md: {
            height: "48px",
            padding: "12px 12px",
        },
        lg: {
            height: "60px",
            padding: "14px 14px",
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
