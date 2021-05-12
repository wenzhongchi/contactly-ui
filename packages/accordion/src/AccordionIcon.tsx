import React from "react";

import { IconProps } from "@components/Icon";
import { IconBox } from "@components/Icon/IconBox";
import IconChevronDown from "@icon/ChevronDown";
import { renderElement, RenderElementProp } from "@utils/renderElement";

import { useAccordionItemContext } from "./AccordionItem";

export type AccordionIconProps = { icon?: RenderElementProp<IconProps> } & IconProps;

export const AccordionIcon: React.FC<AccordionIconProps> = ({ icon, ...props }) => {
    const { isExpanded, isDisabled } = useAccordionItemContext();

    return (
        <IconBox animate={isExpanded}>
            {renderElement(icon, { size: 16, opacity: isDisabled ? 0.4 : 1, ...props })}
        </IconBox>
    );
};

AccordionIcon.defaultProps = {
    icon: <IconChevronDown />,
};
