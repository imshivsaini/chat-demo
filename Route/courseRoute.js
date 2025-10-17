import { Router } from "express";
const route = Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

route.get("/", (req, res) => {
  res.json({
    message: "Here is the list of all courses.",
    courses,
  });
});
route.post("/", (req, res) => {
  const newCourse = req.body;
  newCourse.id = courses.length + 1;
  courses.push(newCourse);

  res.json({
    message: "New course has been added!",
    course: newCourse,
  });
});

route.get("/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json({
    message: `Details of course with ID: ${courseId}`,
    course,
  });
});

export default route;
