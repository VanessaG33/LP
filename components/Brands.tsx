import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { Brand } from "@/sanity/lib/type";
import { sanityFetch } from "@/sanity/lib/fetch";
import { brandsQuery } from "@/sanity/lib/query";

export default async function Brands() {
  const data: any = await sanityFetch({
    query: brandsQuery,
    tags: ["brands"],
  });

  return (
    <section id="logos" className="bg-[#004AAD]">
      <div className="max-w-[100%] container mx-auto mt-[100px]">
        <div className="relative mt-6">
          <Marquee className="py-4 max-w-full [--duration:40s] [--gap:40px] lg:[--gap:30px]">
            {data[0].brands.map((company: Brand, idx: number) => (
              <div className="gap-2 flex justify-center items-center" key={idx}>
                <Image
                  key={idx}
                  width={45}
                  height={45}
                  src={company.image}
                  className="object-cover rounded-full border border-white p-1"
                  alt={company.name}
                />
                <p>{company.name}</p>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
