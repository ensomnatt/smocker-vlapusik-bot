import { Context } from "telegraf";
import botMessages from "../config/texts";

class View {
  static async start(ctx: Context) {
    await ctx.sendMessage(botMessages.start);
  }

  static async sendMessage(ctx: Context, msg: string) {
    await ctx.reply(msg);
  }

  static async death(ctx: Context) {
    await ctx.reply(botMessages.death);
  }

  static async gimn(ctx: Context) {
    await ctx.reply(botMessages.gimn)
  }
}

export default View;
