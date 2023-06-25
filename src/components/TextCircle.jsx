const TextCircle = ({ text }) => {
  return (
    <div
      className="mx-auto origin-left !duration-[50000ms] ml-[50%]"
      id="text-circle"
    >
      <div className="relative">
        {[...text].map((l, key) => (
          <p
            className={`absolute origin-bottom-left h-20 lg:h-40 text-center w-4 -top-20 lg:-top-40 text-lg lg:text-2xl text-white font-primary`}
            style={{
              rotate: `${(key / text.length).toFixed(10) * 360}deg`,
            }}
            key={key}
          >
            {l}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextCircle;