import type { PortableTextBlock } from "@portabletext/types";

export type HomeData = {
  cta: string;
  image?: string;
  title: string;
  description: PortableTextBlock[];
  bullets: string[];
  button: string;
  video?: any;
};

export interface Brand {
  image: string;
  name: string;
}

export interface TrustMe {
  richText1: PortableTextBlock[];
  title: string;
  richText2: PortableTextBlock[];
  points: string[];
  image1: string;
  text: string;
  image2: string;
}

export interface ObstacleBlock {
  image: string;
  title: string;
  description: PortableTextBlock[];
}

export interface Obstacles {
  title: string;
  description: PortableTextBlock[];
  blocks: ObstacleBlock[];
  buttonText: string;
}

export interface RoadmapStep {
  title: string;
  subtitle: string;
  image: string;
}

export interface RoadmapType {
  title: string;
  subtitle: string;
  steps: RoadmapStep[];
  buttonText: string;
}

export interface Testimonial {
  image: string;
  name: string;
  description: any[]; // Portable Text
}

export interface Avis {
  title: string;
  testimonials: Testimonial[];
  video: string;
  moreTestimonials: Testimonial[];
}
