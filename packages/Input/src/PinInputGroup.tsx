import React, { forwardRef, ReactElement, useCallback, useEffect, useState } from "react";
import { StyledComponentProps } from "styled-components";

import { AnyObject, StyledSystemProps } from "@contactly-ui/system";
import { Flex } from "@contactly-ui/flex";

import { PinInput, PinInputProps, PinInputVariant } from "./PinInput";
import { InputSize } from "./Input";

const NUMERIC_REGEX = /^[0-9]+$/;
const BACKSPACE_KEY = "Backspace";

export type PinInputGroupComponentProps = {
    variant?: PinInputVariant;
    size?: InputSize;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
};

type StyledPinInputGroupProps = StyledSystemProps & PinInputGroupComponentProps;

export type PinInputGroupProps = StyledComponentProps<
    "div",
    AnyObject,
    StyledPinInputGroupProps,
    never
>;

export const PinInputGroup: React.FC<PinInputGroupProps> = forwardRef<
    HTMLDivElement,
    PinInputGroupProps
>(({ onComplete, onChange, variant = "default", children, size = "md", ...restProps }, ref) => {
    const inputs = React.Children.toArray(children).filter(
        (child) => (child as ReactElement).type === PinInput,
    );

    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [values, setValues] = useState<string[]>(Array(inputs.length).fill(""));

    useEffect(() => {
        const stringValue = values.join("");
        onChange && onChange(stringValue);
        if (stringValue.length === inputs.length) {
            onComplete && onComplete(stringValue);
        }
    }, [onChange, onComplete, inputs, values]);

    const isValid = (value: string) => NUMERIC_REGEX.test(value);

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

            if (event.key === BACKSPACE_KEY) {
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

    const clonedChildren = inputs.map((input, index) =>
        React.cloneElement<PinInputProps>(input as ReactElement<PinInputProps>, {
            key: `pin-input-${index}`,
            onKeyDown: handleKeyDown,
            onChange: handleOnChange,
            variant: variant,
            inputSize: size,
            mr: size === "lg" ? 16 : 8,
            value: values[index],
            onFocus: () => setFocusedIndex(index),
            onBlur: () => setFocusedIndex(-1),
        }),
    );

    return (
        <Flex ref={ref} flexDirection="row" {...restProps}>
            {clonedChildren}
        </Flex>
    );
});
