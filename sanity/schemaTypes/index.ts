import { type SchemaTypeDefinition } from "sanity";
import avis from "./avis";
import { brands } from "./brands";
import home from "./home";
import obstacles from "./obstacles";
import roadmap from "./roadmap";
import trustme from "./trustme";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, brands, trustme, obstacles, roadmap, avis],
};
