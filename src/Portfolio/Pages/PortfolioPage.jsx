import { Container, Box, Stack, HStack, Separator, Text } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

import Profile from "../Components/Profile";
import WorkExperiences from "../Components/WorkExperiences";
import Footer from "../Components/Footer";

const PortfolioPage = () => {
  return (
    <Stack>

      <Container key="2xl" maxW="2xl" px="2">
        <ColorModeButton marginTop={5} />
      </Container>
      
      <Box marginTop={5}>
        <Container key="2xl" maxW="2xl" px="2">
      	
        <Profile/>

        <HStack marginTop={10}>
          <Separator />
            <Text flexShrink="0">Experiencia Laboral</Text>
          <Separator />
        </HStack>

        <WorkExperiences/>
        
        <Footer />

        </Container>
      </Box>

    </Stack>
  );
};

export default PortfolioPage;
