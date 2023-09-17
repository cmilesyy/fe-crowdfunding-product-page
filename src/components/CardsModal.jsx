/* eslint-disable react/no-unescaped-entities */
function CardsModal() {
  return (
    <>
      <div className="border rounded-lg h-auto px-6">
        <div>
          <div className="flex items-center gap-3">
            <input type="radio" value="" className="w-6 h-6  bg-gray-100 border-gray-300 accent-primary-cyan" />
            <div>
              <h3 className="font-bold pt-5">Pledge with no reward</h3>
              <span className="text-primary-cyan">Pledge Amount</span>
            </div>
          </div>
          <p className="text-gray-500 font-light py-5">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </div>
        <div className="flex items-center gap-2 pb-4">
          <span className="text-4xl font-bold">figures</span>
          <span>amountleft</span>
        </div>
      </div>
    </>
  );
}

export default CardsModal;
