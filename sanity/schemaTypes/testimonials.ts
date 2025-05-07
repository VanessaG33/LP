import { defineType } from "sanity";

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials ",
  type: "document",
  fields: [
    {
      name: "title1",
      title: "Title Part 1",
      type: "string",
    },

    {
      name: "videos",
      title: "Testimonial Videos",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
