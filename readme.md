# HeyHowsItGoingBot
A Discord bot that asks you, "Hey, how's it going?"

## Setup
You will need to add a file named `config.json` to the root directory with the following structure, where `token` is the bot's token and `ownerId` is the ID of the owner.
```
{
  "token": "..."
  "ownerId": "..."
}
```

### Add Bot to server
Replace `[clientId]` in this url with your Client ID, which is found in in the Discord developer portal.

https://discordapp.com/oauth2/authorize?client_id=[clientId]&scope=bot&permissions=1

### Install Dependencies
```
npm install
```
## Usage
```
cd [root directory]
node .
```