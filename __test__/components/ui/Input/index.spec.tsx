import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input, InputProps } from "../../../../src/app/components/ui/Input";

const mockOnChange = jest.fn();

function makeSut({ ...rest }: InputProps) {
  render(<Input {...rest} />);
}

describe("Input", () => {
  it("should be able to render component Input", () => {
    makeSut({});

    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to allow users to type input", () => {
    makeSut({
      placeholder: "Digite seu nome",
      onChange: mockOnChange,
    });

    const inputElement = screen.getByPlaceholderText(
      "Digite seu nome"
    ) as HTMLInputElement;

    userEvent.type(inputElement, "Texto de teste");

    // Verificar se a função onChange foi chamada
    expect(mockOnChange).toHaveBeenCalled();

    // Também podemos verificar o valor do input, se necessário
    expect(inputElement.value).toBe("Texto de teste");
  });
});
