import { UserType } from "./UserType"

export type StrategyType = {
    auth: {
        token: string
    },
    user: UserType
}