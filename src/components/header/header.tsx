import {
  Anchor,
  Box,
  Button,
  Divider,
  Drawer,
  Group,
  HoverCard,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./header.module.css";

export default function Header() {
  return (
    <Box
      style={{
        zIndex: "9999",
      }}
    >
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image
            src="/logo.png"
            h={75}
            w="auto"
            className={classes.logo}
          ></Image>

          <Stack ml="auto" gap={2}>
            <Text ta="center" fw='bold'>More tools</Text>
            <Divider orientation='horizontal' />
            <Group>
              <Anchor
                href="https://maps.contrum.space"
                target="_blank"
                c="yellow"
              >
                Content Finder
              </Anchor>
              <HoverCard width='auto' shadow="md">
                <HoverCard.Target>
                  <Anchor c='yellow'>Structure Watch</Anchor>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    Coming Soon
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </Stack>
        </Group>
      </header>
    </Box>
  );
}
