import React from "react";

type Props = {
  image: string;
  alt?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Hero({ image, alt = "", className = "", children }: Props) {
  return (
    <section className={`relative flex min-h-dvh items-center overflow-hidden bg-background pt-32 ${className}`}>
      {/* Background Image + Gradients */}
      <div className="absolute inset-0">
        <img src={image} alt={alt} className="h-full w-full object-cover object-center" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
        <div className="absolute inset-0 bg-primary/5" />
      </div>

      {/* Decoration */}
      <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-[0.12]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[660px] w-[660px] rounded-full bg-primary/15 blur-[155px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[430px] w-[430px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-6 pb-16 sm:pb-20 md:pb-24 lg:px-8">{children}</div>
    </section>
  );
}
