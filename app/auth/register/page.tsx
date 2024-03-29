import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
import NavLink from "next/link";
import SignupForm from "@/components/auth/SignupForm";

export default function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%">
        <Flex className="h-screen items-center">
          <Card className="w-full p-7">
            <Heading>Sign Up</Heading>
            <SignupForm />

            <Flex justify="between" my="4">
              <Text>Already have an account? </Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>
                  Sign In
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}
