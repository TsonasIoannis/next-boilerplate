import {
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  Radio,
  RadioGroup,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { UI, useUI } from "./UiContext";
import Link from "next/link";
import { useMemo } from "react";

export default function MuiMainMenu() {
  const { ui, setContextUI } = useUI();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const radios = [
    { name: "Bootstrap", value: "bootstrap" },
    { name: "Material UI", value: "mui" },
    { name: "Ant", value: "ant" },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {" "}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Current UI library: {ui}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={ui}
            onChange={(event) => {
              setContextUI(event.target.value as UI);
            }}
          >
            {radios.map((radio, idx) => (
              <FormControlLabel
                key={idx}
                value={radio.value}
                label={radio.name}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Container>
          <List>
            <ListItem>
              <ListItemButton>
                <Link href="/docker">Docker</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link href="/ui">UI</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link href="/state">State Management</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              {" "}
              <ListItemButton>
                <Link href="/authentication">Authentication</Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
