import {TwitchReSubscriptionEvent} from "../client/events";
import {FC} from "react";

export interface ResubscriptionProps {
    event: TwitchReSubscriptionEvent;
}

export const Resubscription: FC<ResubscriptionProps> = ({ event }) => (
    <div>
        { event.user } resubscribed for { event.cumulative } months with { event.tier }
    </div>
)
