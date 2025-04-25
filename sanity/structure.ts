import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("home").title("Home"),
      S.documentTypeListItem("brands").title("Clients"),
      S.documentTypeListItem("trustme").title("Pourquoi me faire confiance"),
      S.documentTypeListItem("obstacles").title("Obstacles"),
      S.documentTypeListItem("howItWorks").title("Commence ca marche"),
      S.documentTypeListItem("roadmap").title("Roadmap"),
      S.documentTypeListItem("avis").title("Avis"),
      S.documentTypeListItem("offre").title("Pricing"),
      S.documentTypeListItem("faq").title("FAQ"),
      S.documentTypeListItem("startNow").title("Commence maintenant"),
    ]);
