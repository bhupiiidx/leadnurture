import React from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import TabActivity from "./TabActivity";
import TabEmails from "./TabEmails";
import TabCalls from "./TabCalls";

function LeadTabs({ data }) {
  return (
    <Card className="mt-4 " id="leadtabs">
      <Card.Body className="p-2">
        {/* Tabs */}
        <Tabs
          fill
          variant="underline"
          defaultActiveKey="activities"
          id="lead-pipeline-tabs"
        >
          <Tab
            eventKey="activities"
            title={
              <>
                <i className="bi bi-alarm-fill me-1"></i> Activities
              </>
            }
          >
            <TabActivity />
          </Tab>
          <Tab
            eventKey="email"
            title={
              <>
                <i className="bi bi-envelope-check-fill me-1"></i> Email
              </>
            }
          >
            <TabEmails data={data} />
          </Tab>
          <Tab
            eventKey="calls"
            title={
              <>
                <i className="bi bi-telephone-fill me-1"></i> Calls
              </>
            }
          >
            <TabCalls />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default LeadTabs;
