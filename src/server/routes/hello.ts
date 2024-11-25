import { sql } from "@/lib/db";
import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  try {
    const [res] = await sql`SELECT NOW()`;

    const dbNow = res && res.now ? res.now : ""

    const end = new Date() as unknown as string

    console.log(end);

    console.log(dbNow);
    const latency = new Date(end).getTime() - new Date(dbNow).getTime();

    return c.json({
      message: "Hello, Next.js!",
      latency
    });
  } catch (error) {
    console.log(error);
  }
});

export default app;
