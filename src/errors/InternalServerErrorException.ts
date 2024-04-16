import { HttpException } from './HttpException';

/**
 * Represents an internal server error exception.
 * This exception is thrown when there is an internal server error.
 */
export class InternalServerErrorException extends HttpException {
    /**
     * Creates an instance of InternalServerErrorException.
     * @param message - The error message.
     */
    constructor(message: string) {
        super(404, message);
    }
}
