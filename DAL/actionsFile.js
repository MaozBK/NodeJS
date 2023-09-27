const jf = require('jsonfile');

const file = 'config/actions.json';

//reading from file 
const getActions = () => {
    return jf.readFile(file)
}


//writing to file
const increaseActionsNumber = (data) => {
    return jf.writeFile(file, data);
}

module.exports = { getActions, increaseActionsNumber }
