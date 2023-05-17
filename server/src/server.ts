import fastify from "fastify";
import {PrismaClient} from "@prisma/client";
const app = fastify();
const port = 3333;
const prisma = new PrismaClient();

app.get("/users", () => {
	const users = prisma.user.findMany();
	return users;
});

app.listen({
	port, // Porta que o servidor estara ouvindo
}).then(() => {
	console.log(`🤖 Server running on port ${port}`);
});