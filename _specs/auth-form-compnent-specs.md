# Spec for auth auth-form-component

branch: notesweb-auth-implementation-v2

## Objective

Help me finish building the `AuthForm` component which will be use for the `/signup` `/login`, `/forgotpassword` and `/resetpassword` for this feature we're only focusing on the architecture of the AuthForm component no actual authentication or backend logic will be implemented at the moment this is purely a client side feature. The whole point of this feature is to build `AuthForm` component once and use many times to meet the different edge cases.

## Functional Requirements

- The file we'll be working with is in `/src/app/(auth)/components/AuthForm.tsx` only
  - Since component it's already built for the most part we're going to use the code inside this file

- For the `/login` page the the `AuthForm` component contains and handle the following props:
  - `formType`
  - `formTitle`
  - `formDescription`
  - `inputFields`
  - `onSubmit`
  - `submitButtonText`
  - `loggingWithGoogleText`
  - `googleButtonText`
  - `loggingWithGoogle`
  - `formFooterText`
  - `formFooterLink`
  - `formFooterLinkText`

- For the `/signup` page the `AuthForm` component most contain and handle the following props:
  - `formType`
  - `formTitle`
  - `formDescription`
  - `inputFields`
  - `onSubmit`
  - `submitButtonText`
  - `loggingWithGoogleText`
  - `googleButtonText`
  - `loggingWithGoogle`
  - `formFooterText`
  - `formFooterLink`
  - `formFooterLinkText`

- For the `/signup` page the `AuthForm` component most contain and handle the following props:
  - `formType`
  - `formTitle`
  - `formDescription`
  - `inputFields`
  - `onSubmit`
  - `submitButtonText`
  - `loggingWithGoogleText`
  - `googleButtonText`
  - `loggingWithGoogle`
  - `formFooterText`
  - `formFooterLink`
  - `formFooterLinkText`

- For the `/forgotpassword` page the `AuthForm` component most contain and handle the following props:
  - `formType`
  - `formTitle`
  - `formDescription`
  - `inputFields`
  - `onSubmit`
  - `submitButtonText`

- For the `/resetpassword` page the `AuthForm` component most contain and handle the following props:
  - `formType`
  - `formTitle`
  - `formDescription`
  - `inputFields`
  - `inputFields`
  - `onSubmit`
  - `submitButtonText`

## Edge Cases

- For `/login` page the the `AuthForm`
  - when the `formType` is `login` the `AuthForm` component should display the login form like this:
    - `formTitle` should be `Log in to your account`
    - `formDescription` should be `Welcome back! Please enter your details.`
    - `inputFields` should be `[
  {
    label: 'email',
    labelName: 'Email Address',
    placeholder: 'email@example.com',
    type: 'email',
    required: true,
    utilityClasses: 'mb-4'
  }
  {
    label: 'password',
    labelName: 'Password',
    placeholder: 'password',
    type: 'password',
    required: true,
    utilityClasses: 'mb-4'
  }
]`
    - `onSubmit` should be a function that will be called when the user submits the form
    - `submitButtonText` should be `Log in`
    - `loggingWithGoogleText` should be `Or log in with:`
    - `googleButtonText` should be `Google`
    - `loggingWithGoogle` should be `true`
    - `formFooterText` should be `Don't have an account?`
    - `formFooterLink` should be `/signup`
    - `formFooterLinkText` should be `Sign up`
    - take a look at the `/public/loginform.png` file for the exact props and how the `AuthForm` component is used

  - when the `formType` is `signup` the `AuthForm` component should display the signup form like this:
    - `formTitle` should be `Create Your Account`
    - `formDescription` should be `Sign up to start organizing your notes and boost your productivity.`
    - `inputFields` should be `[
  {
    label: 'email',
    labelName: 'Email Address',
    placeholder: 'email@example.com',
    type: 'email',
    required: true,
    utilityClasses: 'mb-4'
  }
  {
    label: 'password',
    labelName: 'Password',
    placeholder: 'password',
    type: 'password',
    required: true,
    utilityClasses: 'mb-4'
  }
]`
    - `onSubmit` should be a function that will be called when the user submits the form
    - `submitButtonText` should be `Sign Up`
    - `loggingWithGoogleText` should be `Or log in with:`
    - `googleButtonText` should be `Google`
    - `loggingWithGoogle` should be `true`
    - `formFooterText` should be `Already have an account?`
    - `formFooterLink` should be `/login`
    - `formFooterLinkText` should be `Login`
    - take a look at the `/public/signupform.png` file for the exact props and how the `AuthForm` component is used
  - when the `formType` is `forgotpassword` the `AuthForm` component should display the forgot password form like this:
    - `formTitle` should be `Forgot Your Password?`
    - `formDescription` should be `No worries! Enter your email to reset your password.`
    - `inputFields` should be `[
  {
    label: 'email',
    labelName: 'Email Address',
    placeholder: 'email@example.com',
    type: 'email',
    required: true,
    utilityClasses: 'mb-4'
  }
]`
    - `onSubmit` should be a function that will be called when the user submits the form
    - `submitButtonText` should be `Send Reset Link`
    - take a look at the `/public/forgotpasswordform.png` file for the exact props and how the `AuthForm` component is used

  - when the `formType` is `resetpassword` the `AuthForm` component should display the reset password form like this:
    - `formTitle` should be `Reset Your Password`
    - `formDescription` should be `Enter your new password below.`
    - `inputFields` should be `[
  {
    label: 'password',
    labelName: 'Password',
    placeholder: 'password',
    type: 'password',
    required: true,
    utilityClasses: 'mb-4'
  }
  {
    label: 'confirm password',
    labelName: 'Confirm Password',
    placeholder: 'confirm password',
    type: 'password',
    required: true,
    utilityClasses: 'mb-4'
  }
]`
    - `onSubmit` should be a function that will be called when the user submits the form
    - `submitButtonText` should be `Reset Password`
    - take a look at the `/public/resetpasswordform.png` file for the exact props and how the `AuthForm` component is used
