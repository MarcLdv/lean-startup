import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import {HomeIcon, PersonIcon} from "@/Components/Globals/icons";

const Header = () => {

  return (
    <header className="fixed top-6 left-6 right-6 bg-white rounded-2xl flex items-center justify-between px-12 py-2 shadow-lg z-50">
      <div className="flex items-center gap-8">
        <Image src={logo} alt="Logo SoliFit" className="h-24 w-auto object-contain" />
        <nav className="flex gap-8 text-black text-lg">
          <Link href="#" className="hover:underline underline-offset-2"> Qui sommes-nous ? </Link>
          <Link href="#" className="hover:underline underline-offset-2"> Fonctionnement </Link>
          <Link href="#" className="hover:underline underline-offset-2"> Témoignages </Link>
          <Link href="#" className="hover:underline underline-offset-2"> Engagement RSE et Partenaires </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4 text-lg">
        <Link href="/#" className="px-8 py-4 bg-[#BDF0DF] text-black rounded-full font-semibold duration-500"> Nous rejoindre </Link>
        <Link href="/" className=" ">
          <PersonIcon className=" fill-none stroke-black w-6 h-auto"/>
        </Link>
      </div>
    </header>
  );
}

export default Header;
