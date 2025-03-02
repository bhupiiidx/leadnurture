import React from "react";
import {
  Card,
  Col,
  Badge,
  Dropdown,
  Image,
  DropdownButton,
} from "react-bootstrap";

const UserInfo = () => {
  return (
    <Card>
      <Card.Body className="p-3">
        {/* Lead Information */}
        <h6 className="mb-3 fw-semibold">Lead Information</h6>
        <ul>
          <li className="row mb-3">
            <Col xs={6}>Date Created</Col>
            <Col xs={6}>10 Jan 2024, 10:00 am</Col>
          </li>
          <li className="row mb-3">
            <Col xs={6}>Value</Col>
            <Col xs={6}>$25,11,145</Col>
          </li>
          <li className="row mb-3">
            <Col xs={6}>Due Date</Col>
            <Col xs={6}>20 Jan 2024, 10:00 am</Col>
          </li>
          <li className="row mb-3">
            <Col xs={6}>Follow Up</Col>
            <Col xs={6}>20 Jan 2024</Col>
          </li>
          <li className="row mb-3">
            <Col xs={6}>Source</Col>
            <Col xs={6}>Google</Col>
          </li>
        </ul>

        {/* Owner Section */}
        <h6 className="mb-3 fw-semibold">Owner</h6>
        <div className="d-flex align-items-center mb-3">
          <div className="avatar avatar-md me-2">
            <Image
              height="70px"
              width="70px"
              src="https://avatar.iran.liara.run/public/40"
              alt="Owner"
              roundedCircle
            />
          </div>
          <p>Vaughan</p>
        </div>

        <hr />

        {/* Tags */}
        <h6 className="mb-3 fw-semibold">Tags</h6>
        <Badge bg="success" className="fw-medium me-2">
          Collab
        </Badge>
        <Badge bg="warning" className="fw-medium">
          Rated
        </Badge>

        <hr />

        {/* Projects */}
        <h6 className="mb-3 fw-semibold">Projects</h6>
        <Badge bg="light" text="dark" className="me-2 mb-2">
          Devops Design
        </Badge>
        <Badge bg="light" text="dark" className="mb-2">
          Margrate Design
        </Badge>

        <hr />

        {/* Priority Dropdown */}
        <h6 className="mb-3 fw-semibold">Priority</h6>
        <DropdownButton
          title={
            <span>
              <i className="bi bi-square-fill me-1 text-danger"></i> High
            </span>
          }
          size="sm"
          id="priorityDropdown"
          variant="light"
        >
          <Dropdown.Item>
            <i className="bi bi-square-fill me-1 text-danger"></i> High
          </Dropdown.Item>
          <Dropdown.Item>
            <i className="bi bi-square-fill me-1 text-success"></i> Low
          </Dropdown.Item>
        </DropdownButton>

        <hr />

        {/* Contacts */}
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <h6 className="mb-3 fw-semibold">Contacts</h6>
          <a href="#" className="link-purple mb-3 fw-medium">
            <i className="bi bi-plus-circle me-1"></i>Add New
          </a>
        </div>

        <div className="d-flex align-items-center mb-0">
          <div className="avatar avatar-md me-2">
            <Image
              src="https://avatar.iran.liara.run/public/70"
              alt="Contact"
              roundedCircle
              height="70px"
              width="70px"
            />
          </div>
          <p>Jessica</p>
        </div>

        <hr />

        {/* Last Modified */}
        <ul>
          <li className="row mb-3">
            <Col xs={6}>Last Modified</Col>
            <Col xs={6}>10 Jan 2024, 10:00 am</Col>
          </li>
          <li className="row mb-0">
            <Col xs={6}>Modified By</Col>
            <Col xs={6} className="d-flex align-items-center">
              <div className="avatar avatar-xs me-1">
                <Image
                  src="https://avatar.iran.liara.run/public/80"
                  height="30px"
                  width="30px"
                  alt="Modifier"
                  roundedCircle
                />
              </div>
              Darlee Robertson
            </Col>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
