import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  low: number;
  average: number;
  high: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await fetch(
    `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.ETHERSCAN_API_KEY}`
  );

  const data = await response.json();

  res.status(200).json({
    low: parseInt(data.result.SafeGasPrice),
    average: parseInt(data.result.ProposeGasPrice),
    high: parseInt(data.result.FastGasPrice),
  });
};

export default handler;
