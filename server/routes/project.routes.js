const { authenticate } = require("../config/jwt.config");
const {findAllProjects, createProject, findOneProject, deleteProject, updateProject} = require("../controllers/project.controller");

module.exports = app => {
    app.get("/api/projects",  findAllProjects);
    app.post("/api/projects/new", createProject);
    app.get("/api/projects/:id", findOneProject);
    app.delete("/api/projects/:id",  deleteProject);
    app.put("/api/projects/:id",  updateProject);

}
// Compare this snippet from server/models/project.model.js: