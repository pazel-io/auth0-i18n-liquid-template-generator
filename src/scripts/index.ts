import { writeFile } from "./writeFile";
export { localizeMessage } from "./localizeMessage";
export { writeFile } from "./writeFile";

const templates = ["verification-email"];

templates.forEach((template) => {
    const templateContent = require(`../templates/${template}`).default;
    console.log(templateContent);
    writeFile(template, templateContent);
});
