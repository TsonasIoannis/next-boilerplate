import { UI, useUI } from "./UiContext";
import Link from "next/link";
import { Layout, List, Radio } from "antd";

const { Header, Content } = Layout;

export default function AntMainMenu() {
  const { ui, setContextUI } = useUI();

  const radios = [
    { name: "Bootstrap", value: "bootstrap" },
    { name: "Material UI", value: "mui" },
    { name: "Ant", value: "ant" },
  ];
  return (
    <>
      <Header style={{ backgroundColor: "white" }}>
        Current UI library: {ui}
      </Header>
      <Content style={{ backgroundColor: "white" }}>
        <Radio.Group
          value={ui}
          onChange={(event) => {
            setContextUI(event.target.value as UI);
          }}
        >
          {radios.map((radio, idx) => (
            <Radio value={radio.value} key={idx}>
              {radio.name}
            </Radio>
          ))}
        </Radio.Group>

        <List>
          <List.Item>
            <Link href="/docker">Docker</Link>
          </List.Item>
          <List.Item>
            <Link href="/ui">UI</Link>
          </List.Item>
          <List.Item>
            <Link href="/state">State Management</Link>
          </List.Item>
          <List.Item>
            <Link href="/authentication">Authentication</Link>
          </List.Item>
        </List>
      </Content>
    </>
  );
}
