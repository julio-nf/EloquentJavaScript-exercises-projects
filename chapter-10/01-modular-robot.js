/*
A modular robot

These are the bindings that the project from Chapter 7 creates:

roads
buildGraph
roadGraph
VillageState
runRobot
randomPick
randomRobot
mailRoute
routeRobot
findRoute
goalOrientedRobot

If you were to write that project as a modular program, what modules would you
create? Which module would depend on which other module, and what would their
interfaces look like?

Which pieces are likely to be available prewritten on NPM? Would you prefer to
use an NPM package or write them yourself?
*/


// My solution
// -----------
/*
I would create a graph module that would take care of the building of a graph,
with a public buildGraph function;
A random module that would offer the randomPick function;
A Village module, that would have the VillageState class, VillageState.random,
roads, roadGraph and runRobot bindings. This module depends on the graph module
and the random module;
And a Robot module with the mailRoute, routeRobot, findRoute and
goalOrientedRobot bindings. This module depends on the Village module.

Probably the graph and random modules are already available on NPM. I prefer
using the package from NPM if its available because its probably well-tested,
well-written, with good functionalities and would save me a lot of time.
*/
