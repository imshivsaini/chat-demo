import { Router } from "express";
const route = Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

route.get("/", (_req, res) => {
  const courseNames = courses.map((c) => c.name);
  res.json({
    message: "Courses: " + courseNames.join(", "),
  });
});

route.post("/", (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  courses.push(newCourse);

  res.json({
    message: `Course ${newCourse.name} has been added!`,
  });
});

route.get("/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return res.status(404).send("Course not found");
  }

  res.send(`Course: ${course.name}, Description: ${course.description}`);
});

export default route;
