import { variant } from "styled-system";

const sharedStyles = {
    borderRadius: 4,
    border: 1,
    paddingLeft: 8,
    "::-webkit-input-placeholder": {
        color: "text.disabled",
    },
};

const defaultStyles = {
    type: "text",
    bg: "input.default",
    color: "text.primary",
    borderColor: "border.default",
    "&:focus": {
        borderColor: "border.default",
        outline: "none",
    },
};

const successStyles = {
    bg: "input.success",
    color: "text.primary",
    borderColor: "border.success",
    "&:focus": {
        borderColor: "border.success",
        outline: "none",
    },
};

const warningStyles = {
    bg: "input.warning",
    color: "text.primary",
    borderColor: "border.warning",
    "&:focus": {
        borderColor: "border.warning",
        outline: "none",
    },
};

const errorStyles = {
    bg: "input.error",
    color: "text.primary",
    borderColor: "border.error",
    "&:focus": {
        borderColor: "border.error",
        outline: "none",
    },
};

const textStyles = {
    bg: "input.dark",
    color: "text.disabled",
    borderColor: "border.default",
    "&:focus": {
        borderColor: "border.white",
        outline: "none",
    },
};

export const inputVariants = variant({
    variants: {
        default: {
            ...sharedStyles,
            ...defaultStyles,
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

const smSizeStyles = {
    fontFamily: "body",
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 24,
    height: "28px",
};

const mdSizeStyles = {
    fontFamily: "body",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 24,
    height: "34px",
};

const lgSizeStyles = {
    fontFamily: "body",
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: 32,
    height: "40px",
};

export const inputSizeVariants = variant({
    prop: "inputSize",
    variants: {
        sm: smSizeStyles,
        md: mdSizeStyles,
        lg: lgSizeStyles,
    },
});
