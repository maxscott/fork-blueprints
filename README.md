# fork-blueprints

This addon houses the script to copy/fork any (legacy) ember blueprints into your app's blueprint folder.

## Installing

* `git clone <repository-url>` this repository
* `cd fork-blueprints`
* `npm install`
* `npm link`
* `cd ../my-app`
* `npm link fork-blueprints`

## Running

To "fork" the route & route-test blueprint:

* `ember g fork-blueprints route`
* `ember g fork-blueprints route-test`
