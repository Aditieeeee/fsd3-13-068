import{readFile,writeFile,appendFile, unlink} from "fs/promises";

const writeData = async (fname , contents)=>{
 await writeFile(fname,contents);
 console.log("file written");
};

const readData = async (fname)=>{
  const data = await readFile(fname,"utf-8");
 console.log("file contents");
 console.log(data);
};

const appendData = async (fname , contents)=>{
    await appendFile(fname,"\n"+contents);
    console.log('${fname} deleted')
};

const deleteFile= async (fname)=>{
    fstat.unlink(fname);
}

// await writeData("sad.txt","i am saddddddd..");
// await readData("sad.txt");
// await appendData("sad.txt","i am happy nowwwwwwwwwwwwwwwwwwwwwwwwwwww"); 
// // for append it midify the file content and add new content at the end of the file
// await readData("sad.txt");
await deleteFile("sad.txt")