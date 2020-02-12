import { Request, Response } from 'express';
import { catchErrors } from 'errors';

export const test = catchErrors((_req: Request, res: Response) => {
    res.status(200).send('Test');
});
