export default function Header() {
  return (
    <header className="desktop:max-w-[111rem] desktop:py-20 tablet:max-w-[68.9rem] tablet:mx-auto tablet:py-16 tablet:px-0 flex items-center justify-between px-[1.6rem] py-[2.4rem]">
      <img src="./logo.svg" alt="" />
      <button
        type="button"
        className="border-midnight tablet:text-[1.6rem] tablet:leading-[3.2rem] tablet:tracking-[.016rem] hover:bg-midnight hover:text-cream rounded-[.6rem] border px-[1.6rem] py-[1.2rem] text-[1.4rem] font-bold leading-[2.4rem] tracking-[.014rem]"
      >
        Request Beta Access
      </button>
    </header>
  );
}
