import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import data from "../../data/leads.json";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Card,
  Table,
  Badge,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const animatedComponents = makeAnimated();

function Leads() {
  const options = [
    { value: "latest", label: "latest" },
    { value: "fifteen", label: "Last 15 days" },
    { value: "thirty", label: "Last 30 days" },
  ];

  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Leads</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="d-flex">
        <Col>
          <Card className="flex-fill border-0">
            <Card.Header className="border-0 pb-0">
              <Row className="align-items-center justify-content-between flex-wrap row-gap-3">
                <Col>
                  <h4>
                    <i className="ti ti-grip-vertical me-1"></i>Recently Created
                    Deals
                  </h4>
                </Col>
                <Col xs="auto">
                  <Select options={options} components={animatedComponents} />
                </Col>
              </Row>
            </Card.Header>

            <Card.Body>
              <div className="table-responsive custom-table">
                <Table id="deals-project" striped bordered hover responsive>
                  <thead className="thead-light">
                    <tr>
                      <th>Name</th>
                      <th>Car</th>
                      <th>Deal Started</th>
                      <th>Last Reached</th>
                      <th>Status</th>
                      <th>Emails(count)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr
                        key={item.id + "-" + index + "-item"}
                        className={index % 2 === 0 ? "even" : "odd"}
                      >
                        <td>{item.name}</td>
                        <td>{item.carType}</td>
                        <td>{item.emails[0].sentDate}</td>
                        <td>{item.emails[item.emails.length - 1].sentDate}</td>
                        <td>
                          <Badge
                            pill
                            bg={
                              ["danger", "warning", "info", "success"][
                                Math.floor(Math.random() * 4)
                              ]
                            }
                          >
                            Lost
                          </Badge>
                        </td>
                        <td>{item.emails.length}</td>
                        <td>
                          <Link to={`/lead-detail/${item.id}`}>
                            <Button variant="outline-primary" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Leads;
