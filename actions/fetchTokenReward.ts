"use server";

export async function fetchTokenReward( network:string, addr:string ) {
    console.log('from srever: ', network, addr)
    try {
        const response = await fetch(`https://${network}-api.gatadao.com/cosmos/distribution/v1beta1/delegators/${addr}/rewards`, {
          headers: {
            Accept: 'application/json',
            method: 'GET',
          },
          next: {
            revalidate: 60,
          }
        });
    
        if (!response.ok) {
          throw new Error(`Failed to fetch price for ${network}`);
        }
    
        const data = await response.json();
        const formateData = data.total[data.total.length - 1].amount / 1000000;
        return formateData
      } catch (error) {
        console.error(`Error fetching price for ${network}:`, error);
        return null;
      }
}