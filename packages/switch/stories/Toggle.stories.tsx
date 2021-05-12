import React from "react";

import { Toggle } from "../src/Toggle";

export default {
    title: "Components/Toggle",
    component: Toggle,
};

export const Basic: React.FC = () => (
    <>
        <Toggle mr={10} />
        <Toggle variant="error" mr={10} />
        <Toggle disabled mr={10} />
        <Toggle mr={10} defaultChecked />
        <Toggle variant="default" defaultChecked disabled mr={10} />
        <Toggle variant="error" defaultChecked disabled mr={10} />
        <Toggle disabledPress defaultChecked mr={10} />
        <Toggle disabledPress />
    </>
);
