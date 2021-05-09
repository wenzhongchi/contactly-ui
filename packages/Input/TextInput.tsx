import React from "react";

import { Flex } from "@components/Flex/Flex";
import { Text } from "@components/Text/Text";
import { Status, StatusVariant } from "@components/Status/Status";
import { Tag } from "@components/Tag";

import { Input, InputProps, InputSize } from "./Input";
import { InputGroup, InputGroupProps } from "./InputGroup";

export type TextInputProps = InputGroupProps & {
    title?: string;
    value?: string;
    placeholder?: string;
    isOptional?: boolean;
    inputSize?: InputSize;
    variant?: "default" | "success" | "error" | "warning" | "disabled";
    statusVariant?: StatusVariant;
    statusLabel?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
    title,
    value,
    placeholder,
    isOptional,
    variant = "default",
    statusVariant,
    statusLabel,
    ml,
    mr,
    mb,
    mt,
    width,
    ...props
}) => (
    <InputGroup
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        ml={ml}
        mr={mr}
        mb={mb}
        mt={mt}
        width={width}
    >
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Text
                variant="label-md"
                color={variant === "disabled" ? "text.disabled" : "text.default"}
            >
                {title}
            </Text>
            {isOptional && <Tag label="optional" size="sm" variant="default" />}
        </Flex>
        <Input
            variant={variant}
            disabled={variant === "disabled"}
            value={value}
            placeholder={placeholder}
            {...(props as InputProps)}
        />
        {statusVariant && <Status variant={statusVariant} label={statusLabel} mt={6} />}
    </InputGroup>
);
