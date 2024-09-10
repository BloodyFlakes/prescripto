import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function DoctorCard({ id, image, name, speciality }) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => {
          navigate(`/appointment/${id}`);
          scrollTo(0, 0);
        }}
        className="overflow-hidden border border-blue-200 cursor-pointer rounded-xl hover:translate-y-[-10px] transition-all duration-500"
      >
        <img className="bg-blue-50" src={image} alt="doc-image" />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
            <p>Available</p>
          </div>
          <p className="text-lg font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{speciality}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
