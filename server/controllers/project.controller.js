const Project = require('../models/project.model');

module.exports.findAllProjects = async (req, res) => {
    try {
        const projectList = await Project.find();
        res.json({ projects: projectList });


    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });

    }
}

module.exports.createProject = async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.json({ project: newProject });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}

module.exports.findOneProject = async (req, res) => {
    try {
        const { id } = req.params;
        const oneProject = await Project.findById(id);
        res.json({ project: oneProject });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}

module.exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProject = await Project.findByIdAndDelete(id);
        res.json({ project: deletedProject });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}

module.exports.updateProject = async (req, res) => {
    try {
        const response = await Project.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json({ producto: response });
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}