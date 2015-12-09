"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hello = hello;
function hello(options, context) {
    context.succeed("Hello ${options.name || \"World\"}!");
}