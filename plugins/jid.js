module.exports = {
        command: 'jid',
        description: 'loku riko mini bot v2 to take jid id♥️',
        execute: async (socket, msg, args, number) => {
         const sender = msg.key.remoteJid;   
    const chatJid = sender;
        
        await socket.sendMessage(sender, {
            text: `${chatJid}`
        });
            
        }
}
