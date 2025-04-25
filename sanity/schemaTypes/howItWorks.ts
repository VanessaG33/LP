import { defineType } from "sanity";

export const howItWorks = defineType({
  name: "howItWorks",
  title: "How It Works",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Les 3 obstacles qui tempeche davancer",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      initialValue:
        "Tu n'es pas seul à te poser ces questions. La plupart de nos élèves avaient les mêmes doutes avant de commencer. Et pourtant, en 8 semaines, ils ont lancé leur activité avec confiance.",
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },

            {
              name: "image2",
              title: "Image de droite",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
  ],
});
