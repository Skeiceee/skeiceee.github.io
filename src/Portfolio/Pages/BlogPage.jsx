import { ColorModeButton } from "@/components/ui/color-mode"
import { Box, Button, Container, Flex, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router";

import Contact from "../Components/Blog";

const ContactPage = () => {
  
  const navigate = useNavigate();

  const handleButtonContactClick = () => {
    navigate('/');
  }

  return (
    <Stack>
      <Container key="2xl" maxW="2xl" px="2" justifyContent="space-between">
        <Flex justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} marginTop={5} >
          <ColorModeButton colorPalette={"green"} variant="outline" size="sm"/>
          <Box>
            <Button onClick={handleButtonContactClick} colorPalette={"green"} variant="outline" size="sm">Home</Button>
          </Box>
        </Flex>
      </Container>
      
      <Box marginTop={5}>
        <Container key="2xl" maxW="2xl" px="2">

          <Contact/>

        </Container>
      </Box>
  </Stack>
  )
}

export default ContactPage
