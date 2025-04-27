import { Context } from "telegraf";
import View from "../view/view";

class MainController {
  async start(ctx: Context) {
    console.log(`пользователь ${ctx.from?.username} запустил бота`);
    await View.start(ctx);
  }

  async sendPizda(ctx: Context) {
    console.log("бот несет хуйню");

    let msg;
    if (ctx.message && "text" in ctx.message) msg = ctx.message.text;
    
    let msgToSend: string = "";
    switch (msg) {
      case "аластор":
        msgToSend = "пидорас";
        break;
      case "лук":
        msgToSend = "чеснок";
        break;
      case "морс":
        msgToSend = "долбоеб";
        break;
      case "шушмыр":
        msgToSend = "ахуенный";
        break;
      case "носопырка":
        msgToSend = "в жопе дырка";
        break;
      case "владик":
        msgToSend = "бог влапусиков";
        break;
    }  

    if (msgToSend) await View.pizda(ctx, msgToSend);
  }
}

export default MainController;
