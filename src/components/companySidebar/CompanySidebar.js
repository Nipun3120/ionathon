import { Link } from "react-router-dom";
import { listOfCompanies } from "./listOfCompanies";
export const CompanySidebar = () => {
    return <div>
        <h3>Select a company</h3><br/><br/>
        {
            listOfCompanies.map(company => {
                return <><Link to={`${company}`}>{company}</Link><br/></>
            })
        }
    </div>
}