import { Paper } from "@mantine/core";
import ChipsExample from "@components/ChipsExample";
import InputExample from "@components/InputExample";
import Buttons from "@components/Buttons";

function FormsPage() {
  return (
    <div>
      <Paper shadow="xs" p="md" radius={0} style={{ marginTop: "16px" }}>
        <ChipsExample />
        <InputExample />
        <Buttons />
      </Paper>
    </div>
  );
}

export default FormsPage;
