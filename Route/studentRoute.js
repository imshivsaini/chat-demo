import { Router } from "express";
const route = Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

route.get("/", (_req, res) => {
  const studentNames = students.map((s) => s.name);
  res.json({
    message: "Students: " + studentNames.join(", "),
  });
});
route.post("/", (req, res) => {
  const newStudent = { id: students.length + 1, name: req.body.name };
  students.push(newStudent);

  res.json({
    message: `Student ${newStudent.name} has been added!`,
  });
});

route.get("/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).send("Student not found");
  }

  res.send(`Student: ${student.name}`);
});

export default route;
