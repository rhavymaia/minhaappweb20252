import { Button } from 'react-bootstrap';
import instituicoesEnsino from '../datasets/censoescolar.js';
import Carrossel from './Carrossel.jsx';
import InstituicoesEnsinoRankingCard from './InstituicoesEnsinoRankingCard.jsx';
const Main = () => {
  let instituicoesEnsinoJson = [...instituicoesEnsino];

  let incremento = 0;

  let incrementarHandleClick = () => {
    incremento++;
    console.log('clicou no butão!' + incremento);
  };

  return (
    <main>
      <Carrossel />
      <InstituicoesEnsinoRankingCard
        instituicoesEnsino={instituicoesEnsinoJson}
      />

      {incremento}
      <Button onClick={incrementarHandleClick}>Adicionar</Button>
    </main>
  );
};

export default Main;
