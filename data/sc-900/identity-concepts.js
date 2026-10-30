// SC-900 > Introduction to security, compliance, and identity concepts > Describe identity concepts
Catalog.module("sc-900", {
  id: "identity-concepts",
  name: "Describe identity concepts",
  es: { name: "Descripción de los conceptos de identidad" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Authentication and authorization",
        q: "A user signs in successfully with a password and MFA, but is then denied access to the payroll application because their role doesn't include that permission. Which process denied the access?",
        options: ["Authentication", "Authorization", "Federation", "Auditing"],
        answer: 1,
        explain: "Authentication succeeded: the user's identity was confirmed. Authorization then evaluated the role's permissions and denied access.",
        es: {
          topic: "Autenticación y autorización",
          q: "Un usuario inicia sesión correctamente con contraseña y MFA, pero luego se le niega el acceso a la aplicación de sueldos porque su rol no incluye ese permiso. ¿Qué proceso negó el acceso?",
          options: ["La autenticación", "La autorización", "La federación", "La auditoría"],
          explain: "La autenticación funcionó: se confirmó la identidad del usuario. Después, la autorización evaluó los permisos del rol y negó el acceso."
        }
      },
      {
        type: "match",
        topic: "Identity providers",
        q: "Match each description to the protocol it describes.",
        values: ["OpenID Connect", "OAuth 2.0", "SAML"],
        targets: [
          { t: "Verifies a user's identity in modern cloud and mobile applications", answer: 0 },
          { t: "Lets an application obtain access tokens for protected resources", answer: 1 },
          { t: "Integrates older enterprise applications and federates between organizations", answer: 2 }
        ],
        explain: "OpenID Connect handles authentication and is built on OAuth 2.0, which handles authorization. SAML is common in enterprise and federation scenarios.",
        es: {
          topic: "Proveedores de identidades",
          q: "Relacione cada descripción con el protocolo que describe.",
          values: ["OpenID Connect", "OAuth 2.0", "SAML"],
          targets: [
            { t: "Verifica la identidad de un usuario en aplicaciones modernas en la nube y móviles" },
            { t: "Permite que una aplicación obtenga tokens de acceso para recursos protegidos" },
            { t: "Integra aplicaciones empresariales más antiguas y federa organizaciones" }
          ],
          explain: "OpenID Connect se ocupa de la autenticación y se basa en OAuth 2.0, que se ocupa de la autorización. SAML es habitual en escenarios empresariales y de federación."
        }
      },
      {
        type: "single",
        topic: "Directory services",
        q: "A company runs Active Directory Domain Services and adopts Microsoft Entra ID. It wants users to access both on-premises and cloud resources with the same credentials. What is this configuration called?",
        options: ["Federation with a social identity provider", "Hybrid identity", "Multifactor authentication", "Single-factor authentication"],
        answer: 1,
        explain: "Connecting AD DS and Microsoft Entra ID so identities are synchronized is hybrid identity.",
        es: {
          topic: "Servicios de directorio",
          q: "Una empresa usa Active Directory Domain Services y adopta Microsoft Entra ID. Quiere que los usuarios accedan a recursos locales y en la nube con las mismas credenciales. ¿Cómo se llama esta configuración?",
          options: ["Federación con un proveedor de identidades social", "Identidad híbrida", "Autenticación multifactor", "Autenticación de un solo factor"],
          explain: "Conectar AD DS y Microsoft Entra ID para que las identidades estén sincronizadas es identidad híbrida."
        }
      },
      {
        type: "multi",
        topic: "Identity as the security perimeter",
        q: "Which two are types of identities that must be authenticated and authorized in a modern environment?",
        options: ["Workload identities", "Agent identities", "Network perimeters", "Firewall rules", "VPN gateways"],
        answers: [0, 1],
        explain: "The four identity types are human, device, workload and agent. Perimeters, firewalls and VPN gateways belong to the traditional network model.",
        es: {
          topic: "Identidad como perímetro de seguridad",
          q: "¿Cuáles son dos tipos de identidades que deben autenticarse y autorizarse en un entorno moderno?",
          options: ["Identidades de carga de trabajo", "Identidades de agentes", "Perímetros de red", "Reglas de firewall", "Puertas de enlace VPN"],
          explain: "Los cuatro tipos de identidad son humana, de dispositivo, de carga de trabajo y de agente. Los perímetros, los firewalls y las puertas de enlace VPN pertenecen al modelo de red tradicional."
        }
      },
      {
        type: "single",
        topic: "Federation",
        q: "Organization A configures its identity provider to trust Organization B's identity provider. Which statement is true?",
        options: [
          "Users from both organizations can now access each other's resources",
          "B's users can access A's resources, not the reverse",
          "Users from Organization A can now access Organization B's resources",
          "Each user must still create a guest account in the other organization before signing in"
        ],
        answer: 1,
        explain: "Trust relationships aren't automatically bidirectional. A two-way trust must be configured explicitly.",
        es: {
          topic: "Federación",
          q: "La organización A configura su proveedor de identidades para que confíe en el de la organización B. ¿Qué afirmación es verdadera?",
          options: [
            "Los usuarios de ambas organizaciones ya pueden acceder a los recursos de la otra",
            "Los usuarios de B pueden acceder a recursos de A, no al revés",
            "Los usuarios de la organización A ya pueden acceder a los recursos de B",
            "Cada usuario debe crear igualmente una cuenta de invitado en la otra organización antes de iniciar sesión"
          ],
          explain: "Las relaciones de confianza no son bidireccionales automáticamente. Una confianza en ambos sentidos se debe configurar de forma explícita."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Authentication and authorization", s: "Single-factor authentication with only a password is vulnerable to phishing.", answer: true, explain: "If the single factor is stolen, an attacker has everything needed to impersonate the user." },
          { topic: "Identity providers", s: "Security tokens issued by an identity provider never expire.", answer: false, explain: "Tokens are time-limited so a stolen token can't be used indefinitely." },
          { topic: "Directory services", s: "Microsoft Entra ID requires a VPN for users to authenticate from outside the corporate network.", answer: false, explain: "Entra ID works over the internet without a VPN. Needing a VPN is a limitation of AD DS." }
        ],
        es: {
          statements: [
            { topic: "Autenticación y autorización", s: "La autenticación de un solo factor con solo una contraseña es vulnerable al phishing.", explain: "Si se roba ese único factor, el atacante tiene todo lo necesario para hacerse pasar por el usuario." },
            { topic: "Proveedores de identidades", s: "Los tokens de seguridad emitidos por un proveedor de identidades nunca vencen.", explain: "Los tokens tienen tiempo limitado para que uno robado no se pueda usar indefinidamente." },
            { topic: "Servicios de directorio", s: "Microsoft Entra ID requiere una VPN para que los usuarios se autentiquen desde fuera de la red corporativa.", explain: "Entra ID funciona a través de internet sin VPN. Necesitar una VPN es una limitación de AD DS." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Identity as the security perimeter",
        q: "Complete the statement about the four pillars of an identity infrastructure.",
        parts: [
          "Recording sign-in logs and activity reports belongs to the ",
          { options: ["authorization", "auditing", "authentication"], answer: 1 },
          " pillar, while removing accounts when users leave the organization belongs to the ",
          { options: ["administration", "auditing", "authorization"], answer: 0 },
          " pillar."
        ],
        explain: "Auditing tracks who did what, when and from where. Administration covers the identity lifecycle, including provisioning and deprovisioning.",
        es: {
          topic: "Identidad como perímetro de seguridad",
          q: "Complete la afirmación sobre los cuatro pilares de una infraestructura de identidad.",
          parts: [
            "Registrar los inicios de sesión y los informes de actividad corresponde al pilar de ",
            { options: ["autorización", "auditoría", "autenticación"] },
            ", mientras que quitar las cuentas cuando los usuarios dejan la organización corresponde al pilar de ",
            { options: ["administración", "auditoría", "autorización"] },
            "."
          ],
          explain: "La auditoría registra quién hizo qué, cuándo y desde dónde. La administración abarca el ciclo de vida de las identidades, incluido el aprovisionamiento y el desaprovisionamiento."
        }
      },
      {
        type: "single",
        topic: "Identity providers",
        q: "A company wants to require MFA for every application from a single place instead of configuring each app separately. Which benefit of a central identity provider does this rely on?",
        options: [
          "Consistent policies across apps",
          "Separate user accounts in each application",
          "Password rules defined per application",
          "Local user stores inside each application, synchronized nightly"
        ],
        answer: 0,
        explain: "Delegating authentication to a central IdP lets you apply policies such as MFA to all applications from one place.",
        es: {
          topic: "Proveedores de identidades",
          q: "Una empresa quiere exigir MFA en todas las aplicaciones desde un solo lugar, en vez de configurar cada una por separado. ¿En qué ventaja de un proveedor de identidades central se apoya?",
          options: [
            "Directivas coherentes en todas las aplicaciones",
            "Cuentas de usuario separadas en cada aplicación",
            "Reglas de contraseña definidas por aplicación",
            "Almacenes de usuarios locales en cada aplicación, sincronizados cada noche"
          ],
          explain: "Delegar la autenticación en un proveedor de identidades central permite aplicar directivas como la MFA a todas las aplicaciones desde un solo lugar."
        }
      },
      {
        type: "single",
        topic: "Authentication and authorization",
        q: "Which of the following is an example of the authentication factor \"something you are\"?",
        options: ["A PIN", "A smart card", "A facial scan", "A security question"],
        answer: 2,
        explain: "\"Something you are\" is a biometric, such as a fingerprint or facial scan. A PIN and a security question are something you know; a smart card is something you have.",
        es: {
          q: "¿Cuál de los siguientes es un ejemplo del factor de autenticación \"algo que usted es\"?",
          topic: "Autenticación y autorización",
          options: ["Un PIN", "Una tarjeta inteligente", "Un escaneo facial", "Una pregunta de seguridad"],
          explain: "\"Algo que usted es\" es un dato biométrico, como una huella digital o un escaneo facial. Un PIN y una pregunta de seguridad son algo que usted sabe; una tarjeta inteligente es algo que usted tiene."
        }
      },
      {
        type: "single",
        topic: "Federation",
        q: "A consumer app lets customers sign in with their existing Microsoft or GitHub account instead of creating a new one. What is the main benefit of this federated sign-in?",
        options: [
          "It removes the need for the app to trust any identity provider",
          "It reduces sign-up friction, because users don't need a new account",
          "It stores users' passwords inside the app",
          "It replaces authorization in the app"
        ],
        answer: 1,
        explain: "Social sign-in is federation: the app trusts the social IdP to authenticate users, which reduces sign-up friction and improves adoption.",
        es: {
          topic: "Federación",
          q: "Una aplicación para consumidores permite a los clientes iniciar sesión con su cuenta existente de Microsoft o GitHub en lugar de crear una nueva. ¿Cuál es la principal ventaja de este inicio de sesión federado?",
          options: [
            "Elimina la necesidad de que la aplicación confíe en algún proveedor de identidades",
            "Reduce la fricción del registro, porque los usuarios no necesitan una cuenta nueva",
            "Guarda las contraseñas de los usuarios dentro de la aplicación",
            "Reemplaza la autorización en la aplicación"
          ],
          explain: "El inicio de sesión social es federación: la aplicación confía en el proveedor social para autenticar a los usuarios, lo que reduce la fricción del registro y mejora la adopción."
        }
      },
      {
        type: "single",
        topic: "Identity as the security perimeter",
        q: "In an identity-centric security model, which question replaces \"Is this request coming from inside our corporate network?\"",
        options: [
          "Is the request using the corporate VPN?",
          "Who or what is asking, and can it be trusted?",
          "Which firewall rule allows this traffic?",
          "Is the device located in the main office on a wired connection?"
        ],
        answer: 1,
        explain: "When work happens anywhere, identity becomes the central point of verification for every access decision.",
        es: {
          topic: "Identidad como perímetro de seguridad",
          q: "En un modelo de seguridad centrado en la identidad, ¿qué pregunta reemplaza a \"¿Esta solicitud viene de dentro de nuestra red corporativa?\"?",
          options: [
            "¿La solicitud usa la VPN corporativa?",
            "¿Quién o qué la hace, y se puede confiar?",
            "¿Qué regla de firewall permite este tráfico?",
            "¿El dispositivo está en la oficina central con conexión por cable?"
          ],
          explain: "Cuando se trabaja desde cualquier lugar, la identidad pasa a ser el punto central de verificación de cada decisión de acceso."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Directory services", s: "AD DS stores information about the users, devices and groups in a domain and verifies their credentials at sign-in.", answer: true, explain: "That's the role of Active Directory Domain Services." },
          { topic: "Federation", s: "If Organization A trusts Organization B, Organization B automatically trusts Organization A.", answer: false, explain: "Trust isn't automatically bidirectional; two-way trust must be configured." },
          { topic: "Identity providers", s: "An ID token tells an application who the user is.", answer: true, explain: "The ID token proves sign-in and carries the user's name, email and unique identifier." }
        ],
        es: {
          statements: [
            { topic: "Servicios de directorio", s: "AD DS almacena información sobre los usuarios, dispositivos y grupos de un dominio y verifica sus credenciales al iniciar sesión.", explain: "Es la función de Active Directory Domain Services." },
            { topic: "Federación", s: "Si la organización A confía en la organización B, la organización B confía automáticamente en la A.", explain: "La confianza no es bidireccional automáticamente; la confianza en ambos sentidos se debe configurar." },
            { topic: "Proveedores de identidades", s: "Un token de identificador le indica a una aplicación quién es el usuario.", explain: "El token de identificador demuestra el inicio de sesión y lleva el nombre, el correo y el identificador único del usuario." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "authentication-authorization",
      name: "Define authentication and authorization",
      es: { name: "Definición de autenticación y autorización" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/2-define-authentication-authorization",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "dropdown",
            q: "Complete the statement about authentication and authorization.",
            parts: [
              "Authentication answers the question ",
              { options: ["\"What are you allowed to do?\"", "\"Who are you?\"", "\"Where are you?\""], answer: 1 },
              ", and authorization answers the question ",
              { options: ["\"Who are you?\"", "\"What are you allowed to do?\"", "\"When did you sign in?\""], answer: 1 },
              "."
            ],
            explain: "Authentication proves identity; authorization decides what that identity can access.",
            es: {
              q: "Complete la afirmación sobre la autenticación y la autorización.",
              parts: [
                "La autenticación responde a la pregunta ",
                { options: ["\"¿Qué puede hacer?\"", "\"¿Quién es usted?\"", "\"¿Dónde está?\""] },
                ", y la autorización responde a la pregunta ",
                { options: ["\"¿Quién es usted?\"", "\"¿Qué puede hacer?\"", "\"¿Cuándo inició sesión?\""] },
                "."
              ],
              explain: "La autenticación demuestra la identidad; la autorización decide a qué puede acceder esa identidad."
            }
          },
          {
            type: "match",
            q: "Match each credential to its authentication factor category.",
            values: ["Something you know", "Something you have", "Something you are"],
            targets: [
              { t: "A PIN", answer: 0 },
              { t: "A hardware security key", answer: 1 },
              { t: "A fingerprint", answer: 2 },
              { t: "A mobile phone that receives an approval notification", answer: 1 }
            ],
            explain: "Know: password, PIN, security question. Have: phone, security key, smart card. Are: biometrics such as fingerprints or facial scans.",
            es: {
              q: "Relacione cada credencial con su categoría de factor de autenticación.",
              values: ["Algo que usted sabe", "Algo que usted tiene", "Algo que usted es"],
              targets: [
                { t: "Un PIN" },
                { t: "Una llave de seguridad de hardware" },
                { t: "Una huella digital" },
                { t: "Un teléfono móvil que recibe una notificación de aprobación" }
              ],
              explain: "Sabe: contraseña, PIN, pregunta de seguridad. Tiene: teléfono, llave de seguridad, tarjeta inteligente. Es: datos biométricos como huellas digitales o escaneos faciales."
            }
          },
          {
            type: "single",
            q: "Which sign-in combination is multifactor authentication?",
            options: ["A password and a PIN", "A password and a phone notification", "Two different passwords", "A password and a security question"],
            answer: 1,
            explain: "MFA needs factors from different categories. A password and a PIN are both something you know, so together they're still single-category.",
            es: {
              q: "¿Qué combinación de inicio de sesión es autenticación multifactor?",
              options: ["Una contraseña y un PIN", "Una contraseña y una notificación en el teléfono", "Dos contraseñas distintas", "Una contraseña y una pregunta de seguridad"],
              explain: "La MFA requiere factores de categorías distintas. Una contraseña y un PIN son ambos algo que usted sabe, así que juntos siguen siendo de una sola categoría."
            }
          },
          {
            type: "single",
            q: "In which order do authentication and authorization occur?",
            options: [
              "Authorization first, then authentication",
              "Authentication first, then authorization",
              "Both at the same time, independently",
              "Only one of them is needed per request"
            ],
            answer: 1,
            explain: "Authorization can only happen after successful authentication: you can't decide what someone may do without first confirming who they are.",
            es: {
              q: "¿En qué orden ocurren la autenticación y la autorización?",
              options: [
                "Primero la autorización y después la autenticación",
                "Primero la autenticación y después la autorización",
                "Ambas al mismo tiempo, de forma independiente",
                "Solo se necesita una de las dos por solicitud"
              ],
              explain: "La autorización solo puede ocurrir después de una autenticación correcta: no se puede decidir qué puede hacer alguien sin confirmar antes quién es."
            }
          },
          {
            type: "single",
            q: "An analyst needs to read monthly reports but has no reason to edit or delete them. You grant read access only. Which principle are you applying?",
            options: ["Single sign-on", "The principle of least privilege", "Multifactor authentication", "Federation"],
            answer: 1,
            explain: "Least privilege means granting only the minimum access needed to do the job, which limits damage from a compromised account.",
            es: {
              q: "Un analista necesita leer informes mensuales pero no tiene motivos para editarlos ni eliminarlos. Le concede solo acceso de lectura. ¿Qué principio está aplicando?",
              options: ["Inicio de sesión único", "El principio de privilegios mínimos", "Autenticación multifactor", "Federación"],
              explain: "Privilegios mínimos significa conceder solo el acceso mínimo necesario para el trabajo, lo que limita el daño si la cuenta se compromete."
            }
          },
          {
            type: "single",
            q: "At a hotel, the receptionist checks your ID and then gives you a keycard that opens your room and the gym, but not other guests' rooms. What does the keycard represent?",
            options: ["Authentication", "Authorization", "Federation", "Auditing"],
            answer: 1,
            explain: "Checking your ID is authentication; the keycard's limited access is authorization.",
            es: {
              q: "En un hotel, el recepcionista revisa su documento y luego le da una tarjeta que abre su habitación y el gimnasio, pero no las habitaciones de otros huéspedes. ¿Qué representa la tarjeta?",
              options: ["La autenticación", "La autorización", "La federación", "La auditoría"],
              explain: "Revisar el documento es autenticación; el acceso limitado de la tarjeta es autorización."
            }
          },
          {
            type: "multi",
            q: "Which two are typical bases for authorization decisions?",
            options: ["Roles, such as manager or administrator", "Permissions, such as read, write or delete", "Password complexity", "The quality of a biometric scan", "The number of authentication factors"],
            answers: [0, 1],
            explain: "Authorization relies on roles, permissions and attributes such as department or location. The other options are about authentication.",
            es: {
              q: "¿Cuáles son dos bases habituales de las decisiones de autorización?",
              options: ["Los roles, como gerente o administrador", "Los permisos, como leer, escribir o eliminar", "La complejidad de la contraseña", "La calidad de un escaneo biométrico", "La cantidad de factores de autenticación"],
              explain: "La autorización se basa en roles, permisos y atributos como el departamento o la ubicación. Las otras opciones tienen que ver con la autenticación."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "A username alone is enough to prove a user's identity.", answer: false, explain: "A username can be known or guessed; it doesn't prove identity." },
              { s: "Multifactor authentication requires two or more factors from different categories.", answer: true, explain: "That's the definition of MFA." },
              { s: "Authorization can take place before authentication.", answer: false, explain: "Authorization always follows successful authentication." }
            ],
            es: {
              statements: [
                { s: "Un nombre de usuario por sí solo alcanza para demostrar la identidad de un usuario.", explain: "Un nombre de usuario se puede conocer o adivinar; no demuestra la identidad." },
                { s: "La autenticación multifactor requiere dos o más factores de categorías distintas.", explain: "Es la definición de MFA." },
                { s: "La autorización puede ocurrir antes que la autenticación.", explain: "La autorización siempre sigue a una autenticación correcta." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "identity-perimeter",
      name: "Define identity as the primary security perimeter",
      es: { name: "Definición de identidad como perímetro de seguridad principal" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/3-define-identity-primary-security-perimeter",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "multi",
            q: "Which two factors have eroded the traditional network perimeter?",
            options: [
              "Remote and hybrid work",
              "Business-critical workloads moving to cloud and SaaS applications",
              "Company-managed devices used only inside the office",
              "Applications running only on local servers",
              "All employees working from a single office"
            ],
            answers: [0, 1],
            explain: "Cloud and SaaS apps, remote work, personal devices, external users and IoT all moved access outside the boundary. The other options describe the old environment where perimeters worked.",
            es: {
              q: "¿Cuáles son dos factores que debilitaron el perímetro de red tradicional?",
              options: [
                "El trabajo remoto e híbrido",
                "El paso de cargas de trabajo críticas a aplicaciones en la nube y SaaS",
                "Los dispositivos administrados por la empresa usados solo dentro de la oficina",
                "Las aplicaciones que se ejecutan solo en servidores locales",
                "Que todos los empleados trabajen desde una única oficina"
              ],
              explain: "Las aplicaciones en la nube y SaaS, el trabajo remoto, los dispositivos personales, los usuarios externos e IoT sacaron el acceso fuera del límite. Las otras opciones describen el entorno antiguo donde los perímetros funcionaban."
            }
          },
          {
            type: "single",
            q: "Why is identity considered the new primary security perimeter?",
            options: [
              "Because firewalls and VPNs are no longer available",
              "Because the network no longer tells you who to trust",
              "Because identities never get compromised",
              "Because only human users access corporate resources, so protecting them protects everything"
            ],
            answer: 1,
            explain: "With users, devices and apps connecting from anywhere, verifying and controlling identities becomes the fundamental security control.",
            es: {
              q: "¿Por qué se considera a la identidad el nuevo perímetro de seguridad principal?",
              options: [
                "Porque los firewalls y las VPN ya no están disponibles",
                "Porque la red ya no indica en quién confiar",
                "Porque las identidades nunca se comprometen",
                "Porque solo los usuarios humanos acceden a los recursos corporativos, así que protegerlos protege todo"
              ],
              explain: "Con usuarios, dispositivos y aplicaciones que se conectan desde cualquier lugar, verificar y controlar las identidades pasa a ser el control de seguridad fundamental."
            }
          },
          {
            type: "match",
            q: "Match each example to the type of identity it represents.",
            values: ["Human identity", "Device identity", "Workload identity", "Agent identity"],
            targets: [
              { t: "A contractor signing in to a project portal", answer: 0 },
              { t: "An IoT sensor checked for compliance before connecting", answer: 1 },
              { t: "An automated process calling an API with no user involved", answer: 2 },
              { t: "An autonomous AI agent acting on behalf of a user", answer: 3 }
            ],
            explain: "People are human identities, hardware has device identities, software and services use workload identities, and AI agents need purpose-built agent identities.",
            es: {
              q: "Relacione cada ejemplo con el tipo de identidad que representa.",
              values: ["Identidad humana", "Identidad de dispositivo", "Identidad de carga de trabajo", "Identidad de agente"],
              targets: [
                { t: "Un contratista que inicia sesión en un portal de proyectos" },
                { t: "Un sensor de IoT que se verifica antes de conectarse" },
                { t: "Un proceso automatizado que llama a una API sin intervención de un usuario" },
                { t: "Un agente de IA autónomo que actúa en nombre de un usuario" }
              ],
              explain: "Las personas son identidades humanas, el hardware tiene identidades de dispositivo, el software y los servicios usan identidades de carga de trabajo, y los agentes de IA necesitan identidades de agente específicas."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the four pillars of an identity infrastructure.",
            parts: [
              "",
              { options: ["Authentication", "Administration", "Authorization"], answer: 1 },
              " covers creating, updating and removing identities, while ",
              { options: ["auditing", "authorization", "administration"], answer: 0 },
              " records who did what, when and from where."
            ],
            explain: "Administration handles the identity lifecycle (provisioning and deprovisioning). Auditing covers sign-in logs, activity reports and investigations.",
            es: {
              q: "Complete la afirmación sobre los cuatro pilares de una infraestructura de identidad.",
              parts: [
                "La ",
                { options: ["autenticación", "administración", "autorización"] },
                " abarca crear, actualizar y quitar identidades, mientras que la ",
                { options: ["auditoría", "autorización", "administración"] },
                " registra quién hizo qué, cuándo y desde dónde."
              ],
              explain: "La administración gestiona el ciclo de vida de las identidades (aprovisionamiento y desaprovisionamiento). La auditoría abarca los registros de inicio de sesión, los informes de actividad y las investigaciones."
            }
          },
          {
            type: "single",
            q: "An attacker steals the credential an application uses to access a database, and uses it to read sensitive records. What does this illustrate?",
            options: [
              "Only human identities need strong protection",
              "Workload identities need protection too",
              "Device identities can't be compromised",
              "The network perimeter should have stopped the attack, so the firewall was misconfigured"
            ],
            answer: 1,
            explain: "A compromised application credential can give an attacker the same access as a compromised user account. All identity types need protection.",
            es: {
              q: "Un atacante roba la credencial que usa una aplicación para acceder a una base de datos y la usa para leer registros confidenciales. ¿Qué ilustra esto?",
              options: [
                "Solo las identidades humanas necesitan una protección fuerte",
                "Las identidades de carga de trabajo también necesitan protección",
                "Las identidades de dispositivo no se pueden comprometer",
                "El perímetro de red debió detener el ataque, así que el firewall estaba mal configurado"
              ],
              explain: "Una credencial de aplicación comprometida puede darle a un atacante el mismo acceso que una cuenta de usuario comprometida. Todos los tipos de identidad necesitan protección."
            }
          },
          {
            type: "single",
            q: "Which definition of an identity matches the unit?",
            options: [
              "A username and password pair",
              "A set of attributes that characterize a subject",
              "The network location a request comes from",
              "A security token issued after sign-in"
            ],
            answer: 1,
            explain: "An identity is a set of attributes, such as username, role, permissions and registered authentication methods for a user, or management and compliance status for a device.",
            es: {
              q: "¿Qué definición de identidad coincide con la unidad?",
              options: [
                "Un par de nombre de usuario y contraseña",
                "Un conjunto de atributos que caracterizan a un sujeto",
                "La ubicación de red de la que proviene una solicitud",
                "Un token emitido al iniciar sesión"
              ],
              explain: "Una identidad es un conjunto de atributos, como el nombre de usuario, el rol, los permisos y los métodos de autenticación de un usuario, o el estado de administración y cumplimiento de un dispositivo."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "An attacker who compromises a VPN credential can bypass perimeter defenses entirely.", answer: true, explain: "That's why the perimeter alone is no longer a reliable control." },
              { s: "Only human identities need to be authenticated and authorized.", answer: false, explain: "Human, device, workload and agent identities all need to be authenticated and authorized." },
              { s: "Authorization is one of the four pillars of an identity infrastructure.", answer: true, explain: "The pillars are administration, authentication, authorization and auditing." }
            ],
            es: {
              statements: [
                { s: "Un atacante que compromete una credencial de VPN puede eludir por completo las defensas perimetrales.", explain: "Por eso el perímetro por sí solo ya no es un control confiable." },
                { s: "Solo las identidades humanas deben autenticarse y autorizarse.", explain: "Las identidades humanas, de dispositivo, de carga de trabajo y de agente deben autenticarse y autorizarse." },
                { s: "La autorización es uno de los cuatro pilares de una infraestructura de identidad.", explain: "Los pilares son administración, autenticación, autorización y auditoría." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "identity-provider",
      name: "Describe the role of the identity provider",
      es: { name: "Descripción del rol del proveedor de identidades" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/4-describe-role-identity-provider",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "What does an identity provider (IdP) do in modern authentication?",
            options: [
              "Each application stores its own users and passwords and the IdP backs them up",
              "It manages identities and authenticates for apps",
              "It encrypts data at rest for applications",
              "It filters network traffic before it reaches applications, blocking unknown users"
            ],
            answer: 1,
            explain: "Applications delegate authentication and authorization to the IdP instead of managing their own accounts and policies.",
            es: {
              q: "¿Qué hace un proveedor de identidades (IdP) en la autenticación moderna?",
              options: [
                "Cada aplicación guarda sus propios usuarios y contraseñas y el IdP los respalda",
                "Administra identidades y autentica para las aplicaciones",
                "Cifra los datos en reposo de las aplicaciones",
                "Filtra el tráfico de red antes de que llegue a las aplicaciones y bloquea usuarios desconocidos"
              ],
              explain: "Las aplicaciones delegan la autenticación y la autorización en el IdP en lugar de administrar sus propias cuentas y directivas."
            }
          },
          {
            type: "match",
            q: "Match each description to the type of security token.",
            values: ["ID token", "Access token"],
            targets: [
              { t: "Proves that the user successfully signed in", answer: 0 },
              { t: "Grants an app permission to call an API on the user's behalf", answer: 1 },
              { t: "Tells the app the user's name, email and unique identifier", answer: 0 },
              { t: "Specifies that the app may read the user's calendar data", answer: 1 }
            ],
            explain: "ID tokens are about authentication: who the user is. Access tokens are about authorization: what the app may do on the user's behalf.",
            es: {
              q: "Relacione cada descripción con el tipo de token de seguridad.",
              values: ["Token de identificador", "Token de acceso"],
              targets: [
                { t: "Demuestra que el usuario inició sesión correctamente" },
                { t: "Concede a una aplicación permiso para llamar a una API en nombre del usuario" },
                { t: "Le indica a la aplicación el nombre, el correo y el identificador único del usuario" },
                { t: "Especifica que la aplicación puede leer los datos de calendario del usuario" }
              ],
              explain: "Los tokens de identificador tienen que ver con la autenticación: quién es el usuario. Los tokens de acceso, con la autorización: qué puede hacer la aplicación en su nombre."
            }
          },
          {
            type: "single",
            q: "Which protocol is widely used to verify a user's identity in modern cloud and mobile applications, and is built on top of OAuth 2.0?",
            options: ["SAML", "Kerberos", "OpenID Connect", "NTLM"],
            answer: 2,
            explain: "OpenID Connect handles authentication on top of OAuth 2.0. SAML is common for older enterprise apps; Kerberos and NTLM are AD DS protocols.",
            es: {
              q: "¿Qué protocolo se usa ampliamente para verificar la identidad de un usuario en aplicaciones modernas en la nube y móviles, y se basa en OAuth 2.0?",
              options: ["SAML", "Kerberos", "OpenID Connect", "NTLM"],
              explain: "OpenID Connect se ocupa de la autenticación sobre OAuth 2.0. SAML es habitual en aplicaciones empresariales más antiguas; Kerberos y NTLM son protocolos de AD DS."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about authentication protocols.",
            parts: [
              "",
              { options: ["SAML", "OAuth 2.0", "OpenID Connect"], answer: 1 },
              " is used for authorization, while ",
              { options: ["OpenID Connect", "SAML", "OAuth 2.0"], answer: 1 },
              " is commonly used in enterprise scenarios, including integrating older applications and federating between organizations."
            ],
            explain: "OAuth 2.0 issues access tokens for authorization. SAML is the enterprise and federation workhorse, often used with on-premises identity systems.",
            es: {
              q: "Complete la afirmación sobre los protocolos de autenticación.",
              parts: [
                "",
                { options: ["SAML", "OAuth 2.0", "OpenID Connect"] },
                " se usa para la autorización, mientras que ",
                { options: ["OpenID Connect", "SAML", "OAuth 2.0"] },
                " se usa habitualmente en escenarios empresariales, como integrar aplicaciones más antiguas y federar organizaciones."
              ],
              explain: "OAuth 2.0 emite tokens de acceso para la autorización. SAML es el protocolo habitual en empresas y federación, a menudo con sistemas de identidad locales."
            }
          },
          {
            type: "single",
            q: "An employee leaves the company. An administrator disables the account in the identity provider, and the employee immediately loses access to every connected application. Which SSO benefit is this?",
            options: ["Centralized control", "Federation between organizations", "Token claims", "Multifactor authentication"],
            answer: 0,
            explain: "With SSO, disabling one account in the IdP removes access to all connected apps, making offboarding faster and more reliable.",
            es: {
              q: "Un empleado deja la empresa. Un administrador deshabilita la cuenta en el proveedor de identidades y el empleado pierde de inmediato el acceso a todas las aplicaciones conectadas. ¿Qué ventaja del inicio de sesión único es esta?",
              options: ["Control centralizado", "Federación entre organizaciones", "Notificaciones del token", "Autenticación multifactor"],
              explain: "Con el inicio de sesión único, deshabilitar una cuenta en el IdP quita el acceso a todas las aplicaciones conectadas, lo que agiliza y asegura la baja."
            }
          },
          {
            type: "multi",
            q: "Which two problems arise when each application manages its own user accounts instead of using a central identity provider?",
            options: [
              "Fragmented credentials that lead to password reuse",
              "Inconsistent security policies across applications",
              "Single sign-on across all applications",
              "Centralized monitoring of sign-in activity",
              "Consistent MFA requirements"
            ],
            answers: [0, 1],
            explain: "Without an IdP you get fragmented credentials, inconsistent policies and administrative overhead. SSO, central monitoring and consistent MFA are what an IdP gives you.",
            es: {
              q: "¿Cuáles son dos problemas que surgen cuando cada aplicación administra sus propias cuentas de usuario en lugar de usar un proveedor de identidades central?",
              options: [
                "Credenciales fragmentadas que llevan a reutilizar contraseñas",
                "Directivas de seguridad incoherentes entre aplicaciones",
                "Inicio de sesión único en todas las aplicaciones",
                "Supervisión centralizada de la actividad de inicio de sesión",
                "Requisitos de MFA coherentes"
              ],
              explain: "Sin un IdP aparecen credenciales fragmentadas, directivas incoherentes y carga administrativa. El inicio de sesión único, la supervisión central y la MFA coherente son lo que aporta un IdP."
            }
          },
          {
            type: "single",
            q: "Why are security tokens time-limited?",
            options: [
              "To force users to change their passwords",
              "So that a stolen token can't be used indefinitely",
              "To reduce the size of the token",
              "Because applications can't validate long-lived tokens"
            ],
            answer: 1,
            explain: "Tokens expire after a set period, which limits how long a stolen token is useful.",
            es: {
              q: "¿Por qué los tokens de seguridad tienen un tiempo limitado?",
              options: [
                "Para obligar a los usuarios a cambiar la contraseña",
                "Para que un token robado no se pueda usar indefinidamente",
                "Para reducir el tamaño del token",
                "Porque las aplicaciones no pueden validar tokens de larga duración"
              ],
              explain: "Los tokens vencen después de un período fijo, lo que limita el tiempo en que un token robado resulta útil."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Claims are individual pieces of information about the authenticated identity carried inside a token.", answer: true, explain: "Claims include the user's ID, name, email, roles and token validity." },
              { s: "With single sign-on, a user signs in once to the identity provider and is signed in to all applications that trust it.", answer: true, explain: "That's how SSO works." },
              { s: "Microsoft Entra ID is an example of an identity provider that only works on-premises.", answer: false, explain: "Microsoft Entra ID is a cloud-based identity provider that supports SSO across thousands of applications." }
            ],
            es: {
              statements: [
                { s: "Las notificaciones (claims) son datos individuales sobre la identidad autenticada que viajan dentro de un token.", explain: "Las notificaciones incluyen el identificador, el nombre, el correo, los roles del usuario y la validez del token." },
                { s: "Con el inicio de sesión único, un usuario inicia sesión una vez en el proveedor de identidades y queda conectado a todas las aplicaciones que confían en él.", explain: "Así funciona el inicio de sesión único." },
                { s: "Microsoft Entra ID es un ejemplo de proveedor de identidades que solo funciona en entornos locales.", explain: "Microsoft Entra ID es un proveedor de identidades en la nube que admite inicio de sesión único en miles de aplicaciones." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "directory-services",
      name: "Describe the concept of directory services and Active Directory",
      es: { name: "Descripción del concepto de servicios de directorio y Active Directory" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/5-describe-concept-of-directory-services-active-directory",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "What is a directory service?",
            options: [
              "Software that stores and serves data about users, devices and groups",
              "A firewall that controls which users can reach the network",
              "A web portal where employees search company documents",
              "A protocol for encrypting data in transit"
            ],
            answer: 0,
            explain: "A directory is a structured repository of objects; a directory service stores that data and answers questions like who a user is and what they can access.",
            es: {
              q: "¿Qué es un servicio de directorio?",
              options: [
                "Software que guarda y ofrece datos de usuarios, dispositivos y grupos",
                "Un firewall que controla qué usuarios pueden llegar a la red",
                "Un portal web donde los empleados buscan documentos internos",
                "Un protocolo para cifrar datos en tránsito"
              ],
              explain: "Un directorio es un repositorio estructurado de objetos; un servicio de directorio almacena esos datos y responde preguntas como quién es un usuario y a qué puede acceder."
            }
          },
          {
            type: "single",
            q: "What is a server running Active Directory Domain Services called?",
            options: ["An identity provider", "A domain controller", "A hardware security module", "A federation server"],
            answer: 1,
            explain: "A server running AD DS is a domain controller (DC).",
            es: {
              q: "¿Cómo se llama un servidor que ejecuta Active Directory Domain Services?",
              options: ["Un proveedor de identidades", "Un controlador de dominio", "Un módulo de seguridad de hardware", "Un servidor de federación"],
              explain: "Un servidor que ejecuta AD DS es un controlador de dominio (DC)."
            }
          },
          {
            type: "multi",
            q: "Which two capabilities does Active Directory Domain Services provide?",
            options: [
              "Applying Group Policy settings to control device configurations",
              "Organizing users and computers into organizational units (OUs)",
              "Natively authenticating users to SaaS applications with OpenID Connect",
              "Natively managing iOS and Android devices",
              "Authenticating remote users directly without a VPN"
            ],
            answers: [0, 1],
            explain: "Group Policy and OUs are core AD DS capabilities. Native SaaS and modern protocols, mobile device management and VPN-free remote sign-in are its listed limitations.",
            es: {
              q: "¿Cuáles son dos capacidades que ofrece Active Directory Domain Services?",
              options: [
                "Aplicar configuraciones de directiva de grupo para controlar la configuración de los dispositivos",
                "Organizar usuarios y equipos en unidades organizativas (OU)",
                "Autenticar de forma nativa a usuarios en aplicaciones SaaS con OpenID Connect",
                "Administrar de forma nativa dispositivos iOS y Android",
                "Autenticar directamente a usuarios remotos sin VPN"
              ],
              explain: "La directiva de grupo y las OU son capacidades centrales de AD DS. El soporte nativo de SaaS y protocolos modernos, la administración de móviles y el inicio de sesión remoto sin VPN son sus limitaciones listadas."
            }
          },
          {
            type: "match",
            q: "Match each characteristic to the service it describes.",
            values: ["Active Directory Domain Services", "Microsoft Entra ID"],
            targets: [
              { t: "Authenticates users to on-premises applications with Kerberos and NTLM", answer: 0 },
              { t: "Supports modern protocols such as OAuth 2.0 and OpenID Connect", answer: 1 },
              { t: "Is delivered as Identity as a Service (IDaaS)", answer: 1 },
              { t: "Applies Group Policy to devices in a domain", answer: 0 }
            ],
            explain: "AD DS is built for on-premises, domain-based networks. Microsoft Entra ID is its cloud evolution: IDaaS with modern, standards-based authentication.",
            es: {
              q: "Relacione cada característica con el servicio que describe.",
              values: ["Active Directory Domain Services", "Microsoft Entra ID"],
              targets: [
                { t: "Autentica a usuarios en aplicaciones locales con Kerberos y NTLM" },
                { t: "Admite protocolos modernos como OAuth 2.0 y OpenID Connect" },
                { t: "Se ofrece como identidad como servicio (IDaaS)" },
                { t: "Aplica la directiva de grupo a los dispositivos de un dominio" }
              ],
              explain: "AD DS está pensado para redes locales basadas en dominios. Microsoft Entra ID es su evolución en la nube: IDaaS con autenticación moderna basada en estándares."
            }
          },
          {
            type: "single",
            q: "A company that runs AD DS connects it to Microsoft Entra ID so identities are synchronized and users reach on-premises and cloud resources with the same credentials. What is this called?",
            options: ["Federation", "Hybrid identity", "Single-factor authentication", "Domain controller replication"],
            answer: 1,
            explain: "Synchronizing AD DS and Microsoft Entra ID identities is hybrid identity.",
            es: {
              q: "Una empresa que usa AD DS lo conecta con Microsoft Entra ID para que las identidades estén sincronizadas y los usuarios accedan a recursos locales y en la nube con las mismas credenciales. ¿Cómo se llama esto?",
              options: ["Federación", "Identidad híbrida", "Autenticación de un solo factor", "Replicación de controladores de dominio"],
              explain: "Sincronizar las identidades de AD DS y Microsoft Entra ID es identidad híbrida."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Microsoft Entra ID.",
            parts: [
              "Microsoft Entra ID provides an ",
              { options: ["Identity as a Service (IDaaS)", "Infrastructure as a Service (IaaS)", "on-premises directory"], answer: 0 },
              " model, which means ",
              { options: ["the customer", "Microsoft", "a domain controller in your office"], answer: 1 },
              " operates and maintains the underlying infrastructure."
            ],
            explain: "With IDaaS, Microsoft runs the infrastructure while organizations use it to manage users, devices and access policies.",
            es: {
              q: "Complete la afirmación sobre Microsoft Entra ID.",
              parts: [
                "Microsoft Entra ID ofrece un modelo de ",
                { options: ["identidad como servicio (IDaaS)", "infraestructura como servicio (IaaS)", "directorio local"] },
                ", lo que significa que ",
                { options: ["el cliente", "Microsoft", "un controlador de dominio en su oficina"] },
                " opera y mantiene la infraestructura subyacente."
              ],
              explain: "Con IDaaS, Microsoft opera la infraestructura mientras las organizaciones la usan para administrar usuarios, dispositivos y directivas de acceso."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Users working away from the corporate network can't authenticate directly to AD DS without a VPN connection.", answer: true, explain: "That's one of the listed limitations of AD DS." },
              { s: "AD DS natively supports OAuth 2.0 and OpenID Connect.", answer: false, explain: "AD DS doesn't natively support these modern protocols." },
              { s: "A directory can store information about users, devices, groups, policies and applications.", answer: true, explain: "Those are the kinds of objects a directory holds." }
            ],
            es: {
              statements: [
                { s: "Los usuarios que trabajan fuera de la red corporativa no pueden autenticarse directamente en AD DS sin una conexión VPN.", explain: "Es una de las limitaciones listadas de AD DS." },
                { s: "AD DS admite de forma nativa OAuth 2.0 y OpenID Connect.", explain: "AD DS no admite de forma nativa estos protocolos modernos." },
                { s: "Un directorio puede almacenar información sobre usuarios, dispositivos, grupos, directivas y aplicaciones.", explain: "Esos son los tipos de objetos que contiene un directorio." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "federation",
      name: "Describe the concept of federation",
      es: { name: "Descripción del concepto de federación" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/6-describe-concept-federation",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Two companies partner on a project. Employees of each company need to access a shared workspace using their own company credentials, without the administrators creating individual guest accounts. What should they set up?",
            options: ["Federation between their identity providers", "A shared username and password", "Hybrid identity", "A site-to-site VPN between the offices with shared network credentials"],
            answer: 0,
            explain: "B2B federation lets users authenticate with their own organization's identity provider; administrators configure trust instead of creating guest accounts.",
            es: {
              q: "Dos empresas se asocian en un proyecto. Los empleados de cada una necesitan acceder a un espacio de trabajo compartido con las credenciales de su propia empresa, sin que los administradores creen cuentas de invitado individuales. ¿Qué deben configurar?",
              options: ["Federación entre sus proveedores de identidades", "Un nombre de usuario y una contraseña compartidos", "Identidad híbrida", "Una VPN de sitio a sitio entre las oficinas con credenciales de red compartidas"],
              explain: "La federación B2B permite que los usuarios se autentiquen con el proveedor de identidades de su propia organización; los administradores configuran la confianza en lugar de crear cuentas de invitado."
            }
          },
          {
            type: "single",
            q: "Organization A trusts Organization B's identity provider. Can users from Organization A now access Organization B's resources?",
            options: [
              "Yes, trust is always bidirectional",
              "No, B must also trust A",
              "Yes, but only for read access",
              "No, federation never allows access between different organizations, only between domains"
            ],
            answer: 1,
            explain: "Trust relationships aren't automatically bidirectional. For access in both directions, a two-way trust must be configured explicitly.",
            es: {
              q: "La organización A confía en el proveedor de identidades de la organización B. ¿Los usuarios de A ya pueden acceder a los recursos de B?",
              options: [
                "Sí, la confianza siempre es bidireccional",
                "No, B también debe confiar en A",
                "Sí, pero solo con acceso de lectura",
                "No, la federación nunca permite el acceso entre organizaciones distintas, solo entre dominios"
              ],
              explain: "Las relaciones de confianza no son bidireccionales automáticamente. Para el acceso en ambos sentidos se debe configurar explícitamente una confianza bidireccional."
            }
          },
          {
            type: "single",
            q: "A user signs in to a new consumer app with their Google account instead of creating a new account. What is this an example of?",
            options: ["Social federation", "Directory synchronization between Google and the app", "Multifactor authentication", "Hybrid identity"],
            answer: 0,
            explain: "The app trusts the social identity provider to authenticate the user. That's a federated sign-in.",
            es: {
              q: "Un usuario inicia sesión en una aplicación nueva para consumidores con su cuenta de Google en lugar de crear una cuenta nueva. ¿De qué es un ejemplo?",
              options: ["Federación social", "Sincronización de directorios entre Google y la aplicación", "Autenticación multifactor", "Identidad híbrida"],
              explain: "La aplicación confía en el proveedor de identidades social para autenticar al usuario. Es un inicio de sesión federado."
            }
          },
          {
            type: "single",
            q: "Which Microsoft server role lets on-premises Active Directory users access cloud applications by authenticating against an on-premises server that issues tokens the cloud services accept?",
            options: ["Active Directory Domain Services", "Active Directory Federation Services (AD FS)", "Active Directory Certificate Services (AD CS)", "A domain controller"],
            answer: 1,
            explain: "AD FS shares identity information with external services securely, extending on-premises authentication to cloud applications.",
            es: {
              q: "¿Qué rol de servidor de Microsoft permite que los usuarios de Active Directory local accedan a aplicaciones en la nube autenticándose en un servidor local que emite tokens que aceptan los servicios en la nube?",
              options: ["Active Directory Domain Services", "Servicios de federación de Active Directory (AD FS)", "Servicios de certificados de Active Directory (AD CS)", "Un controlador de dominio"],
              explain: "AD FS comparte información de identidad con servicios externos de forma segura y extiende la autenticación local a las aplicaciones en la nube."
            }
          },
          {
            type: "dropdown",
            q: "Complete the passport analogy for federation.",
            parts: [
              "The country that issued your passport is like ",
              { options: ["the partner's application", "your organization's identity provider", "a security token"], answer: 1 },
              ", and the country that accepts it as proof of identity is like ",
              { options: ["a partner whose identity provider trusts yours", "your own directory", "a VPN gateway"], answer: 0 },
              "."
            ],
            explain: "Your own IdP vouches for you, and a partner's IdP that trusts it accepts that voucher, so no new account is needed.",
            es: {
              q: "Complete la analogía del pasaporte para la federación.",
              parts: [
                "El país que emitió su pasaporte es como ",
                { options: ["la aplicación del socio", "el proveedor de identidades de su organización", "un token de seguridad"] },
                ", y el país que lo acepta como prueba de identidad es como ",
                { options: ["un socio cuyo proveedor de identidades confía en el suyo", "su propio directorio", "una puerta de enlace VPN"] },
                "."
              ],
              explain: "Su propio IdP responde por usted, y el IdP de un socio que confía en él acepta esa garantía, así que no se necesita una cuenta nueva."
            }
          },
          {
            type: "multi",
            q: "Which two are federation scenarios described in the unit?",
            options: ["Business-to-business (B2B) collaboration", "Sign-in with social identity providers", "Salting stored passwords", "Network segmentation", "Group Policy deployment"],
            answers: [0, 1],
            explain: "The unit covers B2B collaboration, social and consumer identity providers, and enterprise integration with on-premises identity through AD FS.",
            es: {
              q: "¿Cuáles son dos escenarios de federación que describe la unidad?",
              options: ["Colaboración entre empresas (B2B)", "Inicio de sesión con proveedores de identidades sociales", "Agregar sal a las contraseñas almacenadas", "Segmentación de red", "Implementación de directivas de grupo"],
              explain: "La unidad cubre la colaboración B2B, los proveedores de identidades sociales y de consumidores, y la integración empresarial con la identidad local mediante AD FS."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Federation requires users to create a new account in the partner organization.", answer: false, explain: "Users sign in with credentials they already have; no new account is needed." },
              { s: "Federation works across different vendors because identity providers use industry-standard protocols.", answer: true, explain: "Standard protocols make the token exchange consistent and interoperable." },
              { s: "Microsoft Entra ID supports federation with partners, customers and external users.", answer: true, explain: "The unit states Entra ID supports federation across all these scenarios." }
            ],
            es: {
              statements: [
                { s: "La federación exige que los usuarios creen una cuenta nueva en la organización asociada.", explain: "Los usuarios inician sesión con credenciales que ya tienen; no se necesita una cuenta nueva." },
                { s: "La federación funciona entre distintos proveedores porque los proveedores de identidades usan protocolos estándar del sector.", explain: "Los protocolos estándar hacen que el intercambio de tokens sea coherente e interoperable." },
                { s: "Microsoft Entra ID admite la federación con socios, clientes y usuarios externos.", explain: "La unidad indica que Entra ID admite la federación en todos estos escenarios." }
              ]
            }
          }
        ]
      }
    }
  ]
});
