import { useState } from "react";
import Nav from "./Nav";
import ShowAllDetails from "./ShowAllDetails";

export default function RightSide() {
  const [search, setSearch] = useState("");

  return (
    <>
      <section className="lg:w-[65%] w-11/12 mx-auto">
        <h1 className="text-4xl text-center font-inknutAntiqua font-bold mt-3 text-[#284458] -mb-4">
          BILLINONAIRE DIARY
        </h1>
        <Nav setSearch={setSearch} />

        <ShowAllDetails search={search} />
      </section>
    </>
  );
}
