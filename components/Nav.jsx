import logo2 from "../src/assets/logo/logo1.png";
export default function Nav() {
  return (
    <section className="mt-5 w-full flex justify-between">
      <input
        className=" border-b-4 placeholder: text-xl border-black "
        type="text"
        placeholder="Search"
      />
      <img className="w-12" src={logo2} alt="" />
    </section>
  );
}
