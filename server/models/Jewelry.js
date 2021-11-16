const mongoose = require('mongoose');

const { Schema } = mongoose;

const jewelrySchema = new Schema({
  jewelryName: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },
  jewelryPrice: {
    type: String,
    required: "Price is required",
    trim: true,
  },
  assessedValue: {
    type: String,
    trim: true,
  },
  jewelryAssessor: {
    type: String,
    trim: true,
  },
  purchasedDate: {
    type: Date,
  },
  jewelryWarranty: {
    type: Date,
  },
  serviceDate: {
    type: Date,
  },
  jewelryPhoto:  {
    data: Buffer,
    contentType: String,
  },
  receiptPhoto:  {
    data: Buffer,
    contentType: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = jewelrySchema;
