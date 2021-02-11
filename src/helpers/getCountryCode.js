const getCountryCode = (country, codes) => {
  let countryCode;
  countryCode = codes.filter((code) => code.name === country);
  return countryCode[0].code.toLowerCase();
};

export default getCountryCode;
