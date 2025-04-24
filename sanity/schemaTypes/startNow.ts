import { defineType } from "sanity";

export const startNow = defineType({
  name: "startNow",
  title: "Start Now",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Start Your Journey Today",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      initialValue: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Take the first step towards your transformation.",
            },
          ],
        },
      ],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Schedule a Call",
    },
    {
      name: "title2",
      title: "Second Title",
      type: "string",
      initialValue: "Why Choose Us",
    },
    {
      name: "description2",
      title: "Second Description",
      type: "array",
      of: [{ type: "block" }],
      initialValue: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Discover what makes us different.",
            },
          ],
        },
      ],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "calendly",
      title: "Calendly Link",
      type: "url",
    },
  ],
});
