import React from "react";
import { useParams } from "react-router";
import galleries from "../../galleries.json";
import InfHSlider from "../components/InfHSlider";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const { gallery } = useParams();

  return (
    <section className="bg-secondary min-h-screen">
      <h1 className="group">
        <Link
          to="/"
          className="px-20 py-10 font-secondary text-6xl text-accent flex transition-all items-center hover:px-10"
        >
          <img src={arrow} className="h-10 group-hover:pr-10 transition-all" />

          {galleries[gallery].title}
        </Link>
      </h1>
      <ul className="flex flex-col gap-10">
        {galleries[gallery].images.map((photoshoot, key) => (
          <li key={key}>
            <InfHSlider images={photoshoot} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GalleryPage;
