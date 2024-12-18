import Image from "next/image";
import Link from "next/link";
import image_runners from "@/assets/images/image_runners.jpg"
import image_mockup from "@/assets/images/image_runners.jpg"
import {CheckIcon} from "@/Components/Globals/icons";

export default function Home() {
  return (
    <main className="h-screen w-full relative">
      <section id="home" className="pt-72 relative pb-16 flex justify-between gap-12 px-32">
        <Image src={image_runners} alt="Photo de personne qui cours" className="absolute top-0 left-0 w-full h-3/4 object-cover"/>
        <div className="absolute bg-black/40 top-0 left-0 w-full h-3/4"></div>
        <div className="relative text-white w-2/3 ">
          <div>
            <p className="text-6xl pb-6">Transformez chaque kilomètre en un geste solidaire</p>
            <p className="text-2xl pb-10">
              Comme + de 1000 TPE-PME dans votre région.​ <br/>
              Fidélisez, et motivez vos collaborateurs tout en soutenant des causes qui comptent pour votre entreprise et vos équipes !
            </p>
            <Link href="#" className=" px-8 py-4 rounded-full text-xl bg-[#BDF0DF] text-black">Nous rejoindre</Link>
          </div>
          <div className="flex gap-6 mt-36">
            <div className="flex-1 h-32 bg-[#D9D9D9] rounded-2xl"></div>
            <div className="flex-1 h-32 bg-[#D9D9D9] rounded-2xl"></div>
            <div className="flex-1 h-32 bg-[#D9D9D9] rounded-2xl"></div>
            <div className="flex-1 h-32 bg-[#D9D9D9] rounded-2xl"></div>
          </div>
        </div>
        <div className="pt-24">
          <div className=" relative min-w-[400px] aspect-[0.8] rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
          </div>
        </div>
      </section>

      <section id="presentation" className="max-w-7xl mx-auto text-center pt-8 pb-20">
        <h2 className="text-5xl mb-12">Qui sommes nous ?</h2>
        <p className="text-xl">Nous sommes une initiative innovante qui allie sport et solidarité pour transformer chaque effort en un impact concret. Notre mission : mobiliser les entreprises et leurs collaborateurs autour de défis sportifs collectifs, où chaque kilomètre parcouru contribue à soutenir des associations engagées dans des causes essentielles telles que l’environnement, la santé, l’éducation, et l’inclusion.</p>
      </section>

      <section className="bg-[#FEFFB0] py-16">
        <div className="max-w-7xl mx-auto flex justify-between gap-6 ">
          <div className="text-center space-y-5 max-w-[200px]">
            <p className="font-bold text-5xl">+500</p>
            <p className="text-2xl">PME clientes et souriantes</p>
          </div>
          <div className="text-center space-y-5 max-w-[200px]">
            <p className="font-bold text-5xl">120000</p>
            <p className="text-2xl">Dons récoltés grace au sport</p>
          </div>
          <div className="text-center space-y-5 max-w-[200px]">
            <p className="font-bold text-5xl">25</p>
            <p className="text-2xl">Collaborateurs à votre écoute</p>
          </div>
          <div className="text-center space-y-5 max-w-[200px]">
            <p className="font-bold text-5xl">12</p>
            <p className="text-2xl">Années d’expérience</p>
          </div>

        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto py-20">
        <h2 className="text-5xl mb-12 text-center">Comment ça marche</h2>
        <div className="flex justify-center items-start gap-24">
          <div className="shadow-xl aspect-square rounded-full flex flex-col p-12 justify-center">
            <h3>Etape 3</h3>
            <p>Inscrivez votre entreprise</p>
          </div>
          <div className="shadow-xl aspect-square rounded-full flex flex-col p-12 justify-center mt-40 ">
            <h3>Etape 3</h3>
            <p>Inscrivez votre entreprise</p>
          </div>
        </div>
      </section>

      <section id="application" className="bg-gradient-to-r from-[#FCD8EE] to-[#FEFFB0] py-20">
        <div className="max-w-7xl mx-auto flex justify-between gap-20 ">
          <div className="w-1/2">
            <h2 className="text-5xl mb-12">L'application</h2>
            <ul className="space-y-4">
              <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                <p className="text-xl">Suivi et analyse des performances</p>
              </li>
              <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                <p className="text-xl">Planification d'itinéraires</p>
              </li>
              <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                <p className="text-xl">Synchronisation d’applications externes</p>
              </li>
              <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                <p className="text-xl">Suivi des actualités</p>
              </li>
              <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                <p className="text-xl">Création de groupes collaboratifs</p>
              </li>
            </ul>
          </div>
          <Image src={image_mockup} alt="image mockup application" className=" -mb-20 w-full aspect-square" />
        </div>


      </section>

      <section id="testimony" className="h-96 w-full bg-gray-200 max-width-7xl mx-auto">
        <h2>Témoignages</h2>

      </section>

      <section id="contact" className="h-96 w-full max-width-7xl mx-auto">
        <h2>Contact</h2>

        <form>
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Envoyer</button>
        </form>
      </section>
    </main>
  );
}
