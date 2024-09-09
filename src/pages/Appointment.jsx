import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

function Appointment() {
  const [docInfo, setDocInfo] = useState(null);

  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        {/* ------- Doctor Details ------- */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div>
            <img
              className="w-full rounded-lg bg-primary sm:max-w-72"
              src={docInfo.image}
              alt="Doctor-image"
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ------- Doctor Info : Name, Degree, Experience ------- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img className="w-5" src={assets.verified_icon} alt="verified-icon" />
            </p>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* ------- Doctor About ------- */}
            <div>
              <p className="flex items-center gap-1 mt-3 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="info-icon" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
            </div>
            <p className="mt-4 font-medium text-gray-500">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default Appointment;
