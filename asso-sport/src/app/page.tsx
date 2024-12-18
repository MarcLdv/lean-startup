import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <section id="home" className="h-96 w-full bg-gray-600">
        <h1>Accueil</h1>

        <div className="flex justify-center">
          <video src="https://www.youtube.com/watch?v=JF0a5aoEGsw" className="w-3/4" controls></video>
          <div className="w-1/4 flex justify-center items-center">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <Link href="#">Nous rejoindre</Link>
          </div>
        </div>
      </section>

      <section id="presentation" className="h-96 w-full bg-gray-500">
        <h2>Qui sommes nous ?</h2>

      </section>

      <section id="about" className="h-96 w-full bg-gray-400">
        <h2>Notre fonctionnement</h2>

      </section>

      <section id="engagement" className="h-96 w-full bg-gray-300">
        <h2>Engagements RSE et partenaires </h2>

      </section>

      <section id="testimony" className="h-96 w-full bg-gray-200">
        <h2>Témoignages</h2>

      </section>

      <section id="contact" className="h-96 w-full">
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
