'use strict'

import mongoose from 'mongoose'

export const dbConnection = async () => {
    try{
        mongoose.connection.on('error', () =>{
            console.log('MonoDB | no se pudo conectar a mongoDB')
            mongoose.disconnect()
        })
         mongoose.connection.on('connecting', () =>{
            console.log('MonoDB | intentando conectar a mongoDB')
         })
          mongoose.connection.on('connected', () =>{
            console.log('MonoDB | conectado a mongoDB')
          })
           mongoose.connection.on('open', () =>{
            console.log('MonoDB | conectado a la base de datos')
           })
            mongoose.connection.on('reconnected', () =>{
            console.log('MonoDB | reconectado a mongoDB')
            })
             mongoose.connection.on('disconnected     ', () =>{
            console.log('MonoDB | desconectado a mongoDB')
             })
        await mongoose.connect(process.env.URI_MONGODB, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 10
        })
    }catch(erros){
        console.log(`Error al conectar la db: ${error}`)
    }
}