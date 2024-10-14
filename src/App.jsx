import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

function App() {
  return (
    <section className="flex lg:flex-row flex-col gap-2 justify-between">
      <LeftSide />
      <RightSide />
    </section>
  );
}

export default App;
