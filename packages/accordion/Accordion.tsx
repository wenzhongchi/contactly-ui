import React, { useRef, useState, Children, cloneElement, isValidElement } from "react";

import { Box, BoxProps } from "@components/Box";

type AccordionProps = BoxProps & {
    allowMultiple?: boolean;
    allowToggle?: boolean;
    index?: number | number[];
    defaultIndex?: number | number[];
    onChange?: (index?: number | number[]) => void;
};

export const Accordion: React.FC<AccordionProps> = ({
    allowMultiple,
    allowToggle,
    index,
    defaultIndex,
    onChange,
    children,
    ...props
}) => {
    const initializeState = () => {
        if (allowMultiple) {
            return defaultIndex || [];
        } else {
            return defaultIndex || -1;
        }
    };

    const getExpandState = (index: number | number[] | undefined, itemIndex: number) => {
        if (Array.isArray(index)) return index.includes(itemIndex);
        return index === itemIndex;
    };

    const [expandedIndex, setExpandedIndex] = useState(initializeState);
    const { current: isControlled } = useRef(index != null);

    const currentIndex = isControlled ? index : expandedIndex;

    const clonedChildren = Children.map(children, (child, childIndex) => {
        if (!isValidElement(child)) {
            return null;
        }

        return cloneElement(child, {
            isOpen: getExpandState(currentIndex, childIndex),
            onChange: (isExpanded: boolean) => {
                if (allowMultiple && Array.isArray(currentIndex)) {
                    if (isExpanded) {
                        const newIndexes = [...currentIndex, childIndex];
                        !isControlled && setExpandedIndex(newIndexes);
                        onChange && onChange(newIndexes);
                    } else {
                        const newIndexes = currentIndex.filter(
                            (itemIndex: number) => itemIndex !== childIndex,
                        );
                        !isControlled && setExpandedIndex(newIndexes);
                        onChange && onChange(newIndexes);
                    }
                } else if (isExpanded) {
                    !isControlled && setExpandedIndex(childIndex);
                    onChange && onChange(childIndex);
                } else if (allowToggle) {
                    !isControlled && setExpandedIndex(0);
                    onChange && onChange();
                }
            },
        });
    });

    return <Box {...props}>{clonedChildren}</Box>;
};
