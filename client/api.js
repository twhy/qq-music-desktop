const request = require('request-promise')

exports.fetchTopLists = async function() {
  try {
    let res = await request({
      uri: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg?page=index&format=html&tpl=macv4&v8debug=1&jsonCallback=jsonCallback',
      headers: {
        'authority': 'c.y.qq.com',
        'referer': 'https://y.qq.com/musicmac/v4/toplist/index.html',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36',
      }
    })
    return JSON.parse(res.replace(/.*jsonCallback\((.+)\n\)$/, '$1'))
  } catch(e) {
    console.log(e)
  }
}