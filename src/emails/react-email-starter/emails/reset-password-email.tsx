import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from 'react-email';
interface ResetPasswordEmailProps {
  username?: string;
  userEmail?: string;
  userLink?: string;
  userToken?: string;
  userImage?: string;
  resetLink?: string;
}

export const ResetPasswordEmail = ({
  username,
  resetLink,
}: ResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
              <strong>Password Reset Requested</strong>
            </Heading>
            <Text className="text-[14px] text-black leading-[24px]">
              Hello {username},
            </Text>
            <Text className="text-[14px] text-black leading-[24px]">
              Please be aware that this a request to reset your password. If you
              did not request a password reset, please ignore this email.
            </Text>
            <Text className="text-[14px] text-black leading-[24px]">
              Click the button below to reset your password:{' '}
              <Button href={resetLink} className="text-blue-600 no-underline">
                Reset Password
              </Button>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPasswordEmail;
