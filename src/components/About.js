import { Divider, Stack, Text, Container, Box, HStack } from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

export default function About({ color }) {
  const profile = ProfileArray();
  const text = `Professional and dedicated software developer offering efficient and scalable solutions.

- **JavaScript Development**: Proficient in developing robust and maintainable JavaScript applications, leveraging expertise in syntax, semantics, and best practices.
- **Front-end Development**: Skilled in crafting responsive, user-friendly interfaces using HTML, CSS, and JavaScript, ensuring seamless user experiences.
- **Back-end Development**: Experienced in designing and implementing scalable, efficient back-end architectures using Node.js, Express, and other frameworks.
- **API Integration**: Adept at integrating third-party APIs and developing custom APIs to facilitate data exchange and drive business growth.`;

  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <ReactMarkdown components={ChakraUIRenderer} children={text} />
        </Stack>
      </Container>
    </>
  );
}
