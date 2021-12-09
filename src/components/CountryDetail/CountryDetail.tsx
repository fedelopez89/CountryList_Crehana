import { useParams } from "react-router";
import { Link } from "react-router-dom";

import * as S from "./styles";

const CountryDetail: React.FC = () => {
  const { name, code, currency, continentName, capital } = useParams();
  return (
    <S.CountryDetails>
      <S.CountryName>{`${name}`}</S.CountryName>
      <S.CountryDetail>{`Continent: ${continentName}`}</S.CountryDetail>
      <S.CountryDetail>{`Capital: ${capital}`}</S.CountryDetail>
      <S.CountryDetail>{`Currency: ${currency}`}</S.CountryDetail>
      <S.CountryDetail>{`Code: ${code}`}</S.CountryDetail>
      <S.LinkMainPage>
        <Link to={`/`}>{`Main Page`}</Link>
      </S.LinkMainPage>
    </S.CountryDetails>
  );
};

export default CountryDetail;
