# auth0-i18n-liquid-template-generator

This is a tool to generate the Liquid templates for the Auth0 Email Templates so we can easily translate for different languages.

## How to use

1. Clone this repo
2. Run `npm install`
3. Run `npm run build` to compile the TypeScript code
4. Run `npm run generate` to generate the Liquid templates
5. Copy the generated Liquid templates to the Auth0 Email Templates. You can find the templates in the `output` folder.

## How to add a new language
Each language is defined in the `src/languages` folder. 
To add a new language, create a new file in that folder with the language code and the extension `.json`.
For example, to add the language `es`, create a file called `es.json` in the `src/languages` folder.
