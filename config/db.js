const { PrismaClient } = require('@prisma/client');


// dados da conexão com BD serverless
const host     = 'r0e93010lf0s.us-east-3.psdb.cloud';
const username = Buffer.from('NmxxMGczNDA5enRv', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X1JLbFN4QlVyQ1YxT0x1eVFxYjlqTVhjaGFjbE9fWW5QaWc2SWNBb3VWaGc=', 'base64').toString('ascii');
const port     = 3306
const database = 'hercules8'
const ssl      = true
const setSSL   = 'sslaccept=strict&sslmode=require'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/h8"
let url = `mysql://${username}:${password}@${host}:${port}/${database}`;
if (ssl) {
    url = url + `?${setSSL}`;
}

const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
