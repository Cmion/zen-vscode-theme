import dark from "./colors/dark.ts";
import sakura from "./colors/sakura.ts";

export function getColors(theme: "zen-dark" | "zen-sakura") {
  switch (theme) {
    case "zen-dark":
      return dark;
    case "zen-sakura":
      return sakura;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}
