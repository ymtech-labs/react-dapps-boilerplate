import { Paper } from "@mantine/core";
import Cards from "@components/Cards";

function CardsPage() {
  return (
    <div>
      <Paper shadow="xs" p="md" radius={0} style={{ marginTop: "16px" }}>
        <Cards />
      </Paper>
    </div>
  );
}

export default CardsPage;
