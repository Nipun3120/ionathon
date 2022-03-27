import { useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";

export const CompanyCard = ({ company, id, corr }) => {
  return (
    <div className="rounded-md h-1/6 flex justify-center items-center m-2 bg-gray-900 relative">
      {company}
      <span className="absolute bottom-4 text-lg right-4">{corr}</span>
    </div>
  );
};
