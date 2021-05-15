import React, { forwardRef, useCallback } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { variant } from "styled-system";

import { AnyObject, composedSystem, StyledSystemProps } from "@contactly-ui/system";
import { Box } from "@contactly-ui/box";
import { Text } from "@contactly-ui/text";

export type AvatarComponentProps = {
    variant?: "xs" | "sm" | "md" | "lg" | "xl";
    src?: string;
    label?: string;
};

type StyledAvatarProps = StyledSystemProps & AvatarComponentProps;

const styleVariants = variant({
    variants: {
        xs: {
            width: 24,
            height: 24,
            borderRadius: 999999,
        },
        sm: {
            width: 32,
            height: 32,
            borderRadius: 999999,
        },
        md: {
            width: 40,
            height: 40,
            borderRadius: 999999,
        },
        lg: {
            width: 52,
            height: 52,
            borderRadius: 999999,
        },
        xl: {
            width: 64,
            height: 64,
            borderRadius: 999999,
        },
    },
});

export type AvatarProps = StyledComponentProps<"img", AnyObject, StyledAvatarProps, never>;

const StyledAvatar = styled.img<AvatarProps>(
    {
        width: "100%",
        height: "100%",
    },
    styleVariants,
    composedSystem,
);

export const Avatar: React.FC<AvatarProps> = forwardRef<HTMLImageElement, AvatarProps>(
    ({ src, label, variant = "md", ...restProps }, ref) => {
        const getBgColor = useCallback(() => {
            if (label) return "avatar.label";
            return "avatar.image";
        }, [label]);

        const getBoxSize = useCallback(() => {
            switch (variant) {
                case "xs":
                    return 24;
                case "sm":
                    return 32;
                case "md":
                    return 40;
                case "lg":
                    return 52;
                case "xl":
                    return 64;
            }
        }, [variant]);

        const getLabelVariant = useCallback(() => {
            switch (variant) {
                case "xs":
                    return "subheading";
                case "sm":
                    return "subheading";
                case "md":
                    return "subheading";
                case "lg":
                    return "heading";
                case "xl":
                    return "display-sm";
            }
        }, [variant]);

        return (
            <Box
                display="flex"
                position="relative"
                size={getBoxSize()}
                justifyContent="center"
                alignItems="center"
                borderRadius="999999px"
                backgroundColor={getBgColor()}
                {...restProps}
            >
                {src && (
                    <StyledAvatar
                        src={src}
                        ref={ref}
                        variant={variant}
                        border={2}
                        borderColor={getBgColor()}
                        referrerPolicy="no-referrer"
                    />
                )}
                {label && (
                    <Text variant={getLabelVariant()} color="text.white">
                        {label}
                    </Text>
                )}
            </Box>
        );
    },
);
