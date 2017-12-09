import commander from 'commander';
import { version } from '../../package.json';

export const setupCommandLine = () => {
  commander
    .version(version);

  commander
    .command('login')
    .action(() => {
    });

  commander
    .parse(process.argv);
};
