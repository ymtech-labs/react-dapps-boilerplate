import React from 'react';
import { Card, Grid, Image, Group, Text, Badge, Button, useMantineTheme } from '@mantine/core';

function Cards() {
const theme = useMantineTheme();
  return (
    <Grid>
      <Grid.Col sm={12} md={4} lg={4}>   
        <Card shadow="sm" p="lg">
            <Card.Section>
            <Image src="https://fakeimg.pl/250x100/" height={160} alt="Norway" />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
                On Sale
            </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
            Book classic tour now
            </Button>
        </Card>
      </Grid.Col>
      <Grid.Col sm={12} md={4} lg={4}>   
        <Card shadow="sm" p="lg">
            <Card.Section>
            <Image src="https://fakeimg.pl/250x100/" height={160} alt="Norway" />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
                On Sale
            </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
            Book classic tour now
            </Button>
        </Card>
      </Grid.Col>
      <Grid.Col sm={12} md={4} lg={4}>   
        <Card shadow="sm" p="lg">
            <Card.Section>
            <Image src="https://fakeimg.pl/250x100/" height={160} alt="Norway" />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
                On Sale
            </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
            Book classic tour now
            </Button>
          </Card>
    </Grid.Col>

    </Grid>
  )
}

export default Cards