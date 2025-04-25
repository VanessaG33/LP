"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/sanity/lib/type";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-[#f0abfc] p-1 py-0.5 font-bold text-[#d946ef] dark:bg-[#f0abfc] dark:text-[#d946ef]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TestimonialCard(card: any) {
  const data = card.card;
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-start justify-between gap-6 rounded-xl p-4",
        // dark styles
        "border border-[#FFFFFF66] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <PortableText value={data.description} />
      <div className="flex gap-2 items-center">
        <Image
          width={48}
          height={48}
          src={data.image}
          alt={data.name}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <p className="h5">{data.name}</p>
          <Image src={"/stars.svg"} alt={"stars"} width={78} height={14} />
        </div>
      </div>
    </div>
  );
}

export function Testimonials({ data }: { data: Testimonial[] }) {
  return (
    <section id="testimonials" className="max-w-[400px] ">
      <div className="relative mt-6  max-h-[800px] overflow-hidden">
        {Array(Math.ceil(data.length / 3))
          .fill(0)
          .map((_, i) => (
            <Marquee
              vertical
              key={i}
              className={cn("w-[400px]", {
                "[--duration:60s]": i === 1,
                "[--duration:30s]": i === 2,
                "[--duration:70s]": i === 3,
              })}
            >
              {data.slice(i * 3, (i + 1) * 3).map((card: any, idx: any) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: Math.random() * 0.8,
                    duration: 1.2,
                  }}
                >
                  <TestimonialCard card={card} />
                </motion.div>
              ))}
            </Marquee>
          ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50px] w-full bg-gradient-to-t from-background from-10%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[50px] w-full bg-gradient-to-b from-background from-10%"></div>
      </div>
    </section>
  );
}
