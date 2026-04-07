'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authClient } from '@/lib/auth-client';
import AuthForm from '../components/AuthForm';
import { toast } from 'sonner';

const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  // callbackurl: z.string().default('/allnotes'),
});

type signUpForm = z.infer<typeof signUpSchema>;

export default function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  async function submitSignUpForm(data: signUpForm) {
    try {
      await authClient.signUp.email({
        ...data,
        fetchOptions: {
          onRequest: () => {
            //show loading
            setIsLoading(true);
          },
          onResponse: () => {
            setIsLoading(false);
          },
          onSuccess: () => {
            //redirect to the dashboard or sign in page
            toast.success('Congratulation! You successfully sign up', {
              position: 'top-right',
            });
            router.push('/allnotes');
          },
          onError: () => {
            toast.error('Something went wrong!, Please try again!', {
              position: 'top-right',
            });
          },
        },
      });
    } catch (error) {
      toast.error('Connection failed! Try again!', { position: 'top-right' });
      console.log(`Connection failed! Try again! ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100 p-5 md:p-0">
      <AuthForm
        formTitle="Create Your Account"
        formDescription="Sign up to start organizing your notes and boost your productivity."
        inputFields={[
          {
            label: 'email',
            labelName: 'Email Address',
            placeholder: 'email@example.com',
            type: 'email',
            required: true,
            utilityClasses: 'mb-4',
          },
          {
            label: 'password',
            labelName: 'Password',
            placeholder: '',
            type: 'password',
            required: true,
            utilityClasses: 'mb-4',
            info: 'At least 8 characters',
          },
        ]}
        onSubmit={() => {}}
        submitButtonText="Sign Up"
        loggingWithGoogle={true}
        loggingWithGoogleText="Or log in with:"
        googleButtonText="Google"
        formFooterText="Already have an account?"
        formFooterLink="/login"
        formFooterLinkText="Login"
      />
    </div>
  );
}
