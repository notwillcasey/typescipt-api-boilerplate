import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

  const getRepos = async function (req: Request, res: Response) {

    const user: string = req.params.user;
    const url: string = ``;
    const options: object = {
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${process.env.TOKEN}`
      }
    };

    res.status(200).send('okay');

    // const response: AxiosResponse = await axios.get()

  }

export default { getRepos }