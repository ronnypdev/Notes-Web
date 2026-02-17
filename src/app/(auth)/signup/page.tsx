import InputField from '@/components/InputField/InputField';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo/Logo';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
      <div className="flex flex-col items-center justify-center gap-2 bg-white border border-neutral-100 w-[540px] max-w-full p-12 rounded-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mb-4">
            <Logo />
          </div>

          <div className="mb-4 text-center flex flex-col items-center gap-2 self-stretch">
            <h1 className="text-2xl font-bold">Welcome to Note</h1>
            <p className="text-sm text-neutral-500">
              Please log in to continue
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-2 w-full pt-6">
          <InputField
            label="email"
            labelName="Email Address"
            placeholder="email@example.com"
            type="email"
            required={true}
          />
          <InputField
            label="password"
            labelName="Password"
            placeholder="•••••••"
            type="email"
            required={true}
          />
          <Button variant="default" type="submit">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}
