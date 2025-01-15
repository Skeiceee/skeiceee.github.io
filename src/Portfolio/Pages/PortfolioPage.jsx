import { Container, Box, Stack, HStack, Separator, Text } from "@chakra-ui/react";

import Profile from "../Components/Profile";
import WorkExperiences from "../Components/WorkExperiences";

const PortfolioPage = () => {
  return (
    <Stack>
      <Box marginTop={10}>
        <Container key="2xl" maxW="2xl" px="2">
      	
        <Profile/>

        <HStack marginTop={10}>
          <Separator />
            <Text flexShrink="0">Experiencia Laboral</Text>
          <Separator />
        </HStack>

        <WorkExperiences/>

        </Container>
      </Box>
    </Stack>
  );
};

export default PortfolioPage;
