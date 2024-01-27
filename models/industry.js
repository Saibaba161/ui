//name,industryName,employeeID,role,siteLink,email,password,officialNumber,personalNumber

import mongoose from 'mongoose'

const industrySchema = mongoose.Schema({
    name: String,
    industryName: String,
    employeeID: String,
    role: String,
    siteLink: String,
    email: String,
    password: String,
    officialNumber: Number,
    personalNumber: Number
})
export const Industry = mongoose.model('Industry',industrySchema)