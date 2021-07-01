import { render, screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

test('deve renderizar o componente sem erros', () => {
  render(<ConversorMoedas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
