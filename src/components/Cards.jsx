import CardOptions from "./CardOptions";

/* eslint-disable react/no-unescaped-entities */
function Cards() {
  return (
    <>
      <section className="bg-[#FAFAFA] flex items-center justify-center">
        <div className="bg-white w-80 rounded-lg border px-6 py-5">
          <div>
            <h2 className="text-lg font-bold">About this project</h2>
            <p className="font-light text-gray-500 pb-5">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p className="font-light text-gray-500 pb-5">
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </div>

          <CardOptions />  

        </div>
      </section>
    </>
  );
}

export default Cards;
