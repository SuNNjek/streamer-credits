# Streamer credits

React app that can be used with Streamer.bot to create credits.

## Usage

Add the following actions/triggers:
![./img/streamer-bot-setup1.png](Triggers1)
![./img/streamer-bot-setup2.png](Triggers2)

In the "Execute Code" sub-action of the "Add events to credits", add the following C# code:

```cs
using System;
using Newtonsoft.Json;

public class CPHInline
{
	public bool Execute()
	{
		CPH.AddToCredits("events", JsonConvert.SerializeObject(args), true);
		return true;
	}
}
```

In the "Execute Code" sub-action of the "Reset credits" action, add the following C# code:

```cs
using System;

public class CPHInline
{
	public bool Execute()
	{
		CPH.ResetCredits();
		return true;
	}
}
```

Then run `yarn start` in your terminal and add a browser source in OBS with `http://localhost:3000` in the URL

## TODOs
  - Add styling
  - Make it easier to set up