import { Router } from 'express'
import { semaforo, diasemana, fatorial, sequenciapar } from './service.js'

const server = Router()

server.get('/semaforo/:cor', (req, resp) => {

    try {
        const cor = req.params.cor
        let x = semaforo(cor)

        resp.send({
            cor: x
        })
    } catch (err) {
        resp.send({
            erro: err.message
        })

    }
})

server.get('/diasemana', (req, resp) => {
    try {
        let a = Number(req.query.a)
        let x = diasemana(a)
        resp.send({
            nome: x
        })
    }
    catch (err) {
        resp.send({
            error: err.message
        })
    }
})

server.post('/fatorial', (req, resp) => {
    try {
        let a = Number(req.query.a)
        let x = fatorial(a)
        resp.send({
            fat: x
        })
    }
    catch (err) {
        resp.send({
            error: err.message
        })
    }

})
server.post('/sequenciapar', (req, resp) => {
try {
    let a = req.body.a
    let x = sequenciapar(a)
    resp.send({
        sequencia: x

    })
} catch (err) {
    resp.send({
        error:err.message
    })
}    
}
)

export default server;
