import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import DoctorsCardsList from "./DoctorsCardsList";

// eslint-disable-next-line react/prop-types
function RelatedDoctors({ docId, speciality }) {
  const [relDoc, setRelDoc] = useState([]);

  const { doctors } = useContext(AppContext);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div>
      <DoctorsCardsList arr={relDoc} size={5} />
    </div>
  );
}

export default RelatedDoctors;
