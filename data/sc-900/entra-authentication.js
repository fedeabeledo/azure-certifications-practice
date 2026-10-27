// SC-900 > Introduction to Microsoft Entra > Describe the authentication capabilities of Microsoft Entra ID
Catalog.module("sc-900", {
  id: "entra-authentication",
  name: "Describe the authentication capabilities of Microsoft Entra ID",
  es: { name: "Descripción de las funcionalidades de autenticación de Microsoft Entra ID" },
  url: "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Authentication methods",
        q: "A company wants the most secure sign-in experience for administrators, resistant to AI-driven look-alike phishing sites. Which method should it require?",
        options: ["SMS sign-in", "Email one-time passcode", "FIDO2 security keys", "Voice call verification"],
        answer: 2,
        explain: "FIDO2 security keys are phishing resistant because the credential is bound to the origin where it was registered. SMS, email OTP and voice calls are vulnerable to remote phishing.",
        es: {
          topic: "Métodos de autenticación",
          q: "Una empresa quiere la experiencia de inicio de sesión más segura para los administradores, resistente a sitios falsos de phishing generados con IA. ¿Qué método debe exigir?",
          options: ["Inicio de sesión por SMS", "Código de un solo uso por correo", "Llaves de seguridad FIDO2", "Verificación por llamada de voz"],
          explain: "Las llaves de seguridad FIDO2 resisten el phishing porque la credencial está ligada al origen donde se registró. El SMS, el código por correo y las llamadas de voz son vulnerables al phishing remoto."
        }
      },
      {
        type: "single",
        topic: "Multifactor authentication",
        q: "A small company on Microsoft Entra ID Free wants to require MFA for administrators and block legacy authentication at no extra cost. What should it use?",
        options: ["Conditional Access policies", "Security defaults", "Privileged Identity Management", "Custom banned password lists"],
        answer: 1,
        explain: "Security defaults enforce MFA registration, MFA for admins and block legacy authentication at no extra cost. Conditional Access requires P1 or P2.",
        es: {
          topic: "Autenticación multifactor",
          q: "Una empresa pequeña con Microsoft Entra ID Free quiere exigir MFA a los administradores y bloquear la autenticación heredada sin costo adicional. ¿Qué debe usar?",
          options: ["Directivas de acceso condicional", "Valores predeterminados de seguridad", "Privileged Identity Management", "Listas personalizadas de contraseñas prohibidas"],
          explain: "Los valores predeterminados de seguridad exigen el registro en MFA, MFA para administradores y bloquean la autenticación heredada sin costo adicional. El acceso condicional requiere P1 o P2."
        }
      },
      {
        type: "single",
        topic: "Self-service password reset",
        q: "A user lost their phone and has no other registered authentication method. Which Microsoft Entra capability helps them regain access without help desk judgment?",
        options: ["Self-service password reset", "Account recovery with identity verification", "A custom banned password list", "Security defaults"],
        answer: 1,
        explain: "SSPR needs at least one registered method. Account recovery re-establishes trust through a certified identity verification provider, such as Verified ID with Face Check.",
        es: {
          topic: "Autoservicio de restablecimiento de contraseña",
          q: "Un usuario perdió su teléfono y no tiene otro método de autenticación registrado. ¿Qué capacidad de Microsoft Entra le permite recuperar el acceso sin depender del criterio del soporte técnico?",
          options: ["El autoservicio de restablecimiento de contraseña", "La recuperación de cuentas con verificación de identidad", "Una lista personalizada de contraseñas prohibidas", "Los valores predeterminados de seguridad"],
          explain: "SSPR necesita al menos un método registrado. La recuperación de cuentas restablece la confianza mediante un proveedor certificado de verificación de identidad, como Verified ID con Face Check."
        }
      },
      {
        type: "match",
        topic: "Authentication methods",
        q: "Match each method to how it can be used in Microsoft Entra ID.",
        values: ["Primary only", "Secondary only", "Primary or secondary"],
        targets: [
          { t: "Password", answer: 0 },
          { t: "Voice call", answer: 1 },
          { t: "Windows Hello for Business", answer: 2 },
          { t: "Hardware OATH token", answer: 1 }
        ],
        explain: "Passwords are primary only. Voice calls and OATH tokens are secondary only (MFA and SSPR). Windows Hello for Business is primary and can satisfy MFA.",
        es: {
          topic: "Métodos de autenticación",
          q: "Relacione cada método con cómo se puede usar en Microsoft Entra ID.",
          values: ["Solo principal", "Solo secundario", "Principal o secundario"],
          targets: [
            { t: "Contraseña" },
            { t: "Llamada de voz" },
            { t: "Windows Hello para empresas" },
            { t: "Token OATH de hardware" }
          ],
          explain: "Las contraseñas son solo principales. Las llamadas de voz y los tokens OATH son solo secundarios (MFA y SSPR). Windows Hello para empresas es principal y puede satisfacer MFA."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Password protection", s: "The global banned password list can be disabled for a tenant.", answer: false, explain: "It's applied automatically and can't be disabled." },
          { topic: "Self-service password reset", s: "With password writeback, a user's password reset in the cloud can be written back to on-premises Active Directory.", answer: true, explain: "Password writeback works for federated, pass-through and password hash sync users." },
          { topic: "Multifactor authentication", s: "Applications must be modified to support Microsoft Entra multifactor authentication.", answer: false, explain: "Entra ID requests and processes MFA automatically during sign-in." }
        ],
        es: {
          statements: [
            { topic: "Protección de contraseñas", s: "La lista global de contraseñas prohibidas se puede deshabilitar para un inquilino.", explain: "Se aplica automáticamente y no se puede deshabilitar." },
            { topic: "Autoservicio de restablecimiento de contraseña", s: "Con la escritura diferida de contraseñas, un restablecimiento hecho en la nube se puede escribir en Active Directory local.", explain: "La escritura diferida funciona con usuarios federados, de autenticación de paso a través y de sincronización de hash de contraseñas." },
            { topic: "Autenticación multifactor", s: "Hay que modificar las aplicaciones para que admitan la autenticación multifactor de Microsoft Entra.", explain: "Entra ID solicita y procesa MFA automáticamente durante el inicio de sesión." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Password protection",
        q: "Complete the statement about on-premises password protection.",
        parts: [
          "To extend Microsoft Entra password protection to AD DS, you install the ",
          { options: ["DC Agent", "Cloud Sync agent", "Authenticator app"], answer: 0 },
          " on domain controllers, which communicate with Microsoft Entra ID only through the ",
          { options: ["proxy service", "VPN gateway", "Global Secure Access client"], answer: 0 },
          "."
        ],
        explain: "The DC Agent validates passwords on domain controllers and the proxy service forwards policy downloads, so DCs never need direct internet access.",
        es: {
          topic: "Protección de contraseñas",
          q: "Complete la afirmación sobre la protección de contraseñas local.",
          parts: [
            "Para extender la protección de contraseñas de Microsoft Entra a AD DS, se instala el ",
            { options: ["agente DC", "agente de Cloud Sync", "Authenticator"] },
            " en los controladores de dominio, que se comunican con Microsoft Entra ID solo a través del ",
            { options: ["servicio de proxy", "puerta de enlace VPN", "cliente de Global Secure Access"] },
            "."
          ],
          explain: "El agente DC valida las contraseñas en los controladores de dominio y el servicio de proxy reenvía las descargas de directivas, así que los controladores nunca necesitan acceso directo a internet."
        }
      },
      {
        type: "single",
        topic: "Authentication methods",
        q: "A new employee has no credentials yet and needs to sign in once to register a passkey. What should an administrator issue?",
        options: ["A Temporary Access Pass", "An email one-time passcode", "A security question", "A custom banned password"],
        answer: 0,
        explain: "TAP is a time-limited passcode used to sign in and register other methods, including passwordless ones.",
        es: {
          topic: "Métodos de autenticación",
          q: "Un empleado nuevo todavía no tiene credenciales y necesita iniciar sesión una vez para registrar una clave de acceso. ¿Qué debe emitir un administrador?",
          options: ["Un pase de acceso temporal", "Un código de un solo uso por correo", "Una pregunta de seguridad", "Una contraseña prohibida personalizada"],
          explain: "El pase de acceso temporal (TAP) es un código con límite de tiempo que sirve para iniciar sesión y registrar otros métodos, incluidos los sin contraseña."
        }
      },
      {
        type: "multi",
        topic: "Multifactor authentication",
        q: "Which two settings are included in Microsoft Entra security defaults?",
        options: [
          "Requiring administrators to do multifactor authentication",
          "Blocking legacy authentication protocols",
          "Requiring MFA only for users outside the corporate network",
          "Requiring a Microsoft Entra ID P2 license",
          "Disabling self-service password reset"
        ],
        answers: [0, 1],
        explain: "Security defaults require MFA registration, MFA for admins and for users when needed, block legacy authentication and protect privileged activities. Location-based rules need Conditional Access.",
        es: {
          topic: "Autenticación multifactor",
          q: "¿Cuáles son dos configuraciones incluidas en los valores predeterminados de seguridad de Microsoft Entra?",
          options: [
            "Exigir autenticación multifactor a los administradores",
            "Bloquear los protocolos de autenticación heredada",
            "Exigir MFA solo a los usuarios fuera de la red corporativa",
            "Exigir una licencia de Microsoft Entra ID P2",
            "Deshabilitar el autoservicio de restablecimiento de contraseña"
          ],
          explain: "Los valores predeterminados de seguridad exigen el registro en MFA, MFA para administradores y para usuarios cuando haga falta, bloquean la autenticación heredada y protegen las actividades con privilegios. Las reglas por ubicación requieren acceso condicional."
        }
      },
      {
        type: "single",
        topic: "Password protection",
        q: "An attacker tries the password Summer2026! against thousands of accounts, a few attempts each, to avoid lockouts. Which Microsoft Entra capability is designed to block the passwords used in this attack?",
        options: ["Password protection with the global banned password list", "Temporary Access Pass", "Password writeback", "QR code authentication"],
        answer: 0,
        explain: "This is password spray. The global banned password list is built from telemetry on real password spray attacks.",
        es: {
          topic: "Protección de contraseñas",
          q: "Un atacante prueba la contraseña Verano2026! contra miles de cuentas, pocos intentos por cada una, para evitar bloqueos. ¿Qué capacidad de Microsoft Entra está pensada para bloquear las contraseñas de este ataque?",
          options: ["La protección de contraseñas con la lista global de contraseñas prohibidas", "El pase de acceso temporal", "La escritura diferida de contraseñas", "La autenticación con código QR"],
          explain: "Esto es una difusión de contraseñas (password spray). La lista global de contraseñas prohibidas se construye con telemetría de ataques reales de este tipo."
        }
      },
      {
        type: "single",
        topic: "Self-service password reset",
        q: "By default, how many authentication methods must an administrator account use to reset its password with SSPR?",
        options: ["None", "One", "Two", "Three, including security questions"],
        answer: 2,
        explain: "Administrators are enabled for SSPR by default under a strong two-gate policy and can't use security questions.",
        es: {
          topic: "Autoservicio de restablecimiento de contraseña",
          q: "De forma predeterminada, ¿cuántos métodos de autenticación debe usar una cuenta de administrador para restablecer su contraseña con SSPR?",
          options: ["Ninguno", "Uno", "Dos", "Tres, incluidas preguntas de seguridad"],
          explain: "Los administradores tienen SSPR habilitado de forma predeterminada con una directiva estricta de dos puertas y no pueden usar preguntas de seguridad."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Authentication methods", s: "Synced passkeys store the private key in a cloud passkey provider such as iCloud Keychain.", answer: true, explain: "Device-bound passkeys never leave a single device; synced ones sync across the user's devices." },
          { topic: "Authentication methods", s: "Certificate-based authentication requires AD FS.", answer: false, explain: "Entra CBA authenticates X.509 certificates directly and removes the need for federated infrastructure." },
          { topic: "Multifactor authentication", s: "Number matching in Microsoft Authenticator helps prevent MFA fatigue attacks.", answer: true, explain: "The user must enter the number shown on the sign-in screen, so blind approvals don't work." }
        ],
        es: {
          statements: [
            { topic: "Métodos de autenticación", s: "Las claves de acceso sincronizadas guardan la clave privada en un proveedor en la nube como Llavero de iCloud.", explain: "Las claves ligadas al dispositivo nunca salen de un único dispositivo; las sincronizadas se replican entre los dispositivos del usuario." },
            { topic: "Métodos de autenticación", s: "La autenticación basada en certificados requiere AD FS.", explain: "La CBA de Entra autentica certificados X.509 directamente y elimina la necesidad de infraestructura federada." },
            { topic: "Autenticación multifactor", s: "La coincidencia de números en Microsoft Authenticator ayuda a prevenir ataques de fatiga de MFA.", explain: "El usuario debe ingresar el número que aparece en la pantalla de inicio de sesión, así que aprobar a ciegas no sirve." }
          ]
        }
      },
      {
        type: "single",
        topic: "Authentication methods",
        q: "Frontline workers share tablets and struggle to type complex usernames and passwords. Which method fits best?",
        options: ["QR code authentication with a PIN", "Voice call verification", "Hardware OATH tokens as the only factor", "Email one-time passcode"],
        answer: 0,
        explain: "QR code authentication is designed for frontline workers on shared devices: scan a QR code (for example on a badge) and enter a PIN.",
        es: {
          topic: "Métodos de autenticación",
          q: "Unos trabajadores de primera línea comparten tabletas y les cuesta escribir nombres de usuario y contraseñas complejos. ¿Qué método es el más adecuado?",
          options: ["Autenticación con código QR y PIN", "Verificación por llamada de voz", "Tokens OATH de hardware como único factor", "Código de un solo uso por correo"],
          explain: "La autenticación con código QR está pensada para trabajadores de primera línea en dispositivos compartidos: escanean un código QR (por ejemplo, en una credencial) e ingresan un PIN."
        }
      }
    ]
  },
  units: [
    {
      id: "authentication-methods",
      name: "Describe authentication methods",
      es: { name: "Descripción de los métodos de autenticación" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/2-describe-authentication-methods",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Which authentication method is phishing resistant because the private key never leaves a single physical device?",
            options: ["Device-bound passkey", "SMS sign-in", "Software OATH token", "Email one-time passcode"],
            answer: 0,
            explain: "Device-bound passkeys keep the private key on one device, such as a FIDO2 security key or Authenticator, and are bound to the registered site.",
            es: {
              q: "¿Qué método de autenticación resiste el phishing porque la clave privada nunca sale de un único dispositivo físico?",
              options: ["Clave de acceso ligada al dispositivo", "Inicio de sesión por SMS", "Token OATH de software", "Código de un solo uso por correo"],
              explain: "Las claves de acceso ligadas al dispositivo mantienen la clave privada en un solo dispositivo, como una llave FIDO2 o Authenticator, y están ligadas al sitio registrado."
            }
          },
          {
            type: "match",
            q: "Match each scenario to the authentication method.",
            values: ["Temporary Access Pass", "External authentication method", "Certificate-based authentication", "Authenticator Lite"],
            targets: [
              { t: "Users satisfy MFA with the organization's existing Duo Security deployment", answer: 1 },
              { t: "Users authenticate with X.509 certificates without AD FS", answer: 2 },
              { t: "Users complete MFA from inside Outlook mobile", answer: 3 },
              { t: "A user who lost credentials gets a time-limited code to register new methods", answer: 0 }
            ],
            explain: "External methods integrate non-Microsoft MFA providers; CBA uses X.509 certificates; Authenticator Lite is embedded in apps like Outlook; TAP is a time-limited onboarding or recovery code.",
            es: {
              q: "Relacione cada escenario con el método de autenticación.",
              values: ["Pase de acceso temporal", "Método de autenticación externo", "Autenticación basada en certificados", "Authenticator Lite"],
              targets: [
                { t: "Los usuarios satisfacen MFA con la implementación de Duo Security que ya tiene la organización" },
                { t: "Los usuarios se autentican con certificados X.509 sin AD FS" },
                { t: "Los usuarios completan MFA desde Outlook para dispositivos móviles" },
                { t: "Un usuario que perdió sus credenciales recibe un código con límite de tiempo para registrar métodos nuevos" }
              ],
              explain: "Los métodos externos integran proveedores de MFA ajenos a Microsoft; la CBA usa certificados X.509; Authenticator Lite está integrado en aplicaciones como Outlook; el TAP es un código temporal de incorporación o recuperación."
            }
          },
          {
            type: "single",
            q: "Which method can't be used as a primary form of authentication in Microsoft Entra ID?",
            options: ["SMS sign-in", "Voice call", "Windows Hello for Business", "Temporary Access Pass"],
            answer: 1,
            explain: "Voice calls are supported only as a secondary factor for MFA and SSPR. SMS, Windows Hello and TAP can be primary.",
            es: {
              q: "¿Qué método no se puede usar como forma principal de autenticación en Microsoft Entra ID?",
              options: ["Inicio de sesión por SMS", "Llamada de voz", "Windows Hello para empresas", "Pase de acceso temporal"],
              explain: "Las llamadas de voz solo se admiten como factor secundario para MFA y SSPR. SMS, Windows Hello y TAP pueden ser principales."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Windows Hello for Business.",
            parts: [
              "Windows Hello for Business combines a key or certificate tied to a ",
              { options: ["device", "password", "phone number"], answer: 0 },
              " with a PIN or ",
              { options: ["biometrics", "security questions", "an SMS code"], answer: 0 },
              ", so an attacker needs both to gain access."
            ],
            explain: "The device-bound key plus something the person knows or is makes credential theft harder.",
            es: {
              q: "Complete la afirmación sobre Windows Hello para empresas.",
              parts: [
                "Windows Hello para empresas combina una clave o certificado ligado a un ",
                { options: ["dispositivo", "contraseña", "número de teléfono"] },
                " con un PIN o ",
                { options: ["datos biométricos", "preguntas de seguridad", "un código SMS"] },
                ", así que un atacante necesita ambos para obtener acceso."
              ],
              explain: "La clave ligada al dispositivo más algo que la persona sabe o es dificulta el robo de credenciales."
            }
          },
          {
            type: "multi",
            q: "Which two methods does Microsoft list as phishing resistant?",
            options: ["Platform Credential for macOS", "Certificate-based authentication", "SMS sign-in", "Voice call", "Email one-time passcode"],
            answers: [0, 1],
            explain: "Phishing-resistant methods include Windows Hello for Business, Platform Credential for macOS, passkeys, FIDO2 keys and CBA. SMS, voice and email OTP aren't.",
            es: {
              q: "¿Cuáles son dos métodos que Microsoft considera resistentes al phishing?",
              options: ["Credencial de plataforma para macOS", "Autenticación basada en certificados", "Inicio de sesión por SMS", "Llamada de voz", "Código de un solo uso por correo"],
              explain: "Los métodos resistentes al phishing incluyen Windows Hello para empresas, la credencial de plataforma para macOS, las claves de acceso, las llaves FIDO2 y la CBA. SMS, voz y código por correo no lo son."
            }
          },
          {
            type: "single",
            q: "What is OATH TOTP?",
            options: [
              "An open standard for generating time-based one-time password codes",
              "A Microsoft protocol for federation with AD FS",
              "A biometric standard used by Windows Hello",
              "A list of banned passwords"
            ],
            answer: 0,
            explain: "OATH specifies how time-based one-time password codes are generated, in software apps or hardware tokens.",
            es: {
              q: "¿Qué es OATH TOTP?",
              options: [
                "Un estándar abierto para generar códigos de contraseña de un solo uso basados en el tiempo",
                "Un protocolo de Microsoft para federarse con AD FS",
                "Un estándar biométrico que usa Windows Hello",
                "Una lista de contraseñas prohibidas"
              ],
              explain: "OATH especifica cómo se generan los códigos de contraseña de un solo uso basados en el tiempo, en aplicaciones de software o tokens de hardware."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft recommends moving away from SMS and voice calls for MFA in favor of methods like Authenticator or passkeys.", answer: true, explain: "SMS and voice are more vulnerable to phishing." },
              { s: "Email OTP can be used as a primary sign-in method for employees.", answer: false, explain: "Email OTP is a secondary method for SSPR; it can also be configured for guest sign-in." },
              { s: "Microsoft Authenticator passwordless sign-in asks the user to match a number shown on the sign-in screen.", answer: true, explain: "The user matches the number and confirms with biometrics or PIN." }
            ],
            es: {
              statements: [
                { s: "Microsoft recomienda dejar de usar SMS y llamadas de voz para MFA y pasar a métodos como Authenticator o claves de acceso.", explain: "SMS y voz son más vulnerables al phishing." },
                { s: "El código de un solo uso por correo se puede usar como método principal de inicio de sesión para los empleados.", explain: "El código por correo es un método secundario para SSPR; también se puede configurar para el inicio de sesión de invitados." },
                { s: "El inicio de sesión sin contraseña de Microsoft Authenticator le pide al usuario que haga coincidir un número que aparece en la pantalla de inicio de sesión.", explain: "El usuario hace coincidir el número y confirma con datos biométricos o PIN." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "multifactor-authentication",
      name: "Describe multifactor authentication",
      es: { name: "Descripción de la autenticación multifactor" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/3-describe-multi-factor-authentication",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A user signs in with a password and then approves a prompt with their fingerprint on their phone. Which categories of factors were used?",
            options: [
              "Something you know, something you have and something you are",
              "Only something you know",
              "Something you know and something you are, but nothing you have",
              "Only something you have"
            ],
            answer: 0,
            explain: "The password is something you know, the phone is something you have and the fingerprint is something you are.",
            es: {
              q: "Un usuario inicia sesión con una contraseña y luego aprueba una notificación con su huella en el teléfono. ¿Qué categorías de factores usó?",
              options: [
                "Algo que sabe, algo que tiene y algo que es",
                "Solo algo que sabe",
                "Algo que sabe y algo que es, pero nada que tenga",
                "Solo algo que tiene"
              ],
              explain: "La contraseña es algo que sabe, el teléfono es algo que tiene y la huella es algo que es."
            }
          },
          {
            type: "single",
            q: "An organization wants MFA only when users sign in from outside the corporate network or from personal devices. What does it need?",
            options: ["Security defaults", "Conditional Access with a Microsoft Entra ID P1 or P2 license", "Password protection", "SSPR registration"],
            answer: 1,
            explain: "Conditional Access gives granular control based on location, device state, risk or app sensitivity, and requires P1 or P2.",
            es: {
              q: "Una organización quiere exigir MFA solo cuando los usuarios inician sesión desde fuera de la red corporativa o desde dispositivos personales. ¿Qué necesita?",
              options: ["Los valores predeterminados de seguridad", "El acceso condicional con una licencia de Microsoft Entra ID P1 o P2", "La protección de contraseñas", "El registro en SSPR"],
              explain: "El acceso condicional da control granular según la ubicación, el estado del dispositivo, el riesgo o la sensibilidad de la aplicación, y requiere P1 o P2."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about security defaults.",
            parts: [
              "According to Microsoft, more than ",
              { options: ["99.9%", "75%", "50%"], answer: 0 },
              " of common identity-related attacks are stopped by MFA and blocking legacy authentication, and security defaults are ",
              { options: ["enabled by default on new tenants", "available only with P2", "disabled until Conditional Access is configured"], answer: 0 },
              "."
            ],
            explain: "Security defaults give every organization a basic security level at no extra cost and are on by default for new tenants.",
            es: {
              q: "Complete la afirmación sobre los valores predeterminados de seguridad.",
              parts: [
                "Según Microsoft, más del ",
                { options: ["99,9 %", "75 %", "50 %"] },
                " de los ataques comunes relacionados con la identidad se detienen con MFA y el bloqueo de la autenticación heredada, y los valores predeterminados de seguridad están ",
                { options: ["habilitados de forma predeterminada en los inquilinos nuevos", "disponibles solo con P2", "deshabilitados hasta que se configure el acceso condicional"] },
                "."
              ],
              explain: "Los valores predeterminados de seguridad dan a toda organización un nivel básico de seguridad sin costo adicional y vienen activados en los inquilinos nuevos."
            }
          },
          {
            type: "multi",
            q: "Which two can be used as verification methods for Microsoft Entra multifactor authentication?",
            options: ["OATH hardware token", "Temporary Access Pass", "Security questions", "A second password", "Email one-time passcode"],
            answers: [0, 1],
            explain: "MFA methods include Authenticator, Windows Hello, passkeys, CBA, external methods, TAP, OATH tokens, SMS and voice. Security questions and email OTP are for SSPR.",
            es: {
              q: "¿Cuáles son dos métodos de verificación que se pueden usar con la autenticación multifactor de Microsoft Entra?",
              options: ["Token OATH de hardware", "Pase de acceso temporal", "Preguntas de seguridad", "Una segunda contraseña", "Código de un solo uso por correo"],
              explain: "Los métodos de MFA incluyen Authenticator, Windows Hello, claves de acceso, CBA, métodos externos, TAP, tokens OATH, SMS y voz. Las preguntas de seguridad y el código por correo son para SSPR."
            }
          },
          {
            type: "single",
            q: "Attackers bombard a user with MFA push prompts hoping the user approves one out of annoyance. Which measure in security defaults helps prevent this?",
            options: ["Number matching in Microsoft Authenticator", "Blocking SMS", "Custom banned password lists", "Password writeback"],
            answer: 0,
            explain: "Number matching requires the user to type the number shown on the sign-in screen, preventing MFA fatigue approvals.",
            es: {
              q: "Unos atacantes bombardean a un usuario con notificaciones de MFA esperando que apruebe una por cansancio. ¿Qué medida de los valores predeterminados de seguridad ayuda a evitarlo?",
              options: ["La coincidencia de números en Microsoft Authenticator", "El bloqueo de SMS", "Las listas personalizadas de contraseñas prohibidas", "La escritura diferida de contraseñas"],
              explain: "La coincidencia de números exige que el usuario escriba el número que aparece en la pantalla de inicio de sesión, lo que evita aprobaciones por fatiga de MFA."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Security defaults require all users to register for Microsoft Entra multifactor authentication.", answer: true, explain: "Registration is one of the enforced settings." },
              { s: "Users can add or edit their own verification methods in MyAccount.", answer: true, explain: "Administrators can also require specific methods." },
              { s: "Security defaults are recommended mainly for organizations that already have complex Conditional Access policies.", answer: false, explain: "They suit organizations that don't know where to start or use the free tier." }
            ],
            es: {
              statements: [
                { s: "Los valores predeterminados de seguridad exigen que todos los usuarios se registren en la autenticación multifactor de Microsoft Entra.", explain: "El registro es una de las configuraciones que se aplican." },
                { s: "Los usuarios pueden agregar o editar sus propios métodos de verificación en MyAccount.", explain: "Los administradores también pueden exigir métodos específicos." },
                { s: "Los valores predeterminados de seguridad se recomiendan sobre todo a organizaciones que ya tienen directivas complejas de acceso condicional.", explain: "Son adecuados para organizaciones que no saben por dónde empezar o usan el nivel gratuito." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "self-service-password-reset",
      name: "Describe self-service password reset",
      es: { name: "Descripción del autoservicio de restablecimiento de contraseña" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/4-describe-self-service-password-reset",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "multi",
            q: "Which two conditions must a user meet to use self-service password reset?",
            options: [
              "Be assigned a Microsoft Entra ID license",
              "Be enabled for SSPR by an administrator",
              "Have a hardware FIDO2 key",
              "Be a member of a Microsoft 365 group",
              "Be synchronized from on-premises AD"
            ],
            answers: [0, 1],
            explain: "Users need a Microsoft Entra ID license, to be enabled for SSPR and to register the methods they want to use.",
            es: {
              q: "¿Cuáles son dos condiciones que debe cumplir un usuario para usar el autoservicio de restablecimiento de contraseña?",
              options: [
                "Tener asignada una licencia de Microsoft Entra ID",
                "Estar habilitado para SSPR por un administrador",
                "Tener una llave FIDO2 de hardware",
                "Ser miembro de un grupo de Microsoft 365",
                "Estar sincronizado desde AD local"
              ],
              explain: "Los usuarios necesitan una licencia de Microsoft Entra ID, estar habilitados para SSPR y registrar los métodos que quieran usar."
            }
          },
          {
            type: "single",
            q: "Which authentication method for SSPR is being retired in March 2027?",
            options: ["Security questions", "Email OTP", "Software OATH tokens", "Voice call"],
            answer: 0,
            explain: "Security questions will be retired for SSPR in March 2027; organizations should move users to other methods.",
            es: {
              q: "¿Qué método de autenticación para SSPR se retira en marzo de 2027?",
              options: ["Las preguntas de seguridad", "El código de un solo uso por correo", "Los tokens OATH de software", "La llamada de voz"],
              explain: "Las preguntas de seguridad se retirarán de SSPR en marzo de 2027; las organizaciones deben pasar a los usuarios a otros métodos."
            }
          },
          {
            type: "single",
            q: "A hybrid organization wants passwords that users reset in the cloud to apply immediately to their on-premises Active Directory accounts. What should be enabled?",
            options: ["Password writeback", "The custom banned password list", "Security defaults", "Number matching"],
            answer: 0,
            explain: "Password writeback writes password changes from Entra ID back to on-premises AD.",
            es: {
              q: "Una organización híbrida quiere que las contraseñas que los usuarios restablecen en la nube se apliquen de inmediato a sus cuentas de Active Directory local. ¿Qué debe habilitar?",
              options: ["La escritura diferida de contraseñas", "La lista personalizada de contraseñas prohibidas", "Los valores predeterminados de seguridad", "La coincidencia de números"],
              explain: "La escritura diferida de contraseñas escribe los cambios de contraseña de Entra ID en el AD local."
            }
          },
          {
            type: "match",
            q: "Match each aspect to self-service password reset or account recovery.",
            values: ["Self-service password reset", "Account recovery"],
            targets: [
              { t: "The user forgot the password but still has a registered method", answer: 0 },
              { t: "Identity verification through a certified IDV provider", answer: 1 },
              { t: "Recovery scope limited to the password", answer: 0 },
              { t: "Complete reset of authentication methods", answer: 1 }
            ],
            explain: "SSPR relies on preregistered methods to reset the password; account recovery re-establishes identity when all methods are lost.",
            es: {
              q: "Relacione cada aspecto con el autoservicio de restablecimiento de contraseña o con la recuperación de cuentas.",
              values: ["Autoservicio de restablecimiento de contraseña", "Recuperación de cuentas"],
              targets: [
                { t: "El usuario olvidó la contraseña pero conserva un método registrado" },
                { t: "Verificación de identidad mediante un proveedor IDV certificado" },
                { t: "El alcance de la recuperación se limita a la contraseña" },
                { t: "Restablecimiento completo de los métodos de autenticación" }
              ],
              explain: "SSPR se apoya en métodos registrados previamente para restablecer la contraseña; la recuperación de cuentas restablece la identidad cuando se perdieron todos los métodos."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about SSPR configuration.",
            parts: [
              "Administrators set the number of methods required to reset a password to ",
              { options: ["one or two", "three or four", "exactly five"], answer: 0 },
              ", and can require users to reconfirm their information every ",
              { options: ["0 to 730 days", "1 to 7 days", "5 years at most"], answer: 0 },
              "."
            ],
            explain: "One or two methods can be required, and reconfirmation can be set between 0 and 730 days.",
            es: {
              q: "Complete la afirmación sobre la configuración de SSPR.",
              parts: [
                "Los administradores definen que la cantidad de métodos necesarios para restablecer una contraseña sea ",
                { options: ["uno o dos", "tres o cuatro", "exactamente cinco"] },
                ", y pueden exigir que los usuarios reconfirmen su información cada ",
                { options: ["0 a 730 días", "1 a 7 días", "5 años como máximo"] },
                "."
              ],
              explain: "Se pueden exigir uno o dos métodos, y la reconfirmación se puede configurar entre 0 y 730 días."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Administrators can use security questions to reset their password with SSPR.", answer: false, explain: "Admins use a two-gate policy and can't use security questions." },
              { s: "SSPR can notify global administrators when another administrator resets their password.", answer: true, explain: "It gives awareness of privileged account activity." },
              { s: "Users can be allowed to unlock their on-premises account without resetting the password.", answer: true, explain: "Unlock and reset can be separate operations." }
            ],
            es: {
              statements: [
                { s: "Los administradores pueden usar preguntas de seguridad para restablecer su contraseña con SSPR.", explain: "Los administradores usan una directiva de dos puertas y no pueden usar preguntas de seguridad." },
                { s: "SSPR puede notificar a los administradores globales cuando otro administrador restablece su contraseña.", explain: "Da visibilidad sobre la actividad de cuentas con privilegios." },
                { s: "Se puede permitir que los usuarios desbloqueen su cuenta local sin restablecer la contraseña.", explain: "El desbloqueo y el restablecimiento pueden ser operaciones separadas." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "password-protection",
      name: "Describe password protection and management capabilities",
      es: { name: "Descripción de las funcionalidades de administración y protección de contraseñas" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/5-describe-password-protection-management",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Contoso wants to stop users from choosing passwords containing its brand name and headquarters city. What should it configure?",
            options: ["A custom banned password list", "The global banned password list", "Security defaults", "A Temporary Access Pass"],
            answer: 0,
            explain: "Custom banned password lists hold organization-specific terms like brand names, products and locations. The global list isn't configurable.",
            es: {
              q: "Contoso quiere impedir que los usuarios elijan contraseñas que contengan su marca y la ciudad de su sede. ¿Qué debe configurar?",
              options: ["Una lista personalizada de contraseñas prohibidas", "La lista global de contraseñas prohibidas", "Los valores predeterminados de seguridad", "Un pase de acceso temporal"],
              explain: "Las listas personalizadas contienen términos propios de la organización, como marcas, productos y ubicaciones. La lista global no se configura."
            }
          },
          {
            type: "single",
            q: "What is the maximum number of terms in a custom banned password list?",
            options: ["100", "1,000", "10,000", "Unlimited"],
            answer: 1,
            explain: "The list is limited to 1,000 terms; adding key base terms is more effective because variants are blocked automatically.",
            es: {
              q: "¿Cuál es la cantidad máxima de términos de una lista personalizada de contraseñas prohibidas?",
              options: ["100", "1000", "10 000", "Ilimitada"],
              explain: "La lista se limita a 1000 términos; conviene agregar términos base clave porque las variantes se bloquean automáticamente."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about password evaluation.",
            parts: [
              "After normalization, fuzzy matching rejects passwords within an edit distance of ",
              { options: ["one", "three", "five"], answer: 0 },
              " from a banned term, and a password must score at least ",
              { options: ["five", "ten", "eight"], answer: 0 },
              " points to be accepted."
            ],
            explain: "Fuzzy matching uses an edit distance of one, and the score needs at least five points (one per banned term, one per remaining character).",
            es: {
              q: "Complete la afirmación sobre la evaluación de contraseñas.",
              parts: [
                "Después de la normalización, la coincidencia aproximada rechaza las contraseñas a una distancia de edición de ",
                { options: ["uno", "tres", "cinco"] },
                " de un término prohibido, y una contraseña necesita al menos ",
                { options: ["cinco", "diez", "ocho"] },
                " puntos para aceptarse."
              ],
              explain: "La coincidencia aproximada usa una distancia de edición de uno, y la puntuación necesita al menos cinco puntos (uno por término prohibido y uno por cada carácter restante)."
            }
          },
          {
            type: "match",
            q: "Match each step of password evaluation to what it does.",
            values: ["Normalization", "Fuzzy matching", "Substring matching", "Score calculation"],
            targets: [
              { t: "Converts P@$$w0rd to lowercase with common substitutions reversed", answer: 0 },
              { t: "Rejects a password that differs from a banned term by one character", answer: 1 },
              { t: "Checks for the user's first and last name and the tenant name", answer: 2 },
              { t: "Decides whether the password reaches the minimum points", answer: 3 }
            ],
            explain: "The four steps run in order: normalization, fuzzy matching, substring matching and score calculation.",
            es: {
              q: "Relacione cada paso de la evaluación de contraseñas con lo que hace.",
              values: ["Normalización", "Coincidencia aproximada", "Coincidencia de subcadenas", "Cálculo de la puntuación"],
              targets: [
                { t: "Convierte P@$$w0rd a minúsculas revirtiendo las sustituciones comunes" },
                { t: "Rechaza una contraseña que difiere en un carácter de un término prohibido" },
                { t: "Busca el nombre y el apellido del usuario y el nombre del inquilino" },
                { t: "Decide si la contraseña alcanza la puntuación mínima" }
              ],
              explain: "Los cuatro pasos se ejecutan en orden: normalización, coincidencia aproximada, coincidencia de subcadenas y cálculo de la puntuación."
            }
          },
          {
            type: "multi",
            q: "Which two statements about on-premises Microsoft Entra password protection are true?",
            options: [
              "Domain controllers never need to communicate directly with the internet",
              "No AD DS schema changes are required",
              "It replaces existing AD DS password policies",
              "Each domain controller downloads policy directly from Microsoft Entra ID",
              "It uses a separate banned list stored only on-premises"
            ],
            answers: [0, 1],
            explain: "DCs go through the proxy service, no schema changes are needed and it supplements AD DS policies using the same lists stored in Entra ID.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre la protección de contraseñas de Microsoft Entra en el entorno local?",
              options: [
                "Los controladores de dominio nunca necesitan comunicarse directamente con internet",
                "No se requieren cambios en el esquema de AD DS",
                "Reemplaza las directivas de contraseñas de AD DS existentes",
                "Cada controlador de dominio descarga la directiva directamente de Microsoft Entra ID",
                "Usa una lista de prohibidas separada guardada solo en el entorno local"
              ],
              explain: "Los controladores pasan por el servicio de proxy, no hacen falta cambios de esquema y complementa las directivas de AD DS usando las mismas listas guardadas en Entra ID."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The global banned password list is based on external breach lists bought from third parties.", answer: false, explain: "It's based on Microsoft Entra security telemetry and real-world password spray attacks." },
              { s: "A password containing a banned term might still be accepted if it's strong enough overall.", answer: true, explain: "The score counts remaining characters, so longer passwords can pass." },
              { s: "In a password spray attack, the attacker tries many passwords against a single account.", answer: false, explain: "Password spray tries a few common passwords against many accounts to avoid lockouts." }
            ],
            es: {
              statements: [
                { s: "La lista global de contraseñas prohibidas se basa en listas de filtraciones externas compradas a terceros.", explain: "Se basa en la telemetría de seguridad de Microsoft Entra y en ataques reales de difusión de contraseñas." },
                { s: "Una contraseña que contiene un término prohibido puede aceptarse si en conjunto es lo bastante segura.", explain: "La puntuación cuenta los caracteres restantes, así que las contraseñas más largas pueden pasar." },
                { s: "En un ataque de difusión de contraseñas, el atacante prueba muchas contraseñas contra una sola cuenta.", explain: "La difusión prueba unas pocas contraseñas comunes contra muchas cuentas para evitar bloqueos." }
              ]
            }
          }
        ]
      }
    }
  ]
});
