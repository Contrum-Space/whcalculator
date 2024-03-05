import './App.css';
import { Container, Grid, SimpleGrid } from '@mantine/core';
import WormholeSelect from './components/wormholeSelect/WormholeSelect';
import { useState } from 'react';
import MassSelect from './components/massselect/MassSelect';
import Calculate from './components/calculate/Calculate';
import JumpsLeft from './components/jumpsleft/JumpsLeft';

const PRIMARY_COL_HEIGHT = '89vh';

export function App() {
  const [mass, setMass] = useState(0);
  const [modifiedMass, setModifiedMass] = useState(0);
  const [massPassed, setMassPassed] = useState(0);

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-sm) / 2)`;

  console.log({mass, modifiedMass, massPassed, massLeft : modifiedMass - massPassed})

  return (
    <Container fluid my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
        <Grid gutter="sm">
          <Grid.Col mb='xl'>
            <Container fluid h={SECONDARY_COL_HEIGHT}>
              <WormholeSelect mass={mass} setMass={setMass} modifiedMass={modifiedMass} setModifiedMass={setModifiedMass} />
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
    </Container >
  );
}

export default App;
