import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Hero() {
  return (
    <section className="wrapper isolate flex flex-col gap-y-[5.6rem] pt-24 tablet:relative tablet:gap-y-[12.8rem] tablet:pt-[12.8rem] desktop:flex-row desktop:gap-[0_28.5rem] desktop:pt-[12rem]">
      <Copywrite />
      <Illustration />
      <DataList />
    </section>
  );
}

function Copywrite() {
  return (
    <div className="flex flex-col gap-y-[3.2rem] tablet:gap-y-16">
      <h2 className="text-[3.8rem] leading-[4.4rem] -tracking-[.053rem] text-midnight tablet:text-[5.6rem] tablet:leading-[6.4rem] tablet:-tracking-[.078rem] desktop:text-[7.2rem] desktop:leading-[7.8rem] desktop:-tracking-[.1rem]">
        A{" "}
        <strong className="relative">
          <img
            src="./pattern-curved-line-1.svg"
            alt=""
            className="absolute -top-[2.7rem] right-0 w-[15.2rem] tablet:-top-[4.6rem] tablet:w-[23.2rem] desktop:w-[28.7rem]"
          />
          super solution
          <br />
        </strong>{" "}
        for your <strong>business.</strong>
      </h2>
      <p className="text-[1.6rem] leading-[2.8rem] tracking-[.009rem] text-slate tablet:max-w-[40ch] desktop:max-w-[35ch] desktop:text-[1.8rem] desktop:leading-[3.2rem] desktop:tracking-[0.01rem]">
        Our marketing and sales automations help you scale your outreach to get
        more leads for your company.
      </p>
      <button
        type="button"
        className="self-start rounded-[.6rem] bg-midnight px-[3.2rem] py-[1.6rem] text-[1.8rem] font-bold leading-[3.2rem] -tracking-[.018rem] text-linen"
      >
        Request Beta Access
      </button>
    </div>
  );
}

function Illustration() {
  return (
    <picture className="tablet:absolute tablet:right-0 tablet:top-[4rem] tablet:-z-10 tablet:w-[28.1rem] desktop:right-[28.5rem] desktop:w-[35rem]">
      <source
        srcSet="./image-hero-portrait@2x.webp 2x, ./image-hero-portrait.webp 1x"
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcSet="./image-hero-portrait@2x.png 2x, ./image-hero-portrait.png 1x"
        type="image/png"
        media="(min-width: 768px)"
      />
      <source
        srcSet="./image-hero-landscape@2x.webp 2x, ./image-hero-landscape.webp 1x"
        type="image/webp"
      />
      <source srcSet="./image-hero-landscape@2x.png 2x" type="image/png" />
      <img src="./image-hero-landscape.png" alt="" />
    </picture>
  );
}

function DataList() {
  return (
    <div className="grid justify-center gap-y-[3.2rem] text-center tablet:grid-cols-3 desktop:grid-cols-1 desktop:gap-y-[6.3rem] desktop:text-start">
      <Data data="2k+" label="Companies" />
      <Data data="8" label="Languages" />
      <Data data="1.2m" label="Leads" />
    </div>
  );
}

type DataProps = {
  data: string;
  label: string;
} & HTMLAttributes<HTMLDivElement>;
function Data({ data, label, className, ...rest }: DataProps) {
  return (
    <div className={twMerge(className, "")} {...rest}>
      <h3 className="text-[4.8rem] font-bold uppercase leading-[5.6rem] tracking-normal text-midnight">
        {data}
      </h3>
      <p className="text-[1.6rem] uppercase leading-[2.6rem] tracking-[0.25rem] text-slate">
        {label}
      </p>
    </div>
  );
}
