import { useState } from "react";
import PersonModal from "./PersonModal";

export default function ListDetails(props) {
  const { data } = props;
  if (!data) {
    return <h1>data loading..</h1>;
  }

  //   console.log(data);

  const [modal, setModal] = useState(false);
  function showModal(data) {
    console.log(data);
    setModal(data);
  }
  return (
    <>
      {modal ? <PersonModal setModal={setModal} modal={modal} /> : ""}
      <tr>
        <td className="border-2">
          {data.personName}{" "}
          <span
            onClick={() => showModal(data)}
            className="hover:underline text-[12px] text-orange-600 font-bold cursor-pointer pl-2"
          >
            More Info
          </span>
        </td>
        <td className="border-2">{data.countryOfCitizenship}</td>

        <td className="border-2">{data.industries}</td>
        <td className="border-2">{data.rank}</td>
        <td className="border-2">{data.finalWorth}</td>
      </tr>
    </>
  );
}
