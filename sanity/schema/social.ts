import { defineType } from "sanity";

export default defineType({
    name: "social",
    title: "Social",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of Platform for social media",
            type: "string",
        },
        {
            name: "url",
            title: "url",
            type: "url",
        },
    ],
});
