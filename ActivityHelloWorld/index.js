const { run } = require('../lib/helm');

module.exports = async function (context) {
    const output = await run(`list --output json`);
    return JSON.stringify(output);
};