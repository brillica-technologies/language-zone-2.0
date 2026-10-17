import Link from "next/link";
import { GERMAN_LEVELS, levelUrl } from "@/lib/site";

/** German levels and their Goethe exams. */
export default function ExamTable() {
  return (
    <div className="overflow-x-auto rounded-[20px] border border-line bg-white">
      <table className="w-full min-w-[560px] border-collapse text-sm md:min-w-[640px] md:text-base">
        <caption className="sr-only">
          German levels and their Goethe exams
        </caption>
        <thead>
          <tr className="bg-ink text-left text-white">
            <th
              scope="col"
              className="px-3.5 py-3 font-semibold md:px-5.5 md:py-4"
            >
              Level
            </th>
            <th
              scope="col"
              className="px-3.5 py-3 font-semibold md:px-5.5 md:py-4"
            >
              Goethe exam
            </th>
            <th
              scope="col"
              className="px-3.5 py-3 font-semibold md:px-5.5 md:py-4"
            >
              What it shows
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {GERMAN_LEVELS.map((l) => (
            <tr key={l.slug} className="even:bg-paper">
              <th
                scope="row"
                className="px-3.5 py-3 text-left md:px-5.5 md:py-4"
              >
                <Link
                  href={levelUrl(l.slug)}
                  className="font-semibold text-indigo"
                >
                  {l.code} {l.name}
                </Link>
              </th>
              <td className="px-3.5 py-3 text-mute md:px-5.5 md:py-4">
                {l.exam}
              </td>
              <td className="px-3.5 py-3 text-mute md:px-5.5 md:py-4">
                {l.shows}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
