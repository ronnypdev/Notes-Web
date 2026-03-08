# Plan: Finish AuthForm Component

## Context

The `AuthForm` component was scaffolded with all the right TypeScript interfaces and layout, but the implementation is incomplete. Three core problems exist:

1. `inputFields` prop is **ignored** — the form hardcodes email + password fields regardless of what's passed
2. `onSubmit` prop is **never wired** to the `<form>` element
3. `loggingWithGoogle` prop is **ignored** — the Google section always renders

The fix must make the component truly reusable: one component that renders correctly for all four form types (`login`, `signup`, `forgotpassword`, `resetpassword`) based on what props are passed in. The page files are currently all placeholders or partial, so they also need to be implemented to pass the correct props.

---

## Critical Files

- **Primary**: `src/app/(auth)/components/AuthForm.tsx`
- **Secondary**: `src/app/(auth)/login/page.tsx`, `signup/page.tsx`, `forgotpassword/page.tsx`, `resetpassword/page.tsx`
- **Reuse**: `src/components/InputField/InputField.tsx` (already used; just needs to receive spread props from the map)

---

## Changes

### 1. `AuthForm.tsx` — Fix the interface

Make Google/footer props optional since `forgotpassword` and `resetpassword` don't use them:

```diff
- onSubmit: (data: InputFieldData) => void;
+ onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
- loggingWithGoogleText: string;
- googleButtonText: string;
- loggingWithGoogle: boolean;
- formFooterText: string;
- formFooterLink: string;
- formFooterLinkText: string;
+ loggingWithGoogleText?: string;
+ googleButtonText?: string;
+ loggingWithGoogle?: boolean;
+ formFooterText?: string;
+ formFooterLink?: string;
+ formFooterLinkText?: string;
```

### 2. `AuthForm.tsx` — Replace hardcoded fields with dynamic map

Replace the two hardcoded `<InputField>` elements inside `<form>` with:

```tsx
{inputFields.map((field) => (
  <InputField key={field.label} {...field} />
))}
```

### 3. `AuthForm.tsx` — Wire onSubmit to the form

```diff
- <form className="flex flex-col gap-2 w-full pt-6 my-4">
+ <form className="flex flex-col gap-2 w-full pt-6 my-4" onSubmit={onSubmit}>
```

### 4. `AuthForm.tsx` — Conditionally render Google section

Wrap the Google login `<div>` with a guard:

```tsx
{loggingWithGoogle && (
  <div className="w-full flex flex-col items-center gap-4 self-stretch pt-6 border-t border-neutral-200 mb-1.5">
    ...
  </div>
)}
```

### 5. `AuthForm.tsx` — Conditionally render footer

Wrap both the divider and footer `<div>` with a guard:

```tsx
{formFooterText && formFooterLink && formFooterLinkText && (
  <>
    <div className="border-t border-neutral-200 h-0.5 w-full"></div>
    <div className="flex items-center justify-center">
      <p ...>{formFooterText}{' '}
        <Link href={formFooterLink} ...>{formFooterLinkText}</Link>
      </p>
    </div>
  </>
)}
```

---

### 6. Auth Page Files — Implement with correct props

**`login/page.tsx`** — pass all login props per spec:
- formType: `'login'`, formTitle: `'Log in to your account'`
- formDescription: `'Welcome back! Please enter your details.'`
- inputFields: email + password fields
- submitButtonText: `'Log in'`, loggingWithGoogle: `true`
- loggingWithGoogleText: `'Or log in with:'`, googleButtonText: `'Google'`
- formFooterText: `"Don't have an account?"`, formFooterLink: `'/signup'`, formFooterLinkText: `'Sign up'`

**`signup/page.tsx`** — fix partial implementation:
- formType: `'signup'`, formTitle: `'Create Your Account'`
- formDescription: `'Sign up to start organizing your notes and boost your productivity.'`
- inputFields: email + password fields
- submitButtonText: `'Sign Up'`, loggingWithGoogle: `true`
- loggingWithGoogleText: `'Or log in with:'`, googleButtonText: `'Google'`
- formFooterText: `'Already have an account?'`, formFooterLink: `'/login'`, formFooterLinkText: `'Login'`

**`forgotpassword/page.tsx`** — minimal props only:
- formType: `'forgotpassword'`, formTitle: `'Forgot Your Password?'`
- formDescription: `'No worries! Enter your email to reset your password.'`
- inputFields: email field only
- submitButtonText: `'Send Reset Link'`
- (no loggingWithGoogle, no footer props)

**`resetpassword/page.tsx`** — minimal props only:
- formType: `'resetpassword'`, formTitle: `'Reset Your Password'`
- formDescription: `'Enter your new password below.'`
- inputFields: password + confirm password fields
- submitButtonText: `'Reset Password'`
- (no loggingWithGoogle, no footer props)

All `onSubmit` handlers in the pages will be `(e) => e.preventDefault()` as a placeholder — no backend logic per spec.

---

## Verification

1. Run `npm run dev` (or `bun dev`) and visit each route:
   - `/login` — should show email + password fields, Google section, footer link to `/signup`
   - `/signup` — should show email + password fields, Google section, footer link to `/login`
   - `/forgotpassword` — should show email field only, no Google section, no footer
   - `/resetpassword` — should show password + confirm password fields, no Google section, no footer
2. Verify TypeScript compiles without errors (`npm run build` or `tsc --noEmit`)
3. Confirm no props marked optional cause TypeScript errors on the existing pages
