/* eslint-disable react/no-unescaped-entities */
function CardOptions() {
    return (
        <>
          <div className="border rounded-lg h-auto px-6">
          <div>
            <h3 className="font-bold pt-5">Bamboo Stand</h3>
            <span className="text-primary-cyan">Pledge £25 or more</span>
            <p className="text-gray-500 font-light py-5">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
          </div>
          <div className="flex items-center gap-2 pb-4">
            <span className="text-4xl font-bold">101</span>
            <span>left</span>
          </div>
          <div className="pb-5">
            <button className="px-3 py-3 bg-primary-cyan rounded-full text-white">Select Reward</button>
          </div>
          </div>   
        </>
    )
}

export default CardOptions
