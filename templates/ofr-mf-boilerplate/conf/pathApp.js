import path from 'path';
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const alias = {
  src: path.resolve(process.cwd(), 'src'),
  '@components': path.resolve(process.cwd(), 'src/shared/components'),
  '@assets': path.resolve(process.cwd(), 'src/assets'),
  '@services': path.resolve(process.cwd(), 'src/shared/services'),
  '@utils': path.resolve(process.cwd(), 'src/shared/utils'),
  '@routes': path.resolve(process.cwd(), 'src/shared/routes'),
  '@config': path.resolve(process.cwd(), 'src/shared/config'),
  '@interfaces': path.resolve(process.cwd(), 'src/shared/interfaces'),
  '@store': path.resolve(process.cwd(), 'src/store'),
  '@features': path.resolve(process.cwd(), 'src/features'),
  '@data-access': path.resolve(process.cwd(), 'src/data-access'),
};

export default {
  alias,
  root: process.cwd(),
  paths: {
    dotenv: resolveApp('.env'),
  },
};
