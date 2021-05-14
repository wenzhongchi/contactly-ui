import React, { forwardRef } from "react";
import { StyledComponentProps } from "styled-components";

import { AnyObject, StyledSystemProps } from "@contactly-ui/system";
import { Flex } from "@contactly-ui/flex";
import { Text } from "@contactly-ui/text";
import {
    IconAlertCircle,
    IconCheckCircle,
    IconCloseCircle,
    IconAlertTriangle,
} from "@contactly-ui/icons";

export type HintVariant = "default" | "success" | "error" | "warning";

export type HintComponentProps = { variant?: HintVariant; label?: string };

type StyledHintProps = StyledSystemProps & HintComponentProps;

export type HintProps = StyledComponentProps<"div", AnyObject, StyledHintProps, never>;

const renderIcon = (variant?: HintVariant) => {
    const getIconColor = () => {
        switch (variant) {
            case "default":
                return "icon.default";
            case "success":
                return "icon.success";
            case "error":
                return "icon.error";
            case "warning":
                return "icon.warning";
        }
    };

    switch (variant) {
        case "default":
            return <IconAlertCircle color={getIconColor()} size={12} />;
        case "success":
            return <IconCheckCircle color={getIconColor()} size={12} />;
        case "error":
            return <IconCloseCircle color={getIconColor()} size={12} />;
        case "warning":
            return <IconAlertTriangle color={getIconColor()} size={12} />;
    }
};

export const Hint: React.FC<HintProps> = forwardRef<HTMLDivElement, HintProps>(
    ({ variant = "default", label, ...restProps }, ref) => {
        const getTextColor = () => {
            switch (variant) {
                case "default":
                    return "text.secondary";
                case "error":
                    return "text.error";
                case "warning":
                    return "text.secondary";
                case "success":
                    return "text.secondary";
            }
        };

        return (
            <Flex ref={ref} {...restProps} justifyContent="flex-start" alignItems="center">
                {renderIcon(variant)}
                {label && (
                    <Text variant="caption" color={getTextColor()} ml={8}>
                        {label}
                    </Text>
                )}
            </Flex>
        );
    },
);
