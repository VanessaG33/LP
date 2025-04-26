"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqQuestion } from "@/sanity/lib/type";
import { PortableText } from "@portabletext/react";

export default function Faq({ data }: { data: FaqQuestion[] }) {
  return (
    <section className="bg-muted dark:bg-background lg:py-20 w-full">
      <Accordion type="single" collapsible className="w-full space-y-2">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.question}
            className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
          >
            <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
              <div className="flex items-center gap-3">
                <span className="text-sm lg:text-base">{item.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <div className="">
                <PortableText value={item.answer} />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
