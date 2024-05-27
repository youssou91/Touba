import React from 'react'
import './Contact.css'
import phone from '../../assets/phone-icone.jpg'
import adress from '../../assets/adress-icone.webp'
import email from '../../assets/email-icone.jpg'
import fleche from '../../assets/fleche1.png';


const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Envoi en cours....");
        const formData = new FormData(event.target);
        formData.append("access_key", "f68c0be3-92ae-44cc-a28a-accb57c284cd");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Formulaire soumis avec succès !!!!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact' id='contact'>
            <div className='contact-col'>
                <h3>
                    Envoyez-nous un message
                    {/* <img src={messages} alt=''/> */}
                </h3>
                <p>
                    lorem loremloremloremloremloremlorem<br/>
                    loremloremloremloremlo<br/>
                    remloremloremloremloremloremloremloremloremlo<br/>
                    remloremloremloremloremloremlorem
                </p>
                <ul>
                    <li><img src={email} alt='' />contact@gmail.com</li>
                    <li><img src={phone} alt='' />+1 514-601-9995</li>
                    <li><img src={adress} alt='' />220 Rue Issac-Christin <br /> Repentigny QC, Canada</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Votre nom</label>
                    <input type='text' name='nom' placeholder='Entrer votre nom' required />
                    <label>Numero de telephone </label>
                    <input type='tel' name='telephone' placeholder='Entrer votre numero de telephone' required />
                    <label>Ecrire votre message </label>
                    <textarea name='message' rows={6} placeholder='Saisir votre message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Envoyer <img src={fleche} /></button>
                </form>
                <span>{result}</span>
            

            </div>

        </div>
    )
}

export default Contact
