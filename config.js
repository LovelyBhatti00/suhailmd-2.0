const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923134091129";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923134091129";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923134091129,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_05_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICA4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFXQm9wVlR4SU54NFdHQ1RSaUcrSzlrVHNoODdYUUhTd2dhQzd5SVUzQ009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFNMDlZOFR4UUY2alphQVdLeWZRUXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzI4ZjQ5OGEtMWU3Yi00YjVjLWEyMGQtZTcwOTcwNjkwY2E3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTkxLFxuICAgICAgNjEsXG4gICAgICAyMCxcbiAgICAgIDIxMyxcbiAgICAgIDEyNixcbiAgICAgIDk4LFxuICAgICAgMTEyLFxuICAgICAgMTc4LFxuICAgICAgOCxcbiAgICAgIDQ3LFxuICAgICAgMTM5LFxuICAgICAgMjYsXG4gICAgICAyMjcsXG4gICAgICAyNDksXG4gICAgICA5NixcbiAgICAgIDIwMixcbiAgICAgIDAsXG4gICAgICAyNyxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAyNDIsXG4gICAgICAyMTQsXG4gICAgICAxMTMsXG4gICAgICAyMzMsXG4gICAgICAxNjgsXG4gICAgICAyMzgsXG4gICAgICAxNDYsXG4gICAgICAyMzEsXG4gICAgICAxNzYsXG4gICAgICAyMzUsXG4gICAgICA3NSxcbiAgICAgIDE5MSxcbiAgICAgIDk0LFxuICAgICAgMTM2LFxuICAgICAgMTksXG4gICAgICAxNjQsXG4gICAgICAyNDgsXG4gICAgICAxODMsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDI0SzFUM0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzNDA5MTEyOTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZifCdmZbwnZme8J2Zo/CdmaRfXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ5MjY1OTA5MjI3NTk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLVDFvZHNCRUw2RnhMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1keEx6YlpZRWtSbmlwdHNjRUtyeWJKY29MVjlBSzZocU53N2FYK05jRVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRHpYYzhqTEM5QW1oM2J4aXEwZFNVY1FyZllQVndnbThhcXJ3VlNxWC95K1VoWng2Yk5zZ00wRjJUN2xkTmJWUFhnZVpyVGcrcEZ1THo2VmtLZkFJQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZGM0Njk1NTMyOFBuRXYvZHAzWUZ6U1FoSE8rZi9SSzdycHpubTl0d0F2dzhnb3lHUkp4NzVXNm15NkFHOWJqSDhkVUVxM2tWcXI1czhKL3F4Q01LZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTM0MDkxMTI5OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQ1OTUyM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Nainoo",


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
