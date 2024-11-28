'use server';

export async function fetchTokenPriceV2(tokenName: string) {
  try {
    const response = await fetch(`https://osmosis-api.gatadao.com/tokens/v2/${tokenName}`, {
      headers: {
        Accept: 'application/json',
        method: 'GET',
      },
      next: {
        revalidate: 60,
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch price for ${tokenName}`);
    }

    const data = await response.json();
    
    for (let i = 0; i < data.length; i++) {
      if (data[i].price && data[i].price !== 0) {
        return data[i].price;
      }
    }
  } catch (error) {
    console.error(`Error fetching price for ${tokenName}:`, error);
    return null;
  }
}
