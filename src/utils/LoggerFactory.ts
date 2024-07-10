import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize } = format;

// Custom format for logs
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create a Winston logger
const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp(),
    customFormat
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: 'Trace.log' }), // Log to file
  ],
});

export default logger;