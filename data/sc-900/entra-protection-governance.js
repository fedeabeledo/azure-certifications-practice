// SC-900 > Introduction to Microsoft Entra > Describe the identity protection and governance capabilities of Microsoft Entra
Catalog.module("sc-900", {
  id: "entra-protection-governance",
  name: "Describe the identity protection and governance capabilities of Microsoft Entra",
  es: { name: "Descripción de las funcionalidades de gobernanza y protección de identidades de Microsoft Entra" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Privileged Identity Management",
        q: "Administrators should hold the Exchange Administrator role only for a few hours when needed, with approval and a justification. Which Microsoft Entra service provides this?",
        options: ["Privileged Identity Management", "Entitlement management", "Microsoft Entra ID Protection", "Access reviews"],
        answer: 0,
        explain: "PIM provides just-in-time, time-bound, approval-based role activation that requires justification and MFA.",
        es: {
          topic: "Privileged Identity Management",
          q: "Los administradores deben tener el rol Administrador de Exchange solo por unas horas cuando lo necesiten, con aprobación y una justificación. ¿Qué servicio de Microsoft Entra lo ofrece?",
          options: ["Privileged Identity Management", "La administración de derechos", "Microsoft Entra ID Protection", "Las revisiones de acceso"],
          explain: "PIM ofrece activación de roles justo a tiempo, con límite de tiempo y basada en aprobación, que exige justificación y MFA."
        }
      },
      {
        type: "single",
        topic: "Entitlement management",
        q: "A project team needs one requestable bundle that includes a Teams team, a SharePoint site and an enterprise app, with approval and automatic expiration. What should you create?",
        options: ["An access package", "A dynamic group", "A custom role", "A terms of use policy"],
        answer: 0,
        explain: "Access packages in entitlement management bundle resources and define who can request, who approves and when access expires.",
        es: {
          topic: "Administración de derechos",
          q: "Un equipo de proyecto necesita un único paquete que se pueda solicitar e incluya un equipo de Teams, un sitio de SharePoint y una aplicación empresarial, con aprobación y vencimiento automático. ¿Qué debe crear?",
          options: ["Un paquete de acceso", "Un grupo dinámico", "Un rol personalizado", "Una directiva de términos de uso"],
          explain: "Los paquetes de acceso de la administración de derechos agrupan recursos y definen quién puede solicitarlos, quién aprueba y cuándo vence el acceso."
        }
      },
      {
        type: "match",
        topic: "Microsoft Entra ID Protection",
        q: "Match each example to the type of risk in Microsoft Entra ID Protection.",
        values: ["Sign-in risk", "User risk"],
        targets: [
          { t: "Atypical travel between two distant locations", answer: 0 },
          { t: "Leaked credentials found online", answer: 1 },
          { t: "Sign-in from an anonymous IP address", answer: 0 },
          { t: "User reported suspicious activity", answer: 1 }
        ],
        explain: "Sign-in risk is the probability that an authentication request isn't authorized by the owner; user risk is the probability that the account is compromised.",
        es: {
          topic: "Microsoft Entra ID Protection",
          q: "Relacione cada ejemplo con el tipo de riesgo de Microsoft Entra ID Protection.",
          values: ["Riesgo de inicio de sesión", "Riesgo de usuario"],
          targets: [
            { t: "Viaje atípico entre dos ubicaciones lejanas" },
            { t: "Credenciales filtradas encontradas en internet" },
            { t: "Inicio de sesión desde una dirección IP anónima" },
            { t: "El usuario informó actividad sospechosa" }
          ],
          explain: "El riesgo de inicio de sesión es la probabilidad de que una solicitud de autenticación no la haya autorizado el propietario; el riesgo de usuario es la probabilidad de que la cuenta esté comprometida."
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra Verified ID",
        q: "A user's identity was confirmed during account recovery with a government ID and Face Check. What does the user receive to sign in and re-register authentication methods?",
        options: ["A Temporary Access Pass", "A new security question", "A permanent Global administrator role", "A custom banned password"],
        answer: 0,
        explain: "After verification, a verifiable credential goes into Authenticator and the user gets a TAP to sign in and re-register methods.",
        es: {
          topic: "Microsoft Entra Verified ID",
          q: "La identidad de un usuario se confirmó en la recuperación de cuentas con un documento oficial y Face Check. ¿Qué recibe el usuario para iniciar sesión y volver a registrar sus métodos de autenticación?",
          options: ["Un pase de acceso temporal", "Una nueva pregunta de seguridad", "El rol de administrador global de forma permanente", "Una contraseña prohibida personalizada"],
          explain: "Después de la verificación, se emite una credencial verificable en Authenticator y el usuario recibe un TAP para iniciar sesión y volver a registrar métodos."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Access reviews", s: "Access rights are changed while an access review is still in progress.", answer: false, explain: "No access rights change until the review is finished, though it can be stopped early." },
          { topic: "Microsoft Entra ID Protection", s: "ID Protection flags sign-ins that use incorrect credentials as risky.", answer: false, explain: "It only generates detections when correct credentials are used." },
          { topic: "Microsoft Entra ID Governance", s: "If an agent identity's sponsor leaves the organization, sponsorship transfers automatically to the sponsor's manager.", answer: true, explain: "This keeps continuous human oversight of agents." }
        ],
        es: {
          statements: [
            { topic: "Revisiones de acceso", s: "Los derechos de acceso cambian mientras una revisión de acceso sigue en curso.", explain: "No cambia ningún derecho hasta que termina la revisión, aunque se puede detener antes." },
            { topic: "Microsoft Entra ID Protection", s: "ID Protection marca como riesgosos los inicios de sesión con credenciales incorrectas.", explain: "Solo genera detecciones cuando se usan credenciales correctas." },
            { topic: "Gobernanza de Microsoft Entra ID", s: "Si el patrocinador de una identidad de agente deja la organización, el patrocinio pasa automáticamente a su responsable.", explain: "Así se mantiene la supervisión humana continua de los agentes." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Microsoft Entra ID Governance",
        q: "Complete the statement about the identity lifecycle.",
        parts: [
          "Many organizations model the identity lifecycle as ",
          { options: ["join, move and leave", "plan, build and run", "detect, investigate and remediate"], answer: 0 },
          ", and ID Governance can automate it with ",
          { options: ["lifecycle workflows", "authentication strengths", "Global Secure Access"], answer: 0 },
          " triggered by events like a start date."
        ],
        explain: "Lifecycle workflows run tasks at key events such as before a new employee starts, when they change status and when they leave.",
        es: {
          topic: "Gobernanza de Microsoft Entra ID",
          q: "Complete la afirmación sobre el ciclo de vida de la identidad.",
          parts: [
            "Muchas organizaciones modelan el ciclo de vida de la identidad como ",
            { options: ["incorporación, cambio y salida", "planificar, construir y operar", "detectar, investigar y corregir"] },
            ", y ID Governance puede automatizarlo con ",
            { options: ["flujos de trabajo de ciclo de vida", "niveles de autenticación", "el acceso seguro global"] },
            " que se activan con eventos como la fecha de ingreso."
          ],
          explain: "Los flujos de trabajo de ciclo de vida ejecutan tareas en momentos clave, como antes del ingreso de un empleado, cuando cambia de situación y cuando se va."
        }
      },
      {
        type: "multi",
        topic: "Microsoft Entra Security Copilot integration",
        q: "Which two are Microsoft Entra agents available through Security Copilot?",
        options: ["Conditional Access Optimization Agent", "Identity Risk Management Agent", "Password Writeback Agent", "Azure Cost Agent", "Teams Meeting Agent"],
        answers: [0, 1],
        explain: "The Conditional Access Optimization Agent recommends policy improvements; the Identity Risk Management Agent (preview) helps investigate ID Protection risks.",
        es: {
          topic: "Integración de Microsoft Entra con Security Copilot",
          q: "¿Cuáles son dos agentes de Microsoft Entra disponibles mediante Security Copilot?",
          options: ["Agente de optimización del acceso condicional", "Agente de administración de riesgos de identidad", "Agente de escritura diferida de contraseñas", "Agente de costos de Azure", "Agente de reuniones de Teams"],
          explain: "El agente de optimización del acceso condicional recomienda mejoras en las directivas; el agente de administración de riesgos de identidad (versión preliminar) ayuda a investigar riesgos de ID Protection."
        }
      },
      {
        type: "single",
        topic: "Access reviews",
        q: "Compliance requires that a manager, then the app owner, then an auditor attest in sequence to who still needs access to a finance app. What should you configure?",
        options: ["A multi-stage access review", "A single PIM activation", "A dynamic group", "Terms of use"],
        answer: 0,
        explain: "Multi-stage access reviews support up to three stages with different reviewers in a set sequence.",
        es: {
          topic: "Revisiones de acceso",
          q: "El cumplimiento exige que un responsable, luego el propietario de la aplicación y luego un auditor certifiquen en secuencia quién sigue necesitando acceso a una aplicación financiera. ¿Qué debe configurar?",
          options: ["Una revisión de acceso de varias fases", "Una única activación en PIM", "Un grupo dinámico", "Términos de uso"],
          explain: "Las revisiones de acceso de varias fases admiten hasta tres fases con distintos revisores en una secuencia definida."
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra Verified ID",
        q: "In a verifiable credential interaction, which party requests proof and checks that the claims satisfy its requirements?",
        options: ["The verifier", "The issuer", "The user", "The verifiable data registry"],
        answer: 0,
        explain: "The issuer attests and signs credentials, the user stores and presents them and the verifier requests and validates proof.",
        es: {
          topic: "Microsoft Entra Verified ID",
          q: "En una interacción con credenciales verificables, ¿qué parte solicita la prueba y comprueba que las notificaciones cumplan sus requisitos?",
          options: ["El verificador", "El emisor", "El usuario", "El registro de datos verificable"],
          explain: "El emisor certifica y firma las credenciales, el usuario las guarda y las presenta, y el verificador solicita y valida la prueba."
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra ID Protection",
        q: "A company wants users with medium user risk to be automatically remediated by completing a secure password reset. What should it enable?",
        options: ["A risk-based Conditional Access policy", "A custom banned password list", "Security defaults only", "An access package"],
        answer: 0,
        explain: "Risk-based Conditional Access can require MFA, a strong method or a secure password reset; completing it remediates the risk automatically.",
        es: {
          topic: "Microsoft Entra ID Protection",
          q: "Una empresa quiere que los usuarios con riesgo de usuario medio se corrijan automáticamente completando un restablecimiento seguro de contraseña. ¿Qué debe habilitar?",
          options: ["Una directiva de acceso condicional basada en riesgo", "Una lista personalizada de contraseñas prohibidas", "Solo los valores predeterminados de seguridad", "Un paquete de acceso"],
          explain: "El acceso condicional basado en riesgo puede exigir MFA, un método seguro o un restablecimiento seguro de contraseña; completarlo corrige el riesgo automáticamente."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Privileged Identity Management", s: "PIM audit history shows role assignments and activations from the past 30 days.", answer: true, explain: "It covers all privileged roles." },
          { topic: "Entitlement management", s: "Terms of use are enforced through Conditional Access policies.", answer: true, explain: "Conditional Access requires users to accept the terms before accessing an app." },
          { topic: "Entitlement management", s: "When an external user's last access package assignment expires, their B2B account can be removed automatically.", answer: true, explain: "This keeps external access from lingering." }
        ],
        es: {
          statements: [
            { topic: "Privileged Identity Management", s: "El historial de auditoría de PIM muestra las asignaciones y activaciones de roles de los últimos 30 días.", explain: "Abarca todos los roles con privilegios." },
            { topic: "Administración de derechos", s: "Los términos de uso se aplican mediante directivas de acceso condicional.", explain: "El acceso condicional exige que los usuarios acepten los términos antes de acceder a una aplicación." },
            { topic: "Administración de derechos", s: "Cuando vence la última asignación de paquete de acceso de un usuario externo, su cuenta B2B se puede quitar automáticamente.", explain: "Así el acceso externo no queda pendiente." }
          ]
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra Security Copilot integration",
        q: "An analyst opens the risky users report in the Microsoft Entra admin center and asks for a summary of one user's risk. Which Security Copilot experience is this?",
        options: ["The embedded experience", "The standalone experience", "The Security Store", "A lifecycle workflow"],
        answer: 0,
        explain: "Embedded experiences build Copilot into Entra admin center workflows, such as summarizing risky users. The standalone experience is the Security Copilot portal.",
        es: {
          topic: "Integración de Microsoft Entra con Security Copilot",
          q: "Un analista abre el informe de usuarios riesgosos en el Centro de administración de Microsoft Entra y pide un resumen del riesgo de un usuario. ¿Qué experiencia de Security Copilot es?",
          options: ["La experiencia integrada", "La experiencia independiente", "La Security Store", "Un flujo de trabajo de ciclo de vida"],
          explain: "Las experiencias integradas incorporan Copilot en los flujos del Centro de administración de Entra, como resumir usuarios riesgosos. La experiencia independiente es el portal de Security Copilot."
        }
      }
    ]
  },
  units: [
    {
      id: "id-governance",
      name: "Describe Microsoft Entra ID Governance",
      es: { name: "Descripción de la gobernanza de Microsoft Entra ID" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/2-describe-identity-governance",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A company wants new hires to have accounts in Microsoft Entra ID and Active Directory created automatically from Workday so they're productive on day one. What should it use?",
            options: ["Inbound provisioning from the HR source", "Access reviews", "Privileged Identity Management", "Terms of use"],
            answer: 0,
            explain: "Inbound provisioning from HR sources maintains user identities in Entra ID and AD automatically.",
            es: {
              q: "Una empresa quiere que las cuentas de los nuevos empleados en Microsoft Entra ID y Active Directory se creen automáticamente desde Workday para que sean productivos desde el primer día. ¿Qué debe usar?",
              options: ["El aprovisionamiento entrante desde el origen de RR. HH.", "Las revisiones de acceso", "Privileged Identity Management", "Los términos de uso"],
              explain: "El aprovisionamiento entrante desde orígenes de RR. HH. mantiene automáticamente las identidades de usuario en Entra ID y AD."
            }
          },
          {
            type: "match",
            q: "Match each requirement to the ID Governance scenario.",
            values: ["Identity lifecycle", "Access lifecycle", "Privileged access lifecycle"],
            targets: [
              { t: "Disable a user's identity when they leave the company", answer: 0 },
              { t: "Add users to groups automatically when their department attribute changes", answer: 1 },
              { t: "Govern who holds administrative rights and for how long", answer: 2 }
            ],
            explain: "Identity lifecycle covers join, move and leave; access lifecycle manages access rights over time; privileged access lifecycle secures admin rights with PIM.",
            es: {
              q: "Relacione cada requisito con el escenario de ID Governance.",
              values: ["Ciclo de vida de la identidad", "Ciclo de vida del acceso", "Ciclo de vida del acceso con privilegios"],
              targets: [
                { t: "Deshabilitar la identidad de un usuario cuando deja la empresa" },
                { t: "Agregar usuarios a grupos automáticamente cuando cambia su atributo de departamento" },
                { t: "Gobernar quién tiene derechos administrativos y por cuánto tiempo" }
              ],
              explain: "El ciclo de vida de la identidad cubre incorporación, cambio y salida; el del acceso administra los derechos a lo largo del tiempo; el del acceso con privilegios protege los derechos de administrador con PIM."
            }
          },
          {
            type: "multi",
            q: "Which two questions does Microsoft Entra ID Governance help organizations answer?",
            options: [
              "Which identities should have access to which resources?",
              "Can auditors verify that the controls are working effectively?",
              "Which VM size is cheapest for a workload?",
              "Which Azure region has the lowest latency?",
              "How should documents be labeled for sensitivity?"
            ],
            answers: [0, 1],
            explain: "The four questions cover who should have access, what they do with it, whether controls exist and whether auditors can verify them.",
            es: {
              q: "¿Cuáles son dos preguntas que Microsoft Entra ID Governance ayuda a responder?",
              options: [
                "¿Qué identidades deben tener acceso a qué recursos?",
                "¿Pueden los auditores verificar que los controles funcionan de forma eficaz?",
                "¿Qué tamaño de máquina virtual es el más barato para una carga de trabajo?",
                "¿Qué región de Azure tiene la menor latencia?",
                "¿Cómo deben etiquetarse los documentos según su confidencialidad?"
              ],
              explain: "Las cuatro preguntas abarcan quién debe tener acceso, qué hace con él, si hay controles y si los auditores pueden verificarlos."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about dynamic groups.",
            parts: [
              "Dynamic groups use ",
              { options: ["attribute-based rules", "manual approvals", "access packages"], answer: 0 },
              " to determine membership, and when a user's attributes change the system ",
              { options: ["evaluates all dynamic group rules in the directory", "waits for the next access review", "sends the change to PIM"], answer: 0 },
              "."
            ],
            explain: "When an attribute changes, all dynamic group rules are re-evaluated to add or remove the user.",
            es: {
              q: "Complete la afirmación sobre los grupos dinámicos.",
              parts: [
                "Los grupos dinámicos usan ",
                { options: ["reglas basadas en atributos", "aprobaciones manuales", "paquetes de acceso"] },
                " para determinar la pertenencia, y cuando cambian los atributos de un usuario el sistema ",
                { options: ["evalúa todas las reglas de grupos dinámicos del directorio", "espera a la próxima revisión de acceso", "envía el cambio a PIM"] },
                "."
              ],
              explain: "Cuando cambia un atributo, se vuelven a evaluar todas las reglas de grupos dinámicos para agregar o quitar al usuario."
            }
          },
          {
            type: "single",
            q: "Which ID Governance capability creates, updates and removes user accounts in other applications through connectors?",
            options: ["User provisioning", "Terms of use", "Identity secure score", "Authentication strengths"],
            answer: 0,
            explain: "User provisioning has connectors to hundreds of cloud and on-premises applications.",
            es: {
              q: "¿Qué capacidad de ID Governance crea, actualiza y quita cuentas de usuario en otras aplicaciones mediante conectores?",
              options: ["El aprovisionamiento de usuarios", "Los términos de uso", "La puntuación de seguridad de la identidad", "Los niveles de autenticación"],
              explain: "El aprovisionamiento de usuarios tiene conectores para cientos de aplicaciones en la nube y locales."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Every agent identity requires a human sponsor accountable for it.", answer: true, explain: "The sponsor handles purpose, lifecycle decisions and access reviews." },
              { s: "ID Governance only applies to cloud applications, not on-premises ones.", answer: false, explain: "It covers access across services and apps both on-premises and in clouds." },
              { s: "ID Governance scenarios apply to employees, business partners and vendors.", answer: true, explain: "All three are in scope." }
            ],
            es: {
              statements: [
                { s: "Toda identidad de agente requiere un patrocinador humano responsable.", explain: "El patrocinador se ocupa del propósito, las decisiones del ciclo de vida y las revisiones de acceso." },
                { s: "ID Governance solo se aplica a aplicaciones en la nube, no a las locales.", explain: "Abarca el acceso a servicios y aplicaciones tanto locales como en la nube." },
                { s: "Los escenarios de ID Governance se aplican a empleados, socios empresariales y proveedores.", explain: "Los tres están dentro del alcance." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "access-reviews",
      name: "Describe access reviews",
      es: { name: "Descripción de las revisiones de acceso" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/3-describe-what-entitlement-management-access-reviews",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A group gives guests access to sensitive content. Who should be asked to confirm that the guests still have a legitimate business need?",
            options: ["The group owner, through an access review", "Every guest's home tenant administrator", "Microsoft support", "Nobody; guests never lose access"],
            answer: 0,
            explain: "Access reviews can ask group owners to confirm they still need guests in their groups.",
            es: {
              q: "Un grupo da a invitados acceso a contenido sensible. ¿A quién se le debe pedir que confirme que los invitados siguen teniendo una necesidad empresarial legítima?",
              options: ["Al propietario del grupo, mediante una revisión de acceso", "Al administrador del inquilino de origen de cada invitado", "Al soporte de Microsoft", "A nadie; los invitados nunca pierden el acceso"],
              explain: "Las revisiones de acceso pueden pedir a los propietarios de grupos que confirmen si siguen necesitando a los invitados."
            }
          },
          {
            type: "single",
            q: "An access review finishes for a dynamic group. How are the removal decisions applied?",
            options: [
              "They must be applied directly to the group",
              "They're auto-applied like any other group",
              "PIM applies them automatically",
              "They're discarded"
            ],
            answer: 0,
            explain: "Results can be auto-applied except for dynamic groups or groups that originate on-premises, which must be changed directly.",
            es: {
              q: "Termina una revisión de acceso de un grupo dinámico. ¿Cómo se aplican las decisiones de eliminación?",
              options: [
                "Se deben aplicar directamente en el grupo",
                "Se aplican automáticamente como en cualquier otro grupo",
                "PIM las aplica automáticamente",
                "Se descartan"
              ],
              explain: "Los resultados se pueden aplicar automáticamente, salvo en grupos dinámicos o que se originan en el entorno local, que se deben cambiar directamente."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about access reviews.",
            parts: [
              "Multi-stage access reviews support up to ",
              { options: ["three", "five", "ten"], answer: 0 },
              " stages, and recurring reviews can run at frequencies such as ",
              { options: ["weekly, monthly, quarterly or annually", "only once per tenant", "every minute"], answer: 0 },
              "."
            ],
            explain: "Up to three stages are supported, and recurrence can be weekly, monthly, quarterly or annually.",
            es: {
              q: "Complete la afirmación sobre las revisiones de acceso.",
              parts: [
                "Las revisiones de acceso de varias fases admiten hasta ",
                { options: ["tres", "cinco", "diez"] },
                " fases, y las revisiones periódicas se pueden ejecutar con frecuencias como ",
                { options: ["semanal, mensual, trimestral o anual", "una sola vez por inquilino", "cada minuto"] },
                "."
              ],
              explain: "Se admiten hasta tres fases, y la periodicidad puede ser semanal, mensual, trimestral o anual."
            }
          },
          {
            type: "multi",
            q: "Which two signals do AI-powered recommendations in access reviews analyze?",
            options: ["User sign-in activity", "User-to-group affiliation", "The user's password length", "The VM SKU in use", "The user's sensitivity labels"],
            answers: [0, 1],
            explain: "Smart recommendations analyze sign-in activity, user-to-group affiliation and other context; peer outliers may need more scrutiny.",
            es: {
              q: "¿Cuáles son dos señales que analizan las recomendaciones con IA de las revisiones de acceso?",
              options: ["La actividad de inicio de sesión del usuario", "La afinidad entre usuario y grupo", "La longitud de la contraseña del usuario", "La SKU de máquina virtual en uso", "Las etiquetas de confidencialidad del usuario"],
              explain: "Las recomendaciones inteligentes analizan la actividad de inicio de sesión, la afinidad usuario-grupo y otros datos de contexto; los usuarios atípicos respecto de sus pares pueden requerir más análisis."
            }
          },
          {
            type: "single",
            q: "Where do you recertify users' assignments to Microsoft Entra roles or Azure resource roles?",
            options: ["In the Privileged Identity Management experience", "In the Global Secure Access dashboard", "In the custom banned password list", "In Microsoft Entra Connect"],
            answer: 0,
            explain: "Role assignment recertification for Entra and Azure resource roles happens in the PIM experience.",
            es: {
              q: "¿Dónde se recertifican las asignaciones de usuarios a roles de Microsoft Entra o roles de recursos de Azure?",
              options: ["En la experiencia de Privileged Identity Management", "En el panel del acceso seguro global", "En la lista personalizada de contraseñas prohibidas", "En Microsoft Entra Connect"],
              explain: "La recertificación de asignaciones de roles de Entra y de recursos de Azure se hace en la experiencia de PIM."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Access reviews can ask users themselves to attest to their own need for access.", answer: true, explain: "Users or a decision maker can be reviewers." },
              { s: "An administrator can stop an access review before its scheduled end.", answer: true, explain: "Reviews can be stopped early." },
              { s: "Access reviews can only cover group memberships, not app assignments or role assignments.", answer: false, explain: "They cover group memberships, enterprise app access and role assignments." }
            ],
            es: {
              statements: [
                { s: "Las revisiones de acceso pueden pedir a los propios usuarios que certifiquen su necesidad de acceso.", explain: "Los revisores pueden ser los usuarios o un responsable de decisiones." },
                { s: "Un administrador puede detener una revisión de acceso antes de su fin programado.", explain: "Las revisiones se pueden detener antes de tiempo." },
                { s: "Las revisiones de acceso solo abarcan pertenencias a grupos, no asignaciones de aplicaciones ni de roles.", explain: "Abarcan pertenencias a grupos, acceso a aplicaciones empresariales y asignaciones de roles." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "entitlement-management",
      name: "Describe entitlement management",
      es: { name: "Descripción de la administración de derechos" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/3a-describe-entitlement-management-terms-use",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A partner who isn't in your directory requests an access package and is approved. What happens?",
            options: [
              "They're automatically invited into your directory and assigned access",
              "An administrator must manually create a member account",
              "The request fails because only internal users can request packages",
              "They get access without an account in your directory"
            ],
            answer: 0,
            explain: "Approved external requesters are automatically invited and assigned access.",
            es: {
              q: "Un socio que no está en su directorio solicita un paquete de acceso y se aprueba. ¿Qué ocurre?",
              options: [
                "Se lo invita automáticamente a su directorio y se le asigna el acceso",
                "Un administrador debe crear manualmente una cuenta de miembro",
                "La solicitud falla porque solo los usuarios internos pueden solicitar paquetes",
                "Obtiene acceso sin cuenta en su directorio"
              ],
              explain: "Los solicitantes externos aprobados se invitan automáticamente y se les asigna el acceso."
            }
          },
          {
            type: "multi",
            q: "Which two resources can an access package include?",
            options: ["Membership of Microsoft 365 Groups", "SharePoint Online sites", "Azure virtual networks", "Privileged role activation in PIM", "Banned password terms"],
            answers: [0, 1],
            explain: "Access packages can include security groups, Microsoft 365 Groups, enterprise apps and SharePoint Online sites.",
            es: {
              q: "¿Cuáles son dos recursos que puede incluir un paquete de acceso?",
              options: ["Pertenencia a grupos de Microsoft 365", "Sitios de SharePoint Online", "Redes virtuales de Azure", "Activación de roles con privilegios en PIM", "Términos de contraseñas prohibidas"],
              explain: "Los paquetes de acceso pueden incluir grupos de seguridad, grupos de Microsoft 365, aplicaciones empresariales y sitios de SharePoint Online."
            }
          },
          {
            type: "single",
            q: "Legal requires every guest to accept a contract PDF before opening a sensitive app. How is this enforced?",
            options: ["Terms of use required by a Conditional Access policy", "An access review", "PIM approval", "ID Protection user risk"],
            answer: 0,
            explain: "Terms of use are presented as PDFs and enforced with Conditional Access; admins can see who accepted or declined.",
            es: {
              q: "El área legal exige que cada invitado acepte un contrato en PDF antes de abrir una aplicación sensible. ¿Cómo se aplica?",
              options: ["Con términos de uso exigidos por una directiva de acceso condicional", "Con una revisión de acceso", "Con aprobación de PIM", "Con el riesgo de usuario de ID Protection"],
              explain: "Los términos de uso se presentan en PDF y se aplican con acceso condicional; los administradores ven quién aceptó y quién rechazó."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about entitlement management.",
            parts: [
              "Creation of access packages can be delegated to ",
              { options: ["nonadministrators", "only global administrators", "external guests"], answer: 0 },
              ", who define policies about who can request access, who must approve and when access ",
              { options: ["expires", "is encrypted", "is replicated"], answer: 0 },
              "."
            ],
            explain: "Delegated access package managers define request, approval and expiration rules.",
            es: {
              q: "Complete la afirmación sobre la administración de derechos.",
              parts: [
                "La creación de paquetes de acceso se puede delegar en ",
                { options: ["usuarios que no son administradores", "solo administradores globales", "invitados externos"] },
                ", que definen directivas sobre quién puede solicitar acceso, quién debe aprobarlo y cuándo ",
                { options: ["vence", "se cifra", "se replica"] },
                "."
              ],
              explain: "Los administradores delegados de paquetes de acceso definen las reglas de solicitud, aprobación y vencimiento."
            }
          },
          {
            type: "match",
            q: "Match each challenge to the entitlement management capability that addresses it.",
            values: ["Access packages with delegated policies", "Automatic expiration", "External user management"],
            targets: [
              { t: "Users don't know what to request or who approves it", answer: 0 },
              { t: "Users keep access longer than the business needs", answer: 1 },
              { t: "Nobody remembers to manage partners' access consistently", answer: 2 }
            ],
            explain: "Access packages define what to request and who approves; expiration removes stale access; external user management invites and removes B2B accounts.",
            es: {
              q: "Relacione cada problema con la capacidad de la administración de derechos que lo resuelve.",
              values: ["Paquetes de acceso con directivas delegadas", "Vencimiento automático", "Administración de usuarios externos"],
              targets: [
                { t: "Los usuarios no saben qué solicitar ni quién lo aprueba" },
                { t: "Los usuarios conservan el acceso más tiempo del que el negocio necesita" },
                { t: "Nadie se acuerda de administrar el acceso de los socios de forma coherente" }
              ],
              explain: "Los paquetes de acceso definen qué solicitar y quién aprueba; el vencimiento quita el acceso obsoleto; la administración de usuarios externos invita y quita cuentas B2B."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Entitlement management can govern access for AI agent identities as well as humans.", answer: true, explain: "Sponsors make sure agent access lasts only while required." },
              { s: "Terms of use can't be shown on mobile devices.", answer: false, explain: "They can be presented on mobile devices." },
              { s: "Terms of use can be required on a recurring schedule.", answer: true, explain: "This reminds users of regulations." }
            ],
            es: {
              statements: [
                { s: "La administración de derechos puede gobernar el acceso de identidades de agentes de IA además del de personas.", explain: "Los patrocinadores se aseguran de que el acceso de los agentes dure solo lo necesario." },
                { s: "Los términos de uso no se pueden mostrar en dispositivos móviles.", explain: "Se pueden presentar en dispositivos móviles." },
                { s: "Se puede exigir la aceptación de los términos de uso de forma periódica.", explain: "Así se recuerdan las normativas a los usuarios." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "privileged-identity-management",
      name: "Describe the capabilities of Privileged Identity Management",
      es: { name: "Describir las funcionalidades de Privileged Identity Management" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/4-describe-privileged-identity-management",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each PIM characteristic to its description.",
            values: ["Just in time", "Time-bound", "Approval-based", "Auditable"],
            targets: [
              { t: "Privileged access only when needed, not before", answer: 0 },
              { t: "Start and end dates define when access is possible", answer: 1 },
              { t: "Specific approval is required to activate privileges", answer: 2 },
              { t: "A full access history can be downloaded", answer: 3 }
            ],
            explain: "PIM is just in time, time-bound, approval-based, visible and auditable.",
            es: {
              q: "Relacione cada característica de PIM con su descripción.",
              values: ["Justo a tiempo", "Con límite de tiempo", "Basado en aprobación", "Auditable"],
              targets: [
                { t: "Acceso con privilegios solo cuando hace falta, no antes" },
                { t: "Las fechas de inicio y fin definen cuándo se puede acceder" },
                { t: "Se requiere una aprobación específica para activar privilegios" },
                { t: "Se puede descargar un historial completo de acceso" }
              ],
              explain: "PIM es justo a tiempo, con límite de tiempo, basado en aprobación, visible y auditable."
            }
          },
          {
            type: "single",
            q: "A user has an eligible assignment to the Security Administrator role. What must they do before using it?",
            options: ["Activate the role, choosing a duration and giving a reason", "Nothing; eligible assignments are always active", "Ask Microsoft support to enable it", "Reset their password"],
            answer: 0,
            explain: "Eligible members must activate the role within the configured maximum duration and provide a reason; approval may also be required.",
            es: {
              q: "Un usuario tiene una asignación apta al rol Administrador de seguridad. ¿Qué debe hacer antes de usarlo?",
              options: ["Activar el rol eligiendo una duración y dando un motivo", "Nada; las asignaciones aptas siempre están activas", "Pedir al soporte de Microsoft que lo habilite", "Restablecer su contraseña"],
              explain: "Los miembros aptos deben activar el rol dentro de la duración máxima configurada y dar un motivo; también puede requerirse aprobación."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the PIM workflow.",
            parts: [
              "The basic PIM workflow is assign, activate, approve or deny, and ",
              { options: ["extend or renew", "encrypt", "delete"], answer: 0 },
              ". Delegated approvers are notified by ",
              { options: ["email", "SMS only", "a Teams channel only"], answer: 0 },
              " when a request is pending."
            ],
            explain: "Approvers receive email notifications; users can extend an assignment nearing expiration or renew one that expired.",
            es: {
              q: "Complete la afirmación sobre el flujo de trabajo de PIM.",
              parts: [
                "El flujo básico de PIM es asignar, activar, aprobar o denegar, y ",
                { options: ["extender o renovar", "cifrar", "eliminar"] },
                ". Los aprobadores delegados reciben una notificación por ",
                { options: ["correo electrónico", "SMS únicamente", "un canal de Teams únicamente"] },
                " cuando hay una solicitud pendiente."
              ],
              explain: "Los aprobadores reciben notificaciones por correo; los usuarios pueden extender una asignación a punto de vencer o renovar una vencida."
            }
          },
          {
            type: "multi",
            q: "Which two can PIM manage?",
            options: ["Azure roles at management group, subscription, resource group or resource scope", "Just-in-time membership and ownership of groups", "Web content filtering categories", "Custom banned password lists", "Verifiable credential issuance"],
            answers: [0, 1],
            explain: "PIM works with Microsoft Entra roles, Azure roles and PIM for Groups.",
            es: {
              q: "¿Cuáles son dos elementos que puede administrar PIM?",
              options: ["Roles de Azure en el ámbito de grupo de administración, suscripción, grupo de recursos o recurso", "Pertenencia y propiedad justo a tiempo de grupos", "Categorías de filtrado de contenido web", "Listas personalizadas de contraseñas prohibidas", "La emisión de credenciales verificables"],
              explain: "PIM funciona con roles de Microsoft Entra, roles de Azure y PIM para grupos."
            }
          },
          {
            type: "single",
            q: "What's the difference between an eligible and an active assignment in PIM?",
            options: [
              "Eligible requires an action such as activation to use the role; active grants the privileges without any action",
              "Eligible is permanent; active always expires after one hour",
              "Eligible applies only to guests; active applies only to members",
              "There's no difference"
            ],
            answer: 0,
            explain: "Eligible members must activate or request approval; active members already have the privileges.",
            es: {
              q: "¿Cuál es la diferencia entre una asignación apta y una activa en PIM?",
              options: [
                "La apta requiere una acción, como la activación, para usar el rol; la activa concede los privilegios sin ninguna acción",
                "La apta es permanente; la activa siempre vence a la hora",
                "La apta se aplica solo a invitados; la activa solo a miembros",
                "No hay diferencia"
              ],
              explain: "Los miembros aptos deben activar o solicitar aprobación; los activos ya tienen los privilegios."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "PIM enforces multifactor authentication to activate any role.", answer: true, explain: "It also requires justification." },
              { s: "PIM can assign roles to service principals and managed identities.", answer: true, explain: "Roles can be assigned to users, groups, service principals or managed identities." },
              { s: "PIM audit history keeps role activations for the past 365 days.", answer: false, explain: "The audit history shows the past 30 days." }
            ],
            es: {
              statements: [
                { s: "PIM exige autenticación multifactor para activar cualquier rol.", explain: "También exige una justificación." },
                { s: "PIM puede asignar roles a entidades de servicio e identidades administradas.", explain: "Los roles se pueden asignar a usuarios, grupos, entidades de servicio o identidades administradas." },
                { s: "El historial de auditoría de PIM conserva las activaciones de roles de los últimos 365 días.", explain: "El historial de auditoría muestra los últimos 30 días." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "id-protection",
      name: "Describe Microsoft Entra ID Protection",
      es: { name: "Descripción de la Protección de Microsoft Entra ID" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/5-describe-azure",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A user signs in from Buenos Aires and, 20 minutes later, from Tokyo. What does ID Protection detect?",
            options: ["Atypical travel, a sign-in risk", "Leaked credentials, a user risk", "A dynamic group change", "A PIM activation"],
            answer: 0,
            explain: "Atypical travel (two sign-ins from geographically distant locations) is a sign-in risk detection.",
            es: {
              q: "Un usuario inicia sesión desde Buenos Aires y, 20 minutos después, desde Tokio. ¿Qué detecta ID Protection?",
              options: ["Un viaje atípico, un riesgo de inicio de sesión", "Credenciales filtradas, un riesgo de usuario", "Un cambio de grupo dinámico", "Una activación de PIM"],
              explain: "El viaje atípico (dos inicios de sesión desde ubicaciones geográficamente lejanas) es una detección de riesgo de inicio de sesión."
            }
          },
          {
            type: "match",
            q: "Match each ID Protection report to what it shows.",
            values: ["Risk detections", "Risky sign-ins", "Risky users"],
            targets: [
              { t: "Each individual risk detected", answer: 0 },
              { t: "Sign-ins with one or more risk detections", answer: 1 },
              { t: "Identities with risky sign-ins or reported detections", answer: 2 }
            ],
            explain: "ID Protection provides three reports for investigation: risk detections, risky sign-ins and risky users.",
            es: {
              q: "Relacione cada informe de ID Protection con lo que muestra.",
              values: ["Detecciones de riesgo", "Inicios de sesión riesgosos", "Usuarios riesgosos"],
              targets: [
                { t: "Cada riesgo detectado de forma individual" },
                { t: "Inicios de sesión con una o más detecciones de riesgo" },
                { t: "Identidades con inicios de sesión riesgosos o detecciones informadas" }
              ],
              explain: "ID Protection ofrece tres informes para investigar: detecciones de riesgo, inicios de sesión riesgosos y usuarios riesgosos."
            }
          },
          {
            type: "single",
            q: "Automated remediation isn't enabled. Which manual actions can an administrator take on detected risks?",
            options: ["Dismiss, confirm safe or confirm compromise", "Only delete the user", "Only export to a storage account", "Assign a custom role"],
            answer: 0,
            explain: "Admins review risks in the portal, the API or Defender XDR and can dismiss, confirm safe or confirm compromise.",
            es: {
              q: "No está habilitada la corrección automática. ¿Qué acciones manuales puede tomar un administrador sobre los riesgos detectados?",
              options: ["Descartar, confirmar como seguro o confirmar como comprometido", "Solo eliminar al usuario", "Solo exportar a una cuenta de almacenamiento", "Asignar un rol personalizado"],
              explain: "Los administradores revisan los riesgos en el portal, la API o Defender XDR y pueden descartarlos, confirmarlos como seguros o como comprometidos."
            }
          },
          {
            type: "multi",
            q: "Which two destinations can ID Protection data be sent to for further analysis?",
            options: ["A Log Analytics workspace", "Event Hubs", "A custom banned password list", "An access package", "A Conditional Access named location"],
            answers: [0, 1],
            explain: "Data can be exported through Microsoft Graph APIs, sent to Log Analytics, archived to storage or streamed to Event Hubs, for example to feed a SIEM.",
            es: {
              q: "¿Cuáles son dos destinos a los que se pueden enviar datos de ID Protection para su análisis?",
              options: ["Un área de trabajo de Log Analytics", "Event Hubs", "Una lista personalizada de contraseñas prohibidas", "Un paquete de acceso", "Una ubicación con nombre del acceso condicional"],
              explain: "Los datos se pueden exportar mediante las API de Microsoft Graph, enviar a Log Analytics, archivar en almacenamiento o transmitir a Event Hubs, por ejemplo para alimentar un SIEM."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about ID Protection.",
            parts: [
              "ID Protection helps detect, investigate and remediate identity-based risks for user identities and ",
              { options: ["workload identities", "storage accounts", "virtual networks"], answer: 0 },
              ", using trillions of daily signals from sources including Microsoft Entra ID, Microsoft Accounts and ",
              { options: ["Xbox", "Azure Pricing Calculator", "SharePoint templates"], answer: 0 },
              "."
            ],
            explain: "Detections come from signals across Entra ID, Microsoft Accounts and gaming with Xbox.",
            es: {
              q: "Complete la afirmación sobre ID Protection.",
              parts: [
                "ID Protection ayuda a detectar, investigar y corregir riesgos basados en la identidad para identidades de usuario e ",
                { options: ["identidades de carga de trabajo", "cuentas de almacenamiento", "redes virtuales"] },
                ", con billones de señales diarias de orígenes que incluyen Microsoft Entra ID, las cuentas Microsoft y ",
                { options: ["Xbox", "la Calculadora de precios de Azure", "plantillas de SharePoint"] },
                "."
              ],
              explain: "Las detecciones provienen de señales de Entra ID, las cuentas Microsoft y los juegos con Xbox."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "If a user completes the access control required by a risk-based Conditional Access policy, the risk is automatically remediated.", answer: true, explain: "For example, performing MFA or a secure password reset." },
              { s: "Leaked credentials are an example of sign-in risk.", answer: false, explain: "Leaked credentials are a user risk." },
              { s: "ID Protection runs all real-time sign-in detections during each sign-in.", answer: true, explain: "It generates a sign-in session risk level." }
            ],
            es: {
              statements: [
                { s: "Si un usuario completa el control de acceso que exige una directiva de acceso condicional basada en riesgo, el riesgo se corrige automáticamente.", explain: "Por ejemplo, al hacer MFA o un restablecimiento seguro de contraseña." },
                { s: "Las credenciales filtradas son un ejemplo de riesgo de inicio de sesión.", explain: "Las credenciales filtradas son un riesgo de usuario." },
                { s: "ID Protection ejecuta todas las detecciones en tiempo real en cada inicio de sesión.", explain: "Genera un nivel de riesgo para la sesión de inicio de sesión." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "verified-id",
      name: "Describe Microsoft Entra Verified ID",
      es: { name: "Descripción del id. verificado por Microsoft Entra" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/5b-describe-entra-verified-id",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each organization to its role in a verifiable credential interaction.",
            values: ["Issuer", "User", "Verifier"],
            targets: [
              { t: "A university that grants a digitally signed diploma", answer: 0 },
              { t: "A graduate who stores the diploma in a digital wallet", answer: 1 },
              { t: "An employer that checks the diploma's claims", answer: 2 },
              { t: "An airline that requests proof of a credential", answer: 2 }
            ],
            explain: "Issuers attest and sign, users hold and present, verifiers request and validate.",
            es: {
              q: "Relacione cada organización con su función en una interacción con credenciales verificables.",
              values: ["Emisor", "Usuario", "Verificador"],
              targets: [
                { t: "Una universidad que otorga un diploma firmado digitalmente" },
                { t: "Un graduado que guarda el diploma en una cartera digital" },
                { t: "Un empleador que comprueba las notificaciones del diploma" },
                { t: "Una aerolínea que solicita una prueba de una credencial" }
              ],
              explain: "Los emisores certifican y firman, los usuarios guardan y presentan, y los verificadores solicitan y validan."
            }
          },
          {
            type: "single",
            q: "Which trust system does Microsoft Entra Verified ID use?",
            options: ["did:web, linking the issuer's DID to a web domain the organization controls", "A private blockchain operated by each tenant", "Shared passwords between issuer and verifier", "Kerberos tickets"],
            answer: 0,
            explain: "With did:web, trust comes from the reputation of the issuer's web domain.",
            es: {
              q: "¿Qué sistema de confianza usa Microsoft Entra Verified ID?",
              options: ["did:web, que vincula el DID del emisor a un dominio web que controla la organización", "Una cadena de bloques privada que opera cada inquilino", "Contraseñas compartidas entre emisor y verificador", "Vales de Kerberos"],
              explain: "Con did:web, la confianza surge de la reputación del dominio web del emisor."
            }
          },
          {
            type: "single",
            q: "What does Verified ID Face Check share with the relying organization?",
            options: ["Only the match result", "The user's full ID document image", "The user's biometric template", "The user's password hash"],
            answer: 0,
            explain: "Face Check matches a real-time selfie to the ID photo and shares only the result, preserving privacy.",
            es: {
              q: "¿Qué comparte Face Check de Verified ID con la organización que lo usa?",
              options: ["Solo el resultado de la coincidencia", "La imagen completa del documento de identidad", "La plantilla biométrica del usuario", "El hash de la contraseña del usuario"],
              explain: "Face Check compara una selfie en tiempo real con la foto del documento y solo comparte el resultado, lo que preserva la privacidad."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about verifiable credentials.",
            parts: [
              "Verifiers read metadata such as public keys from the ",
              { options: ["verifiable data registry", "custom banned password list", "PIM audit history"], answer: 0 },
              ", and Microsoft works with standards bodies such as the W3C and the ",
              { options: ["Decentralized Identity Foundation", "Cloud Native Computing Foundation", "PCI Security Standards Council"], answer: 0 },
              "."
            ],
            explain: "The verifiable data registry is the underlying trust network; Microsoft collaborates with the W3C and DIF.",
            es: {
              q: "Complete la afirmación sobre las credenciales verificables.",
              parts: [
                "Los verificadores leen metadatos como las claves públicas del ",
                { options: ["registro de datos verificable", "lista personalizada de contraseñas prohibidas", "historial de auditoría de PIM"] },
                ", y Microsoft colabora con organismos de estándares como el W3C y la ",
                { options: ["Decentralized Identity Foundation", "Cloud Native Computing Foundation", "PCI Security Standards Council"] },
                "."
              ],
              explain: "El registro de datos verificable es la red de confianza subyacente; Microsoft colabora con el W3C y la DIF."
            }
          },
          {
            type: "multi",
            q: "Which two properties describe verifiable credentials?",
            options: ["Cryptographically secure", "Machine-readable for verification", "Stored only by the issuer", "Impossible to revoke", "Based on a proprietary Microsoft format"],
            answers: [0, 1],
            explain: "They're cryptographically secure, privacy compliant and machine-readable. The standard includes fields for expiration and revocation.",
            es: {
              q: "¿Cuáles son dos propiedades de las credenciales verificables?",
              options: ["Son criptográficamente seguras", "Son legibles por máquina para su verificación", "Solo las guarda el emisor", "No se pueden revocar", "Se basan en un formato propietario de Microsoft"],
              explain: "Son criptográficamente seguras, cumplen con la privacidad y son legibles por máquina. El estándar incluye campos para vencimiento y revocación."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Verifiable credentials can help mitigate AI-driven identity fraud and deepfakes.", answer: true, explain: "They confirm interactions involve real, verified individuals." },
              { s: "During account recovery, a verifiable credential is issued into the user's Microsoft Authenticator app.", answer: true, explain: "After verification, the user gets a TAP to re-register methods." },
              { s: "The user's credential claims are signed with the verifier's private key.", answer: false, explain: "Claims are signed with the user's private key." }
            ],
            es: {
              statements: [
                { s: "Las credenciales verificables pueden ayudar a mitigar el fraude de identidad con IA y los deepfakes.", explain: "Confirman que las interacciones involucran a personas reales y verificadas." },
                { s: "Durante la recuperación de cuentas, se emite una credencial verificable en la aplicación Microsoft Authenticator del usuario.", explain: "Después de la verificación, el usuario recibe un TAP para volver a registrar métodos." },
                { s: "Las notificaciones de la credencial del usuario se firman con la clave privada del verificador.", explain: "Las notificaciones se firman con la clave privada del usuario." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "security-copilot",
      name: "Describe Microsoft Entra integration with Microsoft Security Copilot",
      es: { name: "Descripción de la integración de Microsoft Entra con Microsoft Security Copilot" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/5c-describe-entra-integration-in-copilot",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "An analyst types \"List the recent risky sign-ins for karita@woodgrovebank.com\" at securitycopilot.microsoft.com. Which experience is this?",
            options: ["The standalone experience", "The embedded experience", "A lifecycle workflow", "An access review"],
            answer: 0,
            explain: "The standalone experience is the Security Copilot portal with natural language prompts and the Entra plugin's skills.",
            es: {
              q: "Un analista escribe \"Enumera los inicios de sesión riesgosos recientes de karita@woodgrovebank.com\" en securitycopilot.microsoft.com. ¿Qué experiencia es?",
              options: ["La experiencia independiente", "La experiencia integrada", "Un flujo de trabajo de ciclo de vida", "Una revisión de acceso"],
              explain: "La experiencia independiente es el portal de Security Copilot con prompts en lenguaje natural y las capacidades del complemento de Entra."
            }
          },
          {
            type: "single",
            q: "Which Microsoft Entra agent scans the tenant every 24 hours for new users, apps and agent identities not covered by policies and suggests changes?",
            options: ["Conditional Access Optimization Agent", "Identity Risk Management Agent", "The PIM approver", "The Cloud Sync agent"],
            answer: 0,
            explain: "The Conditional Access Optimization Agent evaluates policies against best practices and Zero Trust and recommends next steps.",
            es: {
              q: "¿Qué agente de Microsoft Entra examina el inquilino cada 24 horas en busca de usuarios, aplicaciones e identidades de agente nuevos sin directivas y sugiere cambios?",
              options: ["El agente de optimización del acceso condicional", "El agente de administración de riesgos de identidad", "El aprobador de PIM", "El agente de Cloud Sync"],
              explain: "El agente de optimización del acceso condicional evalúa las directivas según los procedimientos recomendados y la Confianza cero, y recomienda próximos pasos."
            }
          },
          {
            type: "match",
            q: "Match each Security Copilot task to the Microsoft Entra product area.",
            values: ["Microsoft Entra ID", "ID Protection", "ID Governance", "Internet and Private Access"],
            targets: [
              { t: "Investigate audit and provisioning logs", answer: 0 },
              { t: "Summarize a user's risk level and suggest remediation", answer: 1 },
              { t: "Analyze access review decision patterns", answer: 2 },
              { t: "Investigate Global Secure Access traffic logs", answer: 3 }
            ],
            explain: "Security Copilot supports scenarios across Entra ID, ID Protection, ID Governance and Global Secure Access.",
            es: {
              q: "Relacione cada tarea de Security Copilot con el área de producto de Microsoft Entra.",
              values: ["Microsoft Entra ID", "ID Protection", "ID Governance", "Internet Access y Private Access"],
              targets: [
                { t: "Investigar registros de auditoría y de aprovisionamiento" },
                { t: "Resumir el nivel de riesgo de un usuario y sugerir correcciones" },
                { t: "Analizar patrones de decisión de las revisiones de acceso" },
                { t: "Investigar registros de tráfico del acceso seguro global" }
              ],
              explain: "Security Copilot admite escenarios en Entra ID, ID Protection, ID Governance y el acceso seguro global."
            }
          },
          {
            type: "multi",
            q: "Which two statements about Microsoft Entra agents are true?",
            options: [
              "Each agent uses a unique agent identity created when it's turned on",
              "Agents are configured in the Agents section of the Microsoft Entra admin center",
              "Agents run with global administrator rights by default",
              "Agents can only be triggered manually",
              "Agents replace Conditional Access"
            ],
            answers: [0, 1],
            explain: "Each agent gets its own identity with specific read and write permissions, and can run on a schedule or manually.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre los agentes de Microsoft Entra?",
              options: [
                "Cada agente usa una identidad de agente única que se crea al activarlo",
                "Los agentes se configuran en la sección Agentes del Centro de administración de Microsoft Entra",
                "Los agentes se ejecutan con derechos de administrador global de forma predeterminada",
                "Los agentes solo se pueden activar manualmente",
                "Los agentes reemplazan el acceso condicional"
              ],
              explain: "Cada agente tiene su propia identidad con permisos específicos de lectura y escritura, y puede ejecutarse de forma programada o manual."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Security Copilot.",
            parts: [
              "Microsoft Entra is one of the Microsoft ",
              { options: ["plugins", "subscriptions", "tenants"], answer: 0 },
              " for Security Copilot, and partner-built agents can be discovered through the ",
              { options: ["Security Store", "Azure Marketplace only", "PIM audit history"], answer: 0 },
              " embedded in the Microsoft Entra admin center."
            ],
            explain: "The Entra plugin feeds Security Copilot; the Security Store is embedded in the admin center to discover, buy and deploy agents.",
            es: {
              q: "Complete la afirmación sobre Security Copilot.",
              parts: [
                "Microsoft Entra es uno de los ",
                { options: ["complementos", "suscripciones", "inquilinos"] },
                " de Microsoft para Security Copilot, y los agentes de partners se pueden descubrir en la ",
                { options: ["Security Store", "Azure Marketplace únicamente", "historial de auditoría de PIM"] },
                " integrada en el Centro de administración de Microsoft Entra."
              ],
              explain: "El complemento de Entra alimenta a Security Copilot; la Security Store está integrada en el centro de administración para descubrir, comprar e implementar agentes."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "AI-generated content from Copilot in Microsoft Entra might be incorrect.", answer: true, explain: "Thumbs up and down feedback helps improve accuracy." },
              { s: "The Identity Risk Management Agent can provide continuous monitoring.", answer: true, explain: "It runs every 24 hours, manually or continuously." },
              { s: "Security Copilot in Microsoft Entra is available only as a standalone portal.", answer: false, explain: "It also has embedded experiences in the Entra admin center." }
            ],
            es: {
              statements: [
                { s: "El contenido generado por Copilot en Microsoft Entra puede ser incorrecto.", explain: "Los comentarios de pulgar arriba y abajo ayudan a mejorar la precisión." },
                { s: "El agente de administración de riesgos de identidad puede ofrecer supervisión continua.", explain: "Se ejecuta cada 24 horas, de forma manual o continua." },
                { s: "Security Copilot en Microsoft Entra solo está disponible como portal independiente.", explain: "También tiene experiencias integradas en el Centro de administración de Entra." }
              ]
            }
          }
        ]
      }
    }
  ]
});
