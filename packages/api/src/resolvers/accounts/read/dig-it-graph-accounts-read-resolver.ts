import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphEvaluateAccountsRead } from "./dig-it-graph-accounts-read-evaluate";
import { DigItGraphFiguresAccountsRead } from "./dig-it-graph-accounts-read-figure";
import { DigItGraphResolveAccountsRead } from "./dig-it-graph-accounts-read-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraphAccountsRead {
  @Query(() => DigItGraphResolveAccountsRead)
  async DigItGraphAccountsRead(
    @Arg(`figure`, () => DigItGraphFiguresAccountsRead)
    figure: DigItGraphFiguresAccountsRead,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolveAccountsRead> {
    try {
      const response = await DigItGraphEvaluateAccountsRead(ctx, figure);
      return response;
    } catch (DigItGraphAccountsReadError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
