// ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
//                 GNU GENERAL PUBLIC LICENSE
//                     Version 3, 29 June 2007
//         Copyright (C) 2007 Free Software Foundation
//     Everyone is permitted to ๐ฐ๐ผ๐ฝ๐ ๐ฎ๐ป๐ฑ ๐ฑ๐ถ๐๐๐ฟ๐ถ๐ฏ๐๐๐ฒ verbatim copies
//         of this license document, ๐ฏ๐๐ ๐ฐ๐ต๐ฎ๐ป๐ด๐ถ๐ป๐ด ๐ถ๐ ๐ถ๐ ๐ป๐ผ๐ ๐ฎ๐น๐น๐ผ๐๐ฒ๐ฑ.
//                 ----> โขYouTube๐บDownloader ยฉ๏ธโข <----
//             Discord YouTube Downloader Bot
//     has been licensed under GNU General Public License
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐๐ฝ๐ฒ๐ฉ๐ผ๐ถ๐ฑ๐ฆ๐ผ๐๐น | ๐๐๐ฝ๐ฒ๐ฉ๐ผ๐ถ๐ฑ๐๐ฎ๐ฏ | ๐๐๐ฝ๐ฒ๐ฉ๐ผ๐ถ๐ฑ๐
// ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
console.clear();
require(`dotenv`).config();
const สแดแด๊ฐษชx = process.env.BotFix;
const สแดแดแดแดสแดแดแดแด = process.env.YouTubeFix;
const { Client } = require(`youtubei`);
const Discord = require(`discord.js`);
const สสแดแดสแดแดแดแดสแด = new Discord.Client();
const แด แดษชแดแดแดกษด = require(`discord-ytdl-core`);
const { createWriteStream } = require(`fs`);
const สสแดแดสแดแดแดแดสแดserver = require(`./server`);
const แด แดษชแดษชแด = new Client();
const สแดแดสษช๊ฑแดแดแดแดแดแดสษด = /^.*(list=)([^#\&\?]*).*/gi;
const สแดแดษขแดแดแดแดแดแดแดสษด =
  /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
// =============================================================================================================================
`----> โขYouTube๐บDownloader ยฉ๏ธโข <----
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
----> โขYouTube๐บDownloader ยฉ๏ธโข <----`;
// ============================================================================================================================
if (สแดแด๊ฐษชx === undefined) {
  console.log(`----> โขYouTube๐บDownloader ยฉ๏ธโข <----\n\nPrefix is undefined`);
  return;
}
if (สแดแดแดแดสแดแดแดแด === undefined) {
  console.log(
    `----> โขYouTube๐บDownloader ยฉ๏ธโข <----\n\nYouTubeTok is undefined`
  );
  return;
}
// =============================================================================================================================
`----> โขYouTube๐บDownloader ยฉ๏ธโข <----
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
----> โขYouTube๐บDownloader ยฉ๏ธโข <----`;
// ============================================================================================================================
สสแดแดสแดแดแดแดสแด.on(`ready`, () => {
  console.clear();
  สสแดแดสแดแดแดแดสแด.user.setActivity(`๐บ ${สแดแด๊ฐษชx}yt `, { type: `WATCHING` });
  console.log(`
โขYouTube๐บDownloader ยฉ๏ธโข |>โขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโข
|
|๐บโขโข  Bot_Status : ๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ-๐ ๐๐๐ถ๐ฐ ๐๐ ๐พ๐๐๐๐๐ ! 
|๐บโขโข  Check Discord for: ๐ ${สแดแด๊ฐษชx}yt   
|
โขYouTube๐บDownloader ยฉ๏ธโข |>โขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโข`);
});
// =============================================================================================================================
`----> โขYouTube๐บDownloader ยฉ๏ธโข <----
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
----> โขYouTube๐บDownloader ยฉ๏ธโข <----`;
// ============================================================================================================================
try {
  สสแดแดสแดแดแดแดสแด.on(`guildCreate`, (guild) => {
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === `text` &&
        channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
    );
    channel.send("@everyone");
    channel
      .send(
        new MessageEmbed()
          .setColor("#B33F40")
          .setAuthor(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setImage(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setThumbnail(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setFooter("๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab")
          .setDescription(
            `
๐๐ฒ๐ฎ๐ฟ: @everyone
=========โ๏ธ=========
แด channel ษดแดแดแด **yt๐บdownloader** inside **๐ฑKrakinz** has been successfully created.
Please use the channel for any **๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ** commands..`
          )
      )
      .catch(console.error);
    // =============================================================================================================================
    `----> โขYouTube๐บDownloader ยฉ๏ธโข <----
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
----> โขYouTube๐บDownloader ยฉ๏ธโข <----`;
    // ============================================================================================================================
    channel
      .send(
        new MessageEmbed()
          .setColor("#B33F40")
          .setAuthor(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setImage(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setThumbnail(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setFooter("๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab")
          .setDescription(`
โค๏ธโ๐ฅ **Hey there MUSIC lovers !**
โข|  _I got you all covered with direct download music from สแดแดแดแดสแด._

:candy:**สแดแด แดแดแดแดแดษดแด** 
โข|  _Please use ${สแดแด๊ฐษชx}yt YouTube Url_


:star:**ษดแดแดแด to** @everyone:
แด channel ษดแดแดแด **yt๐บdownloader** inside **๐ฑKrakinz** has been successfully created.
Please use only that channel for any **ษดแดษชส_แดสแดสแดส** commands..`)
      )
      .catch(console.error);
    // =============================================================================================================================
    `----> โขYouTube๐บDownloader ยฉ๏ธโข <----
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
----> โขYouTube๐บDownloader ยฉ๏ธโข <----`;
    // ============================================================================================================================
    guild.channels
      .create("๐ฑKRAKINZ", {
        type: "category",
        permissionOverwrites: [
          { id: guild.id, deny: ["VIEW_CHANNEL"] },
          { id: guild.id, allow: ["VIEW_CHANNEL"] },
        ],
      })
      .then((parent) => {
        guild.channels
          .create("yt๐บdownloader", {
            type: "text",
            parent,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: [
                  "MANAGE_ROLES",
                  "MANAGE_NICKNAMES",
                  "MANAGE_CHANNELS",
                  "KICK_MEMBERS",
                  "BAN_MEMBERS",
                ],
              },
              {
                id: guild.id,
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "READ_MESSAGE_HISTORY",
                ],
              },
            ],
          })
          .catch(console.error);
        return;
      });
  });
  // =============================================================================================================================
  `----> โขYouTube๐บDownloader ยฉ๏ธโข <----
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
----> โขYouTube๐บDownloader ยฉ๏ธโข <----`;
  // ============================================================================================================================
} catch (ErrorNoir) {
  console.error(ErrorNoir);
}
// =============================================================================================================================
`----> โขYouTube๐บDownloader ยฉ๏ธโข <----
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
----> โขYouTube๐บDownloader ยฉ๏ธโข <----`;
// ============================================================================================================================
สสแดแดสแดแดแดแดสแด.on(`message`, async (message) => {
  if (message.author.bot) return;
  if (
    message.content.startsWith(สแดแด๊ฐษชx + `yt`) &&
    message.channel.name !== `yt๐บdownloader`
  ) {
    if (
      message.guild.channels.cache.find(
        (channel) => channel.name === `yt๐บdownloader`
      )
    ) {
      const embedfactor = new Discord.MessageEmbed()
        .setColor("#B33F40")
        .setTitle(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setDescription(
          `
**โ ๏ธWARNINGโ ๏ธ** 
**User:** ${message.author}
---------------------|๐บ|---------------------\n
โข|  _Please use the channel **yt๐บdownloader** for any สแดแดแดแดสแด download_`
        )
        .setImage(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setThumbnail(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setFooter(`๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab`);
      message.channel.send(embedfactor).catch(console.error);
      return;
    }
    if (
      message.guild.channels.cache.find(
        (channel) => channel.name !== `yt๐บdownloader`
      )
    ) {
      const embedfactor = new Discord.MessageEmbed()
        .setColor("#B33F40")
        .setTitle(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setDescription(
          `
**โ ๏ธWARNINGโ ๏ธ** 
**User:** ${message.author}
---------------------|๐บ|---------------------\n
โข|  _Please use the channel **yt๐บdownloader** for any สแดแดแดแดสแด download._
โข|  _Text channel **yt๐บdownloader** is not present._
โ ๏ธ _Please แด๊ฑแด the **แดแดแดษชษด๊ฑ/แดแดแดแดส๊ฑ** to make one with proper permissions._`
        )
        .setImage(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setThumbnail(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setFooter(`๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab`);
      message.channel.send(embedfactor).catch(console.error);
      return;
    }
  }
  // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
  if (message.content.startsWith(สแดแด๊ฐษชx + `calib`)) {
    // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
    if (message.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
      const embedcheck1 = new Discord.MessageEmbed()
        .setColor("#B33F40")
        .setTitle(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setDescription(
          `
๐๐ฒ๐ฎ๐ฟ **ADMIN** 
โข|  _แด channel ษดแดแดแด yt๐บdownloader has been successfully created._
โข|  _Please use the channel for any สแดแดแดแดสแด download._`
        )
        .setImage(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setThumbnail(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setFooter(`๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab`);
      message.channel.send(embedcheck1).catch(console.error);
      message.guild.channels.create("yt๐บdownloader", {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: message.guild.roles.everyone,
          },
        ],
      });
      console.log(`โขYouTube๐บDownloader ยฉ๏ธโข has been successfully created.`);
    } else {
      const embedcheck2 = new Discord.MessageEmbed()
        .setColor("#B33F40")
        .setTitle(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setDescription(
          `
๐๐ฒ๐ฎ๐ฟ **ADMIN** 
---------------------|๐บ|---------------------\n
โข|  _แด channel ษดแดแดแด yt๐บdownloader could not be created._
โข|  ๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐ด๐ถ๐๐ฒ ๐บ๐ฒ ๐๐ต๐ฒ๐๐ฒ ๐ฝ๐ฒ๐ฟ๐บ๐ถ๐๐๐ถ๐ผ๐ป๐:
=๐๐ข๐ฏ๐ข๐จ๐ฆ๐๐ฉ๐ข๐ฏ๐ฏ๐ฆ๐ญ
=๐๐ฆ๐ฏ๐ฅ๐๐ฆ๐ด๐ด๐ข๐จ๐ฆ๐ด
=๐๐ต๐ต๐ข๐ค๐ฉ๐๐ฆ๐ฅ๐ช๐ข
=๐๐ฎ๐ฃ๐ฆ๐ฅ๐ด`
        )
        .setImage(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setThumbnail(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setFooter(`๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab`);
      message.channel.send(embedcheck2).catch(console.error);
      console.log(`โขYouTube๐บDownloader ยฉ๏ธโข could not be created.`);
      return;
    }
  }
  // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
  if (
    !message.content.startsWith(สแดแด๊ฐษชx + `yt https://www.youtube`) &&
    message.channel.name === `yt๐บdownloader`
  ) {
    const embedThanks = new Discord.MessageEmbed()
      .setColor("#B33F40")
      .setTitle(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
      .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
      .setDescription(
        `
โค๏ธโ๐ฅ **Hey there สแดแดแดแดสแด สแดแด แดส !**
---------------------|๐บ|---------------------\n
**โ ๏ธWARNINGโ ๏ธ** 
โข|  _Please use ${สแดแด๊ฐษชx}yt **YouTube Url**_
`
      )
      .setImage(
        `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
      )
      .setThumbnail(
        `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
      )
      .setFooter(
        `๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab`,
        `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
      );
    message.channel
      .send(embedThanks)
      .then((message) => {
        message.delete({ timeout: 8000 });
      })
      .catch(console.error);
    return;
  }
  // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
  if (
    message.content.startsWith(สแดแด๊ฐษชx + `yt`) &&
    message.channel.name === `yt๐บdownloader`
  ) {
    let แดสษข๊ฑ = message.content.split(` `).slice(1);
    if (
      !message.content.startsWith(สแดแด๊ฐษชx + `yt`) &&
      สแดแดษขแดแดแดแดแดแดแดสษด.test(แดสษข๊ฑ[0])
    ) {
      if (message.author) {
        message.delete();
      }
      try {
        message.delete();
        const embed1 = new Discord.MessageEmbed()
          .setColor("#B33F40")
          .setTitle(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setDescription(
            `
**โ ๏ธWARNINGโ ๏ธ** 
**User:** ${message.author}
---------------------|๐บ|---------------------\n
โข|  _Please use **${สแดแด๊ฐษชx}yt สแดแดแดแดสแด url**_`
          )
          .setImage(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setThumbnail(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setFooter(
            `โขYouTube๐บDownloader ยฉ๏ธโข`,
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          );
        message.channel
          .send(embed1)
          .then((message) => {
            message.delete({ timeout: 8000 });
          })
          .catch(console.error);
        return;
      } catch (DevLog) {
        console.log(DevLog);
      }
    }
    // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
    if (สแดแดสษช๊ฑแดแดแดแดแดแดสษด.test(แดสษข๊ฑ[0])) {
      try {
        message.delete();
        const embed2 = new Discord.MessageEmbed()
          .setColor("#B33F40")
          .setTitle(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setDescription(
            `
**โ ๏ธWARNINGโ ๏ธ** 
**User:** ${message.author}
---------------------|๐บ|---------------------\n
โข|  Please send **๐ ๐ฐ๐ถ๐๐ถ๐ฃ๐ฆ   _๐๐ช๐ฏ๐จ๐ญ๐ฆ/๐๐ฐ๐ฏ-๐๐ญ๐ข๐บ๐ญ๐ช๐ด๐ต_   ๐๐ณ๐ญ๐ด ๐๐ฏ๐ญ๐บ**`
          )
          .setImage(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setThumbnail(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setFooter(
            `โขYouTube๐บDownloader ยฉ๏ธโข`,
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          );
        message.channel
          .send(embed2)
          .then((message) => {
            message.delete({ timeout: 8000 });
          })
          .catch(console.error);
        return;
      } catch (DevLog) {
        message.channel.send(
          `There was an error finishing the reqst.\n_${DevLog}_`
        );
      }
    }
    // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
    if (!แดสษข๊ฑ[0]) {
      try {
        const embed3 = new Discord.MessageEmbed()
          .setColor("#B33F40")
          .setTitle(`๐ฌ๐ผ๐๐ง๐๐ฏ๐ฒ๐บ๐๐ฒ๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setDescription(
            `
**โ ๏ธWARNINGโ ๏ธ** 
**User:** ${message.author}
---------------------|๐บ|---------------------\n
โข|  _Please enter the **YouTube URL** of a song !_

โข|  _For Ex:_ **${สแดแด๊ฐษชx}yt https://www.youtube\.com**`
          )
          .setImage(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setThumbnail(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setFooter(
            `โขYouTube๐บDownloader ยฉ๏ธโข`,
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          );
        message.channel
          .send(embed3)
          .then((message) => {
            message.delete({ timeout: 8000 });
          })
          .catch(console.error);
        return;
      } catch (DevLog) {
        message.channel.send(
          `There was an error finishing the reqst.\n_${DevLog}_`
        );
      }
    }
    // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
    let สแดแดแดแดแดแดส;
    let สแดแด๊ฑแดสแดแดแดแดส;
    // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
    try {
      สแดแด๊ฑแดสแดแดแดแดส = แด แดษชแดแดแดกษด(แดสษข๊ฑ.join(` `), {
        encoderArgs: [`-af`, `dynaudnorm=f=200`],
        fmt: `mp3`,
        opusEncoded: false,
      });
      สแดแดแดแดแดแดส = await แด แดษชแดษชแด.search(แดสษข๊ฑ.join(` `));
    } catch (DevLog) {
      try {
        const embed4 = new Discord.MessageEmbed()
          .setColor("#B33F40")
          .setTitle(`----> โขYouTube๐บDownloader ยฉ๏ธโข <----`)
          .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
          .setDescription(
            `
**โ ๏ธWARNINGโ ๏ธ** 
**User:** ${message.author}
---------------------|๐บ|---------------------\n
โข|  ษช did not find anything for:
**${แดสษข๊ฑ.join(` `)}**`
          )
          .setImage(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setThumbnail(
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          )
          .setFooter(
            `----> โขYouTube๐บDownloader ยฉ๏ธโข <----`,
            `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
          );
        message.channel
          .send(embed4)
          .then((message) => {
            message.delete({ timeout: 8000 });
          })
          .catch(console.error);
        return;
      } catch (DevLog) {
        message.channel.send(
          `There was an error finishing the reqst.\n_${DevLog}_`
        );
      }
    }
    // ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
    try {
      const embed5 = new Discord.MessageEmbed()
        .setColor("#B33F40")
        .setTitle(`----> โขYouTube๐บDownloader ยฉ๏ธโข <----`)
        .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setDescription(
          `
**โ ๏ธWARNINGโ ๏ธ** 
**User:** ${message.author}
---------------------|๐บ|---------------------\n
โข:shaved_ice:**TITLE**
โข|  _${สแดแดแดแดแดแดส[0].title}_

โข:chains:**LINK**
โข|  _${แดสษข๊ฑ}_

:clock930: **DOWNLOADING**
โข|  _Please แดกแดit แดษชสส โขYouTube๐บDownloader ยฉ๏ธโข finishes downloading..._`
        )
        .setImage(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setThumbnail(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setFooter(
          `----> โขYouTube๐บDownloader ยฉ๏ธโข <----`,
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        );
      message.channel
        .send(embed5)
        .then((message) => {
          message.delete({ timeout: 15000 });
        })
        .catch(console.error);
      สแดแด๊ฑแดสแดแดแดแดส
        .pipe(
          createWriteStream(__dirname + `/YTubeTemp/${สแดแดแดแดแดแดส[0].title}.mp3`)
        )
        .on(`finish`, () => {
          try {
            const embed6 = new Discord.MessageEmbed()
              .setColor("#B33F40")
              .setTitle(`----> โขYouTube๐บDownloader ยฉ๏ธโข <----`)
              .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
              .setDescription(
                `
**โ ๏ธWARNINGโ ๏ธ** 
**User:** ${message.author}
---------------------|๐บ|---------------------\n
โข:shaved_ice:**TITLE**
โข|  _${สแดแดแดแดแดแดส[0].title}_

โข:chains:**LINK**
โข|  _${แดสษข๊ฑ}_`
              )
              .setImage(
                `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
              )
              .setThumbnail(
                `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
              )
              .setFooter(
                `----> โขYouTube๐บDownloader ยฉ๏ธโข <----`,
                `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
              );
            message.channel
              .send(embed6)
              .then((message) => {
                message.delete({ timeout: 30000 });
              })
              .catch(console.error);
            message.channel.send(
              new Discord.MessageAttachment(
                __dirname + `/YTubeTemp/${สแดแดแดแดแดแดส[0].title}.mp3`,
                `${สแดแดแดแดแดแดส[0].title}.mp3`
              )
            );
          } catch (DevLog) {
            const embed7 = new Discord.MessageEmbed()
              .setColor("#B33F40")
              .setTitle(`----> โขYouTube๐บDownloader ยฉ๏ธโข <----`)
              .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
              .setDescription(
                `
**๐ฅERROR**
**User:** ${message.author}
---------------------|๐บ|---------------------\n

โข|  _ษช did not manage to send the music file..._
โข|  _Maybe ษช แดแดษด'แด สแดแด แด the สแดQแดษชสแดแด permissions to แดแดสแดแดแด this แดสแดแด of ๊ฐษชสแด แดษด this ๊ฑแดสแด แดส..._

**DevErrorLog**
_${DevLog}_`
              )
              .setImage(
                `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
              )
              .setThumbnail(
                `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
              )
              .setFooter(
                `----> โขYouTube๐บDownloader ยฉ๏ธโข <----`,
                `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
              );
            message.channel
              .send(embed7)
              .then((message) => {
                message.delete({ timeout: 8000 });
              })
              .catch(console.error);
            return;
          }
        });
    } catch (DevLog) {
      const embed7 = new Discord.MessageEmbed()
        .setColor("#B33F40")
        .setTitle(`----> โขYouTube๐บDownloader ยฉ๏ธโข <----`)
        .setAuthor(`๐ฑ๐๐ซ๐๐ค๐ข๐ง๐ณ`)
        .setDescription(
          `
**๐ฅERROR**
**User:** ${message.author}
---------------------|๐บ|---------------------\n

โข|  ษช did not find anything for:
**${แดสษข๊ฑ.join(` `)}**

โข|  _Maybe it is impossible to retrieve this music file..._

**DevErrorLog**
_${DevLog}_
`
        )
        .setImage(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setThumbnail(
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        )
        .setFooter(
          `----> โขYouTube๐บDownloader ยฉ๏ธโข <----`,
          `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
        );
      message.channel
        .send(embed7)
        .then((message) => {
          message.delete({ timeout: 8000 });
        })
        .catch(console.error);
      return;
    }
  }
});
// ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
สสแดแดสแดแดแดแดสแดserver();
สสแดแดสแดแดแดแดสแด.login(สแดแดแดแดสแดแดแดแด).catch(console.error);
// ===========================================โขYouTube๐บDownloader ยฉ๏ธโข==================================================
