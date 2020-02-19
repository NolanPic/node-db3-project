const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
};

function find() {
    return db('schemes').select('*');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(id) {

}

function add(scheme) {

}

function addStep(step, schemeId) {

}

function update(id, updates) {

}

function remove(id) {

}
