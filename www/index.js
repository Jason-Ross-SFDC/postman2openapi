import { default as collection } from './collection';
import * as postman2openapi from "postman2openapi";

const postman = JSON.stringify(collection);
const openapi = postman2openapi.transpile(postman, 'yaml');

const textarea = document.createElement('textarea');
textarea.style = "width: 100%; height: 700px;";
textarea.value = openapi;

document.body.appendChild(textarea);