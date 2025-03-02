import React from "react";
import UserInfo from "./UserInfo";
import LeadPipelineSatus from "./LeadPipelineSatus";
import LeadTabs from "./tabItems/LeadTabs";

function LeadBody({ data }) {
  return (
    <div className="row">
      <div className="col-xl-3 sticky-sidebar">
        <UserInfo />
      </div>
      <div className="col-xl-9">
        <LeadPipelineSatus />
        <LeadTabs data={data} />
      </div>
    </div>
  );
}

export default LeadBody;
