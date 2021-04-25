import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import styled from "styled-components";
import { Typography } from "./Typography";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;

  .buttonsWrapper {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
`;

const PaginationButton = styled.button`
  height: 20px;
  width: 20px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  font-size: 14px;
  outline: none;
  background: none;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

interface PaginationProps {
  limit?: number;
  total?: number;
  page?: number;
  onPageChange: (page: number) => void;
}

const TablePagination = (props: PaginationProps) => {
  const { limit = 10, total = 0, page = 1, onPageChange } = props;

  return (
    <PaginationContainer>
      <Typography size="medium" color="darkGrey" weight="normal">
        Displaying {page * limit - limit + 1}-
        {page * limit > total ? total : page * limit} of {total}
      </Typography>
      <div className="buttonsWrapper">
        <PaginationButton
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          <NavigateBefore />
        </PaginationButton>
        <PaginationButton
          disabled={limit * page >= total}
          onClick={() => onPageChange(page + 1)}
        >
          <NavigateNext />
        </PaginationButton>
      </div>
    </PaginationContainer>
  );
};

export default TablePagination;
