import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface AuthModalProps {
  onClose: () => void
}

type View = 'login' | 'signup' | 'forgot' | 'sent' | 'reset' | 'done'
type Provider = 'Google' | 'Facebook'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path fill="#fff" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
    </svg>
  )
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [view, setView] = useState<View>('login')
  const [doneTitle, setDoneTitle] = useState('')
  const [notice, setNotice] = useState('')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    nom: '',
    email: '',
    password: '',
    newPassword: '',
    confirm: '',
  })

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const update = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const go = (v: View) => {
    setView(v)
    setError('')
    setNotice('')
  }

  // Connexion / inscription
  const submitAuth = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Branchez ici votre API d'authentification.
    console.log(view, form.email)
    setDoneTitle(view === 'login' ? 'Bon retour parmi nous !' : 'Bienvenue chez Ma Wok Nzie !')
    setView('done')
  }

  // Étape 1 : demande du lien par e-mail
  const submitForgot = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Branchez ici votre API : elle envoie l'e-mail contenant le lien de réinitialisation.
    console.log('Lien de réinitialisation demandé pour', form.email)
    setView('sent')
  }

  // Étape 2 : nouveau mot de passe + confirmation
  const submitReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.newPassword !== form.confirm) {
      setError('Les deux mots de passe ne sont pas identiques.')
      return
    }
    // Branchez ici votre API : elle enregistre le nouveau mot de passe (avec le jeton reçu par e-mail).
    console.log('Nouveau mot de passe enregistré pour', form.email)
    setForm({ ...form, password: '', newPassword: '', confirm: '' })
    setView('login')
    setError('')
    setNotice('Mot de passe modifié. Connectez-vous avec le nouveau.')
  }

  // Connexion Google / Facebook
  const social = (provider: Provider) => {
    // Branchez ici Google / Facebook (ex. Firebase : signInWithPopup).
    console.log('Connexion avec', provider)
    setDoneTitle(`Connecté avec ${provider}`)
    setView('done')
  }

  const showTabs = view === 'login' || view === 'signup'

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__box"
        role="dialog"
        aria-modal="true"
        aria-label="Authentification"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kente" aria-hidden="true" />
        <button className="modal__close" onClick={onClose} aria-label="Fermer">×</button>

        <div className="modal__body">
          {view === 'done' && (
            <>
              <h2>{doneTitle}</h2>
              <p>Tout est prêt. (Démo : aucune donnée n’est envoyée.)</p>
              <button className="btn btn--green" onClick={onClose}>Continuer</button>
            </>
          )}

          {showTabs && (
            <>
              <div className="modal__tabs">
                <button className={view === 'login' ? 'is-active' : ''} onClick={() => go('login')}>
                  Connexion
                </button>
                <button className={view === 'signup' ? 'is-active' : ''} onClick={() => go('signup')}>
                  Créer un compte
                </button>
              </div>

              {notice && <p className="modal__notice" role="status">{notice}</p>}

              <form onSubmit={submitAuth}>
                {view === 'signup' && (
                  <label>
                    Nom complet
                    <input name="nom" value={form.nom} onChange={update} required autoComplete="name" />
                  </label>
                )}
                <label>
                  Adresse e-mail
                  <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
                </label>
                <label>
                  Mot de passe
                  <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={update}
                    required
                    minLength={6}
                    autoComplete={view === 'login' ? 'current-password' : 'new-password'}
                  />
                </label>
                {view === 'login' && (
                  <button type="button" className="modal__link" onClick={() => go('forgot')}>
                    Mot de passe oublié ?
                  </button>
                )}
                <button type="submit" className="btn btn--yellow">
                  {view === 'login' ? 'Se connecter' : 'Créer mon compte'}
                </button>
              </form>

              <div className="modal__sep"><span>ou</span></div>

              <div className="social">
                <button type="button" className="social__btn" onClick={() => social('Google')}>
                  <GoogleIcon /> Continuer avec Google
                </button>
                <button type="button" className="social__btn" onClick={() => social('Facebook')}>
                  <FacebookIcon /> Continuer avec Facebook
                </button>
              </div>
            </>
          )}

          {view === 'forgot' && (
            <>
              <h2>Mot de passe oublié ?</h2>
              <p>Entrez votre adresse e-mail. Nous vous envoyons un lien pour choisir un nouveau mot de passe.</p>
              <form onSubmit={submitForgot}>
                <label>
                  Adresse e-mail
                  <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
                </label>
                <button type="submit" className="btn btn--yellow">Envoyer le lien</button>
              </form>
              <button type="button" className="modal__link modal__link--center" onClick={() => go('login')}>
                Retour à la connexion
              </button>
            </>
          )}

          {view === 'sent' && (
            <>
              <h2>Vérifiez votre boîte mail</h2>
              <p>
                Si un compte existe pour <strong>{form.email}</strong>, un lien de réinitialisation
                vient d’être envoyé. Pensez à regarder dans vos courriers indésirables.
              </p>
              {/* En production, ce bouton disparaît : l'utilisateur arrive ici en cliquant sur le lien reçu par e-mail. */}
              <button className="btn btn--green" onClick={() => go('reset')}>
                J’ai cliqué sur le lien (démo)
              </button>
              <button type="button" className="modal__link modal__link--center" onClick={() => go('login')}>
                Retour à la connexion
              </button>
            </>
          )}

          {view === 'reset' && (
            <>
              <h2>Nouveau mot de passe</h2>
              <p>Choisissez un nouveau mot de passe, puis confirmez-le.</p>
              <form onSubmit={submitReset}>
                <label>
                  Nouveau mot de passe
                  <input
                    name="newPassword"
                    type="password"
                    value={form.newPassword}
                    onChange={update}
                    required
                    minLength={6}
                    autoComplete="new-password"
                  />
                </label>
                <label>
                  Confirmer le mot de passe
                  <input
                    name="confirm"
                    type="password"
                    value={form.confirm}
                    onChange={update}
                    required
                    minLength={6}
                    autoComplete="new-password"
                  />
                </label>
                {error && <p className="modal__error" role="alert">{error}</p>}
                <button type="submit" className="btn btn--yellow">Enregistrer</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}