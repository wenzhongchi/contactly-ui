import { variant } from "styled-system";

const sharedStyles = {
    borderRadius: 4,
    border: 1,
    paddingLeft: 8,
    "::-webkit-input-placeholder": {
        color: "input.placeholder",
    },
};

const defaultStyles = {
    type: "text",
    color: "input.text",
    borderColor: "input.border-default-default",
    "&:focus": {
        borderColor: "input.border-default-focus",
        outline: "none",
    },
};

const successStyles = {
    color: "input.text",
    borderColor: "input.border-success-default",
    "&:focus": {
        borderColor: "input.border-success-focus",
        outline: "none",
    },
};

const warningStyles = {
    color: "input.text",
    borderColor: "input.border-warning-default",
    "&:focus": {
        borderColor: "input.border-warning-focus",
        outline: "none",
    },
};

const errorStyles = {
    color: "input.text",
    borderColor: "input.border-error-default",
    "&:focus": {
        borderColor: "input.border-error-focus",
        outline: "none",
    },
};

const textStyles = {
    color: "input.text",
    borderColor: "input.border-transparent",
    "&:focus": {
        borderColor: "input.border-transparent",
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
