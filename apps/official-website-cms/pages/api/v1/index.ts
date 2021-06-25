import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.status(200).send('This is index page');
};
