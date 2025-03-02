import React, { useState, useCallback, useMemo } from "react";
import { Accordion, Button, Container, Pagination } from "react-bootstrap";
import EmailItem from "./EmailItem";

function TabEmail({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const emails = useMemo(() => data?.emails || [], [data?.emails]);
  const totalEmails = emails.length;
  const totalPages = Math.ceil(totalEmails / itemsPerPage);

  const currentEmails = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return emails.slice(startIndex, startIndex + itemsPerPage);
  }, [emails, currentPage, itemsPerPage]);

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const paginationItems = useMemo(() => {
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  }, [currentPage, totalPages, handlePageChange]);

  return (
    <Container fluid>
      <hr style={{ borderWidth: "2px", marginTop: "-2px" }} />
      <div className="d-flex justify-content-between align-items-center">
        <h5>Emails ({totalEmails})</h5>
        <div>
          <Button variant="light">
            <i className="bi bi-plus"></i>
            <span>Add New</span>
          </Button>
        </div>
      </div>
      <div>
        {totalEmails > 0 ? (
          <>
            <Accordion defaultActiveKey="0">
              {currentEmails.map((item, index) => (
                <EmailItem
                  key={item.id || index}
                  item={item}
                  eventKey={index.toString()}
                />
              ))}
            </Accordion>

            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-3">
                <Pagination>
                  <Pagination.Prev
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                    disabled={currentPage === 1}
                  />
                  {paginationItems}
                  <Pagination.Next
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <p className="text-muted">No emails found.</p>
        )}
      </div>
    </Container>
  );
}

export default TabEmail;
