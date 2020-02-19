const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const Parser = require('rss-parser')
const cheerio = require('cheerio')
const mysql = require('mysql')

let parser = new Parser()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.listen(port, ()=> {
  console.log(`Server is running on port: ${port}`)
})

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'therepybox',
  password: 'root'
})

connection.connect(err => {
  if(err) console.log(err)
})

app.get('/users', (req,res) => {//get a user
  connection.query('SELECT * from users', (err, results) =>{
    if(err) return err
    return res.json(results)
  })
})

app.post('/users', (req,res)=> {//register a user
  res.json(req)//send request back to user to check it's submitted properly
})

app.get('/', (req,res)=> {
  res.send({})
})

app.get('/get-news', (req,res)=> {
  (async() => {
    let feed = await parser.parseURL('https://feeds.bbci.co.uk/news/rss.xml')
    res.send(feed.items[0])
  })()
})

app.get('/get-news-and-img', (req,res)=> {
  (async() => {
    try{
      let feed = await parser.parseURL('https://feeds.bbci.co.uk/news/rss.xml')
      fetch(feed.items[0].link)
      .then(res => res.text())
      .then(body => {
        const $ = cheerio.load(body)
        feed.items[0].img = $('.js-image-replace').attr('src')//get img from page
        res.send(feed.items[0])
      })
    } catch(e) {
      res.send(e)
    }
  })()
})