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
  length: number;
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
export interface Offre {
  _id: string;
  title: string;
  titleSecond: string;
  title2: string;
  sub1: string;
  sub1List: string[];
  sub2: string;
  sub2List: string[];
  sub3: string;
  sub3List: string[];
  titleAvis: string;
  tooltip: string;
  textButton: string;
  videoAvis: string;
  videoAvisImage: string;
}
export interface FaqQuestion {
  question: string;
  answer: PortableTextBlock[];
}

export interface FaqType {
  title: string;
  buttonText: string;
  description: PortableTextBlock[];
  questions: FaqQuestion[];
}

export interface StartNow {
  title: string;
  description: PortableTextBlock[];
  buttonText: string;
  title2: string;
  description2: PortableTextBlock[];
  features: string[];
  calendly: string;
}

export interface HowItWorksStep {
  title: string;
  subtitle: string;
  image: string;
  image2: string;
  length: number;
}

export interface HowItWorks {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
  buttonText: string;
}

interface TestimonialVideo {
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  name: string;
  job: string;
}

export interface TestimonialsSection {
  topButton: string;
  title1: string;
  title2: string;
  videos: TestimonialVideo[];
  ctaButton: string;
}
