const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here okay here remind it in your brain not in your ass get it we're mendez🫵,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255749750707";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255749750707";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_39_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExLFxuICAgICAgICA0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTXkzRXY0VnhIemZjM20rSWpYTURuS1hVYjFWL1pYWGtjN2kwdklqSE9LYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN2pIajNycndUcFdxTDBiTnBIZkJlQVwiLFxuICBcInBob25lSWRcIjogXCI2NWFhYjllZS01ODY3LTRhNTktOGM5Zi1jMDE2NTBlYjE3NDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAyMTksXG4gICAgICAxMzEsXG4gICAgICAxNjYsXG4gICAgICAxMzMsXG4gICAgICA0NSxcbiAgICAgIDQwLFxuICAgICAgNTcsXG4gICAgICA1MyxcbiAgICAgIDEyOSxcbiAgICAgIDI1MSxcbiAgICAgIDk2LFxuICAgICAgMTAxLFxuICAgICAgODksXG4gICAgICAxMixcbiAgICAgIDE3MixcbiAgICAgIDEyNSxcbiAgICAgIDgyLFxuICAgICAgMTE1LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDc4LFxuICAgICAgMTY5LFxuICAgICAgMTE1LFxuICAgICAgMTM0LFxuICAgICAgNDksXG4gICAgICAxMzgsXG4gICAgICAyMDEsXG4gICAgICA5NCxcbiAgICAgIDE1NCxcbiAgICAgIDIzMixcbiAgICAgIDI1MixcbiAgICAgIDE2MyxcbiAgICAgIDExOSxcbiAgICAgIDExLFxuICAgICAgMTk0LFxuICAgICAgMTczLFxuICAgICAgNDYsXG4gICAgICA3MixcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQZzNyVUZFUC9YMHJrR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWUVkdzJhSFBXZndPdnJNVEFha3YwYlRGZVpETE5TUTJ5ZENObkV2dVlGWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmSVgyVW9vVUMycnhwMFFQRGh0eEFtQVA2U1Mza2c2aVZxUXdvMTAveFFiYytreXRFNUFXUHYyZDRwa3pNU1dPeTR4aHUwdmthNnZuU0IrdHVMQm9BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCZ2pZZGVuamJ1dXpWOElSVmNneFBEbU5vWFlOajVibE1qQXBVdFdQc1FDZklkT0QzaHRaUmhCWjBRU2JLMmFrWVFhQXJjbGtYS1J6S3pPbXR4NWhDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0OTc1MDcwNzo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIigtXy0pIPCdkIPwnZCU8J2Qg/CdkJTwnZCUX/CdkIzwnZCE8J2QjfCdkIPwnZCZIPCdkJXwnZ+SICgtXy0pXCIsXG4gICAgXCJsaWRcIjogXCIyNjI2NTkxMjc2NDAxNjk6OTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDk3NTA3MDc6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNTA1MTU1XG59Igp9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
