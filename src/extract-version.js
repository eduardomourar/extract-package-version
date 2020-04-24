const core = require("@actions/core");
const path = require("path");

const workspace = process.env.GITHUB_WORKSPACE;

async function run() {
  try {
    let dir = core.getInput("path") || workspace;
    dir = path.resolve(dir);

    const packagePath = path.join(dir, "package.json");
    const pkg = require(packagePath);
    const name = pkg.name.toString();
    const version = pkg.version.toString();
    const description = pkg.description.toString();
    
    core.setOutput("name", name);
    core.setOutput("version", version);
    core.setOutput("description", description);
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
