const education = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostra a lista de usuários bloqueados
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostra os usuários do bot
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostra a velocidade de conexão do bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : reportar bug ao dono
╿
┷┯ *〈 EDUCATION 〉*
   ╽
   ┠≽ *${prefix}wiki* <query>
   ┃ *Desc* : Pesquisa coisas na wiki [Apenas em indonesio]
   ┠──────────────╼
   ┠≽ *${prefix}wikien* <o que você quer pesquisar>
   ┃ *Desc* : Pesquisa coisas na wiki [Em inglês]
   ┠──────────────╼
   ┠≽ *${prefix}nulis* <text>
   ┃ *Desc* : Escreve qualquer coisa em um livro
   ┠──────────────╼
   ┠≽ *${prefix}quotes*
   ┃ *Desc* : Manda quotes aleatórios
   ┠──────────────╼
   ┠≽ *${prefix}quotes2*
   ┃ *Desc* : Manda quotes aleatórios2
   ┠──────────────╼
   ┠≽ *${prefix}tafsirmimpi* <seu sonho>
   ┃ *Desc* : Mostra a interpretação de um sonho
   ┠──────────────╼
   ┠≽ *${prefix}translate* <language_code>|<texto>
   ┃ *Desc* : Traduz uma palavra
   ┠──────────────╼
   ┠≽ *${prefix}artinama* <name>
   ┃ *Desc* : Interpreta nomes
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.education = education
