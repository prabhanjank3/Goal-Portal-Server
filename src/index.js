const express = require("express");
const bodyParser = require("body-parser");
const TaskController = require("./controller/taskcontroller");
const ProjectController = require("./controller/projectcontroller");
const GoalController = require("./controller/goalcontroller");
const AuthController = require("./controller/authcontroller");
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

/* User Services */

app.get("/auth", AuthController.authenticateUser);
app.post("/auth", AuthController.insertUser);

// app.get("/", (req, resp) => {
//   console.log(uniqueRandom(10000, 99999)());
//   resp.send("Hello");
// });

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
