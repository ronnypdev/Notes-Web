import InputField from '@/components/InputField/InputField';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/components/icons/GoogleIcon';
import Link from 'next/link';
import Image from 'next/image';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
      <div className="flex flex-col items-center justify-center gap-2 bg-white border border-neutral-100 w-[540px] max-w-full p-12 rounded-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mb-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={28}
              height={28}
              className="w-28 h-7"
            />
          </div>

          <div className="mb-4 text-center flex flex-col items-center gap-2 self-stretch">
            <h1 className="text-2xl font-bold">Welcome to Note</h1>
            <p className="text-sm text-neutral-500">
              Please log in to continue
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-2 w-full pt-6 my-4">
          <InputField
            label="email"
            labelName="Email Address"
            placeholder="email@example.com"
            type="email"
            required={true}
            utilityClasses="mb-4"
          />
          <InputField
            label="password"
            labelName="Password"
            type="password"
            required={true}
            utilityClasses="mb-4"
            info="At least 8 characters"
          />
          <Button variant="default" type="submit">
            Sing up
          </Button>
        </form>
        <div className="w-full flex flex-col items-center gap-4 self-stretch pt-6 border-t border-neutral-200 mb-1.5">
          <p className="text-sm font-sans font-normal leading-4 tracking-tight text-neutral-600">
            Or log in with:
          </p>
          <Button className="w-full" variant="outline" type="button">
            <GoogleIcon className="w-4 h-4" />
            Google
          </Button>
        </div>
        <div className="border-t border-neutral-200 h-0.5 w-full"></div>
        <div className="flex items-center justify-center">
          <p className="text-sm font-sans font-normal leading-4 tracking-tight text-neutral-600">
            Already have an account?{' '}
            <Link href="/signin" className="text-neutral-950 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
