import * as React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Typography } from "../Typography";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 12rem 1fr;
  background-color: ${(p) => p.theme.default.colors.bgPrimaryColor};

  .sidebar {
    background-color: ${(p) => p.theme.default.colors.bgPrimaryColor2};
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;

    .newEvent {
      height: 60px;
      border-bottom: 1px solid #e9eef1;
      display: flex;
      align-items: center;

      .MuiIconButton-root {
        width: 100%;
        display: flex;

        .MuiIconButton-label {
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        &:hover {
          background: none;
        }
      }
    }

    .sidebarItems {
      padding-left: 10px;
      width: 100%;

      .titleText {
        padding: 30px 20px;
      }

      .totalEvents {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px;
        width: 100%;
        background-color: ${(p) => p.theme.default.colors.accentColor};
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        box-shadow: 0px 2px 2px rgba(180, 152, 255, 0.08);
      }
    }
  }

  .main {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 60px 1fr;
    overflow: auto;
  }
`;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  const totalEvents = useSelector((state) => state.events.total);

  return (
    <Container>
      <div className="sidebar">
        <div className="newEvent">
          <IconButton>
            <Typography size="small" color="darkGrey" weight="semiBold">
              NEW EVENT
            </Typography>
            <Add />
          </IconButton>
        </div>
        <div className="sidebarItems">
          <Typography
            className="titleText"
            size="large2"
            color="black"
            weight="semiBold"
          >
            Events
          </Typography>
          <div className="totalEvents">
            <Typography size="large2" color="black" weight="semiBold">
              {totalEvents}
            </Typography>
            <Typography size="medium" color="darkGrey" weight="normal">
              Events
            </Typography>
          </div>
        </div>
      </div>
      <div className="main">{props.children}</div>
    </Container>
  );
};

export default AppLayout;
