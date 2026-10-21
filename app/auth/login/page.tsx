import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <SignIn
      routing="hash"
      fallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
    />
  );
}