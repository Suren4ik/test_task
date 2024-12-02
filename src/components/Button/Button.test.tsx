import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { vi } from 'vitest';

test('renders with correct size and variant', () => {
  render(<Button size="large" variant="primary" />);
  const button = screen.getByRole('button');
  expect(button.classList.contains('large')).toBe(true);
  expect(button.classList.contains('primary')).toBe(true);
});

test('is disabled when isDisabled is true', () => {
  render(<Button isDisabled />);
  const button = screen.getByRole('button');
  expect(button).toBeTruthy();
  expect(button.hasAttribute('disabled')).toBe(true);
});

test('calls onClick when button is clicked', () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Click Me</Button>);

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('does not call onClick when button is disabled', () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick} isDisabled>Click Me</Button>);

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onClick).not.toHaveBeenCalled();
});
