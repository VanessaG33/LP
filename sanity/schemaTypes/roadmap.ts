import { defineType } from "sanity";

export default defineType({
  name: "roadmap",
  title: "Roadmap",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
    },
    {
      name: "steps",
      title: "Étapes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Titre",
              type: "string",
            },
            {
              name: "subtitle",
              title: "Sous-titre",
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
          ],
        },
      ],
    },
    {
      name: "buttonText",
      title: "Texte du bouton",
      type: "string",
    },
  ],
});
