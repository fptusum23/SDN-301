
import { LoggerMiddleware } from "./loggerMiddleware";
import { QueryMiddleware } from "./queryMiddleware-mongo";


const loggerMiddleware = new LoggerMiddleware();
const queryMiddleware = new QueryMiddleware()
export {
  loggerMiddleware,
  queryMiddleware
};
