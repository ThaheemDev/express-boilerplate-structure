import { Response } from 'express';

interface GeneralResponse {
  response: Response;
  message: string;
  status: number;
  data?: unknown;
}

/**
 * Sends a general response with the specified status, message, and data.
 *
 * @param {GeneralResponse} options - The options for the general response.
 * @param {Response} options.response - The response object.
 * @param {string} options.message - The message to be sent in the response.
 * @param {number} options.status - The status code to be sent in the response.
 * @param {any} [options.data=null] - The data to be sent in the response.
 */
export const generalResponse = ({
  response,
  message,
  status,
  data = null,
}: GeneralResponse) =>
  response.status(status).json({
    status,
    message,
    data,
  });
