'use server';

export async function fetchBalances() {
    const networks = [
        {
          name: "atom",
          network: "cosmoshub",
          symbol: "ATOM",
          icon: "/validator_chains/cosmos.png",
          addr: "cosmos1p9xp6nzfrdzfma032afzpfwm9w0c4qy9wxfs58pf27eyzjluf7jsznxdpx",
          fetchFn: fetchCosmosBalance,
        },
        {
          name: "stargaze",
          network: "stargaze",
          symbol: "STARS",
          icon: "/validator_chains/stars.png",
          addr: "stars1y0enax8s6uxn8g5cudcc5mq30ycl0msgg0us0ewzyvlj3g66tmxq8l35eg",
          fetchFn: fetchStargazeBalance,
        },
        {
          name: "omniflix",
          network: "omniflix",
          symbol: "FLIX",
          icon: "/validator_chains/omni.png",
          addr: "omniflix19z3h463xmkz66vdq8tcpk986kvecjyqxy4ywtdzu4qqe2vjyz69sy0u32r",
          fetchFn: fetchOmniflixBalance,
        },
      ];
    
      const dataset = await Promise.all(
        networks.map(async (network) => {
          const quantity = await network.fetchFn();
          return {
            name: network.name,
            network: network.network,
            symbol: network.symbol,
            icon: network.icon,
            addr: network.addr,
            quantity: quantity ? parseFloat(quantity) : 0,
          };
        })
      );
    
      return dataset;
}

async function fetchCosmosBalance() {
  return fetchData("https://cosmoshub-api.gatadao.com/cosmos/staking/v1beta1/delegations/cosmos1p9xp6nzfrdzfma032afzpfwm9w0c4qy9wxfs58pf27eyzjluf7jsznxdpx")
}

async function fetchOmniflixBalance() {
    return fetchData("https://omniflix-api.gatadao.com/cosmos/staking/v1beta1/delegations/omniflix19z3h463xmkz66vdq8tcpk986kvecjyqxy4ywtdzu4qqe2vjyz69sy0u32r")
  }

  async function fetchStargazeBalance() {
    return fetchData("https://stargaze-api.gatadao.com/cosmos/staking/v1beta1/delegations/stars1y0enax8s6uxn8g5cudcc5mq30ycl0msgg0us0ewzyvlj3g66tmxq8l35eg")
  }

  async function fetchData(url: string) {
    try {
        const response = await fetch(url, {
          headers: {
            Accept: 'application/json',
            method: 'GET',
          },
          next: {
            revalidate: 60,
          }
        });
    
        if (!response.ok) {
          throw new Error(`Failed to fetch price for `);
        }
    
        const data = await response.json();

        const totalBalance = data.delegation_responses.reduce(
          (sum: number, response: any) => sum + parseFloat(response.balance.amount),
          0
        );
    
        return totalBalance;
      } catch (error) {
        console.error(`Error fetching price for :`, error);
        return null;
      }
  }