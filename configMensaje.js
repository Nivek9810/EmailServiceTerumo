const nodemailer = require('nodemailer');
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'contactenos.terumo@gmail.com', // Cambialo por tu email
            pass: 'Terumo2019' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: `"${formulario.nombre} 👻" <${formulario.email}>`,
        to: 'contactenos.terumo@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.empresa,
        html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>Empresa:</strong> ${formulario.empresa} <br/>
 <strong>Cargo:</strong> ${formulario.cargo} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.message}
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}