import { Command } from "commander/esm.mjs";
const program = new Command();
program.version(process.env.npm_package_version);
console.log(program.version());
