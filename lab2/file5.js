import {stat} from "fs/promises";

const stat =await stat ("readme.md");

console.log("is file:" , stats.isFile());
console.log("is directory:" , stats.isDirectory());
console.log("szie(bytes)" , stats.size());
console.log("last modified:" , stats.mtime());
