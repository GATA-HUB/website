'use server';

export async function fetchStakedAssets() {
  const networks = [
    {
      network: "cosmoshub",
      symbol: "ATOM",
      icon: "/images/validators/cosmos.png",
      addr: "cosmos1vmjgpgsy7v7t7xvwwgcya8thuufuyh2a9x7npu",
      fetchFn: fetchAssetBalance,
    },
    {
      network: "atomone",
      symbol: "ATONE",
      icon: "/images/validators/atomone.png",
      addr: "atone1vmjgpgsy7v7t7xvwwgcya8thuufuyh2atxz5hy",
      fetchFn: fetchAssetBalance,
    },
    {
      network: "akash",
      symbol: "AKT",
      icon: "/images/validators/akt.png",
      addr: "akash1vmjgpgsy7v7t7xvwwgcya8thuufuyh2agan5cx",
      fetchFn: fetchAssetBalance,
    },
    {
      network: "passage",
      symbol: "PASSAGE",
      icon: "/images/validators/passage.png",
      addr: "passage1vmjgpgsy7v7t7xvwwgcya8thuufuyh2agan5cx",
      fetchFn: fetchAssetBalance,
    },
    {
      network: "stargaze",
      symbol: "STARS",
      icon: "/images/validators/stars.png",
      addr: "stars1vmjgpgsy7v7t7xvwwgcya8thuufuyh2a36fw2d",
      fetchFn: fetchAssetBalance,
    },
    // {
    //   network: "omniflix",
    //   symbol: "FLIX",
    //   icon: "/images/validators/omni.png",
    //   addr: "omniflix19z3h463xmkz66vdq8tcpk986kvecjyqxy4ywtdzu4qqe2vjyz69sy0u32r",
    //   fetchFn: fetchAssetBalance,
    // },
    {
      network: "osmosis",
      symbol: "OSMO",
      icon: "/images/validators/osmosis.png",
      addr: "osmo1d59z4jdgqmdvjl2rgfx5vxklenkszctt5j6pqlqslmwncr5mdlmq3je8cp",
      fetchFn: fetchAssetBalance,
    },
  ];

  const dataset = await Promise.all(
    networks.map(async (network) => {
      const quantity = await network.fetchFn(network.network, network.addr);
      return {
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

async function fetchAssetBalance(network: string, addr: string) {
  return fetchData(`https://${network}-api.gatadao.com/cosmos/staking/v1beta1/delegations/${addr}`)
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