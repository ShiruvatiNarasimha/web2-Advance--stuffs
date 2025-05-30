import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(() => {
  games.push({
    id: Math.random().toStri
  });
}, 5000);
