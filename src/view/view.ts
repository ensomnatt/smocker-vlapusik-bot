import { Context } from "telegraf";
import botMessages from "../config/texts";

class View {
  static async start(ctx: Context) {
    await ctx.sendMessage(botMessages.start);
  }

  static async pizda(ctx: Context, msg: string) {
    await ctx.reply(msg);
  }

  static async death(ctx: Context) {
    await ctx.reply(botMessages.death);
  }

  static async smoke(ctx: Context, cgrCount: number) {
    await ctx.reply(botMessages.smoke(cgrCount));
  } 
}

export default View;
