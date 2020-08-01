const express = require("express");
const bodyParser = require("body-parser");
const TaskController = require("./controller/taskcontroller");
const ProjectController = require("./controller/projectcontroller");
const GoalController = require("./controller/goalcontroller");
const fetch = require("node-fetch");
const cors = require("cors");
const dbconfig = require("./dao/configuration/configuredb");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/* Task Services  */
app.get("/task", TaskController.getTaskByCondition);
app.post("/task", TaskController.insertTask);

app.get("/task/during", TaskController.getTaskInDuration);

app.get("/task/:id", TaskController.getTaskById);
app.patch("/task/:id", TaskController.updateTask);
app.delete("/task/:id", TaskController.deleteTaskById);

/* Project Services  */
app.get("/project", ProjectController.getProjectByCondition);
app.post("/project", ProjectController.insertProject);

app.get("/project/during", ProjectController.getProjectInDuration);

app.get("/project/:id", ProjectController.getProjectById);
app.patch("/project/:id", ProjectController.updateProject);
app.delete("/project/:id", ProjectController.deleteProjectById);

/* Goal Services  */
app.get("/goal", GoalController.getGoalByCondition);
app.post("/goal", GoalController.insertGoal);

app.get("/goal/during", GoalController.getGoalInDuration);

app.get("/goal/:id", GoalController.getGoalById);
app.patch("/goal/:id", GoalController.updateGoal);
app.delete("/goal/:id", GoalController.deleteGoalById);

// app.get("/make", (req, resp) => {
//   fetch("https://23iwj.sse.codesandbox.io/goal", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Second Project goal-4",
//       startDate: new Date("2020-6-10"),
//       closeDate: new Date("2020-8-17"),
//       objective: "Test Objective for goal-2",
//       description: "Second Project",
//       projectId: "PR65209"
//     }),
//     headers: {
//       "Content-type": "application/json"
//     }
//   })
//     .then(response => response.json())
//     .then(data => resp.send(data));
// });

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
