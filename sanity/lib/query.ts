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

export const offreQuery = groq`
*[_type == "offre"][0]{
  _id,
  title,
  title2,
  sub1,
  sub1List,
  sub2,
  sub2List,
  sub3,
  sub3List,
  titleAvis,
  tooltip,
  textButton,
  "videoAvis": videoAvis.asset->url,
  "videoAvisImage": videoAvisImage.asset->url,
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

export const faqQuery = groq`*[_type == "faq"][0] {
  title,
  description,
  buttonText,
  questions[] {
    question,
    answer
  }
}`;

export const startNowQuery = groq`*[_type == "startNow"][0] {
  title,
  description,
  buttonText,
  title2,
  description2,
  features,
  calendly
}`;

export const howItWorksQuery = groq`*[_type == "howItWorks"][0] {
  title,
  subtitle,
  steps[] {
    title,
    subtitle,
    "image": image.asset->url,
    "image2": image2.asset->url
  },
  buttonText,
  "image": image.asset->url
}`;
