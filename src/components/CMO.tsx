export default function CMO() {
  return (
    <section className="tablet:wrapper mt-[23.7rem] flex flex-col items-center gap-y-16 rounded-[1.5rem] bg-midnight px-[1.6rem] pb-[6.4rem] tablet:mt-[27.3rem] tablet:px-[5.8rem] desktop:relative desktop:mt-[29.1rem] desktop:flex-row desktop:justify-end desktop:gap-x-[5.3rem] desktop:p-[8.8rem_12.5rem]">
      <div className="relative bottom-0 -mt-[18.1rem] desktop:absolute desktop:left-[11.2rem] desktop:mt-0 desktop:h-[60rem] desktop:w-[37.5rem]">
        <picture className="relative z-10 desktop:block desktop:h-full desktop:w-full desktop:[&>img]:h-full">
          <source
            srcSet="./image-jeremy-small@2x.webp 2x, ./image-jeremy-small.webp 1x"
            type="image/webp"
          />
          <source srcSet="./image-jeremy-small@2x.png 2x" type="image/png" />
          <img src="./image-jeremy-small.png" alt="" />
        </picture>
        <img
          src="./pattern-blur.svg"
          alt=""
          className="absolute bottom-0 tablet:scale-[2] tablet:opacity-50 desktop:scale-150 desktop:opacity-75"
        />
      </div>
      <img
        src="./pattern-curved-line-2.svg"
        alt=""
        className="desktop:-mt-64"
      />
      <div className="flex flex-col gap-y-16 text-center desktop:text-start">
        <h2 className="text-[4rem] leading-[4.8rem] -tracking-[.042rem] text-linen">
          It just <strong>works.</strong>
        </h2>
        <p className="max-w-[55ch] text-[1.8rem] leading-[3.2rem] tracking-[0.009rem] text-cream desktop:max-w-[32ch]">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </p>
        <div>
          <h3 className="text-[1.8rem] font-bold uppercase leading-[3.2rem] tracking-[.018rem] text-linen">
            Jeremy Robinson
          </h3>
          <h4 className="text-[1.6rem] uppercase leading-[2.6rem] tracking-[.25rem] text-cream">
            CMO, Fylo
          </h4>
        </div>
      </div>
    </section>
  );
}
