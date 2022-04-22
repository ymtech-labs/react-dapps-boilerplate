import { useState } from "react";
import {
  AppShell,
  Navbar,
  Footer,
  Text,
  useMantineTheme,
  Paper,
} from "@mantine/core";

import { Link, Outlet } from "react-router-dom";

import HeaderLayout from "@layout/header";
import TextAndTitleExample from "@components/TextAndTitleExample";

export default function Layout() {
  const theme = useMantineTheme();
  const [opened] = useState(false);
  return (
    <Paper>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        header={<HeaderLayout />}
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 200 }}
          >
            <Navbar.Section>
              <b>Navigation</b>
            </Navbar.Section>
            {/* Grow section will take all available space that is not taken by first and last sections */}
            <Navbar.Section grow mt="lg">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text component={Link} variant="link" to="/examples/cards">
                  Cards
                </Text>
                <Text component={Link} variant="link" to="/examples/table">
                  Table
                </Text>
                <Text component={Link} variant="link" to="/examples/forms">
                  Forms
                </Text>
              </div>
            </Navbar.Section>
            {/* Last section with normal height (depends on section content) */}
            <Navbar.Section>Footer section</Navbar.Section>
          </Navbar>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
      >
        <Outlet />
        <TextAndTitleExample />
      </AppShell>
    </Paper>
  );
}
