import { Text } from "@nextui-org/react";
import book from '../assets/book.svg'

const Header = () => {
  return (
    <header className="header">
      <img alt="logo" src={book} style={{width: '36px'}} />
      <Text
        align="center"
        h1
        size={40}
        css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%", marginBottom:'10px'
        }}
        weight="bold"
      >
        LyricsBook
      </Text>
    </header>
  );
};

export default Header;
