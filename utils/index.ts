export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '8339d99db8msh5c9b0085014cd10p146f69jsna853f8017701',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
