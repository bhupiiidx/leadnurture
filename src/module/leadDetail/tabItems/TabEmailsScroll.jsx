import React, { useState, useRef, useCallback } from "react";
import { Accordion, Button, Container, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import EmailItem from "./EmailItem";

function TabEmailsScroll({ data }) {
  // State for infinite scroll
  const [displayCount, setDisplayCount] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  // References
  const emails = data?.emails || [];
  const totalEmails = emails.length;
  const scrollContainerRef = useRef(null);

  // Current emails to display
  const currentEmails = emails.slice(0, displayCount);

  // Load more function for infinite scroll
  const fetchMoreData = useCallback(() => {
    // Simulate loading delay
    setTimeout(() => {
      if (displayCount >= totalEmails) {
        setHasMore(false);
        return;
      }

      // Load 5 more items
      setDisplayCount((prevCount) => Math.min(prevCount + 5, totalEmails));
    }, 500);
  }, [displayCount, totalEmails]);

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

      <div
        id="scrollableDiv"
        style={{
          height: "500px",
          overflow: "auto",
          marginTop: "10px",
        }}
        ref={scrollContainerRef}
        className="custom-scrollbar"
      >
        {totalEmails > 0 ? (
          <InfiniteScroll
            dataLength={currentEmails.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <div className="text-center my-3">
                <Spinner animation="border" variant="primary" />
              </div>
            }
            endMessage={
              <p className="text-center text-muted mt-3">All emails loaded</p>
            }
            scrollableTarget="scrollableDiv"
          >
            <Accordion>
              {currentEmails.map((item, index) => (
                <EmailItem
                  key={item.id || `email-${index}`}
                  item={item}
                  eventKey={index.toString()}
                />
              ))}
            </Accordion>
          </InfiniteScroll>
        ) : (
          <p className="text-muted">No emails found.</p>
        )}
      </div>
    </Container>
  );
}

export default TabEmailsScroll;
