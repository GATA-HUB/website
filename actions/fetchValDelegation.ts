"use server";

export async function fetchValDelegation(network: string, addr: string) {
    try {
      const response = await fetch(`https://${network}-api.gatadao.com/cosmos/staking/v1beta1/validators/${addr}`, {
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
      return data.validator.tokens / 1_000_000;
    } catch (error) {
      console.error(`Error fetching price for ${network}:`, error);
      return null;
    }
  }
  
