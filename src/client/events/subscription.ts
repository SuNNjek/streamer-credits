import {CreditsEvent, TwitchUserEvent} from "./base";

interface BaseSubscription {
    tier: string;
}

export interface TwitchSubscriptionEvent extends CreditsEvent, TwitchUserEvent, BaseSubscription {
    triggerCategory: "Twitch/Subscription";
    triggerName: "Subscription";

    rawInput: string;
}

export function isSubscription(event: CreditsEvent): event is TwitchSubscriptionEvent {
    return event.triggerCategory === "Twitch/Subscriptions" && event.triggerName === "Subscription"
}

export interface TwitchReSubscriptionEvent extends CreditsEvent, TwitchUserEvent, BaseSubscription {
    triggerCategory: "Twitch/Subscriptions";
    triggerName: "Resubscription";

    rawInput: string;
    monthStreak: number;
    cumulative: number;
}

export function isReSubscription(event: CreditsEvent): event is TwitchReSubscriptionEvent {
    return event.triggerCategory === "Twitch/Subscriptions" && event.triggerName === "Resubscription"
}

export interface TwitchGiftSubscriptionEvent extends CreditsEvent, TwitchUserEvent, BaseSubscription {
    triggerCategory: "Twitch/Subscription";
    triggerName: "Gift Subscription";

    recipientUser: string;
}

export function isGiftSubscription(event: CreditsEvent): event is TwitchGiftSubscriptionEvent {
    return event.triggerCategory === "Twitch/Subscriptions" && event.triggerName === "Gift Subscription"
}

export interface TwitchGiftBombEvent extends CreditsEvent, TwitchUserEvent, BaseSubscription {
    triggerCategory: "Twitch/Subscriptions"
    triggerName: "Gift Bomb"

    gifts: number;
    totalGifts: number;
}

export function isGiftBomb(event: CreditsEvent): event is TwitchGiftBombEvent {
    return event.triggerCategory === "Twitch/Subscriptions" && event.triggerName === "Gift Bomb"
}