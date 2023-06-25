import flower from "../assets/flower.png";
import blister from "../assets/blister1.png";

const PhotoSection = ({ title, images, first }) => {
  return (
    <figure className={`relative ${!first ? "mt-36" : null}`}>
      <img
        src={flower}
        className="w-32 lg:w-40 absolute left-1/2 -translate-x-1/2 -top-16"
      />
      <ul className="flex overflow-x-auto">
        {images.map((el, key) => (
          <ul
            key={key}
            style={{ background: `url(${el})` }}
            className="aspect-[2/3] min-w-[70%] lg:min-w-[25%] bg-contain bg-center"
          ></ul>
        ))}
      </ul>
      <div className="w-60 lg:w-72 absolute left-1/2 -translate-x-1/2 -bottom-10">
        <div className="relative">
          <img src={blister} className="drop-shadow-lg" />
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-secondary text-secondary text-4xl drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default PhotoSection;
