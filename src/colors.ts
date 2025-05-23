import darkColors from "./colors/dark.ts";

export function getColors(theme: "zen-dark" | "zen-sakura") {
  switch (theme) {
    case "zen-dark":
    case "zen-sakura":
      return darkColors.colors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}
