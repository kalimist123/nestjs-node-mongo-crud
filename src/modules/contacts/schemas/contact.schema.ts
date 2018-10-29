import * as mongoose from 'mongoose';
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
export const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    email: String,
    phone: String
  },
  {
    collection: 'contacts',
    read: 'nearest'
  }
);
