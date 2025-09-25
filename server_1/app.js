import fs from "fs";
import http from "http";
import path from "path";
import { add } from "./utils.js";
// try{

// fs.writeFileSync('example.txt', 'Hello, World!');
// console.log("File likh di gayi!");
// const data = fs.readFileSync('example.txt', 'utf8');
// console.log('file ka content:', data);
// console.log('File mein nayi line jod di gayi!');
// const Hello = fs.appendFileSync('example.txt', '\n Yeh nayi line hai!', 'utf-8');
// console.log(Hello);
// fs.mkdirSync('myDirectory');
// console.log('Directory bana di gayi!');
// fs.writeFileSync('hey.txt', "hey hello kaise ho");
// fs.appendFileSync('hey.txt', '\n mai to achha hu');
// fs.unlinkSync(' hey.txt');
// fs.renameSync('example.txt', 'newExample.txt');
// fs.copyFileSync('newExample.txt','./myDirectoy/copiedExample.txt');
// console.log('File copy kar di gayi!');
// fs.rmdirSync('myDirectory', {recursive: true});
// fs.mkdirSync('myDirectory1');
// fs.rm('myDirectory1');
// }catch(err){
//     console.error('Error hua:', err.message);
// }

//  create a file using fs
// fs.writeFileSync("hello.txt", "hi");

// read file using fs
// let hi = fs.readFileSync("hello.txt", "utf-8");
// console.log(hi);

//  update file
// fs.appendFileSync("hello.txt", "\n hello");
// let he = fs.readFileSync("hello.txt", "utf-8");
// console.log(he);

// delete file
// fs.unlinkSync('hello.txt');

// feat: create "myDirectory2" folder and add file inside it
// fs.mkdirSync('myDirectory2' , {recursive : true});
// const file = path.join('myDirectory2', 'hiii.txt');
// fs.writeFileSync(file , 'hi from inside folder!' , 'utf-8');
// console.log('File ban gayi:' , file);

    // console.log('add', add);