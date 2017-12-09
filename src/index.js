import { setupCommandLine } from './command';

try {
  setupCommandLine();
} catch (error) {
  throw new Error(error);
}

process.on('uncaughtException', (error) => {
  throw new Error(error);
});

process.on('uncaughtRejection', (error) => {
  throw new Error(error);
});
