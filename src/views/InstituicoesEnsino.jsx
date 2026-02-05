import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from 'react-bootstrap';
import { IoMdAdd } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

import instituicoesEnsinoDataSet from '../datasets/censoescolar';

const InstituicoesEnsino = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={9}>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Instituição Ensino
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Nome da Instituição de Ensino"
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={3}>
          <Button className="me-2" variant="primary">
            <IoSearchSharp />
          </Button>
          <Button variant="primary" onClick={handleShow}>
            <IoMdAdd />
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Instituição de Ensino</th>
            <th>Matrículas</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {instituicoesEnsinoDataSet.map((instituicaoEnsino, i) => {
            return (
              <tr>
                <td>{++i}</td>
                <td>{instituicaoEnsino.nome}</td>
                <td>{instituicaoEnsino.matriculas}</td>
                <td>{instituicaoEnsino.municipio}</td>
                <td>{instituicaoEnsino.estado}</td>
              </tr>
            );
          })}
          {/*  */}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default InstituicoesEnsino;
