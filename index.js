const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = 'v!';

bot.on('ready', () =>{
        console.log('This bot is online!');
        bot.user.setActivity('Lubie Vostixa'); // ustaw status                 //, { type: "CUSTOM_STATUS" }).catch(console.error);
})

bot.on('message', msg=>{
        if(msg.content === "v!siema"){          //v!siema
                msg.reply('Siema kolego');
        }
})


bot.on('message', msg=>{
        if(msg.content === "v!gra"){            //v!gra
                msg.channel.bulkDelete(1);
        }
})

bot.on('message', message=>{
        
        let args = message.content.substring(PREFIX.length).split(" ");

        switch(args[0]){
                case 'clear':
                        if(!args[1]) return message.reply('Error please define second arg')
                        message.channel.bulkDelete(args[1]);
                        break;
        }
})

bot.on('message', msg=>{
        if(msg.content === "v!twitch"){            //v!twitch
                msg.channel.bulkDelete(1);
                msg.channel.sendMessage('``Link do kanału vostixa:``\n https://twitch.tv/vostixpl');
        }
})

//bot.on('message', msg=>{
  //      if(msg.content === "v!help"){            //v!help
    //            msg.channel.sendMessage('**moje komendy:**\n`v!twitch\nv!clear\nv!gra\nv!siema\n`');
      //  }
// })


//bot.on('message', message=>{
        
        //let args = message.content.substring(PREFIX.length).split(" ");

       // switch(args[0]){
                //case 'tst':
                      //  if(!args[1]) return message.reply('Error please define second arg')
                      //  message.channel.bulkDelete(args[1]);
                     //   break; 
              //  } 
        
//})

bot.on('message', msg=>{
        if(msg.content === "v!help"){            //v!help
                msg.channel.bulkDelete(1);
                msg.channel.sendMessage('**moje komendy:**\n`v!twitch\nv!clear\nv!gra\nv!siema\n`');
        }
})


bot.login(process.env.token);
