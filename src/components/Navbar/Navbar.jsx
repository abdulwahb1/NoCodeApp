import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-8 absolute z-10 w-full mt-[35px]">
      <nav className="flex justify-center items-center">
        <ul className="flex justify-center items-center gap-16 ">
          <li>
            <Link href="/">
              <p className="text-white opacity-50 hover:text-violet font-dm">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-white hover:text-violet font-dm">Features</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-white hover:text-violet font-dm">Pricing</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-white hover:text-violet font-dm">Blog</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-white hover:text-violet font-dm">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
