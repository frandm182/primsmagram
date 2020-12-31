import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env')});

import { adjetives, nouns } from "./words";
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';


export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjetives.length);
  return `${adjetives[randomNumber]} ${nouns[randomNumber]}`;
}

export const sendMail = email => {
  const options = {
    auth: {
      api_key: process.env.SENDGRID_APIKEY
    }
  }
  console.log(options);
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: process.env.SENDGRID_ORIGIN,
    to: address,
    subject: '🔒 Login Secret for prismagram',
    html: `Hello! your login secret it <strong>${secret}</strong>. <br/> Copy paste on the app to log in`
  }
  return sendMail(email);
}