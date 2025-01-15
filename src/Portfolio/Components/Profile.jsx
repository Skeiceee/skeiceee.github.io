import { Badge, Box, Card, Link, Stack } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { FaLinkedin, FaGithub  } from "react-icons/fa6";


const skills = [
    "PHP",
    "React",
    "Vue",
    "Laravel",
    "Javascript",
    "MySQL",
    "PostgreSQL",
    "GIT",
    "Python",    
    "Tailwind",
    "jQuery",
    "Bootstrap",
]


const Profile = () => {

  return (
    <Card.Root 
        flexDirection="row"
        overflow="hidden"
        shadow="xl"
        >
        
        <Card.Body>
                <Box  rounded={6}  bgImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACJJREFUKFNjZCASMBKpjmEwKfT19f2/efNmDCcNJjfiClcA7B8EC5lHMzwAAAAASUVORK5CYII=)">
                    <Avatar
                        src="./img/1665165872010.jpg"
                        name="Nue Camp"
                        size="lg"
                        shape="rounded"
                        maxWidth={200}
                        width={100}
                        height={100}
                    />
                </Box>
                <Card.Title mt="2">Victor Nuñez</Card.Title>
            <Card.Description marginTop={4}>
                Llevo 5 años trabajando con PHP y Laravel, en el Frontend he utilizado
                tanto como Javascript y/o jQuery junto con Bootstrap o Tailwind, e
                trabajado con MySQL y PostgreSQL, tengo conocimientos en GIT, e
                trabajado en rubros como telecomunicaciones, e-commerce y RRHH, como
                adicional tambien e hecho ciertos informes donde utilice Python usando
                Pandas y e implementado sistemas de pagos como Webpay.
            </Card.Description>

            
            <Card.Footer justifyContent="space-between" marginTop={10} padding={0}>
                <Box direction="row" display="flex" flexWrap="wrap" maxWidth={400} gap={2}>
                    {
                        skills.map((skill, index) => {
                            return <Badge key={index} colorPalette="green">{skill}</Badge>
                        })
                    }
                </Box>
                <Stack direction="row">
                    <Link href="https://www.linkedin.com/in/victor-alejandro-nunez-tobar/"><FaLinkedin style={{ fontSize: 30 }}/></Link>
                    <Link href="https://github.com/Skeiceee"><FaGithub style={{ fontSize: 30 }}/></Link>
                </Stack>
            </Card.Footer>
        </Card.Body>
    </Card.Root>
  )
}

export default Profile
