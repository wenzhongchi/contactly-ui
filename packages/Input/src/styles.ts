import { variant } from "styled-system";

const sharedStyles = {
    boxSizing: "border-box",
    borderRadius: 4,
    border: 1,
    paddingLeft: 12,
    "::-webkit-input-placeholder": {
        color: "input.placeholder",
    },
};

const boxShadow = "0px 0px 4px rgba(0, 101, 255, 0.24), inset 0px 0px 4px rgba(23, 43, 77, 0.5)";

const defaultStyles = {
    type: "text",
    color: "input.text",
    borderColor: "input.border-default-default",
    "&:focus": {
        boxShadow,
        borderColor: "input.border-default-focus",
        outline: "none",
    },
};

const successStyles = {
    color: "input.text",
    borderColor: "input.border-success-default",
    "&:focus": {
        boxShadow,
        borderColor: "input.border-success-focus",
        outline: "none",
    },
};

const warningStyles = {
    color: "input.text",
    borderColor: "input.border-warning-default",
    "&:focus": {
        boxShadow,
        borderColor: "input.border-warning-focus",
        outline: "none",
    },
};

const errorStyles = {
    color: "input.text",
    borderColor: "input.border-error-default",
    "&:focus": {
        boxShadow,
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
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: 18,
    height: "28px",
};

const mdSizeStyles = {
    fontFamily: "body",
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 20,
    height: "36px",
};

const lgSizeStyles = {
    fontFamily: "body",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 24,
    height: "44px",
};

export const inputSizeVariants = variant({
    prop: "inputSize",
    variants: {
        sm: smSizeStyles,
        md: mdSizeStyles,
        lg: lgSizeStyles,
    },
});
