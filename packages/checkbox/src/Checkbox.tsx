import React, { forwardRef, useState, useCallback } from "react";
import styled, { StyledComponentProps } from "styled-components";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";
import { Flex } from "@contactly-ui/flex";
import { Box } from "@contactly-ui/box";
import { Text } from "@contactly-ui/text";

import { CheckMarkIcon } from "./CheckMarkIcon";

export type CheckboxComponentProps = {
    checked?: boolean;
    disabled?: boolean;
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
    ({ disabled }) => ({
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        width: "16px",
        height: "16px",
        borderRadius: "4px",
        transition: "all 150ms",
        border: "1px solid",
        cursor: disabled ? "not-allowed" : "pointer",
    }),
    composedSystem,
);

export const Checkbox: React.FC<CheckboxProps> = forwardRef<HTMLDivElement, CheckboxProps>(
    ({ checked, disabled, onChange, label, m, ml, mr, mt, mb, ...restProps }, ref) => {
        const [isChecked, setIsChecked] = useState(checked ?? false);
        const [isHovered, setIsHovered] = useState(false);

        const handleMouseOver = useCallback(() => {
            if (disabled) return;
            setIsHovered(true);
        }, [disabled]);

        const handleMouseLeave = useCallback(() => {
            if (disabled) return;
            setIsHovered(false);
        }, [disabled]);

        const handleChange = useCallback(() => {
            if (disabled) return;
            if (onChange) onChange(!isChecked);
            setIsChecked(!isChecked);
        }, [onChange, isChecked, disabled]);

        const getBgColor = useCallback(() => {
            if (isChecked && disabled) return "checkbox.checked-disabled";
            if (disabled) return "checkbox.disabled";
            if (isChecked) return "checkbox.checked";
            return "checkbox.unchecked";
        }, [isChecked, disabled]);

        const getBorderColor = useCallback(() => {
            if (isChecked && disabled) return "checkbox.border-default";
            if (disabled) return "checkbox.border-default";
            if (isChecked) return "checkbox.border-transparent";
            return "checkbox.border-default";
        }, [isChecked, disabled]);

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
                <Box
                    bg={isHovered || isChecked ? "checkbox.border-hover" : undefined}
                    borderRadius={4}
                    p={2}
                >
                    <StyledCheckbox
                        ref={ref}
                        backgroundColor={getBgColor()}
                        borderColor={getBorderColor()}
                        onClick={handleChange}
                        disabled={disabled}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                        {...restProps}
                    >
                        {isChecked && <CheckMarkIcon />}
                    </StyledCheckbox>
                </Box>
                {label && (
                    <Text variant="body-md" color="text.default" ml={6}>
                        {label}
                    </Text>
                )}
            </Flex>
        );
    },
);
