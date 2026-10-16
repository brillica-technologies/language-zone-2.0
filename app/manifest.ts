import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Language Zone, German Language Course in Dehradun",
    short_name: "Language Zone",
    description:
      "German language institute in Dehradun: Goethe-Zertifikat courses from A1 to C2.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14143a",
    icons: [{ src: "/images/small_logo.png", sizes: "any", type: "image/png" }],
  };
}
