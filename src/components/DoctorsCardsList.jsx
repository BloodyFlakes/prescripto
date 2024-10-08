import { useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";

// eslint-disable-next-line react/prop-types
function DoctorsCards({ arr, size }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm text-center sm:w-1/3">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0">
        {arr.slice(0, size).map((item, index) => (
          <DoctorCard
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            speciality={item.speciality}
          />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="px-12 py-3 mt-10 text-gray-600 rounded-full bg-blue-50"
      >
        more
      </button>
    </div>
  );
}

export default DoctorsCards;
