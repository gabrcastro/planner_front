import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import { CreateTripPage } from "../../src/pages/create_trip/create_trip.page";
import { BrowserRouter } from "react-router-dom";

describe("Create Trip Page", () => {
  it("renders create tip page", () => {
    render(
      <BrowserRouter> // I used BrowserRouter to use useNavigate
        <CreateTripPage />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText('Para onde você vai?')
    expect(input).toBeInTheDocument()
  });

  it('open modal to finish trip', () => {
    render(
      <BrowserRouter> // I used BrowserRouter to use useNavigate
        <CreateTripPage />
      </BrowserRouter>
    );

    const button = screen.getByText('Continuar')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    const btnFinish = screen.getByText('Confirmar viagem')
    expect(btnFinish).toBeInTheDocument()
    fireEvent.click(btnFinish)

    const modal = screen.getByText('Confirmar criação de viagem')
    expect(modal).toBeInTheDocument()
  })

})