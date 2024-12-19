"use client";

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
// import image_auchan from "@/assets/images/image_auchan.png"
// import image_decathlon from "@/assets/images/image_decathlon.png"
// import image_castorama from "@/assets/images/image_castorama.png"
// import image_clubmed from "@/assets/images/image_clubmed.png"
// import image_dysneyland from "@/assets/images/image_dysneyland.png"
// import image_fnac from "@/assets/images/image_fnac.png"
import logo_gptw from "@/assets/images/logo_gptw.png"
import logo_iso from "@/assets/images/logo_iso.png"
import logo_bcorpo from "@/assets/images/logo_bcorpo.png"
import logo_admr from "@/assets/images/logo_admr.png"
import logo_ej from "@/assets/images/logo_ej.png"
import logo_fedeentraide from "@/assets/images/logo_fedeentraide.png"
import logo_fr_benevolat from "@/assets/images/logo_fr_benevolat.png"
import logo_mh from "@/assets/images/logo_mh.png"
import logo_rdc from "@/assets/images/logo_rdc.png"
import logo_wwf from "@/assets/images/logo_wwf.png"
import logo_unicef from "@/assets/images/logo_unicef.png"
import {ArrowIcon, CheckIcon, CurvedArrowIconLeft, CurvedArrowIconRight, StarIcon} from "@/Components/Globals/icons";
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback } from 'react'
// import Autoplay from 'embla-carousel-autoplay'

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  // const [emblaRefClient] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <main className=" w-full relative overflow-hidden">
      <section id="home" className="pt-56 2xl:pt-72 relative pb-16 flex justify-between gap-12 px-32">
        <Image src={image_runners} alt="Photo de personne qui cours" className="absolute top-0 left-0 w-full h-5/6 object-cover"/>
        <div className="absolute bg-black/40 top-0 left-0 w-full h-5/6"></div>
        <div className="relative text-white w-2/3">
          <div className="w-3/4">
            <h1 className="text-5xl pb-6">Transformez chaque kilomètre en un geste solidaire</h1>
            <p className="text-xl pb-10">
              Comme + de 1000 TPE-PME dans votre région. <br/>
              Fidélisez, et motivez vos collaborateurs tout en soutenant des causes qui comptent pour votre entreprise et vos équipes !
            </p>
            <Link href="#" className=" px-8 py-4 rounded-full text-xl bg-[#BDF0DF] text-black">Nous rejoindre</Link>
          </div>
          <div className="mt-36 2xl:mt-20">
            <p className="text-white text-2xl mb-2"> Soutenez plus de 10000 associations</p>
            <div className="flex-1 flex justify-evenly gap-4 items-center py-12 bg-white shadow-xl w-full rounded-2xl">
              <Image src={logo_admr} alt="Logo association" className=" h-16 w-auto grayscale"/>
              <Image src={logo_ej} alt="Logo association" className=" h-14 w-auto grayscale"/>
              <Image src={logo_fedeentraide} alt="Logo association" className=" h-18 w-auto grayscale"/>
              <Image src={logo_fr_benevolat} alt="Logo association" className="h-18 w-auto grayscale"/>
              <Image src={logo_mh} alt="Logo association" className="h-20 w-auto grayscale"/>
              <Image src={logo_rdc} alt="Logo association" className="h-20 w-auto grayscale"/>
              <Image src={logo_wwf} alt="Logo association" className="h-24 w-auto grayscale"/>
              <Image src={logo_unicef} alt="Logo association" className="h-24 w-auto grayscale"/>
            </div>
          </div>
        </div>
        <div className="pt-24 embla overflow-hidden w-[425px] h-fit relative" >
          <div className="embla__viewport z-10 relative" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              <div
                className="embla__slide basis-1 relative min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                <h3 className="text-3xl font-semibold">1/6 Renforcement de la cohésion d&apos;équipe</h3>
                <p className="text-lg">
                  Participer à un défi collectif encourage la collaboration et la solidarité entre collègues, améliorant ainsi l&apos;esprit d&apos;équipe et la communication interne.
                </p>
              </div>
              <div
                className="embla__slide basis-1 relative min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                <h3 className="text-3xl font-semibold">2/6 Amélioration de la qualité de vie au travail (QVT)</h3>
                <p className="text-lg">
                  En incitant les employés à bouger, le programme contribue à leur bien-être physique et mental, tout en dynamisant le cadre de travail.
                </p>
              </div>
              <div
                className="embla__slide basis-1 relative min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                <h3 className="text-3xl font-semibold">3/6 Valorisation de l’image de l’entreprise</h3>
                <p className="text-lg">
                  Afficher un engagement envers des causes sociales et environnementales renforce l&apos;attractivité de l&apos;entreprise auprès des talents, partenaires et clients.
                </p>
              </div>
              <div
                className="embla__slide basis-1 relative min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                <h3 className="text-3xl font-semibold">4/6 Avantages fiscaux potentiels</h3>
                <p className="text-lg">
                  es dons effectués aux associations partenaires peuvent permettre des déductions fiscales, tout en soutenant des causes importantes.
                </p>
              </div>
              <div
                className="embla__slide basis-1 relative min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                <h3 className="text-3xl font-semibold">5/6 Outils de motivation pour les collaborateurs</h3>
                <p className="text-lg">
                  Offrir un programme ludique et engageant, avec des classements et des récompenses, booste la motivation et l’engagement des équipes.
                </p>
              </div>
              <div
                className="embla__slide basis-1 relative min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                <h3 className="text-3xl font-semibold">6/6 Contribution à la stratégie RSE</h3>
                <p className="text-lg">
                  Participer à un projet alliant sport et solidarité s&apos;inscrit parfaitement dans les initiatives de responsabilité sociétale, renforçant ainsi l’impact positif de l’entreprise sur la société.
                </p>
              </div>
            </div>
          </div>
          <button className="embla__prev z-20 absolute bottom-10 left-10 aspect-square p-3 rounded-full border border-black" onClick={scrollPrev}>
            <ArrowIcon className=" rotate-180 w-12 fill-none stroke-black"/>
          </button>
          <button className="embla__next z-20 absolute bottom-10 left-32 aspect-square p-3 rounded-full border border-black" onClick={scrollNext}>
            <ArrowIcon className=" w-12 fill-none stroke-black"/>
          </button>
        </div>
      </section>

      <section id="presentation" className="max-w-7xl mx-auto text-center py-20">
        <h2 className="text-4xl mb-12">Qui sommes nous ?</h2>
        <p className="text-xl">Nous sommes une initiative innovante qui allie sport et solidarité pour transformer
          chaque effort en un impact concret. Notre mission : mobiliser les entreprises et leurs collaborateurs autour
          de défis sportifs collectifs, où chaque kilomètre parcouru contribue à soutenir des associations engagées dans des causes essentielles telles que l’environnement, la santé, l’éducation, et l’inclusion.</p>
      </section>

      <section className="bg-[#FEFFB0] py-16 relative">
        <div className=" clip-path-triangle bg-white absolute left-1/2 -translate-x-1/2 top-0 h-8 w-20"></div>
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

      <section className="px-4 max-w-7xl mx-auto grid grid-cols-2 items-center py-20">
        <div className="bg-blue-default text-white p-8 rounded-2xl ">
          <h2 className="text-4xl mb-6">Notre raison d&apos;être</h2>
          <p className="text-lg">
            Nous croyons en une entreprise qui va au-delà de la simple performance économique. Notre mission est de créer un environnement où salariés et entreprises peuvent s’épanouir tout en ayant un impact positif sur la société et la planète. À travers notre engagement en Responsabilité Sociétale des Entreprises (RSE), nous mettons l’humain, l’environnement et la solidarité au cœur de nos actions. <br/>
            En offrant des solutions qui favorisent le bien-être des salariés, soutiennent des causes d’intérêt général et réduisent l’empreinte environnementale, nous contribuons activement à bâtir un avenir durable et responsable pour tous.
          </p>
        </div>
        <div className=" bg-blue-default/20 shadow-lg text-center p-8 space-y-6 rounded-r-xl">
          <h3 className="text-4xl mb-6">Labels et certifications</h3>
          <p className="text-lg">La transparence et la qualité de nos engagements sont reconnues par des certifications et labels exigeants. Ces distinctions reflètent notre volonté d’intégrer des pratiques responsables et éthiques dans tout ce que nous faisons :</p>
          <div className="flex justify-center gap-3">
            <Image src={logo_bcorpo} alt="Logo B Corporation" className=""/>
            <Image src={logo_gptw} alt="Logo B Corporation" className=""/>
            <Image src={logo_iso} alt="Logo B Corporation" className=""/>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto pt-10 pb-20">
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
            <h2 className="text-4xl mb-12">L&apos;application</h2>
            <ul className="space-y-4">
              <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                <p className="text-xl">Suivi et analyse des performances</p>
              </li>
              <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                <p className="text-xl">Planification d&apos;itinéraires</p>
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
            <h2 className="m-2 text-4xl">Reconnue par les entreprises</h2>
            <h2 className="m-2 text-4xl">Adorée par les entreprises</h2>
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
              <p className="m-2 ">En tant qu&apos;entreprise, nous avions du mal à motiver nos équipes avec les outils traditionnels. Depuis que nous utilisons cette solution, nos collaborateurs bénéficient d&apos;activités engageantes et d&apos;un suivi clair de leurs performances. Côté entreprise, la gestion est simplifiée grâce à une plateforme ergonomique qui regroupe tout en un seul endroit.</p>
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
              <p className="m-2">Nous cherchions une solution moderne pour dynamiser nos équipes tout en restant alignés avec nos valeurs d’entreprise. Cette application a complètement transformé notre approche. En plus de motiver les salariés avec des défis sportifs personnalisés, nous pouvons communiquer facilement nos engagements RSE et impliquer les collaborateurs dans des causes qui leur tiennent à cœur.</p>
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
              <p className="m-2">Nous avions déjà un programme d&apos;avantages, mais il manquait une vraie personnalisation. Avec cette solution, nous avons pu offrir des activités sur mesure à nos collaborateurs et centraliser tous les services dans une application intuitive. Le gain de temps pour les administrateurs est énorme, et les salariés sont ravis de voir des récompenses concrètes pour leurs efforts.</p>
              <p><strong>— Camille, Élue CSE</strong></p>
            </article>
          </div>
        </div>
      </section>

      <section id="pictures" className="py-10">
        <div className="my-5 max-w-7xl mx-auto px-4 ">
          <h2 className="text-center text-4xl font-bold m-5">Ils nous font confiance !</h2>
          <p className="text-center w-2/3 mx-auto m-10 text-xl">Découvrez les témoignages de nos clients satisfaits qui ont fait le choix d’unir bien-être au travail, engagement sportif et soutien à des causes solidaires. Grâce à notre solution, ces entreprises ont non seulement renforcé la cohésion et la motivation de leurs équipes, mais elles ont aussi contribué à des initiatives positives, en phase avec leurs valeurs.</p>
        </div>
        <div className="flex justify-center gap-5 my-2 flex-wrap items-center">
            <Image src={image_groupe} alt="image groupe" className="w-1/4"/>
            <Image src={image_velo} alt="image velo" className="w-1/4"/>
            <Image src={image_team} alt="image team" className="w-1/4"/>
            <Image src={image_fit} alt="image fit" className="w-1/4"/>
            <Image src={image_solidarite} alt="image solidarite " className="w-1/4"/>
        </div>
      </section>

      <section id="offers">
        <div className=" bg-pink-default">
          <div className="max-w-7xl mx-auto px-4 pt-10 pb-36 ">
            <h2 className="text-center text-4xl my-4">Nos offre entreprise</h2>
            <p className="text-center text-xl">Un abonnement unique pour engager vos salariés et soutenir des causes solidaires</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="flex justify-center gap-3">
            <article className="w-1/5 shadow-xl px-3 py-8 rounded-lg -mt-16 bg-white">
              <p className="text-lg">
                0 - 50 salariés
              </p>
              <p className="font-extrabold text-2xl">2500 €</p>
              <span className="text-sm">HT / an</span>
            </article>
            <article className="w-1/5 shadow-xl px-3 py-8 rounded-lg -mt-16 bg-white">
              <p className="text-lg">
                51 - 200 salariés
              </p>
              <p className="font-extrabold text-2xl">5000 €</p>
              <span className="text-sm">HT / an</span>
            </article>
            <article className="w-1/5 shadow-xl px-3 py-8 rounded-lg -mt-16 bg-white">
              <p className="text-lg">
                201 - 500 salariés
              </p>
              <p className="font-extrabold text-2xl">8000 €</p>
              <span className="text-sm">HT / an</span>
            </article>
            <article className="w-1/5 shadow-xl px-3 py-8 rounded-lg -mt-16 bg-white">
              <p className="text-lg">
                + 500 salariés
              </p>
              <p className="font-extrabold text-2xl">Sur devis</p>
              <span className="text-sm">HT / an</span>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-green-default">
        <div className="max-width-7xl mx-auto">
          <h2 className="text-4xl text-center mb-5">Rejoignez-nous</h2>
          <p className="text-center w-2/3 mx-auto my-5 text-xl"><strong>Profitiez facilement de notre solution<br/>3,2,1 … Commençons !</strong></p>
        </div> 


        <form className="w-7/12 mx-auto bg-white p-10 px-20 rounded-3xl shadow-xl justify-center">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="*Raison social" className="rounded-lg border-b border-green-default p-2" />
          <input type="text" placeholder="*Nom" className="rounded-lg border-b border-green-default p-2" />
          <input type="email" placeholder="*Email" className="rounded-lg border-b border-green-default p-2" />
          <input type="text" placeholder="*N° de téléphone" className="rounded-lg border-b border-green-default p-2"  />
          <textarea placeholder="Message" className="col-span-2 rounded-lg border-b border-green-default h-24 p-2"></textarea>
        </div>
          <p className="mt-4 text-sm">* Champs obligatoires</p>
          <p className="text-sm">En cliquant je confirme accepter le traitement de mes données personnelles conformément à la  <a href="#">Politique de confidentialité.</a></p>
          <div className="flex justify-end">
            <button className="font-bold px-12 py-3 mt-5 bg-green-default shadow-md rounded-full">Envoyer</button>
          </div>
        </form>
      </section>
    </main>
  );
}
