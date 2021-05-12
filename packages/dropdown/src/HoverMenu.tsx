import React, { useRef, useState, useEffect, useCallback } from "react";
import { usePopper } from "react-popper";
import _delay from "lodash/delay";

import { Button } from "@components/Button/Button";
import { ButtonVariant } from "@components/Button/Button";

import { MenuGroup } from "./MenuGroup";
import { MenuList } from "./MenuList";
import { Menu, MenuProps } from "./Menu";

export type HoverMenuProps = MenuProps & {
    buttonVariant?: ButtonVariant;
    hasLeftHover?: boolean;
    hasRightHover?: boolean;
    leftHoverColor?: string;
    rightHoverColor?: string;
};

export const HoverMenu = ({
    children,
    placement,
    visible,
    buttonVariant,
    hasLeftHover,
    leftHoverColor,
    label,
    onClick,
    onOuterClick,
    onHoverOver,
    ...props
}: HoverMenuProps): JSX.Element => {
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const popperRef = useRef(null);
    const [hover, setHover] = useState(false);

    const { styles, attributes, update } = usePopper(buttonRef.current, popperRef.current, {
        placement,
        modifiers: [
            {
                name: "offset",
                enabled: true,
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });

    const handleOuterClick = useCallback(
        (event: MouseEvent) => {
            if (menuRef.current && menuRef?.current.contains(event.target as Node)) {
                return;
            }
            if (onOuterClick) onOuterClick();
        },
        [onOuterClick],
    );

    const handleMouseEnter = useCallback(() => {
        if (onHoverOver) {
            setHover(true);
            onHoverOver(true);
        }
        if (update) update();
    }, [onHoverOver, update]);

    const handleMouseLeave = useCallback(() => {
        if (onHoverOver) {
            setHover(false);
        }
    }, [onHoverOver]);

    useEffect(() => {
        document.addEventListener("mousedown", handleOuterClick);
        return () => {
            document.removeEventListener("mousedown", handleOuterClick);
        };
    }, [handleOuterClick]);

    useEffect(() => {
        const delayId = _delay(() => {
            if (!hover && onHoverOver) onHoverOver(false);
        }, 150);

        return () => {
            clearTimeout(delayId);
        };
    }, [hover, onHoverOver]);

    return (
        <Menu ref={menuRef} {...props}>
            <Button
                variant={buttonVariant}
                size="md"
                onClick={onClick}
                onMouseEnter={hasLeftHover ? handleMouseEnter : undefined}
                onMouseLeave={hasLeftHover ? handleMouseLeave : undefined}
                hoverColor={leftHoverColor}
            >
                {label}
            </Button>
            <MenuGroup
                ref={popperRef}
                style={styles.popper}
                {...attributes.popper}
                visible={visible}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <MenuList style={styles.offset}>{children}</MenuList>
            </MenuGroup>
        </Menu>
    );
};

HoverMenu.defaultProps = {
    placement: "bottom-start",
    variant: "primary",
    hasRightHover: true,
    hasLeftRoundCorner: false,
    hasRightRoundCorner: false,
};
