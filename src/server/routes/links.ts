import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono()
  .get("/", (c) => {
    return c.json({ message: "Hello, Next.js! links route" });
  })
  .post(
    "/",
    zValidator("json", z.object({ url: z.string().url() })),
    async (c) => {
      const { url } = c.req.valid("json");

      const contentType = c.req.header("Content-Type");
      if (contentType !== "application/json") {
        return c.json({ error: "Invalid Content-Type" }, 400);
      }

      return c.json(url);
    }
  );

export default app;
