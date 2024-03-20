/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/* eslint-disable */

// const { onRequest } = require('firebase-functions/v2/https')
// const logger = require('firebase-functions/logger')

const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })

const senderEmail = functions.config().nodemailer.user

const mailConfig = {
	service: 'gmail',
	auth: {
		user: functions.config().nodemailer.user,
		pass: functions.config().nodemailer.password,
	},
}

const transporter = nodemailer.createTransport(mailConfig)

exports.sendEmail = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		if (req.method !== 'POST') {
			return res.status(405).send('Method Not Allowed')
		}

		const { to, subject, text } = req.body

		const mailOptions = {
			from: senderEmail,
			to: to,
			subject: subject,
			text: text,
		}

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error)
				res.status(500).send(error.toString())
			} else {
				console.log('Email sent: ' + info.response)
				res.status(200).send('Email sent: ' + info.response)
			}
		})
	})
})
