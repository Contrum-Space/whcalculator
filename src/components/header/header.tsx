import { useState } from 'react';
import { Container, Group, Burger, Title, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';

const links = [
    { link: 'https://github.com/purry03/whcalulator/', label: 'Github' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            target='_blank'
            rel='noreferrer'
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container fluid size="md" py='md' px={200} className={classes.inner}>
                <Title c="green" size={28}>Wormhole Mass Calculator</Title>
                <Group gap={25} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
            <Divider />
        </header>
    );
}