const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    outputs.push(yield context.df.callActivity("ActivityHelloWorld", "Tokyo"));
    return outputs;
});