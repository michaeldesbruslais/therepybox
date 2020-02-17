import mysql from 'mysql'

export const Connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'therepybox',
  password: 'root'
})

// Connection.connect(err => {
//   if(err) console.log(err)

// })