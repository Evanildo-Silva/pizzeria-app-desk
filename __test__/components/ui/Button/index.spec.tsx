import { Button, ButtonProps } from "@/app/components/ui/Button";
import { fireEvent, render, screen } from "@testing-library/react";

const mockOnClick = jest.fn();

function makeSut({ secondary, loading, ...rest }: ButtonProps) {
  render(<Button secondary={secondary} loading={loading} {...rest} />);
}

describe("Button", () => {
  it("should be able render component Button", () => {
    makeSut({
      secondary: false,
      loading: false,
      children: "Click Here",
    });

    const buttonElement = screen.getByRole("button", {
      name: "Click Here",
    });

    expect(buttonElement).toBeInTheDocument();
  });

  it("should be able to click the component button", () => {
    makeSut({
      secondary: false,
      loading: false,
      children: "Click Here",
      onClick: mockOnClick,
    });

    const buttonElement = screen.getByRole("button", {
      name: "Click Here",
    });

    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    // Verificar se a função onClick foi chamada
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should be able to render disabled button when support load is true", () => {
    makeSut({
      loading: true,
      children: "Click Here",
    });

    const buttonElement = screen.getByRole("button");

    // Verificar se o botão está desabilitado
    expect(buttonElement).toBeDisabled();
  });

  it("should be able to apply secondary styles when secondary support is true", () => {
    makeSut({
      secondary: true,
      children: "Click Here",
    });

    const buttonElement = screen.getByRole("button", {
      name: "Click Here",
    });

    // Verificar se o botão está com a estilização secundária
    expect(buttonElement).toHaveClass("bg-btn-secondary");
  });
});
