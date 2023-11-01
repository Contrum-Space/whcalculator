import './App.css';
import { Container, Grid, SimpleGrid, Image } from '@mantine/core';
import WormholeSelect from './components/wormholeSelect/WormholeSelect';
import { useState } from 'react';
import MassSelect from './components/massselect/MassSelect';
import Calculate from './components/calculate/Calculate';
import JumpsLeft from './components/jumpsleft/JumpsLeft';

const PRIMARY_COL_HEIGHT = '89vh';

export function App() {
  const [mass, setMass] = useState(0);
  const [modifiedMass, setModifiedMass] = useState(0)
  const [finalMass, setFinalMass] = useState(0);

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-sm) / 2)`;

  const child = <Image src={window.location.origin + '/advert.png'} height='100%' width='100%' alt='advert image' />

  return (
    <Container fluid my="md">
      <Grid mb='xl'>
        <Grid.Col span={{ base: 8, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 8, xs: 6 }}>{child}</Grid.Col>
      </Grid>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
        <Grid gutter="sm">
          <Grid.Col mb='xl'>
            <Container fluid h={SECONDARY_COL_HEIGHT}>
              <WormholeSelect mass={mass} setMass={setMass} modifiedMass={modifiedMass} setModifiedMass={setModifiedMass} />
            </Container>
          </Grid.Col>
          <Grid.Col span={6}>
            <MassSelect mass={modifiedMass} setFinalMass={setFinalMass} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Calculate finalMass={finalMass} />
          </Grid.Col>
        </Grid>
        <JumpsLeft mass={finalMass} />
      </SimpleGrid>
    </Container >
  );
}

export default App;
