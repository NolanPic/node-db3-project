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
    return db('steps')
        .join('schemes', 'steps.scheme_id', 'schemes.id')
        .where('scheme_id', id)
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .orderBy('step_number');
}

function add(scheme) {
    return db('schemes')
        .insert(scheme);
}

function addStep(step, schemeId) {
    const newStep = { ...step, scheme_id: schemeId };
    return db('steps')
        .insert(newStep);
}

function update(id, updates) {
    return db('schemes')
        .where({ id })
        .update(updates);
}

function remove(id) {
    return db('schemes')
        .delete();
}
