export default function dataProcessService(response) {
  let data;
  if(response){
    const name = response.profile.data.name;
    const fund = response.fund.fund_limit[9].equityAmount;
    data = {
      'name': name ? name: 'test Name',
      'funds': fund ? fund: 'test Funds'
    }
  }
  return data;
}
