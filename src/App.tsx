import { Routes, Route } from "react-router-dom";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

import Layout from "@layout/default";

import Home from "@pages/index";
import CardsPage from "@pages/CardsPage";
import TablePage from "@pages/TablePage";
import FormsPage from "@pages/FormsPage";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Layout />}>
              <Route path="/examples/cards" element={<CardsPage />} />
              <Route path="/examples/table" element={<TablePage />} />
              <Route path="/examples/forms" element={<FormsPage />} />
            </Route>
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
