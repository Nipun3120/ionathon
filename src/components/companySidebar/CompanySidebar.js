import { Link } from "react-router-dom";
import { listOfCompanies } from "./listOfCompanies";
import { CompanyCard } from "./CompanyCard";
export const CompanySidebar = () => {
    return <div className="h-full">
        <h3 className="mt-8 mb-8 max-h-screen overflow-scroll">Select a company</h3>
        <div className="h-full flex-col justify-evenly items-center">
        {
            listOfCompanies.map(company => {
                return <><Link to={`${company}`}><CompanyCard company={company}/></Link></>
            })
        }
        </div>
    </div>
}