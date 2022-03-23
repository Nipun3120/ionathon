import { Link } from "react-router-dom";
export const CompanySidebar = () => {
    return <div>
        <h3>Select a company</h3><br/><br/>
        <Link to="/company1">Company 1</Link><br/>
        <Link to="/company2">Company 2</Link><br/>
        <Link to="/company3">Company 3</Link><br/>
        <Link to="/company4">Company 4</Link><br/>
        <Link to="/company5">Company 5</Link><br/>
    </div>
}