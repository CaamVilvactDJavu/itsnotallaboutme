import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="md:py-8 md:px-2 w-full md:w-auto">
      <div className="md:mb-8 text-left flex md:flex-col items-center md:items-start justify-between p-4 md:p-0">
        <div>
          <h1 className="text-2xl font-bold">Itsnotallaboutme</h1>
          <p className="text-sm">c.a._.a.m</p>
        </div>
        {/* <div className="md:mt-4"> */}
        {/*   <Image */}
        {/*     src="/profile.jpg" */}
        {/*     alt="profile" */}
        {/*     width={230} */}
        {/*     height={230} */}
        {/*     className="rounded-xl" */}
        {/*   /> */}
        {/* </div> */}
      </div>
      <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 justify-center md:justify-start p-4 md:p-0">
        <li>
          <Link href="/" className="hover:underline hover:decoration-wavy">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline hover:decoration-wavy">
            <span>About</span>
          </Link>
        </li>
        <li>
          <span>Music</span>
        </li>
        <li>
          <Link href="/notes" className="hover:underline hover:decoration-wavy">
            <span>Notes</span>
          </Link>
        </li>
        <li>
          <Link
            href="/memoir"
            className="hover:underline hover:decoration-wavy"
          >
            <span>Memoir</span>
          </Link>
        </li>
      </ul>
      <div className="mt-4 md:mt-8 md:px-12 flex justify-center space-x-4 px-12">
        <Link
          href="https://www.linkedin.com/in/ilham-fadhlur-00022b145"
          className="text-[#666] hover:text-[#333] transition-colors"
          prefetch={false}
        >
          <LinkedinIcon />
        </Link>
        <Link
          href="https://instagram.com/c.a._.a.m"
          className="text-[#666] hover:text-[#333] transition-colors"
          prefetch={false}
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://x.com/caamvilvact"
          className="text-[#666] hover:text-[#333] transition-colors"
          prefetch={false}
        >
          <XIcon />
        </Link>
        <Link
          href="https://github.com/CaamVilvactDJavu"
          className="text-[#666] hover:text-[#333] transition-colors"
          prefetch={false}
        >
          <GithubIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      x="0px"
      y="0px"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
