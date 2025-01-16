import { Box, Card, For, Heading, Stack, Text } from "@chakra-ui/react"

const experiences = [
    {
        title: "Desarrollador FullStack",
        company: "GO Partners",
        date: "oct. 2022 - mar. 2024",
        description: [
            "Correción de errores en el sistema MásConectados del Banco de Chile.",
            "Creación de APIs REST para entrega de datos para Análisis, entre otras funcionalidades."
        ]
    },
    {
        position: "Desarrollador Web",
        company: "apanio.com",
        date: "ago. 2021 - jun. 2022",
        description: [
            "Implementación de varios métodos de pagos.",
            "Revisa y elimina estilos obsoletos o no utilizados. Mantén el código limpio y organizado.",
            "Creación de varias funcionalidades."
        ]
    },
    {
        position: "Analista de desarollo",
        company: "Activa Research",
        date: "feb. 2021 - abr. 2021",
        description: [
            "Manejo de encuestas con Excel y base de datos."
        ]
    },
    {
        position: "Programador",
        company: "VozDigital",
        date: "mar. 2019 - nov. 2020",
        description: [
            "Se creó un Sistema Web de cero de aproximadamente 15 modulos, como facturación, llamadas activas y otro informes."
        ]
    }
]

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
