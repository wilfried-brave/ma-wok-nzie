import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface ReservationForm {
  nom: string
  tel: string
  date: string
  heure: string
  personnes: string
  note: string
}

const empty: ReservationForm = { nom: '', tel: '', date: '', heure: '19:00', personnes: '2', note: '' }

export default function Reservation() {
  const [form, setForm] = useState<ReservationForm>(empty)
  const [sent, setSent] = useState(false)

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Branchez ici votre API (fetch/axios) pour enregistrer la réservation.
    console.log('Réservation :', form)
    setSent(true)
  }

  return (
    <section className="resa" id="reservation">
      <div className="resa__side">
        <h2>Réserver une table</h2>
        <p>
          Dites-nous quand vous venez et combien vous êtes. Nous confirmons votre réservation
          par téléphone.
        </p>
        <ul>
          <li>Ouvert tous les jours, de 11h à 23h</li>
          <li>Groupes à partir de 8 personnes : appelez-nous</li>
          <li>Menu enfant disponible</li>
        </ul>
      </div>

      {sent ? (
        <div className="resa__done" role="status">
          <h3>Merci {form.nom}, votre demande est envoyée.</h3>
          <p>
            Table pour {form.personnes} le {form.date} à {form.heure}. Nous vous appelons au{' '}
            {form.tel} pour confirmer.
          </p>
          <button
            className="btn btn--green"
            onClick={() => {
              setForm(empty)
              setSent(false)
            }}
          >
            Faire une autre réservation
          </button>
        </div>
      ) : (
        <form className="resa__form" onSubmit={submit}>
          <label>
            Nom complet
            <input name="nom" value={form.nom} onChange={update} required autoComplete="name" />
          </label>
          <label>
            Téléphone
            <input name="tel" type="tel" value={form.tel} onChange={update} required placeholder="+237 6XX XX XX XX" autoComplete="tel" />
          </label>
          <div className="resa__row">
            <label>
              Date
              <input name="date" type="date" value={form.date} onChange={update} required />
            </label>
            <label>
              Heure
              <input name="heure" type="time" value={form.heure} onChange={update} required />
            </label>
            <label>
              Personnes
              <select name="personnes" value={form.personnes} onChange={update}>
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Une demande particulière ?
            <textarea name="note" rows={3} value={form.note} onChange={update} placeholder="Anniversaire, allergie, chaise bébé…" />
          </label>
          <button type="submit" className="btn btn--yellow">Envoyer ma demande</button>
        </form>
      )}
    </section>
  )
}
