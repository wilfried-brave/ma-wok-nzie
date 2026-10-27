import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface ContactForm {
  nom: string
  email: string
  sujet: string
  message: string
}

const subjects = ['Une question', 'Un événement privé', 'Un partenariat', 'Autre']
const empty: ContactForm = { nom: '', email: '', sujet: subjects[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(empty)
  const [sent, setSent] = useState(false)

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Branchez ici votre API (fetch/axios) pour envoyer le message par e-mail.
    console.log('Message de contact :', form)
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__info">
        <h2>Nous contacter</h2>
        <p>
          Une question, un événement à organiser, une envie de nous rejoindre ? Écrivez-nous ou
          passez nous voir.
        </p>
        <ul className="contact__list">
          <li>
            <small>Adresse</small>
            Yaoundé, Cameroun
          </li>
          <li>
            <small>Téléphone</small>
            <a href="tel:+2376XXXXXXXX">+237 6XX XX XX XX</a>
          </li>
          <li>
            <small>E-mail</small>
            <a href="mailto:contact@mawoknzie.cm">contact@mawoknzie.cm</a>
          </li>
          <li>
            <small>Horaires</small>
            Tous les jours, de 11h à 23h
          </li>
        </ul>
      </div>

      {sent ? (
        <div className="contact__done" role="status">
          <h3>Merci {form.nom}, votre message est parti.</h3>
          <p>Nous vous répondons à l’adresse {form.email} dès que possible.</p>
          <button
            className="btn btn--green"
            onClick={() => {
              setForm(empty)
              setSent(false)
            }}
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form className="contact__form" onSubmit={submit}>
          <label>
            Nom complet
            <input name="nom" value={form.nom} onChange={update} required autoComplete="name" />
          </label>
          <label>
            Adresse e-mail
            <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            Sujet
            <select name="sujet" value={form.sujet} onChange={update}>
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label>
            Votre message
            <textarea name="message" rows={5} value={form.message} onChange={update} required />
          </label>
          <button type="submit" className="btn btn--yellow">Envoyer le message</button>
        </form>
      )}
    </section>
  )
}