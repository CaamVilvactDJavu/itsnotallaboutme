import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import "public/profile.jpg";
import {
  faGithub,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="w-64 bg-white border-r border-[#ddd] py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">Itsnotallaboutme</h1>
        <p className="text-sm text-[#666]">c.a._.a.m</p>
        <div className="mt-4">
          {/* <Image */}
          {/*   alt="profile" */}
          {/*   width={200} */}
          {/*   height={200} */}
          {/*   src="/profile.jpg" */}
          {/*   className="mx-auto" */}
          {/* /> */}
        </div>
      </div>
      <ul className="space-y-4">
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
          <span>Notes</span>
        </li>
        <li>
          <span>Memoir</span>
        </li>
      </ul>
      <div className="mt-8 flex justify-center space-x-4 px-10">
        <FontAwesomeIcon icon={faGithub} size="2xs" />
        <FontAwesomeIcon icon={faInstagram} size="2xs" />
        <FontAwesomeIcon icon={faLinkedin} size="2xs" />
        <FontAwesomeIcon icon={faXTwitter} size="2xs" />
      </div>
    </nav>
  );
};

export default Navbar;
