// SC-900 > Introduction to Microsoft Entra: learning path review (all four modules)
Catalog.pathQuiz("sc-900", "microsoft-entra", {
  added: "2026-10-26",
  items: [
    {
      type: "single",
      topic: "Protection and governance",
      q: "ID Protection reports a high sign-in risk for a user. The company wants the user to prove their identity automatically before access continues. Which combination fits?",
      options: [
        "A risk-based Conditional Access policy that requires MFA",
        "A custom banned password list",
        "An access review of the user's groups",
        "A PIM eligible assignment"
      ],
      answer: 0,
      explain: "ID Protection feeds risk into Conditional Access; completing the required MFA remediates the risk automatically.",
      es: {
        topic: "Protección y gobernanza",
        q: "ID Protection informa un riesgo de inicio de sesión alto para un usuario. La empresa quiere que el usuario demuestre su identidad automáticamente antes de continuar. ¿Qué combinación corresponde?",
        options: [
          "Una directiva de acceso condicional basada en riesgo que exija MFA",
          "Una lista personalizada de contraseñas prohibidas",
          "Una revisión de acceso de los grupos del usuario",
          "Una asignación apta en PIM"
        ],
        explain: "ID Protection envía el riesgo al acceso condicional; completar la MFA exigida corrige el riesgo automáticamente."
      }
    },
    {
      type: "match",
      topic: "Microsoft Entra ID and identity types",
      q: "Match each requirement to the Microsoft Entra ID license that first includes it.",
      values: ["Free", "P1", "P2"],
      targets: [
        { t: "Self-service password reset for cloud users", answer: 0 },
        { t: "Conditional Access", answer: 1 },
        { t: "Privileged Identity Management", answer: 2 },
        { t: "Risk-based Conditional Access with ID Protection", answer: 2 }
      ],
      explain: "Free includes user and group management and SSPR; P1 adds Conditional Access and hybrid identity; P2 adds ID Protection, risk-based Conditional Access and PIM.",
      es: {
        topic: "Microsoft Entra ID y tipos de identidad",
        q: "Relacione cada requisito con la licencia de Microsoft Entra ID que lo incluye por primera vez.",
        values: ["Free", "P1", "P2"],
        targets: [
          { t: "Restablecimiento de contraseña de autoservicio para usuarios en la nube" },
          { t: "Acceso condicional" },
          { t: "Privileged Identity Management" },
          { t: "Acceso condicional basado en riesgo con ID Protection" }
        ],
        explain: "Free incluye administración de usuarios y grupos y SSPR; P1 suma el acceso condicional y la identidad híbrida; P2 suma ID Protection, el acceso condicional basado en riesgo y PIM."
      }
    },
    {
      type: "single",
      topic: "Authentication",
      q: "A Conditional Access policy requires phishing-resistant MFA for administrators. Which method satisfies it?",
      options: ["A FIDO2 security key", "SMS verification code", "Voice call", "Software OATH token"],
      answer: 0,
      explain: "The phishing-resistant MFA authentication strength allows methods like Windows Hello for Business, FIDO2 keys and CBA. SMS, voice and OATH codes don't qualify.",
      es: {
        topic: "Autenticación",
        q: "Una directiva de acceso condicional exige MFA resistente al phishing para los administradores. ¿Qué método la cumple?",
        options: ["Una llave de seguridad FIDO2", "Un código de verificación por SMS", "Una llamada de voz", "Un token OATH de software"],
        explain: "El nivel de autenticación de MFA resistente al phishing admite métodos como Windows Hello para empresas, llaves FIDO2 y CBA. SMS, voz y códigos OATH no califican."
      }
    },
    {
      type: "single",
      topic: "Access management",
      q: "Contractors join a project for three months and need a Teams team, a SharePoint site and an app. Access should be requested, approved by the project lead and removed automatically at the end. What should you use?",
      options: ["An access package in entitlement management", "A security group with assigned membership", "A Global administrator role", "Global Secure Access Quick Access"],
      answer: 0,
      explain: "Access packages bundle resources with request, approval and expiration policies, and can invite external users automatically.",
      es: {
        topic: "Administración de acceso",
        q: "Unos contratistas se suman a un proyecto por tres meses y necesitan un equipo de Teams, un sitio de SharePoint y una aplicación. El acceso se debe solicitar, lo debe aprobar el líder del proyecto y se debe quitar automáticamente al final. ¿Qué debe usar?",
        options: ["Un paquete de acceso de la administración de derechos", "Un grupo de seguridad con pertenencia asignada", "El rol de administrador global", "El acceso rápido del acceso seguro global"],
        explain: "Los paquetes de acceso agrupan recursos con directivas de solicitud, aprobación y vencimiento, y pueden invitar automáticamente a usuarios externos."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Authentication", s: "Security defaults are a good option for organizations on the free tier of Microsoft Entra ID.", answer: true, explain: "They provide baseline MFA protection at no extra cost; Conditional Access requires P1 or P2." },
        { topic: "Microsoft Entra ID and identity types", s: "A system-assigned managed identity can be shared by several Azure resources.", answer: false, explain: "It's tied to one resource; a user-assigned managed identity can be shared." },
        { topic: "Access management", s: "Conditional Access policies can target agent identities.", answer: true, explain: "This extends Zero Trust controls to AI workloads." }
      ],
      es: {
        statements: [
          { topic: "Autenticación", s: "Los valores predeterminados de seguridad son una buena opción para organizaciones con el nivel gratuito de Microsoft Entra ID.", explain: "Ofrecen protección básica con MFA sin costo adicional; el acceso condicional requiere P1 o P2." },
          { topic: "Microsoft Entra ID y tipos de identidad", s: "Una identidad administrada asignada por el sistema puede compartirse entre varios recursos de Azure.", explain: "Está ligada a un recurso; una identidad administrada asignada por el usuario sí se puede compartir." },
          { topic: "Administración de acceso", s: "Las directivas de acceso condicional pueden dirigirse a identidades de agente.", explain: "Esto extiende los controles de Confianza cero a las cargas de trabajo de IA." }
        ]
      }
    },
    {
      type: "dropdown",
      topic: "Protection and governance",
      q: "Complete the statement about privileged access.",
      parts: [
        "Following least privilege, assign the ",
        { options: ["User administrator", "Global administrator", "Billing administrator"], answer: 0 },
        " role to someone who mostly manages users, and make it ",
        { options: ["eligible in PIM", "permanently active", "a guest assignment"], answer: 0 },
        " so it must be activated when needed."
      ],
      explain: "Least privilege picks the narrowest role; PIM eligible assignments add just-in-time activation with justification and MFA.",
      es: {
        topic: "Protección y gobernanza",
        q: "Complete la afirmación sobre el acceso con privilegios.",
        parts: [
          "Según los privilegios mínimos, asigne el rol ",
          { options: ["Administrador de usuarios", "Administrador global", "Administrador de facturación"] },
          " a quien sobre todo administra usuarios, y hágalo ",
          { options: ["apto en PIM", "activo de forma permanente", "una asignación de invitado"] },
          " para que deba activarse cuando haga falta."
        ],
        explain: "Los privilegios mínimos eligen el rol más acotado; las asignaciones aptas de PIM suman activación justo a tiempo con justificación y MFA."
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra ID and identity types",
      q: "A company uses Microsoft Entra Cloud Sync to synchronize on-premises Active Directory with Entra ID. Users reset passwords in the cloud. What else must be enabled so the new passwords work on-premises?",
      options: ["Password writeback", "Universal tenant restrictions", "Terms of use", "B2B direct connect"],
      answer: 0,
      explain: "Password writeback writes cloud password changes back to on-premises AD for hybrid users.",
      es: {
        topic: "Microsoft Entra ID y tipos de identidad",
        q: "Una empresa usa Microsoft Entra Cloud Sync para sincronizar Active Directory local con Entra ID. Los usuarios restablecen contraseñas en la nube. ¿Qué más se debe habilitar para que las contraseñas nuevas funcionen en el entorno local?",
        options: ["La escritura diferida de contraseñas", "Las restricciones universales de inquilinos", "Los términos de uso", "La conexión directa B2B"],
        explain: "La escritura diferida escribe en el AD local los cambios de contraseña hechos en la nube para los usuarios híbridos."
      }
    },
    {
      type: "multi",
      topic: "Access management",
      q: "Which two can be required as grant controls in a Conditional Access policy?",
      options: ["Terms of use", "Authentication strength", "A custom banned password list", "An access review", "A Verified ID credential issuer"],
      answers: [0, 1],
      explain: "Grant controls include MFA, authentication strength, compliant or hybrid joined device, approved client app, password change and terms of use.",
      es: {
        topic: "Administración de acceso",
        q: "¿Cuáles son dos elementos que se pueden exigir como controles de concesión en una directiva de acceso condicional?",
        options: ["Términos de uso", "Nivel de autenticación", "Una lista personalizada de contraseñas prohibidas", "Una revisión de acceso", "Un emisor de credenciales de Verified ID"],
        explain: "Los controles de concesión incluyen MFA, nivel de autenticación, dispositivo compatible o unido híbrido, aplicación cliente aprobada, cambio de contraseña y términos de uso."
      }
    },
    {
      type: "single",
      topic: "Authentication",
      q: "A user forgot their password and still has the Authenticator app. Another user lost every registered method. Which pair of capabilities fits each case?",
      options: [
        "SSPR for the first; account recovery with identity verification for the second",
        "Account recovery for both",
        "PIM for the first; SSPR for the second",
        "Password protection for both"
      ],
      answer: 0,
      explain: "SSPR needs at least one registered method; account recovery re-establishes identity through an IDV provider when all methods are lost.",
      es: {
        topic: "Autenticación",
        q: "Un usuario olvidó su contraseña y todavía tiene Authenticator. Otro usuario perdió todos sus métodos registrados. ¿Qué par de capacidades corresponde a cada caso?",
        options: [
          "SSPR para el primero; recuperación de cuentas con verificación de identidad para el segundo",
          "Recuperación de cuentas para ambos",
          "PIM para el primero; SSPR para el segundo",
          "Protección de contraseñas para ambos"
        ],
        explain: "SSPR necesita al menos un método registrado; la recuperación de cuentas restablece la identidad mediante un proveedor IDV cuando se perdieron todos los métodos."
      }
    },
    {
      type: "single",
      topic: "Access management",
      q: "A remote worker needs to reach an on-premises file server without a VPN, and the company wants a Conditional Access policy on that access. Which product fits?",
      options: ["Microsoft Entra Private Access", "Microsoft Entra Internet Access", "Microsoft Entra ID Governance", "Microsoft Entra External ID"],
      answer: 0,
      explain: "Private Access gives ZTNA per-app access to private resources, integrated with Conditional Access.",
      es: {
        topic: "Administración de acceso",
        q: "Un trabajador remoto necesita llegar a un servidor de archivos local sin VPN, y la empresa quiere aplicar una directiva de acceso condicional a ese acceso. ¿Qué producto corresponde?",
        options: ["Microsoft Entra Private Access", "Microsoft Entra Internet Access", "Microsoft Entra ID Governance", "Microsoft Entra External ID"],
        explain: "Private Access ofrece acceso ZTNA por aplicación a recursos privados, integrado con el acceso condicional."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Protection and governance", s: "Microsoft Entra ID Governance can manage access for AI agent identities as well as for people.", answer: true, explain: "Agent identities have sponsors and can be governed like human identities." },
        { topic: "Authentication", s: "Microsoft Entra password protection replaces existing AD DS password policies on-premises.", answer: false, explain: "It supplements them; all validation components must agree." },
        { topic: "Microsoft Entra ID and identity types", s: "B2B collaboration guests sign in with their home organization's identity.", answer: true, explain: "No credentials are created for them in your tenant." }
      ],
      es: {
        statements: [
          { topic: "Protección y gobernanza", s: "Microsoft Entra ID Governance puede administrar el acceso de identidades de agentes de IA además del de personas.", explain: "Las identidades de agente tienen patrocinadores y se pueden gobernar como las humanas." },
          { topic: "Autenticación", s: "La protección de contraseñas de Microsoft Entra reemplaza las directivas de contraseñas de AD DS en el entorno local.", explain: "Las complementa; todos los componentes de validación deben estar de acuerdo." },
          { topic: "Microsoft Entra ID y tipos de identidad", s: "Los invitados de colaboración B2B inician sesión con la identidad de su organización de origen.", explain: "No se les crean credenciales en su inquilino." }
        ]
      }
    },
    {
      type: "match",
      topic: "Protection and governance",
      q: "Match each scenario to the Microsoft Entra capability.",
      values: ["Access reviews", "Privileged Identity Management", "Microsoft Entra ID Protection", "Microsoft Entra Verified ID"],
      targets: [
        { t: "Quarterly confirmation that guests still need access to a group", answer: 0 },
        { t: "Time-bound activation of the Exchange Administrator role", answer: 1 },
        { t: "Detecting leaked credentials for a user", answer: 2 },
        { t: "Issuing a verifiable employee credential to a digital wallet", answer: 3 }
      ],
      explain: "Access reviews recertify access, PIM governs privileged roles, ID Protection detects identity risk and Verified ID issues verifiable credentials.",
      es: {
        topic: "Protección y gobernanza",
        q: "Relacione cada escenario con la capacidad de Microsoft Entra.",
        values: ["Revisiones de acceso", "Privileged Identity Management", "Microsoft Entra ID Protection", "Microsoft Entra Verified ID"],
        targets: [
          { t: "Confirmar cada trimestre que los invitados siguen necesitando acceso a un grupo" },
          { t: "Activación con límite de tiempo del rol Administrador de Exchange" },
          { t: "Detectar credenciales filtradas de un usuario" },
          { t: "Emitir una credencial verificable de empleado en una cartera digital" }
        ],
        explain: "Las revisiones de acceso recertifican el acceso, PIM gobierna los roles con privilegios, ID Protection detecta riesgos de identidad y Verified ID emite credenciales verificables."
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra ID and identity types",
      q: "An Azure web app needs to read secrets from Azure Key Vault without developers storing any credentials, and the identity should disappear when the app is deleted. What should you use?",
      options: ["A system-assigned managed identity", "A user account with a strong password", "A guest user", "A user-assigned managed identity shared across apps"],
      answer: 0,
      explain: "Managed identities remove credential management; system-assigned ones share the resource's lifecycle.",
      es: {
        topic: "Microsoft Entra ID y tipos de identidad",
        q: "Una aplicación web de Azure necesita leer secretos de Azure Key Vault sin que los desarrolladores guarden credenciales, y la identidad debe desaparecer cuando se elimine la aplicación. ¿Qué debe usar?",
        options: ["Una identidad administrada asignada por el sistema", "Una cuenta de usuario con contraseña segura", "Un usuario invitado", "Una identidad administrada asignada por el usuario compartida entre aplicaciones"],
        explain: "Las identidades administradas eliminan la gestión de credenciales; las asignadas por el sistema comparten el ciclo de vida del recurso."
      }
    },
    {
      type: "multi",
      topic: "Authentication",
      q: "Which two methods can a user register to reset their password with SSPR?",
      options: ["Email OTP", "Microsoft Authenticator push notification", "Windows Hello for Business", "QR code with PIN", "Platform Credential for macOS"],
      answers: [0, 1],
      explain: "SSPR methods include Authenticator push, OATH tokens, SMS, voice, email OTP and security questions (retiring in 2027).",
      es: {
        topic: "Autenticación",
        q: "¿Cuáles son dos métodos que un usuario puede registrar para restablecer su contraseña con SSPR?",
        options: ["Código de un solo uso por correo", "Notificación push de Microsoft Authenticator", "Windows Hello para empresas", "Código QR con PIN", "Credencial de plataforma para macOS"],
        explain: "Los métodos de SSPR incluyen notificaciones de Authenticator, tokens OATH, SMS, voz, código por correo y preguntas de seguridad (se retiran en 2027)."
      }
    },
    {
      type: "single",
      topic: "Access management",
      q: "A company wants to see which unmanaged generative AI apps employees use and block prompt injection attacks against approved AI services. Which solution provides both?",
      options: ["Global Secure Access", "Privileged Identity Management", "Microsoft Entra Cloud Sync", "Access reviews"],
      answer: 0,
      explain: "Global Secure Access includes shadow AI discovery and prompt injection protection.",
      es: {
        topic: "Administración de acceso",
        q: "Una empresa quiere ver qué aplicaciones de IA generativa no administradas usan los empleados y bloquear ataques de inyección de prompts contra los servicios de IA aprobados. ¿Qué solución ofrece ambas cosas?",
        options: ["El acceso seguro global", "Privileged Identity Management", "Microsoft Entra Cloud Sync", "Las revisiones de acceso"],
        explain: "El acceso seguro global incluye la detección de IA en la sombra y la protección contra la inyección de prompts."
      }
    },
    {
      type: "single",
      topic: "Protection and governance",
      q: "When an employee moves from Sales to Finance, their group memberships and app roles should change automatically based on the department attribute. What should you use?",
      options: ["Automatic assignment policies in entitlement management or dynamic groups", "A Temporary Access Pass", "A custom banned password list", "Microsoft Entra Verified ID"],
      answer: 0,
      explain: "Automatic assignment policies and dynamic groups add and remove access based on user attributes.",
      es: {
        topic: "Protección y gobernanza",
        q: "Cuando un empleado pasa de Ventas a Finanzas, sus pertenencias a grupos y roles de aplicaciones deben cambiar automáticamente según el atributo de departamento. ¿Qué debe usar?",
        options: ["Directivas de asignación automática de la administración de derechos o grupos dinámicos", "Un pase de acceso temporal", "Una lista personalizada de contraseñas prohibidas", "Microsoft Entra Verified ID"],
        explain: "Las directivas de asignación automática y los grupos dinámicos agregan y quitan acceso según los atributos del usuario."
      }
    },
    {
      type: "dropdown",
      topic: "Authentication",
      q: "Complete the statement about authentication methods.",
      parts: [
        "Voice calls can be used ",
        { options: ["only as a secondary factor", "only as a primary factor", "as primary or secondary"], answer: 0 },
        ", while a Temporary Access Pass can be used ",
        { options: ["as primary or secondary", "only for SSPR", "only by guests"], answer: 0 },
        "."
      ],
      explain: "Voice calls are secondary only (MFA and SSPR); TAP can be a primary method and also satisfy MFA.",
      es: {
        topic: "Autenticación",
        q: "Complete la afirmación sobre los métodos de autenticación.",
        parts: [
          "Las llamadas de voz se pueden usar ",
          { options: ["solo como factor secundario", "solo como factor principal", "como principal o secundario"] },
          ", mientras que un pase de acceso temporal se puede usar ",
          { options: ["como principal o secundario", "solo para SSPR", "solo por invitados"] },
          "."
        ],
        explain: "Las llamadas de voz son solo secundarias (MFA y SSPR); el TAP puede ser método principal y también satisfacer MFA."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Access management", s: "Teams and SharePoint use Microsoft Entra roles for administrative access, while Exchange and Intune have their own RBAC systems.", answer: true, explain: "Entra also includes service-specific roles for those services." },
        { topic: "Protection and governance", s: "In PIM, an active assignment requires the member to activate the role before using it.", answer: false, explain: "Eligible assignments require activation; active ones don't." },
        { topic: "Microsoft Entra ID and identity types", s: "An external tenant configuration is meant for apps published to consumers or business customers.", answer: true, explain: "Workforce tenants are for employees and internal apps." }
      ],
      es: {
        statements: [
          { topic: "Administración de acceso", s: "Teams y SharePoint usan roles de Microsoft Entra para el acceso administrativo, mientras que Exchange e Intune tienen sus propios sistemas de RBAC.", explain: "Entra también incluye roles específicos para esos servicios." },
          { topic: "Protección y gobernanza", s: "En PIM, una asignación activa exige que el miembro active el rol antes de usarlo.", explain: "Las asignaciones aptas requieren activación; las activas no." },
          { topic: "Microsoft Entra ID y tipos de identidad", s: "Una configuración de inquilino externo está pensada para aplicaciones publicadas para consumidores o clientes empresariales.", explain: "Los inquilinos de personal son para empleados y aplicaciones internas." }
        ]
      }
    },
    {
      type: "single",
      topic: "Protection and governance",
      q: "A security team wants an AI agent to review Conditional Access policies daily and flag new users and apps not covered by any policy. What should it turn on?",
      options: ["The Conditional Access Optimization Agent", "Security defaults", "The Identity secure score", "A multi-stage access review"],
      answer: 0,
      explain: "This Microsoft Entra agent scans the tenant every 24 hours against best practices and Zero Trust and suggests next steps.",
      es: {
        topic: "Protección y gobernanza",
        q: "Un equipo de seguridad quiere que un agente de IA revise las directivas de acceso condicional a diario y señale usuarios y aplicaciones nuevos sin directiva. ¿Qué debe activar?",
        options: ["El agente de optimización del acceso condicional", "Los valores predeterminados de seguridad", "La puntuación de seguridad de la identidad", "Una revisión de acceso de varias fases"],
        explain: "Este agente de Microsoft Entra examina el inquilino cada 24 horas según los procedimientos recomendados y la Confianza cero, y sugiere próximos pasos."
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra ID and identity types",
      q: "Which Microsoft Entra product lets a company give customers self-service sign-up and social sign-in to its consumer app?",
      options: ["Microsoft Entra External ID", "Microsoft Entra Private Access", "Microsoft Entra ID Governance", "Microsoft Entra Workload ID"],
      answer: 0,
      explain: "External ID provides CIAM in an external tenant, including self-service registration and social sign-in.",
      es: {
        topic: "Microsoft Entra ID y tipos de identidad",
        q: "¿Qué producto de Microsoft Entra permite que una empresa ofrezca a sus clientes registro de autoservicio e inicio de sesión social en su aplicación para consumidores?",
        options: ["Microsoft Entra External ID", "Microsoft Entra Private Access", "Microsoft Entra ID Governance", "Microsoft Entra Workload ID"],
        explain: "External ID ofrece CIAM en un inquilino externo, incluido el registro de autoservicio y el inicio de sesión social."
      }
    },
    {
      type: "single",
      topic: "Access management",
      q: "Location-based Conditional Access must keep working accurately even though users' traffic now goes through the Global Secure Access proxy. Which feature ensures this?",
      options: ["Source IP restoration", "TLS inspection", "Quick Access", "Custom roles"],
      answer: 0,
      explain: "Source IP restoration puts the original user IP in Entra sign-in logs so location policies and risk detections stay accurate.",
      es: {
        topic: "Administración de acceso",
        q: "El acceso condicional basado en la ubicación debe seguir funcionando con precisión aunque el tráfico de los usuarios ahora pase por el proxy del acceso seguro global. ¿Qué característica lo asegura?",
        options: ["La restauración de la IP de origen", "La inspección de TLS", "El acceso rápido", "Los roles personalizados"],
        explain: "La restauración de la IP de origen pone la IP original del usuario en los registros de inicio de sesión de Entra para que las directivas de ubicación y las detecciones de riesgo sigan siendo precisas."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Authentication", s: "The global banned password list is applied automatically to all users in a tenant.", answer: true, explain: "There's nothing to enable, and it can't be disabled." },
        { topic: "Protection and governance", s: "Microsoft Entra ID Protection risk detections can be exported to a SIEM.", answer: true, explain: "Through Microsoft Graph APIs, Log Analytics, storage or Event Hubs." },
        { topic: "Access management", s: "Custom Microsoft Entra roles can include permissions that no built-in role has.", answer: false, explain: "Custom roles choose from the same preset list of permissions used by built-in roles." }
      ],
      es: {
        statements: [
          { topic: "Autenticación", s: "La lista global de contraseñas prohibidas se aplica automáticamente a todos los usuarios de un inquilino.", explain: "No hay que habilitar nada y no se puede deshabilitar." },
          { topic: "Protección y gobernanza", s: "Las detecciones de riesgo de Microsoft Entra ID Protection se pueden exportar a un SIEM.", explain: "Mediante las API de Microsoft Graph, Log Analytics, almacenamiento o Event Hubs." },
          { topic: "Administración de acceso", s: "Los roles personalizados de Microsoft Entra pueden incluir permisos que ningún rol integrado tiene.", explain: "Los roles personalizados eligen de la misma lista predefinida de permisos que usan los roles integrados." }
        ]
      }
    },
    {
      type: "single",
      topic: "Microsoft Entra ID and identity types",
      q: "Several AI agents of the same type need consistent policies, and the organization wants one place that holds the credentials used to create them. What should it define?",
      options: ["An agent identity blueprint", "A Microsoft 365 group", "A user-assigned managed identity per agent", "A guest user"],
      answer: 0,
      explain: "A blueprint defines a class of agent, holds the credentials and lets administrators apply policies to all agents created from it.",
      es: {
        topic: "Microsoft Entra ID y tipos de identidad",
        q: "Varios agentes de IA del mismo tipo necesitan directivas coherentes, y la organización quiere un único lugar que guarde las credenciales usadas para crearlos. ¿Qué debe definir?",
        options: ["Un plano técnico de identidad de agente", "Un grupo de Microsoft 365", "Una identidad administrada asignada por el usuario para cada agente", "Un usuario invitado"],
        explain: "Un plano técnico define una clase de agente, guarda las credenciales y permite aplicar directivas a todos los agentes creados a partir de él."
      }
    },
    {
      type: "multi",
      topic: "Access management",
      q: "Which two are features of Microsoft Entra Internet Access for Microsoft Services?",
      options: ["Compliant network check", "Universal tenant restrictions", "Quick Access to private apps", "Privileged role activation", "Access packages"],
      answers: [0, 1],
      explain: "It includes compliant network check, universal tenant restrictions, source IP restoration and enriched Microsoft 365 logs.",
      es: {
        topic: "Administración de acceso",
        q: "¿Cuáles son dos características de Microsoft Entra Internet Access para Microsoft Services?",
        options: ["La comprobación de red compatible", "Las restricciones universales de inquilinos", "El acceso rápido a aplicaciones privadas", "La activación de roles con privilegios", "Los paquetes de acceso"],
        explain: "Incluye la comprobación de red compatible, las restricciones universales de inquilinos, la restauración de la IP de origen y los registros enriquecidos de Microsoft 365."
      }
    },
    {
      type: "single",
      topic: "Authentication",
      q: "A company already uses Duo Security for MFA and wants users to satisfy Microsoft Entra MFA with it. What should it configure?",
      options: ["An external authentication method", "Authenticator Lite", "A Temporary Access Pass", "Password writeback"],
      answer: 0,
      explain: "External authentication methods integrate a non-Microsoft MFA provider so users can satisfy MFA with the existing solution.",
      es: {
        topic: "Autenticación",
        q: "Una empresa ya usa Duo Security para MFA y quiere que los usuarios satisfagan la MFA de Microsoft Entra con esa solución. ¿Qué debe configurar?",
        options: ["Un método de autenticación externo", "Authenticator Lite", "Un pase de acceso temporal", "La escritura diferida de contraseñas"],
        explain: "Los métodos de autenticación externos integran un proveedor de MFA ajeno a Microsoft para que los usuarios cumplan la MFA con la solución existente."
      }
    }
  ]
});
