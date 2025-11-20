const { default: makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./space/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./space/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./space/iconic_tech')
let afk = require("./space/space-xmd");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./space/premiun')
const { fetchBuffer, buffergif } = require("./space/iconic_tech2")


//database
let premium = JSON.parse(fs.readFileSync('./moon/space.json'))
let _owner = JSON.parse(fs.readFileSync('./moon/owner.json'))
let owner = JSON.parse(fs.readFileSync('./moon/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./moon/space.json'))
let hit = JSON.parse(fs.readFileSync('./moon/user.json'))



//time


// Get current time in Harare, Zimbabwe
const currentTime = moment.tz('Africa/Harare');
const xtime = currentTime.format('HH:mm:ss');
const xdate = currentTime.format('DD/MM/YYYY');

let timewisher;

// Determine greeting based on time
const hour = parseInt(currentTime.format('HH'));

if (hour >= 0 && hour < 5) {
    timewisher = "Good Night 🌙";
} else if (hour >= 5 && hour < 11) {
    timewisher = "Good Morning ☀️";
} else if (hour >= 11 && hour < 15) {
    timewisher = "Good Afternoon 🌤️";
} else if (hour >= 15 && hour < 19) {
    timewisher = "Good Evening 🌆";
} else if (hour >= 19 && hour <= 23) {
    timewisher = "Good Night 🌙";
}

// Example usage:
console.log(`${timewisher}, the current time in Harare is ${xtime} on ${xdate}.`);
module.exports = IconicTechInc = async (IconicTechInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await IconicTechInc.decodeJid(IconicTechInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await IconicTechInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [onwernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = IconicTechInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? IconicTechInc.user.id.split(':')[0] + "@s.whatsapp.net" || IconicTechInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(IconicTechInc, m, premium);
//group chat msg by 
const reply = (teks) => {
IconicTechInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${BotName}`,
"body": `${onwername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./SpaceMedia/spacelogo.jpg`),
"sourceUrl": ``}}},
{ quoted: m})
}

async function loading() {  
    const lod = [  
        "🟦□□□□□□□□□□ 10%",  
        "🟦🟦🟦🟦□□□□□□□□ 30%",  
        "🟦🟦🟦🟦🟦🟦🟦□□□ 50%",  
        "🟦🟦🟦🟦🟦🟦🟦🟦🟦□□ 80%",  
        "🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 100%",  
        "✅ *Space XMD Loaded Successfully!* 🚀"  
    ];  

    // Send initial loading message
    let { key } = await IconicTechInc.sendMessage(from, { text: '*Space XMD is loading...* ⏳' });  

    // Iterate over the progress steps
    for (let i = 0; i < lod.length; i++) {  
        await IconicTechInc.sendMessage(from, { text: lod[i], edit: key });  
        // Optional: add a small delay for realism
        await new Promise(resolve => setTimeout(resolve, 800));  
    }  
}

        if (!IconicTechInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            IconicTechInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        IconicTechInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        IconicTechInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        IconicTechInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let recordin = ['recording','composing']
        let recordinfinal = recordin[Math.floor(Math.random() * recordin.length)]
        IconicTechInc.sendPresenceUpdate(recordinfinal, from)

        }
        
if (autobio) {
    const ownerName = onwername || "Iconic Tech";
    const statuses = [
        `🚀 Space XMD - 24/7 Online! Developed by ${onwername}`,
        `💡 Space XMD is ready! Visit www.codewave-unit-force.zone.id`,
        `🎵 Space XMD - Music, Fun & More!`,
        `⏳ Space XMD is loading...`,
        `⚡ Stay tuned! Space XMD by ${onwername}`
    ];

    // Pick a random status
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    IconicTechInc.updateProfileStatus(randomStatus).catch(_ => _);
}
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return IconicTechInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await IconicTechInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await IconicTechInc.getName(i)}\nFN:${await IconicTechInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./moon/user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./moon/user.json'))[0].hit_cmd
        }
        
    
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./moon/space.json', JSON.stringify(_afk))
                IconicTechInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 2)
                    return reply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    reply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    reply("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./moon/space.json", JSON.stringify(premium));
                    }
                    reply("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./moon/space.json", JSON.stringify(premium));
                    reply("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return reply(mess.owner)
                let data = require("./moon/space.json")
                let txt = `*------ã€Œ LIST PREMIUM ã€------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                IconicTechInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await IconicTechInc.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                } catch {
                    reply('Failed to join the Group')
                }
                break      
            
            
            case 'autoread':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtype':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autolikestatus': {
             if (!isCreator) return reply("Only my owner can use this command ")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  likestatus = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  likestatus = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'update': {
    if (!isCreator) {
        return reply('🚫 Sorry, only the bot owner can use this command.');
    }

    const repoOwner = 'iconic05'; 
    const repoName = 'Space-XMD'; // Space XMD repo only
    const branch = 'main';
    const localDir = './';

    const projectName = 'Space XMD';
    const version = 'v2.0.0';

    if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir, { recursive: true });
    }

    async function downloadFile(filePath) {
        if (filePath.endsWith('/')) {
            reply(`⚠️ Directory sync not supported directly: ${filePath}`);
            return;
        }

        const rawUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${filePath}`;
        try {
            reply(`⬇️ Fetching: ${filePath}`);
            const response = await fetch(rawUrl);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.text();
            const localFilePath = path.join(localDir, filePath);

            fs.mkdirSync(path.dirname(localFilePath), { recursive: true });
            fs.writeFileSync(localFilePath, data, 'utf8');

            reply(`✅ Updated: ${filePath}`);
        } catch (error) {
            reply(`❌ Failed to update: ${filePath}\nReason: ${error.message}`);
            reply(`⚠️ ${projectName} Auto Update failed.\nTry: *.repo* → Sync fork → Redeploy latest version.`);
            throw error;
        }
    }

    // Files for Space XMD
    const filesToDownload = [
        'Space-Xmd.js',
        'space.js',
        'setting.js',
        'package.json'
    ];

    reply(`⚙️ Starting update process for *${projectName}* ...`);

    Promise.all(filesToDownload.map(file => downloadFile(file)))
        .then(() => {
            replyl(`🎉 *${projectName}* successfully updated to latest version ${version}\n👨‍💻 Developed by *Iconic Tech* contact us ${global.codewave_contact}`);
        })
        .catch((error) => {
            replyl(`⚠️ Update partially completed with errors: ${error.message}`);
        });

    break;
}
            case 'autobio':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    IconicTechInc.public = true
                    reply(mess.done)
                } else if (q == 'self') {
                    IconicTechInc.public = false
                    reply(mess.done)
                }
                break           
            case 'setpp':
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await IconicTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await IconicTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await IconicTechInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'block':
    if (!isCreator) return reply(mess.owner)
    
    let blockw;
    if (m.mentionedJid[0]) {
        blockw = m.mentionedJid[0];
    } else if (m.quoted) {
        blockw = m.quoted.sender;
    } else if (text) {
        // Extract numbers only and ensure proper JID format
        const number = text.replace(/[^0-9]/g, '');
        if (number.length > 5) { // Basic validation for phone numbers
            blockw = number + '@s.whatsapp.net';
        } else {
            return reply('Please provide a valid phone number or mention a user');
        }
    } else {
        return reply('Please mention a user, quote a message, or provide a phone number');
    }
    
    try {
        const res = await IconicTechInc.updateBlockStatus(blockw, 'block');
        reply(json(res));
    } catch (err) {
        console.error('Block error:', err);
        reply(json(err));
    }
    break;
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await IconicTechInc.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'leave':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                reply('Bye Everyone ðŸ¥º')
                await IconicTechInc.groupLeave(m.chat)
                break           
            // 1️⃣ Broadcast Tag All (fancy style)
case 'broadcast': {
    if (!m.isGroup) return reply(mess.group);

    let messageText = `✨🌌 *SPACE XMD BROADCAST* 🌌✨\n\n`;
    messageText += `💬 *Message:* ${q ? q : 'No message provided'}\n\n`;
    messageText += `📌 *Members:* \n`;

    for (let mem of participants) {
        messageText += `• 🔹 @${mem.id.split('@')[0]}\n`;
    }

    messageText += `\n🚀 *Developed by Iconic Tech*`;

    await IconicTechInc.sendMessage(m.chat, {
        text: messageText,
        mentions: participants.map(a => a.id)
    }, { quoted: m });
}
break;

// 2️⃣ Group Info (show dynamic info about the group)
case 'groupinfo': {
    if (!m.isGroup) return reply(mess.group);

    const groupName = m.chat.split('@')[0];
    const totalMembers = participants.length;
    const admins = participants.filter(p => p.admin).length;

    let infoText = `🛸 *SPACE XMD GROUP INFO* 🛸\n\n`;
    infoText += `📌 *Group Name:* ${groupName}\n`;
    infoText += `👥 *Total Members:* ${totalMembers}\n`;
    infoText += `⭐ *Admins:* ${admins}\n`;
    infoText += `💡 *Created At:* ${m.messageTimestamp ? new Date(m.messageTimestamp * 1000).toLocaleString() : 'Unknown'}\n`;
    infoText += `\n✨ *Powered by Iconic Tech*`;

    await IconicTechInc.sendMessage(m.chat, { text: infoText }, { quoted: m });
}
break;

// 4️⃣ Promote Great Channel (broadcast your channel)
case 'channelpromo': {
    if (!q) return reply('❌ Please provide your channel link!');

    let channelText = `📢 *SPACE XMD CHANNEL PROMO* 📢\n\n`;
    channelText += `✨ Check out this amazing channel: ${q}\n\n`;
    channelText += `🌟 Don’t miss out! \n`;
    channelText += `\n🚀 *Developed by Iconic Tech*`;

    await IconicTechInc.sendMessage(m.chat, { text: channelText }, { quoted: m });
}
break;
            case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('The message was not sent by a bot!')
                IconicTechInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    IconicTechInc.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    IconicTechInc.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await IconicTechInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
                // 🐶 1. Random Dog
case 'dog': {
  try {
    const resp = await axios.get('https://dog.ceo/api/breeds/image/random');
    const img = resp.data.message;
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: img },
      caption: `🐶 *Random Dog Image*\n\n> *POWERED BY SPACE XMD*`
    }, { quoted: m });
  } catch (e) {
    console.error('Error in dog case:', e);
    reply('❌ Could not fetch dog image.');
  }
  break;
}

// 🐕 2. Random Dog (alt)
case 'randomdog': {
  try {
    const resp = await axios.get('https://random.dog/woof.json');
    const img = resp.data.url;
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: img },
      caption: `🐕 *Here’s a Random Dog for you!*\n\n> *POWERED BY SPACE XMD*`
    }, { quoted: m });
  } catch (e) {
    console.error('Error in randomdog case:', e);
    reply('❌ Could not fetch random dog.');
  }
  break;
}

// 🐱 3. Random Cat
case 'cat': {
  try {
    const resp = await axios.get('https://api.thecatapi.com/v1/images/search');
    const img = resp.data[0].url;
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: img },
      caption: `🐱 *Random Cat Image*\n\n> *POWERED BY SPACE XMD*`
    }, { quoted: m });
  } catch (e) {
    console.error('Error in cat case:', e);
    reply('❌ Could not fetch cat image.');
  }
  break;
}

// 🐈 4. Cat GIF (CATAAS)
case 'cataas': {
  try {
    const img = 'https://cataas.com/cat/gif'; // random cat gif
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: img },
      caption: `🐈 *CATAAS Random Cat GIF*\n\n> *POWERED BY SPACE XMD*`
    }, { quoted: m });
  } catch (e) {
    console.error('Error in cataas case:', e);
    reply('❌ Could not fetch cat gif.');
  }
  break;
}

// 🦊 5. Random Fox
case 'fox': {
  try {
    const resp = await axios.get('https://randomfox.ca/floof/');
    const img = resp.data.image;
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: img },
      caption: `🦊 *Random Fox Image*\n\n> *POWERED BY SPACE XMD*`
    }, { quoted: m });
  } catch (e) {
    console.error('Error in fox case:', e);
    reply('❌ Could not fetch fox image.');
  }
  break;
}
         case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await IconicTechInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await IconicTechInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await IconicTechInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await IconicTechInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await IconicTechInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
                case 'cmdslist':
case 'commands': {
    try {        

        // Read your main Space-XMD.js file
        const filePath = path.join(__dirname, 'Space-Xmd.js');
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Match all `case 'xxx'` or `case "xxx"` occurrences
        const caseMatches = fileContent.match(/case ['"`](.*?)['"`]/g) || [];

        // Extract command names and remove duplicates using Set
        const commandSet = new Set(caseMatches.map(c => c.replace(/case ['"`](.*?)['"`]/, '$1')));
        const allCommands = Array.from(commandSet);

        const message = 
`📜 *SPACE XMD - COMMANDS LIST* 📜

Total Commands: ${allCommands.length}

${allCommands.map((cmd, index) => `🛸${index + 1}. ${cmd}`).join('\n')}

⚡ Developed by *ICONIC TECH*`;

        await IconicTechInc.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (e) {
        console.error("Error in cmdslist case:", e);
        reply("⚠️ Unable to fetch commands list at the moment.");
    }
}
break;
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await IconicTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await IconicTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await IconicTechInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'tagall': {
    if (!m.isGroup) return reply(mess.group);

    let messageText = `📢 *SPACE XMD TAG ALL* 📢\n\n` +
                      `💬 *Message:* ${q ? q : 'blank'}\n\n`;

    for (let mem of participants) {
        messageText += `• @${mem.id.split('@')[0]}\n`;
    }

    await IconicTechInc.sendMessage(m.chat, {
        text: messageText,
        mentions: participants.map(a => a.id)
    }, { quoted: m });
}
break;

case 'hidetag': {
    if (!m.isGroup) return reply(mess.group);

    await IconicTechInc.sendMessage(m.chat, {
        text: q ? q : '',
        mentions: participants.map(a => a.id)
    }, { quoted: m });
}
break;
            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                IconicTechInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await IconicTechInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Success In Closing The Group ðŸ•Šï¸`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await IconicTechInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success In Opening The Group ðŸ•Šï¸`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'open') {
                    await IconicTechInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info ðŸ•Šï¸`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await IconicTechInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit InfoðŸ•Šï¸`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await IconicTechInc.groupInviteCode(m.chat)
                IconicTechInc.sendText(m.chat, `ðŸ‘¥ *GROUP LINK INFO*\nðŸ“› *Name :* ${groupMetadata.subject}\nðŸ‘¤ *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\nðŸŒ± *ID :* ${groupMetadata.id}\nðŸ”— *Chat Link :* https://chat.whatsapp.com/${response}\nðŸ‘¥ *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await IconicTechInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break
case 'p':
case 'ping': {
    const start = performance.now();
    const delay = ms => new Promise(res => setTimeout(res, ms));

    // Rocket flight stages
    const rocketBars = [
        "🚀 Launching... [🌍──────────] 0%",
        "🚀 Launching... [🌍🚀─────────] 10%",
        "🚀 Launching... [🌍─🚀────────] 20%",
        "🚀 Launching... [🌍──🚀───────] 30%",
        "🚀 Launching... [🌍───🚀──────] 40%",
        "🚀 Launching... [🌍────🚀─────] 50%",
        "🚀 Launching... [🌍─────🚀────] 60%",
        "🚀 Launching... [🌍──────🚀───] 70%",
        "🚀 Launching... [🌍───────🚀──] 80%",
        "🚀 Launching... [🌍────────🚀─] 90%",
        "🚀 Launching... [🌍─────────🚀] 100%"
    ];

    // Send first message
    let sentMsg = await IconicTechInc.sendMessage(m.chat, { text: rocketBars[0] }, { quoted: m });

    // Animate rocket in one line (edit same msg)
    for (let i = 1; i < rocketBars.length; i++) {
        await delay(400); // speed of rocket
        await IconicTechInc.sendMessage(m.chat, { 
            edit: sentMsg.key, 
            text: rocketBars[i] 
        });
    }

    const end = performance.now();
    const latency = (end - start).toFixed(2);

    // Final message after rocket reaches destination
    await delay(500);
    await IconicTechInc.sendMessage(m.chat, { 
        edit: sentMsg.key,
        text: `🚀 Rocket Arrived!\n\n🏓 *Pong!*\n⏱️ Response Speed: ${latency} ms\n🌌 Powered By *Iconic Tech*`
    });
}
break;
            case 'founder': {
    try {
        const founderMessage = 
`👨‍💻 *FOUNDER INFORMATION - SPACE XMD* 👨‍💻

Hello! I am *Iconic Tech*, the creator and developer behind the following projects:

• *Queen Ruva AI Beta*  
• *ROBIN XMD*  
• *Joker Max XMD*  
• *Codewave Unit MD*  
• *Space XMD*

🌐 *Visit my website:*  
➡️ www.codewave-unit-force.zone.id

⚡ Developed by *ICONIC TECH*`;

        await IconicTechInc.sendMessage(m.chat, { text: founderMessage }, { quoted: m });
    } catch (e) {
        console.error("Error in founder case:", e);
        reply("⚠️ Unable to fetch founder info at the moment.");
    }
}
break;
case 'facebook': {
  if (!text) {
    return reply(`*Example:* ${prefix + command} https://www.facebook.com/reel/336626164957209`);
  }

  try {
    // Fetch Facebook video data from the API
    const apiUrl = `https://api.nexoracle.com/downloader/facebook?apikey=63b406007be3e32b53&url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 15000 });

    // Validate response
    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ *Failed to fetch Facebook video. Try again later.*');
    }

    const { thumb, title, desc, sd } = response.data.result;

    // Send video details with thumbnail
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: thumb },
      caption: `📹 *Facebook Video Downloader* 📹\n\n` +
        `🎬 *Title:* ${title || "No title"}\n` +
        `📝 *Description:* ${desc || "No description"}\n\n` +
        `> *POWERED BY SPACE XMD*`
    }, { quoted: m });

    // Send the video file
    await IconicTechInc.sendMessage(m.chat, {
      video: { url: sd },
      mimetype: 'video/mp4',
      fileName: `${title || "FacebookVideo"}.mp4`,
      caption: `✅ *Here is your Facebook video!*`
    }, { quoted: m });

  } catch (error) {
    console.error('Error in Facebook Downloader:', error?.response?.data || error.message);
    handleApiError(error);
  }

  // Helper function to handle different API errors
  function handleApiError(error) {
    if (error.code === 'ECONNABORTED') {
      reply('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      reply('❌ *Video not found. Please check the link and try again.*');
    } else {
      reply('❌ *An unexpected error occurred. Try again later.*');
    }
  }

  break;
}
            case 'runtime': {
    const runtimetext = `⏱️ SPACE XMD has been running for ${runtime(process.uptime())}`;
    await IconicTechInc.sendMessage(m.chat, { text: runtimetext }, { quoted: m });
}
break;
            case 'repo':
    // Fetch GitHub repo data
    let repoData = await fetch('https://api.github.com/repos/iconic05/Space-XMD').then(res => res.json())
    let thumb = fs.readFileSync('./SpaceMedia/spacelogo.jpg') // Load local thumbnail

    IconicTechInc.sendMessage(m.chat, {
        text: `🚀 *Space XMD Bot Repository*\n\n` +
              `📁 *Repository:* ${repoData.html_url}\n` +
              `📝 *Description:* ${repoData.description || 'A powerful WhatsApp bot'}\n\n` +
              `⭐ *Stars:* ${repoData.stargazers_count}\n` +
              `🍴 *Forks:* ${repoData.forks_count}\n` +
              `👀 *Watchers:* ${repoData.watchers_count}\n` +
              `🐛 *Open Issues:* ${repoData.open_issues_count}\n` +
              `📦 *Size:* ${(repoData.size / 1024).toFixed(2)} MB\n\n` +
              `📅 *Created:* ${new Date(repoData.created_at).toLocaleDateString()}\n` +
              `🔄 *Last Updated:* ${new Date(repoData.updated_at).toLocaleDateString()}\n\n` +
              `🔧 *Maintained by:* Iconic Tech\n` +
              `📜 *License:* ${repoData.license?.name || 'MIT'}\n\n` +
              `_Forks and contributions are welcome!_\n contact us ${global.codewave_contact}`,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `Space XMD Bot v2.0`,
                body: `Advanced WhatsApp Bot by Iconic Tech`,
                thumbnail: thumb, // Use local image buffer
                sourceUrl: repoData.html_url,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
    break
           case 'web': {
    let donateMsg = 
`*🚀 Space XMD Official  Page*  

Hello ${pushname},  
Your contribution keeps *Space XMD* alive and evolving.  

🌍 *Official Website:*  
www.codewave-unit-force.zone.id  

👨‍💻 *Developed by:* Iconic Tech  
contact us ${global.codewave_contact}
_Thank you for supporting innovation and open-source development!_ 🙌`

    IconicTechInc.sendMessage(m.chat, {
        text: donateMsg,
        contextInfo: {
            externalAdReply: {
                title: "Support Space XMD 💚",
                body: "Every donation helps us grow 🚀",
                thumbnail: fs.readFileSync('./SpaceMedia/spacelogo.jpg'), // Project logo
                sourceUrl: "www.codewave-unit-force.zone.id",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
}
break 
case 'play':
case 'song': {
  if (!text) return reply(`🎶 *Example:* ${prefix + command} understand by omah lay`);

  try {
    const search = await yts(text);
    const video = search.videos[0];

    if (!video) return reply(`❌ *No results found for:* ${text}`);

    // 🎵 React before search
    await IconicTechInc.sendMessage(m.chat, { react: { text: "🚀", key: m.key } });

    // 🚀 Dynamic rocket loading
    const loadingMsg = await IconicTechInc.sendMessage(m.chat, { 
      text: `🚀 *SPACE XMD* is scanning network...\n🎶 Searching: ${text}` 
    }, { quoted: m });

    // Delete after 2s
    setTimeout(async () => {
      await IconicTechInc.sendMessage(m.chat, { delete: loadingMsg.key });
    }, 2000);

    // Show found title then delete
    const showTitle = await IconicTechInc.sendMessage(m.chat, { 
      text: `✅ Found: *${video.title}*` 
    }, { quoted: m });
    setTimeout(async () => {
      await IconicTechInc.sendMessage(m.chat, { delete: showTitle.key });
    }, 2000);

    // Current date & time
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB');
    const timeStr = now.toLocaleTimeString('en-GB');

    // 🌌 SPACE XMD Music Box (own style)
    const songBox = `
╭━━━━━⭓🚀⭓━━━━━╮
   🎶 *SPACE XMD MUSIC*
╰━━━━━⭓🌌⭓━━━━━╯
│ 🎧 Title: ${video.title}
│ 🎼 Channel: ${video.author?.name || "Unknown"}
│ ⏳ Duration: ${video.timestamp}
│ 👀 Views: ${video.views.toLocaleString()}
│ 🕒 Uploaded: ${video.ago}
│ 📅 Date: ${dateStr}
│ ⏰ Time: ${timeStr}
│ 🔗 ${video.url}
╭───────────────╮
   🔥 Powered by SPACE XMD
   💻 Dev: Iconic Tech
╰───────────────╯
    `.trim();

    // Send thumbnail + details
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: songBox
    }, { quoted: m });

    // ✅ API + Local fallback system
    let downloadUrl = null;
    let title = video.title;
    let localFile = null;

    const apiList = [
      async () => {
        const url = `https://apiskeith.vercel.app/download/dlmp3?url=${encodeURIComponent(video.url)}`;
        const res = await axios.get(url, { timeout: 10000 });
        if (res.data?.status && res.data.result?.data?.downloadUrl) {
          return {
            title: res.data.result.data.title,
            url: res.data.result.data.downloadUrl
          };
        }
        throw new Error("Keith API failed");
      },
      async () => {
        const url = `https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=${encodeURIComponent(video.url)}`;
        const res = await axios.get(url, { timeout: 10000 });
        if (res.data?.success && res.data.result?.download_url) {
          return {
            title: res.data.result.title,
            url: res.data.result.download_url
          };
        }
        throw new Error("GiftedTech API failed");
      },
      async () => {
        const filePath = path.join(__dirname, `${video.videoId}.mp3`);
        await new Promise((resolve, reject) => {
          const stream = ytdl(video.url, { filter: "audioonly", quality: "highestaudio" })
            .pipe(fs.createWriteStream(filePath));
          stream.on("finish", resolve);
          stream.on("error", reject);
        });
        return {
          title: video.title,
          localFile: filePath
        };
      }
    ];

    for (let api of apiList) {
      try {
        const result = await api();
        if (result.url) {
          downloadUrl = result.url;
          title = result.title || title;
        } else if (result.localFile) {
          localFile = result.localFile;
          title = result.title || title;
        }
        break; 
      } catch (e) {
        console.log("API failed, trying next:", e.message);
      }
    }

    if (!downloadUrl && !localFile) {
      return reply(`❌ *All download sources failed. Please try again later.*`);
    }

    // Send audio with SPACE XMD footer
    if (downloadUrl) {
      await IconicTechInc.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mp4',
        fileName: `${title}.mp3`,
        contextInfo: { externalAdReply: { title: "SPACE XMD", body: "Powered by Iconic Tech" } }
      }, { quoted: m });
    } else {
      await IconicTechInc.sendMessage(m.chat, {
        audio: { url: localFile },
        mimetype: 'audio/mp4',
        fileName: `${title}.mp3`,
        contextInfo: { externalAdReply: { title: "SPACE XMD", body: "Powered by Iconic Tech" } }
      }, { quoted: m });
      fs.unlinkSync(localFile);
    }

    // 🎶 Final smooth delayed message
    await new Promise(resolve => setTimeout(resolve, 1500));
    await IconicTechInc.sendMessage(m.chat, { text: "🎶 Enjoy your music with *SPACE XMD* 🚀" }, { quoted: m });

  } catch (error) {
    console.error('Error during /play command:', error);
    reply(`⚠️ *An error occurred while processing your request. Please try again later.*`);
  }
  break;
}
case 'tiktokphoto': {
  if (!text) {
    return reply(`*Example:* ${prefix + command} <tiktok slideshow url>`);
  }

  try {
    const apiUrl = `https://api.nexoracle.com/downloader/tiktok-photo?apikey=63b406007be3e32b53&url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 15000 });

    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ *Failed to fetch TikTok slideshow. Try again later.*');
    }

    const { slides, link, music } = response.data.result;

    // Send each slide image
    for (const [key, value] of Object.entries(slides)) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: value },
        caption: `🖼️ *TikTok Photo Slide* \n🔗 [View on TikTok](${link})\n\n> *POWERED BY SPACE XMD*`
      }, { quoted: m });
    }

    // Send background music if available
    if (music) {
      await IconicTechInc.sendMessage(m.chat, {
        audio: { url: music },
        mimetype: 'audio/mp4',
        fileName: `TikTok_Music.mp3`,
        caption: `🎶 *TikTok Slideshow Music*`
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error in TikTok Photo Downloader:', error?.response?.data || error.message);
    reply('❌ *Error fetching slideshow. Try again later.*');
  }

  break;
}
case 'tiktokmusic': {
  if (!text) {
    return reply(`*Example:* ${prefix + command} <tiktok video url>`);
  }

  try {
    const apiUrl = `https://api.nexoracle.com/downloader/tiktok-music?apikey=63b406007be3e32b53&url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 15000 });

    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ *Failed to fetch TikTok music. Try again later.*');
    }

    const { title, play, cover, author, duration } = response.data.result;

    // Send cover image + info
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: cover },
      caption: `🎵 *TikTok Music Downloader* 🎵\n\n` +
        `🎤 *Author:* ${author}\n` +
        `🎶 *Title:* ${title}\n` +
        `⏱️ *Duration:* ${duration} sec\n\n` +
        `> *POWERED BY SPACE XMD*`
    }, { quoted: m });

    // Send the music file
    await IconicTechInc.sendMessage(m.chat, {
      audio: { url: play },
      mimetype: 'audio/mpeg',
      fileName: `${title || 'TikTok_Music'}.mp3`
    }, { quoted: m });

  } catch (error) {
    console.error('Error in TikTok Music Downloader:', error?.response?.data || error.message);
    reply('❌ *Error fetching TikTok music. Try again later.*');
  }

  break;
}
// 1️⃣ Invite Case
case 'invite': {
    if (!m.isGroup) return reply('❌ This command can only be used in a group.');

    const groupName = m.subject || 'Unknown Group';
    const totalMembers = participants.length;
    const groupLink = await IconicTechInc.groupInviteCode(m.chat).catch(() => 'No invite link available');
    const owner = participants.find(p => p.admin)?.id.split('@')[0] || 'Unknown';

    let messageText = `🌟 *SPACE XMD INVITE* 🌟\n\n`;
    messageText += `📌 *Group Name:* ${groupName}\n`;
    messageText += `👥 *Total Members:* ${totalMembers}\n`;
    messageText += `🔗 *Group Link:* ${groupLink ? 'https://chat.whatsapp.com/' + groupLink : 'Unavailable'}\n`;
    messageText += `👑 *Owner:* @${owner}\n\n`;
    messageText += `💬 *Message:* ${q ? q : 'Join us and have fun!'}\n\n`;
    messageText += `📣 *Tagging Members:*\n`;

    for (let mem of participants) {
        messageText += `• @${mem.id.split('@')[0]}\n`;
    }

    messageText += `\n🚀 *Share this group with your friends!*`;

    await IconicTechInc.sendMessage(m.chat, {
        text: messageText,
        mentions: participants.map(a => a.id)
    }, { quoted: m });
}
break;
case 'owner': {
  try {
    const repf = await IconicTechInc.sendMessage(from, { 
      contacts: { 
        displayName: `${list.length} Contact`, 
        contacts: list 
      }, 
      mentions: [sender] 
    }, { quoted: m });

    const boxMessage = 
`╔═══《👑 *SPACE XMD OWNER* 👑》═══╗

🙋 Hello @${sender.split("@")[0]}  
Here is the official owner contact info.  

🌐 *Developer Website:*  
➡️ www.codewave-unit-force.zone.id  

💡 Type *repo* to see the bot’s repository.  

╚════════════════════════════╝
⚡ Developed by *ICONIC TECH* ⚡`;

    await IconicTechInc.sendMessage(from, { 
      text: boxMessage, 
      mentions: [sender] 
    }, { quoted: repf });

  } catch (e) {
    console.error("Error in owner case:", e);
    reply("⚠️ Something went wrong while fetching the owner info.");
  }
}
break;
case 'poll': {
  if (!text) {
    return reply(`*Example:* ${prefix + command} <Question> | <Option1> | <Option2> | <Option3> ...`);
  }

  try {
    // Split the text by "|"
    const parts = text.split("|").map(x => x.trim()).filter(x => x);
    if (parts.length < 3) {
      return reply(`⚠️ Please provide at least 1 question and 2 options.\n\n*Example:* ${prefix + command} Best programming language? | JavaScript | Python | Go`);
    }

    const question = parts[0];
    const options = parts.slice(1);

    // Poll object
    const pollData = {
      name: `🗳️ ${question}`,
      values: options,
      selectableCount: 1 // user can pick only one option
    };

    // Send styled poll
    await IconicTechInc.sendMessage(m.chat, {
      poll: pollData
    }, { quoted: m });

    // Follow-up styled info box
    const infoBox = 
`╔═══《📊 *SPACE XMD POLL* 📊》═══╗

❓ *Question:* ${question}

✅ Options Available: ${options.length}  
👥 Participate & cast your vote now!  

╚════════════════════════════╝
⚡ Developed by *ICONIC TECH* ⚡`;

    await IconicTechInc.sendMessage(m.chat, { 
      text: infoBox 
    }, { quoted: m });

  } catch (e) {
    console.error("Error in poll case:", e);
    reply("⚠️ Something went wrong while creating the poll.");
  }

  break;
}
case 'apk': {
  if (!text) {
    return reply(`*Example:* ${prefix + command} WhatsApp`);
  }

  try {
    // Fetch APK data from the new API
    const apiUrl = `https://api.nexoracle.com/downloader/apk?apikey=63b406007be3e32b53&q=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    // Validate response
    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ *Failed to fetch APK. Try again later.*');
    }

    const { name, size, package: pkg, icon, dllink, lastup } = response.data.result;

    // Send APK details with thumbnail image
    await sendApkDetails(m, name, size, pkg, lastup, icon);

    // Send the APK file
    await sendApkFile(m, name, dllink);

  } catch (error) {
    console.error('Error in APK Downloader:', error?.response?.data || error.message);
    handleApiError(error);
  }

  // Helper function to send APK details with thumbnail image
  async function sendApkDetails(m, name, size, pkg, lastup, icon) {
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: icon },
      caption: `📥 *APK Downloader* 📥\n\n` +
        `📌 *Name:* ${name}\n` +
        `📦 *Package:* ${pkg}\n` +
        `📂 *Size:* ${size}\n` +
        `🕒 *Last Update:* ${lastup}\n\n` +
        `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ*`
    }, { quoted: m });
  }

  // Helper function to send the APK file
  async function sendApkFile(m, name, dllink) {
    try {
      await IconicTechInc.sendMessage(m.chat, {
        document: { url: dllink },
        mimetype: 'application/vnd.android.package-archive',
        fileName: `${name}.apk`
      }, { quoted: m });
    } catch (err) {
      console.error('Error sending APK:', err);
      reply('❌ *Failed to send APK file. It might be too large or restricted by WhatsApp.*');
    }
  }

  // Helper function to handle different API errors
  function handleApiError(error) {
    if (error.code === 'ECONNABORTED') {
      reply('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      reply('❌ *APK not found. Please check the name and try again.*');
    } else {
      reply('❌ *An unexpected error occurred. Try again later.*');
    }
  }

  break; // Final break to exit the case after all operations
}
case 'wchannel': {
  if (!text) {
    return reply(`*Example:* ${prefix + command} https://whatsapp.com/channel/0029VaGvk6XId7nHNGfiRs0m`);
  }

  try {
    // Fetch WhatsApp channel data from the API
    const apiUrl = `https://api.nexoracle.com/stalking/whatsapp-channel?apikey=63b406007be3e32b53&url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    // Validate response
    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ *Failed to fetch channel data. Try again later.*');
    }

    const { title, followers, description, image, link, owner } = response.data.result;

    // Send channel details
    await sendChannelDetails(m, title, followers, description, image, link, owner);

  } catch (error) {
    console.error('Error in WhatsApp Channel Stalker:', error?.response?.data || error.message);
    handleApiError(error);
  }

  // Helper function to send channel details
  async function sendChannelDetails(m, title, followers, description, image, link, owner) {
    let caption = `📊 *WhatsApp Channel Info* 📊\n\n` +
                  `👤 *Owner:* ${owner || 'N/A'}\n` +
                  `🏷️ *Title:* ${title || 'N/A'}\n` +
                  `👥 *Followers:* ${followers || 'N/A'}\n` +
                  `📝 *Description:* ${description || 'N/A'}\n` +
                  `🔗 *Link:* ${link || 'N/A'}\n\n` +
                  `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ*`;

    if (image && image !== 'N/A') {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: image },
        caption: caption
      }, { quoted: m });
    } else {
      await reply(caption);
    }
  }

  // Helper function to handle different API errors
  function handleApiError(error) {
    if (error.code === 'ECONNABORTED') {
      reply('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      reply('❌ *Channel not found. Please check the link and try again.*');
    } else {
      reply('❌ *An unexpected error occurred. Try again later.*');
    }
  }

  break; // Final break to exit the case after all operations
}
// 🔥 60 Sticker Cases | BOT: SPACE XMD | DEV: ICONIC TECH
// Using waifu.pics (SFW + NSFW)
// Format: case 'name': { axios.get(...).then(...) } break

// ✅ 30 NORMAL STICKERS
case 'shinobu': {
    axios.get(`https://api.waifu.pics/sfw/shinobu`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'neko': {
    axios.get(`https://api.waifu.pics/sfw/neko`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'hug': {
    axios.get(`https://api.waifu.pics/sfw/hug`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'kiss': {
    axios.get(`https://api.waifu.pics/sfw/kiss`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
// New API endpoints for Space XMD bot
case 'tinyurl': {
    if (!text) return reply(`Example: ${prefix + command} <url>`);
    
    try {
        const apiUrl = `https://apiskeith.vercel.app/shortener/tinyurl?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { timeout: 15000 });
        
        if (!response.data || !response.data.status || !response.data.result) {
            return reply('❌ Failed to shorten URL. Try again later.');
        }
        
        const { original, shortened, info } = response.data.result;
        
        await IconicTechInc.sendMessage(m.chat, {
            text: `🔗 *URL Shortener*\n\n` +
                  `📌 Original: ${original}\n` +
                  `🔁 Shortened: ${shortened}\n` +
                  `ℹ️ Info: ${info}\n\n` +
                  `> POWERED BY SPACE XMD`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error in URL Shortener:', error?.response?.data || error.message);
        reply('❌ Error shortening URL. Try again later.');
    }
    break;
}

case 'screenshot': {
    if (!text) return reply(`Example: ${prefix + command} <url>`);
    
    try {
        const apiUrl = `https://apiskeith.vercel.app/tool/screenshot?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        // The API returns an image directly, so we can send it
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `📸 *Website Screenshot*\n\nURL: ${text}\n\n> POWERED BY SPACE XMD`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error in Screenshot:', error?.response?.data || error.message);
        reply('❌ Error taking screenshot. Try again later.');
    }
    break;
}

case 'translate': {
    if (!text) return reply(`Example: ${prefix + command} <text> | <language code>`);
    
    try {
        // Extract text and target language (format: text | lang)
        const parts = text.split('|');
        const textToTranslate = parts[0].trim();
        const targetLang = parts[1] ? parts[1].trim() : 'en'; // Default to English
        
        const apiUrl = `https://apiskeith.vercel.app/translate?text=${encodeURIComponent(textToTranslate)}&to=${targetLang}`;
        const response = await axios.get(apiUrl, { timeout: 15000 });
        
        if (!response.data || !response.data.result) {
            return reply('❌ Failed to translate text. Try again later.');
        }
        
        const { originalText, translatedText, targetLanguage } = response.data.result;
        
        await IconicTechInc.sendMessage(m.chat, {
            text: `🌐 *Translation*\n\n` +
                  `📝 Original: ${originalText}\n` +
                  `🔤 Translated (${targetLanguage}): ${translatedText}\n\n` +
                  `> POWERED BY SPACE XMD`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error in Translation:', error?.response?.data || error.message);
        reply('❌ Error translating text. Try again later.');
    }
    break;
}

case 'inspirobot': {
    try {
        const apiUrl = 'https://apiskeith.vercel.app/random/inspirobot';
        
        await IconicTechInc.sendMessage(m.chat, {
            image: { url: apiUrl },
            caption: `🎨 *Inspirational Quote*\n\n> POWERED BY SPACE XMD`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error in Inspirobot:', error?.response?.data || error.message);
        reply('❌ Error fetching inspirational image. Try again later.');
    }
    break;
}

case 'randomvideo': {
    try {
        const apiUrl = 'https://apiskeith.vercel.app/random/randomvideo';
        const response = await axios.get(apiUrl, { timeout: 15000 });
        
        // Assuming the API returns a direct video URL or JSON with URL
        let videoUrl = apiUrl;
        if (response.data && response.data.url) {
            videoUrl = response.data.url;
        }
        
        await IconicTechInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: `🎥 *Random Video*\n\n> POWERED BY SPACE XMD`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error in Random Video:', error?.response?.data || error.message);
        reply('❌ Error fetching random video. Try again later.');
    }
    break;
}

case 'ytmp3': {
    if (!text) return reply(`Example: ${prefix + command} <youtube url>`);
    
    try {
        const apiUrl = `https://apiskeith.vercel.app/download/ytmp3?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        if (!response.data || !response.data.status || !response.data.result) {
            return reply('❌ Failed to download YouTube audio. Try again later.');
        }
        
        const { url, filename } = response.data.result;
        
        await IconicTechInc.sendMessage(m.chat, {
            audio: { url },
            mimetype: 'audio/mpeg',
            fileName: filename || 'YouTube_Audio.mp3',
            caption: `🎵 *YouTube to MP3*\n\n📁 Filename: ${filename || 'YouTube_Audio.mp3'}\n\n> POWERED BY SPACE XMD`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error in YouTube MP3:', error?.response?.data || error.message);
        reply('❌ Error downloading YouTube audio. Try again later.');
    }
    break;
}

case 'mediafire': {
    if (!text) return reply(`Example: ${prefix + command} <mediafire url>`);
    
    try {
        const apiUrl = `https://apiskeith.vercel.app/download/mfire?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { timeout: 15000 });
        
        if (!response.data || !response.data.status || !response.data.result) {
            return reply('❌ Failed to fetch MediaFire info. Try again later.');
        }
        
        const { fileName, fileType, size, date, dl_link } = response.data.result;
        
        await IconicTechInc.sendMessage(m.chat, {
            text: `📦 *MediaFire Download Info*\n\n` +
                  `📁 File Name: ${fileName}\n` +
                  `📊 File Type: ${fileType}\n` +
                  `📏 Size: ${size}\n` +
                  `📅 Date: ${date}\n` +
                  `🔗 Download Link: ${dl_link !== 'javascript:void(0)' ? dl_link : 'Not available'}\n\n` +
                  `> POWERED BY SPACE XMD`
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error in MediaFire:', error?.response?.data || error.message);
        reply('❌ Error fetching MediaFire info. Try again later.');
    }
    break;
}

case 'playersearch': {
    if (!text) return reply(`Example: ${prefix + command} <player name>`);
    
    try {
        const apiUrl = `https://apiskeith.vercel.app/sport/playersearch?q=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { timeout: 15000 });
        
        if (!response.data || !response.data.status || !response.data.result || response.data.result.length === 0) {
            return reply('❌ No players found with that name.');
        }
        
        const players = response.data.result.slice(0, 5); // Limit to 5 results
        
        let playerInfo = `⚽ *Player Search Results*\n\n`;
        
        for (const player of players) {
            playerInfo += `👤 Name: ${player.name}\n` +
                         `🏟️ Team: ${player.team}\n` +
                         `🇺🇳 Nationality: ${player.nationality}\n` +
                         `📅 Birth Date: ${player.birthDate}\n` +
                         `⚡ Position: ${player.position}\n` +
                         `-----------------------------\n`;
        }
        
        playerInfo += `\n> POWERED BY SPACE XMD`;
        
        // Send player info
        await IconicTechInc.sendMessage(m.chat, {
            text: playerInfo
        }, { quoted: m });
        
        // Send thumbnails if available
        for (const player of players) {
            if (player.thumbnail) {
                await IconicTechInc.sendMessage(m.chat, {
                    image: { url: player.thumbnail },
                    caption: `${player.name} - ${player.team}`
                }, { quoted: m });
            }
        }
        
    } catch (error) {
        console.error('Error in Player Search:', error?.response?.data || error.message);
        reply('❌ Error searching for players. Try again later.');
    }
    break;
}
case 'pat': {
    axios.get(`https://api.waifu.pics/sfw/pat`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'smile': {
    axios.get(`https://api.waifu.pics/sfw/smile`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'wave': {
    axios.get(`https://api.waifu.pics/sfw/wave`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'wink': {
    axios.get(`https://api.waifu.pics/sfw/wink`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'find': {
  try {
    const sender = m.sender || m.key.participant || m.key.remoteJid;
    const isOwner = global.owner && global.owner.includes(sender);

    // 🗂️ Auto-create database folder & file if missing
    const dbFolder = './database';
    const limitFile = `${dbFolder}/findLimit.json`;

    if (!fs.existsSync(dbFolder)) {
      fs.mkdirSync(dbFolder, { recursive: true });
    }
    if (!fs.existsSync(limitFile)) {
      fs.writeFileSync(limitFile, JSON.stringify({}));
    }

    const limitData = JSON.parse(fs.readFileSync(limitFile));

    // 🕒 Check usage limit if not owner
    if (!isOwner) {
      const now = Date.now();
      const userData = limitData[sender] || { count: 0, last: now };

      // Reset after 3 hours
      if (now - userData.last >= 3 * 60 * 60 * 1000) {
        userData.count = 0;
        userData.last = now;
      }

      if (userData.count >= 3) {
        const remaining = Math.ceil(((userData.last + 3 * 60 * 60 * 1000) - now) / 60000);
        return reply(
          `⛔ *SPACE XMD*\nYou've reached your 3-song limit.\n⏳ Try again in *${remaining} mins*.\n\n👑 *Queen Ruva AI — BETA*\n💻 Dev by Iconic Tech`
        );
      }

      // Increment usage count
      userData.count++;
      limitData[sender] = userData;
      fs.writeFileSync(limitFile, JSON.stringify(limitData, null, 2));
    }

    // 🧠 Song recognition starts
    const quoted = m.quoted ? m.quoted : m;
    const mime = quoted.mimetype || '';
    const isAudioOrVideo = mime.includes('audio') || mime.includes('video');
    if (!isAudioOrVideo) {
      return reply(`🎧 *Reply to a short audio or video clip to find the full song*`);
    }

    await IconicTechInc.sendMessage(m.chat, { react: { text: "🔍", key: m.key } });

    // 📥 Download media buffer
    const mediaBuffer = await quoted.download();
    const base64Audio = mediaBuffer.toString('base64');

    // 🎶 AudD API
    const formData = new URLSearchParams();
    formData.append('api_token', 'fb11f3d511d166d13a70b34009233b9f');
    formData.append('audio', base64Audio);
    formData.append('return', 'apple_music,spotify,youtube');

    const { data } = await axios.post('https://api.audd.io/', formData);
    if (!data || !data.result) {
      return reply(`❌ *Song not recognized.* Try with a clearer or longer clip (≥5s).`);
    }

    const song = data.result;
    const title = song.title || 'Unknown';
    const artist = song.artist || 'Unknown';
    const album = song.album || 'N/A';
    const release = song.release_date || 'N/A';
    const thumbnail = song.spotify?.album?.images?.[0]?.url || song.youtube?.image || null;

    const infoMsg = `
╭━━━🚀 *SPACE XMD* 🚀━━━╮
│ 👑 *Queen Ruva AI — BETA*
│
│ 🎧 *Title:* ${title}
│ 👤 *Artist:* ${artist}
│ 💿 *Album:* ${album}
│ 📅 *Release:* ${release}
│ 📥 *Downloads:* Auto-ready
╰━━━━━━━━━━━━━━━━━━━━━━━╯
💻 *Dev by Iconic Tech*
    `.trim();

    if (thumbnail) {
      await IconicTechInc.sendMessage(m.chat, { image: { url: thumbnail }, caption: infoMsg }, { quoted: m });
    } else {
      await IconicTechInc.sendMessage(m.chat, { text: infoMsg }, { quoted: m });
    }

    // 🔎 YouTube search
    const fullQuery = `${title} ${artist}`;
    const search = await yts(fullQuery);
    const video = search.videos[0];
    if (!video) return reply(`❌ *No matching song found online for:* ${fullQuery}`);

    // 🔽 Download from multiple sources
    const apiList = [
      async () => {
        const url = `https://apiskeith.vercel.app/download/dlmp3?url=${encodeURIComponent(video.url)}`;
        const res = await axios.get(url, { timeout: 10000 });
        if (res.data?.status && res.data.result?.data?.downloadUrl) {
          return { title: res.data.result.data.title, url: res.data.result.data.downloadUrl };
        }
        throw new Error("Keith API failed");
      },
      async () => {
        const url = `https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=${encodeURIComponent(video.url)}`;
        const res = await axios.get(url, { timeout: 10000 });
        if (res.data?.success && res.data.result?.download_url) {
          return { title: res.data.result.title, url: res.data.result.download_url };
        }
        throw new Error("GiftedTech API failed");
      },
      async () => {
        const filePath = path.join(__dirname, `${video.videoId}.mp3`);
        await new Promise((resolve, reject) => {
          const stream = ytdl(video.url, { filter: "audioonly", quality: "highestaudio" })
            .pipe(fs.createWriteStream(filePath));
          stream.on("finish", resolve);
          stream.on("error", reject);
        });
        return { title: video.title, localFile: filePath };
      }
    ];

    let downloadUrl = null;
    let localFile = null;
    let songTitle = video.title;

    for (let api of apiList) {
      try {
        const result = await api();
        if (result.url) downloadUrl = result.url;
        else if (result.localFile) localFile = result.localFile;
        songTitle = result.title || songTitle;
        break;
      } catch (e) {
        console.log("API failed, trying next:", e.message);
      }
    }

    if (!downloadUrl && !localFile) {
      return reply(`❌ *Failed to download song audio.*`);
    }

    if (downloadUrl) {
      await IconicTechInc.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mp4',
        fileName: `${songTitle}.mp3`
      }, { quoted: m });
    } else {
      await IconicTechInc.sendMessage(m.chat, {
        audio: { url: localFile },
        mimetype: 'audio/mp4',
        fileName: `${songTitle}.mp3`
      }, { quoted: m });
      fs.unlinkSync(localFile);
    }

    await IconicTechInc.sendMessage(m.chat, { text: "✅ *Download ready — enjoy your track!*" }, { quoted: m });

  } catch (error) {
    console.error('Error during find command:', error);
    reply(`⚠️ *Song recognition or download failed. Please try again later.*`);
  }
  break;
}
case 'dance': {
    axios.get(`https://api.waifu.pics/sfw/dance`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'highfive': {
    axios.get(`https://api.waifu.pics/sfw/highfive`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'poke': {
    axios.get(`https://api.waifu.pics/sfw/poke`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'slap': {
    axios.get(`https://api.waifu.pics/sfw/slap`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'bite': {
    axios.get(`https://api.waifu.pics/sfw/bite`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'handhold': {
    axios.get(`https://api.waifu.pics/sfw/handhold`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'blush': {
    axios.get(`https://api.waifu.pics/sfw/blush`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'bonk': {
    axios.get(`https://api.waifu.pics/sfw/bonk`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'yeet': {
    axios.get(`https://api.waifu.pics/sfw/yeet`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'cry': {
    axios.get(`https://api.waifu.pics/sfw/cry`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'cuddle': {
    axios.get(`https://api.waifu.pics/sfw/cuddle`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'stick_kick': {
    axios.get(`https://api.waifu.pics/sfw/kick`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'lick': {
    axios.get(`https://api.waifu.pics/sfw/lick`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'bully': {
    axios.get(`https://api.waifu.pics/sfw/bully`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'cryhug': {
    axios.get(`https://api.waifu.pics/sfw/cry`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break

case 'hold': {
    axios.get(`https://api.waifu.pics/sfw/handhold`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'baka': {
    axios.get(`https://api.waifu.pics/sfw/baka`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break

// ✅ 30 NSFW STICKERS
case 'nsfw_neko': {
    axios.get(`https://api.waifu.pics/nsfw/neko`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'nsfw_trap': {
    axios.get(`https://api.waifu.pics/nsfw/trap`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
case 'nsfw_blowjob': {
    axios.get(`https://api.waifu.pics/nsfw/blowjob`).then(({data}) => {
        IconicTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return reply(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await IconicTechInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await IconicTechInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await IconicTechInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
IconicTechInc.downloadAndSaveMediaMessage(quoted, "gifee")
IconicTechInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await IconicTechInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await IconicTechInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    IconicTechInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await IconicTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await IconicTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                IconicTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await IconicTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                IconicTechInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dg.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await IconicTechInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./space/converter')
                let audio = await toPTT(media, 'mp4')
                IconicTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await IconicTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'pinterest': {
  if (!text) {
    return reply(`*Example:* ${prefix + command} https://pin.it/2Vflx5O`);
  }

  try {
    // Fetch Pinterest data from the API
    const apiUrl = `https://delirius-apiofc.vercel.app/download/pinterestdl?url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    // Validate response
    if (!response.data || !response.data.status || !response.data.data) {
      return reply('❌ *Failed to fetch Pinterest data. Try again later.*');
    }

    const { title, description, comments, likes, thumbnail, upload, source, author_name, username, followers, author_url, download } = response.data.data;

    // Send Pinterest details with thumbnail
    await sendPinterestDetails(m, title, description, comments, likes, thumbnail, upload, source, author_name, username, followers, author_url);

    // Send the video
    if (download?.type === 'video' && download?.url) {
      await sendPinterestVideo(m, title, download.url);
    } else {
      reply('❌ *No downloadable video found.*');
    }

  } catch (error) {
    console.error('Error in Pinterest Downloader:', error?.response?.data || error.message);
    handleApiError(error);
  }

  // Helper function to send Pinterest details
  async function sendPinterestDetails(m, title, description, comments, likes, thumbnail, upload, source, author_name, username, followers, author_url) {
    let caption = `📌 *Pinterest Video Info* 📌\n\n` +
                  `🎬 *Title:* ${title || 'N/A'}\n` +
                  `📝 *Description:* ${description || 'N/A'}\n` +
                  `💬 *Comments:* ${comments || 0}\n` +
                  `❤️ *Likes:* ${likes || 0}\n` +
                  `📅 *Upload Date:* ${upload || 'N/A'}\n` +
                  `👤 *Author:* ${author_name || 'N/A'} (${username || 'N/A'})\n` +
                  `👥 *Followers:* ${followers || 'N/A'}\n` +
                  `🔗 *Source:* ${source || 'N/A'}\n` +
                  `🌐 *Author Profile:* ${author_url || 'N/A'}\n\n` +
                  `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ*`;

    if (thumbnail) {
      await IconicTechInc.sendMessage(m.chat, {
        image: { url: thumbnail },
        caption: caption
      }, { quoted: m });
    } else {
      await reply(caption);
    }
  }

  // Helper function to send the Pinterest video
  async function sendPinterestVideo(m, title, url) {
    try {
      await IconicTechInc.sendMessage(m.chat, {
        video: { url: url },
        caption: `🎬 *${title}*`,
        mimetype: 'video/mp4'
      }, { quoted: m });
    } catch (err) {
      console.error('Error sending Pinterest video:', err);
      reply('❌ *Failed to send video. It might be too large or restricted by WhatsApp.*');
    }
  }

  // Helper function to handle API errors
  function handleApiError(error) {
    if (error.code === 'ECONNABORTED') {
      reply('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      reply('❌ *Pinterest video not found. Check the link and try again.*');
    } else {
      reply('❌ *An unexpected error occurred. Try again later.*');
    }
  }

  break;
}
            case 'tourl': {
                reply(mess.wait)
                let media = await IconicTechInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} ðŸ˜…+ðŸ¤”`)
                if (!emoji2) return reply(`Example : ${prefix + command} ðŸ˜…+ðŸ¤”`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await IconicTechInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                    IconicTechInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                    IconicTechInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await IconicTechInc.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext `)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`ã€Œ FLIP TEXT ã€\`\`\`\n*â€¢> Normal :*\n${quere}\n*â€¢> Flip :*\n${flipe}`)
            }
            break
            
            case 'addowner':
                if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${onwernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await IconicTechInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./moon/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./moon/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'weather': {
  if (!text) {
    return reply(`*Example:* ${prefix + command} Islamabad`);
  }

  try {
    // Fetch weather data from the API
    const apiUrl = `https://api.nexoracle.com/search/weather?apikey=63b406007be3e32b53&city=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    // Validate response
    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ *Failed to fetch weather. Try again later.*');
    }

    const { name, sys, main, weather, wind, clouds } = response.data.result;
    const w = weather[0]; // First weather condition

    // Weather icon URL
    const iconUrl = `https://openweathermap.org/img/wn/${w.icon}@2x.png`;

    // Send Weather Report
    await IconicTechInc.sendMessage(m.chat, {
      image: { url: iconUrl },
      caption:
        `🌤️ *Weather Report* 🌤️\n\n` +
        `📍 *City:* ${name}, ${sys.country}\n` +
        `🌡️ *Temperature:* ${main.temp}°C (Feels like ${main.feels_like}°C)\n` +
        `📊 *Min/Max:* ${main.temp_min}°C / ${main.temp_max}°C\n` +
        `💧 *Humidity:* ${main.humidity}%\n` +
        `🌬️ *Wind:* ${wind.speed} m/s at ${wind.deg}°\n` +
        `☁️ *Clouds:* ${clouds.all}%\n` +
        `🌤️ *Condition:* ${w.main} - ${w.description}\n\n` +
        `> *POWERED BY SPACE XMD*`
    }, { quoted: m });

  } catch (error) {
    console.error('Error in Weather Command:', error?.response?.data || error.message);
    handleApiError(error);
  }

  // Helper function to handle API errors
  function handleApiError(error) {
    if (error.code === 'ECONNABORTED') {
      reply('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      reply('❌ *City not found. Please check the spelling and try again.*');
    } else {
      reply('❌ *An unexpected error occurred. Try again later.*');
    }
  }

  break;
}
            case 'welcomemsg': {
    if (!text) return reply(`Usage: ${prefix}welcomemsg on|off`);

    const delay = 2000; // Optional delay before confirmation message
    let statusMsg;

    if (text.toLowerCase() === 'on') {
        global.welcome = true;
        global.goodbye = true;
        statusMsg = '✅ Welcome & Goodbye messages are now *ON* 🎉';
    } else if (text.toLowerCase() === 'off') {
        global.welcome = false;
        global.goodbye = false;
        statusMsg = '❌ Welcome & Goodbye messages are now *OFF* 💤';
    } else {
        return reply(`Usage: ${prefix}welcomemsg on|off`);
    }

    // Send status message
    const msg = await IconicTechInc.sendMessage(m.chat, { text: statusMsg }, { quoted: m });

    // Optional: react with emoji
    await IconicTechInc.sendMessage(m.chat, {
        react: { text: text.toLowerCase() === 'on' ? '✅' : '❌', key: msg.key }
    });

    // Optional: delete confirmation after delay
    setTimeout(async () => {
        await IconicTechInc.sendMessage(m.chat, { delete: msg.key });
    }, delay);
}
break;
            case 'addimage': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('The name of the image?')
                if (Image.includes(q)) return reply("The name you entered is already registered in the database")
                let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                Image.push(q)
                await fsx.copy(delb, `./SpaceMedia/image/${q}.jpg`)
                fs.writeFileSync('./moon/autoreply/image.json', JSON.stringify(Image))
                fs.unlinkSync(delb)
                reply(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Image Name')
                if (!Image.includes(q)) return reply("The image name you entered is not registered")
                let wanu = Image.indexOf(q)
                Image.splice(wanu, 1)
                fs.writeFileSync('./moon/autoreply/image.json', JSON.stringify(Image))
                fs.unlinkSync(`./SpaceMedia/image/${q}.jpg`)
                reply(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the name of the sticker?')
                if (Sticker.includes(q)) return reply("Name Already In Use")
                let delb = await IconicTechInc.downloadAndSaveMediaMessage(quoted)
                Sticker.push(q)
                await fsx.copy(delb, `./SpaceMedia/sticker/${q}.webp`)
                fs.writeFileSync('./moon/autoreply/sticker.json', JSON.stringify(Sticker))
                fs.unlinkSync(delb)
                reply(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the name of the sticker')
                if (!Sticker.includes(q)) return reply("Name Not Registered in Database")
                let wanu = Sticker.indexOf(q)
                StickerIconicTechInc.splice(wanu, 1)
                fs.writeFileSync('./moon/autoreply/sticker.json', JSON.stringify(Sticker))
                fs.unlinkSync(`./SpaceMedia/sticker/${q}.webp`)
                reply(`Successfully Removed Sticker ${q}`)
            }
            break
 case 'menu':
case 'list':
case 'menu2':
case 'commands':
case 'cmd':
    let reaction = (() => {
        const emojis = ['🛰️', '🚀', '☄️','🌌','📡'];
        return emojis[Math.floor(Math.random() * emojis.length)];
    })();

    await IconicTechInc.sendMessage(m.chat, { react: { text: reaction, key: m.key } });

    // Count commands
    let totalCommands = 0;
    try {
        const botCode = fs.readFileSync("./Space-Xmd.js", 'utf-8');
        totalCommands = (botCode.match(/^\s*case\s+['"`]/gm) || []).length;
    } catch (error) {
        console.error('Error counting commands:', error);
        totalCommands = 'N/A';
    }

    // Create the menu message
    let IconicTechIncMENU =  `
┌─❏───────────────❏─┐
      ✦ 𝐒𝐏𝐀𝐂𝐄 𝐗𝐌𝐃 ✦
┌─❏───────────────❏─┘
├◆ ᴏᴡɴᴇʀ: 𝑰𝑪𝑶𝑵𝑰𝑪 𝑻𝑬𝑪𝑯
├◆ ᴜsᴇʀ: ${pushname}
├◆ ᴠᴇʀsɪᴏɴ: 1.0.0
├◆ ᴛɪᴍᴇ: ${xtime} 
├◆ ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}
├◆ ᴄᴏᴍᴍᴀɴᴅs: ${totalCommands}
├◆ ᴅᴀᴛᴇ: ${xdate}
├◆ ᴘʟᴀᴛғᴏʀᴍ: LINUX
├◆ ʀᴜɴᴛɪᴍᴇ: Node.js
├◆      ${timewisher}
└❏───────────────❏

┌ ❏  𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ❏
├◆ .ꜱᴇᴛᴘᴘ
├◆ .ᴜᴘᴅᴀᴛᴇ 
├◆ .ᴊᴏɪɴ
├◆ .ᴀᴜᴛᴏʀᴇᴀᴅ [ᴏɴ/ᴏꜰꜰ]
├◆ .ᴀᴜᴛᴏᴛʏᴘɪɴɢ [ᴏɴ/ᴏꜰꜰ]
├◆ .ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ [ᴏɴ/ᴏꜰꜰ]
├◆ .ᴀᴜᴛᴏʀᴇᴄᴏʀᴅᴛʏᴘᴇ [ᴏɴ/ᴏꜰꜰ]
├◆ .ᴀᴜᴛᴏʙɪᴏ [ᴏɴ/ᴏꜰꜰ]
├◆ .ᴀᴜᴛᴏʟɪᴋᴇꜱᴛᴀᴛᴜꜱ [ᴏɴ/ᴏꜰꜰ]
├◆ .ᴍᴏᴅᴇ [ᴘᴜʙʟɪᴄ/ꜱᴇʟꜰ
├◆ .ʙʟᴏᴄᴋ
├◆ .ᴜɴʙʟᴏᴄᴋ 
├◆ .ʙᴀᴄᴋᴜᴘ
├◆ .ᴀᴅᴅᴏᴡɴᴇʀ
├◆ .ᴅᴇʟᴏᴡɴᴇʀ
├◆ .ʙʀᴏᴀᴅᴄᴀꜱᴛ
├◆ .ᴄʜᴀᴛʙᴏᴛ [ᴏɴ/ᴏꜰꜰ]
├◆ .ᴡᴇʟᴄᴏᴍᴇᴍꜱɢ [ᴏɴ/ᴏꜰꜰ]
└❏───────────────❏
┌ ❏ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ❏
├◆ .ᴄʟᴏꜱᴇᴛɪᴍᴇ
├◆ .ᴏᴘᴇɴᴛɪᴍᴇ
├◆ .ᴋɪᴄᴋ
├◆ .ᴀᴅᴅ
├◆ .ᴘʀᴏᴍᴏᴛᴇ
├◆ .ᴅᴇᴍᴏᴛᴇ
├◆ .ꜱᴇᴛᴅᴇꜱᴄ
├◆ .ꜱᴇᴛᴘᴘɢᴄ
├◆ .ᴛᴀɢᴀʟʟ
├◆ .ʜɪᴅᴇᴛᴀɢ
├◆ .ᴛᴏᴛᴀɢ
├◆ .ɢʀᴏᴜᴘ 
├◆ .ᴇᴅɪᴛɪɴꜰᴏ
├◆ .ʟɪɴᴋɢᴄ
├◆ .ʀᴇᴠᴏᴋᴇ
├◆ .ʟɪꜱᴛᴏɴʟɪɴᴇ
├◆ .ɢʀᴏᴜᴘɪɴꜰᴏ
├◆ .ᴄʜᴀɴɴᴇʟᴘʀᴏᴍᴏ
├◆ .ᴘᴏʟʟ
├◆ .ɪɴᴠɪᴛᴇ
└❏───────────────❏
┌ ❏ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔 ❏
├◆ .ꜱᴛɪᴄᴋᴇʀ
├◆ .ꜱᴍᴇᴍᴇ
├◆ .ᴛᴀᴋᴇ
├◆ .ᴛᴏɪᴍᴀɢᴇ
├◆ .ᴛᴏᴠɪᴅᴇᴏ
├◆ .ᴛᴏᴀᴜᴅɪᴏ
├◆ .ᴛᴏᴍᴘ3
├◆ .ᴛᴏᴠɴ
├◆ .ᴛᴏɢɪꜰ
├◆ .ᴛᴏᴜʀʟ
├◆ .ᴛᴏQʀ
├◆ .ᴛᴏᴠɪᴇᴡᴏɴᴄᴇ
├◆ .ꜰʟɪᴘᴛᴇxᴛ
├◆ .ᴇᴍᴏᴊɪᴍɪx
└❏───────────────❏
┌ ❏ 𝐆𝐀𝐌𝐄𝐒 𝐌𝐄𝐍𝐔 ❏
├◆ .ʟᴏᴛᴛᴇʀʏ
├◆ .ᴘᴏᴋᴇʀ
├◆ .ꜱɪᴍᴏɴ 
├◆ .ᴍᴀꜱᴛᴇʀᴍɪɴᴅ
├◆ .ᴅᴏᴛꜱ
├◆ .ʙᴀᴛᴛʟᴇꜱʜɪᴘ
├◆ .ᴡᴏʀᴅꜱᴇᴀʀᴄʜ
├◆ .ʀᴇʙᴜꜱ
├◆ .ᴊᴜᴍʙʟᴇ
├◆ .ꜱᴘᴏᴛᴅɪꜰꜰ
├◆ .ᴛᴡᴇɴᴛʏ
├◆ .ᴘᴀᴛᴛᴇʀɴ
├◆ .ᴄᴏᴅᴇʙʀᴇᴀᴋ
├◆ .ᴍᴀᴢᴇ
├◆ .ᴄʀᴏꜱꜱᴡᴏʀᴅ
├◆ .ʙᴀʟᴀɴᴄᴇ
├◆ .ᴍᴀᴛᴄʜ
├◆ .ʟᴏɢɪᴄ
├◆ .ʀɪᴅᴅʟᴇ
├◆ .ꜱᴘᴇᴇᴅᴍᴀᴛʜ
├◆ .ꜰᴀꜱᴛᴛʏᴘᴇ
├◆ .ꜱɴᴀᴋᴇ
├◆ .ᴘᴜᴢᴢʟᴇ
├◆ .ᴛʀɪᴠɪᴀ
├◆ .ᴇᴍᴏᴊɪ
├◆ .ᴡᴏʀᴅᴄʜᴀɪɴ
├◆ .ᴄʜᴇꜱꜱ
├◆ .ʙɪɴɢᴏ
├◆ .ʙʟᴀᴄᴋᴊᴀᴄᴋ
├◆ .ꜱᴜᴅᴏᴋᴜ
├◆ .ꜱɴᴀᴋᴇ
├◆ .ᴅɪᴄᴇ
├◆ .ᴄᴏɪɴ
├◆ .Qᴜɪᴢ
├◆ .ʜᴀɴɢᴍᴀɴ
├◆ .ᴍᴇᴍᴏʀʏ
├◆ .ʀᴘꜱ
├◆ .ᴛᴛᴛ
├◆ .ᴡᴏʀᴅ
├◆ .ɢᴜᴇꜱꜱ
├◆ .ᴍᴀᴛʜ
└❏───────────────❏
┌ ❏ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐌𝐄𝐍𝐔 ❏
├◆ .ɴꜱꜰᴡ_ʙʟᴏᴡᴊᴏʙ
├◆ .ɴꜱꜰᴡ_ᴛʀᴀᴘ
├◆ .ɴꜱꜰᴡ_ɴᴇᴋᴏ
├◆ .ʙᴀᴋᴀ
├◆ .ʜᴏʟᴅ
├◆ .ᴄʀʏʜᴜɢ
├◆ .ʙᴜʟʟʏ
├◆ .ʟɪᴄᴋ
├◆ .ꜱᴛɪᴄᴋ_ᴋɪᴄᴋ
├◆ .ᴄᴜᴅᴅʟᴇ
├◆ .ᴄʀʏ
├◆ .ʏᴇᴇᴛ
├◆ .ʙᴏɴᴋ
├◆ .ʙʟᴜꜱʜ
├◆ .ʜᴀɴᴅʜᴏʟᴅ
├◆ .ʙɪᴛᴇ
├◆ .ꜱʟᴀᴘ
├◆ .ᴘᴏᴋᴇ
├◆ .ʜɪɢʜꜰɪᴠᴇ
├◆ .ᴅᴀɴᴄᴇ
├◆ .ᴡɪɴᴋ
├◆ .ᴡᴀᴠᴇ
├◆ .ꜱᴍɪʟᴇ
├◆ .ᴘᴀᴛ
└❏───────────────❏
┌ ❏ 𝐓𝐎𝐎𝐋 𝐌𝐄𝐍𝐔 ❏
├◆ .ᴡᴄʜᴀɴɴᴇʟ <ʟɪɴᴋ>
├◆ .ᴀᴘᴋ <Qᴜᴇʀʏ>
├◆ .ᴄᴍᴅꜱʟɪꜱᴛ 
├◆ .ꜰᴏᴜɴᴅᴇʀ
├◆ .ᴘʟᴀʏᴇʀꜱᴇᴀʀᴄʜ
├◆ .ᴍᴇᴅɪᴀꜰɪʀᴇ <ᴜʀʟ>
├◆ .ʀᴀɴᴅᴏᴍᴠɪᴅᴇᴏ
├◆ .ɪɴꜱᴘɪʀᴏʙᴏᴛ
├◆ .ᴛʀᴀɴꜱʟᴀᴛᴇ
├◆ .ꜱᴄʀᴇᴇɴꜱʜᴏᴛ <ᴜʀʟ>
├◆ .ᴛɪɴʏᴜʀʟ <ᴜʀʟ>
└❏───────────────❏
┌ ❏ 𝐃𝐀𝐖𝐍 𝐌𝐄𝐍𝐔 ❏
├◆ .ᴘʟᴀʏ <Qᴜᴇʀʏ>
├◆ .ᴛɪᴋᴛᴏᴋᴍᴜꜱɪᴄ <Qᴜᴇʀʏ>
├◆ .ᴛɪᴋᴛᴏᴋᴘʜᴏᴛᴏ <Qᴜᴇʀʏ>
├◆ .ᴘɪɴᴛᴇʀᴇꜱᴛ <ᴜʀʟ>
├◆ .ꜰᴀᴄᴇʙᴏᴏᴋ <ᴜʀʟ>
├◆ .ᴠɪᴅᴇᴏ <Qᴜᴇʀʏ>
├◆ .ʏᴛᴍᴘ3 <ᴜʀʟ>
└❏───────────────❏
       ${readmore}
⌈ ᴅᴇꜱɪɢɴᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ ⌉`
if (iconictechMenu === 'v1') {
    try {
        // Array of possible thumbnail images
        const thumbnails = [
            './SpaceMedia/spacelogo.jpg',
            './SpaceMedia/spacelogo2.jpg'
            // Add more images here if needed
        ];
        
        // Select random thumbnail with fallback
        let selectedThumb = './SpaceMedia/spacelogo.jpg';
        if (thumbnails.length > 0) {
            selectedThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)];
            // Verify file exists
            if (!fs.existsSync(selectedThumb)) {
                selectedThumb = './SpaceMedia/spacelogo.jpg';
            }
        }

        // Send image with caption
        await IconicTechInc.sendMessage(m.chat, {
            image: fs.readFileSync(selectedThumb),
            caption: IconicTechIncMENU,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐒𝐏𝐀𝐂𝐄 𝐗𝐌𝐃",
                    newsletterJid: "120363404960091343@newsletter"
                }
            }
        }, { quoted: m });

        // Get sender name
        const senderName = m.pushName || 'User';
        
        // Generate TTS message
        const ttsMessage = `Hello ${senderName},`;
        
        // Try multiple TTS APIs
        const lang = 'en';
        const ttsUrls = [
            `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(ttsMessage)}`,
            `https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(ttsMessage)}`
        ];

        let audioSent = false;
        for (const url of ttsUrls) {
            try {
                await IconicTechInc.sendMessage(m.chat, {
                    audio: { url },
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, { quoted: m });
                audioSent = true;
                break;
            } catch (error) {
                console.error(`[TTS FAILED] ${url}:`, error.message);
            }
        }

        // Fallback to text if TTS fails
        if (!audioSent) {
            await IconicTechInc.sendMessage(m.chat, {
                text: ttsMessage
            }, { quoted: m });
        }

    } catch (error) {
        console.error('Error in v1 menu:', error);
        // Fallback response if everything fails
        await IconicTechInc.sendMessage(m.chat, {
            text: "An error occurred while processing your request."
        }, { quoted: m });
    }

} else if (iconictechMenu === 'v2') {
    // v2: Video
    try {
        await IconicTechInc.sendMessage(m.chat, {
            image: fs.readFileSync('./SpaceMedia/spacelogo.jpg'),
            caption: IconicTechIncMENU,
            gifPlayback: false,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐒𝐏𝐀𝐂𝐄 𝐗𝐌𝐃",
                    newsletterJid: "120363404960091343@newsletter"
                }
            }
        }, { quoted: m });
    } catch (error) {
        console.error('Error sending v2 video:', error);
        await IconicTechInc.sendMessage(m.chat, {
            text: "Couldn't send the video. Please try again later."
        }, { quoted: m });
    }

} else if (iconictechMenu === 'v3') {
    // v3: Alternative Video
    try {
        await IconicTechInc.sendMessage(m.chat, {
            image: fs.readFileSync('./SpaceMedia/spacelogo2.jpg'),
            caption: IconicTechIncMENU,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐒𝐏𝐀𝐂𝐄 𝐗𝐌𝐃",
                    newsletterJid: "120363404960091343@newsletter"
                }
            }
        }, { quoted: m });
    } catch (error) {
        console.error('Error sending v3 video:', error);
        await IconicTechInc.sendMessage(m.chat, {
            text: "Couldn't send the alternative video. Please try again later."
        }, { quoted: m });
    }
}
break;

case 'rps': {
    if (!text) return reply(`Please choose: rock, paper, or scissors\nExample: .rps rock`);
    
    const choices = ['rock', 'paper', 'scissors'];
    const userChoice = text.toLowerCase();
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    
    if (!choices.includes(userChoice)) {
        return reply('Please choose only: rock, paper, or scissors');
    }
    
    let result;
    if (userChoice === botChoice) {
        result = "It's a tie! 🤝";
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        result = "You win! 🎉";
    } else {
        result = "I win! 😎";
    }
    
    const rpsMessage = `🎮 *Rock Paper Scissors* 🎮
    
Your choice: ${userChoice} 
My choice: ${botChoice}

${result}

Play again with .rps`;
    reply(rpsMessage);
    break;
}

case 'ttt': {
    // Initialize or reset game
    if (!global.tictactoe) global.tictactoe = {};
    if (!global.tictactoe[m.chat] || text === 'reset') {
        global.tictactoe[m.chat] = {
            board: Array(9).fill(null),
            player: 'X',
            bot: 'O',
            gameOver: false
        };
        return reply(`🎮 *Tic Tac Toe* 🎮

Board:
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9

Type .ttt [number] to make your move
Type .ttt reset to start over`);
    }
    
    const game = global.tictactoe[m.chat];
    if (game.gameOver) {
        return reply('Game over! Type .ttt reset to start a new game');
    }
    
    // Player's move
    const move = parseInt(text) - 1;
    if (isNaN(move) || move < 0 || move > 8 || game.board[move]) {
        return reply('Invalid move! Choose an empty position (1-9)');
    }
    
    game.board[move] = game.player;
    
    // Check if player wins
    if (checkWin(game.board, game.player)) {
        game.gameOver = true;
        return reply(displayBoard(game.board) + '\n\nYou win! 🎉\nType .ttt reset to play again');
    }
    
    // Check for draw
    if (!game.board.includes(null)) {
        game.gameOver = true;
        return reply(displayBoard(game.board) + '\n\nIt\'s a draw! 🤝\nType .ttt reset to play again');
    }
    
    // Bot's move
    let botMove;
    do {
        botMove = Math.floor(Math.random() * 9);
    } while (game.board[botMove]);
    
    game.board[botMove] = game.bot;
    
    // Check if bot wins
    if (checkWin(game.board, game.bot)) {
        game.gameOver = true;
        return reply(displayBoard(game.board) + `\n\nI win! 😎\nType .ttt reset to play again`);
    }
    
    // Check for draw
    if (!game.board.includes(null)) {
        game.gameOver = true;
        return reply(displayBoard(game.board) + '\n\nIt\'s a draw! 🤝\nType .ttt reset to play again');
    }
    
    reply(displayBoard(game.board) + '\n\nYour turn! Choose a position (1-9)');
    
    function displayBoard(board) {
        return `🎮 *Tic Tac Toe* 🎮

${board[0] || '1'} | ${board[1] || '2'} | ${board[2] || '3'}
---------
${board[3] || '4'} | ${board[4] || '5'} | ${board[5] || '6'}
---------
${board[6] || '7'} | ${board[7] || '8'} | ${board[8] || '9'}`;
    }
    
    function checkWin(board, player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];
        
        return winPatterns.some(pattern => 
            pattern.every(index => board[index] === player)
        );
    }
    break;
}

case 'guess': {
    if (!global.guessGame) global.guessGame = {};
    
    if (text === 'start' || !global.guessGame[m.chat]) {
        global.guessGame[m.chat] = {
            number: Math.floor(Math.random() * 100) + 1,
            attempts: 0,
            maxAttempts: 7
        };
        return reply(`🔢 *Number Guessing Game* 🔢
        
I'm thinking of a number between 1 and 100.
You have ${global.guessGame[m.chat].maxAttempts} attempts to guess it!

Type .guess [number] to make a guess`);
    }
    
    const game = global.guessGame[m.chat];
    const guess = parseInt(text);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        return reply('Please enter a valid number between 1 and 100');
    }
    
    game.attempts++;
    
    if (guess === game.number) {
        const winMessage = `🎉 Correct! You guessed the number ${game.number} in ${game.attempts} attempts!`;
        delete global.guessGame[m.chat];
        return reply(winMessage + '\n\nType .guess start to play again');
    }
    
    if (game.attempts >= game.maxAttempts) {
        const loseMessage = `Game over! The number was ${game.number}.`;
        delete global.guessGame[m.chat];
        return reply(loseMessage + '\n\nType .guess start to play again');
    }
    
    const hint = guess < game.number ? 'higher' : 'lower';
    const remaining = game.maxAttempts - game.attempts;
    reply(`Try again! Go ${hint}. ${remaining} attempt${remaining !== 1 ? 's' : ''} remaining.`);
    break;
}

case 'math': {
    const operations = ['+', '-', '*'];
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const op = operations[Math.floor(Math.random() * operations.length)];
    
    let answer;
    switch (op) {
        case '+': answer = num1 + num2; break;
        case '-': answer = num1 - num2; break;
        case '*': answer = num1 * num2; break;
    }
    
    global.mathChallenge = { answer: answer, timeout: setTimeout(() => {
        if (global.mathChallenge) {
            reply(`Time's up! The answer was ${answer}`);
            delete global.mathChallenge;
        }
    }, 15000) };
    
    reply(`🧮 *Math Challenge* 🧮
    
Solve: ${num1} ${op} ${num2} = ?
    
You have 15 seconds to answer!`);
    break;
}

// Add this handler to check math answers
// This should be placed in the default section of your switch statement
if (global.mathChallenge && !isCmd) {
    const userAnswer = parseInt(budy);
    if (!isNaN(userAnswer)) {
        clearTimeout(global.mathChallenge.timeout);
        if (userAnswer === global.mathChallenge.answer) {
            reply('✅ Correct! Well done! 🎉');
        } else {
            reply(`❌ Wrong! The correct answer was ${global.mathChallenge.answer}`);
        }
        delete global.mathChallenge;
    }
}

case 'word': {
    const words = [
        'javascript', 'python', 'computer', 'keyboard', 'monitor',
        'programming', 'algorithm', 'database', 'network', 'security',
        'website', 'application', 'developer', 'software', 'hardware'
    ];
    
    if (!global.wordGame) global.wordGame = {};
    
    if (text === 'start' || !global.wordGame[m.chat]) {
        const word = words[Math.floor(Math.random() * words.length)];
        const hiddenWord = word.replace(/./g, '_');
        
        global.wordGame[m.chat] = {
            word: word,
            revealed: hiddenWord.split(''),
            attempts: 0,
            maxAttempts: 10,
            guessedLetters: []
        };
        
        return reply(`🔤 *Word Guessing Game* 🔤
        
Word: ${hiddenWord.split('').join(' ')}
Length: ${word.length} letters

Guess a letter or the whole word!
You have ${global.wordGame[m.chat].maxAttempts} attempts.`);
    }
    
    const game = global.wordGame[m.chat];
    const guess = text.toLowerCase();
    
    if (guess.length === 0) {
        return reply('Please enter a letter or word guess');
    }
    
    game.attempts++;
    game.guessedLetters.push(guess);
    
    if (guess === game.word) {
        const winMessage = `🎉 Correct! The word was "${game.word}"! You guessed it in ${game.attempts} attempts.`;
        delete global.wordGame[m.chat];
        return reply(winMessage + '\n\nType .word start to play again');
    }
    
    if (guess.length === 1) {
        let found = false;
        for (let i = 0; i < game.word.length; i++) {
            if (game.word[i] === guess) {
                game.revealed[i] = guess;
                found = true;
            }
        }
        
        if (!found) {
            reply(`Letter "${guess}" not found! ❌`);
        } else {
            reply(`Good guess! Letter "${guess}" is in the word. ✅`);
        }
    }
    
    if (game.revealed.join('') === game.word) {
        const winMessage = `🎉 You win! The word was "${game.word}"! You guessed it in ${game.attempts} attempts.`;
        delete global.wordGame[m.chat];
        return reply(winMessage + '\n\nType .word start to play again');
    }
    
    if (game.attempts >= game.maxAttempts) {
        const loseMessage = `Game over! The word was "${game.word}".`;
        delete global.wordGame[m.chat];
        return reply(loseMessage + '\n\nType .word start to play again');
    }
    
    const remaining = game.maxAttempts - game.attempts;
    reply(`Word: ${game.revealed.join(' ')}
    
Attempts: ${game.attempts}/${game.maxAttempts}
Guessed letters: ${game.guessedLetters.join(', ') || 'None'}
    
${remaining} attempt${remaining !== 1 ? 's' : ''} remaining.`);
    break;
}

case 'dice': {
    const userRoll = Math.floor(Math.random() * 6) + 1;
    const botRoll = Math.floor(Math.random() * 6) + 1;
    
    let result;
    if (userRoll > botRoll) {
        result = "You win! 🎉";
    } else if (userRoll < botRoll) {
        result = "I win! 😎";
    } else {
        result = "It's a tie! 🤝";
    }
    
    const diceMessage = `🎲 *Dice Battle* 🎲
    
You rolled: ${userRoll}
I rolled: ${botRoll}

${result}

Play again with .dice`;
    reply(diceMessage);
    break;
}
case 'chatbot': {
    if (!text) return reply(`Usage: ${prefix}chatbot on|off`);

    const delay = 3000; // 3 seconds delay
    let msgText;

    if (text.toLowerCase() === 'on') {
        global.chatbot = true;
        msgText = '💬🤖 Chatbot now *ON* ✅✨';
    } else if (text.toLowerCase() === 'off') {
        global.chatbot = false;
        msgText = '💬🤖 Chatbot now *OFF* ❌💤';
    } else {
        return reply(`Usage: ${prefix}chatbot on|off`);
    }

    // Send the ON/OFF message
    const msg = await IconicTechInc.sendMessage(m.chat, { text: msgText }, { quoted: m });

    // React to the message with an emoji
    await IconicTechInc.sendMessage(m.chat, { react: { text: '⚡', key: msg.key } });

    // After delay, send the developed-by message and delete the ON/OFF message
    setTimeout(async () => {
        await IconicTechInc.sendMessage(m.chat, { text: '🚀 Developed by ICONIC TECH – SPACE XMD 🌌' });
        await IconicTechInc.sendMessage(m.chat, { delete: msg.key });
    }, delay);
}
break;

case 'coin': {
    const outcomes = ['Heads', 'Tails'];
    const userChoice = text.toLowerCase();
    const result = outcomes[Math.floor(Math.random() * outcomes.length)];
    
    if (!userChoice || (userChoice !== 'heads' && userChoice !== 'tails')) {
        return reply('Please choose: heads or tails\nExample: .coin heads');
    }
    
    const win = userChoice.toLowerCase() === result.toLowerCase();
    
    const coinMessage = `🪙 *Coin Flip* 🪙
    
You chose: ${userChoice}
Result: ${result}

${win ? 'You win! 🎉' : 'You lose! 😎'}

Play again with .coin`;
    reply(coinMessage);
    break;
}




            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
        }
    } catch (err) {
        IconicTechInc.sendText(onwernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})