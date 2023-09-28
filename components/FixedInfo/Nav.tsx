"use client";
export default function Nav() {
  const handleClick = (e: any) => {
    const targerId = e.target.innerText;
    if (targerId != "ABOUT") {
      const targetOffset = document.getElementById(targerId)?.offsetTop;
      window.scrollTo({
        top: targetOffset ? targetOffset - 100 : 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <ul
        className={` hidden lg:flex gap-4 mt-6 text-sm ml-4 text-slate-500 font-medium `}
      >
        <li
          onClick={handleClick}
          className="hover:text-[#57debe] transition-colors hover:cursor-pointer"
        >
          ABOUT
        </li>
        <li
          onClick={handleClick}
          className="hover:text-[#57debe] transition-colors hover:cursor-pointer"
        >
          TECH STACK
        </li>
        <li
          onClick={handleClick}
          className="hover:text-[#57debe] transition-colors hover:cursor-pointer"
        >
          PROJECTS
        </li>
        <li
          onClick={handleClick}
          className="hover:text-[#57debe] transition-colors hover:cursor-pointer"
        >
          EXPERIENCES
        </li>
        <li
          onClick={handleClick}
          className="hover:text-[#57debe] transition-colors hover:cursor-pointer"
        >
          FOOTER
        </li>
      </ul>
    </>
  );
}
