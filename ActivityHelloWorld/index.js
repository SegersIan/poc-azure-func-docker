const { run } = require('../lib/helm');

module.exports = async function (context) {
    const output = await run();
    return JSON.stringify(output);
};