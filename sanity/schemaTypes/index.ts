import { type SchemaTypeDefinition } from "sanity";
import avis from "./avis";
import { brands } from "./brands";
import { faq } from "./faq";
import home from "./home";
import { howItWorks } from "./howItWorks";
import obstacles from "./obstacles";
import { offre } from "./offre";
import roadmap from "./roadmap";
import { startNow } from "./startNow";
import trustme from "./trustme";
import { testimonials } from "./testimonials";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    brands,
    trustme,
    obstacles,
    roadmap,
    avis,
    offre,
    faq,
    startNow,
    howItWorks,
    testimonials,
  ],
};
