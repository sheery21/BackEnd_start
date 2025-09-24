// import fs from'fs';
import http from'http';

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

const server = http.createServer( (req, res ) => {
    console.log(req);
    res.end(' hello world hello')
});
server.listen(5000);
