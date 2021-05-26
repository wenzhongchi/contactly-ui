import React from "react";

import { Flex } from "@contactly-ui/flex";
import { Text } from "@contactly-ui/text";

import { Input, InputProps, InputSize, InputVariant } from "./Input";

export type LabelInputProps = InputProps & {
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    inputSize?: InputSize;
    variant?: InputVariant;
    button: React.ReactNode;
    hint: React.ReactNode;
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
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Text variant="caption">{label}</Text>
            {button && button}
        </Flex>
        <Input
            variant={variant}
            value={defaultValue}
            placeholder={placeholder}
            {...(restProps as InputProps)}
        />
        {hint && hint}
    </Flex>
);
