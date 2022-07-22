import { Text } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="App">
      <Text
        align="center"
        h1
        size={40}
        css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        Lyrics
      </Text>
    </header>
  );
};

export default Header;
