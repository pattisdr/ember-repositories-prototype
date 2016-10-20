import Ember from 'ember';

// Hardcoded nodes (project) sample data
let nodes = [{
  id: 1,
  title: 'Research Project One',
  description: 'This is my research project on trees',
  tags: ["maple", "pine", "oak"],
}, {
  id: 2,
  title: 'Research Project Two',
  description: 'This is my research project on the economy',
  tags: ["interest rate", "assets", "recession", "banks"],
}, {
  id: 3,
  title: 'Research Project Three',
  description: 'This is my research project on banks',
  tags: ["money", "banks", "assets", "liabilities", "ATM"],
}];

// Hardcoded repositories - example only
let repositories = [{
  id: 'a',
  title: 'Botany Repository',
  summary: 'This repository contains research on botany',
  projects: [nodes[0]]
}, {
  id: 'b',
  title: 'Economics Repository',
  summary: 'This repository contains research on the economy',
  projects: [nodes[1], nodes[2]]
}];

export default Ember.Route.extend({
   model() {
    return repositories;
  }
});
