import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

  const getRepos = async function (req: Request, res: Response) {

    res.status(200).send('successful');

  }

export default { getRepos };