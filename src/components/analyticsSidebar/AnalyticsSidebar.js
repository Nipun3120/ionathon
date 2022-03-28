import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { dataActions } from "../../store/dataSlice";
import { AnalyticsChart } from "./AnalyticsChart";
import { Score } from "./Score";

export const AnalyticsSidebar = () => {
  const data = useSelector(state=> state.dataState.data);
  const curr = useSelector(state=> state.dataState.curr);
  const location = useLocation();
  const dispatch = useDispatch();
  const company = location.pathname;


  useEffect(() => {
    if (company === "/DJIA") dispatch(dataActions.onChange("DJIA"));
    if (company === "/NIFTY") dispatch(dataActions.onChange("NIFTY"));
    if (company === "/AAPL") dispatch(dataActions.onChange("AAPL"));
    if (company === "/MSFT") dispatch(dataActions.onChange("MSFT"));
  }, [company]);

    return(
      <>
        <Typography variant="h4">{company.substring(1)}</Typography>
        <AnalyticsChart apiData={data[curr]}/>
        <Score data={data[curr]}/>
      </>
    )
}