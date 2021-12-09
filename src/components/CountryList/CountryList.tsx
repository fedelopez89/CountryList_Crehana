import { Link } from "react-router-dom";
import { Country } from "../../common/types";

import * as S from "./styles";

type CountryListProps = {
  data: Country[];
};

const CountryList: React.FC<CountryListProps> = (data) => {
  return (
    <>
      {data.data.map(
        ({ name, currency, code, continent, capital, emoji }: any, i: any) => {
          return (
            <S.CountryItem key={i}>
              <S.CountryName>{`${emoji} ${name}`}</S.CountryName>
              <Link
                to={`/detail/${name}/${code}/${currency}/${continent.name}/${capital}/`}
              >
                {`View details`}
              </Link>
            </S.CountryItem>
          );
        }
      )}
    </>
  );
};

export default CountryList;
