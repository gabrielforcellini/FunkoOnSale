import imagemLogo from '../../images/funko-logo-principal.png';
import { Button } from '../Button';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

export const FormPrincipal = ({ props }) => {
  let navigate = useNavigate();

  const LoginClick = () => {
    navigate("/login");
  }

  const CadastroClick = () => {
    navigate("cadastrar-usuario");
  }

  return (
    <Styled.Container>
      <img src={imagemLogo} alt="logo cor azul escrito funko com uma coroa na letra O" width={450} height={175} className="flutuante" />
      <Button text={"Login"} onClick={LoginClick} />
      <Button text={"Cadastrar-se"} onClick={CadastroClick} />
    </Styled.Container>
  );
}
