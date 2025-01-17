import { Container, Box, Stack, HStack, Separator, Text, Button, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

import Profile from "../Components/Profile";
import WorkExperiences from "../Components/WorkExperiences";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router";


const PortfolioPage = () => {

  const navigate = useNavigate();

  const handleButtonContactClick = () => {
    navigate('/contacto');
  }

  return (
    <Stack>

      <Container key="2xl" maxW="2xl" px="2" justifyContent="space-between">
        <Flex justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} marginTop={5} >
          <ColorModeButton colorPalette={"green"} variant="outline" size="sm"/>
          <Box>
            <Button onClick={handleButtonContactClick} colorPalette={"green"} variant="outline" size="sm">Blog</Button>
          </Box>
        </Flex>
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
