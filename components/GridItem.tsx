"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function GridItem() {
  return (
    <InteractiveGridPattern
      className={cn(
        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
      )}
      width={10}
      height={10}
      squares={[50, 50]}
      squaresClassName="hover:fill-white-500"
    />
  );
}
