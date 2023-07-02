import React, { useState } from "react";
import cn from "classnames";
import blister from "../assets/blister2.png";

const BookPopover = ({ open }) => {
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append(
      "from",
      "Mailgun Sandbox <postmaster@sandbox5645518d2d8c4e958e02b99f444154c3.mailgun.org>"
    );
    form.append("to", "Timur Ramazanov <timurram007@ya.ru>");
    form.append("subject", `${name} - ${contact}`);
    form.append("text", details);

    fetch(
      "https://api.mailgun.net/v3/sandbox5645518d2d8c4e958e02b99f444154c3.mailgun.org/messages",
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            btoa("api:f400869622a3c7d119fd19903df89038-e5475b88-24f5b47e"),
        },
        body: form,
      }
    );
  };

  return (
    <div
      id="book-popover"
      className={cn(
        "z-40 backdrop-blur-xl transition-opacity w-full h-full fixed flex justify-center items-center",
        open
          ? "opacity-100 bg-white/[.15] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "opacity-0 top-full"
      )}
    >
      <form
        className="bg-accent p-10 w-10/12 md:w-[30rem] grid gap-7 relative h-fit"
        onSubmit={handleSubmit}
      >
        <img
          src={blister}
          className="absolute -top-3 left-1/2 w-44 -translate-x-1/2 -translate-y-1/2"
        />
        <h1 className="text-white font-secondary text-2xl md:text-4xl text-center ">
          order a photosession
        </h1>
        <p className="font-primary text-secondary text-center pb-3 md:pb-5 lg:pb-10">
          to contact me, fill out the form below and leave your contacts and
          order details
        </p>
        <input
          type="text"
          placeholder="your email/phone number/WhatsApp etc."
          className="bg-accent text-secondary placeholder:text-secondary border-b-2 pb-2 border-secondary mb-2 md:mb-5 focus:outline-none"
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="your name"
          className="bg-accent text-secondary placeholder:text-secondary border-b-2 pb-2 border-secondary mb-2 md:mb-5 focus:outline-none"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="your order details"
          className="bg-accent text-secondary placeholder:text-secondary border-b-2 pb-2 border-secondary mb-2 md:mb-5 focus:outline-none"
          onChange={(e) => setDetails(e.target.value)}
        />
        <button className="font-secondary text-white text-3xl bg-secondary hover:bg-secondary/90 px-14 py-2 w-fit mx-auto">
          send
        </button>
      </form>
    </div>
  );
};

export default BookPopover;
