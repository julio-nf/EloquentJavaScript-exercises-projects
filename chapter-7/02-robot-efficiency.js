/*
Robot efficiency

Can you write a robot that finishes the delivery task faster than
goalOrientedRobot? If you observe that robot’s behavior, what
obviously stupid things does it do? How could those be improved?

If you solved the previous exercise, you might want to use your compareRobots
function to verify whether you improved the robot.
*/


// Code from Project - Chapter 7
// -----------------------------
// function buildGraph(edges) {
//   let graph = Object.create(null);

//   function addEdge(from, to) {
//     if (graph[from] == null) {
//       graph[from] = [to];
//     } else {
//       graph[from].push(to);
//     }
//   }
//   for (let [from, to] of edges.map(r => r.split("-"))) {
//     addEdge(from, to);
//     addEdge(to, from);
//   }
//   return graph;
// }

// const roads = [
//   "Alice's House-Bob's House",   "Alice's House-Cabin",
//   "Alice's House-Post Office",   "Bob's House-Town Hall",
//   "Daria's House-Ernie's House", "Daria's House-Town Hall",
//   "Ernie's House-Grete's House", "Grete's House-Farm",
//   "Grete's House-Shop",          "Marketplace-Farm",
//   "Marketplace-Post Office",     "Marketplace-Shop",
//   "Marketplace-Town Hall",       "Shop-Town Hall"
// ];
// const roadGraph = buildGraph(roads);

// function randomPick(array) {
//   let choice = Math.floor(Math.random() * array.length);
//   return array[choice];
// }

// class VillageState {
//   constructor(place, parcels) {
//     this.place = place;
//     this.parcels = parcels;
//   }

//   move(destination) {
//     if (!roadGraph[this.place].includes(destination)) {
//       return this;
//     } else {
//       let parcels = this.parcels.map(p => {
//         if (p.place != this.place) return p;
//         return {
//           place: destination,
//           address: p.address
//         };
//       }).filter(p => p.place != p.address);
//       return new VillageState(destination, parcels);
//     }
//   }
// }

// VillageState.random = function(parcelCount = 5) {
//   let parcels = [];
//   for (let i = 0; i < parcelCount; i++) {
//     let address = randomPick(Object.keys(roadGraph));
//     let place;
//     do {
//       place = randomPick(Object.keys(roadGraph));
//     } while (place == address);
//     parcels.push({place, address});
//   }
//   return new VillageState("Post Office", parcels);
// };

// const mailRoute = [
//   "Alice's House", "Cabin", "Alice's House", "Bob's House",
//   "Town Hall", "Daria's House", "Ernie's House",
//   "Grete's House", "Shop", "Grete's House", "Farm",
//   "Marketplace", "Post Office"
// ];

// function routeRobot(state, memory) {
//   if (memory.length == 0) {
//     memory = mailRoute;
//   }
//   return {direction: memory[0], memory: memory.slice(1)};
// }

// function findRoute(graph, from, to) {
//   let work = [{at: from, route: []}];
//   for (let i = 0; i < work.length; i++) {
//     let {at, route} = work[i];
//     for (let place of graph[at]) {
//       if (place == to) return route.concat(place);
//       if (!work.some(w => w.at == place)) {
//         work.push({
//           at: place,
//           route: route.concat(place)
//         });
//       }
//     }
//   }
// }

// function goalOrientedRobot({place, parcels}, route) {
//   if (route.length == 0) {
//     let parcel = parcels[0];
//     if (parcel.place != place) {
//       route = findRoute(roadGraph, place, parcel.place);
//     } else {
//       route = findRoute(roadGraph, place, parcel.address);
//     }
//   }
//     return {direction: route[0], memory: route.slice(1)};
// }


// My code from previous exercise
function runRobot(state, robot, memory) {
  for (let steps = 0;; steps++) {
  if (state.parcels.length == 0) {
      return steps;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1Steps = 0;
  let robot2Steps = 0;

  for (let i = 0; i < 100; i++) {
    const state = VillageState.random();

    robot1Steps += runRobot(state, robot1, memory1);
    robot2Steps += runRobot(state, robot2, memory2);
  }

  console.log('Average steps per task for Robot 1: ' + robot1Steps/100);
  console.log('Average steps per task for Robot 2: ' + robot2Steps/100);
}


// My code
function myRobot({place, parcels}, route) {
  if (route.length == 0) {
    let routes = [];
    for (let parcel of parcels) {
      if (parcel.place != place) {
        routes.push(
          {
            parcel: parcel,
            route: findRoute(roadGraph, place, parcel.place)
          });
      } else {
        routes.push(
          {
            parcel: parcel,
            route: findRoute(roadGraph, place, parcel.address)
          });
      }
    }
    route = routes
            .reduce((a, b) => a.route.length <= b.route.length ? a : b)
            .route;
  }
  return {direction: route[0], memory: route.slice(1)};
}

/*
The problem with goalOrientedRobot is that it sets the goal to the first
parcel in the state, even if it has the longest route.
myRobot solves that finding the parcel with the shortest route between
these in the state.
*/


// Tests
compareRobots(myRobot, [], goalOrientedRobot, []);
// -> Average steps per task for Robot 1: 12.82
// -> Average steps per task for Robot 2: 15.51

// -> Average steps per task for Robot 1: 12.7
// -> Average steps per task for Robot 2: 15.21
