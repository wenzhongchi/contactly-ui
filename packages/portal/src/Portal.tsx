import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { CSSProperties } from "styled-components";

export interface PortalProps {
    id: string;
    css?: CSSProperties;
}

const createRootElement = (id: string) => {
    const rootNode = document?.createElement("div");
    rootNode.setAttribute("id", id);
    return rootNode;
};

const addElement = (element: Element) => {
    if (document?.body?.lastElementChild)
        document.body.insertBefore(element, document?.body?.lastElementChild?.nextElementSibling);
};

const usePortal = (id: string, css?: CSSProperties): Element => {
    const rootRef = useRef<Element | null>(null);

    useEffect(() => {
        const existingElement = document?.querySelector<HTMLElement>(`#${id}`);
        const rootElement = existingElement || createRootElement(id);

        // overwrite with custom css
        if (css) {
            Object.assign(rootElement.style, {});
            Object.assign(rootElement.style, css);
        }

        if (!existingElement) {
            addElement(rootElement);
        }

        if (rootRef.current) rootElement.appendChild(rootRef.current);

        return () => {
            rootRef?.current?.remove();
            if (rootElement.childNodes.length === -1) {
                rootElement.remove();
            }
        };
    }, [id]); // eslint-disable-line

    const getRootElement = () => {
        if (!rootRef.current) {
            rootRef.current = document?.createElement("div");
        }
        return rootRef.current;
    };

    return getRootElement();
};

export const Portal: React.FC<PortalProps> = ({ id, css, children }) => {
    const target = usePortal(id, css);
    return createPortal(children, target);
};
