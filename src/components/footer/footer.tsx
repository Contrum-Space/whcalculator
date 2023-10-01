import { Container, Group, Anchor, Title, Divider } from '@mantine/core';
import classes from './footer.module.css';


export function Footer() {
    return (
        <div className={classes.footer}>
            <Divider />
            <Container fluid className={classes.inner}>
                <Title size={12} ml='auto'>Created By Contrum Inkunen</Title>
            </Container>
        </div>
    );
}