import {TwitchGiftSubscriptionEvent} from "../client/events";
import {FC} from "react";

export interface GiftSubscriptionProps {
    event: TwitchGiftSubscriptionEvent
}

export const GiftSubscription: FC<GiftSubscriptionProps> = ({ event }) => (
    <div>
        {event.user} gifted a {event.tier} subscription to {event.recipientUser}
    </div>
)
