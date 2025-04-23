import { defineType } from "sanity";

export const brands = defineType({
  name: "brands",
  title: "Marques",
  type: "document",
  fields: [
    {
      name: "brands",
      title: "Brands",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Logo",
              type: "image",
            },
            {
              name: "name",
              title: "Nom de la marque",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});
