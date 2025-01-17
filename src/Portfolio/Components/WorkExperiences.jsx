import { Box, Card, For, Heading, Stack, Text } from "@chakra-ui/react"

import { experiences } from "@/data/experiences"

const WorkExperiences = () => {
    
  return (
    <Stack marginBottom={10}>

        <For each={experiences}>
            {(experience, index) => (
                <Stack key={index} marginTop={10} shadow="md" rounded="md">	
                    <Card.Root size="lg">
                        <Card.Header>
                            <Heading size="md">{experience.position}</Heading>
                            <Text>{experience.company} - {experience.date}</Text>
                        </Card.Header>
                        <Card.Body color="fg.muted">
                            <Box as="ul" listStyleType="circle" paddingLeft={8}>
                            {
                                experience.description.map((desc, index) => {
                                    return <li key={index}>{desc}</li>
                                })
                            }
                            </Box>
                        </Card.Body>
                    </Card.Root>
                </Stack>
            )}
        </For>

    </Stack>
  )
}

export default WorkExperiences
