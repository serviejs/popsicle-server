import { CommonRequest, CommonResponse } from "servie/dist/common";
import { ServerAddress } from "server-address";

/**
 * Create a request interceptor that listens and disconnects automatically.
 */
export function server(...args: ConstructorParameters<typeof ServerAddress>) {
  const server = new ServerAddress(...args);

  return async function serverMiddleware<
    T extends CommonRequest,
    U extends CommonResponse
  >(req: T, next: () => Promise<U>): Promise<U> {
    server.listen();

    req.url = server.url(req.url);

    try {
      return await next();
    } finally {
      server.close();
    }
  };
}
