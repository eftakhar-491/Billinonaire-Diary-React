import Nav from "./Nav";
import ShowAllDetails from "./ShowAllDetails";

export default function RightSide() {
  return (
    <>
      <section className="lg:w-[65%] w-11/12 mx-auto">
        <Nav />
        <ShowAllDetails />
      </section>
    </>
  );
}
