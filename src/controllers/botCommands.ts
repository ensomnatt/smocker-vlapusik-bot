import { Composer } from "telegraf";
import MainController from "./mainController";
import CgrController from "./cgrController";

const composer = new Composer();
const mainController = new MainController();
const cgrController = new CgrController();

composer.command("start", (ctx) => mainController.start(ctx));

composer.hears("покурить", (ctx) => cgrController.smoke(ctx));
composer.hears("сколько я выкурил", (ctx) => cgrController.getCgrCount(ctx));

composer.on("message", (ctx) => mainController.sendPizda(ctx));

export default composer;
