import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import AuthForm from '../AuthForm';

const baseProps = {
  onSubmit: () => {},
  loading: false,
  formTitle: 'Welcome Back',
  formDescription: 'Please sign in to continue.',
  submitButtonText: 'Sign In',
};

describe('AuthForm', () => {
  test('renders the form title', () => {
    render(<AuthForm {...baseProps}><input /></AuthForm>);
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
  });

  test('renders the form description', () => {
    render(<AuthForm {...baseProps}><input /></AuthForm>);
    expect(screen.getByText('Please sign in to continue.')).toBeInTheDocument();
  });

  test('renders the submit button with correct text when not loading', () => {
    render(<AuthForm {...baseProps}><input /></AuthForm>);
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
  });

  test('renders children inside the form', () => {
    render(
      <AuthForm {...baseProps}>
        <input type="email" placeholder="Email address" />
      </AuthForm>
    );
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
  });

  test('renders Google login section when loggingWithGoogle is true', () => {
    render(
      <AuthForm
        {...baseProps}
        loggingWithGoogle={true}
        loggingWithGoogleText="Or continue with"
        googleButtonText="Continue with Google"
        onGoogleLogin={() => {}}
      >
        <input />
      </AuthForm>
    );
    expect(screen.getByText('Or continue with')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /continue with google/i })).toBeInTheDocument();
  });

  test('does not render Google login section when loggingWithGoogle is false', () => {
    render(<AuthForm {...baseProps} loggingWithGoogle={false}><input /></AuthForm>);
    expect(screen.queryByText('Or continue with')).not.toBeInTheDocument();
  });

  test('renders footer link when footer props are provided', () => {
    render(
      <AuthForm
        {...baseProps}
        formFooterText="Don't have an account?"
        formFooterLink="/sign-up"
        formFooterLinkText="Sign up"
      >
        <input />
      </AuthForm>
    );
    expect(screen.getByText("Don't have an account?", { exact: false })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign up' })).toHaveAttribute('href', '/sign-up');
  });

  test('does not render footer when footer props are missing', () => {
    render(<AuthForm {...baseProps}><input /></AuthForm>);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
