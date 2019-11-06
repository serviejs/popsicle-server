import { toFetch } from "popsicle";
import { HttpResponse, middleware } from "popsicle/dist/node";
import { compose } from "throwback";
import { Request } from "servie/dist/node";
import { server } from "./index";

describe("popsicle server", () => {
  const fetch = toFetch(
    compose<Request, HttpResponse>([
      server((req, res) => {
        res.write(`${req.method} ${req.url}`);
        res.end();
      }),
      middleware
    ]),
    Request
  );

  it("should automatically mount the server", async () => {
    const res = await fetch("/foo");

    expect(await res.text()).toEqual("GET /foo");
  });
});
