//name,collegeName,designation,dept,areaOfExpertise,email,password,phone,experience
import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    areaOfExpertise: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const Team = mongoose.model('Team', teamSchema)