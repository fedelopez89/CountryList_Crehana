import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_COUNTRIES } from "../../apollo/queries";
import { Country } from "../../common/types";
import CountryList from "../CountryList/CountryList";

import * as S from "./styles";

const CountryFinder: React.FC = () => {
  const [ListOfCountries, setListOfCountries] = useState<Country[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  // Form States
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [selectedContinent, setSelectedContinent] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  const { loading, error } = useQuery(SEARCH_COUNTRIES, {
    onCompleted: (data) => {
      setListOfCountries(data.countries);
    },
  });

  useEffect(() => {
    setCountries(
      ListOfCountries.filter((country: any) => {
        return (
          country.currency?.includes(selectedCurrency) &&
          country.continent.name.includes(selectedContinent) &&
          country.name.toLowerCase().includes(enteredValue.toLowerCase())
        );
      })
      );
  }, [selectedCurrency, selectedContinent, enteredValue, ListOfCountries]);

  const onSelectChangeHandler = (type: string, value: string): void => {
    switch (type) {
      case "continent":
        setSelectedContinent(value);
        break;
      case "currency":
        setSelectedCurrency(value);
        break;
      default:
        break;
    }
  };

  const countryInputChangeHandler = (value: string): void => {
    setEnteredValue(value);
  };

  if (loading) return <div> {"Loading..."}</div>;
  if (error) return <>{`Error! ${error}`}</>;

  return (
    <>
      <S.SearchContainer data-testid="country-finder">
        <S.InputSearch>
          <input
            type="text"
            placeholder="Search a country..."
            value={enteredValue}
            onChange={(event) => countryInputChangeHandler(event.target.value)}
          ></input>
        </S.InputSearch>
        <S.FilterSearch>
          <label>
            Continent
            <select
              onChange={(e) =>
                onSelectChangeHandler("continent", e.target.value)
              }
            >
              <option value={""}></option>
              {Array.from(
                new Set(
                  ListOfCountries.map((country: any) => country.continent.name)
                )
              )
                .sort()
                .map((country: any, id) => (
                  <option key={id} value={country}>
                    {country}
                  </option>
                ))}
            </select>
          </label>
          <label>
            Currency
            <select
              onChange={(e) =>
                onSelectChangeHandler("currency", e.target.value)
              }
            >
              <option value=""></option>
              {Array.from(
                new Set(ListOfCountries.map((country: any) => country.currency))
              )
                .sort()
                .map((country: any, id) => (
                  <option key={id} value={country}>
                    {country}
                  </option>
                ))}
            </select>
          </label>
        </S.FilterSearch>
      </S.SearchContainer>
      <S.CountryList>
        <CountryList data={countries} />
      </S.CountryList>
    </>
  );
};

export default CountryFinder;
