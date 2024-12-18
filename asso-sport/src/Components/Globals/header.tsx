import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    <header className="fixed top-10 left-10 right-10 bg-white/60 rounded-2xl flex items-center justify-between px-12 py-3 shadow-lg text-xl">
      <div className="flex items-center">
        <div className="h-20 w-32 bg-gray-500 "></div>
        <nav className="flex gap-4">
          <Link href="#" className=" hover:underline"> Nous rejoindre </Link>
          <Link href="#" className=""> Nous rejoindre </Link>
          <Link href="#" className=""> Nous rejoindre </Link>
          <Link href="#" className=""> Nous rejoindre </Link>
        </nav>
      </div>
      <div className="flex gap-4 uppercase">
        <Link href="/#" className="px-6 py-2 bg-gray-500 text-white border-2 border-gray-500 rounded-xl"> Nous rejoindre </Link>
        <Link href="/#" className="px-6 py-2 border-2 border-gray-500 rounded-xl"> Votre espace </Link>
      </div>
    </header>
  );
}

export default Header;
