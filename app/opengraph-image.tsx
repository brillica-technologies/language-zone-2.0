import { OG_SIZE, ogCard } from "@/lib/og";

export const alt =
  "Language Zone, German language course in Dehradun, A1 to C2";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "German institute · Dehradun",
    title: "German Language Course in Dehradun, A1 to C2",
    subtitle: "Goethe-Zertifikat preparation · Online and offline batches",
  });
}
