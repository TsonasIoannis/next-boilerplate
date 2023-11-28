import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import { UI, useUI } from "./UiContext";
import Link from "next/link";

export default function MuiMainMenu() {
  const { ui, setContextUI } = useUI();

  const radios = [
    { name: "Bootstrap", value: "bootstrap" },
    { name: "Material UI", value: "mui" },
    { name: "Ant", value: "ant" },
  ];
  return (
    <>
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
          {radios.map((radio) => (
            <FormControlLabel
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
          <ListItem>Vestibulum pharetra lectus</ListItem>
        </List>
      </Container>
    </>
  );
}
