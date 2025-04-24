"use server";

export async function fetchCoingeckoPrice() {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=yield-gata&vs_currencies=usd`,
      {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch price for Yield Gata`);
    }

    const data = await response.json();
    return data["yield-gata"].usd;
  } catch (error) {
    console.error(`Error fetching price for Yield Gata:`, error);
    return null;
  }
}
