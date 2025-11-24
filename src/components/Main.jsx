import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import instituicoesEnsino from '../datasets/censoescolar.js';
import Carrossel from './Carrossel.jsx';
const Main = () => {
  let instituicoesEnsinoJson = [...instituicoesEnsino];
  return (
    <main>
      <Carrossel />
      {/* Cartões da IE */}
      <Container>
        <Row>
          {instituicoesEnsinoJson.map((instituicaoEnsino) => {
            return (
              <Col>
                <Card>
                  <Card.Img variant="top" src={instituicaoEnsino.urlImagem} />
                  <Card.Body>
                    <Card.Title>{instituicaoEnsino.nome}</Card.Title>
                    <Card.Text>
                      Município: {instituicaoEnsino.municipio}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default Main;
