// SC-900 > Introduction to security, compliance, and identity concepts: learning path review (both modules)
Catalog.pathQuiz("sc-900", "security-compliance-identity-concepts", {
  added: "2026-10-26",
  items: [
    {
      type: "single",
      topic: "Security and compliance concepts",
      q: "Your company deploys an application on a PaaS service. Which of the following does the cloud provider secure?",
      options: ["The operating system and runtime environment", "Your application code", "Access controls for your application", "Your data"],
      answer: 0,
      explain: "In PaaS the provider also takes on the OS and runtime. Code, configuration, access controls and data stay with you.",
      es: {
        topic: "Conceptos de seguridad y cumplimiento",
        q: "Su empresa implementa una aplicación en un servicio PaaS. ¿Cuál de los siguientes elementos protege el proveedor de nube?",
        options: ["El sistema operativo y el entorno de ejecución", "El código de su aplicación", "Los controles de acceso de su aplicación", "Sus datos"],
        explain: "En PaaS el proveedor también asume el sistema operativo y el entorno de ejecución. El código, la configuración, los controles de acceso y los datos siguen siendo suyos."
      }
    },
    {
      type: "single",
      topic: "Identity concepts",
      q: "A Zero Trust policy requires users to approve a phone notification in addition to entering their password. Which identity process does this strengthen?",
      options: ["Authentication", "Authorization", "Auditing", "Administration"],
      answer: 0,
      explain: "Adding a second factor from a different category is MFA, which strengthens authentication: proving who the user is.",
      es: {
        topic: "Conceptos de identidad",
        q: "Una directiva de Confianza cero exige que los usuarios aprueben una notificación en el teléfono además de escribir su contraseña. ¿Qué proceso de identidad refuerza?",
        options: ["La autenticación", "La autorización", "La auditoría", "La administración"],
        explain: "Sumar un segundo factor de otra categoría es MFA, que refuerza la autenticación: demostrar quién es el usuario."
      }
    },
    {
      type: "match",
      topic: "Security and compliance concepts",
      q: "Match each description to the concept it defines.",
      values: ["Data residency", "Data sovereignty", "Hashing", "Salting"],
      targets: [
        { t: "Governs the physical locations where data can be stored", answer: 0 },
        { t: "Data is subject to the laws of the country or region where it's collected, held or processed", answer: 1 },
        { t: "A one-way conversion of input into a fixed-length value", answer: 2 },
        { t: "A unique random value added to each password before hashing", answer: 3 }
      ],
      explain: "Residency is about where data lives; sovereignty about which laws apply. Hashing is one-way; salting defeats precomputed hash lookups.",
      es: {
        topic: "Conceptos de seguridad y cumplimiento",
        q: "Relacione cada descripción con el concepto que define.",
        values: ["Residencia de datos", "Soberanía de datos", "Hash", "Agregado de sal"],
        targets: [
          { t: "Regula las ubicaciones físicas donde se pueden almacenar los datos" },
          { t: "Los datos están sujetos a las leyes del país o región donde se recopilan, guardan o procesan" },
          { t: "Una conversión unidireccional de una entrada en un valor de longitud fija" },
          { t: "Un valor aleatorio único que se agrega a cada contraseña antes del hash" }
        ],
        explain: "La residencia trata sobre dónde están los datos; la soberanía, sobre qué leyes se aplican. El hash es unidireccional; la sal inutiliza las búsquedas de hashes precalculados."
      }
    },
    {
      type: "single",
      topic: "Identity concepts",
      q: "Users from a partner organization access your project portal by signing in with their own organization's credentials. Which concept makes this possible?",
      options: ["Hybrid identity", "Federation", "Single sign-on within one identity provider", "Multifactor authentication"],
      answer: 1,
      explain: "Federation establishes trust between separate identity providers so users from one organization can access another's resources. Hybrid identity connects your own AD DS and Entra ID.",
      es: {
        topic: "Conceptos de identidad",
        q: "Los usuarios de una organización asociada acceden a su portal de proyectos iniciando sesión con las credenciales de su propia organización. ¿Qué concepto lo hace posible?",
        options: ["Identidad híbrida", "Federación", "Inicio de sesión único dentro de un solo proveedor de identidades", "Autenticación multifactor"],
        explain: "La federación establece confianza entre proveedores de identidades distintos para que los usuarios de una organización accedan a recursos de otra. La identidad híbrida conecta su propio AD DS con Entra ID."
      }
    },
    {
      type: "multi",
      topic: "Security and compliance concepts",
      q: "Which two are guiding principles of the Zero Trust model?",
      options: ["Verify explicitly", "Assume breach", "Trust the internal network", "Defense in depth", "Castle-and-moat"],
      answers: [0, 1],
      explain: "The three principles are verify explicitly, use least privileged access and assume breach. Defense in depth is a separate layered strategy, and castle-and-moat is the model Zero Trust replaces.",
      es: {
        topic: "Conceptos de seguridad y cumplimiento",
        q: "¿Cuáles son dos principios rectores del modelo de Confianza cero?",
        options: ["Verificar explícitamente", "Asumir que hay una vulneración", "Confiar en la red interna", "Defensa en profundidad", "Castillo y foso"],
        explain: "Los tres principios son verificar explícitamente, usar el acceso con privilegios mínimos y asumir que hay una vulneración. La defensa en profundidad es otra estrategia por capas, y el castillo y foso es el modelo que Confianza cero reemplaza."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Security and compliance concepts", s: "Defense in depth relies on a single strong perimeter to keep attackers out.", answer: false, explain: "Defense in depth combines multiple overlapping layers instead of relying on one perimeter." },
        { topic: "Identity concepts", s: "Workload identities represent applications, services and automated processes.", answer: true, explain: "Workload identities are software that accesses resources without a human user actively involved." },
        { topic: "Security and compliance concepts", s: "Encrypting data at rest keeps it unreadable even if the storage media is stolen, as long as the keys aren't.", answer: true, explain: "Without the decryption keys, stolen encrypted data can't be read." }
      ],
      es: {
        statements: [
          { topic: "Conceptos de seguridad y cumplimiento", s: "La defensa en profundidad depende de un único perímetro fuerte para mantener fuera a los atacantes.", explain: "La defensa en profundidad combina varias capas superpuestas en lugar de depender de un solo perímetro." },
          { topic: "Conceptos de identidad", s: "Las identidades de carga de trabajo representan aplicaciones, servicios y procesos automatizados.", explain: "Las identidades de carga de trabajo son software que accede a recursos sin intervención activa de un usuario." },
          { topic: "Conceptos de seguridad y cumplimiento", s: "Cifrar los datos en reposo los mantiene ilegibles aunque se roben los medios de almacenamiento, siempre que no se roben las claves.", explain: "Sin las claves de descifrado, los datos cifrados robados no se pueden leer." }
        ]
      }
    },
    {
      type: "dropdown",
      topic: "Identity concepts",
      q: "Complete the statements about single sign-on and federation.",
      parts: [
        "When a user signs in once to ",
        { options: ["a domain controller", "an identity provider", "a firewall"], answer: 1 },
        " and then accesses many applications that trust it, that's ",
        { options: ["single sign-on", "federation", "hybrid identity"], answer: 0 },
        ". When two different identity providers trust each other to authenticate users across boundaries, that's ",
        { options: ["hybrid identity", "single sign-on", "federation"], answer: 2 },
        "."
      ],
      explain: "SSO happens within one identity provider. Federation extends trust between separate identity providers.",
      es: {
        topic: "Conceptos de identidad",
        q: "Complete las afirmaciones sobre el inicio de sesión único y la federación.",
        parts: [
          "Cuando un usuario inicia sesión una vez en ",
          { options: ["un controlador de dominio", "un proveedor de identidades", "un firewall"] },
          " y luego accede a muchas aplicaciones que confían en él, eso es ",
          { options: ["inicio de sesión único", "federación", "identidad híbrida"] },
          ". Cuando dos proveedores de identidades distintos confían entre sí para autenticar usuarios más allá de sus límites, eso es ",
          { options: ["identidad híbrida", "inicio de sesión único", "federación"] },
          "."
        ],
        explain: "El inicio de sesión único ocurre dentro de un solo proveedor de identidades. La federación extiende la confianza entre proveedores de identidades distintos."
      }
    },
    {
      type: "single",
      topic: "Security and compliance concepts",
      q: "Which defense-in-depth layer includes conditional access policies that evaluate signals such as sign-in location, device compliance and risk level?",
      options: ["Perimeter security", "Identity and access", "Network security", "Application security"],
      answer: 1,
      explain: "The identity and access layer authenticates and authorizes users with MFA, RBAC and conditional access.",
      es: {
        topic: "Conceptos de seguridad y cumplimiento",
        q: "¿Qué capa de la defensa en profundidad incluye directivas de acceso condicional que evalúan señales como la ubicación de inicio de sesión, el cumplimiento del dispositivo y el nivel de riesgo?",
        options: ["Seguridad perimetral", "Identidad y acceso", "Seguridad de red", "Seguridad de aplicaciones"],
        explain: "La capa de identidad y acceso autentica y autoriza a los usuarios con MFA, RBAC y acceso condicional."
      }
    },
    {
      type: "single",
      topic: "Identity concepts",
      q: "Most of a company's employees work remotely, use SaaS applications and access resources from iPhones. Why isn't Active Directory Domain Services alone enough?",
      options: [
        "AD DS can't store information about users and groups",
        "AD DS doesn't natively support SaaS apps, mobile devices or modern protocols, and remote users need a VPN",
        "AD DS only works in the cloud",
        "AD DS doesn't support Group Policy"
      ],
      answer: 1,
      explain: "These are AD DS's listed limitations for a modern environment, which Microsoft Entra ID was built to address.",
      es: {
        topic: "Conceptos de identidad",
        q: "La mayoría de los empleados de una empresa trabaja de forma remota, usa aplicaciones SaaS y accede a recursos desde iPhones. ¿Por qué Active Directory Domain Services por sí solo no alcanza?",
        options: [
          "AD DS no puede almacenar información sobre usuarios y grupos",
          "AD DS no admite de forma nativa aplicaciones SaaS, dispositivos móviles ni protocolos modernos, y los usuarios remotos necesitan VPN",
          "AD DS solo funciona en la nube",
          "AD DS no admite la directiva de grupo"
        ],
        explain: "Son las limitaciones listadas de AD DS en un entorno moderno, que Microsoft Entra ID vino a resolver."
      }
    },
    {
      type: "single",
      topic: "Security and compliance concepts",
      q: "A company decides to stop collecting a category of customer data that it doesn't need and that creates regulatory risk. Which risk response is this?",
      options: ["Accept", "Mitigate", "Transfer", "Avoid"],
      answer: 3,
      explain: "Changing the process that creates the risk, here by no longer collecting the data, is avoiding the risk.",
      es: {
        topic: "Conceptos de seguridad y cumplimiento",
        q: "Una empresa decide dejar de recopilar una categoría de datos de clientes que no necesita y que le genera riesgo regulatorio. ¿Qué respuesta al riesgo es esta?",
        options: ["Aceptar", "Mitigar", "Transferir", "Evitar"],
        explain: "Cambiar el proceso que genera el riesgo, en este caso dejando de recopilar los datos, es evitar el riesgo."
      }
    },
    {
      type: "match",
      topic: "Identity concepts",
      q: "Match each activity to the pillar of identity infrastructure it belongs to.",
      values: ["Administration", "Authentication", "Authorization", "Auditing"],
      targets: [
        { t: "Provisioning an account when an employee joins", answer: 0 },
        { t: "Challenging a user for credentials at sign-in", answer: 1 },
        { t: "Evaluating permissions before granting access to a resource", answer: 2 },
        { t: "Investigating sign-in logs after an incident", answer: 3 }
      ],
      explain: "Administration manages the lifecycle, authentication verifies identity, authorization decides access, and auditing records and investigates activity.",
      es: {
        topic: "Conceptos de identidad",
        q: "Relacione cada actividad con el pilar de la infraestructura de identidad al que pertenece.",
        values: ["Administración", "Autenticación", "Autorización", "Auditoría"],
        targets: [
          { t: "Aprovisionar una cuenta cuando ingresa un empleado" },
          { t: "Solicitar credenciales a un usuario al iniciar sesión" },
          { t: "Evaluar permisos antes de conceder acceso a un recurso" },
          { t: "Investigar los registros de inicio de sesión después de un incidente" }
        ],
        explain: "La administración gestiona el ciclo de vida, la autenticación verifica la identidad, la autorización decide el acceso y la auditoría registra e investiga la actividad."
      }
    },
    {
      type: "single",
      topic: "Security and compliance concepts",
      q: "You want to sign a document so that anyone can verify it came from you and wasn't modified. Which key do you sign it with?",
      options: ["Your public key", "Your private key", "The recipient's public key", "A shared symmetric key"],
      answer: 1,
      explain: "Data signed with your private key can be verified by anyone with your public key, proving authenticity and integrity.",
      es: {
        topic: "Conceptos de seguridad y cumplimiento",
        q: "Quiere firmar un documento para que cualquiera pueda verificar que lo envió usted y que no se modificó. ¿Con qué clave lo firma?",
        options: ["Su clave pública", "Su clave privada", "La clave pública del destinatario", "Una clave simétrica compartida"],
        explain: "Lo que se firma con su clave privada lo puede verificar cualquiera que tenga su clave pública, lo que demuestra autenticidad e integridad."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Identity concepts", s: "OAuth 2.0 is primarily used for authorization.", answer: true, explain: "OAuth 2.0 lets apps obtain access tokens for protected resources." },
        { topic: "Security and compliance concepts", s: "Compliance and security mean the same thing.", answer: false, explain: "Compliance is the required minimum; security is broader." },
        { topic: "Identity concepts", s: "Microsoft Entra ID is a cloud-based identity and access management service.", answer: true, explain: "It's the cloud evolution of directory services, delivered as IDaaS." }
      ],
      es: {
        statements: [
          { topic: "Conceptos de identidad", s: "OAuth 2.0 se usa principalmente para la autorización.", explain: "OAuth 2.0 permite que las aplicaciones obtengan tokens de acceso para recursos protegidos." },
          { topic: "Conceptos de seguridad y cumplimiento", s: "Cumplimiento y seguridad significan lo mismo.", explain: "El cumplimiento es el mínimo exigido; la seguridad es más amplia." },
          { topic: "Conceptos de identidad", s: "Microsoft Entra ID es un servicio de administración de identidades y acceso basado en la nube.", explain: "Es la evolución en la nube de los servicios de directorio, ofrecida como IDaaS." }
        ]
      }
    },
    {
      type: "single",
      topic: "Security and compliance concepts",
      q: "Your company builds an app on a PaaS AI platform. Who decides which external connectors and data sources the app is allowed to use?",
      options: ["The AI platform provider", "Your company", "The model's developers", "Nobody; connectors are enabled automatically"],
      answer: 1,
      explain: "Safe configuration, including which connectors or data sources are enabled, is the customer's responsibility in the AI shared responsibility model.",
      es: {
        topic: "Conceptos de seguridad y cumplimiento",
        q: "Su empresa desarrolla una aplicación sobre una plataforma de IA PaaS. ¿Quién decide qué conectores externos y orígenes de datos puede usar la aplicación?",
        options: ["El proveedor de la plataforma de IA", "Su empresa", "Los desarrolladores del modelo", "Nadie; los conectores se habilitan automáticamente"],
        explain: "La configuración segura, incluidos los conectores u orígenes de datos habilitados, es responsabilidad del cliente en el modelo de responsabilidad compartida de la IA."
      }
    },
    {
      type: "single",
      topic: "Identity concepts",
      q: "An application needs to call an API to read a user's calendar on their behalf. Which security token does it need?",
      options: ["An ID token", "An access token", "A SAML assertion about the user's device", "A salt"],
      answer: 1,
      explain: "Access tokens grant an application permission to access a specific resource on the user's behalf. ID tokens only prove who the user is.",
      es: {
        topic: "Conceptos de identidad",
        q: "Una aplicación necesita llamar a una API para leer el calendario de un usuario en su nombre. ¿Qué token de seguridad necesita?",
        options: ["Un token de identificador", "Un token de acceso", "Una aserción SAML sobre el dispositivo del usuario", "Una sal"],
        explain: "Los tokens de acceso conceden a una aplicación permiso para acceder a un recurso específico en nombre del usuario. Los tokens de identificador solo demuestran quién es el usuario."
      }
    },
    {
      type: "multi",
      topic: "Security and compliance concepts",
      q: "Which two responsibilities does the customer always retain in the cloud?",
      options: ["Data", "Identities and access", "Host machines", "The physical network", "Datacenter power and cooling"],
      answers: [0, 1],
      explain: "Data, identities and access, endpoints and configuration choices always stay with the customer. The physical layers belong to the provider.",
      es: {
        topic: "Conceptos de seguridad y cumplimiento",
        q: "¿Cuáles son dos responsabilidades que el cliente siempre conserva en la nube?",
        options: ["Los datos", "Las identidades y el acceso", "Los equipos host", "La red física", "La energía y la refrigeración del centro de datos"],
        explain: "Los datos, las identidades y el acceso, los dispositivos y las decisiones de configuración siempre son del cliente. Las capas físicas son del proveedor."
      }
    }
  ]
});
