import React, { forwardRef, useCallback, useEffect, useState } from "react";
import {
    border,
    BorderProps,
    color,
    ColorProps,
    compose,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    variant,
} from "styled-system";
import { AnimatePresence, motion } from "framer-motion";
import shallow from "zustand/shallow";
import styled, { CSSProperties, StyledComponentProps } from "styled-components";

import { IconProps } from "@components/Icon";
import { Button, ButtonProps } from "@components/Button/Button";
import { AnyObject } from "@type/types";
import { Flex } from "@components/Flex/Flex";
import { Text } from "@components/Text/Text";
import { Portal } from "@components/Portal/Portal";
import { useColor } from "@hooks/useColor";
import { useToastStore } from "@hooks/useToast";
import { renderElement, RenderElementProp } from "@utils/renderElement";
import IconClose from "@icon/Close";

type StyledToastProps = SpaceProps &
    ColorProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps & {
        id: string;
        title?: string;
        width?: CSSProperties;
        message?: string;
        variant?: "default" | "success" | "error" | "warning";
        cancelText?: string;
        cancelButtonProps?: ButtonProps;
        submitText?: string;
        submitButtonProps?: ButtonProps;
        icon?: RenderElementProp<IconProps>;
        hasHeader?: boolean;
        hasFooter?: boolean;
        autoClose?: boolean;
        duration?: number;
        closable?: boolean;
        isVisible?: boolean;
        onCancel?: () => void;
        onSubmit?: () => void;
        onClose?: () => void;
    };

const toastVariants = variant({
    variants: {
        default: {
            bg: "toast.default",
        },
        success: {
            bg: "toast.success",
        },
        error: {
            bg: "toast.error",
        },
        warning: {
            bg: "toast.warning",
        },
    },
});

export type ToastProps = StyledComponentProps<"div", AnyObject, StyledToastProps, never>;

const StyledToast = styled(Flex)<ToastProps>`
    position: relative;
    flex-direction: column;
    overflow: hidden;
    border-radius: 4px;
    padding: 18px 16px;
    box-shadow: 0 0 24px 0 ${({ theme: { colors } }) => colors.toast.shadow};
    z-index: ${({ theme: { zIndices } }) => zIndices.toast};
    ${toastVariants}
    ${compose(space, color, layout, flexbox, border, position)}
`;

const StyledIcon = styled.div`
    cursor: pointer;
    margin-left: auto;
`;

type StyledProgressBarProps = { color: string; percent: number };

type ProgressBarProps = StyledComponentProps<"div", AnyObject, StyledProgressBarProps, never>;

const ProgressBar = styled.div<ProgressBarProps>`
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 0;
    ${({ color }) => ({ backgroundColor: color })}
    width: ${({ percent }) => percent}%;
    z-index: ${({ theme: { zIndices } }) => zIndices.toast};
`;

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
    (
        {
            width,
            id,
            title,
            message,
            variant,
            autoClose,
            duration,
            cancelText,
            onCancel,
            cancelButtonProps,
            submitText,
            onSubmit,
            submitButtonProps,
            onClose,
            icon,
            hasHeader,
            hasFooter,
            closable,
            ...props
        },
        ref,
    ) => {
        const [isMounted, setMounted] = useState(false);
        const [durationLeft, setDurationLeft] = useState(duration);

        const { toastList, closeToast } = useToastStore(
            (store) => ({
                toastList: store.toastList,
                closeToast: store.closeToast,
            }),
            shallow,
        );
        const isShown = toastList && toastList.has(id);

        const getWidth = (): number => {
            if (width) {
                return parseInt(width.toString(), 10);
            }
            return 0;
        };

        const getButtonVariant = () => {
            switch (variant) {
                case "warning":
                    return "warning";
                case "success":
                    return "success";
                case "error":
                    return "error";
                case "default":
                    return "default";
                default:
                    return "default";
            }
        };

        const getProgressColor = (): string => {
            switch (variant) {
                case "warning":
                    return "progressBar.warning";
                case "success":
                    return "progressBar.success";
                case "error":
                    return "progressBar.danger";
                case "default":
                default:
                    return "progressBar.primary";
            }
        };

        const progressColor = useColor(getProgressColor());

        const handleClose = useCallback(() => {
            if (closable) {
                closeToast && closeToast(id);
                onClose && onClose();
                setDurationLeft(duration);
            }
        }, [closable, onClose, closeToast, id, duration]);

        const handleSubmit = useCallback(() => {
            onSubmit && onSubmit();
            handleClose();
        }, [handleClose, onSubmit]);

        const handleCancel = useCallback(() => {
            onCancel && onCancel();
            handleClose();
        }, [handleClose, onCancel]);

        useEffect(() => {
            let intervalId: any; // eslint-disable-line
            if (isShown && autoClose) {
                if (!duration) return;
                intervalId = setInterval(() => {
                    setDurationLeft((currentValue: number | undefined) =>
                        currentValue ? currentValue - duration * 0.05 : currentValue,
                    );
                }, duration * 0.05);

                if (durationLeft !== undefined && durationLeft <= 0) {
                    if (intervalId) clearInterval(intervalId);
                    handleClose();
                }
            }
            return () => {
                if (intervalId) clearInterval(intervalId);
            };
        }, [duration, handleClose, autoClose, isShown, durationLeft]);

        useEffect(() => {
            setMounted(true);
        }, []);

        if (!isMounted) {
            return null;
        }

        return (
            <Portal
                id="toast-container"
                css={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                }}
            >
                <AnimatePresence>
                    {isShown && (
                        <motion.div
                            key={id}
                            layout
                            initial={{ x: getWidth() }}
                            animate={{ x: 0 }}
                            exit={{ x: getWidth() + 50 }}
                        >
                            <StyledToast
                                mb={10}
                                mr={10}
                                id={id}
                                variant={variant}
                                maxWidth={width}
                                {...props}
                                ref={ref}
                            >
                                {hasHeader && (icon || title) && (
                                    <Flex alignItems="center" mb={16} flexGrow={1}>
                                        {renderElement(icon)}
                                        <Text ml={8} variant="h3">
                                            {title}
                                        </Text>
                                        <StyledIcon onClick={handleClose}>
                                            <IconClose />
                                        </StyledIcon>
                                    </Flex>
                                )}
                                <Text variant="body-md">{message}</Text>
                                {hasFooter && (cancelText || submitText) && (
                                    <Flex
                                        mt={16}
                                        flexDirection={{ _: "column-reverse", md: "row" }}
                                        flexGrow={1}
                                    >
                                        {cancelText && (
                                            <Button
                                                mt={{ _: 8, md: 0 }}
                                                onClick={handleCancel}
                                                variant="default"
                                                {...cancelButtonProps}
                                            >
                                                {cancelText}
                                            </Button>
                                        )}
                                        {submitText && (
                                            <Button
                                                onClick={handleSubmit}
                                                ml={{ _: 0, md: "auto" }}
                                                variant={getButtonVariant()}
                                                {...submitButtonProps}
                                            >
                                                {submitText}
                                            </Button>
                                        )}
                                    </Flex>
                                )}
                                <ProgressBar
                                    color={progressColor}
                                    percent={
                                        duration && durationLeft
                                            ? (durationLeft / duration) * 100
                                            : 1
                                    }
                                />
                            </StyledToast>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Portal>
        );
    },
);

Toast.defaultProps = {
    size: "lg",
    variant: "default",
    hasHeader: true,
    hasFooter: true,
    autoClose: false,
    duration: 5000,
    closable: true,
    width: "288px",
};
