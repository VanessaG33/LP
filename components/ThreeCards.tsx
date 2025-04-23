import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ObstacleBlock } from "@/sanity/lib/type";
import { PortableText } from "@portabletext/react";
import { Zap } from "lucide-react";
import { ReactNode } from "react";

interface ThreeCardsProps {
  blocks: ObstacleBlock[];
}

export default function ThreeCards({ blocks }: ThreeCardsProps) {
  return (
    <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
      {blocks.map((block, index) => (
        <Card className="group shadow-zinc-950/5" key={index}>
          <CardHeader className="pb-3">
            <CardDecorator>
              <Zap className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="mt-6 font-medium">{block.title}</h3>
          </CardHeader>

          <CardContent>
            <PortableText value={block.description} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
