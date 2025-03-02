import React from "react";
import {
  Breadcrumb,
  Card,
  Image,
  Dropdown,
  Stack,
  Badge,
  DropdownButton,
} from "react-bootstrap";

function LeadHeader({ data }) {
  return (
    <div>
      <div className="col-md-12">
        {data?.name && (
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Leads</Breadcrumb.Item>
            <Breadcrumb.Item active>{data.name}</Breadcrumb.Item>
          </Breadcrumb>
        )}
        <Card>
          <Card.Body className="pb-2">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              {/* Company Info */}
              <div className="d-flex align-items-center mb-2">
                <div
                  className="me-3 flex-shrink-0 border p-2 rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    src="https://avatar.iran.liara.run/public/10"
                    alt="Company Logo"
                    fluid
                  />
                </div>
                <div>
                  <h5 className="mb-1">Tremblay and Rath</h5>
                  <p className="text-secondary mb-0">
                    <i className="bi bi-building fs-6"></i>{" "}
                    <span>Google Inc</span>
                  </p>
                  <p className="text-secondary mb-0">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span>{"  "} 5.0</span>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <Stack direction="horizontal" gap={2}>
                <Badge bg="dark">Private</Badge>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Closed"
                  variant="success" // Makes it lighter
                  size="sm" // Makes it smaller
                >
                  <Dropdown.Item>Closed</Dropdown.Item>
                  <Dropdown.Item>Open</Dropdown.Item>
                </DropdownButton>
              </Stack>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LeadHeader;
