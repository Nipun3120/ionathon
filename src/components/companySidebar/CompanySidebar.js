import { Link } from "react-router-dom";
import { listOfCompanies } from "./listOfCompanies";
import { CompanyCard } from "./CompanyCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const CompanySidebar = () => {
  const [corrValues, setCorrValues] = useState([]);
  const data = useSelector(state=> state.dataState.data);
  const dataAdded = useSelector(state=> state.dataState.dataAdded);
  const curr = useSelector(state=> state.dataState.curr);
  
  useEffect(()=> {
    const res = data.map((i)=> i.corr.toFixed(2))
    setCorrValues(res);
  }, [dataAdded, curr])
  return (
    <div className="h-full">
      <h3 className="mt-8 mb-8 max-h-screen overflow-scroll">
        Select a Stock/Index
      </h3>
      <div className="h-full flex-col justify-evenly items-center">
        {listOfCompanies.map((company, id) => {
          return (
            <>
              <Link to={`${company}`}>
                <CompanyCard id={id} company={company} corr={corrValues[id]}/>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
