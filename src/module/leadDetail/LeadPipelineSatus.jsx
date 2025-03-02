import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LeadPipelineStatus = () => {
  // Define the stages with their properties
  const stages = [
    { name: "Not Contacted", color: "#5800FF", textColor: "white" },
    { name: "Contacted", color: "#20C4CB", textColor: "white" },
    { name: "Closed", color: "#5CB85C", textColor: "white" },
    { name: "Lost", color: "#ED1C24", textColor: "white" },
  ];

  return (
    <Card>
      <Card.Body className="">
        <div className="mb-1">
          <h5 className="mb-3">Lead Pipeline Status</h5>
        </div>
        <div className="mb-1">
          <div className="d-flex">
            {stages.map((stage, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: stage.color,
                  color: stage.textColor,
                  padding: "15px 25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  position: "relative",
                  clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
                  marginRight: index === stages.length - 1 ? "0" : "-4rem",
                  zIndex: stages.length - index,
                  width: "100px",
                  borderRadius: "5px 0 0 5px",
                }}
              >
                {stage.name}
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LeadPipelineStatus;
