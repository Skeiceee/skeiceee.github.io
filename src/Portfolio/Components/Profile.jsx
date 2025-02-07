import {
  Badge,
  Box,
  Button,
  Card,
  Link,
  Stack,
  Tooltip,
  TooltipContent,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

import { skills } from "@/data/skills";

const Profile = () => {
  return (
    <Card.Root flexDirection="row" overflow="hidden" shadow="xl">
      <Card.Body>
        <Box
          rounded={6}
          bgImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACJJREFUKFNjZCASMBKpjmEwKfT19f2/efNmDCcNJjfiClcA7B8EC5lHMzwAAAAASUVORK5CYII=)"
        >
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
          Soy un desarrollador web con 5 años de experiencia en la creación de
          soluciones robustas y escalables. Mi enfoque principal es el
          desarrollo backend con PHP y Laravel, complementado con habilidades en
          frontend utilizando Javascript/jQuery, Bootstrap y Tailwind CSS. He
          gestionado bases de datos MySQL y PostgreSQL, y utilizo Git para
          optimizar el flujo de trabajo. Mi experiencia en telecomunicaciones,
          e-commerce y recursos humanos me ha permitido desarrollar una visión
          integral de las necesidades de cada sector. Adicionalmente, cuento con
          conocimientos en Python (Pandas) para la generación de informes y he
          implementado sistemas de pago como Webpay.
        </Card.Description>

        <Card.Footer justifyContent="space-between" marginTop={10} padding={0}>
          <Box
            direction="row"
            display="flex"
            flexWrap="wrap"
            maxWidth={400}
            gap={2}
          >
            {skills.map((skill, index) => {
              return (
                <Badge key={index} colorPalette="green">
                  {skill}
                </Badge>
              );
            })}
          </Box>
          <Stack direction="row">
            <Link href="https://www.linkedin.com/in/victor-alejandro-nunez-tobar/">
              <FaLinkedin style={{ fontSize: 30 }} />
            </Link>
            <Link href="https://github.com/Skeiceee">
              <FaGithub style={{ fontSize: 30 }} />
            </Link>
          </Stack>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default Profile;
