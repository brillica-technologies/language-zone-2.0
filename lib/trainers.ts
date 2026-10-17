// Trainers: text in data/trainers.json, photos in assets/trainers/ (not public/).
// Photos are imported so Next.js optimises them (resized, WebP/AVIF, blur placeholder).
// To add a trainer: add the photo, import it below and add an entry to the JSON.

import type { StaticImageData } from "next/image";
import trainers from "@/data/trainers.json";
import shresthaNamdev from "@/assets/trainers/shrestha-namdev.jpeg";

const PHOTOS: Record<string, StaticImageData> = {
  "shrestha-namdev": shresthaNamdev,
};

export type Trainer = {
  id: string;
  name: string;
  role: string;
  experience: string;
  levels: string;
  bio: string;
  photo?: StaticImageData;
};

export const TRAINERS: Trainer[] = trainers.map((t) => ({
  ...t,
  photo: PHOTOS[t.id],
}));
