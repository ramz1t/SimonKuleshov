import React from "react";
import PhotoSection from "./PhotoSection";

const Gallery = () => {
  const sections = [
    {
      title: "portrait",
      images: [
        "/trash/1.jpg",
        "/trash/2.jpg",
        "/trash/3.jpg",
        "/trash/4.jpeg",
        "/trash/1.jpg",
        "/trash/2.jpg",
        "/trash/3.jpg",
        "/trash/4.jpeg",
      ],
    },
    {
      title: "street",
      images: [
        "/trash/1.jpg",
        "/trash/2.jpg",
        "/trash/3.jpg",
        "/trash/4.jpeg",
        "/trash/1.jpg",
        "/trash/2.jpg",
        "/trash/3.jpg",
        "/trash/4.jpeg",
      ],
    },
    {
      title: "still life",
      images: [
        "/trash/1.jpg",
        "/trash/2.jpg",
        "/trash/3.jpg",
        "/trash/4.jpeg",
        "/trash/1.jpg",
        "/trash/2.jpg",
        "/trash/3.jpg",
        "/trash/4.jpeg",
      ],
    },
  ];

  return (
    <section className="mt-10">
      {sections.map((section, key) => (
        <PhotoSection
          title={section.title}
          images={section.images}
          key={key}
          first={key === 0}
        />
      ))}
    </section>
  );
};

export default Gallery;
