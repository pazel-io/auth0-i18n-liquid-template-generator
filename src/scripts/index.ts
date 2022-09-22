import { templates } from "../templates";
import { languages } from "../languages";
import { writeFile } from "./writeFile";
export { localizeMessage } from "./localizeMessage";
export { writeFile } from "./writeFile";

if (templates.length === 0) {
    throw new Error("No templates found");
}

if (languages.length === 0) {
    throw new Error("No languages found");
}

templates.forEach((template) => {
    const templateContent = require(`../templates/${template}`).default;
    writeFile(template, templateContent);
});
