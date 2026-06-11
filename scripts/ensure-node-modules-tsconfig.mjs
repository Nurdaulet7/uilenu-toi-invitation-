import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'node_modules', 'tsconfig.json');

const contents = `{
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "target": "ES2022",
    "noEmit": true
  }
}
`;

if (!fs.existsSync(target)) {
  fs.writeFileSync(target, contents);
}
