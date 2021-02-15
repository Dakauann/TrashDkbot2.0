const adult = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostra os detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostra os usuarios bloqueados 
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostra todos os usuários que usaram o bot
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostra a velocidade de conexão do bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reporta o bug pro meu dono 
╿
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : Manda imagens de hentai +18 aleatória
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : Manda fotos porno de traps
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Manda fotos de neko +18
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.adult = adult
