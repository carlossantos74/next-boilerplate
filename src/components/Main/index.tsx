import * as S from './styles';

export type Props = {
  title?: string;
  description?: string;
};

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}: Props) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e react avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustrator
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com o código."
    />
  </S.Wrapper>
);

export default Main;
