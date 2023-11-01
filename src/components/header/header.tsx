import { Container, Burger, Title, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';


export function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <header className={classes.header}>
            <Container fluid size="md" py='md' px={200} className={classes.inner}>
                <Title c="green" size={28}>Wormhole Mass Calculator</Title>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
            <Divider />
        </header>
    );
}