import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { Container } from '@nextui-org/react';

function App() {
  return (
    <Container className="container"
    >
      <Header />
      <Formulario />

    </Container>
  );
}

export default App;
