export interface CreditsEvent {
    __source: number;
    triggerCategory: string;
    triggerName: string;

    actionQueuedAt: string;
}

export interface TwitchUserEvent {
    userId: number;
    user: string;

    isSubscribed: boolean;
    isModerator: boolean;
    isVip: boolean;
}