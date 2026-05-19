const { formatMessage } = require('../lib/formatter');
const os = require('os');
const moment = require('moment');


module.exports = {
        command: 'system',
        description: 'Show the system',
        execute: async (socket, msg, args, number) => {
            const uptime = process.uptime();
            const formattedUptime = moment.utc(uptime * 1000).format("HH:mm:ss");

            const memoryUsage = process.memoryUsage();
            const usedMemory = (memoryUsage.rss / 1024 / 1024).toFixed(2);
            const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
            const freeMem = (os.freemem() / 1024 / 1024).toFixed(2);
            const cpuInfo = os.cpus()[0].model;

const caption = `*🍀 𝐋𝐎𝐊𝐔 𝐑𝐈𝐊𝐎 𝐌𝐈𝐍𝐈 𝐁𝐎𝐓 𝐕2 🍀*

*╭─「 𝐁ᴏᴛ 𝐃ᴇᴛᴀɪʟꜱ 」 ──●●➤* 

*◈ 🤖 Platform:* ${os.platform()}
*◈ 🖥️ Arch:* ${os.arch()}
*◈ 💾 Uptime:* ${formattedUptime}
*◈ 🧠 RAM Usage:* ${usedMemory} MB / ${totalMem} MB
*◈ ⚙️ Free Memory:* ${freeMem} MB
*◈ 🔌 CPU:* ${cpuInfo}

*◈ ⚙️ Node:* ${process.version}
*◈ 📂 Working Dir:* ${process.cwd()}

*◈ 🧩 Modules Loaded:* ${Object.keys(require.cache).length}
*◈ 👤 User:* ${os.userInfo().username}

*╰──────────●●➤*

> '*𝐓𝙷𝙴 𝐖𝙾𝚁𝙻𝙳 𝐁𝙴𝚂𝚃 𝐖𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝐁𝙾𝚃*'

>'*𝐋𝙾𝙺𝚄 𝐑𝙸𝙺𝙾 𝐌𝙸𝙽𝙸 𝐁𝙾𝚃*'
            

            const sender = msg.key.remoteJid;

            await socket.sendMessage(sender, {
                image: { url: 'https://i.postimg.cc/d0GRqL6N/In-Shot-20251105-181815424.jpg' }, // Confirm accessibility
                caption,
                contextInfo: {
                    mentionedJid: ['94751635330@s.whatsapp.net'],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363285295780590@newsletter',
                        newsletterName: '𝘓𝘖𝘒𝘜 𝘙𝘐𝘒𝘖 𝘔𝘐𝘕𝘐 𝘉𝘖𝘛 𝘝2🪻',
                        serverMessageId: 143
                    }
                }
            })
        }
}
