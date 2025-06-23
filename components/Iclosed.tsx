"use client";
import { InlineWidget } from "react-calendly";

export default function IClosed() {
  return (
    <div className="lg:w-[640px] mx-auto">
      <InlineWidget
        pageSettings={{
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
        }}
        url={"https://calendly.com/d/cssq-8vm-hvb/audit-de-situation"}
      />
    </div>
  );
}
