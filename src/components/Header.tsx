export default function Header() {
  return (
    <header className="wrapper flex items-center justify-between py-[2.4rem] tablet:py-16 desktop:py-20">
      <img src="./logo.svg" alt="" />
      <button
        type="button"
        className="rounded-[.6rem] border border-midnight px-[1.6rem] py-[1.2rem] text-[1.4rem] font-bold -tracking-[.014rem] text-midnight hover:bg-midnight hover:text-cream tablet:text-[1.6rem] tablet:-tracking-[.016rem]"
      >
        Request Beta Access
      </button>
    </header>
  );
}
