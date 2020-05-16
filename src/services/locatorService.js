import mongoose from 'mongoose';
import dotenv from 'dotenv';
import IPLocation from '../models/IPLocation';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

function saveModel(ipLocation) {
  return IPLocation.create(ipLocation);
}

function loadModels() {
  return IPLocation.find();
}

export {
  saveModel,
  loadModels,
};
