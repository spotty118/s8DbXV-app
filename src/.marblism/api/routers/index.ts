/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createApplicationRouter from "./Application.router";
import createNotificationRouter from "./Notification.router";
import createPaymentRouter from "./Payment.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createRagVectorRouter from "./RagVector.router";
import createSessionRouter from "./Session.router";
import { ClientType as ApplicationClientType } from "./Application.router";
import { ClientType as NotificationClientType } from "./Notification.router";
import { ClientType as PaymentClientType } from "./Payment.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        application: createApplicationRouter(router, procedure),
        notification: createNotificationRouter(router, procedure),
        payment: createPaymentRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    application: ApplicationClientType<AppRouter>;
    notification: NotificationClientType<AppRouter>;
    payment: PaymentClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
