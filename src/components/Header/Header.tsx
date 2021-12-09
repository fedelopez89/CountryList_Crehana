import * as S from "./styles";

type HeaderProps = {
  title: string;
  image?: string;
};

const Header: React.FC<HeaderProps> = ({ title, image }) => (
  <>
    <S.Header>{title}</S.Header>
  </>
);

export default Header;
