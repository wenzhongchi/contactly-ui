import React from "react";

import { Flex } from "@contactly-ui/flex";
import { Text } from "@contactly-ui/text";

import { Input, InputProps, InputSize, InputVariant } from "./Input";

export type LabelInputProps = InputProps & {
    label: string;
    labelColor: string;
    defaultValue?: string;
    placeholder?: string;
    inputSize?: InputSize;
    variant?: InputVariant;
    button: React.ReactNode;
    hint: React.ReactNode;
    disabled?: boolean;
};

export const LabelInput: React.FC<LabelInputProps> = ({
    label,
    defaultValue,
    placeholder,
    variant = "default",
    m,
    ml,
    mr,
    mb,
    mt,
    width,
    button,
    hint,
    disabled,
    ...restProps
}) => (
    <Flex
        flexDirection="column"
        justifyContent="flex-start"
        m={m}
        ml={ml}
        mr={mr}
        mb={mb}
        mt={mt}
        width={width}
    >
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
            <Text variant="caption" color="text.secondary">
                {label}
            </Text>
            {button && button}
        </Flex>
        <Input
            variant={variant}
            value={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            {...(restProps as InputProps)}
        />
        {hint && hint}
    </Flex>
);
