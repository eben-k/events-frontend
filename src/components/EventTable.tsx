import { CircularProgress } from "@material-ui/core";
import { format } from "date-fns";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Column, useRowState, useTable } from "react-table";
import styled from "styled-components";
import { Event } from "../types/event";
import { Typography } from "./Typography";

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 32px;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0 4px;

  td {
    &:first-child {
      padding-left: 36px;
    }

    &:last-child {
      padding-right: 36px;
    }
  }

  thead {
    tr {
      height: 5rem;
    }
  }

  tbody {
    tr {
      height: 4.5rem;
      background-color: ${(p) => p.theme.default.colors.bgAccentColor};
    }
  }
`;

const TablePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiCircularProgress-colorPrimary {
    color: ${(p) => p.theme.default.colors.primaryColor};
  }
`;

const columns: Column<Event>[] = [
  {
    accessor: "id",
    Header: () => (
      <Typography size="medium" color="black" weight="normal">
        ID
      </Typography>
    ),
    Cell: (cell) => (
      <Typography size="medium" color="darkGrey" weight="normal">
        {cell.value}
      </Typography>
    ),
  },
  {
    accessor: "caregiver_id",
    Header: () => (
      <Typography size="medium" color="black" weight="normal">
        Care Giver
      </Typography>
    ),
    Cell: (cell) => (
      <Typography size="medium" color="darkGrey" weight="normal">
        {cell.value}
      </Typography>
    ),
  },
  {
    accessor: "care_recipient_id",
    Header: () => (
      <Typography size="medium" color="black" weight="normal">
        Recipient
      </Typography>
    ),
    Cell: (cell) => (
      <Typography size="medium" color="darkGrey" weight="normal">
        {cell.value}
      </Typography>
    ),
  },
  {
    accessor: "event_type",
    Header: () => (
      <Typography size="medium" color="black" weight="normal">
        Event
      </Typography>
    ),
    Cell: (cell) => (
      <Typography size="medium" color="darkGrey" weight="normal">
        {cell.value}
      </Typography>
    ),
  },
  {
    accessor: "timestamp",
    Header: () => (
      <Typography size="medium" color="black" weight="normal">
        Date
      </Typography>
    ),
    Cell: (cell) => (
      <Typography size="medium" color="darkGrey" weight="normal">
        {format(new Date(cell.value), "do MMM, yyyy 'at' k:m")}
      </Typography>
    ),
  },
];

const EventTable = () => {
  const events = useSelector((state) => state.events.events);
  const isEventsLoading = useSelector((state) => state.events.isLoading);
  const isRecipientLoading = useSelector((state) => state.recipients.isLoading);
  const isEventTypesLoading = useSelector(
    (state) => state.eventTypes.isLoading
  );

  const isLoading =
    isEventsLoading || isRecipientLoading || isEventTypesLoading;

  const tableProps = useTable(
    {
      columns,
      data: events,
    },
    useRowState
  );
  const tableRef = useRef<HTMLDivElement | null>(null);

  return (
    <TableWrapper ref={tableRef}>
      <div className="wrapper">
        <Table aria-label="custom pagination table">
          <thead>
            <tr {...tableProps.headerGroups[0].getHeaderGroupProps()}>
              {tableProps.headerGroups[0].headers.map((column) => (
                <td
                  style={{ minWidth: column.minWidth }}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableProps.rows.map((row) => {
              tableProps.prepareRow(row);

              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={`${cell.row.id}-${index}`}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        {isLoading && (
          <TablePlaceholder>
            <CircularProgress />
          </TablePlaceholder>
        )}
        {!isLoading && events.length === 0 && (
          <TablePlaceholder>
            <Typography size="medium" color="black" weight="normal">
              No events to display
            </Typography>
          </TablePlaceholder>
        )}
      </div>
    </TableWrapper>
  );
};

export default EventTable;
