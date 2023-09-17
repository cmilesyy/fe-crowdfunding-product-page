function Figures() {
  return (
    <>
      <section className="bg-[#FAFAFA] flex items-center justify-center py-5">
        <div className=" bg-white w-80 rounded-lg border h-auto ">
          <div className="text-center flex flex-col items-center justify-center ">
            <div className="pb-5">
              <h3 className="text-4xl pt-5">£40,897</h3>
              <p className="font-light text-gray-500 border-b pb-5">of £100,000 backed</p>
            </div>
            <div className="pb-5">
              <h3 className="text-4xl pt-5">2,087</h3>
              <p className="font-light text-gray-500 border-b pb-5">total backers</p>
            </div>
            <div className="pb-5">
              <h3 className="text-4xl pt-5 pb-2">35</h3>
              <p className="font-light text-gray-500">days left</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-10/12 bg-[#FAFAFA] rounded-full h-2.5 mb-4 ">
              <div className="bg-primary-cyan h-2.5 rounded-full  w-[45%]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Figures;
