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
    console.log(`пользователь ${ctx.from?.username} решил прикурить`);

    if (!ctx.from?.id) throw new Error("userID is undefined");

    if (!await this.usersModel.checkIfUserExists(ctx.from.id)) {
      this.usersModel.add(ctx.from.id);
    }

    const cgrCount = RandomController.getCgrCount();
    if (cgrCount === 11) {
      console.log(`пользователь ${ctx.from.username} сдох от рака легких`);
      this.usersModel.kill(ctx.from.id);     
      await View.death(ctx);
      return;
    }

    const nextCgr = DateUtils.getNextCgr();
    this.usersModel.addCgrs(ctx.from.id, cgrCount, nextCgr);
    await View.smoke(ctx, cgrCount);
  }
}

export default CgrController;
