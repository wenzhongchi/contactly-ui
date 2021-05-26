import React, { forwardRef, useState, useCallback } from "react";
import styled, { StyledComponentProps } from "styled-components";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";
import { Flex } from "@contactly-ui/flex";
import { Box } from "@contactly-ui/box";
import { Text } from "@contactly-ui/text";

import { CheckMarkIcon } from "./CheckMarkIcon";

export type CheckboxComponentProps = {
    defaultChecked?: boolean;
    defaultDisabled?: boolean;
    label?: string;
    onChange?: (checked: boolean) => void;
};

type StyledCheckboxProps = StyledSystemProps & CheckboxComponentProps;

export type CheckboxProps = Omit<
    StyledComponentProps<"div", AnyObject, StyledCheckboxProps, never>,
    "onChange"
> &
    CheckboxComponentProps;

const StyledCheckbox = styled.div<CheckboxProps>(
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "16px",
        height: "16px",
        borderRadius: "4px",
        transition: "all 150ms",
        border: 1,
        cursor: "pointer",
        ":hover": {
            borderColor: "highlight.check",
            backgroundColor: "bg.disabled",
        },
    },
    composedSystem,
);

export const Checkbox: React.FC<CheckboxProps> = forwardRef<HTMLDivElement, CheckboxProps>(
    (
        { defaultChecked, defaultDisabled, onChange, label, m, ml, mr, mt, mb, ...restProps },
        ref,
    ) => {
        const [checked, setChecked] = useState(defaultChecked ?? false);
        const [hovered, setHovered] = useState(false);
        const [disabled] = useState(defaultDisabled ?? false);

        const handleMouseOver = useCallback(() => {
            if (disabled) return;
            setHovered(true);
        }, [disabled]);

        const handleMouseLeave = useCallback(() => {
            if (disabled) return;
            setHovered(false);
        }, [disabled]);

        const handleChange = useCallback(() => {
            if (disabled) return;
            if (onChange) onChange(!checked);
            setChecked(!checked);
        }, [onChange, checked, disabled]);

        const getBgColor = useCallback(() => {
            if (checked && disabled) return "checkbox.checked-disabled";
            if (disabled) return "checkbox.disabled";
            if (checked) return "checkbox.checked";
            return "checkbox.unchecked";
        }, [checked, disabled]);

        const getBorderColor = useCallback(() => {
            if (checked && disabled) return "checkbox.border-default";
            if (disabled) return "checkbox.border-default";
            if (checked) return "checkbox.border-transparent";
            return "checkbox.border-default";
        }, [checked, disabled]);

        return (
            <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                ml={ml}
                mr={mr}
                mt={mt}
                mb={mb}
                m={m}
            >
                <Box>
                    <StyledCheckbox
                        ref={ref}
                        backgroundColor={getBgColor()}
                        borderColor={getBorderColor()}
                        onClick={handleChange}
                        {...restProps}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        {checked && <CheckMarkIcon />}
                    </StyledCheckbox>
                </Box>
                {label && (
                    <Text variant="body" color="text.default" ml={6}>
                        {label}
                    </Text>
                )}
            </Flex>
        );
    },
);
