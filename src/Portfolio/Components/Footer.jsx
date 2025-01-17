import { Box } from '@chakra-ui/react'
import { Star } from 'coolshapes-react'

const Footer = () => {
  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"} flexDirection={"column"} marginTop={10}>
        <Star
          index={4}
          noise={true}
          size={90}
        /> 
        <Box marginTop={5} marginBottom={10}>
          <strong>Hecho con ❤️ en Chile!</strong>
        </Box>
    </Box>
  )
}

export default Footer
