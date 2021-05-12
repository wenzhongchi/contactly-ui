import React from "react";
import { Story } from "@storybook/react";

import { Link, LinkProps } from "../src/Link";

export default {
    title: "Components/Link",
    component: Link,
    parameters: { layout: "centered" },
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },

        href: {
            type: "string",
        },
    },
};

export const Url: Story<LinkProps> = (props: LinkProps) => <Link {...props}>Go to Url</Link>;

Url.args = {
    href: "http://www.getcontactly.com",
    size: "md",
};
