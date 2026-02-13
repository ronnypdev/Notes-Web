import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo/Logo';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center gap-2">
          <Logo />
          <h1 className="text-2xl font-bold">Welcome to Note</h1>
          <p className="text-sm text-neutral-500">Please log in to continue</p>
        </div>
        <form className="flex flex-col gap-2">
          <Button variant="default" type="submit">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}
