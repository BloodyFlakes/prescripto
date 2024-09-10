import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DoctorsCardsList from "./DoctorsCardsList";

function TopDoctors() {
  const { doctors } = useContext(AppContext);
  return <DoctorsCardsList arr={doctors} size={10} />;
}

export default TopDoctors;
