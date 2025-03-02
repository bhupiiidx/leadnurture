import { Badge, Stack } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import htmlContent from "../../../data/htmlContent";

function EmailItem({ item, eventKey }) {
  return (
    <Accordion.Item
      eventKey={eventKey}
      className="my-3"
      style={{ borderLeft: "4px solid blue", borderTop: "1px solid #ddd" }}
    >
      <Accordion.Header>
        <div className="d-flex flex-column">
          <div className="fw-bold fs-6">Subject: {item.subject}</div>
          <p className="my-1">{item.sentDate}</p>
          <p className="text-danger my-1">
            CRM : Lorem ipsum dolor sit amet consectetur.
          </p>
          <Stack direction="horizontal" gap={2}>
            <Badge className="fw-medium fw-bold" bg="warning">
              sent
            </Badge>
            <Badge className="fw-medium fw-bold" bg="info">
              read
            </Badge>
            <Badge className="fw-medium fw-bold" bg="success">
              responded
            </Badge>
          </Stack>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default EmailItem;
