import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import AuthForm from '../AuthForm';

test('renders AuthForm component', () => {
  render(
    <AuthForm
      onSubmit={() => {}}
      loading={false}
      formTitle="Log in to your account"
      formDescription="Welcome back! Please enter your details."
      submitButtonText="Log in"
      loggingWithGoogle={true}
      loggingWithGoogleText="Or log in with:"
      googleButtonText="Google"
      formFooterText="Don't have an account?"
      formFooterLink="/signup"
      formFooterLinkText="Sign up">
      <></>
    </AuthForm>,
  );
  expect(screen.getByText('Log in to your account')).toBeInTheDocument();
});
