
const lambdaHello = require("../release/hello.js");

const mockLambdaContext = {
    succeed: (results) => {
        console.log("Results:", results);
        process.exit(0);
    }
};

lambdaHello.hello({ name: "Mark" }, mockLambdaContext);
