import React from "react";
import LeadHeader from "./LeadHeader";
import data from "../../data/leads.json";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import LeadBody from "./LeadBody";

function LeadDetail() {
  const { id } = useParams();
  const user = data.filter((f) => f.id == id)[0];
  //   console.log(user, data, id);

  return (
    <Container fluid>
      <div className="mb-4">
        <LeadHeader data={user} />
      </div>
      <div className="mb-4">
        <LeadBody data={user} />
      </div>
    </Container>
  );
}

export default LeadDetail;
