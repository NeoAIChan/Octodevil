module.exports = [
  {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:**anal** hurts! But, pain is pleasure~}{image:$jsonRequest[https://nekos.life/api/v2/img/anal;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==anal_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Here's your **blowjob gif**~}{image:$jsonRequest[https://nekos.life/api/v2/img/bj;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==blowjob_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Here is **boobs** darling~}{image:$jsonRequest[https://nekos.life/api/v2/img/boobs;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==boobs_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Ahhhhh! I'm **cuming**~}{image:$jsonRequest[https://nekos.life/api/v2/img/cum;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==cum_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Eheheh **feet fetish**~}{image:$jsonRequest[https://nekos.life/api/v2/img/feetg;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==feet_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Eheheh **does my pussy feel good?**~}{image:$jsonRequest[https://nekos.life/api/v2/img/classic;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==hentai_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
  $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Ahhh! **kunii**~}{image:$jsonRequest[https://nekos.life/api/v2/img/kuni;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==kuni_gif;]
  `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:$randomText[Do you like **hentai**~?;Mmmm **hentai** can you do this to me?]}{image:$jsonRequest[https://nekos.life/api/v2/img/Random_hentai_gif;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]


    $onlyIf[$interactionData[options.data[0].value]==random_hentai_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Ittaiii **nyaaaa**~}{image:$jsonRequest[https://nekos.life/api/v2/img/nsfw_neko_gif;url]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==nsfw_neko_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Wanna play with my **pussy**~}{image:$randomText[$jsonRequest[https://nekos.life/api/v2/img/pussy;url];$jsonRequest[https://nekos.life/api/v2/img/les;url];$jsonRequest[https://nekos.life/api/v2/img/solog;url]]}};;;;yes]

    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]

    $onlyIf[$interactionData[options.data[0].value]==pussy_gif;]
    `
  }, {
    name: "ero",
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[;{newEmbed:{color:$getServerVar[pinkHex]}{title:Yhaaa! **Yamete Kudasai!**~}{image:$jsonRequest[https://nekos.life/api/v2/img/spank;url]}};;;;yes]
    
    $cooldown[10s;{"content":" <a:dp_star6:835142297125519420> You're using this ero command so fast, uhm pwease wait **%time%**-","ephemeral": true, "options":{"interaction" : true}}]
    `
   }
]
