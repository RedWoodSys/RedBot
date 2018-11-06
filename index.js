const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login("NDgyMDkzNzQ0NTQ0NDE1NzU0.DmAi6w.AyEmahIdooRQ5MqbGicj-tBtAiw")

robot.on("ready", async () => {
    robot.user.setActivity("RedWood Servers");
});

robot.on('message',(message)=>{
    if(message.content =="!ping"){
        message.channel.send(`Pong! Now ping is  ` + Math.round(robot.ping) + ` ms!`)
    }
});

robot.on('message',(message)=>{
    if(message.content =="!help"){
        message.channel.send("To view server rules type !rules")
        message.channel.send("To view help on russian type !help-ru")
        message.channel.send("To view server rules on russian type !rules-ru")
        message.channel.send("To view Minecraft server rules type !srules")
        message.channel.send("To view Minecraft server rules on russian type !rules-ru")
        message.channel.send("-------------------------------------------------------------------")
        message.channel.send("Help 1-1")
    }
});

robot.on('message',(message)=>{
    if(message.content =="!rules"){
        message.channel.send("To view server rules on russian type !rules-ru")
        message.channel.send("*** Welcome to RedWoodTeam server [RWT]! If you want to stay here longer, read the rules before you start using ***")
        message.channel.send("* Use your current nicknames in games. This will greatly facilitate the search and communication")
        message.channel.send("It is forbidden to spam into channels (both voice and text). Spam means a multiple repetition of identical replicas or messages that do not make sense.")
        message.channel.send("It is forbidden to post pornographic content and content (Tin)")
        message.channel.send("I can not and do not want to limit you in using profanity. But I earnestly ask you to treat with tolerance for each other, not to spoil yourself and the rest of the mood. I will delete all, in my opinion, obscene content, cope with conflicts and apply to the rudest participants measure. *")
        message.channel.send("-------------------------------------------------------------------")
        message.channel.send("Rules 1-1")
    }
});

robot.on('message',(message)=>{
    if(message.content =="!rules-ru"){
        message.channel.send("***Добро пожаловать на сервер RedWoodTeam[RWT]! Если хочешь задержаться здесь подольше, прочитай правила, прежде чем начать пользоваться***")
        message.channel.send("*Используй свои актуальные никнеймы в игре. Это значительно облегчит поиск и коммуникацию")
        message.channel.send("Запрещается спамить в каналы (как голосовые, так и текстовые). Под спамом понимается многочисленное повторение идентичных реплик или сообщения, не несущие смысла.")
        message.channel.send("Запрещается размещать порнографические материалы и материалы содержание (Жесть)")
        message.channel.send("Я не могу и не хочу ограничивать тебя в использовании ненормативной лексики. Но я убедительно прошу тебя относиться с терпимостью друг к другу, не портить себе и остальным настроение. Я буду удалять весь, на мой взгляд, непотребный контент, присекать конфликты и применять к самым грубым участникам меры.*")
        message.channel.send("-------------------------------------------------------------------")
        message.channel.send("Правила 1-1")
    }
});

robot.on('message',(message)=>{
    if(message.content =="!help-ru"){
        message.channel.send("Чтобы просмотреть правила сервера напишите !rules-ru")
        message.channel.send("Чтобы просмотреть правила Minecraft сервера напишите !srules-ru")
        message.channel.send("-------------------------------------------------------------------")
        message.channel.send("Помощь 1-1")
    }
});

robot.on('message',(message)=>{
    if(message.content =="Торт"){
        message.channel.send("Где торт?! Гоните его сюда!")
    }
});


robot.on('message',(message)=>{
    if(message.content =="!srules-ru"){
        message.channel.send("Запрещено обращаться к Администрации сервера без крайней необходимости. Любое обращение к Администрации должно содержать четкое изложение проблемы игрока или вопрос, касающийся конкретно работы сервера.")
        message.channel.send("Запрещено неуважительное отношение к Администрации сервера.")
        message.channel.send("Запрещены угрозы, мольбы и т.п. в адрес Администрации сервера как на форуме, так и в игре.")
        message.channel.send("Запрещено вмешательство в работу Администрации.")
        message.channel.send(" Запрещен обман Администрации.")
        message.channel.send("Запрещено обсуждать наказание, наложенное Администрацией.")
        message.channel.send("Запрещено распространять слухи, клевету о сервере и Администрации.")
        message.channel.send("Запрещена публикация бесед с Администрацией либо их содержания без предварительного согласования.")
        message.channel.send("Использование читов, программ, мешающих нормальному функционированию сервера, в том числе программ, мешающих нормальной игре, недокументированных возможностей игры, кроме возможностей являющихся общеизвестными. В случае несоблюдения данного пункта ,понести наказание по решению админестратора.ц")
        message.channel.send("-------------------------------------------------------------------")
        message.channel.send("Правила 1-1")
    }
});
robot.on('message',(message)=>{
    if(message.content =="!srules"){
        message.channel.send("To view Minecraft server rules on russian type !rules-ru")
        message.channel.send("It is forbidden to contact the Server Administration without emergency. Any appeal to the Administration should contain a clear statement of the player's problem or a question regarding the operation of the server.")
        message.channel.send("It is forbidden to disrespect the Server Administration.")
        message.channel.send("Threats, pleas, etc. are forbidden. to the Administration of the server both on the forum and in the game.")
        message.channel.send("Interference in the work of the Administration is prohibited.")
        message.channel.send("The deception of the Administration is forbidden.")
        message.channel.send("It is forbidden to discuss the punishment imposed by the Administration.")
        message.channel.send("It is forbidden to spread rumors, slander about the server and the Administration.")
        message.channel.send("It is prohibited to publish interviews with the Administration or their contents without prior approval.")
        message.channel.send("Use of cheats, programs that interfere with the normal functioning of the server, including programs that interfere with normal play, undocumented game features, except for opportunities that are generally known. In the event of non-compliance with this clause, be punished by the decision of the administrator.")
        message.channel.send("-------------------------------------------------------------------")
        message.channel.send("Rules 1-1")
    }
});