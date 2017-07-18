const fs = require('fs-extra');
const path = require('path');

/* eslint-env node */
module.exports = {
  description: 'Copies the specified blueprint from your project\'s ember-cli-legacy-blueprints directory',

  afterInstall: function(options) {

    const projectBlueprints = path.join(options.target, 'blueprints', options.args[1]);

    const emberBlueprints = path.join(
      options.target,
      'node_modules',
      'ember-cli-legacy-blueprints',
      'blueprints',
      options.args[1]
    );

    return fs.ensureDir(projectBlueprints)
    .then(() => {
      return fs.copy(emberBlueprints, projectBlueprints);
    });
  }
};
