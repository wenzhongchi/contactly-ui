import React, { forwardRef } from "react";

import { Collapse, CollapseProps } from "@components/Collapse/Collapse";

import { useAccordionItemContext } from "./AccordionItem";

export type AccordionPanelProps = Omit<CollapseProps, "isOpen">;

export const AccordionPanel: React.FC<AccordionPanelProps> = forwardRef<
    HTMLDivElement,
    AccordionPanelProps
>((props, ref) => {
    const { isExpanded, panelId } = useAccordionItemContext();
    return <Collapse ref={ref} id={panelId} isOpen={isExpanded ?? false} {...props} />;
});
