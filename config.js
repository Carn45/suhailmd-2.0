const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "SUHAIL_02_27_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDQzLFxuICAgICAgICA4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlk1dnJvZ1IydFd0YXRsRmFaNEtLVWYrUzhhMi85UTAyUGxpMjFlYis1cDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkM4VlF6R0h4VFlHZUxoMjdkU0xxYndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGUyMDAxODEtNGE4NS00NGI0LTg0NzgtNmExMDBiYTEyM2JhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTAyLFxuICAgICAgMjE5LFxuICAgICAgMTg1LFxuICAgICAgMTMyLFxuICAgICAgMjQ4LFxuICAgICAgMTEyLFxuICAgICAgNTMsXG4gICAgICA2NSxcbiAgICAgIDIyOSxcbiAgICAgIDYxLFxuICAgICAgMTM3LFxuICAgICAgNDgsXG4gICAgICA1OSxcbiAgICAgIDUsXG4gICAgICAxNSxcbiAgICAgIDU5LFxuICAgICAgMTI5LFxuICAgICAgMzAsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMjMwLFxuICAgICAgMTk1LFxuICAgICAgMTQsXG4gICAgICAyMzYsXG4gICAgICA2NyxcbiAgICAgIDI1MCxcbiAgICAgIDE4NixcbiAgICAgIDIwNCxcbiAgICAgIDE2OSxcbiAgICAgIDExMixcbiAgICAgIDE4LFxuICAgICAgMTI3LFxuICAgICAgMixcbiAgICAgIDQ2LFxuICAgICAgMjE2LFxuICAgICAgMjM5LFxuICAgICAgMTY1LFxuICAgICAgMTI2LFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkhTOVg0SzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE0NzUyNTc3MjY0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwifkRcIixcbiAgICBcImxpZFwiOiBcIjI0MDYwODY5ODQ2NjMzNjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWHU0Y3dDRU95YzBMa0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkMwZkRsdU5pdi9YSnNJQ1JObmZ2dkswdzBvR1EySmw2MmFBOXUrUk5wVzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWXBmZldSb2RDVDVyNlpKakJsWnU4S1FnSmlYU2FHYmp6VzR0Q3I2TG1ZK3E1ZTNkL3hmUEZ0Zm53eG10WFRTMW1UUmNkTjNuNmxSWVAxVE1NMmlVQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN2VWdldpeEJ5ZUdVc1FGbEFvcFpMRVlqMnRFSFJ0M1lIL1RVS3E1ekV5bEJBQVp2V1h1b0ZobHEyZU1udzlzWUpyYndvSUFoVWZORmY1Vi9CbTU4Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTQ3NTI1NzcyNjQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQ2NDgxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpYOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlg4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEdCVEVNTTU4QzBWYkROWVpnVFRqS0tGTTJsQ2o2N2tWMFhlUVFHS0g2VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTc4NTc4NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTQ2MDMwMTY5NVwifSIKfQ=="     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
