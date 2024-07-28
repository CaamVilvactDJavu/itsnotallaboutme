import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="md:py-8 md:px-2 w-full md:w-auto">
      <div className="md:mb-8 text-left flex md:flex-col items-center md:items-start justify-between p-4 md:p-0">
        <div>
          <h1 className="text-2xl font-bold">Itsnotallaboutme</h1>
          <p className="text-sm text-[#666]">c.a._.a.m</p>
        </div>
        <div className="md:mt-4 hidden md:block">
          {/* Profile image code here */}
        </div>
      </div>
      <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 justify-center md:justify-start p-4 md:p-0">
        <li>
          <Link href="/" className="underline-wavy">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about" className="underline-wavy">
            <span>About</span>
          </Link>
        </li>
        <li>
          <span>Music</span>
        </li>
        <li>
          <Link href="/notes" className="underline-wavy">
            <span>Notes</span>
          </Link>
        </li>
        <li>
          <Link href="/memoir" className="underline-wavy">
            <span>Memoir</span>
          </Link>
        </li>
      </ul>
      <div className="mt-4 md:mt-8 md:px-12 flex justify-center space-x-4 px-12">
        <FontAwesomeIcon icon={faGithub} size="2xs" />
        <FontAwesomeIcon icon={faInstagram} size="2xs" />
        <FontAwesomeIcon icon={faLinkedin} size="2xs" />
        <FontAwesomeIcon icon={faXTwitter} size="2xs" />
      </div>
    </nav>
  );
};

export default Navbar;
