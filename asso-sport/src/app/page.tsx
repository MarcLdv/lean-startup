import Image from "next/image";
import Link from "next/link";
import image_runners from "@/assets/images/image_runners.jpg"
import image_mockup from "@/assets/images/image_mockup.png"
import image_people_seat from "@/assets/images/image_people_seat.png"
import image_notebook from "@/assets/images/image_notebook.png"
import image_donation from "@/assets/images/image_donation.png"
import image_hands from "@/assets/images/image_hands.png"
import image_fit from "@/assets/images/image_fit.png"
import image_groupe from "@/assets/images/image_groupe.png"
import image_solidarite from "@/assets/images/image_solidarite.png"
import image_team from "@/assets/images/image_team.png"
import image_velo from "@/assets/images/image_velo.png"
import {CheckIcon, CurvedArrowIconLeft, CurvedArrowIconRight, StarIcon} from "@/Components/Globals/icons";

export default function Home() {
  return (
    <main className=" w-full relative overflow-hidden">
      <section id="home" className="pt-56 2xl:pt-72 relative pb-16 flex justify-between gap-12 px-32">
        <Image src={image_runners} alt="Photo de personne qui cours" className="absolute top-0 left-0 w-full h-5/6 object-cover"/>
        <div className="absolute bg-black/40 top-0 left-0 w-full h-5/6"></div>
        <div className="relative text-white w-2/3 ">
          <div>
            <h1 className="text-5xl pb-6">Transformez chaque kilomètre en un geste solidaire</h1>
            <p className="text-xl pb-10">
              Comme + de 1000 TPE-PME dans votre région. <br/>
              Fidélisez, et motivez vos collaborateurs tout en soutenant des causes qui comptent pour votre entreprise et vos équipes !
            </p>
            <Link href="#" className=" px-8 py-4 rounded-full text-xl bg-[#BDF0DF] text-black">Nous rejoindre</Link>
          </div>
          <div className="flex gap-6 mt-36 2xl:mt-56">
            <div className="flex-1 h-32 bg-[#D9D9D9] rounded-2xl"></div>
            <div className="flex-1 h-32 bg-[#D9D9D9] rounded-2xl"></div>
            <div className="flex-1 h-32 bg-[#D9D9D9] rounded-2xl"></div>
            <div className="flex-1 h-32 bg-[#D9D9D9] rounded-2xl"></div>
          </div>
        </div>
        <div className="pt-24">
          <div className=" relative min-w-[370px] aspect-[0.8] rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
          </div>
        </div>
      </section>

      <section id="presentation" className="max-w-7xl mx-auto text-center pt-8 pb-20">
        <h2 className="text-4xl mb-12">Qui sommes nous ?</h2>
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
        <h2 className="text-4xl mb-12 text-center">Comment ça marche</h2>
        <div className="flex justify-between items-start">
          <div className="relative shadow-xl aspect-square rounded-full flex flex-col p-8 justify-center items-center text-center text-xl font-semibold gap-2 w-64">
            <h3>Etape 1</h3>
            <Image src={image_notebook} alt="personne assise image" className="h-14 w-auto object-contain" />
            <p>Inscrivez votre entreprise</p>
            <CurvedArrowIconRight className="absolute top-[110%] left-1/2 fill-[#2D8BBA] w-44 h-auto"/>
          </div>
          <div className=" relative shadow-xl aspect-square rounded-full flex flex-col p-8 justify-center items-center text-center mt-40 text-xl font-semibold gap-2 w-64">
            <h3>Etape 2</h3>
            <Image src={image_people_seat} alt="personne assise image" className="h-14 w-auto object-contain" />
            <p>Mobilisez vos équipes</p>
            <CurvedArrowIconLeft className="absolute bottom-[110%] left-1/2 fill-[#2D8BBA] w-44 h-auto"/>
          </div>
          <div className=" relative shadow-xl aspect-square rounded-full flex flex-col p-8 justify-center items-center text-center text-xl font-semibold gap-2 w-64">
            <h3>Etape 3</h3>
            <Image src={image_hands} alt="personne assise image" className="h-14 w-auto object-contain" />
            <p>Marchez, courez, dépassez-vous</p>
            <CurvedArrowIconRight className="absolute top-[105%] left-1/2 fill-[#2D8BBA] w-44 h-auto"/>
          </div>
          <div className="shadow-xl aspect-square rounded-full flex flex-col p-8 justify-center items-center text-center mt-40 text-xl font-semibold gap-2 w-64">
            <h3>Etape 4</h3>
            <Image src={image_donation} alt="personne assise image" className="h-14 w-auto object-contain" />
            <p>Mobilisez vos équipes</p>
          </div>
        </div>
      </section>

      <section id="application" className="bg-gradient-to-r from-[#FCD8EE] to-[#FEFFB0] py-20">
        <div className="max-w-7xl mx-auto flex justify-between gap-20 ">
          <div className="w-1/2">
            <h2 className="text-4xl mb-12">L'application</h2>
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
          <Image src={image_mockup} alt="image mockup application" className=" -mt-16 -mb-48 object-contain aspect-square w-1/2" />
        </div>
      </section>

      <section id="testimonies" className="w-full bg-blue-default py-20">
        <div className="maw-w-7xl mx-auto px-4">
          <div className="flex-col items-center text-center w-full text-white pb-16">
            <h2 className="m-2 text-2xl">Reconnue par les entreprises</h2>
            <h2 className="m-2 text-2xl">Adorée par les entreprises</h2>
          </div>

          <div className="flex justify-between items-stretch flex-wrap">
            <article className="flex-col items-center justify-center w-1/4 mx-auto bg-white p-5 rounded-2xl text-center">
              <div className="flex gap-2 justify-center m-3">
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
              </div>
              <p className="m-2">En tant qu'entreprise, nous avions du mal à motiver nos équipes avec les outils traditionnels. Depuis que nous utilisons cette solution, nos collaborateurs bénéficient d'activités engageantes et d'un suivi clair de leurs performances. Côté entreprise, la gestion est simplifiée grâce à une plateforme ergonomique qui regroupe tout en un seul endroit."</p>
              <p><strong>— Marie, Responsable RH</strong></p>
            </article>
            <article className="flex-col items-center justify-center w-1/4 mx-auto bg-white p-5 rounded-2xl text-center">
              <div className="flex gap-2 justify-center m-3">
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
              </div>
              <p className="m-2">"Nous cherchions une solution moderne pour dynamiser nos équipes tout en restant alignés avec nos valeurs d’entreprise. Cette application a complètement transformé notre approche. En plus de motiver les salariés avec des défis sportifs personnalisés, nous pouvons communiquer facilement nos engagements RSE et impliquer les collaborateurs dans des causes qui leur tiennent à cœur."</p>
              <p><strong>— Antoine, Responsable RSE</strong></p>
            </article>
            <article className="flex-col items-center justify-center w-1/4 mx-auto bg-white p-5 rounded-2xl text-center">
              <div className="flex gap-2 justify-center m-3">
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
              </div>
              <p className="m-2">"Nous avions déjà un programme d'avantages, mais il manquait une vraie personnalisation. Avec cette solution, nous avons pu offrir des activités sur mesure à nos collaborateurs et centraliser tous les services dans une application intuitive. Le gain de temps pour les administrateurs est énorme, et les salariés sont ravis de voir des récompenses concrètes pour leurs efforts."</p>
              <p><strong>— Camille, Élue CSE</strong></p>
            </article>
          </div>
        </div>
      </section>

      <section id="pictures" className="max-w-7xl mx-auto py-20">
        <div className="flex justify-center gap-3 my-2 flex-wrap items-center">
            <Image src={image_groupe} alt="image groupe" className="w-1/4"/>
            <Image src={image_velo} alt="image velo" className="w-1/4"/>
            <Image src={image_team} alt="image team" className="w-1/4"/>
            <Image src={image_fit} alt="image fit" className="w-1/4"/>
            <Image src={image_solidarite} alt="image solidarite " className="w-1/4"/>
        </div>
      </section>

      <section id="clients" className="py-20">
        <div className="max-w-7xl mx-auto my-5">
          <h2 className="text-center text-2xl font-bold m-5">Ils nous font confiance !</h2>
          <p className="text-center w-2/3 mx-auto">Découvrez les témoignages de nos clients satisfaits qui ont fait le choix d’unir bien-être au travail, engagement sportif et soutien à des causes solidaires. Grâce à notre solution, ces entreprises ont non seulement renforcé la cohésion et la motivation de leurs équipes, mais elles ont aussi contribué à des initiatives positives, en phase avec leurs valeurs.</p>
        </div>
          
        <article className="bg-pink-default w-full p-10 my-5">
          <div className="max-w-7xl mx-auto">

            <h2 className="text-center">Nos entreprises clientes</h2>
            {/* TODO : carrousel entreprises */}

          </div>
        </article>
        <h3 className="text-center">Et pourquoi pas vous ?</h3>
      </section>

      <section id="contact" className="py-20 bg-green-default">
        <div className="max-width-7xl mx-auto">
          <h2 className="text-2xl text-center mb-5">Rejoignez-nous</h2>
          <p className="text-center w-2/3 mx-auto"><strong>Profitiez facilement de notre solution<br/>3,2,1 … Commençons !</strong></p>
        </div> 

        <form className="w-10/12 mx-auto grid grid-cols-2 gap-4 bg-white p-10 rounded-3xl shadow-xl">
          <input type="text" placeholder="*Raison social" className="" />
          <input type="text" placeholder="*Nom" className="" />
          <input type="text" placeholder="*N° de téléphone" className="" />
          <input type="email" placeholder="*Email" className="" />
          <textarea placeholder="Message" className="col-span-2"></textarea>
          <p>* Champs obligatoires<br/>En cliquant je confirme accepter le traitement de mes données personnelles conformément à la Politique de confidentialité.</p>
          <button>Envoyer</button>
        </form>
      </section>
    </main>
  );
}
