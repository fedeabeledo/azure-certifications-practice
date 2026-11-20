// SC-900 practice exam: 40 questions weighted by the study guide (skills measured as of October 21, 2026)
// Concepts 10-15% (5), Microsoft Entra 25-30% (11), security solutions 35-40% (15), compliance solutions 20-25% (9)
Catalog.certQuiz("sc-900", {
  added: "2026-11-19",
  items: [
    // ---------- Describe the concepts of security, compliance, and identity (5) ----------
    {
      type: "single",
      topic: "Security, compliance, and identity concepts",
      q: "A company stores customer passwords so that they can be verified at sign-in but never recovered, even by administrators. Which technique fits?",
      options: [
        "Hashing with a salt",
        "Symmetric encryption with a shared key",
        "Asymmetric encryption with the users' public keys",
        "Encryption in transit with TLS"
      ],
      answer: 0,
      explain: "Hashing is one-way: the stored hash is compared at sign-in, and salting protects against precomputed attacks. Encryption is reversible.",
      es: {
        topic: "Conceptos de seguridad, cumplimiento e identidad",
        q: "Una empresa guarda las contraseñas de los clientes para poder verificarlas al iniciar sesión, pero sin que nadie pueda recuperarlas, ni siquiera los administradores. ¿Qué técnica corresponde?",
        options: [
          "Hash con sal",
          "Cifrado simétrico con una clave compartida",
          "Cifrado asimétrico con las claves públicas de los usuarios",
          "Cifrado en tránsito con TLS"
        ],
        explain: "El hash es unidireccional: al iniciar sesión se compara el hash guardado, y la sal protege contra ataques precalculados. El cifrado es reversible."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Security, compliance, and identity concepts", s: "Zero Trust assumes breach and verifies each request as though it came from an open network.", answer: true, explain: "Verify explicitly, use least privilege access and assume breach." },
        { topic: "Security, compliance, and identity concepts", s: "Federation lets users of one organization access another organization's resources without a separate account there.", answer: true, explain: "Trust is established between identity providers." },
        { topic: "Security, compliance, and identity concepts", s: "Authorization verifies who a user is; authentication decides what the user can do.", answer: false, explain: "It's the other way around: authentication proves identity, authorization grants access." }
      ],
      es: {
        statements: [
          { topic: "Conceptos de seguridad, cumplimiento e identidad", s: "Confianza cero asume una vulneración y verifica cada solicitud como si viniera de una red abierta.", explain: "Verificar explícitamente, usar acceso con privilegios mínimos y asumir la vulneración." },
          { topic: "Conceptos de seguridad, cumplimiento e identidad", s: "La federación permite que los usuarios de una organización accedan a recursos de otra sin tener una cuenta separada allí.", explain: "Se establece una confianza entre proveedores de identidades." },
          { topic: "Conceptos de seguridad, cumplimiento e identidad", s: "La autorización verifica quién es el usuario; la autenticación decide qué puede hacer.", explain: "Es al revés: la autenticación demuestra la identidad y la autorización concede el acceso." }
        ]
      }
    },
    {
      type: "single",
      topic: "Security, compliance, and identity concepts",
      q: "A company runs its apps on Azure App Service (PaaS). Which responsibility stays entirely with the company?",
      options: [
        "The accounts and identities that access the app",
        "Patching the operating system of the App Service hosts",
        "The physical security of the datacenter",
        "Physical host network controls"
      ],
      answer: 0,
      explain: "Information and data, devices, and accounts and identities are always the customer's responsibility.",
      es: {
        topic: "Conceptos de seguridad, cumplimiento e identidad",
        q: "Una empresa ejecuta sus aplicaciones en Azure App Service (PaaS). ¿Qué responsabilidad queda por completo a cargo de la empresa?",
        options: [
          "Las cuentas e identidades que acceden a la aplicación",
          "Aplicar parches al sistema operativo de los hosts de App Service",
          "La seguridad física del centro de datos",
          "Los controles de la red física de los hosts"
        ],
        explain: "La información y los datos, los dispositivos y las cuentas e identidades siempre son responsabilidad del cliente."
      }
    },
    // ---------- Describe the capabilities of Microsoft Entra (11) ----------
    {
      type: "single",
      topic: "Microsoft Entra",
      q: "An Azure Function must read secrets from Key Vault without any credentials stored in its code or configuration, and the identity should be deleted with the function. What should you use?",
      options: [
        "A system-assigned managed identity",
        "A user-assigned managed identity shared by several apps",
        "A service principal with a client secret",
        "An app registration with a certificate"
      ],
      answer: 0,
      explain: "Managed identities remove the need to manage credentials; a system-assigned one is tied to the resource's lifecycle.",
      es: {
        topic: "Microsoft Entra",
        q: "Una Azure Function debe leer secretos de Key Vault sin credenciales guardadas en su código o configuración, y la identidad debe eliminarse junto con la función. ¿Qué debe usar?",
        options: [
          "Una identidad administrada asignada por el sistema",
          "Una identidad administrada asignada por el usuario compartida entre varias aplicaciones",
          "Una entidad de servicio con un secreto de cliente",
          "Un registro de aplicación con un certificado"
        ],
        explain: "Las identidades administradas eliminan la necesidad de administrar credenciales; la asignada por el sistema sigue el ciclo de vida del recurso."
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra",
      q: "Users must be able to reset their own passwords, and new cloud passwords must be written back to on-premises Active Directory. What does the company need?",
      options: [
        "Self-service password reset with password writeback",
        "Password hash synchronization only",
        "Microsoft Entra Password Protection with a banned list",
        "Pass-through authentication"
      ],
      answer: 0,
      explain: "SSPR lets users reset passwords; writeback sends cloud password changes to on-premises AD in hybrid environments.",
      es: {
        topic: "Microsoft Entra",
        q: "Los usuarios deben poder restablecer sus propias contraseñas, y las nuevas contraseñas de la nube deben escribirse en Active Directory local. ¿Qué necesita la empresa?",
        options: [
          "Autoservicio de restablecimiento de contraseña con escritura diferida de contraseñas",
          "Solo la sincronización de hash de contraseñas",
          "Microsoft Entra Password Protection con una lista de prohibidas",
          "La autenticación de paso"
        ],
        explain: "SSPR permite que los usuarios restablezcan contraseñas; la escritura diferida envía los cambios de la nube a AD local en entornos híbridos."
      }
    },
    {
      type: "match",
      topic: "Microsoft Entra",
      q: "Match each requirement to the Microsoft Entra capability.",
      values: ["Conditional Access", "Privileged Identity Management", "Access reviews", "ID Protection"],
      targets: [
        { t: "Require a compliant device to open the HR app", answer: 0 },
        { t: "Make Global Administrator a time-bound role that needs approval", answer: 1 },
        { t: "Have managers recertify guest access every quarter", answer: 2 },
        { t: "Detect leaked credentials and force a secure password change", answer: 3 }
      ],
      explain: "Conditional Access enforces access policies, PIM controls privileged roles, access reviews recertify access and ID Protection detects identity risk.",
      es: {
        topic: "Microsoft Entra",
        q: "Relacione cada requisito con la capacidad de Microsoft Entra.",
        values: ["Acceso condicional", "Privileged Identity Management", "Revisiones de acceso", "ID Protection"],
        targets: [
          { t: "Exigir un dispositivo compatible para abrir la aplicación de RR. HH." },
          { t: "Que Administrador global sea un rol temporal que requiera aprobación" },
          { t: "Que los responsables vuelvan a certificar el acceso de los invitados cada trimestre" },
          { t: "Detectar credenciales filtradas y forzar un cambio de contraseña seguro" }
        ],
        explain: "El acceso condicional aplica directivas de acceso, PIM controla los roles con privilegios, las revisiones de acceso recertifican y ID Protection detecta riesgos de identidad."
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra",
      q: "Admins must use the most phishing-resistant sign-in method available. Which option fits best?",
      options: [
        "FIDO2 security keys",
        "SMS one-time codes",
        "Voice call verification",
        "Authenticator push notifications"
      ],
      answer: 0,
      explain: "FIDO2 keys use public key cryptography bound to the site and resist phishing; SMS and voice are the weakest methods.",
      es: {
        topic: "Microsoft Entra",
        q: "Los administradores deben usar el método de inicio de sesión más resistente al phishing disponible. ¿Qué opción es la más adecuada?",
        options: [
          "Llaves de seguridad FIDO2",
          "Códigos de un solo uso por SMS",
          "Verificación por llamada de voz",
          "Notificaciones push de Authenticator"
        ],
        explain: "Las llaves FIDO2 usan criptografía de clave pública vinculada al sitio y resisten el phishing; SMS y voz son los métodos más débiles."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Microsoft Entra", s: "Microsoft Entra Password Protection blocks weak passwords using a global banned list, plus an optional custom list.", answer: true, explain: "The custom list holds terms specific to the organization." },
        { topic: "Microsoft Entra", s: "Conditional Access policies are evaluated after the first factor of authentication.", answer: true, explain: "They act on signals to grant, require more or block." },
        { topic: "Microsoft Entra", s: "Microsoft Entra built-in roles can't be customized, but you can create custom roles.", answer: true, explain: "Custom roles require a P1 or P2 license." }
      ],
      es: {
        statements: [
          { topic: "Microsoft Entra", s: "Microsoft Entra Password Protection bloquea contraseñas débiles con una lista global de prohibidas y una lista personalizada opcional.", explain: "La lista personalizada guarda términos propios de la organización." },
          { topic: "Microsoft Entra", s: "Las directivas de acceso condicional se evalúan después del primer factor de autenticación.", explain: "Actúan sobre señales para conceder, pedir más o bloquear." },
          { topic: "Microsoft Entra", s: "Los roles integrados de Microsoft Entra no se pueden personalizar, pero se pueden crear roles personalizados.", explain: "Los roles personalizados requieren una licencia P1 o P2." }
        ]
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra",
      q: "Contractors from a partner need a bundle of access (a Teams team, a SharePoint site and an app) that expires after 90 days, requested through an approval workflow. Which feature fits?",
      options: [
        "Entitlement management access packages",
        "Privileged Identity Management role activation",
        "A Conditional Access policy for guests",
        "Dynamic groups for the partner's users"
      ],
      answer: 0,
      explain: "Access packages bundle resources with request, approval and expiration policies, including for external users.",
      es: {
        topic: "Microsoft Entra",
        q: "Los contratistas de un asociado necesitan un conjunto de accesos (un equipo de Teams, un sitio de SharePoint y una aplicación) que venza a los 90 días, solicitado con un flujo de aprobación. ¿Qué característica corresponde?",
        options: [
          "Los paquetes de acceso de la administración de derechos",
          "La activación de roles de Privileged Identity Management",
          "Una directiva de acceso condicional para invitados",
          "Grupos dinámicos para los usuarios del asociado"
        ],
        explain: "Los paquetes de acceso agrupan recursos con directivas de solicitud, aprobación y vencimiento, también para usuarios externos."
      }
    },
    {
      type: "dropdown",
      topic: "Microsoft Entra",
      q: "Complete the statement about hybrid identity.",
      parts: [
        "To synchronize on-premises Active Directory users to Microsoft Entra ID with a lightweight agent managed from the cloud, use ",
        { options: ["Microsoft Entra Cloud Sync", "Microsoft Entra Domain Services", "Azure AD B2C"], answer: 0 },
        ", and to have users sign in with the same password in both places without sending it for validation on-premises, use ",
        { options: ["password hash synchronization", "pass-through authentication", "federation with AD FS"], answer: 0 },
        "."
      ],
      explain: "Cloud Sync uses lightweight agents configured from the cloud; password hash sync lets Entra ID validate passwords in the cloud.",
      es: {
        topic: "Microsoft Entra",
        q: "Complete la afirmación sobre la identidad híbrida.",
        parts: [
          "Para sincronizar usuarios de Active Directory local con Microsoft Entra ID mediante un agente liviano administrado desde la nube, use ",
          { options: ["Microsoft Entra Cloud Sync", "Microsoft Entra Domain Services", "Azure AD B2C"] },
          ", y para que los usuarios inicien sesión con la misma contraseña en ambos lugares sin enviarla a validar al entorno local, use ",
          { options: ["la sincronización de hash de contraseñas", "la autenticación de paso", "la federación con AD FS"] },
          "."
        ],
        explain: "Cloud Sync usa agentes livianos configurados desde la nube; la sincronización de hash permite que Entra ID valide las contraseñas en la nube."
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra",
      q: "Sign-ins from an anonymous IP address should require MFA, but only when ID Protection rates the sign-in as medium or high risk. What should you configure?",
      options: [
        "A risk-based Conditional Access policy using sign-in risk",
        "A user risk policy that requires a password change",
        "Security defaults for the whole tenant",
        "An access review of anonymous sign-ins"
      ],
      answer: 0,
      explain: "Sign-in risk evaluates the likelihood a given sign-in isn't from the owner; risk-based Conditional Access can require MFA at chosen levels.",
      es: {
        topic: "Microsoft Entra",
        q: "Los inicios de sesión desde una IP anónima deben pedir MFA, pero solo cuando ID Protection califica el inicio de sesión como de riesgo medio o alto. ¿Qué debe configurar?",
        options: [
          "Una directiva de acceso condicional basada en el riesgo de inicio de sesión",
          "Una directiva de riesgo de usuario que exija cambiar la contraseña",
          "Los valores predeterminados de seguridad para todo el inquilino",
          "Una revisión de acceso de los inicios anónimos"
        ],
        explain: "El riesgo de inicio de sesión evalúa la probabilidad de que ese inicio no sea del propietario; el acceso condicional basado en riesgo puede pedir MFA en los niveles elegidos."
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra",
      q: "Engineers from a partner organization need to collaborate in a Teams shared channel using their own home tenant identities, without being added as guests in your directory. What should you use?",
      options: [
        "B2B direct connect",
        "B2B collaboration",
        "Microsoft Entra Domain Services",
        "Microsoft Entra Connect sync"
      ],
      answer: 0,
      explain: "B2B direct connect creates a mutual trust for Teams shared channels; users don't appear as guests in your directory. B2B collaboration adds them as guests.",
      es: {
        topic: "Microsoft Entra",
        q: "Unos ingenieros de una organización asociada necesitan colaborar en un canal compartido de Teams con las identidades de su propio inquilino, sin agregarse como invitados en su directorio. ¿Qué debe usar?",
        options: [
          "La conexión directa B2B",
          "La colaboración B2B",
          "Microsoft Entra Domain Services",
          "La sincronización de Microsoft Entra Connect"
        ],
        explain: "La conexión directa B2B crea una confianza mutua para canales compartidos de Teams; los usuarios no aparecen como invitados en su directorio. La colaboración B2B los agrega como invitados."
      }
    },
    // ---------- Describe the capabilities of Microsoft security solutions (15) ----------
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "Admins need RDP and SSH access to Azure VMs that have no public IP addresses, directly from the Azure portal over TLS. What should you deploy?",
      options: [
        "Azure Bastion",
        "Azure Firewall with DNAT rules",
        "An NSG allowing RDP from the internet",
        "A point-to-site VPN gateway"
      ],
      answer: 0,
      explain: "Bastion provides secure RDP and SSH over TLS from the portal, without exposing public IPs on the VMs.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Los administradores necesitan acceso por RDP y SSH a máquinas virtuales de Azure sin IP pública, directamente desde Azure Portal por TLS. ¿Qué debe implementar?",
        options: [
          "Azure Bastion",
          "Azure Firewall con reglas DNAT",
          "Un NSG que permita RDP desde internet",
          "Una puerta de enlace VPN de punto a sitio"
        ],
        explain: "Bastion ofrece RDP y SSH seguros por TLS desde el portal, sin exponer IP públicas en las máquinas."
      }
    },
    {
      type: "match",
      topic: "Microsoft security solutions",
      q: "Match each threat to the Azure service that mitigates it.",
      values: ["Azure DDoS Protection", "Web Application Firewall", "Network security group", "Azure Key Vault"],
      targets: [
        { t: "A volumetric flood that saturates a public IP", answer: 0 },
        { t: "Cross-site scripting against a public web app", answer: 1 },
        { t: "A VM in the web subnet reaching the database subnet on port 1433", answer: 2 },
        { t: "A connection string committed in plain text in an app's config", answer: 3 }
      ],
      explain: "DDoS Protection handles network floods, WAF handles layer 7 exploits, NSGs filter subnet traffic and Key Vault stores secrets.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Relacione cada amenaza con el servicio de Azure que la mitiga.",
        values: ["Azure DDoS Protection", "Firewall de aplicaciones web", "Grupo de seguridad de red", "Azure Key Vault"],
        targets: [
          { t: "Una inundación volumétrica que satura una IP pública" },
          { t: "Un ataque de scripts entre sitios contra una aplicación web pública" },
          { t: "Una máquina de la subred web que llega a la subred de base de datos por el puerto 1433" },
          { t: "Una cadena de conexión guardada en texto claro en la configuración de una aplicación" }
        ],
        explain: "DDoS Protection maneja inundaciones de red, WAF maneja ataques de capa 7, los NSG filtran el tráfico entre subredes y Key Vault guarda secretos."
      }
    },
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "A company wants free, continuous recommendations to harden its Azure, AWS and GCP resources, plus a secure score. Later it wants attack path analysis. What's the right path?",
      options: [
        "Start with foundational CSPM, then enable the Defender CSPM plan",
        "Start with Defender CSPM, since foundational CSPM only covers Azure",
        "Enable Microsoft Sentinel, then add Defender for Servers",
        "Enable every Defender plan first"
      ],
      answer: 0,
      explain: "Foundational CSPM is free and multicloud, with recommendations and secure score; Defender CSPM adds attack paths and the security explorer.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Una empresa quiere recomendaciones gratuitas y continuas para reforzar sus recursos de Azure, AWS y GCP, más una puntuación de seguridad. Más adelante quiere análisis de rutas de ataque. ¿Cuál es el camino correcto?",
        options: [
          "Empezar con CSPM fundamental y después habilitar el plan Defender CSPM",
          "Empezar con Defender CSPM, porque CSPM fundamental solo cubre Azure",
          "Habilitar Microsoft Sentinel y después agregar Defender para servidores",
          "Habilitar primero todos los planes de Defender"
        ],
        explain: "CSPM fundamental es gratuito y multinube, con recomendaciones y puntuación de seguridad; Defender CSPM agrega rutas de ataque y el explorador de seguridad."
      }
    },
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "A SOC wants to collect firewall and AWS logs, correlate them with Microsoft 365 alerts, and automatically disable a user when a specific incident type is created. Which service and feature fit?",
      options: [
        "Microsoft Sentinel with an automation rule that runs a playbook",
        "Microsoft Defender for Cloud with a workflow automation on recommendations",
        "Microsoft Purview Insider Risk Management with adaptive protection",
        "Defender for Endpoint with AIR"
      ],
      answer: 0,
      explain: "Sentinel is a SIEM and SOAR: it collects and correlates data from many sources, and automation rules and playbooks respond to incidents.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Un SOC quiere recopilar registros de firewalls y de AWS, correlacionarlos con alertas de Microsoft 365 y deshabilitar automáticamente a un usuario cuando se crea cierto tipo de incidente. ¿Qué servicio y característica corresponden?",
        options: [
          "Microsoft Sentinel con una regla de automatización que ejecuta un cuaderno de estrategias",
          "Microsoft Defender for Cloud con una automatización de flujos de trabajo sobre recomendaciones",
          "Microsoft Purview Insider Risk Management con protección adaptable",
          "Defender para punto de conexión con AIR"
        ],
        explain: "Sentinel es SIEM y SOAR: recopila y correlaciona datos de muchos orígenes, y las reglas de automatización y los cuadernos de estrategias responden a los incidentes."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Microsoft security solutions", s: "Network security group rules are processed in priority order, and processing stops at the first match.", answer: true, explain: "Lower numbers have higher priority." },
        { topic: "Microsoft security solutions", s: "Azure Firewall is a stateful, managed firewall that can filter outbound traffic by FQDN.", answer: true, explain: "Application rules filter by FQDN." },
        { topic: "Microsoft security solutions", s: "Azure DDoS Protection on its own blocks SQL injection attempts.", answer: false, explain: "Application-layer attacks need a WAF." }
      ],
      es: {
        statements: [
          { topic: "Soluciones de seguridad de Microsoft", s: "Las reglas de un grupo de seguridad de red se procesan por prioridad, y el procesamiento se detiene en la primera coincidencia.", explain: "Los números más bajos tienen mayor prioridad." },
          { topic: "Soluciones de seguridad de Microsoft", s: "Azure Firewall es un firewall administrado con estado que puede filtrar el tráfico saliente por FQDN.", explain: "Las reglas de aplicación filtran por FQDN." },
          { topic: "Soluciones de seguridad de Microsoft", s: "Azure DDoS Protection por sí solo bloquea intentos de inyección de código SQL.", explain: "Los ataques de capa de aplicación necesitan un WAF." }
        ]
      }
    },
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "A malicious attachment is found on one laptop by Defender for Endpoint. Minutes later, copies of the same file disappear from every mailbox. What explains this?",
      options: [
        "Defender XDR shares signals across products, so Defender for Office 365 removes the file",
        "Microsoft Sentinel ran a playbook that deleted the emails",
        "Defender for Cloud Apps blocked the file at the OAuth app layer",
        "Defender Vulnerability Management patched Outlook"
      ],
      answer: 0,
      explain: "Defender XDR coordinates across products: a detection in one triggers automatic response in others.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Defender para punto de conexión encuentra un adjunto malicioso en una laptop. Minutos después, las copias del mismo archivo desaparecen de todos los buzones. ¿Qué lo explica?",
        options: [
          "Defender XDR comparte señales entre productos, así que Defender para Office 365 quita el archivo",
          "Microsoft Sentinel ejecutó un cuaderno de estrategias que eliminó los correos",
          "Defender for Cloud Apps bloqueó el archivo en la capa de aplicaciones OAuth",
          "La Administración de vulnerabilidades de Defender aplicó un parche a Outlook"
        ],
        explain: "Defender XDR coordina entre productos: una detección en uno dispara la respuesta automática en los demás."
      }
    },
    {
      type: "multi",
      topic: "Microsoft security solutions",
      q: "Which two capabilities are part of Microsoft Defender for Office 365?",
      options: ["Safe Attachments", "Attack simulation training", "Attack surface reduction rules", "Lateral movement path detection", "Cloud discovery of shadow IT"],
      answers: [0, 1],
      explain: "Defender for Office 365 includes Safe Attachments, Safe Links, anti-phishing, attack simulation training, Threat Explorer, ZAP and AIR. ASR is Endpoint, lateral movement is Identity and discovery is Cloud Apps.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "¿Cuáles son dos capacidades que forman parte de Microsoft Defender para Office 365?",
        options: ["Datos adjuntos seguros", "La formación con simulación de ataques", "Las reglas de reducción de la superficie expuesta a ataques", "La detección de rutas de movimiento lateral", "La detección en la nube de la TI en la sombra"],
        explain: "Defender para Office 365 incluye Datos adjuntos seguros, Vínculos seguros, anti-phishing, formación con simulación de ataques, Explorador de amenazas, ZAP y AIR. ASR es de Endpoint, el movimiento lateral de Identity y la detección de Cloud Apps."
      }
    },
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "An attacker is using stolen credentials to move between on-premises servers toward a domain admin account. Which product detects this at the identity source?",
      options: [
        "Microsoft Defender for Identity",
        "Microsoft Defender for Cloud Apps",
        "Microsoft Defender for Office 365",
        "Microsoft Entra ID Protection"
      ],
      answer: 0,
      explain: "Defender for Identity uses sensors on domain controllers to detect reconnaissance, compromised credentials, lateral movement and domain dominance.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Un atacante usa credenciales robadas para moverse entre servidores locales hacia una cuenta de administrador de dominio. ¿Qué producto lo detecta en el origen de identidad?",
        options: [
          "Microsoft Defender for Identity",
          "Microsoft Defender for Cloud Apps",
          "Microsoft Defender para Office 365",
          "Microsoft Entra ID Protection"
        ],
        explain: "Defender for Identity usa sensores en los controladores de dominio para detectar reconocimiento, credenciales comprometidas, movimiento lateral y dominio del dominio."
      }
    },
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "IT discovers employees uploading files to dozens of unapproved cloud storage apps. It wants to find them, rate their risk and block the risky ones. Which product fits?",
      options: [
        "Microsoft Defender for Cloud Apps",
        "Microsoft Defender for Endpoint",
        "Microsoft Purview Data Map",
        "Azure Firewall Premium with web categories"
      ],
      answer: 0,
      explain: "Defender for Cloud Apps is a CASB: cloud discovery identifies apps, rates them on 90+ risk indicators and lets you sanction or block them.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "TI descubre que los empleados suben archivos a decenas de aplicaciones de almacenamiento en la nube no aprobadas. Quiere encontrarlas, calificar su riesgo y bloquear las riesgosas. ¿Qué producto corresponde?",
        options: [
          "Microsoft Defender for Cloud Apps",
          "Microsoft Defender para punto de conexión",
          "Microsoft Purview Data Map",
          "Azure Firewall Premium con categorías web"
        ],
        explain: "Defender for Cloud Apps es un CASB: la detección en la nube identifica aplicaciones, las califica con más de 90 indicadores de riesgo y permite autorizarlas o bloquearlas."
      }
    },
    {
      type: "dropdown",
      topic: "Microsoft security solutions",
      q: "Complete the statement about Microsoft Sentinel.",
      parts: [
        "Sentinel uses ",
        { options: ["data connectors", "Azure Policy initiatives", "sensitivity labels"], answer: 0 },
        " to ingest data from Microsoft and third-party sources, and ",
        { options: ["workbooks", "access packages", "retention labels"], answer: 0 },
        " to visualize that data in interactive dashboards."
      ],
      explain: "Data connectors bring data in; workbooks provide interactive visualizations.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Complete la afirmación sobre Microsoft Sentinel.",
        parts: [
          "Sentinel usa ",
          { options: ["conectores de datos", "iniciativas de Azure Policy", "etiquetas de confidencialidad"] },
          " para incorporar datos de orígenes de Microsoft y de terceros, y ",
          { options: ["libros", "paquetes de acceso", "etiquetas de retención"] },
          " para visualizar esos datos en paneles interactivos."
        ],
        explain: "Los conectores de datos incorporan la información; los libros ofrecen visualizaciones interactivas."
      }
    },
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "An analyst in the Defender portal wants Security Copilot to summarize a large incident and suggest containment steps, without leaving the incident page. Which experience is this?",
      options: [
        "The embedded experience in Defender XDR",
        "The standalone Security Copilot portal",
        "A Sentinel workbook",
        "A promptbook in a standalone session"
      ],
      answer: 0,
      explain: "Embedded Copilot in Defender XDR provides incident summaries and guided responses in context.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Un analista en el portal de Defender quiere que Security Copilot resuma un incidente grande y sugiera pasos de contención, sin salir de la página del incidente. ¿Qué experiencia es esta?",
        options: [
          "La experiencia integrada en Defender XDR",
          "El portal independiente de Security Copilot",
          "Un libro de Sentinel",
          "Un libro de indicaciones en una sesión independiente"
        ],
        explain: "Copilot integrado en Defender XDR ofrece resúmenes de incidentes y respuestas guiadas en contexto."
      }
    },
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "A vulnerable library is installed on 400 devices, and the security team wants it prioritized by exploitability and business impact, with a remediation task sent to Intune. Which product fits?",
      options: [
        "Microsoft Defender Vulnerability Management",
        "Microsoft Defender for Cloud Apps",
        "Microsoft Sentinel threat intelligence",
        "Microsoft Defender for Office 365"
      ],
      answer: 0,
      explain: "Defender Vulnerability Management discovers, prioritizes by risk and tracks remediation, including Intune remediation tasks.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Una biblioteca vulnerable está instalada en 400 dispositivos, y el equipo de seguridad quiere priorizarla según la posibilidad de explotación y el impacto en el negocio, con una tarea de corrección enviada a Intune. ¿Qué producto corresponde?",
        options: [
          "Administración de vulnerabilidades de Microsoft Defender",
          "Microsoft Defender for Cloud Apps",
          "La inteligencia sobre amenazas de Microsoft Sentinel",
          "Microsoft Defender para Office 365"
        ],
        explain: "La Administración de vulnerabilidades de Defender detecta, prioriza por riesgo y sigue la corrección, incluidas tareas de corrección en Intune."
      }
    },
    {
      type: "single",
      topic: "Microsoft security solutions",
      q: "A company wants alerts when malware is uploaded to its Azure storage accounts or when they're accessed in unusual ways. What should it enable in Defender for Cloud?",
      options: [
        "The Defender for Storage workload protection plan",
        "Foundational CSPM recommendations for storage",
        "An Azure Policy initiative that audits storage firewall settings",
        "A Key Vault firewall with private endpoints"
      ],
      answer: 0,
      explain: "Workload protection plans such as Defender for Storage are enhanced security features that add threat detection; foundational CSPM gives posture recommendations, not threat alerts.",
      es: {
        topic: "Soluciones de seguridad de Microsoft",
        q: "Una empresa quiere alertas cuando se sube malware a sus cuentas de almacenamiento de Azure o cuando se accede a ellas de forma inusual. ¿Qué debe habilitar en Defender for Cloud?",
        options: [
          "El plan de protección de cargas Defender for Storage",
          "Las recomendaciones de CSPM fundamental para almacenamiento",
          "Una iniciativa de Azure Policy que audite la configuración del firewall de almacenamiento",
          "Un firewall de Key Vault con puntos de conexión privados"
        ],
        explain: "Los planes de protección de cargas, como Defender for Storage, son características de seguridad mejoradas que agregan detección de amenazas; CSPM fundamental da recomendaciones de postura, no alertas de amenazas."
      }
    },
    // ---------- Describe the capabilities of Microsoft compliance solutions (9) ----------
    {
      type: "single",
      topic: "Microsoft compliance solutions",
      q: "A company wants its Compliance Manager score to reflect progress on GDPR, with tasks assigned to owners and evidence attached. What should it do?",
      options: [
        "Create an assessment from the GDPR regulatory template and assign its improvement actions",
        "Download the GDPR reports from the Service Trust Portal",
        "Apply a sensitivity label named GDPR to all personal data",
        "Enable Audit (Premium) and keep the audit log for ten years to show compliance with GDPR"
      ],
      answer: 0,
      explain: "Assessments group controls from a regulation; improvement actions are assigned, documented and counted in the score.",
      es: {
        topic: "Soluciones de cumplimiento de Microsoft",
        q: "Una empresa quiere que su puntuación del Administrador de cumplimiento refleje el avance en el RGPD, con tareas asignadas a responsables y evidencia adjunta. ¿Qué debe hacer?",
        options: [
          "Crear una evaluación desde la plantilla de normativa del RGPD y asignar sus acciones de mejora",
          "Descargar los informes del RGPD desde el Portal de confianza de servicios",
          "Aplicar una etiqueta de confidencialidad llamada RGPD a todos los datos personales",
          "Habilitar Auditoría (Premium) y conservar el registro de auditoría diez años para demostrar el cumplimiento del RGPD"
        ],
        explain: "Las evaluaciones agrupan controles de una normativa; las acciones de mejora se asignan, se documentan y suman a la puntuación."
      }
    },
    {
      type: "match",
      topic: "Microsoft compliance solutions",
      q: "Match each requirement to the Microsoft Purview capability.",
      values: ["Data loss prevention", "Retention label", "eDiscovery hold", "Insider Risk Management"],
      targets: [
        { t: "Stop users from emailing credit card numbers outside the company", answer: 0 },
        { t: "Keep a specific contract for 10 years, wherever it moves in the tenant", answer: 1 },
        { t: "Preserve custodians' content during a lawsuit", answer: 2 },
        { t: "Flag a departing employee who downloads unusual volumes of files", answer: 3 }
      ],
      explain: "DLP prevents risky sharing, retention labels govern how long items are kept, holds preserve evidence and IRM detects risky user behavior.",
      es: {
        topic: "Soluciones de cumplimiento de Microsoft",
        q: "Relacione cada requisito con la capacidad de Microsoft Purview.",
        values: ["Prevención de pérdida de datos", "Etiqueta de retención", "Retención de eDiscovery", "Insider Risk Management"],
        targets: [
          { t: "Impedir que los usuarios envíen números de tarjeta de crédito por correo fuera de la empresa" },
          { t: "Conservar un contrato específico 10 años, se mueva adonde se mueva dentro del inquilino" },
          { t: "Conservar el contenido de los custodios durante una demanda" },
          { t: "Señalar a un empleado que se va y descarga volúmenes inusuales de archivos" }
        ],
        explain: "DLP evita el uso compartido riesgoso, las etiquetas de retención definen cuánto se conservan los elementos, las retenciones conservan evidencia e IRM detecta comportamiento riesgoso."
      }
    },
    {
      type: "single",
      topic: "Microsoft compliance solutions",
      q: "An administrator wants to see how many documents across SharePoint and OneDrive contain credit card numbers, and where they're stored. Which tool provides this snapshot?",
      options: [
        "Content explorer",
        "Activity explorer",
        "Compliance Manager",
        "The audit log search tool"
      ],
      answer: 0,
      explain: "Content explorer shows a current snapshot of classified and labeled items and where they are; Activity explorer shows actions on content.",
      es: {
        topic: "Soluciones de cumplimiento de Microsoft",
        q: "Un administrador quiere ver cuántos documentos de SharePoint y OneDrive contienen números de tarjeta de crédito y dónde están almacenados. ¿Qué herramienta da esa instantánea?",
        options: [
          "El explorador de contenido",
          "El explorador de actividad",
          "El Administrador de cumplimiento",
          "La herramienta de búsqueda del registro de auditoría"
        ],
        explain: "El explorador de contenido muestra una instantánea actual de los elementos clasificados y etiquetados y dónde están; el explorador de actividad muestra acciones sobre el contenido."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Microsoft compliance solutions", s: "A sensitivity label can encrypt a document and add a watermark.", answer: true, explain: "Labels can encrypt and apply content markings." },
        { topic: "Microsoft compliance solutions", s: "Audit (Standard) retains audit records for one year by default.", answer: false, explain: "Audit (Standard) keeps records for 180 days." },
        { topic: "Microsoft compliance solutions", s: "Microsoft's privacy principles include defending customer data against inappropriate government requests.", answer: true, explain: "Microsoft directs requests to the customer and challenges unlawful ones." }
      ],
      es: {
        statements: [
          { topic: "Soluciones de cumplimiento de Microsoft", s: "Una etiqueta de confidencialidad puede cifrar un documento y agregarle una marca de agua.", explain: "Las etiquetas pueden cifrar y aplicar marcas de contenido." },
          { topic: "Soluciones de cumplimiento de Microsoft", s: "Auditoría (Estándar) conserva los registros de auditoría un año de forma predeterminada.", explain: "Auditoría (Estándar) conserva los registros 180 días." },
          { topic: "Soluciones de cumplimiento de Microsoft", s: "Los principios de privacidad de Microsoft incluyen defender los datos del cliente frente a solicitudes de gobierno inapropiadas.", explain: "Microsoft deriva las solicitudes al cliente e impugna las ilegítimas." }
        ]
      }
    },
    {
      type: "single",
      topic: "Microsoft compliance solutions",
      q: "Financial statements must be retained for seven years, users must be blocked from deleting them during that time, and the company needs proof when they're finally disposed of. What should it use?",
      options: [
        "A retention label that declares items as records, in Records Management",
        "A retention policy on the finance SharePoint site",
        "A sensitivity label with encryption and no expiration",
        "A DLP policy that blocks deletion"
      ],
      answer: 0,
      explain: "Records Management restricts actions on records, logs activity and keeps proof of disposition. A plain retention policy doesn't add record restrictions.",
      es: {
        topic: "Soluciones de cumplimiento de Microsoft",
        q: "Los estados financieros deben conservarse siete años, hay que impedir que los usuarios los eliminen durante ese tiempo, y la empresa necesita una prueba cuando finalmente se eliminen. ¿Qué debe usar?",
        options: [
          "Una etiqueta de retención que declare los elementos como registros, en Administración de registros",
          "Una directiva de retención en el sitio de SharePoint de Finanzas",
          "Una etiqueta de confidencialidad con cifrado y sin vencimiento",
          "Una directiva DLP que bloquee la eliminación"
        ],
        explain: "Administración de registros restringe las acciones sobre los registros, registra la actividad y conserva la prueba de eliminación. Una directiva de retención común no agrega esas restricciones."
      }
    },
    {
      type: "dropdown",
      topic: "Microsoft compliance solutions",
      q: "Complete the statement about Microsoft Purview.",
      parts: [
        "Third-party audit reports on Microsoft cloud services are published in the ",
        { options: ["Service Trust Portal", "Compliance Manager", "Microsoft Purview portal"], answer: 0 },
        ", while flagged Teams messages that may show harassment are reviewed in ",
        { options: ["Communication Compliance", "eDiscovery", "Data Lifecycle Management"], answer: 0 },
        "."
      ],
      explain: "The STP publishes Microsoft's audit reports; Communication Compliance detects and reviews inappropriate messages.",
      es: {
        topic: "Soluciones de cumplimiento de Microsoft",
        q: "Complete la afirmación sobre Microsoft Purview.",
        parts: [
          "Los informes de auditoría de terceros sobre los servicios en la nube de Microsoft se publican en el ",
          { options: ["Portal de confianza de servicios", "Administrador de cumplimiento", "portal de Microsoft Purview"] },
          ", mientras que los mensajes de Teams marcados por posible acoso se revisan en ",
          { options: ["Cumplimiento de comunicaciones", "eDiscovery", "la administración del ciclo de vida de los datos"] },
          "."
        ],
        explain: "El STP publica los informes de auditoría de Microsoft; Cumplimiento de comunicaciones detecta y revisa mensajes inapropiados."
      }
    },
    {
      type: "single",
      topic: "Microsoft compliance solutions",
      q: "During an investigation, lawyers need Teams chats collected for a case shown as full conversation threads, with text in images made searchable. Which eDiscovery feature set provides this?",
      options: [
        "Premium review set features",
        "Content search with export to CSV",
        "Audit (Premium) intelligent insights",
        "Communication Compliance"
      ],
      answer: 0,
      explain: "Conversation threading and OCR are premium review set features.",
      es: {
        topic: "Soluciones de cumplimiento de Microsoft",
        q: "Durante una investigación, los abogados necesitan ver los chats de Teams reunidos para un caso como conversaciones completas, y que el texto de las imágenes se pueda buscar. ¿Qué conjunto de características de eDiscovery lo ofrece?",
        options: [
          "Las características premium de los conjuntos de revisión",
          "La búsqueda de contenido con exportación a CSV",
          "Las conclusiones inteligentes de Auditoría (Premium)",
          "Cumplimiento de comunicaciones"
        ],
        explain: "Los hilos de conversación y el OCR son características premium de los conjuntos de revisión."
      }
    }
  ]
});
