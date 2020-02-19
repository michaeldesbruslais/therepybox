const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const Parser = require('rss-parser')
const cheerio = require('cheerio')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

let parser = new Parser()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

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

app.post('/users', (req,res) => {//get a user
  let {username, password} = req.body
  connection.query(`SELECT COUNT(*) from users WHERE username = "${username}" AND password = "${password}"`, (err, results) =>{
    if(err) return err
    if(results[0]['COUNT(*)']) return res.json(true)//if user in database, returns 1 (true)
    else res.json(false)// user not in database
  })
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

app.listen(port, console.log(`Server is running on port: ${port}`))