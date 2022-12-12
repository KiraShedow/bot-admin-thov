const TelegramBot = require('node-telegram-bot-api');
const token = '5832494129:AAEz8AQ3jq7sHcE_uWoykfLZbyvq7jHS6qQ';

const bot = new TelegramBot(token, { polling: true });

function startingBot(){
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;

        if(text === '/start@botisiambot' || '/start'){
            const adv_help =  {
                reply_markup: {
                      inline_keyboard: [
                        [
                          {
                            text: "Поддержка",
                            url: "https://t.me/Nika4357",
                          },  
                        ],
                        [
                          {
                              text: "Получить доступ в платный канал с открытыми контактами",
                              url: "https://t.me/purchasing_a_subscription_bot",
                            },
                        ],
                        [
                            {
                              text: "Оставить свою заявку в чате",
                              url: "https://t.me/special77_77",
                            },  
                          ],
                      ],  
                    }, 
                   parse_mode: 'HTML'
                }
                async function helloInformMessage(){
                    await bot.sendMessage(chatId, `<b><i> чтобы видеть все контакты в заявках нужно получить доступ в платный канал  </i></b>`,  adv_help);
                }
                helloInformMessage()
    
    
                // setInterval( async () => {
                //     await bot.sendPhoto(msg.chat.id, './img/ava.png');
                //    await  bot.sendMessage(msg.chat.id, `<b><i> Приветственное сообщение </i></b>`,  adv_help);
                // }, 3600000)
        }  
    })
}
startingBot()

// function bodyMessage (){
//     bot.on('callback_query', async msg => {
//         const data = msg.data;
//         const chatId = msg.message.chat.id;

//         const goRun = 'go';

    
//     })
// }
// bodyMessage()


// bot.on('message', async (msg) => {
//     const chatId = msg.chat.id;
//     const text = msg.text;

    // if(text === '/start'){
    //     await bot.sendMessage(chatId, 'заходи в наш магазин по кнопке ниже ', {
    //         reply_markup: {
    //             inline_keyboard: [
    //                 [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
    //             ]
    //         }
    //     })
    // }

//     if(msg?.web_app_data?.data){
//         try {
//             const data = JSON.parse(msg?.web_app_data?.data);

//             await bot.sendMessage(chatId, 'Спасибо за заявку')
//             await bot.sendMessage(chatId, 'Ваша страна ' + data?.country);
//             await bot.sendMessage(chatId, 'Ваша улица ' + data?.street);

//             setTimeout( async () => {
//                 await bot.sendMessage(chatId, 'Мы уже выезжаем за вами');
//             }, 3000)
//         } catch (e) {
//             console.log(e);
//         }
//     }
// });