import {CreditsEvent} from "./events/base";
import {
    isCheer, isFollowEvent, isGiftBomb,
    isGiftSubscription, isRaid,
    isReSubscription,
    isSubscription,
    TwitchCheerEvent, TwitchFollowEvent, TwitchGiftBombEvent,
    TwitchGiftSubscriptionEvent, TwitchRaidEvent,
    TwitchReSubscriptionEvent,
    TwitchSubscriptionEvent
} from "./events";

export interface Credits {
    follows: TwitchFollowEvent[];
    subs: TwitchSubscriptionEvent[];
    reSubs: TwitchReSubscriptionEvent[];
    giftSubs: TwitchGiftSubscriptionEvent[];
    giftBombs: TwitchGiftBombEvent[];
    cheers: TwitchCheerEvent[];
    raids: TwitchRaidEvent[];
}

export class CreditsClient {
    constructor(private readonly _baseUrl: string) {}

    public async getCreditsEvents(): Promise<Credits> {
        const resp = await fetch(`${this._baseUrl}/GetCredits`);
        const events: CreditsEvent[] = (await resp.json()).custom.events;

        return events.reduce<Credits>((credits, event) => {
            return {
                follows: isFollowEvent(event)
                    ? [...credits.follows, event]
                    : credits.follows,

                subs: isSubscription(event)
                    ? [...credits.subs, event]
                    : credits.subs,

                reSubs: isReSubscription(event)
                    ? [...credits.reSubs, event]
                    : credits.reSubs,

                giftSubs: isGiftSubscription(event)
                    ? [...credits.giftSubs, event]
                    : credits.giftSubs,

                giftBombs: isGiftBomb(event)
                    ? [...credits.giftBombs, event]
                    : credits.giftBombs,

                cheers: isCheer(event)
                    ? [...credits.cheers, event]
                    : credits.cheers,

                raids: isRaid(event)
                    ? [...credits.raids, event]
                    : credits.raids,
            };
        }, {
            follows: [],
            subs: [],
            reSubs: [],
            giftSubs: [],
            giftBombs: [],
            cheers: [],
            raids: [],
        })
    }
}