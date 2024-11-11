import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import './Extendproduct.css';

const Extendproduct = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="card " style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h3 className="inline-block text-xl sm:text-3xl text-headerWhite text-a">Product <span className="text-headerLaseWhite">like these...</span></h3>
          </div>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative  overflow-hidden card"
    >
      <div
        style={{
          backgroundImage: `${card.url}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 product-card-data">
        <h2 className="title-num">{card.id}</h2>
        <p className="uppercase text-white product-title">{card.title}</p>
        <span className="product-description">{card.description}</span>
      </div>

      {/* 2. Right Arrow Icon - Add this div for the icon */}
      <div className="absolute top-4 right-4 z-20 text-white">
        <ArrowUpRight size={30} />
      </div>
    </div>
  );
};

export default Extendproduct;

const cards = [
  {
    id: "001",
    title: "THROUGHBIT",
    description:
      "Redefining Bitcoin and Ethereum Transactions in India with INRFalcon for Lightning-Fast Trading.",
    url: "url('/product/throughbit.avif')",
  },
  {
    id: "002",
    title: "COINDAIRY",
    description:
      "Your Gateway to Staying informed, Engaged, and Leading the Way in the Crypto Space",
    url: "url('product/coindairybg.png')",
  },
  {
    id: "003",
    title: "SQUARENFT",
    description:
      "Dive into the Future of RealEstate and Own Your NFT Land from Any Corner of the Globe.",
    url: "url('/product/squarenft.png')",
  },
  {
    id: "004",
    title: "BITCOINSTORE",
    description:
      "Your Innovative Exchange Hub Connecting Cash and Cryptocurrency for Easy Bitcoin Transactions.",
    url: "url('/product/bitcoin.png')",
  },
];
