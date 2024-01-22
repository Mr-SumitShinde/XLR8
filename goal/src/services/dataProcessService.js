export default function dataProcessService(response) {
  const name = response;
  const fund = response.fund
  const data = {
    'name': name,
    'funds': fund
  }
  console.log(data);
  return data;
}
