import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      backgroundColor="white"
      color="black"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={imageSrc} borderRadius="lg"/>
      <VStack
        align="start"
        spacing={3}
        p={4}
      >
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text fontWeight="medium">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
