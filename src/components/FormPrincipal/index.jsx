import imagemLogo from '../../images/funko-logo-principal.png';
import * as Styled from './styles';

export const FormPrincipal = () => {
  return (
    <Styled.Container>
      <img src={imagemLogo} alt="logo cor azul escrito funko com uma coroa na letra O" width={450} height={175} className="flutuante" />
    </Styled.Container>
  );
}
