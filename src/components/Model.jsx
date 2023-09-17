/* eslint-disable react/prop-types */
import close from "../assets/images/icon-close-modal.svg";
import CardsModal from "./CardsModal";

function Model({ closeModal }) {
  function closeModalBgClick(e) {
    if (e.target.id === "modal-bg") {
      closeModal();
    }
  }

  return (
    <>
      <div
        id="modal-bg"
        className="absolute top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center "
        onClick={closeModalBgClick}
      >
        <div className="bg-white py-4 rounded-lg md:w-7/12 w-10/12 max-w-screen-md shadow-2xl relative">
          <div>
            <div className="flex justify-between items-center pb-5 px-3">
              <h3 className="font-bold ">Back this project</h3>
              <img
                src={close}
                alt="close icon"
                className="hover:cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <p className="px-3 pb-5 text-sm text-gray-500 font-light">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
          </div>


          <div className="px-3">
            <CardsModal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
