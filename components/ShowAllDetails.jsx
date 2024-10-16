import { useEffect, useState } from "react";
import ListDetails from "./ListDetails";
import PersonModal from "./PersonModal";

export default function ShowAllDetails({ search }) {
  const [allData, setAllData] = useState([]);
  const [x, setX] = useState([]);
  useEffect(() => {
    async function fx() {
      const res = await fetch(
        "https://forbes400.onrender.com/api/forbes400/getAllBillionaires"
      );
      const data = await res.json();

      setX(data);
      setAllData(data);
    }
    fx();
  }, []);

  useEffect(() => {
    if (!search) {
      setAllData(x);
    } else {
      setAllData(
        x.filter((item) =>
          item.personName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  return (
    <section className="mt-6 ">
      {/* <ListDetails data={allData[0]} /> */}
      <table className="overflow-scroll w-full font-semibold">
        <thead className="font-inknutAntiqua border-b-4 font-extrabold">
          <tr className="h-20 mb-6">
            <td>Person</td>
            <td>Citizenship</td>
            <td>Industry</td>
            <td>Rank</td>
            <td>Wealth</td>
          </tr>
        </thead>
        <tbody>
          {allData?.map((currentdata, i) => {
            return <ListDetails data={currentdata} doxe={i} key={i} />;
          })}
        </tbody>
      </table>
      {/* <PersonModal /> */}
    </section>
  );
}
