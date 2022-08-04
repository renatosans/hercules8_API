const { PrismaClient } = require('@prisma/client');


// dados da conexão com BD serverless
const host     = 'a8ccryk3vedz.aws-sa-east-1-1.psdb.cloud';
const username = Buffer.from('MG51dTk5MXo4M2c2', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X0hzV29CN1JYNzNPYnhncnF5bjRqblJ5ZTNEVXhodkgyQ2NKdllSOHpMU1E=', 'base64').toString('ascii');
const port     = 3306
const database = 'h8'
const ssl      = true
const setSSL   = 'sslaccept=strict&sslmode=require'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/h8"
let url = `mysql://${username}:${password}@${host}:${port}/${database}`;
if (ssl) {
    url = url + `?${setSSL}`;
}

const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
