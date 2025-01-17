import { Card } from "@chakra-ui/react"

const Contact = () => {
  return (
    <Card.Root 
        flexDirection="row"
        overflow="hidden"
        shadow="xl"
        >
        
        <Card.Body>

            <Card.Title mt="2">Contacto</Card.Title>

            <Card.Description marginTop={4}>
            </Card.Description>
            
            <Card.Footer justifyContent="space-between" marginTop={10} padding={0}>
            </Card.Footer>

        </Card.Body>
    </Card.Root>
  )
}

export default Contact
