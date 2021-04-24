import * as React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Typography } from "./Typography";

const TopBarContainer = styled.div`
  grid-row: 1/2;
  padding: 8px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9eef1;

  .MuiIconButton-root {
    &:hover {
      background: none;
    }
  }

  .userDetail {
    display: grid;
    grid-template-columns: 30px 1fr;
    column-gap: 10px;
    align-items: center;

    .userAvatar {
      border-radius: 50%;
      height: 30px;
      width: 30px;
      background-color: ${(p) => p.theme.default.colors.bgPrimaryColor3};
    }
  }
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <IconButton>
        <Search />
      </IconButton>
      <div className="userDetail">
        <div className="userAvatar" />
        <Typography size="medium" color="darkGrey" weight="normal">
          Hi, Janelle Reid
        </Typography>
      </div>
    </TopBarContainer>
  );
};

export default TopBar;
