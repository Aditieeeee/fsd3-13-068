import { mkdir } from "fs/promises";

// to create a folder named upload
// await mkdir('upload');
// console.log("folder created");

// to create a folder named resume in upload folder
// await mkdir("upload/resume");
// console.log("resume created under upload folder");


// await mkdir("images/profile/logos", { recursive: true});
// console.log("all folders created");

await rm("upload", { recursive: true});

