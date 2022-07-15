import application from './app/application';

const signalListener = async () => {
  process.exit(0);
};

const initializeServer = async () => {
  process.on('SIGTERM', signalListener);
  process.on('SIGINT', signalListener);
  process.on('SIGQUIT', signalListener);
  process.on('SIGHUP', signalListener);

  const PORT = process.env.PORT || 3001;

  application.listen(PORT, () => {
    console.log(`Port: ${PORT}, env: ${application.settings.env}`);
  });
};

initializeServer();