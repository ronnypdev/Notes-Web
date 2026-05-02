import { render, screen } from '@testing-library/react';
import AuthForm from '../AuthForm';

describe('AuthForm', () => {
  it('should render the AuthForm component', () => {
    render(<AuthForm />);
    expect(screen.getByText('AuthForm')).toBeInTheDocument();
  });
});
