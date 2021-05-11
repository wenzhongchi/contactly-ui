import { variant } from "styled-system";

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
    borderColor: "border.default",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.light",
    },
    "&:focus": {
        outline: "none",
    },
};

const primaryStyles = {
    borderColor: "border.default",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.light",
    },
    "&:focus": {
        outline: "none",
    },
};

const secondaryStyles = {
    borderColor: "border.default",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.light",
    },
};

const successStyles = {
    borderColor: "border.success",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.success",
    },
};

const errorStyles = {
    borderColor: "border.error",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.error",
    },
};

const warningStyles = {
    borderColor: "border.secondary",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.warning",
    },
};

const transparentStyles = {
    borderColor: "border.transparent",
    cursor: "pointer",
    "&:hover": {
        bg: "highlight.light",
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
        transparent: {
            ...sharedStyles,
            ...transparentStyles,
        },
    },
});

export const sizeVariants = variant({
    prop: "size",
    variants: {
        sm: {
            height: "28px",
            padding: "0px 8px",
        },
        md: {
            height: "32px",
            padding: "0px 16px",
        },
        lg: {
            height: "38px",
            padding: "0px 16px",
        },
    },
});
