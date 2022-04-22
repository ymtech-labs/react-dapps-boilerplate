import { Text, Title } from "@mantine/core";

function TextAndTitleExample() {
  return (
    <div>
      <Title order={2}> Officiis doloribus nam dicta maiores.</Title>
      <Text size="lg" weight={700} underline transform="capitalize">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Text>
      <Text
        variant="gradient"
        gradient={{ from: "red", to: "blue", deg: 138 }}
        size="xl"
      >
        Cumem possimus autem molestias
      </Text>
      Debitis, veritatis eveniet iste dolorum quam nostrum excepturi voluptatem
      quia laudantium, inventore dolore.
    </div>
  );
}

export default TextAndTitleExample;
