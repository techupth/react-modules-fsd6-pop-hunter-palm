import Button from "./common/Button";
import { Flex, Box } from "@chakra-ui/react";

function MainContent() {
  return (
    <main>
      <h1>Welcome to XYZ Corp</h1>
      <p>Your Trusted Partner in Excellence</p>
      <Flex>
        <Box
          className="company-detail-left"
          flex={1}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <img src="https://placehold.co/300x300" />
          </Box>
        </Box>
        <Box
          className="company-detail-right"
          flex={1}
          justifyContent={"center"}
        >
          <h2>About Our Company</h2>
          <p>
            Welcome to XYZ Corp, where excellence meets innovation. We are a
            passionate team dedicated to providing high-quality solutions for
            the technology industry. With a track record of 10 years of success,
            we have become a trusted partner for clients worldwide.
          </p>
          <p>
            Our mission is to empower businesses through cutting-edge
            technology. We believe in integrity, collaboration, and innovation,
            and we strive to make a positive impact on businesses and
            communities alike.
          </p>
          <p>
            At XYZ Corp, we take pride in our commitment to staying at the
            forefront of technological advancements. Our team of experts is
            ready to collaborate with you to tackle your most complex challenges
            and drive your success.
          </p>
          <Button buttonText="Learn More" buttonStyle="learn-button" />
        </Box>
      </Flex>
    </main>
  );
}

export default MainContent;
