import React from "react";

import { Skeleton } from "./Skeleton";

export default {
    title: "Components/Skeleton",
    component: Skeleton,
};

export const Text: React.FC = () => (
    <>
        <Skeleton variant="text" />
    </>
);

export const Button: React.FC = () => (
    <>
        <Skeleton variant="button" />
    </>
);

export const FieldMedium: React.FC = () => (
    <>
        <Skeleton variant="field-md" />
    </>
);

export const FieldMediumButton: React.FC = () => (
    <>
        <Skeleton variant="field-md-w-button" />
    </>
);

export const FieldLarge: React.FC = () => (
    <>
        <Skeleton variant="field-lg" />
    </>
);

export const FieldLargeButton: React.FC = () => (
    <>
        <Skeleton variant="field-lg-w-button" />
    </>
);

export const Icon: React.FC = () => (
    <>
        <Skeleton variant="icon" />
    </>
);

export const Avatar: React.FC = () => (
    <>
        <Skeleton variant="avatar" />
    </>
);
