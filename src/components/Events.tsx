import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchEvents,
  fetchEventTypes,
  fetchRecipients,
} from "../store/actions";
import EventTable from "./EventTable";
import TablePagination from "./TablePagination";
import { Typography, typographyMixin } from "./Typography";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  overflow: auto;
  display: grid;
  grid-template-rows: auto 1fr;

  .topSection {
    padding: 0 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .rightFilter {
      display: grid;
      align-items: center;
      grid-auto-flow: row;
      gap: 10px;

      .select {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        gap: 5px;
        align-items: center;
      }
    }
  }
`;

const Select = styled.select`
  ${typographyMixin({ size: "small", color: "darkGrey", weight: "normal" })}
  border: none;
  padding: 10px 12px;
  background-color: ${(p) => p.theme.default.colors.accentColor};
  outline: none;
  width: 100%;
`;

const Events = () => {
  const dispatch = useDispatch();
  const totalEvents = useSelector((state) => state.events.total);
  const recipients = useSelector((state) => state.recipients.recipients);
  const eventTypes = useSelector((state) => state.eventTypes.types);
  const [page, setPage] = useState(1);
  const [recipient, setRecipient] = useState<string>();
  const [type, setType] = useState<string>();

  useEffect(() => {
    dispatch(
      fetchEvents({
        page,
        limit: 20,
        recipient_id: recipient,
        event_type: type,
      })
    );
  }, [dispatch, page, recipient, type]);

  useEffect(() => {
    dispatch(fetchRecipients());
    dispatch(fetchEventTypes());
  }, [dispatch]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const handler = name === "recipient" ? setRecipient : setType;

    if (value === "all") handler(undefined);
    else handler(value);
  };

  return (
    <Container>
      <div className="topSection">
        <TablePagination
          total={totalEvents}
          page={page}
          limit={20}
          onPageChange={setPage}
        />
        <div className="rightFilter">
          <div className="select">
            <Typography size="medium" color="black" weight="normal">
              Event Type:
            </Typography>
            <Select name="type" onChange={onSelectChange}>
              <option value="all">All Events</option>
              {eventTypes.map((event) => (
                <option key={event.event_type} value={event.event_type}>
                  {event.event_type}
                </option>
              ))}
            </Select>
          </div>
          <div className="select">
            <Typography size="medium" color="black" weight="normal">
              Recipients:
            </Typography>
            <Select name="recipient" onChange={onSelectChange}>
              <option value="all">All Recipients</option>
              {recipients.map((recipient) => (
                <option
                  key={recipient.recipient_id}
                  value={recipient.recipient_id}
                >
                  {recipient.recipient_id}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <EventTable />
    </Container>
  );
};

export default Events;
