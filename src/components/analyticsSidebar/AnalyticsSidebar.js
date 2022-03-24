import React from "react";
import { AnalyticsChart } from "./AnalyticsChart";
import { Score } from "./Score";
export const AnalyticsSidebar = () => {
    return(
      <>
        <AnalyticsChart/>
        <Score/>
      </>
    )
}