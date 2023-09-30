import './App.css';
import { Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';
import WormholeSelect from './components/wormholeSelect/WormholeSelect';

const PRIMARY_COL_HEIGHT = '89vh';

export function App() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-sm) / 2)`;

  return (
    <Container fluid my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
        <Grid gutter="sm">
          <Grid.Col>
            <Container fluid h={SECONDARY_COL_HEIGHT}>
              <WormholeSelect />
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
