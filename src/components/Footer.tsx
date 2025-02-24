export default function Footer() {
  return (
    <footer className="bg-cream tablet:relative tablet:after:absolute tablet:after:bottom-full tablet:after:left-0 tablet:after:right-0 tablet:after:-z-10 tablet:after:h-[260%] tablet:after:bg-cream desktop:after:h-[150%]">
      <div className="wrapper flex flex-col items-center justify-center gap-y-[3.3rem] pb-[8rem] pt-[5.6rem] tablet:flex-row tablet:justify-between tablet:pt-[7.2rem]">
        <img src="./logo.svg" alt="" />
        <p className="text-[1.5rem] leading-[3.2rem] tracking-[0.008rem] text-slate">
          Copyright - Suite
        </p>
        <div className="flex justify-between gap-x-[2.8rem]">
          <a href="#" className="hover:opacity-50">
            <span className="sr-only">Facebook</span>
            <img src="./icon-facebook.svg" alt="" />
          </a>
          <a href="#" className="hover:opacity-50">
            <span className="sr-only">Instagram</span>
            <img src="./icon-instagram.svg" alt="" />
          </a>
          <a href="#" className="hover:opacity-50">
            <span className="sr-only">Twitter</span>
            <img src="./icon-twitter.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
