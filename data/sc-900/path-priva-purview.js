// SC-900 > Introduction to Microsoft Purview and Microsoft's privacy principles: learning path review (all four modules)
Catalog.pathQuiz("sc-900", "priva-purview", {
  added: "2026-11-19",
  items: [
    {
      type: "single",
      topic: "Data security",
      q: "A user downloads hundreds of design files the week after resigning. The company wants this detected, and wants the user blocked from copying sensitive files to USB once the risk is confirmed. Which combination fits?",
      options: [
        "Insider Risk Management with adaptive protection applying an endpoint DLP policy",
        "Communication Compliance with a policy that removes messages in Teams",
        "eDiscovery with a hold on the user's OneDrive and a review set",
        "Compliance Manager with an improvement action"
      ],
      answer: 0,
      explain: "IRM detects departing-user data theft and sets a risk level; adaptive protection then applies DLP controls such as blocking copies to USB.",
      es: {
        topic: "Seguridad de datos",
        q: "Un usuario descarga cientos de archivos de diseño la semana después de renunciar. La empresa quiere detectarlo y, una vez confirmado el riesgo, impedirle copiar archivos confidenciales a un USB. ¿Qué combinación corresponde?",
        options: [
          "Insider Risk Management con protección adaptable que aplique una directiva DLP de punto de conexión",
          "Cumplimiento de comunicaciones con una directiva que quite mensajes en Teams",
          "eDiscovery con una retención sobre el OneDrive del usuario y un conjunto de revisión",
          "El Administrador de cumplimiento con una acción de mejora"
        ],
        explain: "IRM detecta el robo de datos de usuarios que se van y asigna un nivel de riesgo; la protección adaptable aplica entonces controles DLP, como bloquear copias a USB."
      }
    },
    {
      type: "match",
      topic: "Microsoft Purview solutions",
      q: "Match each scenario to the Microsoft Purview solution.",
      values: ["Information Protection", "Records Management", "Data Map", "Data Security Investigations"],
      targets: [
        { t: "Encrypt a board report so only directors can open it, even if forwarded", answer: 0 },
        { t: "Make sure no one, not even a global admin, can delete a regulated record early", answer: 1 },
        { t: "Build an automatic inventory of metadata across Azure, AWS and on-premises", answer: 2 },
        { t: "Use AI to find exposed credentials inside files from a breach", answer: 3 }
      ],
      explain: "Labels protect content, regulatory records lock retention, Data Map inventories metadata and DSI analyzes incident data with AI.",
      es: {
        topic: "Soluciones de Microsoft Purview",
        q: "Relacione cada escenario con la solución de Microsoft Purview.",
        values: ["Information Protection", "Administración de registros", "Data Map", "Investigaciones de seguridad de datos"],
        targets: [
          { t: "Cifrar un informe del directorio para que solo lo abran los directores, aunque se reenvíe" },
          { t: "Asegurar que nadie, ni un administrador global, pueda eliminar antes de tiempo un registro regulado" },
          { t: "Armar un inventario automático de metadatos en Azure, AWS y entornos locales" },
          { t: "Usar IA para encontrar credenciales expuestas dentro de archivos de una filtración" }
        ],
        explain: "Las etiquetas protegen el contenido, los registros normativos fijan la retención, Data Map inventaría metadatos y DSI analiza los datos del incidente con IA."
      }
    },
    {
      type: "single",
      topic: "Service Trust Portal and privacy",
      q: "A customer's legal team asks two things: where to download Microsoft's latest penetration test attestation, and whether Microsoft mines customer data for advertising. Which pair of answers is correct?",
      options: [
        "The Service Trust Portal; no, Microsoft doesn't use customer data for advertising",
        "Compliance Manager; no, unless the customer opts in to anonymized sharing",
        "The Service Trust Portal; yes, but only aggregated and anonymized data",
        "Microsoft Purview Audit; no, data is never processed"
      ],
      answer: 0,
      explain: "Pen test attestations are in the STP's Reports, Whitepapers, and Artifacts section, and Microsoft doesn't mine customer data for advertising.",
      es: {
        topic: "Portal de confianza de servicios y privacidad",
        q: "El equipo legal de un cliente pregunta dos cosas: dónde descargar la última certificación de pruebas de penetración de Microsoft y si Microsoft analiza datos de clientes con fines publicitarios. ¿Qué par de respuestas es correcto?",
        options: [
          "En el Portal de confianza de servicios; no, Microsoft no usa los datos de clientes para publicidad",
          "En el Administrador de cumplimiento; no, salvo que el cliente acepte compartir datos anonimizados",
          "En el Portal de confianza de servicios; sí, pero solo datos agregados y anonimizados",
          "Auditoría de Microsoft Purview; no, los datos nunca se procesan"
        ],
        explain: "Las certificaciones de pruebas de penetración están en la sección Informes, notas del producto y artefactos del STP, y Microsoft no analiza datos de clientes con fines publicitarios."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Data security", s: "Sensitivity labels are stored in clear text in metadata, so third-party apps can read them.", answer: true, explain: "Apps can then apply their own protection." },
        { topic: "Data compliance", s: "eDiscovery review sets decrypt documents protected with sensitivity labels.", answer: true, explain: "Decryption is a premium review set feature." },
        { topic: "Data governance", s: "Data Map roles give access to the underlying data in scanned sources.", answer: false, explain: "Data Map holds metadata only." }
      ],
      es: {
        statements: [
          { topic: "Seguridad de datos", s: "Las etiquetas de confidencialidad se guardan en texto claro en los metadatos, así que las aplicaciones de terceros pueden leerlas.", explain: "Después esas aplicaciones pueden aplicar su propia protección." },
          { topic: "Cumplimiento de datos", s: "Los conjuntos de revisión de eDiscovery descifran los documentos protegidos con etiquetas de confidencialidad.", explain: "El descifrado es una característica premium de los conjuntos de revisión." },
          { topic: "Gobernanza de datos", s: "Los roles de Data Map dan acceso a los datos de los orígenes analizados.", explain: "Data Map solo guarda metadatos." }
        ]
      }
    },
    {
      type: "single",
      topic: "Data compliance",
      q: "An insider risk case shows a user leaking product plans, and Legal now needs to collect and preserve the evidence for possible litigation. What's the next step?",
      options: [
        "Escalate the case to eDiscovery (Premium)",
        "Assign the user an Elevated risk level manually",
        "Open a Communication Compliance policy for the user",
        "Mark the user's files as regulatory records"
      ],
      answer: 0,
      explain: "Insider risk cases can be escalated to eDiscovery (Premium) for legal investigation, where holds and review sets preserve evidence.",
      es: {
        topic: "Cumplimiento de datos",
        q: "Un caso de riesgo interno muestra que un usuario filtró planes de producto, y Legales necesita reunir y conservar la evidencia para un posible litigio. ¿Cuál es el paso siguiente?",
        options: [
          "Escalar el caso a eDiscovery (Premium)",
          "Asignarle al usuario un nivel de riesgo Elevado a mano",
          "Crear una directiva de Cumplimiento de comunicaciones para el usuario",
          "Marcar los archivos del usuario como registros normativos"
        ],
        explain: "Los casos de riesgo interno se pueden escalar a eDiscovery (Premium) para la investigación legal, donde las retenciones y los conjuntos de revisión conservan la evidencia."
      }
    },
    {
      type: "single",
      topic: "Data security",
      q: "A company detects employee IDs with a custom regex, but gets many false positives from other eight-digit numbers. It has the real IDs in its HR database. What should it switch to?",
      options: [
        "An exact data match (EDM) classifier",
        "A trainable classifier seeded with HR documents",
        "A named entity SIT for person names",
        "A higher proximity value for the regex"
      ],
      answer: 0,
      explain: "EDM matches exact values from a database, which removes false positives from numbers that only share the format.",
      es: {
        topic: "Seguridad de datos",
        q: "Una empresa detecta los legajos de empleados con una regex personalizada, pero tiene muchos falsos positivos de otros números de ocho dígitos. Tiene los legajos reales en su base de RR. HH. ¿A qué debería pasarse?",
        options: [
          "A un clasificador de coincidencia exacta de datos (EDM)",
          "A un clasificador entrenable alimentado con documentos de RR. HH.",
          "A un SIT de entidad con nombre para nombres de personas",
          "Un valor de proximidad más alto para la regex"
        ],
        explain: "EDM detecta valores exactos de una base de datos, lo que elimina los falsos positivos de números que solo comparten el formato."
      }
    },
    {
      type: "single",
      topic: "Data compliance",
      q: "Auditors ask a company to show its progress toward the EU AI Act, with assigned tasks and evidence. Which Purview solution should it use?",
      options: [
        "Compliance Manager with an AI regulation assessment",
        "The Service Trust Portal's regional resources",
        "DSPM AI observability for all agents",
        "Communication Compliance for Copilot prompts"
      ],
      answer: 0,
      explain: "Compliance Manager provides regulatory templates for AI regulations, with improvement actions you can assign and document.",
      es: {
        topic: "Cumplimiento de datos",
        q: "Los auditores le piden a una empresa que muestre su avance hacia la Ley de IA de la UE, con tareas asignadas y evidencia. ¿Qué solución de Purview debe usar?",
        options: [
          "El Administrador de cumplimiento con una evaluación de normativa de IA",
          "Los recursos regionales del Portal de confianza de servicios",
          "La observabilidad de IA de DSPM para todos los agentes",
          "Cumplimiento de comunicaciones para indicaciones de Copilot"
        ],
        explain: "El Administrador de cumplimiento ofrece plantillas de normativas de IA, con acciones de mejora que se pueden asignar y documentar."
      }
    },
    {
      type: "dropdown",
      topic: "Data compliance",
      q: "Complete the statement about retention.",
      parts: [
        "To apply the same retention to everything in a mailbox, use a ",
        { options: ["retention policy", "retention label", "sensitivity label"], answer: 0 },
        "; to keep a specific email longer than the rest, apply a ",
        { options: ["retention label", "litigation hold", "DLP policy"], answer: 0 },
        " to that item."
      ],
      explain: "Policies work at site or mailbox level; labels work at item level and can set exceptions.",
      es: {
        topic: "Cumplimiento de datos",
        q: "Complete la afirmación sobre la retención.",
        parts: [
          "Para aplicar la misma retención a todo un buzón, use una ",
          { options: ["directiva de retención", "etiqueta de retención", "etiqueta de confidencialidad"] },
          "; para conservar un correo específico más tiempo que el resto, aplíquele una ",
          { options: ["etiqueta de retención", "retención por litigio", "directiva DLP"] },
          " a ese elemento."
        ],
        explain: "Las directivas trabajan a nivel de sitio o buzón; las etiquetas, a nivel de elemento, y permiten excepciones."
      }
    },
    {
      type: "single",
      topic: "Data governance",
      q: "Business users complain they can't find trusted sales data, and the central data team can't keep up with requests. Which Purview capability addresses both problems?",
      options: [
        "Unified Catalog data products with self-service access policies",
        "Data Map scans scheduled every hour",
        "Data lifecycle retention policies on the sales sites",
        "Information Protection auto-labeling of every sales file as Confidential"
      ],
      answer: 0,
      explain: "Data products make trusted data easy to find, and access policies let users request access without going through the central team.",
      es: {
        topic: "Gobernanza de datos",
        q: "Los usuarios de negocio se quejan de que no encuentran datos de ventas confiables, y el equipo central de datos no da abasto con las solicitudes. ¿Qué capacidad de Purview resuelve ambos problemas?",
        options: [
          "Productos de datos del Catálogo unificado con directivas de acceso de autoservicio",
          "Análisis de Data Map programados cada hora",
          "Directivas de retención del ciclo de vida en los sitios de ventas",
          "El etiquetado automático de Information Protection de cada archivo de ventas como Confidencial"
        ],
        explain: "Los productos de datos hacen fácil encontrar datos confiables, y las directivas de acceso permiten solicitarlo sin pasar por el equipo central."
      }
    },
    {
      type: "multi",
      topic: "Data security",
      q: "A company wants to understand and control how sensitive data flows into AI tools. Which two Purview capabilities directly help?",
      options: [
        "DSPM AI observability",
        "Endpoint DLP policies for third-party generative AI sites",
        "The Service Trust Portal My Library",
        "Event-based retention",
        "Data Map operational metadata"
      ],
      answers: [0, 1],
      explain: "DSPM tracks AI apps and agents and their risky interactions; endpoint DLP can warn or block sharing sensitive data with AI sites.",
      es: {
        topic: "Seguridad de datos",
        q: "Una empresa quiere entender y controlar cómo llegan los datos confidenciales a las herramientas de IA. ¿Qué dos capacidades de Purview ayudan directamente?",
        options: [
          "La observabilidad de IA de DSPM",
          "Directivas DLP de punto de conexión para sitios de IA generativa de terceros",
          "Mi biblioteca del Portal de confianza de servicios",
          "La retención basada en eventos",
          "Los metadatos operativos de Data Map"
        ],
        explain: "DSPM sigue las aplicaciones y agentes de IA y sus interacciones riesgosas; DLP de punto de conexión puede advertir o bloquear el envío de datos confidenciales a sitios de IA."
      }
    },
    {
      type: "single",
      topic: "Data compliance",
      q: "A security team suspects an attacker accessed a mailbox last month and wants the exact emails that were opened. The tenant only has Audit (Standard). What's the limitation?",
      options: [
        "Mail access events are Audit (Premium) intelligent insights",
        "Audit (Standard) keeps only 7 days of records",
        "Audit (Standard) doesn't cover Exchange Online",
        "Audit records can only be read through eDiscovery (Premium) review sets"
      ],
      answer: 0,
      explain: "Standard keeps 180 days but doesn't include intelligent insights such as when mail items were accessed.",
      es: {
        topic: "Cumplimiento de datos",
        q: "Un equipo de seguridad sospecha que un atacante accedió a un buzón el mes pasado y quiere saber exactamente qué correos se abrieron. El inquilino solo tiene Auditoría (Estándar). ¿Cuál es la limitación?",
        options: [
          "Los eventos de acceso al correo son conclusiones inteligentes de Auditoría (Premium)",
          "Auditoría (Estándar) conserva solo 7 días de registros",
          "Auditoría (Estándar) no cubre Exchange Online",
          "Los registros de auditoría solo se pueden leer con conjuntos de revisión de eDiscovery (Premium)"
        ],
        explain: "Estándar conserva 180 días, pero no incluye conclusiones inteligentes como cuándo se accedió a elementos de correo."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Data security", s: "Microsoft 365 Copilot inherits the most restrictive sensitivity label from the items it uses in a response.", answer: true, explain: "It also checks encryption permissions before using content." },
        { topic: "Data compliance", s: "Retention labels travel with a document when it's shared outside the Microsoft 365 tenant.", answer: false, explain: "They don't persist outside the tenant." },
        { topic: "Service Trust Portal and privacy", s: "Microsoft notifies the customer of a government data request whenever it's legally permitted.", answer: true, explain: "And redirects the requester to the customer." }
      ],
      es: {
        statements: [
          { topic: "Seguridad de datos", s: "Microsoft 365 Copilot hereda la etiqueta de confidencialidad más restrictiva de los elementos que usa en una respuesta.", explain: "También comprueba los permisos del cifrado antes de usar el contenido." },
          { topic: "Cumplimiento de datos", s: "Las etiquetas de retención viajan con un documento cuando se comparte fuera del inquilino de Microsoft 365.", explain: "No persisten fuera del inquilino." },
          { topic: "Portal de confianza de servicios y privacidad", s: "Microsoft notifica al cliente sobre una solicitud de datos de un gobierno siempre que la ley lo permite.", explain: "Y deriva al solicitante hacia el cliente." }
        ]
      }
    },
    {
      type: "single",
      topic: "Data security",
      q: "A team wants Teams sites marked Restricted to block guest access, and documents marked Restricted to be encrypted. Which label scopes must the Restricted label (or labels) cover?",
      options: [
        "Groups & sites for the container settings, plus Files & other data assets for the documents",
        "Only Files & other data assets, since container settings are inherited by documents",
        "Only Groups & sites, since documents inside are labeled automatically",
        "Meetings, since Teams sites are covered by the Teams meeting scope together with the chat"
      ],
      answer: 0,
      explain: "Container labels control access settings but don't label items inside; files need the Files scope.",
      es: {
        topic: "Seguridad de datos",
        q: "Un equipo quiere que los sitios de Teams marcados como Restringido bloqueen el acceso de invitados, y que los documentos marcados como Restringido se cifren. ¿Qué ámbitos debe cubrir la etiqueta (o las etiquetas) Restringido?",
        options: [
          "Grupos y sitios para la configuración del contenedor, y Archivos y otros recursos de datos para los documentos",
          "Solo Archivos y otros recursos de datos, porque los documentos heredan la configuración del contenedor",
          "Solo Grupos y sitios, porque los documentos que contiene se etiquetan automáticamente",
          "Reuniones, porque los sitios de Teams quedan cubiertos por el ámbito de reuniones de Teams junto con el chat"
        ],
        explain: "Las etiquetas de contenedor controlan la configuración de acceso, pero no etiquetan los elementos internos; los archivos necesitan el ámbito Archivos."
      }
    },
    {
      type: "single",
      topic: "Data governance",
      q: "Before a model is trained on the company's data lake, the data science lead wants to know which tables contain personal data and who owns them. Which Purview combination gives that view?",
      options: [
        "Data Map classification plus data owners registered in Unified Catalog",
        "Content explorer plus sensitivity label policies",
        "Compliance Manager plus the Service Trust Portal",
        "Activity explorer plus endpoint DLP alerts routed to the Defender portal"
      ],
      answer: 0,
      explain: "Data Map classifies sensitive data in analytics sources; Unified Catalog records owners and context.",
      es: {
        topic: "Gobernanza de datos",
        q: "Antes de entrenar un modelo con el lago de datos de la empresa, el líder de ciencia de datos quiere saber qué tablas contienen datos personales y quién es su propietario. ¿Qué combinación de Purview da esa vista?",
        options: [
          "La clasificación de Data Map más los propietarios de datos registrados en el Catálogo unificado",
          "El explorador de contenido más las directivas de etiquetas de confidencialidad",
          "El Administrador de cumplimiento más el Portal de confianza de servicios",
          "El explorador de actividad más las alertas de DLP de punto de conexión enviadas al portal de Defender"
        ],
        explain: "Data Map clasifica datos confidenciales en orígenes analíticos; el Catálogo unificado registra propietarios y contexto."
      }
    },
    {
      type: "match",
      topic: "Data compliance",
      q: "Match each requirement to the right capability.",
      values: ["eDiscovery hold", "Disposition review", "Inactive mailbox", "Audit log retention policy"],
      targets: [
        { t: "Preserve a custodian's content during an active lawsuit", answer: 0 },
        { t: "Have someone approve deletion of contracts at the end of retention", answer: 1 },
        { t: "Keep a departed employee's mail after the account is deleted", answer: 2 },
        { t: "Keep Entra sign-in audit records for three years", answer: 3 }
      ],
      explain: "Each requirement maps to a different Purview compliance capability.",
      es: {
        topic: "Cumplimiento de datos",
        q: "Relacione cada requisito con la capacidad correcta.",
        values: ["Retención de eDiscovery", "Revisión para eliminación", "Buzón inactivo", "Directiva de retención del registro de auditoría"],
        targets: [
          { t: "Conservar el contenido de un custodio durante una demanda en curso" },
          { t: "Que alguien apruebe la eliminación de contratos al final de la retención" },
          { t: "Conservar el correo de un empleado que se fue después de eliminar su cuenta" },
          { t: "Conservar tres años los registros de auditoría de inicios de sesión de Entra" }
        ],
        explain: "Cada requisito corresponde a una capacidad de cumplimiento distinta de Purview."
      }
    },
    {
      type: "single",
      topic: "Data security",
      q: "Analysts drowning in DLP and insider risk alerts want AI to sort them by risk so they work the critical ones first. What does Purview offer?",
      options: [
        "Security Copilot triage agents in the DLP and IRM alert queues",
        "Alert summarization in Communication Compliance",
        "Data Quality rules generated by AI",
        "The natural language to KeyQL feature in eDiscovery review sets"
      ],
      answer: 0,
      explain: "Both DLP and Insider Risk Management have Copilot triage agents that categorize and prioritize alerts.",
      es: {
        topic: "Seguridad de datos",
        q: "Los analistas, desbordados por alertas de DLP y de riesgo interno, quieren que la IA las ordene por riesgo para atender primero las críticas. ¿Qué ofrece Purview?",
        options: [
          "Los agentes de evaluación de Security Copilot en las colas de alertas de DLP e IRM",
          "El resumen de alertas de Cumplimiento de comunicaciones",
          "Las reglas de Data Quality generadas por IA",
          "La función de lenguaje natural a KeyQL de los conjuntos de revisión de eDiscovery"
        ],
        explain: "Tanto DLP como Insider Risk Management tienen agentes de evaluación de Copilot que categorizan y priorizan las alertas."
      }
    },
    {
      type: "single",
      topic: "Data compliance",
      q: "A broker-dealer must monitor traders' Teams and WhatsApp messages for market manipulation, and HR must not configure the policies. Which solution and design fit?",
      options: [
        "Communication Compliance with role-based separation of duties",
        "Insider Risk Management with priority user groups",
        "DLP policies for Teams with block with override",
        "eDiscovery searches that HR runs weekly on every trader's mailbox"
      ],
      answer: 0,
      explain: "Communication Compliance reviews messages, including WhatsApp, for regulatory violations, and RBAC separates who configures from who reviews.",
      es: {
        topic: "Cumplimiento de datos",
        q: "Un agente de bolsa debe supervisar los mensajes de Teams y WhatsApp de sus operadores en busca de manipulación de mercado, y RR. HH. no debe configurar las directivas. ¿Qué solución y diseño corresponden?",
        options: [
          "Cumplimiento de comunicaciones con separación de funciones basada en roles",
          "Insider Risk Management con grupos de usuarios prioritarios",
          "Directivas DLP para Teams con bloquear con invalidación",
          "Búsquedas de eDiscovery que RR. HH. ejecuta cada semana en el buzón de cada operador"
        ],
        explain: "Cumplimiento de comunicaciones revisa mensajes, incluido WhatsApp, por infracciones normativas, y el RBAC separa quién configura de quién revisa."
      }
    },
    {
      type: "dropdown",
      topic: "Data security",
      q: "Complete the statement about adaptive protection.",
      parts: [
        "Insider risk levels come from ",
        { options: ["Insider Risk Management", "Microsoft Entra ID Protection", "Defender for Endpoint"], answer: 0 },
        ", and when a user reaches Elevated, content they delete from OneDrive is kept for ",
        { options: ["120 days", "30 days", "seven years"], answer: 0 },
        "."
      ],
      explain: "IRM calculates the levels; adaptive protection in Data Lifecycle Management preserves deleted content for 120 days.",
      es: {
        topic: "Seguridad de datos",
        q: "Complete la afirmación sobre la protección adaptable.",
        parts: [
          "Los niveles de riesgo interno provienen de ",
          { options: ["Insider Risk Management", "Microsoft Entra ID Protection", "Defender para punto de conexión"] },
          ", y cuando un usuario llega a Elevado, el contenido que elimina de OneDrive se conserva ",
          { options: ["120 días", "30 días", "siete años"] },
          "."
        ],
        explain: "IRM calcula los niveles; la protección adaptable en la administración del ciclo de vida conserva el contenido eliminado 120 días."
      }
    },
    {
      type: "single",
      topic: "Service Trust Portal and privacy",
      q: "A public-sector customer must keep data in its country and needs contractual guarantees. Which statement reflects Microsoft's commitment?",
      options: [
        "Customers choose the data location, backed by contractual commitments",
        "Data location is chosen by Microsoft for performance",
        "Data residency is only offered for Azure, not Microsoft 365",
        "Data stays in-country only if the customer encrypts it with its own keys"
      ],
      answer: 0,
      explain: "Microsoft offers data residency options for Azure, Dynamics 365 and Microsoft 365, backed by contracts.",
      es: {
        topic: "Portal de confianza de servicios y privacidad",
        q: "Un cliente del sector público debe mantener los datos en su país y necesita garantías contractuales. ¿Qué afirmación refleja el compromiso de Microsoft?",
        options: [
          "El cliente elige la ubicación de los datos, con compromisos contractuales",
          "Microsoft elige la ubicación de los datos según el rendimiento",
          "La residencia de datos solo se ofrece para Azure, no para Microsoft 365",
          "Los datos quedan en el país solo si el cliente los cifra con sus propias claves"
        ],
        explain: "Microsoft ofrece opciones de residencia de datos para Azure, Dynamics 365 y Microsoft 365, respaldadas por contratos."
      }
    },
    {
      type: "yesno",
      statements: [
        { topic: "Data governance", s: "A critical data element can map CustID and CID columns into one logical element.", answer: true, explain: "Quality rules and access policies can attach to it." },
        { topic: "Data security", s: "DSPM can remove public sharing links through AI agents, with actions audited.", answer: true, explain: "You review and approve those actions." },
        { topic: "Data compliance", s: "Compliance Manager's initial score is zero until you create your first assessment.", answer: false, explain: "It starts from the Microsoft 365 data protection baseline, with Microsoft-managed points." }
      ],
      es: {
        statements: [
          { topic: "Gobernanza de datos", s: "Un elemento de datos crítico puede asignar las columnas CustID y CID a un único elemento lógico.", explain: "Se le pueden asociar reglas de calidad y directivas de acceso." },
          { topic: "Seguridad de datos", s: "DSPM puede quitar vínculos de uso compartido públicos mediante agentes de IA, con acciones auditadas.", explain: "Usted revisa y aprueba esas acciones." },
          { topic: "Cumplimiento de datos", s: "La puntuación inicial del Administrador de cumplimiento es cero hasta que crea su primera evaluación.", explain: "Parte de la línea base de protección de datos de Microsoft 365, con los puntos administrados por Microsoft." }
        ]
      }
    },
    {
      type: "single",
      topic: "Data compliance",
      q: "Employee records must be kept seven years after termination and then deleted, but HR wants to confirm each deletion. Which combination fits?",
      options: [
        "Event-based retention with a disposition review",
        "A seven-year retention policy from creation date",
        "An inactive mailbox with a litigation hold",
        "A regulatory record label with automatic deletion"
      ],
      answer: 0,
      explain: "Event-based retention starts at termination; disposition review lets HR approve deletion or extend retention.",
      es: {
        topic: "Cumplimiento de datos",
        q: "Los legajos deben conservarse siete años después de la desvinculación y después eliminarse, pero RR. HH. quiere confirmar cada eliminación. ¿Qué combinación corresponde?",
        options: [
          "Retención basada en eventos con revisión para eliminación",
          "Una directiva de retención de siete años desde la fecha de creación",
          "Un buzón inactivo con retención por litigio",
          "Una etiqueta de registro normativo con eliminación automática"
        ],
        explain: "La retención basada en eventos empieza con la desvinculación; la revisión para eliminación permite que RR. HH. apruebe la eliminación o extienda la retención."
      }
    },
    {
      type: "single",
      topic: "Data security",
      q: "Which statement correctly contrasts Information Protection sensitivity labels and Data Lifecycle Management retention labels?",
      options: [
        "Sensitivity labels classify and protect; retention labels control how long content is kept",
        "Both encrypt content; retention labels just add an expiration date",
        "Sensitivity labels apply to sites only; retention labels apply to files only",
        "Retention labels are readable by third-party apps; sensitivity labels aren't"
      ],
      answer: 0,
      explain: "Sensitivity labels handle classification and protection such as encryption and markings; retention labels handle keep and delete settings.",
      es: {
        topic: "Seguridad de datos",
        q: "¿Qué afirmación contrasta correctamente las etiquetas de confidencialidad de Information Protection y las etiquetas de retención de la administración del ciclo de vida?",
        options: [
          "Las de confidencialidad clasifican y protegen; las de retención controlan cuánto tiempo se conserva el contenido",
          "Ambas cifran el contenido; las de retención solo agregan una fecha de vencimiento",
          "Las de confidencialidad se aplican solo a sitios; las de retención, solo a archivos",
          "Las de retención las leen aplicaciones de terceros; las de confidencialidad, no"
        ],
        explain: "Las etiquetas de confidencialidad manejan la clasificación y la protección, como cifrado y marcas; las de retención manejan conservar y eliminar."
      }
    },
    {
      type: "multi",
      topic: "Data governance",
      q: "Which two statements describe how Unified Catalog builds on Data Map?",
      options: [
        "It uses the metadata Data Map captures to organize data into governance domains",
        "It adds glossary terms, data products and data quality on top of that metadata",
        "It scans data sources directly without needing Data Map",
        "It copies the scanned data into a separate catalog database",
        "It replaces Data Map once glossary terms are defined"
      ],
      answers: [0, 1],
      explain: "Data Map provides the metadata; Unified Catalog curates and governs it.",
      es: {
        topic: "Gobernanza de datos",
        q: "¿Cuáles son dos afirmaciones que describen cómo se apoya el Catálogo unificado en Data Map?",
        options: [
          "Usa los metadatos que captura Data Map para organizar los datos en dominios de gobernanza",
          "Agrega términos del glosario, productos de datos y calidad de datos sobre esos metadatos",
          "Analiza los orígenes de datos directamente, sin necesitar Data Map",
          "Copia los datos analizados en una base de datos de catálogo separada",
          "Reemplaza a Data Map una vez que se definen los términos del glosario"
        ],
        explain: "Data Map aporta los metadatos; el Catálogo unificado los organiza y gobierna."
      }
    },
    {
      type: "single",
      topic: "Data security",
      q: "An executive assistant's account shows unusual mass downloads. Leadership wants this user's activity scored more aggressively than other staff. What should the insider risk team configure?",
      options: [
        "Add the user to a priority user group",
        "Apply a Highly Confidential label to the user's OneDrive",
        "Create a Communication Compliance policy",
        "Assign the user a Moderate risk level by hand"
      ],
      answer: 0,
      explain: "Priority user groups get closer monitoring and more aggressive risk scoring; risk levels are calculated automatically, not assigned by hand.",
      es: {
        topic: "Seguridad de datos",
        q: "La cuenta de un asistente ejecutivo muestra descargas masivas inusuales. La dirección quiere que la actividad de este usuario se puntúe con más rigor que la del resto. ¿Qué debe configurar el equipo de riesgo interno?",
        options: [
          "Agregar al usuario a un grupo de usuarios prioritarios",
          "Aplicar una etiqueta Altamente confidencial al OneDrive del usuario",
          "Crear una directiva de Cumplimiento de comunicaciones",
          "Asignarle al usuario a mano un nivel de riesgo Moderado"
        ],
        explain: "Los grupos de usuarios prioritarios tienen supervisión más cercana y una puntuación de riesgo más estricta; los niveles de riesgo se calculan automáticamente, no se asignan a mano."
      }
    },
    {
      type: "single",
      topic: "Data security",
      q: "A company wants every document in Word, Excel and PowerPoint to carry a label, and users must not be able to save a file without one. What should it configure?",
      options: [
        "Mandatory labeling in a sensitivity label policy",
        "A default retention label for SharePoint libraries",
        "An auto-labeling condition on the Public label",
        "A DLP policy that blocks saving unlabeled files"
      ],
      answer: 0,
      explain: "Mandatory labeling in a label policy requires a label before users save documents, send emails or create sites or groups.",
      es: {
        topic: "Seguridad de datos",
        q: "Una empresa quiere que todos los documentos de Word, Excel y PowerPoint tengan una etiqueta, y que los usuarios no puedan guardar un archivo sin ella. ¿Qué debe configurar?",
        options: [
          "El etiquetado obligatorio en una directiva de etiquetas de confidencialidad",
          "Una etiqueta de retención predeterminada para las bibliotecas de SharePoint",
          "Una condición de etiquetado automático en la etiqueta Público",
          "Una directiva DLP que bloquee guardar archivos sin etiqueta"
        ],
        explain: "El etiquetado obligatorio de una directiva exige una etiqueta antes de guardar documentos, enviar correos o crear sitios o grupos."
      }
    },
    {
      type: "single",
      topic: "Data governance",
      q: "A governance lead wants a single number that shows how well each data product meets governance standards, plus the steps to improve it. Which Unified Catalog feature provides this?",
      options: [
        "Health controls and health actions",
        "Critical data elements",
        "Governance domain glossaries",
        "Data Map operational metadata with scan run statuses"
      ],
      answer: 0,
      explain: "Health controls track governance health with scores, and health actions list the steps that raise them.",
      es: {
        topic: "Gobernanza de datos",
        q: "Un responsable de gobernanza quiere un número que muestre cuánto cumple cada producto de datos con los estándares de gobernanza, y los pasos para mejorarlo. ¿Qué característica del Catálogo unificado lo ofrece?",
        options: [
          "Los controles y las acciones de salud",
          "Los elementos de datos críticos",
          "Los glosarios de los dominios de gobernanza",
          "Los metadatos operativos de Data Map con el estado de los análisis"
        ],
        explain: "Los controles de salud siguen la salud de la gobernanza con puntuaciones, y las acciones de salud enumeran los pasos para subirlas."
      }
    },
    {
      type: "single",
      topic: "Data compliance",
      q: "A phishing email with a malicious link was delivered to 3,000 mailboxes before detection. Compliance must remove every copy and keep a record of the action. Which Purview capability fits?",
      options: [
        "eDiscovery Search and delete",
        "A delete-only retention policy",
        "A Communication Compliance remediation",
        "A DLP quarantine policy for mailboxes"
      ],
      answer: 0,
      explain: "eDiscovery Search and delete finds and removes harmful content across the organization; actions are captured in the audit log.",
      es: {
        topic: "Cumplimiento de datos",
        q: "Un correo de phishing con un vínculo malicioso llegó a 3000 buzones antes de que se detectara. Cumplimiento debe quitar todas las copias y dejar registro de la acción. ¿Qué capacidad de Purview corresponde?",
        options: [
          "Buscar y eliminar de eDiscovery",
          "Una directiva de retención de solo eliminar",
          "Una corrección de Cumplimiento de comunicaciones",
          "Una directiva DLP de cuarentena para buzones"
        ],
        explain: "Buscar y eliminar de eDiscovery encuentra y quita contenido dañino en toda la organización; las acciones quedan en el registro de auditoría."
      }
    }
  ]
});
