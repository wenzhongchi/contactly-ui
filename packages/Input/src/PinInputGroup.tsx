import React, { forwardRef, ReactElement, useCallback, useEffect, useState } from "react";
import {
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
} from "styled-system";
import { Status, StatusProps } from "@components/Status/Status";
import { StyledComponentProps } from "styled-components";
import { AnyObject } from "@type/types";
import { Flex } from "@components/Flex/Flex";
import { Text } from "@components/Text/Text";
import { PinInput, PinInputFieldProps } from "@components/Input/PinInput";

type StyledPinInputGroupProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        label?: string;
        hasStatus?: boolean;
        statusProps?: StatusProps;
        size?: "desktop" | "mobile";
        variant?: "primary" | "success" | "danger";
        onChange?: (value: string) => void;
        onComplete?: (value: string) => void;
    };

export type PinInputGroupProps = StyledComponentProps<
    "div",
    AnyObject,
    StyledPinInputGroupProps,
    never
>;

export const PinInputGroup: React.FC<PinInputGroupProps> = forwardRef<
    HTMLDivElement,
    PinInputGroupProps
>(
    (
        { label, onComplete, onChange, variant, hasStatus, statusProps, children, size, ...props },
        ref,
    ) => {
        const validChildren = React.Children.toArray(children).filter(
            (value) => (value as ReactElement).type === PinInput,
        );

        const [focusedIndex, setFocusedIndex] = useState(-1);
        const [values, setValues] = useState<string[]>(Array(validChildren.length).fill(""));

        useEffect(() => {
            const stringValue = values.join("");
            onChange && onChange(stringValue);
            if (stringValue.length === validChildren.length) {
                onComplete && onComplete(stringValue);
            }
        }, [onChange, onComplete, validChildren, values]);

        const getInputFieldVariant = () => {
            switch (variant) {
                case "success":
                    return "success";
                case "danger":
                    return "danger";
                case "primary":
                default:
                    return "primary";
            }
        };

        const isValid = (value: string) => {
            const NUMERIC_REGEX = /^[0-9]+$/;
            return NUMERIC_REGEX.test(value);
        };

        const setValue = useCallback(
            (value: string, _: number, target: HTMLInputElement, focusNext = true) => {
                const currentValues = [...values];
                currentValues[focusedIndex] = value;
                setValues(currentValues);
                if (focusNext && value.length === 1 && target.nextElementSibling !== null)
                    (target.nextElementSibling as HTMLElement).focus();
            },
            [focusedIndex, values],
        );

        const handleOnChange = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                if (value === "") {
                    setValue("", focusedIndex, event.target);
                } else if (isValid(value)) setValue(value, focusedIndex, event.target);
            },
            [focusedIndex, setValue],
        );

        const handleKeyDown = useCallback(
            (event: React.KeyboardEvent<HTMLInputElement>) => {
                const target = event.target as HTMLInputElement;
                const value = event.key;

                if (event.key === "Backspace") {
                    if (target.value.length === 0) {
                        (target.previousElementSibling as HTMLElement)?.focus();
                    } else if (values[focusedIndex] !== "") {
                        setValue("", focusedIndex, target, false);
                    }
                } else if (target.value.length === 1) {
                    if (isValid(value)) setValue(value, focusedIndex, target);
                }
            },
            [focusedIndex, setValue, values],
        );

        const clonedChildren = validChildren.map((child, index) => {
            const field = child as ReactElement<PinInputFieldProps>;
            return React.cloneElement<PinInputFieldProps>(field, {
                key: index,
                onKeyDown: handleKeyDown,
                onChange: handleOnChange,
                variant: getInputFieldVariant(),
                mr: size === "desktop" ? 16 : 8,
                width: size === "desktop" ? 48 : 40,
                value: values[index],
                onFocus: () => setFocusedIndex(index),
                onBlur: () => setFocusedIndex(-1),
            });
        });

        return (
            <Flex ref={ref} flexDirection="column" {...props}>
                <Text variant="body-md">{label}</Text>
                <Flex mt={4}>{clonedChildren}</Flex>
                {hasStatus && statusProps && <Status mt={10} {...statusProps} />}
            </Flex>
        );
    },
);

PinInputGroup.defaultProps = {
    size: "desktop",
    variant: "primary",
};
