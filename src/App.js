import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ResultadoLyric from "./components/ResultadoLyric";
import { Container, Grid } from "@nextui-org/react";

function App() {
  return (
    <Container fluid="true" className="container">
      <Header />
      <Grid.Container display="flex">
        <Formulario />
        <ResultadoLyric />
      </Grid.Container>
    </Container>
  );
}

export default App;
