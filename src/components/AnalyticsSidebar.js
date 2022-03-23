import { useLocation } from 'react-router-dom'
export const AnalyticsSidebar = () => {
    const location = useLocation();
    const company = location.pathname;
    return <div>Analytics I am for <br/>{company}</div>
}