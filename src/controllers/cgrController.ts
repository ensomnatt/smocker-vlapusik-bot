import { Context } from "telegraf";
import { UsersModel } from "../models/usersModel";
import RandomController from "./randomController";
import View from "../view/view";
import DateUtils from "../utils/dateUtils";

class CgrController {
  private usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel();
  }

  async smoke(ctx: Context) {
    try {
      console.log(`пользователь ${ctx.from?.username} решил прикурить`);

      if (!ctx.from?.id) throw new Error("userID is undefined");

      if (!await this.usersModel.checkIfUserExists(ctx.from.id)) {
        this.usersModel.add(ctx.from.id);
      }

      const nextCgr = await this.usersModel.nextCgr(ctx.from.id);
      const currentDate = DateUtils.getCurrentDate().toSeconds();
      if (nextCgr === null) throw new Error("nextCgr is null");

      if (currentDate < nextCgr) {
        const msg = "ты сможешь покурить через " + DateUtils.unixToString(nextCgr - currentDate);
        await View.sendMessage(ctx, msg);
        return
      }

      const cgrCount = RandomController.getCgrCount();
      if (cgrCount === 11) {
        console.log(`пользователь ${ctx.from.username} сдох от рака легких`);
        this.usersModel.kill(ctx.from.id);     
        await View.death(ctx);
        return;
      }

      const nextCgrTime = DateUtils.getNextCgr();
      this.usersModel.addCgrs(ctx.from.id, cgrCount, nextCgrTime);
      await View.sendMessage(ctx, this.prepareMsg(cgrCount, false));
    } catch (error) {
      console.error(`ошибка при курении: ${error}`);
    }
  }

  prepareMsg(cgrCount: number, isGetCgrCount: boolean): string {
    let message = `ты выкурил ${cgrCount} `;
    switch (cgrCount) {
      case 1:
        message += "сигарету";
        break;
      case 2:
      case 3:
      case 4:
        message += "сигареты";
        break;
      default:
        message += "сигарет";
        break;
    }

    if (isGetCgrCount) message += " за все время";

    return message;
  }

  async getCgrCount(ctx: Context) {
    try {
      const cgrCount = await this.usersModel.cgrCount(ctx.from?.id || 0);
      if (cgrCount === null) throw new Error("cgrCount is null");

      await View.sendMessage(ctx, this.prepareMsg(cgrCount, true));
    } catch (error) {
      console.error(`ошибка при получении всех выкуренных сигарет: ${error}`);
    }
  }
}

export default CgrController;
