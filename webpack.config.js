
import path from "path";
import fs from "fs";

// Configuring the webpack for compilation

module.exports = {
    // Note the sync file reading
    entry: fs
        .readdirSync(path.join(__dirname, "./lambda"))
        .filter(file => /\.js$/.test(file))
        .map(file => {
            let entry = {};
            const filename = file.replace(".js", "");
            entry[filename] = path.join(__dirname, "./lambdas", file);
            return entry;
        })
        .reduce(final, entry) => Object.assign(final, entry), {});

    output: {
        path: path.join(__dirname, "release"),
        library: "[name]",
        libraryTarget: "commonjs2",
        filename: "[name].js"
    },

    target: "node",
    
    module: {
        loaders: [

        ]
    }
};
