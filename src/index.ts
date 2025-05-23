import { getTheme } from "./theme";

const zenDarkTheme = getTheme({
  theme: "zen-dark",
  name: "Zen Dark",
});

const zenLightTheme = getTheme({
  theme: "zen-sakura",
  name: "Zen Sakura (Cherry Blossom)",
});

// Write themes
Bun.write("./themes/zen-dark.json", JSON.stringify(zenDarkTheme, null, 2));
Bun.write("./themes/zen-sakura.json", JSON.stringify(zenLightTheme, null, 2));
