import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="fixed top-6 left-6 right-6 bg-white rounded-2xl flex items-center justify-between px-12 py-2 shadow-lg z-50">
      <div className="flex items-center gap-14">
        <Image src={logo} alt="Logo SoliFit" className="h-24 w-auto object-contain" />
        <nav className="flex gap-8 text-black text-lg">
          <Link href="#" className="hover:font-semibold duration-200 px-2"> Qui sommes-nous ? </Link>
          <div className="relative group">
            <Link href="#" className="relative z-10 hover:font-semibold duration-200 px-2"> Fonctionnement </Link>
            <div className="absolute overflow-hidden top-full -left-8 h-0 group-hover:h-auto duration-500 flex flex-col gap-2 bg-white w-max rounded-b-xl px-6 z-20 shadow-lg">
              <Link href="#" className="pt-5 hover:font-semibold duration-200 px-2"> Notre offre </Link>
              <Link href="#" className="hover:font-semibold duration-200 px-2"> Comment ça marche </Link>
              <Link href="#" className="pb-5 hover:font-semibold duration-200 px-2"> L&apos;application </Link>
            </div>
          </div>
          <Link href="#" className="hover:font-semibold duration-200 px-2"> Témoignages </Link>
          <Link href="#" className="hover:font-semibold duration-200 px-2"> Engagement RSE et Partenaires </Link>
        </nav>
      </div>
      <div className="flex items-center gap-8 text-lg">
        <Link href="/#" className="px-8 py-3 bg-[#BDF0DF] text-black rounded-full font-semibold duration-500 shadow-sm"> Nous rejoindre </Link>
        <Link href="/#" className="px-8 py-3 bg-white text-black rounded-full font-semibold duration-500 shadow-sm"> Votre espace</Link>
      </div>
    </header>
  );
};

export default Header;
