/**
 * Logs an informational message with an optional object.
 *
 * @param namespace - The namespace of the log message.
 * @param message - The log message.
 * @param object - An optional object to be logged along with the message.
 */
const info = (namespace: string, message: string, object?: unknown) => {
  if (object) {
    console.info(
      `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
      object,
    );
  } else {
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
  }
};

/**
 * Logs a warning message with an optional object.
 *
 * @param namespace - The namespace of the log message.
 * @param message - The log message.
 * @param object - An optional object to be logged along with the message.
 */
const warn = (namespace: string, message: string, object?: unknown) => {
  if (object) {
    console.warn(
      `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`,
      object,
    );
  } else {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
  }
};

/**
 * Logs an error message with an optional object.
 *
 * @param namespace - The namespace of the log message.
 * @param message - The log message.
 * @param object - An optional object to be logged along with the message.
 */
const error = (namespace: string, message: string, object?: unknown) => {
  if (object) {
    console.error(
      `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`,
      object,
    );
  } else {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
  }
};

/**
 * Logs a debug message with an optional object.
 *
 * @param namespace - The namespace of the log message.
 * @param message - The log message.
 * @param object - An optional object to be logged along with the message.
 */
const debug = (namespace: string, message: string, object?: unknown) => {
  if (object) {
    console.debug(
      `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
      object,
    );
  } else {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};

/**
 * Returns the current timestamp in ISO string format.
 *
 * @returns The current timestamp in ISO string format.
 */
const getTimeStamp = (): string => {
  return new Date().toISOString();
};

export default {
  info,
  warn,
  error,
  debug,
};
