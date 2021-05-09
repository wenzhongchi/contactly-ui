import { useState } from "react";

export type ToggleHookProps = {
    isShown: boolean;
    toggle: () => void;
};

export const useToggle = (): ToggleHookProps => {
    const [isShown, setIsShown] = useState<boolean>(false);
    const toggle = () => setIsShown(!isShown);
    return {
        isShown,
        toggle,
    };
};
