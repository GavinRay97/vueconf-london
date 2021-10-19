import Fastify from "fastify"

const app = Fastify({ logger: true })

app.get("/api/test", async (req, res) => {
  return { hello: "world" }
})

app.listen(3000, "0.0.0.0", (err, address) => {
  if (err) console.log("Got error starting server:", err)
  else console.log("Fastify app now listening at:", address)
})
