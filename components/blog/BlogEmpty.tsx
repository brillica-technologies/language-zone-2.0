import { NewspaperIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BlogEmpty() {
  return (
    <Card className="items-center gap-3 rounded-[20px] border-2 border-dashed border-line bg-paper px-6 py-14 text-center ring-0">
      <NewspaperIcon className="size-10 text-mute" aria-hidden="true" />
      <p className="font-disp text-xl text-navy">No articles yet</p>
      <p className="max-w-90 text-mute">
        New guides from our trainers will appear here soon.
      </p>
    </Card>
  );
}
