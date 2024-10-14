import xx from "../src/assets/logo/logo.png";
export default function PersonModal(props) {
  function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const exchange = () =>
    props.modal.financialAssets.map((item) => item.exchange);
  const ticker = () => props.modal.financialAssets.map((item) => item.ticker);
  const numberOfShares = () =>
    props.modal.financialAssets.map((item) => item.numberOfShares);
  const sharePrice = () =>
    props.modal.financialAssets.map((item) => item.sharePrice);
  return (
    <section className="w-screen h-screen -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-[#1c1b1b86] fixed top-1/2 left-1/2">
      <div className="bg-[#D9D9D9] rounded-xl overflow-x-hidden p-6  max-w-[700px] h-[600px] overflow-scroll">
        <div
          className="w-8 h-6 bg-red-500 flex justify-center items-center rounded-lg cursor-pointer"
          onClick={() => props.setModal(false)}
        >
          X
        </div>
        <h1 className="font-inknutAntiqua text-3xl font-bold text-center text-[#284458]">
          {props.modal.personName}
        </h1>

        <p className="font-inknutAntiqua text-xl my-3 font-bold text-center text-[#284458]">
          Biography
        </p>
        <p className="text-center lg:px-6 mb-6">{props.modal.abouts}</p>

        <div className="flex gap-2 lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full ">
            <img
              className="mx-auto"
              src={props.modal.person.squareImage}
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h2 className="underline font-bold text-xl font-inknutAntiqua text-[#284458]">
              General Information
            </h2>
            <ul>
              <li className="text-lg font-bold text-[#284458]">
                Citizenship :
                <span className="text-sm font-normal text-black">
                  {props.modal.countryOfCitizenship}
                </span>{" "}
              </li>
              <li className="text-lg font-bold text-[#284458]">
                State: <span className="text-sm font-normal text-black"></span>
              </li>
              <li className="text-lg font-bold text-[#284458]">
                City:{" "}
                <span className="text-sm font-normal text-black">
                  {props.modal.city}
                </span>
              </li>
              <li className="text-lg font-bold text-[#284458]">
                Birthday:
                <span className="text-sm font-normal text-black">
                  {convertTimestampToDate(props.modal.birthDate)}
                </span>
              </li>
              <li className="text-lg font-bold text-[#284458]">
                Gender:{" "}
                <span className="text-sm font-normal text-black">
                  {props.modal.gender}
                </span>
              </li>
            </ul>
            <h2 className="underline font-bold text-xl font-inknutAntiqua text-[#284458]">
              Financial Information
            </h2>
            <ul>
              <li className="text-lg font-bold text-[#284458]">
                Exchange:{" "}
                <span className="text-sm font-normal text-black">
                  {props.modal?.financialAssets ? exchange().join(" ") : ""}
                </span>{" "}
              </li>
              <li className="text-lg font-bold text-[#284458]">
                Ticker:{" "}
                <span className="text-sm font-normal text-black">
                  {props.modal?.financialAssets ? ticker().join(" ") : ""}
                </span>
              </li>
              <li className="text-lg font-bold text-[#284458]">
                Total Share:{" "}
                <span className="text-sm font-normal text-black">
                  {props.modal?.financialAssets
                    ? numberOfShares().join(" ")
                    : ""}
                </span>
              </li>
              <li className="text-lg font-bold text-[#284458]">
                Share Price: $
                <span className="text-sm font-normal text-black">
                  {props.modal?.financialAssets ? sharePrice().join(" ") : ""}
                </span>
              </li>
              <li className="text-lg font-bold text-[#284458]">
                Source:{" "}
                <span className="text-sm font-normal text-black">
                  {props.modal.source}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
