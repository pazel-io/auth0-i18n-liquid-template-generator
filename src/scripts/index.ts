import { generateEmailTemplate } from './generateLiquidTemplate';
import * as fs from 'fs-extra';

const emailTemplate = generateEmailTemplate();

// Write emailTemplate to file
try {
    fs.removeSync('./output');
    fs.mkdirSync('./output', { recursive: true });
    fs.writeFileSync('output/emailTemplate.liquid', emailTemplate, {
        encoding: 'utf8',
    });
} catch (err) {
    console.error(err)
}
