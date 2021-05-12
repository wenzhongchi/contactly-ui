import React, { forwardRef, useCallback, MouseEvent } from "react";
import {
    border,
    compose,
    flexbox,
    layout,
    position,
    space,
    color,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    ColorProps,
} from "styled-system";
import styled, { StyledComponentProps } from "styled-components";

import { AnyObject } from "@type/types";

import { useAccordionItemContext } from "./AccordionItem";

type StyledAccordionButtonProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    ColorProps & {
        disabled?: boolean;
        onClick?: (event: MouseEvent) => void;
    };

export type AccordionButtonProps = StyledComponentProps<
    "button",
    AnyObject,
    StyledAccordionButtonProps,
    never
>;

const StyledButton = styled.button<StyledAccordionButtonProps>`
    ${({ theme: { colors } }) => ({
        margin: 0,
        padding: 0,
        display: "flex",
        backgroundColor: colors.button.transparent,
        border: 0,
        borderColor: colors.button.transparent,
        cursor: "pointer",
        appearance: "none",
        "&:focus": {
            outline: "none",
        },
    })}
    ${compose(space, layout, flexbox, border, position, color)}
`;

export const AccordionButton: React.FC<AccordionButtonProps> = forwardRef<
    HTMLButtonElement,
    AccordionButtonProps
>(({ disabled, onClick, children, ...props }, ref) => {
    const { panelId, buttonId, isDisabled, onToggle } = useAccordionItemContext();

    const handleClick = useCallback(
        (event: MouseEvent) => {
            if (disabled) return;
            if (onToggle) onToggle();
            if (onClick) onClick(event);
        },
        [onToggle, onClick, disabled],
    );

    return (
        <StyledButton
            ref={ref}
            flexDirection="row"
            justifyContent="space-between"
            position="relative"
            alignItems="center"
            width="100%"
            disabled={isDisabled}
            onClick={handleClick}
            id={buttonId}
            aria-controls={panelId}
            {...props}
        >
            {children}
        </StyledButton>
    );
});
