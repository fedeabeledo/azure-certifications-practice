// AZ-900 > Describe Azure architecture and services > Describe Azure identity, access, and security
Catalog.module("az-900", {
  id: "identity-security",
  name: "Describe Azure identity, access, and security",
  es: { name: "Descripción de la identidad, el acceso y la seguridad de Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Directory services",
        q: "A company wants to lift and shift a legacy application that needs LDAP and Kerberos authentication and domain join, without deploying or maintaining domain controllers in the cloud. What should it use?",
        options: ["Microsoft Entra Connect", "Microsoft Entra Domain Services", "Microsoft Entra Conditional Access", "Microsoft Entra External ID"],
        answer: 1,
        explain: "Entra Domain Services provides managed domain join, group policy, LDAP and Kerberos/NTLM, with Azure managing the domain controllers. Entra Connect only synchronizes identities.",
        es: {
          topic: "Servicios de directorio",
          q: "Una empresa quiere migrar tal cual una aplicación heredada que necesita autenticación LDAP y Kerberos y unión a dominio, sin implementar ni mantener controladores de dominio en la nube. ¿Qué debe usar?",
          options: ["Microsoft Entra Connect", "Microsoft Entra Domain Services", "Acceso condicional de Microsoft Entra", "Microsoft Entra External ID"],
          explain: "Entra Domain Services ofrece unión a dominio, directiva de grupo, LDAP y Kerberos/NTLM administrados, y Azure se ocupa de los controladores de dominio. Entra Connect solo sincroniza identidades."
        }
      },
      {
        type: "match",
        topic: "Identity and security services",
        q: "Match each requirement to the Azure service that meets it.",
        values: ["Conditional Access", "Azure RBAC", "Azure Key Vault", "Microsoft Defender for Cloud"],
        targets: [
          { t: "Require MFA when users sign in from outside trusted networks", answer: 0 },
          { t: "Grant a team Reader access on a resource group", answer: 1 },
          { t: "Store a database connection string securely", answer: 2 },
          { t: "Calculate a secure score and recommend fixes", answer: 3 }
        ],
        explain: "Conditional Access decides sign-in requirements from signals; RBAC grants permissions at a scope; Key Vault stores secrets, keys and certificates; Defender for Cloud manages security posture.",
        es: {
          topic: "Servicios de identidad y seguridad",
          q: "Relacione cada requisito con el servicio de Azure que lo cumple.",
          values: ["Acceso condicional", "Azure RBAC", "Azure Key Vault", "Microsoft Defender for Cloud"],
          targets: [
            { t: "Exigir MFA cuando los usuarios inician sesión fuera de redes de confianza" },
            { t: "Conceder a un equipo acceso de lector en un grupo de recursos" },
            { t: "Guardar de forma segura una cadena de conexión a una base de datos" },
            { t: "Calcular una puntuación de seguridad y recomendar correcciones" }
          ],
          explain: "El acceso condicional decide los requisitos de inicio de sesión según señales; RBAC concede permisos en un ámbito; Key Vault guarda secretos, claves y certificados; Defender for Cloud administra la postura de seguridad."
        }
      },
      {
        type: "single",
        topic: "Authentication methods",
        q: "A company wants employees to sign in without passwords, using an unphishable hardware device that works over USB, Bluetooth or NFC. Which option fits?",
        options: ["Windows Hello for Business", "FIDO2 security keys", "A longer password policy", "Single sign-on"],
        answer: 1,
        explain: "FIDO2 security keys are unphishable hardware devices built on WebAuthn. Windows Hello ties credentials to the user's own Windows PC.",
        es: {
          topic: "Métodos de autenticación",
          q: "Una empresa quiere que los empleados inicien sesión sin contraseñas, con un dispositivo de hardware imposible de suplantar por phishing que funcione por USB, Bluetooth o NFC. ¿Qué opción corresponde?",
          options: ["Windows Hello para empresas", "Llaves de seguridad FIDO2", "Una directiva de contraseñas más largas", "El inicio de sesión único"],
          explain: "Las llaves de seguridad FIDO2 son dispositivos de hardware resistentes al phishing basados en WebAuthn. Windows Hello vincula las credenciales al propio equipo Windows del usuario."
        }
      },
      {
        type: "multi",
        topic: "Azure RBAC",
        q: "Which two statements about Azure role-based access control are true?",
        options: [
          "Permissions granted at a parent scope are inherited by its child scopes",
          "It's enforced on actions that pass through Azure Resource Manager",
          "It enforces permissions inside an application's data",
          "Roles can be assigned only to individual users, never to groups",
          "Being granted a write role removes any read permissions"
        ],
        answers: [0, 1],
        explain: "RBAC is hierarchical and enforced through Resource Manager. It doesn't control application or data-level access, works with groups, and uses an allow model where permissions add up.",
        es: {
          topic: "Azure RBAC",
          q: "¿Cuáles son dos afirmaciones verdaderas sobre el control de acceso basado en roles de Azure?",
          options: [
            "Los permisos concedidos en un ámbito primario los heredan sus ámbitos secundarios",
            "Se aplica a las acciones que pasan por Azure Resource Manager",
            "Aplica permisos dentro de los datos de una aplicación",
            "Los roles solo se pueden asignar a usuarios individuales, nunca a grupos",
            "Recibir un rol de escritura elimina cualquier permiso de lectura"
          ],
          explain: "RBAC es jerárquico y se aplica mediante Resource Manager. No controla el acceso a nivel de aplicación o datos, funciona con grupos y usa un modelo de permiso donde los permisos se suman."
        }
      },
      {
        type: "single",
        topic: "External identities",
        q: "A company wants a supplier's users to work with it in Teams shared channels from their own Teams, through a mutual trust, without the supplier's users appearing as guests in its directory. Which capability fits?",
        options: ["B2B collaboration", "B2B direct connect", "External ID for customers", "Microsoft Entra Domain Services"],
        answer: 1,
        explain: "B2B direct connect establishes two-way trust with another Entra tenant and currently supports Teams shared channels; those users aren't represented in your directory.",
        es: {
          topic: "Identidades externas",
          q: "Una empresa quiere que los usuarios de un proveedor trabajen con ella en canales compartidos de Teams desde su propio Teams, mediante una confianza mutua, sin que esos usuarios aparezcan como invitados en su directorio. ¿Qué capacidad corresponde?",
          options: ["Colaboración B2B", "Conexión directa B2B", "External ID para clientes", "Microsoft Entra Domain Services"],
          explain: "La conexión directa B2B establece una confianza bidireccional con otro inquilino de Entra y actualmente admite canales compartidos de Teams; esos usuarios no aparecen en su directorio."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Zero Trust", s: "Zero Trust grants access based on the network location a request comes from.", answer: false, explain: "Zero Trust requires everyone to authenticate and grants access based on authentication, not location." },
          { topic: "Defense in depth", s: "The perimeter layer uses DDoS protection to filter large-scale attacks.", answer: true, explain: "It also uses perimeter firewalls to identify and alert on attacks." },
          { topic: "Encryption and Key Vault", s: "Azure Key Vault is the primary Azure service for secure key and secret storage.", answer: true, explain: "That's the unit's fundamentals takeaway." }
        ],
        es: {
          statements: [
            { topic: "Confianza cero", s: "Confianza cero concede acceso según la ubicación de red de la que proviene la solicitud.", explain: "Confianza cero exige que todos se autentiquen y concede acceso según la autenticación, no según la ubicación." },
            { topic: "Defensa en profundidad", s: "La capa perimetral usa protección contra DDoS para filtrar ataques a gran escala.", explain: "También usa firewalls perimetrales para identificar y alertar sobre ataques." },
            { topic: "Cifrado y Key Vault", s: "Azure Key Vault es el servicio principal de Azure para almacenar claves y secretos de forma segura.", explain: "Es la conclusión fundamental de la unidad." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Conditional Access",
        q: "Complete the statement about Conditional Access.",
        parts: [
          "In Conditional Access, the ",
          { options: ["signal", "enforcement", "scope"], answer: 1 },
          " is the action that carries out the decision, for example ",
          { options: ["requiring a second form of authentication", "creating a new subscription", "resizing a virtual machine"], answer: 0 },
          "."
        ],
        explain: "Conditional Access collects signals, makes a decision and enforces it by allowing, denying or challenging for MFA.",
        es: {
          topic: "Acceso condicional",
          q: "Complete la afirmación sobre el acceso condicional.",
          parts: [
            "En el acceso condicional, la ",
            { options: ["señal", "aplicación de la decisión", "ámbito"] },
            " es la acción que ejecuta la decisión, por ejemplo ",
            { options: ["exigir una segunda forma de autenticación", "crear una suscripción nueva", "cambiar el tamaño de una máquina virtual"] },
            "."
          ],
          explain: "El acceso condicional recopila señales, toma una decisión y la aplica permitiendo, denegando o solicitando MFA."
        }
      },
      {
        type: "single",
        topic: "Microsoft Defender for Cloud",
        q: "Defender for Cloud generates several related alerts during an attack. Which capability correlates them to show where the attack started and which resources were affected?",
        options: ["Kill-chain analysis", "Secure score", "Just-in-time VM access", "Azure Policy assignments"],
        answer: 0,
        explain: "Kill-chain analysis automatically correlates related alerts to tell the full story of an attack.",
        es: {
          topic: "Microsoft Defender for Cloud",
          q: "Defender for Cloud genera varias alertas relacionadas durante un ataque. ¿Qué capacidad las correlaciona para mostrar dónde empezó el ataque y qué recursos afectó?",
          options: ["El análisis de la cadena de eliminación", "La puntuación de seguridad", "El acceso a máquinas virtuales justo a tiempo", "Las asignaciones de Azure Policy de la suscripción afectada"],
          explain: "El análisis de la cadena de eliminación correlaciona automáticamente las alertas relacionadas para contar la historia completa de un ataque."
        }
      },
      {
        type: "single",
        topic: "Directory services",
        q: "A company wants users to have a consistent experience, including SSO, MFA and self-service password reset, across on-premises Active Directory and Microsoft Entra ID. What synchronizes identities between them?",
        options: ["Microsoft Entra Domain Services", "Microsoft Entra Connect", "Azure Key Vault", "Conditional Access"],
        answer: 1,
        explain: "Microsoft Entra Connect synchronizes user identities between on-premises AD and Entra ID so changes flow between both.",
        es: {
          topic: "Servicios de directorio",
          q: "Una empresa quiere que los usuarios tengan una experiencia coherente, con inicio de sesión único, MFA y restablecimiento de contraseña de autoservicio, entre Active Directory local y Microsoft Entra ID. ¿Qué sincroniza las identidades entre ambos?",
          options: ["Microsoft Entra Domain Services", "Microsoft Entra Connect", "Azure Key Vault", "El acceso condicional"],
          explain: "Microsoft Entra Connect sincroniza las identidades de usuario entre AD local y Entra ID para que los cambios fluyan entre ambos."
        }
      },
      {
        type: "single",
        topic: "Zero Trust",
        q: "A security team limits user access with just-in-time and just-enough-access policies. Which Zero Trust principle does this implement?",
        options: ["Verify explicitly", "Use least privilege access", "Assume breach", "Defense in depth"],
        answer: 1,
        explain: "JIT/JEA, risk-based adaptive policies and data protection implement least privilege access.",
        es: {
          topic: "Confianza cero",
          q: "Un equipo de seguridad limita el acceso de los usuarios con directivas de acceso justo a tiempo y suficiente. ¿Qué principio de Confianza cero implementa?",
          options: ["Verificar explícitamente", "Usar el acceso con privilegios mínimos", "Asumir que hay una vulneración", "Defensa en profundidad"],
          explain: "JIT/JEA, las directivas adaptables basadas en riesgo y la protección de datos implementan el acceso con privilegios mínimos."
        }
      },
      {
        type: "single",
        topic: "Authentication methods",
        q: "Why is single sign-on only as secure as the initial authenticator?",
        options: [
          "Because later access relies on that first sign-in",
          "Because SSO stores a separate password for each app and replays it at every sign-in",
          "Because SSO disables multifactor authentication",
          "Because SSO only works on managed devices"
        ],
        answer: 0,
        explain: "With SSO, later connections are based on the first authentication, so strengthening it, for example with MFA, matters.",
        es: {
          topic: "Métodos de autenticación",
          q: "¿Por qué el inicio de sesión único es solo tan seguro como el autenticador inicial?",
          options: [
            "Porque el acceso posterior depende de ese primer inicio de sesión",
            "Porque el inicio de sesión único guarda una contraseña distinta para cada aplicación",
            "Porque el inicio de sesión único desactiva la autenticación multifactor",
            "Porque el inicio de sesión único solo funciona en dispositivos administrados"
          ],
          explain: "Con el inicio de sesión único, las conexiones posteriores se basan en la primera autenticación, así que reforzarla, por ejemplo con MFA, es clave."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "External identities", s: "Access reviews let guests themselves or a decision maker recertify whether guest access is still needed.", answer: true, explain: "After the review, you can remove access for guests who no longer need it." },
          { topic: "Azure RBAC", s: "Assigning the Owner role at a management group scope affects only the management group itself, not its subscriptions.", answer: false, explain: "Permissions are inherited, so the user can manage everything in all subscriptions within the management group." },
          { topic: "Microsoft Defender for Cloud", s: "Defender for Cloud can protect resources running in AWS and GCP.", answer: true, explain: "It extends protections to other clouds, for example CSPM recommendations and Defender for Servers on EC2." }
        ],
        es: {
          statements: [
            { topic: "Identidades externas", s: "Las revisiones de acceso permiten que los propios invitados o un responsable vuelvan a certificar si el acceso de invitado sigue siendo necesario.", explain: "Después de la revisión, se puede quitar el acceso a los invitados que ya no lo necesitan." },
            { topic: "Azure RBAC", s: "Asignar el rol de propietario en el ámbito de un grupo de administración solo afecta al propio grupo, no a sus suscripciones.", explain: "Los permisos se heredan, así que el usuario puede administrar todo en todas las suscripciones del grupo de administración." },
            { topic: "Microsoft Defender for Cloud", s: "Defender for Cloud puede proteger recursos que se ejecutan en AWS y GCP.", explain: "Extiende sus protecciones a otras nubes, por ejemplo recomendaciones de CSPM y Defender for Servers en EC2." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "directory-services",
      name: "Describe Azure directory services",
      es: { name: "Describir los servicios de directorio de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/2-directory-services",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A legacy application can't use modern authentication and needs domain join, group policy and LDAP. The company doesn't want to manage domain controllers in Azure. What should it use?",
            options: ["Microsoft Entra Domain Services", "Microsoft Entra Connect", "Self-service password reset", "Microsoft Entra Conditional Access"],
            answer: 0,
            explain: "Entra Domain Services provides managed domain services for legacy apps without deploying or maintaining DCs.",
            es: {
              q: "Una aplicación heredada no puede usar autenticación moderna y necesita unión a dominio, directiva de grupo y LDAP. La empresa no quiere administrar controladores de dominio en Azure. ¿Qué debe usar?",
              options: ["Microsoft Entra Domain Services", "Microsoft Entra Connect", "El restablecimiento de contraseña de autoservicio", "Acceso condicional de Microsoft Entra"],
              explain: "Entra Domain Services ofrece servicios de dominio administrados para aplicaciones heredadas sin implementar ni mantener controladores de dominio."
            }
          },
          {
            type: "single",
            q: "Which tool synchronizes user identities between on-premises Active Directory and Microsoft Entra ID?",
            options: ["Microsoft Entra Domain Services", "Microsoft Entra Connect", "Application Proxy", "The My Apps portal"],
            answer: 1,
            explain: "Microsoft Entra Connect bridges on-premises AD and Entra ID, so you don't maintain two separate identity sets.",
            es: {
              q: "¿Qué herramienta sincroniza las identidades de usuario entre Active Directory local y Microsoft Entra ID?",
              options: ["Microsoft Entra Domain Services", "Microsoft Entra Connect", "Application Proxy", "El portal Mis aplicaciones"],
              explain: "Microsoft Entra Connect conecta AD local con Entra ID, para no mantener dos conjuntos de identidades separados."
            }
          },
          {
            type: "match",
            q: "Match each feature to the Microsoft Entra ID service area it belongs to.",
            values: ["Authentication", "Single sign-on", "Application management", "Device management"],
            targets: [
              { t: "Self-service password reset and smart lockout", answer: 0 },
              { t: "One identity used to access multiple applications", answer: 1 },
              { t: "Application Proxy and the My Apps portal", answer: 2 },
              { t: "Device registration through Microsoft Intune", answer: 3 }
            ],
            explain: "Authentication includes SSPR, MFA, banned passwords and smart lockout; app management includes Application Proxy and My Apps; device management works with Intune.",
            es: {
              q: "Relacione cada característica con el área de servicio de Microsoft Entra ID a la que pertenece.",
              values: ["Autenticación", "Inicio de sesión único", "Administración de aplicaciones", "Administración de dispositivos"],
              targets: [
                { t: "El restablecimiento de contraseña de autoservicio y el bloqueo inteligente" },
                { t: "Una identidad usada para acceder a varias aplicaciones" },
                { t: "Application Proxy y el portal Mis aplicaciones" },
                { t: "El registro de dispositivos mediante Microsoft Intune" }
              ],
              explain: "La autenticación incluye SSPR, MFA, contraseñas prohibidas y bloqueo inteligente; la administración de aplicaciones incluye Application Proxy y Mis aplicaciones; la de dispositivos funciona con Intune."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Microsoft Entra Domain Services synchronization.",
            parts: [
              "A managed domain performs a ",
              { options: ["one-way", "two-way", "manual-only"], answer: 0 },
              " synchronization from ",
              { options: ["Microsoft Entra ID", "on-premises AD directly", "Azure DNS"], answer: 0 },
              " to Microsoft Entra Domain Services."
            ],
            explain: "Resources created in the managed domain aren't synced back. In hybrid setups, Entra Connect syncs on-premises AD to Entra ID, which then syncs to the managed domain.",
            es: {
              q: "Complete la afirmación sobre la sincronización de Microsoft Entra Domain Services.",
              parts: [
                "Un dominio administrado realiza una sincronización ",
                { options: ["unidireccional", "bidireccional", "solo manual"] },
                " desde ",
                { options: ["Microsoft Entra ID", "el AD local directamente", "Azure DNS"] },
                " hacia Microsoft Entra Domain Services."
              ],
              explain: "Los recursos creados en el dominio administrado no se sincronizan de vuelta. En entornos híbridos, Entra Connect sincroniza el AD local con Entra ID, que luego sincroniza con el dominio administrado."
            }
          },
          {
            type: "single",
            q: "What extra protection does a company gain by connecting its on-premises Active Directory to Microsoft Entra ID?",
            options: [
              "Detection of suspicious sign-ins at no extra cost",
              "On-premises domain controllers are patched by Microsoft",
              "Users no longer need any credentials",
              "Group policy is applied automatically to every SaaS app that users sign in to"
            ],
            answer: 0,
            explain: "On-premises AD doesn't monitor sign-in behavior; connected to Entra ID, suspicious sign-ins can be detected at no extra cost.",
            es: {
              q: "¿Qué protección adicional obtiene una empresa al conectar su Active Directory local con Microsoft Entra ID?",
              options: [
                "La detección de inicios de sesión sospechosos sin costo adicional",
                "Microsoft aplica parches a los controladores de dominio locales",
                "Los usuarios ya no necesitan ninguna credencial",
                "La directiva de grupo se aplica automáticamente a todas las aplicaciones SaaS en las que inician sesión los usuarios"
              ],
              explain: "El AD local no supervisa el comportamiento de inicio de sesión; conectado a Entra ID, se pueden detectar inicios de sesión sospechosos sin costo adicional."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft Entra Domain Services deploys two domain controllers, known as a replica set, that you don't have to manage.", answer: true, explain: "Azure handles the DCs, including backups and encryption at rest." },
              { s: "Resources you create directly in the managed domain are synchronized back to Microsoft Entra ID.", answer: false, explain: "Synchronization is one-way from Entra ID to the managed domain." },
              { s: "Microsoft 365 and Azure subscribers already use Microsoft Entra ID to authenticate.", answer: true, explain: "Online service subscribers are among Entra ID's users." }
            ],
            es: {
              statements: [
                { s: "Microsoft Entra Domain Services implementa dos controladores de dominio, llamados conjunto de réplicas, que usted no tiene que administrar.", explain: "Azure se ocupa de los controladores, incluidas las copias de seguridad y el cifrado en reposo." },
                { s: "Los recursos que crea directamente en el dominio administrado se sincronizan de vuelta con Microsoft Entra ID.", explain: "La sincronización es unidireccional desde Entra ID hacia el dominio administrado." },
                { s: "Los suscriptores de Microsoft 365 y Azure ya usan Microsoft Entra ID para autenticarse.", explain: "Los suscriptores de servicios en línea están entre los usuarios de Entra ID." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "authentication-methods",
      name: "Describe Azure authentication methods",
      es: { name: "Descripción de los métodos de autenticación de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-authentication-methods",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each scenario to the passwordless option that fits it best.",
            values: ["Windows Hello for Business", "Microsoft Authenticator app", "FIDO2 security keys"],
            targets: [
              { t: "An information worker with their own designated Windows PC", answer: 0 },
              { t: "Sign in by matching a number on an iOS or Android phone and confirming with a biometric", answer: 1 },
              { t: "An unphishable USB or NFC hardware device based on WebAuthn", answer: 2 }
            ],
            explain: "Windows Hello ties credentials to the user's PC; Authenticator turns a phone into a sign-in factor; FIDO2 keys are hardware built on an open standard.",
            es: {
              q: "Relacione cada escenario con la opción sin contraseña que mejor le corresponde.",
              values: ["Windows Hello para empresas", "Aplicación Microsoft Authenticator", "Llaves de seguridad FIDO2"],
              targets: [
                { t: "Un trabajador de la información con su propio equipo Windows asignado" },
                { t: "Iniciar sesión haciendo coincidir un número en un teléfono iOS o Android y confirmando con biometría" },
                { t: "Un dispositivo de hardware USB o NFC resistente al phishing basado en WebAuthn" }
              ],
              explain: "Windows Hello vincula las credenciales al equipo del usuario; Authenticator convierte un teléfono en un factor de inicio de sesión; las llaves FIDO2 son hardware basado en un estándar abierto."
            }
          },
          {
            type: "single",
            q: "Why is single sign-on only as secure as the initial authenticator?",
            options: [
              "Later connections build on the first authentication",
              "SSO keeps a separate password for each application",
              "SSO can't be combined with MFA",
              "SSO only works with on-premises applications joined to the same domain"
            ],
            answer: 0,
            explain: "All later access depends on the first sign-in, so its strength determines SSO's security.",
            es: {
              q: "¿Por qué el inicio de sesión único es solo tan seguro como el autenticador inicial?",
              options: [
                "Porque las conexiones posteriores se basan en la autenticación inicial",
                "Porque el inicio de sesión único guarda una contraseña distinta por aplicación",
                "Porque el inicio de sesión único no se puede combinar con MFA",
                "Porque el inicio de sesión único solo funciona con aplicaciones locales"
              ],
              explain: "Todo el acceso posterior depende del primer inicio de sesión, así que su solidez determina la seguridad del inicio de sesión único."
            }
          },
          {
            type: "single",
            q: "Which authentication approach offers both high security and high convenience?",
            options: ["Password plus a second factor", "Passwordless authentication", "Shared accounts", "Security questions only"],
            answer: 1,
            explain: "Passwordless scores highest on both security and convenience. Passwords alone are convenient but low security.",
            es: {
              q: "¿Qué enfoque de autenticación ofrece a la vez alta seguridad y alta comodidad?",
              options: ["Contraseña más un segundo factor", "Autenticación sin contraseña", "Cuentas compartidas", "Solo preguntas de seguridad"],
              explain: "La autenticación sin contraseña es la que mejor puntúa en seguridad y comodidad. Las contraseñas solas son cómodas pero poco seguras."
            }
          },
          {
            type: "multi",
            q: "Which two are benefits of single sign-on?",
            options: [
              "Fewer passwords and resets",
              "Easier access changes when roles change",
              "It removes the need for a strong initial authentication",
              "It requires a separate password for every app, which improves isolation",
              "It disables multifactor authentication"
            ],
            answers: [0, 1],
            explain: "SSO lowers credential incidents and lockout overhead, and ties access to one identity, simplifying lifecycle management.",
            es: {
              q: "¿Cuáles son dos ventajas del inicio de sesión único?",
              options: [
                "Menos contraseñas y restablecimientos",
                "Cambios de acceso más simples al cambiar de rol",
                "Elimina la necesidad de una autenticación inicial sólida",
                "Exige una contraseña distinta para cada aplicación, lo que mejora el aislamiento",
                "Desactiva la autenticación multifactor"
              ],
              explain: "El inicio de sesión único reduce los incidentes con credenciales y la carga de bloqueos, y vincula el acceso a una identidad, lo que simplifica la administración del ciclo de vida."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about MFA factors.",
            parts: [
              "A code sent to a mobile phone is ",
              { options: ["something the user knows", "something the user has", "something the user is"], answer: 1 },
              ", and a face scan is ",
              { options: ["something the user is", "something the user knows", "something the user has"], answer: 0 },
              "."
            ],
            explain: "Know: password or challenge question. Have: a code sent to a phone. Are: biometrics such as fingerprints or face scans.",
            es: {
              q: "Complete la afirmación sobre los factores de MFA.",
              parts: [
                "Un código enviado a un teléfono móvil es ",
                { options: ["algo que el usuario sabe", "algo que el usuario tiene", "algo que el usuario es"] },
                ", y un escaneo facial es ",
                { options: ["algo que el usuario es", "algo que el usuario sabe", "algo que el usuario tiene"] },
                "."
              ],
              explain: "Sabe: contraseña o pregunta de seguridad. Tiene: un código enviado al teléfono. Es: datos biométricos como huellas o escaneos faciales."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft Entra multifactor authentication lets users choose an extra form of authentication, such as a phone call or mobile app notification.", answer: true, explain: "That's how the service is described." },
              { s: "Passwords on their own provide high security.", answer: false, explain: "Passwords alone are high convenience but low security." },
              { s: "FIDO2 is an open standard for passwordless authentication.", answer: true, explain: "It's built on the WebAuthn specification." }
            ],
            es: {
              statements: [
                { s: "La autenticación multifactor de Microsoft Entra permite que los usuarios elijan una forma de autenticación adicional, como una llamada o una notificación en la aplicación móvil.", explain: "Así se describe el servicio." },
                { s: "Las contraseñas por sí solas ofrecen alta seguridad.", explain: "Las contraseñas solas son muy cómodas pero poco seguras." },
                { s: "FIDO2 es un estándar abierto para la autenticación sin contraseña.", explain: "Se basa en la especificación WebAuthn." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "external-identities",
      name: "Describe Azure external identities",
      es: { name: "Descripción de identidades externas de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/4-external-identities",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each description to the Microsoft Entra External ID capability.",
            values: ["B2B collaboration", "B2B direct connect", "External ID for customers"],
            targets: [
              { t: "External users sign in with their own identity and appear as guests in your directory", answer: 0 },
              { t: "Mutual two-way trust for Teams shared channels; users aren't in your directory", answer: 1 },
              { t: "Publish custom-developed apps to consumers and customers", answer: 2 }
            ],
            explain: "B2B collaboration creates guests; B2B direct connect uses mutual trust without directory presence; External ID for customers (formerly Azure AD B2C) serves consumer apps.",
            es: {
              q: "Relacione cada descripción con la capacidad de Microsoft Entra External ID.",
              values: ["Colaboración B2B", "Conexión directa B2B", "External ID para clientes"],
              targets: [
                { t: "Los usuarios externos inician sesión con su propia identidad y aparecen como invitados en su directorio" },
                { t: "Confianza mutua bidireccional para canales compartidos de Teams; los usuarios no están en su directorio" },
                { t: "Publicar aplicaciones personalizadas para consumidores y clientes" }
              ],
              explain: "La colaboración B2B crea invitados; la conexión directa B2B usa confianza mutua sin presencia en el directorio; External ID para clientes (antes Azure AD B2C) sirve a aplicaciones para consumidores."
            }
          },
          {
            type: "single",
            q: "With external identities, who manages authentication and who manages authorization to your applications?",
            options: [
              "Your tenant manages both",
              "Their provider authenticates; you authorize",
              "The external identity provider manages both",
              "You manage authentication in your tenant; the external provider manages authorization to your apps"
            ],
            answer: 1,
            explain: "External users bring their own identities; their provider authenticates them while you control what they can access.",
            es: {
              q: "Con las identidades externas, ¿quién administra la autenticación y quién la autorización a sus aplicaciones?",
              options: [
                "Su inquilino administra ambas",
                "Su proveedor autentica; usted autoriza",
                "El proveedor de identidades externo administra ambas",
                "Usted administra la autenticación en su inquilino; el proveedor externo, la autorización a sus aplicaciones"
              ],
              explain: "Los usuarios externos traen su propia identidad; su proveedor los autentica mientras usted controla a qué pueden acceder."
            }
          },
          {
            type: "single",
            q: "Several guest users were invited for a project that has ended. How can the company confirm which guests still need access?",
            options: ["Run an access review", "Delete the tenant", "Disable SSO for everyone", "Create a new subscription"],
            answer: 0,
            explain: "Guests or a decision maker can recertify access in an access review, and access can then be removed for those who no longer need it.",
            es: {
              q: "Se invitó a varios usuarios invitados para un proyecto que ya terminó. ¿Cómo puede la empresa confirmar qué invitados siguen necesitando acceso?",
              options: ["Ejecutar una revisión de acceso", "Eliminar el inquilino", "Desactivar el inicio de sesión único para todos", "Crear una suscripción nueva"],
              explain: "Los invitados o un responsable pueden volver a certificar el acceso en una revisión de acceso, y luego se quita el acceso a quienes ya no lo necesitan."
            }
          },
          {
            type: "multi",
            q: "Which two types of identities can external users bring with them?",
            options: ["Work accounts", "Social identities such as Google or Facebook", "Only accounts created in your tenant", "Passwords shared by your administrators", "Device serial numbers"],
            answers: [0, 1],
            explain: "External users can bring work accounts, government-issued digital identities or social identities.",
            es: {
              q: "¿Cuáles son dos tipos de identidades que pueden traer los usuarios externos?",
              options: ["Cuentas profesionales", "Identidades sociales como Google o Facebook", "Solo cuentas creadas en su inquilino", "Contraseñas compartidas por sus administradores", "Números de serie de dispositivos"],
              explain: "Los usuarios externos pueden traer cuentas profesionales, identidades digitales emitidas por gobiernos o identidades sociales."
            }
          },
          {
            type: "single",
            q: "How do external identities differ from single sign-on?",
            options: [
              "They target cross-tenant and consumer access",
              "External identities only work inside your own tenant, for employees who sign in once",
              "External identities replace authorization",
              "They're the same feature with a different name"
            ],
            answer: 0,
            explain: "They can sound similar, but external identities address access beyond your tenant boundary, for partners and consumers.",
            es: {
              q: "¿En qué se diferencian las identidades externas del inicio de sesión único?",
              options: [
                "Apuntan al acceso entre inquilinos y de consumidores",
                "Las identidades externas solo funcionan dentro de su propio inquilino, para empleados que inician sesión una vez",
                "Las identidades externas reemplazan la autorización",
                "Son la misma característica con otro nombre"
              ],
              explain: "Pueden sonar parecidas, pero las identidades externas apuntan al acceso más allá del límite de su inquilino, para socios y consumidores."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "B2B direct connect users are represented in your directory as guest users.", answer: false, explain: "They aren't in your directory; they're visible in the Teams shared channel." },
              { s: "Guest users from other tenants can be invited by administrators or authorized users.", answer: true, explain: "This also applies to social identities such as Microsoft accounts." },
              { s: "Microsoft Entra External ID for customers was formerly known as Azure AD B2C.", answer: true, explain: "The unit notes the former name." }
            ],
            es: {
              statements: [
                { s: "Los usuarios de conexión directa B2B aparecen en su directorio como usuarios invitados.", explain: "No están en su directorio; se ven dentro del canal compartido de Teams." },
                { s: "Los usuarios invitados de otros inquilinos pueden ser invitados por administradores o usuarios autorizados.", explain: "También se aplica a identidades sociales como las cuentas de Microsoft." },
                { s: "Microsoft Entra External ID para clientes antes se llamaba Azure AD B2C.", explain: "La unidad menciona el nombre anterior." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "conditional-access",
      name: "Describe Azure conditional access",
      es: { name: "Descripción del acceso condicional de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/5-conditional-access"
      ,
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A company wants users to be prompted for MFA only when they sign in from outside trusted network locations. What should it use?",
            options: ["Azure RBAC", "Conditional Access", "Microsoft Entra Connect", "Azure Key Vault"],
            answer: 1,
            explain: "Conditional Access evaluates signals such as location and can require MFA only in risky or unexpected situations.",
            es: {
              q: "Una empresa quiere que a los usuarios se les pida MFA solo cuando inician sesión fuera de ubicaciones de red de confianza. ¿Qué debe usar?",
              options: ["Azure RBAC", "El acceso condicional", "Microsoft Entra Connect", "Azure Key Vault"],
              explain: "El acceso condicional evalúa señales como la ubicación y puede exigir MFA solo en situaciones riesgosas o inesperadas."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about how Conditional Access works.",
            parts: [
              "During sign-in, Conditional Access collects ",
              { options: ["signals", "invoices", "backups"], answer: 0 },
              ", makes a ",
              { options: ["decision", "deployment", "replica"], answer: 0 },
              " based on them, and then enforces it."
            ],
            explain: "Signals (user, location, device, app) lead to a decision, and enforcement allows, denies or challenges for MFA.",
            es: {
              q: "Complete la afirmación sobre cómo funciona el acceso condicional.",
              parts: [
                "Durante el inicio de sesión, el acceso condicional recopila ",
                { options: ["señales", "facturas", "copias de seguridad"] },
                ", toma una ",
                { options: ["decisión", "implementación", "réplica"] },
                " basada en ellas y luego la aplica."
              ],
              explain: "Las señales (usuario, ubicación, dispositivo, aplicación) llevan a una decisión, y la aplicación permite, deniega o solicita MFA."
            }
          },
          {
            type: "match",
            q: "Match each scenario to the Conditional Access enforcement that fits it.",
            values: ["Require MFA", "Require a managed device", "Block access", "Require an approved client app"],
            targets: [
              { t: "Administrators signing in to manage resources", answer: 0 },
              { t: "A sensitive app accessed from personal, unmanaged laptops", answer: 1 },
              { t: "Sign-ins from unknown or unexpected locations", answer: 2 },
              { t: "Only certain email applications may connect to the email service", answer: 3 }
            ],
            explain: "These are the unit's common scenarios: MFA for privileged roles, managed devices for sensitive apps, blocking untrusted sources and approved client apps.",
            es: {
              q: "Relacione cada escenario con la acción de acceso condicional que le corresponde.",
              values: ["Exigir MFA", "Exigir un dispositivo administrado", "Bloquear el acceso", "Exigir una aplicación cliente aprobada"],
              targets: [
                { t: "Administradores que inician sesión para administrar recursos" },
                { t: "Una aplicación confidencial a la que se accede desde laptops personales no administradas" },
                { t: "Inicios de sesión desde ubicaciones desconocidas o inesperadas" },
                { t: "Solo ciertas aplicaciones de correo pueden conectarse al servicio de correo" }
              ],
              explain: "Son los escenarios habituales de la unidad: MFA para roles con privilegios, dispositivos administrados para aplicaciones confidenciales, bloqueo de orígenes no confiables y aplicaciones cliente aprobadas."
            }
          },
          {
            type: "multi",
            q: "Which two are signals that Conditional Access can evaluate?",
            options: ["The user's location", "The device requesting access", "The blob access tier", "The subscription's invoice", "The VM size"],
            answers: [0, 1],
            explain: "Signals include who the user is, where they are, the device and the application being accessed.",
            es: {
              q: "¿Cuáles son dos señales que puede evaluar el acceso condicional?",
              options: ["La ubicación del usuario", "El dispositivo que solicita acceso", "El nivel de acceso de los blobs", "La factura de la suscripción", "El tamaño de la máquina virtual"],
              explain: "Las señales incluyen quién es el usuario, dónde está, el dispositivo y la aplicación a la que accede."
            }
          },
          {
            type: "single",
            q: "A user at a known location isn't asked for a second factor, but the same user is challenged when signing in from an unexpected location. Which Conditional Access benefit is this?",
            options: ["A more granular MFA experience", "Single sign-on", "Role inheritance", "Kill-chain analysis"],
            answer: 0,
            explain: "Conditional Access gives a more granular MFA experience, challenging only when signals are unusual.",
            es: {
              q: "A un usuario en una ubicación conocida no se le pide un segundo factor, pero al mismo usuario sí se le pide cuando inicia sesión desde una ubicación inesperada. ¿Qué ventaja del acceso condicional es esta?",
              options: ["Una experiencia de MFA más granular", "El inicio de sesión único", "La herencia de roles", "El análisis de la cadena de eliminación"],
              explain: "El acceso condicional da una experiencia de MFA más granular, que solo pide el segundo factor cuando las señales son inusuales."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Conditional Access can block access from untrusted sources, such as unknown locations.", answer: true, explain: "Blocking untrusted sources is one of the listed uses." },
              { s: "Conditional Access always requires MFA for every sign-in.", answer: false, explain: "It decides based on signals; at a known location the user might not be challenged." },
              { s: "A managed device is a device that meets your standards for security and compliance.", answer: true, explain: "That's how the unit defines it." }
            ],
            es: {
              statements: [
                { s: "El acceso condicional puede bloquear el acceso desde orígenes no confiables, como ubicaciones desconocidas.", explain: "Bloquear orígenes no confiables es uno de los usos listados." },
                { s: "El acceso condicional siempre exige MFA en cada inicio de sesión.", explain: "Decide según las señales; en una ubicación conocida puede no pedir el segundo factor." },
                { s: "Un dispositivo administrado es un dispositivo que cumple sus estándares de seguridad y cumplimiento.", explain: "Así lo define la unidad." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "rbac",
      name: "Describe Azure role-based access control",
      es: { name: "Descripción del control de acceso basado en roles de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/6-role-based-access-control",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A new engineer joins the team and should automatically get the same Azure access as the other engineers. What's the most manageable approach?",
            options: [
              "Copy each of the other engineers' role assignments to the new engineer individually",
              "Add the engineer to the engineers' group",
              "Make the engineer an Owner of the tenant",
              "Share another engineer's account"
            ],
            answer: 1,
            explain: "With Azure RBAC, adding someone to a group with a role assignment gives them all its permissions, and new resources covered by the assignment apply to everyone.",
            es: {
              q: "Un ingeniero nuevo se suma al equipo y debería recibir automáticamente el mismo acceso a Azure que los demás ingenieros. ¿Cuál es el enfoque más fácil de administrar?",
              options: [
                "Copiar al nuevo ingeniero, una por una, las asignaciones de rol de los demás ingenieros",
                "Agregar al ingeniero al grupo de ingenieros",
                "Hacer al ingeniero propietario del inquilino",
                "Compartir la cuenta de otro ingeniero"
              ],
              explain: "Con Azure RBAC, agregar a alguien a un grupo con una asignación de rol le da todos sus permisos, y los recursos nuevos que cubre la asignación se aplican a todos."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure RBAC scopes.",
            parts: [
              "When you assign the Owner role at the ",
              { options: ["resource", "management group", "resource group"], answer: 1 },
              " scope, the user can manage everything in all of its subscriptions, because permissions are ",
              { options: ["inherited", "revoked", "duplicated"], answer: 0 },
              " by child scopes."
            ],
            explain: "RBAC is hierarchical: permissions granted at a parent scope flow down to all child scopes.",
            es: {
              q: "Complete la afirmación sobre los ámbitos de Azure RBAC.",
              parts: [
                "Cuando asigna el rol de propietario en el ámbito de ",
                { options: ["recurso", "grupo de administración", "grupo de recursos"] },
                ", el usuario puede administrar todo en todas sus suscripciones, porque los ámbitos secundarios ",
                { options: ["heredan", "revocan", "duplican"] },
                " los permisos."
              ],
              explain: "RBAC es jerárquico: los permisos concedidos en un ámbito primario se transmiten a todos los ámbitos secundarios."
            }
          },
          {
            type: "single",
            q: "Azure RBAC is enforced on any action against an Azure resource that passes through which service?",
            options: ["Azure Resource Manager", "Microsoft Entra Connect", "Azure DNS", "Azure Key Vault"],
            answer: 0,
            explain: "RBAC is enforced on actions through Resource Manager, typically reached from the portal, Cloud Shell, PowerShell or CLI.",
            es: {
              q: "Azure RBAC se aplica a cualquier acción sobre un recurso de Azure que pase por ¿qué servicio?",
              options: ["Azure Resource Manager", "Microsoft Entra Connect", "Azure DNS", "Azure Key Vault"],
              explain: "RBAC se aplica a las acciones que pasan por Resource Manager, al que normalmente se accede desde el portal, Cloud Shell, PowerShell o la CLI."
            }
          },
          {
            type: "single",
            q: "One role assignment grants you read permissions on a resource group, and another grants you write permissions on the same resource group. What can you do?",
            options: ["Only read", "Only write", "Both read and write", "Nothing, because the assignments conflict"],
            answer: 2,
            explain: "Azure RBAC uses an allow model, so permissions from multiple assignments add up.",
            es: {
              q: "Una asignación de rol le concede permisos de lectura en un grupo de recursos, y otra le concede permisos de escritura en el mismo grupo. ¿Qué puede hacer?",
              options: ["Solo leer", "Solo escribir", "Leer y escribir", "Nada, porque las asignaciones entran en conflicto"],
              explain: "Azure RBAC usa un modelo de permiso, así que los permisos de varias asignaciones se suman."
            }
          },
          {
            type: "multi",
            q: "Which two are valid Azure RBAC scopes?",
            options: ["A resource group", "A single resource", "An availability zone", "A region", "A blob access tier"],
            answers: [0, 1],
            explain: "Scopes are management groups, subscriptions, resource groups and individual resources.",
            es: {
              q: "¿Cuáles son dos ámbitos válidos de Azure RBAC?",
              options: ["Un grupo de recursos", "Un recurso individual", "Una zona de disponibilidad", "Una región", "Un nivel de acceso de blobs"],
              explain: "Los ámbitos son grupos de administración, suscripciones, grupos de recursos y recursos individuales."
            }
          },
          {
            type: "single",
            q: "A developer assumes Azure RBAC will also control which records users can see inside the company's application. Is that correct?",
            options: [
              "Yes, RBAC enforces permissions at the application and data level for any resource",
              "No, the application must handle that",
              "Yes, but only for SQL databases",
              "No, because RBAC only works for virtual machines"
            ],
            answer: 1,
            explain: "RBAC governs actions on Azure resources through Resource Manager. Application security must be handled by the application.",
            es: {
              q: "Un desarrollador supone que Azure RBAC también controlará qué registros pueden ver los usuarios dentro de la aplicación de la empresa. ¿Es correcto?",
              options: [
                "Sí, RBAC aplica permisos a nivel de aplicación y de datos en cualquier recurso",
                "No, eso lo debe resolver la aplicación",
                "Sí, pero solo para bases de datos SQL",
                "No, porque RBAC solo funciona con máquinas virtuales"
              ],
              explain: "RBAC rige las acciones sobre recursos de Azure mediante Resource Manager. La seguridad de la aplicación la debe gestionar la propia aplicación."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure provides built-in roles, and you can also define your own roles.", answer: true, explain: "Both are available." },
              { s: "Assigning the Reader role to a group at the subscription scope lets members view every resource group and resource in that subscription.", answer: true, explain: "Reader permissions are inherited by all child scopes." },
              { s: "If one role grants read and another grants write on the same scope, only the read permission applies.", answer: false, explain: "RBAC's allow model combines both, so you get read and write." }
            ],
            es: {
              statements: [
                { s: "Azure ofrece roles integrados y también permite definir roles propios.", explain: "Ambas opciones están disponibles." },
                { s: "Asignar el rol de lector a un grupo en el ámbito de una suscripción permite que sus miembros vean todos los grupos de recursos y recursos de esa suscripción.", explain: "Los permisos de lector los heredan todos los ámbitos secundarios." },
                { s: "Si un rol concede lectura y otro escritura en el mismo ámbito, solo se aplica el permiso de lectura.", explain: "El modelo de permiso de RBAC combina ambos, así que se obtiene lectura y escritura." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "zero-trust",
      name: "Describe Zero Trust model",
      es: { name: "Describir el modelo de confianza cero" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/7-describe-zero-trust-model",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Which statement best describes the Zero Trust security model?",
            options: [
              "It trusts devices inside the corporate network and verifies only external requests",
              "It assumes breach and verifies every request",
              "It relies on VPN access as the main security boundary",
              "It allows only personal devices"
            ],
            answer: 1,
            explain: "Zero Trust assumes the worst case and verifies every request instead of trusting network location.",
            es: {
              q: "¿Qué afirmación describe mejor el modelo de seguridad de Confianza cero?",
              options: [
                "Confía en los dispositivos de la red corporativa y verifica solo las solicitudes externas",
                "Asume una vulneración y verifica cada solicitud",
                "Depende del acceso por VPN como principal límite de seguridad",
                "Solo permite dispositivos personales"
              ],
              explain: "Confianza cero asume el peor escenario y verifica cada solicitud en lugar de confiar en la ubicación de red."
            }
          },
          {
            type: "match",
            q: "Match each practice to the Zero Trust guiding principle it reflects.",
            values: ["Verify explicitly", "Use least privilege access", "Assume breach"],
            targets: [
              { t: "Authenticate and authorize based on all available data points", answer: 0 },
              { t: "Limit access with just-in-time and just-enough-access", answer: 1 },
              { t: "Segment access and verify end-to-end encryption", answer: 2 },
              { t: "Use analytics to drive threat detection", answer: 2 }
            ],
            explain: "All data points: verify explicitly. JIT/JEA and adaptive policies: least privilege. Segmentation, encryption and analytics: assume breach.",
            es: {
              q: "Relacione cada práctica con el principio rector de Confianza cero que refleja.",
              values: ["Verificar explícitamente", "Usar el acceso con privilegios mínimos", "Asumir que hay una vulneración"],
              targets: [
                { t: "Autenticar y autorizar según todos los datos disponibles" },
                { t: "Limitar el acceso con acceso justo a tiempo y suficiente" },
                { t: "Segmentar el acceso y verificar el cifrado de extremo a extremo" },
                { t: "Usar análisis para impulsar la detección de amenazas" }
              ],
              explain: "Todos los datos disponibles: verificar explícitamente. JIT/JEA y directivas adaptables: privilegios mínimos. Segmentación, cifrado y análisis: asumir que hay una vulneración."
            }
          },
          {
            type: "single",
            q: "Compared with traditional perimeter-based networks, on what basis does Zero Trust grant access?",
            options: ["Network location", "Authentication", "Device brand", "VPN usage"],
            answer: 1,
            explain: "Zero Trust requires everyone to authenticate and grants access based on authentication rather than location.",
            es: {
              q: "En comparación con las redes tradicionales basadas en perímetro, ¿según qué concede acceso Confianza cero?",
              options: ["La ubicación de red", "La autenticación", "La marca del dispositivo", "El uso de VPN"],
              explain: "Confianza cero exige que todos se autentiquen y concede acceso según la autenticación, no según la ubicación."
            }
          },
          {
            type: "single",
            q: "A user signs in from an unmanaged device on a public network. Which response is consistent with Zero Trust?",
            options: [
              "Grant full access because the password was correct",
              "Decide based on identity, device and risk",
              "Block every sign-in from outside the office permanently",
              "Allow access only if the user first connects through a VPN, since the network is then trusted"
            ],
            answer: 1,
            explain: "Zero Trust decisions are continuous and context-aware, based on identity, device and risk rather than only where the request comes from.",
            es: {
              q: "Un usuario inicia sesión desde un dispositivo no administrado en una red pública. ¿Qué respuesta es coherente con Confianza cero?",
              options: [
                "Conceder acceso total porque la contraseña fue correcta",
                "Decidir según la identidad, el dispositivo y el riesgo",
                "Bloquear para siempre todo inicio de sesión fuera de la oficina",
                "Permitir el acceso solo si el usuario se conecta primero por VPN, porque así la red es de confianza"
              ],
              explain: "Las decisiones de Confianza cero son continuas y dependen del contexto: identidad, dispositivo y riesgo, no solo de dónde viene la solicitud."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "In a Zero Trust model, a device is considered safe because it's inside a trusted internal network.", answer: false, explain: "Zero Trust flips that assumption and requires everyone to authenticate." },
              { s: "In Zero Trust, access decisions are continuous and context-aware.", answer: true, explain: "That's the unit's fundamentals summary." },
              { s: "Microsoft highly recommends the Zero Trust security model.", answer: true, explain: "The unit states this explicitly." }
            ],
            es: {
              statements: [
                { s: "En un modelo de Confianza cero, un dispositivo se considera seguro porque está dentro de una red interna de confianza.", explain: "Confianza cero invierte esa suposición y exige que todos se autentiquen." },
                { s: "En Confianza cero, las decisiones de acceso son continuas y dependen del contexto.", explain: "Es el resumen fundamental de la unidad." },
                { s: "Microsoft recomienda enfáticamente el modelo de seguridad de Confianza cero.", explain: "La unidad lo dice de forma explícita." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "defense-in-depth",
      name: "Describe defense-in-depth",
      es: { name: "Descripción de defensa en profundidad" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/8-describe-defense-depth",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each practice to the defense-in-depth layer it belongs to.",
            values: ["Perimeter", "Network", "Compute", "Application"],
            targets: [
              { t: "DDoS protection that filters large-scale attacks", answer: 0 },
              { t: "Deny by default and limit communication between resources", answer: 1 },
              { t: "Secure access to VMs and keep systems patched", answer: 2 },
              { t: "Store sensitive application secrets in Azure Key Vault", answer: 3 }
            ],
            explain: "Perimeter filters attacks at the edge; network limits connectivity; compute secures VMs and endpoints; application covers secure code and secrets storage.",
            es: {
              q: "Relacione cada práctica con la capa de la defensa en profundidad a la que pertenece.",
              values: ["Perímetro", "Red", "Proceso", "Aplicación"],
              targets: [
                { t: "Protección contra DDoS que filtra ataques a gran escala" },
                { t: "Denegar por defecto y limitar la comunicación entre recursos" },
                { t: "Proteger el acceso a las máquinas virtuales y mantener los sistemas actualizados" },
                { t: "Guardar los secretos confidenciales de la aplicación en Azure Key Vault" }
              ],
              explain: "El perímetro filtra ataques en el borde; la red limita la conectividad; el proceso protege máquinas virtuales y dispositivos; la aplicación cubre el código seguro y el almacenamiento de secretos."
            }
          },
          {
            type: "single",
            q: "Which defense-in-depth layer is the first line of defense, protecting computing hardware in the datacenter?",
            options: ["Identity and access", "Physical security", "Perimeter", "Data"],
            answer: 1,
            explain: "Physical security, controlling access to buildings and hardware, is the outermost layer and first line of defense.",
            es: {
              q: "¿Qué capa de la defensa en profundidad es la primera línea de defensa y protege el hardware de cómputo en el centro de datos?",
              options: ["Identidad y acceso", "Seguridad física", "Perímetro", "Datos"],
              explain: "La seguridad física, que controla el acceso a los edificios y al hardware, es la capa más externa y la primera línea de defensa."
            }
          },
          {
            type: "single",
            q: "At which layer should you use single sign-on and multifactor authentication, and audit sign-in events and changes?",
            options: ["Identity and access", "Compute", "Network", "Physical security"],
            answer: 0,
            explain: "The identity and access layer secures identities, grants only needed access and logs sign-ins and changes.",
            es: {
              q: "¿En qué capa conviene usar inicio de sesión único y autenticación multifactor, y auditar los eventos de inicio de sesión y los cambios?",
              options: ["Identidad y acceso", "Proceso", "Red", "Seguridad física"],
              explain: "La capa de identidad y acceso protege las identidades, concede solo el acceso necesario y registra los inicios de sesión y los cambios."
            }
          },
          {
            type: "multi",
            q: "Which two controls belong to the data layer?",
            options: ["Encryption at rest", "Encryption in transit", "DDoS filtering", "Perimeter firewalls", "Security guards at the datacenter"],
            answers: [0, 1],
            explain: "The data layer protects data with encryption at rest and in transit, with Key Vault managing keys and secrets.",
            es: {
              q: "¿Cuáles son dos controles que pertenecen a la capa de datos?",
              options: ["El cifrado en reposo", "El cifrado en tránsito", "El filtrado de DDoS", "Los firewalls perimetrales", "Los guardias de seguridad del centro de datos"],
              explain: "La capa de datos protege los datos con cifrado en reposo y en tránsito, y Key Vault administra las claves y los secretos."
            }
          },
          {
            type: "single",
            q: "What is the objective of a defense-in-depth strategy?",
            options: [
              "To rely on one very strong perimeter layer so attackers never get inside",
              "To slow an attack with layered mechanisms",
              "To replace the need for identity controls",
              "To make all resources publicly accessible"
            ],
            answer: 1,
            explain: "Layered mechanisms slow an attack aimed at data, and if one layer is breached the next is already in place.",
            es: {
              q: "¿Cuál es el objetivo de una estrategia de defensa en profundidad?",
              options: [
                "Depender de una única capa perimetral muy sólida para que los atacantes nunca entren",
                "Frenar un ataque con mecanismos en capas",
                "Reemplazar la necesidad de controles de identidad",
                "Hacer que todos los recursos sean accesibles públicamente"
              ],
              explain: "Los mecanismos por capas frenan un ataque dirigido a los datos, y si una capa se vulnera, la siguiente ya está lista."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Defense in depth removes reliance on any single layer of protection.", answer: true, explain: "If one layer is breached, a subsequent layer is already in place." },
              { s: "At the network layer, traffic should be allowed by default.", answer: false, explain: "The network layer recommends denying by default." },
              { s: "In almost all cases, attackers are after data.", answer: true, explain: "Whether in databases, VM disks, SaaS apps or cloud storage." }
            ],
            es: {
              statements: [
                { s: "La defensa en profundidad elimina la dependencia de una única capa de protección.", explain: "Si una capa se vulnera, la siguiente ya está en su lugar." },
                { s: "En la capa de red, el tráfico debe permitirse por defecto.", explain: "La capa de red recomienda denegar por defecto." },
                { s: "En casi todos los casos, los atacantes buscan los datos.", explain: "Ya sea en bases de datos, discos de máquinas virtuales, aplicaciones SaaS o almacenamiento en la nube." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "encryption-key-vault",
      name: "Describe encryption and key management in Azure",
      es: { name: "Descripción del cifrado y la administración de claves en Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/9a-describe-encryption-key-management",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A team stores database connection strings, encryption keys and TLS certificates in configuration files. Which Azure service should it use instead?",
            options: ["Azure Key Vault", "Azure DNS", "Microsoft Entra Connect", "Azure Files"],
            answer: 0,
            explain: "Key Vault securely stores and controls access to secrets, keys and certificates, centralizing them instead of keeping them in code or config files.",
            es: {
              q: "Un equipo guarda cadenas de conexión a bases de datos, claves de cifrado y certificados TLS en archivos de configuración. ¿Qué servicio de Azure debería usar en su lugar?",
              options: ["Azure Key Vault", "Azure DNS", "Microsoft Entra Connect", "Azure Files"],
              explain: "Key Vault almacena de forma segura y controla el acceso a secretos, claves y certificados, centralizándolos en lugar de dejarlos en el código o en archivos de configuración."
            }
          },
          {
            type: "single",
            q: "How can applications retrieve secrets from Key Vault at runtime while reducing hard-coded credentials?",
            options: ["By using managed identities", "By embedding the vault password in the code", "By emailing secrets to developers", "By disabling access control on the vault"],
            answer: 0,
            explain: "Retrieving secrets with managed identities removes hard-coded credentials and improves secret governance.",
            es: {
              q: "¿Cómo pueden las aplicaciones obtener secretos de Key Vault en tiempo de ejecución reduciendo las credenciales escritas en el código?",
              options: ["Usando identidades administradas", "Incluyendo la contraseña del almacén en el código", "Enviando los secretos por correo a los desarrolladores", "Desactivando el control de acceso del almacén"],
              explain: "Obtener secretos con identidades administradas elimina las credenciales escritas en el código y mejora la gobernanza de secretos."
            }
          },
          {
            type: "multi",
            q: "Which two goals does key management with Azure Key Vault help you achieve?",
            options: [
              "Control who can access keys and secrets",
              "Rotate and update keys over time",
              "Store secrets directly in application code",
              "Remove the need for encryption in transit",
              "Stop auditing key usage"
            ],
            answers: [0, 1],
            explain: "Key management helps control access, rotate keys and audit usage, supporting security and compliance.",
            es: {
              q: "¿Cuáles son dos objetivos que ayuda a lograr la administración de claves con Azure Key Vault?",
              options: [
                "Controlar quién puede acceder a las claves y los secretos",
                "Rotar y actualizar las claves con el tiempo",
                "Guardar los secretos directamente en el código de la aplicación",
                "Eliminar la necesidad del cifrado en tránsito",
                "Dejar de auditar el uso de las claves"
              ],
              explain: "La administración de claves ayuda a controlar el acceso, rotar las claves y auditar su uso, lo que contribuye a la seguridad y el cumplimiento."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about encryption in Azure.",
            parts: [
              "Encryption ",
              { options: ["at rest", "in transit", "in use"], answer: 0 },
              " protects stored data, such as databases and disks, while encryption ",
              { options: ["at rest", "in transit", "offline"], answer: 1 },
              " protects data moving between services, applications and users."
            ],
            explain: "A strong security posture generally includes both encryption at rest and in transit.",
            es: {
              q: "Complete la afirmación sobre el cifrado en Azure.",
              parts: [
                "El cifrado ",
                { options: ["en reposo", "en tránsito", "en uso"] },
                " protege los datos almacenados, como bases de datos y discos, mientras que el cifrado ",
                { options: ["en reposo", "en tránsito", "sin conexión"] },
                " protege los datos que se mueven entre servicios, aplicaciones y usuarios."
              ],
              explain: "Una buena postura de seguridad suele incluir tanto el cifrado en reposo como en tránsito."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Key rotation policies and alerting help teams avoid service disruption before keys expire.", answer: true, explain: "The unit recommends notifying teams before keys expire." },
              { s: "A strong security posture uses only encryption at rest.", answer: false, explain: "It generally includes both encryption at rest and in transit." },
              { s: "Limiting who can view, use and rotate keys helps reduce risk and supports compliance reporting.", answer: true, explain: "Separating duties is a key management practice." }
            ],
            es: {
              statements: [
                { s: "Las directivas de rotación de claves y las alertas ayudan a evitar interrupciones antes de que venzan las claves.", explain: "La unidad recomienda avisar a los equipos antes de que venzan." },
                { s: "Una buena postura de seguridad usa solo cifrado en reposo.", explain: "Suele incluir tanto cifrado en reposo como en tránsito." },
                { s: "Limitar quién puede ver, usar y rotar las claves ayuda a reducir el riesgo y facilita los informes de cumplimiento.", explain: "Separar funciones es una práctica de administración de claves." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "defender-for-cloud",
      name: "Describe Microsoft Defender for Cloud",
      es: { name: "Descripción de Microsoft Defender for Cloud" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/9-describe-microsoft-defender-for-cloud",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A security team needs one service that monitors Azure, on-premises and multicloud resources, recommends improvements to security posture and raises threat alerts. What should it use?",
            options: ["Azure Key Vault", "Microsoft Defender for Cloud", "Microsoft Entra Conditional Access", "Microsoft Entra Connect"],
            answer: 1,
            explain: "Defender for Cloud is a security posture management and threat protection service across cloud, on-premises, hybrid and multicloud resources.",
            es: {
              q: "Un equipo de seguridad necesita un solo servicio que supervise recursos de Azure, locales y multinube, recomiende mejoras de la postura de seguridad y genere alertas de amenazas. ¿Qué debe usar?",
              options: ["Azure Key Vault", "Microsoft Defender for Cloud", "Acceso condicional de Microsoft Entra", "Microsoft Entra Connect"],
              explain: "Defender for Cloud es un servicio de administración de la postura de seguridad y protección contra amenazas para recursos en la nube, locales, híbridos y multinube."
            }
          },
          {
            type: "match",
            q: "Match each capability to the Defender for Cloud need it fulfills.",
            values: ["Continuously assess", "Secure", "Defend"],
            targets: [
              { t: "Vulnerability assessment for VMs, container registries and SQL servers", answer: 0 },
              { t: "Hardening resources with the Microsoft cloud security benchmark", answer: 1 },
              { t: "Security alerts correlated with kill-chain analysis", answer: 2 },
              { t: "A secure score calculated from grouped recommendations", answer: 1 }
            ],
            explain: "Assess finds vulnerabilities; Secure applies policies, MCSB recommendations and the secure score; Defend raises alerts and advanced threat protection.",
            es: {
              q: "Relacione cada capacidad con la necesidad de Defender for Cloud que cubre.",
              values: ["Evaluar continuamente", "Proteger", "Defender"],
              targets: [
                { t: "Evaluación de vulnerabilidades en máquinas virtuales, registros de contenedores y servidores SQL" },
                { t: "Reforzar los recursos con el punto de referencia de seguridad en la nube de Microsoft" },
                { t: "Alertas de seguridad correlacionadas con el análisis de la cadena de eliminación" },
                { t: "Una puntuación de seguridad calculada a partir de recomendaciones agrupadas" }
              ],
              explain: "Evaluar encuentra vulnerabilidades; Proteger aplica directivas, recomendaciones del MCSB y la puntuación de seguridad; Defender genera alertas y protección avanzada contra amenazas."
            }
          },
          {
            type: "single",
            q: "A company wants Defender for Cloud to protect its on-premises servers. What should it do?",
            options: [
              "Connect them with Azure Arc",
              "Move every server to Azure first",
              "Configure a site-to-site VPN so Defender for Cloud can scan them over the tunnel",
              "Assign the Reader role to the servers"
            ],
            answer: 0,
            explain: "Azure Arc extends Defender plans to non-Azure machines; then you enable the enhanced security features.",
            es: {
              q: "Una empresa quiere que Defender for Cloud proteja sus servidores locales. ¿Qué debe hacer?",
              options: [
                "Conectarlos con Azure Arc",
                "Trasladar primero todos los servidores a Azure",
                "Configurar una VPN de sitio a sitio para que Defender for Cloud los analice por el túnel",
                "Asignar el rol de lector a los servidores"
              ],
              explain: "Azure Arc extiende los planes de Defender a máquinas fuera de Azure; luego se habilitan las características de seguridad mejoradas."
            }
          },
          {
            type: "single",
            q: "For a connected AWS environment, which of the following can Defender for Cloud do?",
            options: [
              "Extend Defender for Servers protections to EC2 instances",
              "Replace AWS identity management with Entra ID automatically",
              "Move AWS resources into Azure subscriptions",
              "Only read AWS invoices"
            ],
            answer: 0,
            explain: "Defender for Cloud can extend CSPM recommendations, Defender for Containers to EKS and Defender for Servers to EC2.",
            es: {
              q: "En un entorno de AWS conectado, ¿cuál de las siguientes acciones puede realizar Defender for Cloud?",
              options: [
                "Extender las protecciones de Defender for Servers a las instancias EC2",
                "Reemplazar automáticamente la administración de identidades de AWS por Entra ID",
                "Trasladar los recursos de AWS a suscripciones de Azure",
                "Solo leer las facturas de AWS"
              ],
              explain: "Defender for Cloud puede extender recomendaciones de CSPM, Defender for Containers a EKS y Defender for Servers a EC2."
            }
          },
          {
            type: "multi",
            q: "Which two things do Defender for Cloud security alerts do?",
            options: [
              "Describe details of the affected resources",
              "Suggest remediation steps",
              "Automatically delete the affected resources",
              "Cover only Azure virtual machines",
              "Prevent alerts from being exported"
            ],
            answers: [0, 1],
            explain: "Alerts describe affected resources, suggest remediation and sometimes can trigger a logic app; they can be exported.",
            es: {
              q: "¿Cuáles son dos cosas que hacen las alertas de seguridad de Defender for Cloud?",
              options: [
                "Describen los detalles de los recursos afectados",
                "Sugieren pasos de corrección",
                "Eliminan automáticamente los recursos afectados",
                "Solo cubren máquinas virtuales de Azure",
                "Impiden que las alertas se exporten"
              ],
              explain: "Las alertas describen los recursos afectados, sugieren correcciones y a veces pueden activar una aplicación lógica; además se pueden exportar."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Defender for Cloud builds on Azure Policy, so controls can be scoped at management group, subscription or tenant level.", answer: true, explain: "That's how it secures workloads with aligned policies." },
              { s: "Defender for Cloud can only protect resources running in Azure.", answer: false, explain: "It also covers on-premises, hybrid and multicloud resources such as AWS and GCP." },
              { s: "Just-in-time VM access helps reduce exposure to brute-force attacks.", answer: true, explain: "It's listed among network protections and advanced threat protection." }
            ],
            es: {
              statements: [
                { s: "Defender for Cloud se basa en Azure Policy, así que los controles se pueden aplicar a nivel de grupo de administración, suscripción o inquilino.", explain: "Así protege las cargas de trabajo con directivas alineadas." },
                { s: "Defender for Cloud solo puede proteger recursos que se ejecutan en Azure.", explain: "También cubre recursos locales, híbridos y multinube, como AWS y GCP." },
                { s: "El acceso a máquinas virtuales justo a tiempo ayuda a reducir la exposición a ataques de fuerza bruta.", explain: "Figura entre las protecciones de red y la protección avanzada contra amenazas." }
              ]
            }
          }
        ]
      }
    }
  ]
});
