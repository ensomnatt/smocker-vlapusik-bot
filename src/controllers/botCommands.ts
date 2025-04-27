import { Composer } from "telegraf";
import MainController from "./mainController";

const composer = new Composer();
const mainController = new MainController();

composer.command("start", (ctx) => mainController.start(ctx));

composer.on("message", (ctx) => mainController.sendPizda(ctx));

export default composer;
