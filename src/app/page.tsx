"use client";

import Image from "next/image";
import Link from "next/link";
import image_runners from "@/assets/images/image_runners.png"
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
import logo_gptw from "@/assets/images/logo_gptw.png"
import logo_iso from "@/assets/images/logo_iso.png"
import logo_bcorpo from "@/assets/images/logo_bcorpo.png"
import logo_admr from "@/assets/images/logo_admr.png"
import logo_ej from "@/assets/images/logo_ej.svg"
import logo_fedeentraide from "@/assets/images/logo_fedeentraide.png"
import logo_fr_benevolat from "@/assets/images/logo_fr_benevolat.png"
import logo_mh from "@/assets/images/logo_mh.png"
import logo_rdc from "@/assets/images/logo_rdc.png"
import logo_wwf from "@/assets/images/logo_wwf.jpg"
import logo_unicef from "@/assets/images/logo_unicef.png"
import logo_instagram from "@/assets/images/logo_instagram.png"
import logo_facebook from "@/assets/images/logo_facebook.png"
import logo_twitter from "@/assets/images/logo_twitter.png"
import {
  ArrowIcon,
  CheckIcon,
  CurvedArrowIconLeft,
  CurvedArrowIconRight,
  MenuIcon,
  StarIcon
} from "@/Components/Globals/icons";
import useEmblaCarousel from 'embla-carousel-react'
import React, {useCallback, useEffect, useState} from 'react'
import logo from "@/assets/images/logo.png";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!event.target || !(event.target instanceof HTMLElement)) return;
    if (!event.target.closest(".menu-container")) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000); 

    return () => clearInterval(interval);
  }, [emblaApi]);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev()
  // }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <header
        className="fixed top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 bg-white rounded-2xl px-8 xl:px-12 py-2 shadow-lg z-50">
        <div className="hidden xl:flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="">
              <Image src={logo} alt="Logo SoliFit" className="h-24 w-auto object-contain"/>
            </a>
            <nav className="flex gap-4 text-black text-lg">
              <Link href="#" className="hover:font-semibold duration-200 px-2"> Qui sommes-nous ? </Link>
              <div className="relative group">
                <Link href="#" className="relative z-10 hover:font-semibold duration-200 px-2"> Fonctionnement </Link>
                <div
                  className="absolute overflow-hidden top-full -left-8 h-0 group-hover:h-auto duration-500 flex flex-col gap-2 bg-white w-max rounded-b-xl px-6 z-20 shadow-lg">
                  <Link href="#" className="pt-5 hover:font-semibold duration-200 px-2"> Notre offre </Link>
                  <Link href="#" className="hover:font-semibold duration-200 px-2"> Comment ça marche </Link>
                  <Link href="#" className="pb-5 hover:font-semibold duration-200 px-2"> L&apos;application </Link>
                </div>
              </div>
              <Link href="#" className="hover:font-semibold duration-200 px-2"> Témoignages </Link>
              <Link href="#" className="hover:font-semibold duration-200 px-2"> Engagement RSE et Partenaires </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <Link href="#form-contact"
                  className="px-8 py-3 bg-[#BDF0DF] text-black rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 duration-300"> Nous
              rejoindre </Link>
          </div>
        </div>
        <div className="block xl:hidden">
          <div className="flex justify-between items-center">
            <Image src={logo} alt="Logo SoliFit" className="h-16 w-auto object-contain"/>
            <MenuIcon className="w-8 h-auto cursor-pointer" onClick={handleMenuToggle}/>
          </div>
          <div className={`menu-container w-fit mx-auto overflow-hidden duration-500 ${!isMenuOpen ? "h-0" : "h-auto py-8"}`}>
            <nav className="gap-4 flex flex-col text-black text-lg text-center">
              <Link href="#" className="hover:font-semibold duration-200 px-2">
                Qui sommes-nous ?
              </Link>
              <Link href="#" className="relative z-10 hover:font-semibold duration-200 px-2">
                Fonctionnement
              </Link>
              <Link href="#" className="hover:font-semibold duration-200 px-2">
                Témoignages
              </Link>
              <Link href="#" className="hover:font-semibold duration-200 px-2">
                Engagement RSE et Partenaires
              </Link>
              <Link href="#form-contact"
                    className="px-8 py-3 bg-[#BDF0DF] text-black rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 duration-300"> Nous
                rejoindre </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className=" w-full relative overflow-hidden">
        <section id="home" className="pt-32 md:pt-44 2xl:pt-56 relative pb-16 flex flex-col lg:flex-row justify-between gap-12 px-4 md:px-20 2xl:px-32">
          <Image src={image_runners} alt="Photo de personne qui cours"
                 className="absolute top-0 left-0 w-full h-1/2 lg:h-5/6 object-cover"/>
          <div className="absolute bg-black/40 top-0 left-0 w-full h-1/2 lg:h-5/6"></div>
          <div className="relative text-white lg:w-2/3">
            <div className="xl:w-3/4">
              <h1 className="text-3xl md:text-5xl pb-3 md:pb-6">Transformez chaque kilomètre en un geste solidaire</h1>
              <p className="text-lg md:text-xl pb-4 md:pb-10">
                Découvrez <strong className="font-bold">SoliFit</strong> <br/>
                L&apos;application qui unit vos collaborateurs au service des associations. Grâce à <strong>SoliFit</strong>, motivez votre équipe autour d&apos;une cause, renforcez la cohésion interne, valorisez votre image d&apos;entreprise engagée, et contribuez à un impact positif pour la société.
              </p>
              <Link href="#"
                    className="px-8 py-4 block w-fit rounded-full text-lg md:text-xl bg-[#BDF0DF] text-black shadow-lg hover:shadow-xl hover:scale-105 duration-300">Nous
                rejoindre</Link>
            </div>
            <div className=" mt-8 lg:mt-10 xl:mt-32 2xl:mt-16">
              <p className="text-white text-2xl mb-2"> Soutenez les associations qui comptent pour vous et vos équipes.</p>
              <div
                className="flex-1 flex justify-evenly gap-4 items-center py-8 bg-white shadow-xl w-full rounded-2xl overflow-hidden px-1">
                <Image src={logo_admr} alt="Logo association" className=" h-14 w-auto grayscale"/>
                <Image src={logo_wwf} alt="Logo association" className="h-20 w-auto grayscale"/>
                <Image src={logo_rdc} alt="Logo association" className="h-16 w-auto grayscale"/>
                <Image src={logo_unicef} alt="Logo association" className="h-8 w-auto grayscale"/>
                <Image src={logo_fedeentraide} alt="Logo association" className=" h-14 w-auto grayscale"/>
                <Image src={logo_ej} alt="Logo association" className=" h-14 w-auto grayscale"/>
                <Image src={logo_fr_benevolat} alt="Logo association" className="h-10 w-auto grayscale"/>
                <Image src={logo_mh} alt="Logo association" className="h-20 w-auto grayscale"/>
              </div>
            </div>
          </div>
          <div className=" pt-6 lg:pt-10 embla overflow-hidden max-w-full lg:max-w-[425px] mx-auto h-fit relative">
            <p className="lg:text-white text-2xl font-semibold mb-3 px-4">Découvrez les avantages de SoliFit pour vo entreprise : </p>
            <div className="embla__viewport z-10 relative" ref={emblaRef}>
              <div className="embla__container flex gap-6">
                <div
                  className="embla__slide basis-1 relative min-w-[350px] md:min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                  <h3 className="text-2xl md:text-3xl font-semibold">1/6 Renforcement de la cohésion d&apos;équipe</h3>
                  <p className="md:text-lg">
                    Participer à un défi collectif encourage la collaboration et la solidarité entre salariés,
                    améliorant ainsi l&apos;esprit d&apos;équipe et la communication interne.
                  </p>
                </div>
                <div
                  className="embla__slide basis-1 relative  min-w-[350px] md:min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                  <h3 className="text-2xl md:text-3xl font-semibold">2/6 Amélioration de la qualité de vie au travail (QVT)</h3>
                  <p className="md:text-lg">
                    En incitant vos salariés à faire du sport, notre solution contribue à leur bien-être physique et mental, tout
                    en dynamisant le cadre de travail.
                  </p>
                </div>
                <div
                  className="embla__slide basis-1 relative  min-w-[350px] md:min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                  <h3 className="text-2xl md:text-3xl font-semibold">3/6 Valorisation de l&apos;image de l&apos;entreprise</h3>
                  <p className="md:text-lg">
                    Afficher un engagement envers des causes sociales et environnementales renforce l&apos;attractivité
                    de l&apos;entreprise auprès des talents, partenaires et clients.
                  </p>
                </div>
                <div
                  className="embla__slide basis-1 relative  min-w-[350px] md:min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                  <h3 className="text-2xl md:text-3xl font-semibold">4/6 Avantages fiscaux potentiels</h3>
                  <p className="md:text-lg">
                    Les dons effectués aux associations partenaires peuvent permettre des déductions fiscales, tout en
                    soutenant des causes importantes.
                  </p>
                </div>
                <div
                  className="embla__slide basis-1 relative  min-w-[350px] md:min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                  <h3 className="text-2xl md:text-3xl font-semibold">5/6 Outils de motivation pour les collaborateurs</h3>
                  <p className="md:text-lg">
                    Offrir un programme ludique et engageant, avec des classements et des récompenses, booste la
                    motivation et l&apos;engagement des équipes.
                  </p>
                </div>
                <div
                  className="embla__slide basis-1 relative  min-w-[350px] md:min-w-[425px] aspect-[0.8] p-10 space-y-8 rounded-2xl bg-gradient-to-b from-[#BDF0DF] to-[#FEFFB0]">
                  <h3 className="text-3xl font-semibold">6/6 Contribution à la stratégie RSE</h3>
                  <p className="md:text-lg">
                    Participer à un projet alliant sport et solidarité s&apos;inscrit parfaitement dans les initiatives
                    de responsabilité sociétale, renforçant l&apos;impact positif de l&apos;entreprise sur la société.
                  </p>
                </div>
              </div>
            </div>
            {/*<button*/}
            {/*  className="embla__prev z-20 absolute bottom-10 left-10 aspect-square p-3 rounded-full border border-black"*/}
            {/*  onClick={scrollPrev}>*/}
            {/*  <ArrowIcon className=" rotate-180 w-12 fill-none stroke-black"/>*/}
            {/*</button>*/}
            <button
              className="embla__next z-20 absolute bottom-10 left-10 aspect-square p-2 rounded-full border border-black"
              onClick={scrollNext}
            >
              <ArrowIcon className=" w-12 md:w-16 fill-none stroke-black"/>
            </button>
          </div>
        </section>

        <section id="presentation" className="max-w-7xl mx-auto px-4 text-center pb-20">
          <h2 className="text-2xl md:text-4xl mb-12">Qui sommes nous ?</h2>
          <p className="text-lg md:text-xl">Nous sommes une initiative innovante qui allie sport et solidarité pour transformer
            chaque effort en un impact concret. Notre mission : mobiliser les entreprises et leurs collaborateurs autour
            de défis sportifs collectifs, où chaque kilomètre parcouru contribue à soutenir des associations engagées
            dans des causes essentielles telles que l&apos;environnement, la santé, l&apos;éducation, et l&apos;inclusion.</p>
        </section>

        <section className="bg-[#FEFFB0] py-16 relative">
          <div className=" clip-path-triangle bg-white absolute left-1/2 -translate-x-1/2 top-0 h-8 w-20"></div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-20 lg:gap-28 ">
            <div className="text-center mx-auto space-y-3">
              <p className="font-bold text-xl md:text-3xl">95%</p>
              <p className="md:text-lg">Des salariés ressentent une meilleure cohésion d&apos;équipe après un défi collectif</p>
            </div>
            <div className="text-center mx-auto space-y-3 ">
              <p className="font-bold text-xl md:text-3xl">15 sports</p>
              <p className="md:text-lg">Reconnu par l&apos;application pour représenter la majorité de vos activités sportives</p>
            </div>
            <div className="text-center mx-auto space-y-3 ">
              <p className="font-bold text-xl md:text-3xl">30 min/jour</p>
              <p className="md:text-lg ">De sport réduisent stress et boostent la productivité</p>
            </div>
            <div className="text-center mx-auto space-y-3">
              <p className="font-bold text-xl md:text-3xl">10 causes</p>
              <p className="md:text-lg ">Solidaires majeures soutenues, de l&apos;environnement à l&apos;éducation</p>
            </div>
          </div>
        </section>

        <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-20">
          <div className="bg-blue-default text-white p-4 md:p-8 rounded-2xl text-center lg:text-left ">
            <h2 className="text-2xl md:text-4xl mb-6">Notre raison d&apos;être</h2>
            <p className="md:text-lg">
            Nous croyons en une entreprise qui va au-delà de la simple performance économique.
            Notre mission est de créer un environnement où salariés et entreprises peuvent s&apos;épanouir 
            tout en ayant un impact positif sur la société et la planète. <br/>
            Grâce à notre engagement en Responsabilité Sociétale des Entreprises (RSE), nous plaçons l&apos;humain, l&apos;environnement et 
            la solidarité au cœur de nos actions. En offrant des solutions qui favorisent le bien-être des salariés,
            soutiennent des causes d&apos;intérêt général et réduisent l&apos;empreinte environnementale, nous 
            bâtissons un avenir durable et responsable.
            </p>
          </div>
          <div className=" bg-blue-default/20 shadow-lg text-center p-4 md:p-8 space-y-6 mx-3 lg:mx-0 md:mx-6 rounded-b-xl lg:rounded-r-xl">
            <h3 className="text-2xl md:text-4xl mb-6">Labels et certifications</h3>
            <p className="md:text-lg">La transparence et la qualité de nos engagements sont reconnues par des
              certifications et labels exigeants. Ces distinctions reflètent notre volonté d&apos;intégrer des pratiques
              responsables et éthiques dans tout ce que nous faisons :</p>
            <div className="flex justify-center gap-3">
              <Image src={logo_bcorpo} alt="Logo B Corporation" className=""/>
              <Image src={logo_gptw} alt="Logo B Corporation" className=""/>
              <Image src={logo_iso} alt="Logo B Corporation" className=""/>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-4 pt-5 pb-20">
          <h2 className="text-2xl md:text-4xl mb-12 text-center">Comment ça marche</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div
              className="relative mx-auto shadow-xl aspect-square rounded-full flex flex-col p-8 justify-center items-center text-center text-xl font-semibold gap-2 w-56 md:w-64">
              <p>Etape 1</p>
              <Image src={image_notebook} alt="personne assise image" className="h-14 w-auto object-contain"/>
              <p>Inscrivez votre entreprise</p>
              <CurvedArrowIconRight className="hidden xl:block absolute top-[110%] left-1/2 fill-[#2D8BBA] w-44 h-auto"/>
            </div>
            <div
              className=" relative mx-auto shadow-xl aspect-square rounded-full flex flex-col p-8 justify-center items-center text-center -ml-12 md:ml-0 mt-52 md:mt-40 text-xl font-semibold gap-2 w-56 md:w-64">
              <p>Etape 2</p>
              <Image src={image_people_seat} alt="personne assise image" className="h-14 w-auto object-contain"/>
              <p>Mobilisez vos équipes</p>
              <CurvedArrowIconLeft className="hidden xl:block absolute bottom-[110%] left-1/2 fill-[#2D8BBA] w-44 h-auto"/>
            </div>
            <div
              className=" relative mx-auto shadow-xl aspect-square rounded-full flex flex-col p-8 justify-center items-center text-center text-xl font-semibold gap-2 w-56 md:w-64">
              <p>Etape 3</p>
              <Image src={image_hands} alt="personne assise image" className="h-14 w-auto object-contain"/>
              <p>Marchez, courez, dépassez-vous</p>
              <CurvedArrowIconRight className=" hidden xl:block absolute top-[105%] left-1/2 fill-[#2D8BBA] w-44 h-auto"/>
            </div>
            <div
              className="shadow-xl mx-auto aspect-square rounded-full flex flex-col p-8 justify-center items-center text-center mt-52 -ml-12 md:ml-0 md:mt-40 text-xl font-semibold gap-2 w-56 md:w-64">
              <p>Etape 4</p>
              <Image src={image_donation} alt="personne assise image" className="h-14 w-auto object-contain"/>
              <p>Suivez votre participation</p>
            </div>
          </div>
        </section>

        <section id="application" className="bg-gradient-to-r from-[#FCD8EE] to-[#FEFFB0] py-20">
          <div className="max-w-7xl px-4 mx-auto flex flex-col lg:flex-row justify-between gap-20 ">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl mb-12">L&apos;application</h2>
              <ul className="space-y-4">
                <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                  <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                  <p className="md:text-xl">Suivi et analyse des performances</p>
                </li>
                <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                  <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                  <p className="md:text-xl">Planification d&apos;itinéraires</p>
                </li>
                <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                  <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                  <p className="md:text-xl">Synchronisation d&apos;applications externes</p>
                </li>
                <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                  <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                  <p className="md:text-xl">Création d&apos;événements entre entreprises</p>
                </li>
                <li className='flex gap-3 items-center bg-white/40 px-4 w-full py-2 rounded-full'>
                  <CheckIcon className="w-8 h-auto stroke-black fill-none"/>
                  <p className="md:text-xl">Suivi des actualités</p>
                </li>
              </ul>
            </div>
            <Image src={image_mockup} alt="image mockup application"
                   className=" -mt-16 -mb-36 md:-mb-48 object-contain mx-auto aspect-square lg:w-1/2"/>
          </div>
        </section>

      <section id="testimonies" className="w-full bg-blue-default py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex-col items-center text-center w-full text-white pb-16">
            <h2 className="m-2 text-2xl md:text-4xl">Reconnue par les entreprises</h2>
            <h2 className="m-2 text-2xl md:text-4xl">Adorée par les entreprises</h2>
          </div>

          <div className="flex justify-between items-stretch flex-wrap gap-8">
            <article className="flex-col items-center justify-center flex-1 min-w-[300px] mx-auto bg-white p-5 rounded-2xl text-center">
              <div className="flex gap-2 justify-center m-3">
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
              </div>
              <p className="m-2">En tant qu&apos;entreprise, nous avions du mal à motiver nos équipes avec les outils traditionnels. Depuis que nous utilisons <strong>Solifit</strong>, nos collaborateurs peuvent participer à des activités engageantes et à un suivi clair de leurs performances. Côté entreprise, la gestion est simplifiée grâce à une plateforme ergonomique et accessible.</p>
              <p><strong>— Marie, Responsable RH</strong></p>
            </article>
            <article className="flex-col items-center justify-center flex-1 min-w-[300px] mx-auto bg-white p-5 rounded-2xl text-center">
              <div className="flex gap-2 justify-center m-3">
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
                <StarIcon className="fill-star-default"/>
              </div>
              <p className="m-2">Nous cherchions une solution moderne pour dynamiser nos équipes tout en restant alignés avec nos valeurs d&apos;entreprise. Cette application a complètement transformé notre approche. En plus de motiver les salariés avec des défis sportifs personnalisés, nous pouvons communiquer facilement nos engagements RSE et impliquer les collaborateurs dans des causes qui leur tiennent à cœur.</p>
              <p><strong>— Antoine, Responsable RSE</strong></p>
            </article>
            <article className="flex-col items-center justify-center flex-1 min-w-[300px] mx-auto bg-white p-5 rounded-2xl text-center">
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
          <h2 className="text-center text-2xl md:text-4xl font-bold">N&apos;hésitez plus !</h2>
          <p className="text-center md:w-2/3 py-6 mx-auto md:text-xl">
            Découvrez notre solution pour unir vos salariés et faire le choix d&apos;unir bien-être au travail, engagement sportif et soutien
            à des causes solidaires. 
          </p>
        </div>
        <div className="flex justify-center max-w-7xl mx-auto px-4 gap-5 my-2 flex-wrap items-center">
            <Image src={image_groupe} alt="image groupe" className="flex-1 min-w-[300px]"/>
            <Image src={image_velo} alt="image velo" className="flex-1 min-w-[300px]"/>
            <Image src={image_team} alt="image team" className="flex-1 min-w-[300px]"/>
            <Image src={image_fit} alt="image fit" className="flex-1 min-w-[300px]"/>
            <Image src={image_solidarite} alt="image solidarite " className="flex-1 min-w-[300px]"/>
        </div>
      </section>

      <section id="offers">
        <div className=" bg-pink-default">
          <div className="max-w-7xl mx-auto px-4 pt-10 pb-44 ">
            <h2 className="text-center text-2xl md:text-4xl my-4">Nos offre entreprise</h2>
            <p className="text-center md:text-xl">Un abonnement unique pour engager vos salariés et soutenir des causes solidaires</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 -mt-24">
          <article className="shadow-xl px-8 py-8 rounded-lg bg-white">
            <p className="text-lg">
              0 - 50 salariés
            </p>
            <p className="font-extrabold text-2xl">2500 €</p>
            <span className="text-sm">HT / an</span>
          </article>
          <article className="shadow-xl px-8 py-8 rounded-lg bg-white">
            <p className="text-lg">
              51 - 200 salariés
            </p>
            <p className="font-extrabold text-2xl">5000 €</p>
            <span className="text-sm">HT / an</span>
          </article>
          <article className="shadow-xl px-8 py-8 rounded-lg bg-white">
            <p className="text-lg">
              201 - 500 salariés
            </p>
            <p className="font-extrabold text-2xl">8000 €</p>
            <span className="text-sm">HT / an</span>
          </article>
          <article className="shadow-xl px-8 py-8 rounded-lg bg-white">
            <p className="text-lg">
              + 500 salariés
            </p>
            <p className="font-extrabold text-2xl">Sur devis</p>
            <span className="text-sm">HT / an</span>
          </article>
        </div>
      </section>

      <section id="form-contact" className="py-10 md:py-16 bg-green-default px-4">
        <div className="max-width-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-center mb-5">Rejoignez-nous</h2>
          <p className="text-center w-2/3 mx-auto my-8 text-lg md:text-xl"><strong>Profitez facilement de notre solution<br/>3,2,1 … Commençons !</strong></p>
        </div> 


          <form className="max-w-3xl mx-auto bg-white p-10 md:px-20 rounded-3xl shadow-xl justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="*Raison social" className="rounded-lg border-b border-green-default p-2"/>
              <input type="text" placeholder="*Nom" className="rounded-lg border-b border-green-default p-2"/>
              <input type="email" placeholder="*Email" className="rounded-lg border-b border-green-default p-2"/>
              <input type="text" placeholder="*N° de téléphone"
                     className="rounded-lg border-b border-green-default p-2"/>
              <textarea placeholder="Message"
                        className="sm:col-span-2 rounded-lg border-b border-green-default h-24 p-2 resize-none"></textarea>
            </div>
            <p className="mt-4 text-sm">* Champs obligatoires</p>
            <p className="text-sm">En cliquant je confirme accepter le traitement de mes données personnelles
              conformément à la <a href="#">Politique de confidentialité.</a></p>
            <div className="flex justify-end">
              <button className="font-bold px-12 py-3 mt-5 bg-green-default shadow-md rounded-full">Envoyer</button>
            </div>
          </form>
        </section>
      </main>
      <footer className="bg-yellow-default text-center py-10 flex-col items-center">
        <Image src={logo} alt="Logo SoliFit" className="h-20 w-auto object-contain mx-auto"/>
        <p className="my-2 text-sm">Suivez notre actualité</p>
        <input type="email" placeholder="Adresse email" className="px-3 py-2 rounded-3xl"/>
        <div className="flex justify-center gap-4 my-4">
            <Image src={logo_instagram} alt="Logo Instagram" className="h-8 w-auto"/>
            <Image src={logo_facebook} alt="Logo Facebook" className="h-8 w-auto"/>
            <Image src={logo_twitter} alt="Logo Twitter" className="h-8 w-auto"/>
        </div>
      </footer>
    </>
  );
}
