import * as fs from 'node:fs/promises';
import fetch from 'node-fetch';
import fs1 from 'fs-extra';

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
}

const posts = await getPosts();

const folder = "./src/posts"

try {
  await fs.access(folder);
  console.log("directory exists")
  await fs1.remove(folder)
  console.log('removed directory')
} catch {
  console.log("no directory to remove")
}

try {
  await fs.mkdir(folder);
  console.log("directory created")
} catch {
  console.log("unable to create directory")
}

posts.forEach(post => {
  let html = '<html><body>';
  html += `<h1>${post.title}</h1>`;
  html += `<p>${post.body}</p>`;
  html += '</body></html>';
  fs.writeFile(`${folder}/${new Date().getTime().toString()}-${post.id}.html`, html);
});

const distDirectory = "./dist"
try {
  await fs.access(distDirectory);
  await fs1.remove(distDirectory)
} catch {

}

try {
  await fs.mkdir(distDirectory);
  console.log("dist directory created")
} catch {
  console.log("unable to create dist directory")
}

try {
  await fs1.copy("./src", "./dist")
} catch {
  console.log("unable to copy files to dist")
}

console.log("build is complete")






