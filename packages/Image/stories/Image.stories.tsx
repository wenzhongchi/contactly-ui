import React from "react";

import { Image } from "../src/Image";

export default {
    title: "Components/Image",
    component: Image,
};

export const Regular: React.FC = () => (
    <Image
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        height="300px"
        width="300px"
    />
);
