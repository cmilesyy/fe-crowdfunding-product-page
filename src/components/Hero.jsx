import { useState } from "react";
import bookmark from "../assets/images/icon-bookmark.svg";
import mastercraftLogo from "../assets/images/logo-mastercraft.svg"
import Button from "./Button";
import Model from "./Model";

function Hero() {

  const [showModel, setShowModel] = useState(false)

  function openModel() {
    setShowModel(true)
  }
  
  function closeModel() {
    setShowModel(false)
  }


  return (
    <>
      <section className="mt-64 bg-[#FAFAFA] ">
        <div className="flex items-center justify-center ">
        <div className="bg-white w-80 flex flex-col items-center justify-center text-center border rounded-lg md:w-1/2 ">
          <img src={mastercraftLogo} alt="Mastercraft logo" />
          <h1 className="font-bold text-xl">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-gray-500 font-light py-5 ">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.{" "}
          </p>
          <div className="flex gap-10 pb-5">
            <Button handleClick={openModel} text={'Back this project'}/>
            <img src={bookmark} alt="Bookmark Icon" />
          </div>
        </div>
          {showModel && <Model closeModal={closeModel} />}
        </div>
      </section>
    </>
  );
}

export default Hero;
