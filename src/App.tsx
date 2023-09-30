import './App.css';
import { Badge, Container, Grid, Group, NativeSelect, SimpleGrid, Skeleton, Title, rem } from '@mantine/core';
import wormholesJSON from './data/wormholes.json';
import { useEffect, useState } from 'react';
import { numberWithCommas } from './util/format';

const PRIMARY_COL_HEIGHT = '89vh';

export function App() {
  const [modifiedMass, setModifiedMass] = useState(0);
  const [mass, setMass] = useState(0);
  const [wormhole, setWormhole] = useState("");

  const [masses, setMasses] = useState<{ label: string, value: string }[]>([]);
  const [wormholes, setWormholes] = useState<string[]>([]);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-sm) / 2)`;

  useEffect(() => {

    // initialise wormhole name list
    setWormholes(wormholesJSON.map((wormhole) => {
      return wormhole.Name;
    }));


    // initialise wormhole mass list
    let masses: string[] = [];
    for (const wormhole of wormholesJSON) {
      if (!masses.includes(wormhole.maxStableMass)) {
        masses.push(wormhole.maxStableMass);
      }
    }

    const sortedMasses = masses.map((mass) => parseInt(mass)).sort((a, b) => a - b);;

    setMasses(sortedMasses.map((mass) => {
      return {
        label: (numberWithCommas(mass)).toString(),
        value: mass.toString()
      }
    }
    ));
  }, [])

  useEffect(() => {
    for (const wh of wormholesJSON) {
      if (wh.Name === wormhole) {
        setMass(parseInt(wh.maxStableMass));
        setModifiedMass(parseInt(wh.maxStableMass));
        break;
      }
    }
  }, [wormhole])

  function setModifier(modifier: string) {
    switch (modifier) {
      case 'Fresh':
        setModifiedMass(mass);
        break;
      case 'Reduced':
        setModifiedMass(mass * 0.5);
        break;
      case 'Critical':
        setModifiedMass(mass * 0.1);
        break;
    }
  }

  return (
    <Container fluid my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
        <Grid gutter="sm">
          <Grid.Col>
            <Container fluid h={SECONDARY_COL_HEIGHT}>
              <Title size={24} mb='md'>Wormhole</Title>
              <NativeSelect radius="md" label="Name" description="Wormhole Code" onChange={(event) => setWormhole(event.currentTarget.value)} data={wormholes} />
              <Title size={18} my='md' ta='center'>OR</Title>
              <NativeSelect radius="md" label="Mass" description="Wormhole Mass" onChange={(event) => setMass(parseInt(event.currentTarget.value))} mb='md' data={masses} />
              <NativeSelect radius="md" mb='xl' label="Mass Modifier" description="Wormhole State" onChange={(event) => setModifier(event.target.value)} data={["Fresh", "Reduced", "Critical"]} />
              <Group>
                <Badge color="green" variant='light'>Original Mass : {numberWithCommas(mass)} Kg</Badge>
                <Badge color="green" ml='auto' variant='light'>Selected Mass : {numberWithCommas(modifiedMass)} Kg</Badge>
              </Group>
            </Container>
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      </SimpleGrid>
    </Container >
  );
}

export default App;
