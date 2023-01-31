import createPlugin from "tailwindcss";
import type { AcceptedPlugin } from "postcss";

const plugin: AcceptedPlugin = createPlugin;

console.log(plugin);
console.log(plugin());
