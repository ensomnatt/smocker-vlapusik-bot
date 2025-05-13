import { Context } from "telegraf";
import View from "../view/view";

class MainController {
  async start(ctx: Context) {
    console.log(`пользователь ${ctx.from?.username} запустил бота`);
    await View.start(ctx);
  }

  async sendPizda(ctx: Context) {
    let msg;
    if (ctx.message && "text" in ctx.message) msg = ctx.message.text;
    
    let msgToSend: string = "";
    switch (msg) {
      case "аластор":
        msgToSend = "пидорас";
        break;
      case "морс":
        msgToSend = "кончелыга ебаная";
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
      case "огурчик":
        msgToSend = "ебал козу";
        break;
      case "брофловски":
        msgToSend = "узкоглазый";
        break;
      case "скелет":
        msgToSend = "пидор пидор пидор";
        break;
      case "чудилка":
        msgToSend = "богиня лучшая обожаю люблю секс";
        break;
      case "гимн":
        msgToSend = "гимн";
        break;
    }  

    if (msgToSend) {
      if (msgToSend === "гимн") {
        console.log("бот поет гимн");
        await View.gimn(ctx);
      } else {
        console.log("бот несет хуйню");
        await View.sendMessage(ctx, msgToSend);
      }
    }
  }  
}

export default MainController;
