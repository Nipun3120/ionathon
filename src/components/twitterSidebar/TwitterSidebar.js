import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { TweetsDisplay } from "./TweetsDisplay"

export const TwitterSidebar = () => {
    const data = useSelector(state=> state.dataState.data);
    const curr = useSelector(state=> state.dataState.curr);
    const location = useLocation();
    const company = location.pathname;

    return <div>
        {company.substring(1)} Tweets
        <TweetsDisplay data={data[curr]}/>
    </div>
}