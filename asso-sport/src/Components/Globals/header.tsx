import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    <header className="fixed top-10 left-10 right-10 bg-white rounded-2xl flex items-center justify-between px-12 py-3 shadow-lg text-lg z-50">
      <div className="flex items-center gap-16">
        <div className="h-20 w-32 bg-gray-500 rounded-md"></div>
        <nav className="flex gap-8 text-black">
          <Link href="#" className="hover:underline underline-offset-2"> Qui sommes-nous ? </Link>
          <Link href="#" className="hover:underline underline-offset-2"> Fonctionnement </Link>
          <Link href="#" className="hover:underline underline-offset-2"> Témoignages </Link>
          <Link href="#" className="hover:underline underline-offset-2"> Engagement RSE et Partenaires </Link>
        </nav>
      </div>
      <div className="flex gap-4 uppercase">
        <Link href="/#" className="px-6 py-2 bg-gray-500 text-white border-2 border-gray-500 rounded-lg hover:bg-transparent hover:text-black duration-500"> Nous rejoindre </Link>
        <Link href="/#" className="px-6 py-2 border-2 border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white duration-500"> Votre espace </Link>
      </div>
    </header>
  );
}

export default Header;
