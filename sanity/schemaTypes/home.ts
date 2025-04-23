import { defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "cta",
      title: "CTA principal",
      type: "url",
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
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "description",
      title: "Description (Rich Text)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "bullets",
      title: "Bullet points",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "button",
      title: "Bouton",
      type: "string",
    },
    {
      name: "video",
      title: "Vidéo",
      type: "file",
    },
  ],
});
