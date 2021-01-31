import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

try {
  app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

  app.get("/tasks", async (req, res) => {
    const tasks = await prisma.task.findMany({
      where: { isClose: false },
      include: { User: true },
    });
    res.json(tasks);
  });

  app.get(`/task/:id`, async (req, res) => {
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id, 10) },
    });
    res.json(task);
  });

  app.post("/user", async (req, res) => {
    const result = await prisma.user.create({
      data: { ...req.body },
    });
    res.json(result);
  });

  app.post("/createTask", async (req, res) => {
    const { title, content, userEmail } = req.body;
    const result = await prisma.task.create({
      data: {
        title,
        content,
        isClose: false,
        User: { connect: { email: userEmail } },
      },
    });
    res.json(result);
  });

  app.put("/task/isClose/:id", async (req, res) => {
    const { id } = req.params;
    const task = await prisma.task.update({
      where: { id: parseInt(id, 10) },
      data: { isClose: true },
    });
    res.json(task);
  });

  app.delete("/task/:id", async (req, res) => {
    const { id } = req.params;
    const task = await prisma.task.delete({
      where: { id: parseInt(id, 10) },
    });
    res.json(task);
  });

  app.listen(3333, () =>
    console.log("REST API server ready at: http://localhost:3333")
  );
} catch (error) {
  console.error(error);
}
// async function main() {
//   const newUser = await prisma.user.create({
//     data: {
//       name: "izumi",
//       email: "izumi@example.com",
//       tasks: {
//         create: {
//           title: "first task",
//         },
//       },
//     },
//   });
//   console.log("Created newUser", newUser);

//   const allUsers = await prisma.user.findMany({
//     include: { tasks: true },
//   });
//   console.log("ALL users");
//   console.dir(allUsers, { depth: null });
// }

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => await prisma.$disconnect());
