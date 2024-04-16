import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';
import { generalResponse } from '../utils/generalResponse';

/**
 * Middleware function to validate the request against a given schema.
 * @param schema - The schema to validate the request against.
 * @returns A middleware function that validates the request.
 */
const ValidateRequest =
  (schema: AnySchema) =>
  async (req: Request, response: Response, next: NextFunction) => {
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { abortEarly: false },
      );
      next();
    } catch (err: any) {
      generalResponse({
        response,
        status: 400,
        message: 'Validation Error',
        data: err.errors,
      });
    }
  };

export default ValidateRequest;
