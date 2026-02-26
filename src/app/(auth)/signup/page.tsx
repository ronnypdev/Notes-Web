import AuthForm from '../components/AuthForm';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
      <AuthForm
        formTitle="Create Your Account"
        formDescription="Sign up to start organizing your notes and boost your productivity."
      />
    </div>
  );
}
