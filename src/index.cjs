const createPlugin = require("tailwindcss");

/** @type {import('postcss').AcceptedPlugin} */
const plugin = createPlugin;

console.log(plugin);
console.log(plugin());
