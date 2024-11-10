import type { CookieConsentConfig } from 'vanilla-cookieconsent'

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    console.info('onFirstAction fired')
  },

  onConsent: function ({ cookie }) {
    console.info(cookie)
  },

  onChange: function ({ changedCategories, cookie }) {
    console.info(changedCategories, cookie)
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    youtube: {
      autoClear: {
        cookies: [
          {
            name: /^(_youtube|_yt_)/, // Nombre de cookies que podrían utilizarse para rastreo de YouTube
          },
        ],
      },
    },
  },

  language: {
    default: 'en',
    autoDetect: 'document',
    translations: {
      es: {
        consentModal: {
          title: '¡Hola, mente inquieta! Toca gestionar las cookies.',
          description:
            'Este sitio web usa cookies para habilitar los videos de YouTube solo si aceptas su uso explícitamente.',
          //   description:
          //     'Este sitio web usa cookies para habilitar los videos de YouTube solo si aceptas su uso explícitamente. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Gestionar preferencias</a>',
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Rechazar todas',
          showPreferencesBtn: 'Gestionar preferencias',
          //closeIconLabel: 'Cerrar',
          //   footer: `
          //       <a href="#link">Política de privacidad</a>
          //       <a href="#link">Aviso legal</a>
          //     `,
        },
        preferencesModal: {
          title: 'Preferencias de cookies',
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Rechazar todas',
          savePreferencesBtn: 'Guardar preferencias',
          closeIconLabel: 'Cerrar',
          sections: [
            {
              title: 'Uso de cookies',
              //   description:
              //     'Utilizamos cookies para garantizar el funcionamiento básico del sitio web y mejorar tu experiencia en línea. Puedes activar o desactivar cada categoría en cualquier momento. Para más detalles sobre cookies y datos sensibles, por favor lee nuestra <a href="#" class="cc__link">política de privacidad</a> completa.',
              description:
                'Utilizamos cookies para garantizar el funcionamiento básico del sitio web y mejorar tu experiencia en línea. Puedes activar o desactivar cada categoría en cualquier momento.',
            },
            {
              title: 'Cookies estrictamente necesarias',
              description:
                'Son esenciales para el funcionamiento del sitio web.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies de YouTube',
              linkedCategory: 'youtube',
              cookieTable: {
                headers: {
                  name: 'Nombre',
                  domain: 'Servicio',
                  description: 'Descripción',
                  expiration: 'Expiración',
                },
                body: [
                  {
                    name: '_youtube',
                    domain: 'YouTube',
                    description:
                      'Cookie establecida por YouTube para habilitar el contenido de video en el sitio web.',
                    expiration: 'Expira después de 12 días',
                  },
                  {
                    name: '_yt_',
                    domain: 'YouTube',
                    description: 'Cookie establecida por YouTube',
                    expiration: 'Sesión',
                  },
                ],
              },
            },
            {
              title: 'Más información',
              description:
                'Para cualquier consulta relacionada con nuestra política de cookies y tus opciones, por favor <a class="cc__link" href="mailto:manusansan22@gmail.com">contáctanos</a>.',
            },
          ],
        },
      },
      en: {
        consentModal: {
          title: 'Hello, curious mind! Time to manage your cookies.',
          description:
            'This website uses cookies to enable YouTube videos only if you explicitly accept their use.',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Reject All',
          showPreferencesBtn: 'Manage Preferences',
        },
        preferencesModal: {
          title: 'Cookie Preferences',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Reject All',
          savePreferencesBtn: 'Save Preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Use of Cookies',
              description:
                'We use cookies to ensure the basic functionality of the website and to enhance your online experience. You can enable or disable each category at any time.',
            },
            {
              title: 'Strictly Necessary Cookies',
              description: 'These are essential for the website to function.',
              linkedCategory: 'necessary',
            },
            {
              title: 'YouTube Cookies',
              linkedCategory: 'youtube',
              cookieTable: {
                headers: {
                  name: 'Name',
                  domain: 'Service',
                  description: 'Description',
                  expiration: 'Expiration',
                },
                body: [
                  {
                    name: '_youtube',
                    domain: 'YouTube',
                    description:
                      'Cookie set by YouTube to enable video content on the website.',
                    expiration: 'Expires after 12 days',
                  },
                  {
                    name: '_yt_',
                    domain: 'YouTube',
                    description: 'Cookie set by YouTube',
                    expiration: 'Session',
                  },
                ],
              },
            },
            {
              title: 'More Information',
              description:
                'For any inquiries related to our cookie policy and your options, please <a class="cc__link" href="mailto:manusansan22@gmail.com">contact us</a>.',
            },
          ],
        },
      },
      de: {
        consentModal: {
          title: 'Hallo, neugieriger Geist! Zeit, die Cookies zu verwalten.',
          description:
            'Diese Website verwendet Cookies, um YouTube-Videos nur dann zu aktivieren, wenn du ihrer Nutzung ausdrücklich zustimmst.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          showPreferencesBtn: 'Einstellungen verwalten',
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          savePreferencesBtn: 'Einstellungen speichern',
          closeIconLabel: 'Schließen',
          sections: [
            {
              title: 'Verwendung von Cookies',
              description:
                'Wir verwenden Cookies, um die Grundfunktionen der Website sicherzustellen und deine Online-Erfahrung zu verbessern. Du kannst jede Kategorie jederzeit aktivieren oder deaktivieren.',
            },
            {
              title: 'Unbedingt notwendige Cookies',
              description:
                'Diese sind für die Funktion der Website unerlässlich.',
              linkedCategory: 'necessary',
            },
            {
              title: 'YouTube Cookies',
              linkedCategory: 'youtube',
              cookieTable: {
                headers: {
                  name: 'Name',
                  domain: 'Dienst',
                  description: 'Beschreibung',
                  expiration: 'Ablauf',
                },
                body: [
                  {
                    name: '_youtube',
                    domain: 'YouTube',
                    description:
                      'Von YouTube gesetztes Cookie zur Aktivierung von Videoinhalten auf der Website.',
                    expiration: 'Läuft nach 12 Tagen ab',
                  },
                  {
                    name: '_yt_',
                    domain: 'YouTube',
                    description: 'Von YouTube gesetztes Cookie',
                    expiration: 'Sitzung',
                  },
                ],
              },
            },
            {
              title: 'Weitere Informationen',
              description:
                'Für Anfragen zu unserer Cookie-Richtlinie und deinen Optionen <a class="cc__link" href="mailto:manusansan22@gmail.com">kontaktiere uns bitte</a>.',
            },
          ],
        },
      },
    },
  },
}

export default pluginConfig
