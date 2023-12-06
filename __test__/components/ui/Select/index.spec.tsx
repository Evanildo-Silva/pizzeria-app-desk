import { Select, SelectProps } from "@/app/components/ui/Select";
import { fireEvent, render, screen } from "@testing-library/react";
import { selectMock } from "../../../mocks/selectMock";

const mockOnChange = jest.fn();

function makeSut({ ...rest }: SelectProps) {
  render(<Select {...rest} />);
}

describe("Select", () => {
  it("should be able to render the component and check if onChange was called", async () => {
    makeSut({
      onChange: mockOnChange,
      children: selectMock.map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      )),
    });

    const selectElement = screen.getByText(selectMock[0].name);

    expect(selectElement).toBeInTheDocument();

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: selectMock[1].name },
    });

    screen.logTestingPlaygroundURL();

    expect(mockOnChange).toHaveBeenCalled();
  });
});
