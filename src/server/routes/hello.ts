import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono().get(
  "/hello",
  // zValidator(
  //   "param",
  //   z.object({
  //     slug: z.string(),
  //     moras: z.string()
  //   })
  // ),
  (c) => {
    // const { slug, moras } = c.req.valid("param");

    // console.log({slug,moras});
    

    return c.json({ message: "Hello, Next.js!" });
  }
);

export default app;
