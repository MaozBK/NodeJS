const actionsFile = require('../DAL/actionsFile');

const getAllActions = async () => {
    const { actions } = await actionsFile.getActions();
    return actions;
}

module.exports = { getAllActions }