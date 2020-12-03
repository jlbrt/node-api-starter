import http from 'http';
import { app } from './api/app';

const server = http.createServer(app);

const port = 3000;
server.listen(port, () => {
  console.log(`Web server listening on *:${3000}`);
});
