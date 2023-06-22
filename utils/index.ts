import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    'X-RapidAPI-Key': '8339d99db8msh5c9b0085014cd10p146f69jsna853f8017701',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export function calculateCarRent(consumo: number, anoFabricacao: number) {
  const precoBaseDiario = 100; // Preço base diário do aluguel

  // Fator de ajuste com base no consumo de combustível
  let fatorConsumo: number;
  if (consumo <= 10) {
    fatorConsumo = 1.2;
  } else if (consumo <= 15) {
    fatorConsumo = 1;
  } else {
    fatorConsumo = 0.8;
  }

  // Fator de ajuste com base no ano de fabricação
  const anoReferencia = 2003; // Ano de referência para o cálculo
  const anosDeUso = anoReferencia - anoFabricacao;
  const fatorAnoFabricacao =
    anosDeUso >= 0 ? 1 - anosDeUso * 0.05 : 1 + Math.abs(anosDeUso) * 0.05;

  // Cálculo do preço do aluguel diário
  const precoAluguelDiario =
    precoBaseDiario * fatorConsumo * fatorAnoFabricacao;

  return precoAluguelDiario.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
