var Project = require("../models/projects");

exports.project_create = (req, res) => {
  var projectName = req.body.name;
  var description = req.body.description;
  var imageSource = req.file.filename;
  var imageAlt = req.body.imageAlt;

  console.log(req.file);

  var newProject = new Project({
    imageSource: imageSource,
    imageAlt: imageAlt,
    name: projectName,
    desc: description
  });
  console.log(newProject);
  newProject.save(function(err) {
    if (err) throw err;
  });

  res.redirect("/admin");
};

exports.project_delete = (req, res) => {
  var id = req.params.projectid;
  Project.findByIdAndDelete(id, function(err, id) {
    if (err) {
      console.log(err);
    }
    console.log(id + "deleted");
    res.redirect("/admin");
  });
};
