'use server';

export async function fetchTokenPrice(tokenName: string) {
  try {
    const response = await fetch(`https://api-osmosis.imperator.co/tokens/v2/price/${tokenName}`, {
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
    return data.price;
  } catch (error) {
    console.error(`Error fetching price for ${tokenName}:`, error);
    return null;
  }
}