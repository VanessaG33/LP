import { defineType } from "sanity";

export default defineType({
  name: "trustme",
  title: "Trust Me",
  type: "document",
  fields: [
    {
      name: "richText1",
      title: "Titre",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "title",
      title: "Gros titre",
      type: "string",
    },
    {
      name: "richText2",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "points",
      title: "Liste de bulles",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "image1",
      title: "Image Clients",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "text",
      title: "Text client accompagnés",
      type: "string",
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
});
