import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

function SpecialtyMenu() {
  return (
    <div id="specialty" className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Specialty</h1>
      <p className="text-sm text-center sm:w-1/3">
        Simply browse through our extensive list of trusted doctors, schedule your appointment
        hassle-free.
      </p>
      <div className="flex w-full gap-4 pt-5 overflow-scroll sm:justify-center">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            to={`/doctors/${item.speciality}`}
            key={index}
          >
            <img className="w-16 mb-2 sm:w-24" src={item.image} alt="speciality-image" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialtyMenu;
