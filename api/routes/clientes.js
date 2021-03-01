const { Router } = require('express')
const nodemailer = require('nodemailer')

const mjml2html = require('mjml')
const Cliente = require('../models/Clientes')

const router = Router()

router.post('/send-message', async (req, res) => {
	const { name, email, phone, message } = req.body

	const htmlOutput = mjml2html(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>

        <mj-image width="130px" src="https://res.cloudinary.com/fragmods/image/upload/v1611014113/Logos/Logo_png_xl6anj.png"></mj-image>

        <mj-divider border-color="#bd1b3c"></mj-divider>

		<mj-text font-size="20px" color="#bd1b3c" font-family="helvetica">¡Hola ${name}!</mj-text>
        
        <mj-text font-size="15px" color="#bd1b3c" font-family="helvetica">Agradecemos que te hayas puesto en contacto con nosotros, muy pronto un asesor se comunicará contigo para brindarte la atención que te mereces.</mj-text>

         <mj-text font-size="15px" color="#bd1b3c" font-family="helvetica">Recuerda que con Tu Hogar a un Clic, cumplir tus metas es mas facil.</mj-text>
        
         <mj-divider border-color="#bd1b3c"></mj-divider>
        
		<mj-text font-size="12px" color="#bd1b3c" font-family="helvetica" align="center"><h2>¡Siguenos en nuestras redes!</h2></mj-text>
          				      <mj-social font-size="15px" icon-size="50px" mode="horizontal">
  				        <mj-social-element name="facebook" href="https://www.facebook.com/TuHogarUnClic"/>
  				        <mj-social-element name="instagram" href='https://www.instagram.com/tuhogarunclic/'/>
  				        <mj-social-element name="youtube" href='https://www.youtube.com/channel/UCpxOn1TMfuTcvFX6eAiXWVg'/>
  				      </mj-social>

          <mj-text align="center" font-size="17px" font-weight="bold" color="#bd1b3c" font-family="helvetica">Vender, comprar o rentar todo a un clic de distancia</mj-text>

      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
		`)

	const { html } = htmlOutput
	const transporter = nodemailer.createTransport({
		host: 'smtp.zoho.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.MAIL,
			pass: process.env.PASSWORD,
		},
		tls: {
			rejectUnauthorized: false
		}
	})

	await transporter.sendMail({
		from: "'Tu Hogar A Un Clic' <contacto@tuhogaraunclic.com>",
		to: email,
		subject: '¡Gracias por tu Mensaje!',
		text: 'Pronto nos pondremos en contacto contigo',
		html: html,
	})

	const newClient = await Cliente.create ({
		name,
		email,
		phone,
		message: message || '',
	})

	res
		.status(200)
		.send({ newClient })
})

module.exports = router
