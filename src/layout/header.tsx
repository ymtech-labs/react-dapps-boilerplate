import {
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

import { useState } from "react";

import LightDarkButton from "@components/LightDarkButton";
import { Link } from "react-router-dom";

function headerLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Header
      style={{ display: "flex", justifyContent: "space-between" }}
      height={70}
      p="md"
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          size="lg"
          transform="uppercase"
        >
          Tuto React - Mantine
        </Text>
      </MediaQuery>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Text component={Link} variant="link" to="/">
          Home
        </Text>
        <Text component={Link} variant="link" to="/examples">
          Examples
        </Text>
        <LightDarkButton />
      </div>
    </Header>
  );
}

export default headerLayout;
