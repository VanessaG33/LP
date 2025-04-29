import { defineType } from "sanity";

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials ",
  type: "document",
  fields: [
    {
      name: "topButton",
      title: "Top Button Text",
      type: "string",
    },
    {
      name: "title1",
      title: "Title Part 1",
      type: "string",
    },
    {
      name: "title2",
      title: "Title Part 2",
      type: "string",
    },
    {
      name: "videos",
      title: "Testimonial Videos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "video",
              title: "Video",
              type: "file",
            },
            {
              name: "name",
              title: "Person Name",
              type: "string",
            },
            {
              name: "job",
              title: "Job Title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});
