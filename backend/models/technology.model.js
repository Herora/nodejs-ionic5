const mongoose = require("mongoose");
const { Schema } = mongoose;

const TechnologySchema = new Schema({
    line_number: { type: String },
    formatted_line_number: { type: String },
    expiration_date: { type: String },
    last_payment_date: { type: String },
    payment_reference: { type: Number },
    invoice_status: { type: String },
    amount: { type: Number },
    currency: { type: String },
    country_mobile_code: { type: Number },
    payment_history: [{
        period: { type: String },
        amount: { type: Number },
        balance: { type: Number }
    }]

}, { timestamps: { createdAt: true, updatedAt: true } });

module.exports = mongoose.model("Technology", TechnologySchema);