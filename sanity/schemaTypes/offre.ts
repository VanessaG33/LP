import { defineType } from "sanity";

export const offre = defineType({
  name: "offre",
  title: "Offre",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "title2",
      title: "Titre 2",
      type: "string",
    },
    {
      name: "sub1",
      title: "Titre de contenu 1",
      type: "string",
    },
    {
      name: "sub1List",
      title: "Liste de contenu 1",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "sub2",
      title: "Titre de contenu 2",
      type: "string",
    },
    {
      name: "sub2List",
      title: "Liste de contenu 2",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "textButton",
      title: "Texte du bouton",
      type: "string",
    },
    {
      name: "titleAvis",
      title: "Titre Avis",
      type: "string",
    },
    {
      name: "tooltip",
      title: "Tooltip Avis",
      type: "string",
    },
    {
      name: "videoAvis",
      title: "Video Avis",
      type: "file",
    },
  ],
});
