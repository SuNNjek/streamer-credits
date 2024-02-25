import React, {useState} from 'react';
import {Credits, CreditsClient} from "./client";
import {Follow, Subscription, GiftSubscription, Raid, Resubscription, Cheer, GiftBomb} from "./ui"

const client = new CreditsClient("http://localhost:7474");

function App() {
    const [response, setResponse] = useState<Credits>()

    return (
        <div style={{padding: '5px'}}>
            <button type="button" onClick={() => client.getCreditsEvents().then(setResponse)}>Test</button>
            <div>
                <h1>Subscriptions</h1>
                <div>
                    {
                        response?.subs.map(ev => <Subscription event={ev}/>)
                    }
                    {
                        response?.reSubs.map(ev => <Resubscription event={ev} />)
                    }
                    {
                        response?.giftSubs.map(ev => <GiftSubscription event={ev} />)
                    }
                    {
                        response?.giftBombs.map(ev => <GiftBomb event={ev} />)
                    }
                </div>
            </div>

            <div>
                <h1>Follows</h1>
                <div>
                    {
                        response?.follows.map(ev => <Follow event={ev}/>)
                    }
                </div>
            </div>

            <div>
                <h1>Cheers</h1>
                <div>
                    {
                        response?.cheers.map(ev => <Cheer event={ev} />)
                    }
                </div>
            </div>

            <div>
                <h1>Raids</h1>
                <div>
                    {
                        response?.raids.map(ev => <Raid event={ev} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
