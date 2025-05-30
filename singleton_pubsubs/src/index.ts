import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(() => {
  games.push({
  });
}, 5000);
