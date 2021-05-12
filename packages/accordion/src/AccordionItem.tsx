import React, { createContext, forwardRef, useContext, useRef, useState } from "react";
import { StyledComponentProps } from "styled-components";
import {
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
} from "styled-system";

import { Box } from "@components/Box/Box";
import { uuid } from "@utils/uuid";
import { AnyObject } from "@type/types";

type AccordionItemContextProps = {
    isExpanded: boolean;
    isDisabled: boolean;
    buttonId: string;
    panelId: string;
    onToggle: () => void;
};

const AccordionItemContext = createContext<Partial<AccordionItemContextProps>>({});
export const useAccordionItemContext = (): Partial<AccordionItemContextProps> =>
    useContext(AccordionItemContext);

type StyledAccordionItemProps = SpaceProps &
    LayoutProps &
    FlexboxProps &
    PositionProps &
    BorderProps &
    ColorProps & {
        isOpen?: boolean;
        defaultIsOpen?: boolean;
        id?: string;
        isDisabled?: boolean;
        onChange?: (state: boolean) => void;
    };

export type AccordionItemProps = StyledComponentProps<
    "div",
    AnyObject,
    StyledAccordionItemProps,
    never
>;

export const AccordionItem: React.FC<AccordionItemProps> = forwardRef<
    HTMLDivElement,
    AccordionItemProps
>(({ isOpen, defaultIsOpen, id, isDisabled, onChange, children, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = useState(defaultIsOpen || false);
    const { current: isControlled } = useRef(isOpen != null);
    const shallExpense = isControlled ? isOpen : isExpanded;

    const onToggle = () => {
        onChange && onChange(!shallExpense);
        !isControlled && setIsExpanded(!isExpanded);
    };

    id = id ?? uuid();
    const buttonId = `accordion-button-${id}`;
    const panelId = `accordion-panel-${id}`;

    return (
        <AccordionItemContext.Provider
            value={{
                isExpanded: shallExpense,
                isDisabled,
                buttonId,
                panelId,
                onToggle,
            }}
        >
            <Box ref={ref} {...props}>
                {children}
            </Box>
        </AccordionItemContext.Provider>
    );
});
