# fork-blueprints*

Ember CLI doesn't provide the ability to `--skip-test` or upon each generator instance specify a `--test-type=(acceptance|integration|unit)`. The goal of this addon is to facilitate, along with traditional blueprints, those types of customizations. Combining that with adept usage of pods, and you should be able to be 100% in control of your default file structure.

This addon currently just copies/forks any (legacy) ember blueprints into your app's blueprint folder.

## Installing (local/pre-npm)

* `git clone <repository-url>` this repository
* `cd fork-blueprints`
* `npm install`
* `npm link`
* `cd ../my-app`
* `npm link fork-blueprints`

## Disable default, but access later

You may want to disable default tests for a route, but have the option to generate them later. By forking the route-test blueprint, renaming it, and overriding the default, we can do just that.

* `ember g fork-blueprints route-test`
* `mv blueprints/route-test blueprints/route-test-legacy`
* `ember g blueprint route-test`

Now you can access the default route-test generator with `ember g route-test-legacy myRoute`.

## Change default test types

If you want to generate an acceptance test that corresponds to the generated route:

* `ember g fork-blueprints acceptance-test`
* `mv blueprints/acceptance-test blueprints/route-test`

Because the acceptance test relies on a relative module, we bring that along as well:

* `cp node_modules/ember-cli-legacy-blueprints/blueprints/test-framework-detector.js blueprints/`

Now, running `ember g route login` will create your route, template, and an acceptance test named "login".

## Other Thoughts 🚿

* This assumes you still use `--pod` or `.ember-cli` to manage your preferred file structure, but you can of course change the structure in a forked blueprint.
* Forking entire blueprints is less than ideal in terms of maintainance upstream, but my attempt to use symlinks have not worked so far. Hope to have a better solution to the maintenance aspect eventually.

Please submit issues with any suggestions about what you think this could/should (or should *not*) be :)

*does not yet have a cool name
