import { Context } from "telegraf";
import botMessages from "../config/texts";

class View {
  static async start(ctx: Context) {
    await ctx.sendMessage(botMessages.start);
  }

  static async pizda(ctx: Context, msg: string) {
    await ctx.sendMessage(msg);
  }
}

export default View;
