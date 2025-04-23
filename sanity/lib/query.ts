import { groq } from "next-sanity";

export const homeQuery = groq`*[_type == "home"][0] {
  cta,
  "image": image.asset->url,
  title,
  description,
  bullets,
  button,
  video{
  asset->{_id, url}
  },
}`;

export const brandsQuery = groq`
	*[_type == "brands"]{
  "brands": brands[]{
    "image": image.asset->url,
    name
  }
}
`;

export const trustmeQuery = groq`*[_type == "trustme"][0] {
  richText1,
  title,
  richText2,
  points,
  "image1": image1.asset->url,
  text,
  "image2": image2.asset->url
}`;

export const obstaclesQuery = groq`*[_type == "obstacles"][0] {
  title,
  description,
  blocks[] {
    "image": image.asset->url,
    title,
    description
  },
  buttonText
}`;

export const roadmapQuery = groq`*[_type == "roadmap"][0] {
  title,
  subtitle,
  steps[] {
    title,
    subtitle,
    "image": image.asset->url
  },
  buttonText
}`;

export const avisQuery = groq`*[_type == "avis"][0] {
  title,
  testimonials[] {
    "image": image.asset->url,
    name,
    description
  },
  "video": video.asset->url,
  moreTestimonials[] {
    "image": image.asset->url,
    name,
    description
  }
}`;
