import {FC} from "react";
import {TwitchSubscriptionEvent} from "../client/events";

export interface SubscriptionProps {
    event: TwitchSubscriptionEvent;
}

export const Subscription: FC<SubscriptionProps> = ({ event }) => (
    <div>
        <span>{ event.user }</span> subscribed with { event.tier }
    </div>
)
