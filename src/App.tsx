import "./App.css";
import { Container, Grid, Mark, SimpleGrid, Stack, Title } from "@mantine/core";
import WormholeSelect from "./components/wormholeSelect/WormholeSelect";
import { useState } from "react";
import MassSelect from "./components/massselect/MassSelect";
import Calculate from "./components/calculate/Calculate";
import JumpsLeft from "./components/jumpsleft/JumpsLeft";

const PRIMARY_COL_HEIGHT = "89vh";

export function App() {
  const [mass, setMass] = useState(0);
  const [modifiedMass, setModifiedMass] = useState(0);
  const [massPassed, setMassPassed] = useState(0);

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-sm) / 2)`;

  console.log({
    mass,
    modifiedMass,
    massPassed,
    massLeft: modifiedMass - massPassed,
  });

  return (
    <>
      {/* <Stack bg='#FFE06677' w='100vw' h={75} ta='center' justify='center'>
     <Title c='black'><Mark color='orange' px='md'>eve-whmass.space</Mark> is now <Mark color='orange' px='md'>whmass.contrum.space</Mark></Title>
    </Stack> */}
      <Container fluid my="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
          <Grid gutter="sm">
            <Grid.Col mb="xl">
              <Container fluid h={SECONDARY_COL_HEIGHT}>
                <WormholeSelect
                  mass={mass}
                  setMass={setMass}
                  modifiedMass={modifiedMass}
                  setModifiedMass={setModifiedMass}
                />
              </Container>
            </Grid.Col>
            <Grid.Col span={6}>
              <MassSelect setMassPassed={setMassPassed} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Calculate modifiedMass={modifiedMass} massPassed={massPassed} />
            </Grid.Col>
          </Grid>
          <JumpsLeft mass={modifiedMass} massPassed={massPassed} />
        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
