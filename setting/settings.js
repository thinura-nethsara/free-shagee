const fs = require('fs')

//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.owner = "94751645330"
global.developer = "94751645330"
global.bot = "WHATSAPP BOT"
global.devname = "cybar loku riko"
global.ownername = "cybar loku riko"
global.botname = "LOKU RIKO MINI BOT V2"
global.versisc = "45"
global.packname = "LOKU RIKO"
//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/94751645330"
global.linkyt = "  😩"
global.linktt = "  8"
global.linktele = "me"

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.prefix = [","!",".",",","#","/","🎭","〽️"]
global.autoRecording = false
global.autoTyping = true
global.autorecordtype = false
global.autoread = true
global.autobio = false
global.anti92 = false
global.owneroff = false
global.autoswview = true

//~~~~~~~~~~~ Settings Thumbnail ~~~~~~~~~~~//
global.thumbbot = ""
global.thumbown = ""

//~~~~~~~~~~~ Settings Channel ~~~~~~~~~~~//
global.idchannel = "120363402825685029@newsletter"
global.channelname = "LOKU RIKO MINI BOT V2 SUPPORT CHANNEL"
global.channel = "https://whatsapp.com/channel/0029VbBeDic1yT20xcz3qo0y"

//~~~~~~~~~~~ Settings Message ~~~~~~~~~~~//
global.mess = {
  developer: " `[ Developer Only!! ]` \n This feature is for developers only!!",
  owner: " `[ Owner Only!! ]` \n This feature is for owners only!!",
  group: " `[ Group Only!! ]` \n This feature is for group chats only!!",
  private: " `[ Private Only!! ]` \n This feature is for private chats only!!",
  admin: " `[ Admin Only!! ]` \n This feature is for admins only!!",
  botadmin: " `[ Bot Admin Only!! ]` \n This feature is for bot admins only!!",
  wait: " `[ Wait!! ]` \n Please wait, loading...",
  error: " `[ Error!! ]` \n An error occurred!!",
  done: " `[ Done!! ]` \n Process completed!!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
