import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayer: "shiruvati",
    blackPlayer:
  });
}, 5000);
