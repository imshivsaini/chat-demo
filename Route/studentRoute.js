import { Router } from "express";
const route = Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

route.get("/", (_req, res) => {
  res.json({
    message: "Here is the list of all students.",
    students,
  });
});

route.post("/", (req, res) => {
  const newStudent = req.body;
  newStudent.id = students.length + 1;
  students.push(newStudent);

  res.json({
    message: "New student has been added!",
    student: newStudent,
  });
});

route.get("/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({
    message: `Details of student with ID: ${studentId}`,
    student,
  });
});

export default route;
