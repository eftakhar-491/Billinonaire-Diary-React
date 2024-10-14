import logo2 from "../src/assets/logo/logo1.png";
export default function Nav({ setSearch }) {
  return (
    <section className="mt-5 w-full flex justify-between">
      <input
        className="outline-none border-b-4 font-inknutAntiqua placeholder:text-xl focus:border-black "
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <img className="w-12" src={logo2} alt="" />
    </section>
  );
}
