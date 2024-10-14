import logo from "../src/assets/logo/logo.png";
function LeftSide() {
  return (
    <>
      <section className="flex flex-col h-fit w-[90%] mx-auto lg:w-[30%] bg-[#0E1B34] py-6">
        <img className="w-36 mx-auto" src={logo} alt="" />
        <button className="bg-[#D9D9D9] w-11/12 mx-auto rounded-lg py-1 mt-11 text-xl font-bold">
          Add a user <br /> <span className="text-sm block">Rendomly</span>
        </button>
        <button className="bg-[#D9D9D9] w-11/12 mx-auto rounded-lg py-1 mt-5 text-xl font-bold">
          Double Money
        </button>
        <button className="bg-[#D9D9D9] w-11/12 mx-auto rounded-lg py-1 mt-5 text-xl font-bold">
          Sort By Rank
        </button>
        <button className="bg-[#D9D9D9] w-11/12 mx-auto rounded-lg py-1 mt-5 text-xl font-bold">
          Calculate Entire Wealth
        </button>
        <div>
          <img src="" alt="" />
        </div>
        <button className="bg-[#D9D9D9] w-11/12 mx-auto rounded-lg py-1 mt-5 text-xl font-bold">
          Show All Billionaires
        </button>
        <button className="bg-[#D9D9D9] w-11/12 mx-auto rounded-lg py-1 mt-5 text-xl font-bold">
          Richest by industry <br />
          <span className="text-sm block">(texas)</span>
        </button>
      </section>
    </>
  );
}

export default LeftSide;
