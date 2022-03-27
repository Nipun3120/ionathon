import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AnalyticsChart } from "./AnalyticsChart";
import { Score } from "./Score";

export const AnalyticsSidebar = () => {
  const data = useSelector(state=> state.dataState.data);
  const curr = useSelector(state=> state.dataState.curr);
  const location = useLocation();
  const company = location.pathname;

    return(
      <>
        <Typography variant="h4">{company.substring(1)}</Typography>
        <AnalyticsChart apiData={data[curr]}/>
        <Score data={data[curr]}/>
      </>
    )
}