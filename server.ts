import express, { Request, Response } from 'express'
const app = express()
const PORT = process.env.PORT || 1337

import { Hamster } from './types/hamster';


// middleware
// (ingen middleware än)

// data - flytta till egen fil i framtiden
let dataFromApi: Hamster[] = [
	{ name: 'Nisse', loves: 'sågspån' },
	{ name: 'Stina', loves: 'citron' }
]



// routes
app.get('/', (req: Request, res: Response) => {
	console.log('GET /');
	res.send('This server was built using TypeScript')
})

app.get('/hamsters', (req: Request, res: Response) => {
	res.send(dataFromApi)
})

// starta webbservern
app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})