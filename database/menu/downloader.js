const downloader = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostra todos os usuarios do bot
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostra a velocidade de conexão do bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reporta um bug ao dono
╿
┷┯ *〈 DOWNLOADER 〉*
   ╽
   ┠≽ *${prefix}pinterest* <coisa que você quer uma foto>
   ┃ *Desc* : Baixa imagem do Pinterest
   ┠──────────────╼
   ┠≽ *${prefix}ytmp3* <linkyt>
   ┃ *Desc* : Baixa videos do youtube em mp3
   ┠──────────────╼
   ┠≽ *${prefix}ytmp4* <linkyt>
   ┃ *Desc* : Baixa videos do youtube em mp4
   ┠──────────────╼
   ┠≽ *${prefix}tiktok* <linktiktok>
   ┃ *Desc* : baixa videos do tiktok
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.downloader = downloader
