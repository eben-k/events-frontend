import { render, screen } from "../test-utils";
import Events from "../Events";
import TablePagination from "../TablePagination";

describe("Events Test Suite", () => {
  it("should render table correctly", () => {
    const component = render(<Events />);
    const tableEl = component.getByRole("table");
    expect(tableEl).toMatchSnapshot();
    expect(tableEl).toBeDefined();
  });

  it("should render table pagination elements", () => {
    const component = render(
      <TablePagination total={1} page={1} limit={5} onPageChange={() => {}} />
    );
    const paginationEl = component.getAllByRole("button");

    expect(paginationEl).toBeDefined();
  });

  it("should render select elements", () => {
    const component = render(<Events />);
    const selectEl = component.getAllByRole("combobox");
    const optionEl = component.getAllByRole("option");

    expect(selectEl).toBeDefined();
    expect(optionEl).toBeDefined();
  });

  it("should get selection event types", () => {
    render(<Events />);
    expect(screen.getByText("All Events")).toBeTruthy();
  });

  it("should get selection recipients", () => {
    render(<Events />);
    expect(screen.getByText("All Recipients")).toBeTruthy();
  });
});
