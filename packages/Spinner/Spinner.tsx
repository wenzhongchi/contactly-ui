import React from "react";
import styled, { StyledComponentProps, useTheme } from "styled-components";
import {
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    ResponsiveValue,
} from "styled-system";
import _get from "lodash/get";

import { AnyObject } from "@type/types";

type SpinnerVariant =
    | "primary"
    | "primary-outlined"
    | "secondary"
    | "light"
    | "success"
    | "danger"
    | "danger-outlined"
    | "warning-outlined"
    | "disabled"
    | "transparent";

type StyledStatusProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        size?: number;
        color?: string;
        variant?: ResponsiveValue<SpinnerVariant>;
    };

export type SpinnerProps = StyledComponentProps<"svg", AnyObject, StyledStatusProps, never>;

const StyledSpinner = styled.svg`
    animation: rotate 2s linear infinite;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Spinner: React.FC<SpinnerProps> = ({ size, color, variant, ...props }) => {
    const theme = useTheme();

    const getColor = () => {
        if (["primary", "secondary", "success", "danger"].includes(variant as string)) {
            return _get(theme, "colors.spinner.primary");
        } else if (variant === "primary-outlined") {
            return _get(theme, "colors.spinner.outlined");
        } else if (variant === "warning-outlined") {
            return _get(theme, "colors.spinner.warning");
        } else if (variant === "danger-outlined") {
            return _get(theme, "colors.spinner.danger");
        } else {
            return _get(theme, "colors.spinner.secondary");
        }
    };

    return (
        <StyledSpinner
            strokeWidth="2"
            strokeLinecap="round"
            viewBox="0 0 16 16"
            width={size}
            height={size}
            stroke={color ?? getColor()}
            fill="none"
            {...props}
        >
            <path d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 7.30503 14.8987 6.63371 14.7101 6" />
        </StyledSpinner>
    );
};

Spinner.defaultProps = {
    size: 24,
};
