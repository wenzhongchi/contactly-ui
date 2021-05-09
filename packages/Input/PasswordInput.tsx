import React, { ChangeEvent, useCallback, useState } from "react";
import styled, { StyledComponentProps } from "styled-components";

import { Flex } from "@components/Flex/Flex";
import { Text } from "@components/Text/Text";
import { Box } from "@components/Box/Box";
import { AnyObject } from "@type/types";
import EyeIcon from "@icon/Eye";
import EyeOffIcon from "@icon/EyeOff";

import { Input, InputProps, InputVariant, InputSize } from "./Input";
import { InputGroup, InputGroupProps } from "./InputGroup";

export type PasswordInputProps = InputGroupProps & {
    title?: string;
    placeholder?: string;
    showHint?: boolean;
    variant?: InputVariant;
    inputSize?: InputSize;
    hasProgress?: boolean;
    minChars?: number;
    onChange?: (password: string) => void;
};

type StyledSpanProps = StyledComponentProps<
    "span",
    AnyObject,
    {
        isValid: boolean;
    },
    never
>;

const StyledSpan = styled.span<StyledSpanProps>`
    color: ${({ isValid, theme: { colors } }) =>
        isValid ? colors.progressBar.success : colors.progressBar.danger};
`;

export const PasswordInput: React.FC<PasswordInputProps> = ({
    title,
    variant,
    inputSize,
    onChange,
    hasProgress,
    showHint,
    minChars,
    placeholder,
    m,
    ml,
    mr,
    mb,
    mt,
    width = "auto",
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const getIconColor = () => {
        if (variant === "dark") return "icon.white";
        return "icon.default";
    };

    const getProgress = () => {
        if (password.length === 0) return 0;

        const conditions: boolean[] = [
            password.length >= minChars!,
            containsDigit(),
            containsLowercase(),
            containsUppercase(),
        ];
        const conditionsCount = conditions.filter(Boolean).length;

        if (conditionsCount === 1) return 25;
        else if (conditionsCount === 2) return 50;
        else if (conditionsCount === 3) return 75;
        else return 100;
    };

    const getProgressColor = () => {
        const progress = getProgress();
        if (progress <= 34) return "progressBar.danger";
        if (progress < 100) return "progressBar.warning";
        return "progressBar.success";
    };

    const containsLowercase = () => /(?=.*[a-z])/.test(password);

    const containsUppercase = () => /(?=.*[A-Z])/.test(password);

    const containsDigit = () => /(?=.*\d)/.test(password);

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword((prevState) => !prevState);
    }, [setShowPassword]);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setPassword(value);
            onChange && onChange(value);
        },
        [onChange, setPassword],
    );

    return (
        <InputGroup
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            m={m}
            ml={ml}
            mr={mr}
            mb={mb}
            mt={mt}
            width={width}
        >
            <Text variant="body-md">{title}</Text>
            <Flex mt={4} width="auto" alignItems="center" position="relative">
                <Input
                    inputSize={inputSize}
                    placeholder={placeholder}
                    variant={variant}
                    type={showPassword ? "text" : "password"}
                    width="100%"
                    value={password}
                    onChange={handleChange}
                    {...(props as InputProps)}
                />
                <Flex
                    onClick={togglePasswordVisibility}
                    height="100%"
                    px={16}
                    alignItems="center"
                    position="absolute"
                    right={0}
                >
                    {showPassword ? (
                        <EyeIcon color={getIconColor()} />
                    ) : (
                        <EyeOffIcon color={getIconColor()} />
                    )}
                </Flex>
            </Flex>
            {hasProgress && (
                <Flex borderRadius={4} bg="bg.white" mt={8}>
                    <Box
                        height={2}
                        width={getProgress().toString() + "%"}
                        bg={getProgressColor()}
                    />
                </Flex>
            )}
            {showHint && (
                <Text color="text.default" mt={6} variant="label-sm">
                    {"At least "}
                    <StyledSpan isValid={password.length >= minChars!}>
                        {`${minChars} characters`}
                    </StyledSpan>{" "}
                    {"long with "}
                    <StyledSpan isValid={containsUppercase()}>one uppercase letter</StyledSpan>
                    {", "}
                    <StyledSpan isValid={containsLowercase()}>one lowercase letter</StyledSpan>
                    {", and  "}
                    <StyledSpan isValid={containsDigit()}>one numeral</StyledSpan>.
                </Text>
            )}
        </InputGroup>
    );
};

PasswordInput.defaultProps = {
    variant: "default",
    hasProgress: false,
    minChars: 6,
};
