// SC-900 > Introduction to Microsoft Purview and Microsoft's privacy principles > Describe the data compliance solutions of Microsoft Purview
Catalog.module("sc-900", {
  id: "purview-compliance",
  name: "Describe the data compliance solutions of Microsoft Purview",
  es: { name: "Descripción de las soluciones de cumplimiento de datos de Microsoft Purview" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-risk-compliance-governance/",
  quiz: {
    added: "2026-11-19",
    items: [
      {
        type: "single",
        topic: "eDiscovery",
        q: "Legal expects a lawsuit and needs to make sure a former manager's mailbox and OneDrive content can't be deleted while the case is open. What should the eDiscovery manager do first?",
        options: ["Create a case and place the content locations on hold", "Apply a retention label marked as a regulatory record", "Run Search and delete on the manager's mailbox", "Export the content to a review set and close the case"],
        answer: 0,
        explain: "Holds preserve content relevant to a case against inadvertent or intentional deletion. Regulatory records are irreversible and meant for records management, not litigation.",
        es: {
          topic: "eDiscovery",
          q: "El área legal espera una demanda y necesita asegurar que el contenido del buzón y de OneDrive de un ex gerente no se pueda eliminar mientras el caso esté abierto. ¿Qué debe hacer primero el administrador de eDiscovery?",
          options: ["Crear un caso y poner en retención las ubicaciones de contenido", "Aplicar una etiqueta de retención marcada como registro normativo", "Ejecutar Buscar y eliminar en el buzón del gerente", "Exportar el contenido a un conjunto de revisión y cerrar el caso"],
          explain: "Las retenciones conservan el contenido relevante para un caso frente a eliminaciones accidentales o intencionales. Los registros normativos son irreversibles y son para administración de registros, no para litigios."
        }
      },
      {
        type: "match",
        topic: "Microsoft Purview compliance",
        q: "Match each requirement to the Microsoft Purview solution that meets it.",
        values: ["Compliance Manager", "Communication Compliance", "Audit", "Records Management"],
        targets: [
          { t: "Track progress toward ISO 27001 with improvement actions and a score", answer: 0 },
          { t: "Review brokers' Teams messages for signs of insider trading", answer: 1 },
          { t: "Find out who downloaded a SharePoint file last Tuesday", answer: 2 },
          { t: "Keep contracts for seven years after they expire, with proof of deletion", answer: 3 }
        ],
        explain: "Compliance Manager measures posture, Communication Compliance reviews messages, Audit records activities, and Records Management controls high-value items through their lifecycle.",
        es: {
          topic: "Cumplimiento de Microsoft Purview",
          q: "Relacione cada requisito con la solución de Microsoft Purview que lo cumple.",
          values: ["Administrador de cumplimiento", "Cumplimiento de comunicaciones", "Auditoría", "Administración de registros"],
          targets: [
            { t: "Seguir el avance hacia ISO 27001 con acciones de mejora y una puntuación" },
            { t: "Revisar los mensajes de Teams de los operadores bursátiles en busca de uso de información privilegiada" },
            { t: "Averiguar quién descargó un archivo de SharePoint el martes pasado" },
            { t: "Conservar los contratos siete años después de su vencimiento, con prueba de eliminación" }
          ],
          explain: "El Administrador de cumplimiento mide la posición, Cumplimiento de comunicaciones revisa mensajes, Auditoría registra actividades y Administración de registros controla los elementos de alto valor durante su ciclo de vida."
        }
      },
      {
        type: "single",
        topic: "Data Lifecycle Management",
        q: "All documents in a SharePoint site must be kept for five years, but the signed contracts in that site must be kept for ten. What's the most efficient setup?",
        options: [
          "A five-year retention policy on the site plus a ten-year retention label on the contracts",
          "A ten-year retention label applied manually to every document in the site",
          "Two retention policies on the same site, one for five years and one for ten",
          "A ten-year retention policy on the whole site, plus a disposition review for every non-contract document"
        ],
        answer: 0,
        explain: "Policies apply the same settings to a whole container; labels set item-level exceptions such as a longer period.",
        es: {
          topic: "Administración del ciclo de vida de los datos",
          q: "Todos los documentos de un sitio de SharePoint deben conservarse cinco años, pero los contratos firmados de ese sitio deben conservarse diez. ¿Cuál es la configuración más eficiente?",
          options: [
            "Una directiva de retención de cinco años en el sitio y una etiqueta de retención de diez años en los contratos",
            "Una etiqueta de retención de diez años aplicada a mano a cada documento del sitio",
            "Dos directivas de retención en el mismo sitio, una de cinco años y otra de diez",
            "Una directiva de retención de diez años en todo el sitio, más una revisión para eliminación de cada documento que no sea contrato"
          ],
          explain: "Las directivas aplican la misma configuración a todo un contenedor; las etiquetas definen excepciones a nivel de elemento, como un período más largo."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Audit", s: "Audit (Standard) keeps audit records for 180 days.", answer: true, explain: "About the past six months." },
          { topic: "Records Management", s: "A global administrator can remove a regulatory record label if needed.", answer: false, explain: "Nobody can remove it, not even a global administrator." },
          { topic: "Compliance Manager", s: "Compliance Manager can only assess Microsoft 365, not other clouds.", answer: false, explain: "It assesses and manages compliance across a multicloud environment." }
        ],
        es: {
          statements: [
            { topic: "Auditoría", s: "Auditoría (Estándar) conserva los registros de auditoría durante 180 días.", explain: "Aproximadamente los últimos seis meses." },
            { topic: "Administración de registros", s: "Un administrador global puede quitar una etiqueta de registro normativo si hace falta.", explain: "Nadie puede quitarla, ni siquiera un administrador global." },
            { topic: "Administrador de cumplimiento", s: "El Administrador de cumplimiento solo puede evaluar Microsoft 365, no otras nubes.", explain: "Evalúa y administra el cumplimiento en un entorno multinube." }
          ]
        }
      },
      {
        type: "single",
        topic: "Audit",
        q: "During a breach investigation, the team needs to know whether the attacker opened or forwarded specific emails in a compromised mailbox. Which capability provides those events?",
        options: ["Intelligent insights in Audit (Premium)", "The 180-day log in Audit (Standard)", "Message trace in Exchange Online", "Activity explorer in Information Protection"],
        answer: 0,
        explain: "Audit (Premium) intelligent insights show when mail items were accessed, replied to or forwarded, and what users searched for.",
        es: {
          topic: "Auditoría",
          q: "Durante la investigación de una filtración, el equipo necesita saber si el atacante abrió o reenvió correos específicos de un buzón comprometido. ¿Qué capacidad ofrece esos eventos?",
          options: ["Las conclusiones inteligentes de Auditoría (Premium)", "El registro de 180 días de Auditoría (Estándar)", "El seguimiento de mensajes de Exchange Online", "El explorador de actividad de Information Protection"],
          explain: "Las conclusiones inteligentes de Auditoría (Premium) muestran cuándo se accedió a elementos de correo, se respondieron o se reenviaron, y qué buscaron los usuarios."
        }
      },
      {
        type: "multi",
        topic: "eDiscovery",
        q: "Which two capabilities apply once content has been added to an eDiscovery review set?",
        options: ["Text extracted from images with OCR becomes searchable", "Documents protected with sensitivity labels are decrypted automatically", "Content is moved out of the user's mailbox permanently", "The original items become read-only for their owners", "Items are relabeled as regulatory records"],
        answers: [0, 1],
        explain: "Review sets copy items to a secure Azure Storage location, where premium features such as OCR, threading and decryption apply. Originals stay in place.",
        es: {
          topic: "eDiscovery",
          q: "¿Cuáles son dos capacidades que se aplican una vez que el contenido se agrega a un conjunto de revisión de eDiscovery?",
          options: ["El texto extraído de imágenes con OCR se puede buscar", "Los documentos protegidos con etiquetas de confidencialidad se descifran automáticamente", "El contenido sale de forma permanente del buzón del usuario", "Los elementos originales pasan a ser de solo lectura para sus propietarios", "Los elementos se reetiquetan como registros normativos"],
          explain: "Los conjuntos de revisión copian los elementos a una ubicación segura de Azure Storage, donde se aplican funciones premium como OCR, hilos y descifrado. Los originales quedan en su lugar."
        }
      },
      {
        type: "single",
        topic: "Compliance Manager",
        q: "A new compliance lead opens Compliance Manager for the first time and already sees a score, without having created any assessment. Where does it come from?",
        options: ["The Microsoft 365 data protection baseline", "The Microsoft Secure Score of the tenant", "The Service Trust Portal audit reports", "Defender for Cloud regulatory compliance"],
        answer: 0,
        explain: "The initial score is based on the Microsoft 365 data protection baseline, and it includes Microsoft-managed points.",
        es: {
          topic: "Administrador de cumplimiento",
          q: "Una nueva responsable de cumplimiento abre el Administrador de cumplimiento por primera vez y ya ve una puntuación, sin haber creado ninguna evaluación. ¿De dónde sale?",
          options: ["De la línea base de protección de datos de Microsoft 365", "Del Microsoft Secure Score del inquilino", "De los informes de auditoría del Portal de confianza de servicios", "Del cumplimiento normativo de Defender for Cloud"],
          explain: "La puntuación inicial se basa en la línea base de protección de datos de Microsoft 365 e incluye los puntos administrados por Microsoft."
        }
      },
      {
        type: "dropdown",
        topic: "Records Management",
        q: "Complete the statement about records management.",
        parts: [
          "Employee files must be kept for seven years after the person leaves, so the label uses ",
          { options: ["event-based retention", "a fixed retention period from creation", "a delete-only setting"], answer: 0 },
          ", and before final deletion the company requires ",
          { options: ["a disposition review", "a legal hold", "an access review"], answer: 0 },
          "."
        ],
        explain: "Event-based retention starts the countdown at a business event; disposition reviews let reviewers approve deletion or extend retention.",
        es: {
          topic: "Administración de registros",
          q: "Complete la afirmación sobre la administración de registros.",
          parts: [
            "Los legajos de los empleados deben conservarse siete años después de que la persona se va, así que la etiqueta usa ",
            { options: ["retención basada en eventos", "un período fijo de retención desde la creación", "una configuración de solo eliminar"] },
            ", y antes de la eliminación final la empresa exige ",
            { options: ["una revisión para eliminación", "una retención legal", "una revisión de acceso"] },
            "."
          ],
          explain: "La retención basada en eventos empieza a contar en un evento del negocio; las revisiones para eliminación permiten aprobar la eliminación o extender la retención."
        }
      },
      {
        type: "single",
        topic: "Communication Compliance",
        q: "A company wants IT to configure monitoring policies, while only the compliance team can read and act on flagged messages. How does Communication Compliance support this?",
        options: ["Role-based access controls that separate configuration from review", "Separate Microsoft Entra tenants for IT and compliance", "Sensitivity labels applied to every flagged message", "Privileged Identity Management with approval required for every reviewer activation"],
        answer: 0,
        explain: "RBAC in Communication Compliance supports separation of duties between IT admins and the compliance team.",
        es: {
          topic: "Cumplimiento de comunicaciones",
          q: "Una empresa quiere que TI configure las directivas de supervisión, mientras que solo el equipo de cumplimiento pueda leer y actuar sobre los mensajes marcados. ¿Cómo lo admite Cumplimiento de comunicaciones?",
          options: ["Con controles de acceso basados en roles que separan la configuración de la revisión", "Con inquilinos de Microsoft Entra separados para TI y cumplimiento", "Con etiquetas de confidencialidad aplicadas a cada mensaje marcado", "Privileged Identity Management con aprobación obligatoria para cada activación de los revisores"],
          explain: "El RBAC de Cumplimiento de comunicaciones permite separar funciones entre los administradores de TI y el equipo de cumplimiento."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Data Lifecycle Management", s: "Microsoft 365 Copilot prompts and responses are stored in the user's mailbox, so retention policies can apply to them.", answer: true, explain: "AI interactions get the same retention controls as other content." },
          { topic: "Data Lifecycle Management", s: "Retention labels persist when a document is moved outside the Microsoft 365 tenant.", answer: false, explain: "They travel within the tenant but don't persist outside it." },
          { topic: "Communication Compliance", s: "Communication Compliance can evaluate WhatsApp messages.", answer: true, explain: "It covers Microsoft and non-Microsoft apps, including WhatsApp." }
        ],
        es: {
          statements: [
            { topic: "Administración del ciclo de vida de los datos", s: "Las indicaciones y respuestas de Microsoft 365 Copilot se guardan en el buzón del usuario, así que se les pueden aplicar directivas de retención.", explain: "Las interacciones de IA reciben los mismos controles de retención que el resto del contenido." },
            { topic: "Administración del ciclo de vida de los datos", s: "Las etiquetas de retención persisten cuando un documento sale del inquilino de Microsoft 365.", explain: "Viajan dentro del inquilino, pero no persisten fuera de él." },
            { topic: "Cumplimiento de comunicaciones", s: "Cumplimiento de comunicaciones puede evaluar mensajes de WhatsApp.", explain: "Cubre aplicaciones de Microsoft y de terceros, incluido WhatsApp." }
          ]
        }
      },
      {
        type: "single",
        topic: "Audit",
        q: "A SOC wants Microsoft 365 audit records to flow continuously into its third-party SIEM. Which method fits?",
        options: ["The Office 365 Management Activity API", "Exporting audit search results to CSV daily", "The Service Trust Portal My Library notifications", "Compliance Manager improvement actions"],
        answer: 0,
        explain: "The Management Activity API provides programmatic access to import audit data into a SIEM; Audit (Premium) gives it more bandwidth.",
        es: {
          topic: "Auditoría",
          q: "Un SOC quiere que los registros de auditoría de Microsoft 365 lleguen de forma continua a su SIEM de terceros. ¿Qué método corresponde?",
          options: ["La API de actividad de administración de Office 365", "Exportar a CSV los resultados de búsqueda de auditoría todos los días", "Las notificaciones de Mi biblioteca del Portal de confianza de servicios", "Las acciones de mejora del Administrador de cumplimiento"],
          explain: "La API de actividad de administración ofrece acceso programático para importar datos de auditoría a un SIEM; Auditoría (Premium) le da más ancho de banda."
        }
      },
      {
        type: "single",
        topic: "Data Lifecycle Management",
        q: "An employee is leaving, and the company must keep her mailbox content for legal reasons after her account is deleted. What should it do?",
        options: ["Place the mailbox on hold before deleting the account, making it inactive", "Enable auto-expanding archiving on the mailbox", "Export the mailbox to a PST file, store it on a file share and then delete the account", "Apply a sensitivity label with encryption to the mailbox"],
        answer: 0,
        explain: "A mailbox placed on hold before the account is deleted becomes an inactive mailbox and is retained.",
        es: {
          topic: "Administración del ciclo de vida de los datos",
          q: "Una empleada se va y la empresa debe conservar el contenido de su buzón por motivos legales después de eliminar su cuenta. ¿Qué debe hacer?",
          options: ["Poner el buzón en retención antes de eliminar la cuenta, para que quede inactivo", "Habilitar el archivado de expansión automática en el buzón", "Exportar el buzón a un archivo PST, guardarlo en un recurso compartido y después eliminar la cuenta", "Aplicar al buzón una etiqueta de confidencialidad con cifrado"],
          explain: "Un buzón que se pone en retención antes de eliminar la cuenta pasa a ser un buzón inactivo y se conserva."
        }
      }
    ]
  },
  units: [
    {
      id: "compliance-manager",
      name: "Describe Compliance Manager",
      es: { name: "Descripción del Administrador de cumplimiento" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-risk-compliance-governance/4-describe-compliance-manager",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "match",
            q: "Match each Compliance Manager element to its description.",
            values: ["Control", "Assessment", "Regulation template", "Improvement action"],
            targets: [
              { t: "A single requirement of a regulation, standard or policy", answer: 0 },
              { t: "A grouping of controls for a specific standard, with its own score", answer: 1 },
              { t: "A prebuilt control mapping you start an assessment from", answer: 2 },
              { t: "Guidance assigned to a user to implement and test, with notes and evidence", answer: 3 }
            ],
            explain: "These are the key data elements Compliance Manager uses.",
            es: {
              q: "Relacione cada elemento del Administrador de cumplimiento con su descripción.",
              values: ["Control", "Evaluación", "Plantilla de normativa", "Acción de mejora"],
              targets: [
                { t: "Un requisito puntual de una normativa, estándar o directiva" },
                { t: "Un conjunto de controles de un estándar concreto, con su propia puntuación" },
                { t: "Una asignación de controles predefinida desde la que se crea una evaluación" },
                { t: "Una guía asignada a un usuario para implementar y probar, con notas y evidencia" }
              ],
              explain: "Son los elementos de datos principales que usa el Administrador de cumplimiento."
            }
          },
          {
            type: "single",
            q: "Physical security of the datacenters is a requirement in a company's ISO 27001 assessment. In Compliance Manager, what type of control is it?",
            options: ["Microsoft-managed control", "Your control (customer-managed)", "Shared control", "Custom control"],
            answer: 0,
            explain: "Microsoft-managed controls cover Microsoft cloud services, which Microsoft is responsible for implementing.",
            es: {
              q: "La seguridad física de los centros de datos es un requisito de la evaluación ISO 27001 de una empresa. En el Administrador de cumplimiento, ¿qué tipo de control es?",
              options: ["Control administrado por Microsoft", "Su control (administrado por el cliente)", "Control compartido", "Control personalizado"],
              explain: "Los controles administrados por Microsoft cubren los servicios en la nube de Microsoft, que Microsoft debe implementar."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Compliance Manager provides regulatory templates for AI regulations and standards.", answer: true, explain: "They help assess compliance requirements for AI apps." },
              { s: "Compliance Manager updates technical action status by scanning your Microsoft 365 settings.", answer: true, explain: "It assesses controls continuously and automatically." },
              { s: "Every improvement action is worth the same number of points.", answer: false, explain: "Point values depend on the potential risk involved." }
            ],
            es: {
              statements: [
                { s: "El Administrador de cumplimiento ofrece plantillas de normativas para regulaciones y estándares de IA.", explain: "Ayudan a evaluar los requisitos de cumplimiento de las aplicaciones de IA." },
                { s: "El Administrador de cumplimiento actualiza el estado de las acciones técnicas analizando la configuración de Microsoft 365.", explain: "Evalúa los controles de forma continua y automática." },
                { s: "Todas las acciones de mejora valen la misma cantidad de puntos.", explain: "El valor depende del riesgo potencial involucrado." }
              ]
            }
          },
          {
            type: "single",
            q: "A compliance manager has limited time and wants to raise the compliance score as much as possible this quarter. What should she prioritize?",
            options: [
              "Improvement actions with the highest point value",
              "Microsoft-managed actions that are already complete",
              "Assessments with the fewest controls",
              "Regulations added most recently to the template list"
            ],
            answer: 0,
            explain: "Each action has a point value based on risk, so focusing on high-impact actions raises the score fastest.",
            es: {
              q: "Una responsable de cumplimiento tiene poco tiempo y quiere subir lo más posible la puntuación de cumplimiento este trimestre. ¿Qué debe priorizar?",
              options: [
                "Las acciones de mejora con mayor valor en puntos",
                "Las acciones administradas por Microsoft que ya están completas",
                "Las evaluaciones con menos controles",
                "Las normativas agregadas más recientemente a la lista de plantillas"
              ],
              explain: "Cada acción tiene un valor en puntos según el riesgo, así que enfocarse en las de mayor impacto sube la puntuación más rápido."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the Microsoft Purview portal.",
            parts: [
              "Compliance Manager, eDiscovery and Communication Compliance are grouped under ",
              { options: ["Risk & Compliance", "Data Security", "Data Governance"], answer: 0 },
              ", while Audit and Data Map are part of ",
              { options: ["Core", "Data Security", "Risk & Compliance"], answer: 0 },
              "."
            ],
            explain: "The Purview portal organizes solutions into Core, Risk & Compliance, Data Governance and Data Security.",
            es: {
              q: "Complete la afirmación sobre el portal de Microsoft Purview.",
              parts: [
                "El Administrador de cumplimiento, eDiscovery y Cumplimiento de comunicaciones se agrupan en ",
                { options: ["Riesgo y cumplimiento", "Seguridad de datos", "Gobernanza de datos"] },
                ", mientras que Auditoría y Data Map forman parte de ",
                { options: ["Núcleo", "Seguridad de datos", "Riesgo y cumplimiento"] },
                "."
              ],
              explain: "El portal de Purview organiza las soluciones en Núcleo, Riesgo y cumplimiento, Gobernanza de datos y Seguridad de datos."
            }
          },
          {
            type: "multi",
            q: "Which two kinds of points make up the compliance score?",
            options: ["Your points, from actions your organization completes", "Microsoft-managed points, from actions Microsoft completed", "Secure Score points from Defender XDR", "Points from Service Trust Portal downloads", "Bonus points for each assessment created"],
            answers: [0, 1],
            explain: "The score combines your points and Microsoft-managed points.",
            es: {
              q: "¿Cuáles son dos tipos de puntos que forman la puntuación de cumplimiento?",
              options: ["Sus puntos, de las acciones que completa su organización", "Los puntos administrados por Microsoft, de las acciones que completó Microsoft", "Los puntos de Secure Score de Defender XDR", "Los puntos por descargas del Portal de confianza de servicios", "Puntos extra por cada evaluación creada"],
              explain: "La puntuación combina sus puntos y los puntos administrados por Microsoft."
            }
          }
        ]
      }
    },
    {
      id: "communication-compliance",
      name: "Describe Communication Compliance",
      es: { name: "Descripción de Cumplimiento de comunicaciones" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-risk-compliance-governance/5-describe-communication-compliance",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "Before an acquisition is announced, a company wants to detect employees discussing the confidential project in Teams and email. Which solution fits?",
            options: ["Communication Compliance", "Data loss prevention", "Insider Risk Management analytics", "eDiscovery search"],
            answer: 0,
            explain: "Communication Compliance can scan for unauthorized communication about confidential projects such as acquisitions.",
            es: {
              q: "Antes de que se anuncie una adquisición, una empresa quiere detectar a los empleados que hablan del proyecto confidencial en Teams y por correo. ¿Qué solución corresponde?",
              options: ["Cumplimiento de comunicaciones", "Prevención de pérdida de datos", "El análisis de Insider Risk Management", "Una búsqueda de eDiscovery"],
              explain: "Cumplimiento de comunicaciones puede detectar comunicaciones no autorizadas sobre proyectos confidenciales, como adquisiciones."
            }
          },
          {
            type: "match",
            q: "Match each task to the Communication Compliance workflow stage.",
            values: ["Configure", "Investigate", "Remediate", "Maintain"],
            targets: [
              { t: "Identify requirements and create a harassment policy", answer: 0 },
              { t: "Review the user's history and documents on a flagged message", answer: 1 },
              { t: "Remove a message in Teams and notify the user", answer: 2 },
              { t: "Track trends with dashboard widgets and export logs", answer: 3 }
            ],
            explain: "The workflow is configure, investigate, remediate and maintain.",
            es: {
              q: "Relacione cada tarea con la etapa del flujo de trabajo de Cumplimiento de comunicaciones.",
              values: ["Configurar", "Investigar", "Corregir", "Mantener"],
              targets: [
                { t: "Identificar requisitos y crear una directiva contra el acoso" },
                { t: "Revisar el historial del usuario y los documentos de un mensaje marcado" },
                { t: "Quitar un mensaje en Teams y notificar al usuario" },
                { t: "Seguir tendencias con los widgets del panel y exportar registros" }
              ],
              explain: "El flujo es configurar, investigar, corregir y mantener."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Communication Compliance can analyze prompts and responses in Microsoft 365 Copilot.", answer: true, explain: "Coverage includes Copilot, Copilot Studio apps and connected AI apps." },
              { s: "Communication Compliance only evaluates text, not images.", answer: false, explain: "It evaluates text and image-based messages." },
              { s: "Communication Compliance integrates with Insider Risk Management.", answer: true, explain: "Risky communications can be early warning signs." }
            ],
            es: {
              statements: [
                { s: "Cumplimiento de comunicaciones puede analizar indicaciones y respuestas de Microsoft 365 Copilot.", explain: "La cobertura incluye Copilot, aplicaciones de Copilot Studio y aplicaciones de IA conectadas." },
                { s: "Cumplimiento de comunicaciones solo evalúa texto, no imágenes.", explain: "Evalúa mensajes de texto y basados en imágenes." },
                { s: "Cumplimiento de comunicaciones se integra con Insider Risk Management.", explain: "Las comunicaciones riesgosas pueden ser señales de alerta temprana." }
              ]
            }
          },
          {
            type: "single",
            q: "A reviewer is looking at a message flagged by a trainable classifier and wants a quick summary of it and its attachments. What does Security Copilot offer here?",
            options: [
              "A contextual summary with follow-up questions in the side panel",
              "Automatic deletion of the message from all mailboxes",
              "A KeyQL query generated by Copilot that finds similar messages across the tenant",
              "An insider risk level for the sender"
            ],
            answer: 0,
            explain: "In Communication Compliance, Copilot summarizes the message and attachments in the context of the classifier, and supports follow-up questions.",
            es: {
              q: "Un revisor mira un mensaje marcado por un clasificador entrenable y quiere un resumen rápido del mensaje y sus adjuntos. ¿Qué ofrece Security Copilot en este caso?",
              options: [
                "Un resumen contextual con preguntas de seguimiento en el panel lateral",
                "La eliminación automática del mensaje de todos los buzones",
                "Una consulta KeyQL generada por Copilot que encuentra mensajes parecidos en todo el inquilino",
                "Un nivel de riesgo interno para el remitente"
              ],
              explain: "En Cumplimiento de comunicaciones, Copilot resume el mensaje y los adjuntos en el contexto del clasificador y admite preguntas de seguimiento."
            }
          },
          {
            type: "single",
            q: "A financial regulator requires a firm to review its brokers' communications to guard against bribery and money laundering. Which compliance area of Communication Compliance does this fall under?",
            options: ["Regulatory compliance", "Corporate policies", "Risk management", "Data lifecycle management"],
            answer: 0,
            explain: "Reviewing broker communications to meet a regulation is the regulatory compliance scenario.",
            es: {
              q: "Un regulador financiero exige que una firma revise las comunicaciones de sus operadores para prevenir sobornos y lavado de dinero. ¿En qué área de Cumplimiento de comunicaciones entra?",
              options: ["Cumplimiento normativo", "Directivas corporativas", "Administración de riesgos", "Administración del ciclo de vida de los datos"],
              explain: "Revisar las comunicaciones de los operadores para cumplir una normativa es el escenario de cumplimiento normativo."
            }
          }
        ]
      }
    },
    {
      id: "ediscovery",
      name: "Describe eDiscovery",
      es: { name: "Descripción de eDiscovery" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-risk-compliance-governance/3-describe-ediscovery",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "Reviewers need to read Teams chat messages collected for a case in the context of the full back-and-forth conversation. Which eDiscovery feature helps?",
            options: ["Conversation threading in a review set", "Optical character recognition", "A hold on the Teams locations", "Export of search results to a local computer"],
            answer: 0,
            explain: "Conversation threading collects the entire Teams or Viva Engage thread when chats are added to a review set.",
            es: {
              q: "Los revisores necesitan leer los mensajes de chat de Teams reunidos para un caso en el contexto de toda la conversación. ¿Qué característica de eDiscovery ayuda?",
              options: ["Los hilos de conversación en un conjunto de revisión", "El reconocimiento óptico de caracteres", "Una retención sobre las ubicaciones de Teams", "La exportación de resultados de búsqueda a un equipo local"],
              explain: "Los hilos de conversación reúnen toda la conversación de Teams o Viva Engage cuando los chats se agregan a un conjunto de revisión."
            }
          },
          {
            type: "match",
            q: "Match each eDiscovery step to what happens in it.",
            values: ["Create and manage case", "Search and refine", "Review and take action"],
            targets: [
              { t: "Group all searches, holds and review sets for one investigation", answer: 0 },
              { t: "Query mailboxes, OneDrive and Teams and adjust the results", answer: 1 },
              { t: "Tag items, run analytics and export the relevant ones", answer: 2 }
            ],
            explain: "The workflow goes from a trigger event to a case, searches, and actions on review sets.",
            es: {
              q: "Relacione cada paso de eDiscovery con lo que ocurre en él.",
              values: ["Crear y administrar el caso", "Buscar y refinar", "Revisar y actuar"],
              targets: [
                { t: "Agrupar todas las búsquedas, retenciones y conjuntos de revisión de una investigación" },
                { t: "Consultar buzones, OneDrive y Teams y ajustar los resultados" },
                { t: "Etiquetar elementos, ejecutar análisis y exportar los relevantes" }
              ],
              explain: "El flujo va de un evento desencadenante a un caso, búsquedas y acciones sobre conjuntos de revisión."
            }
          },
          {
            type: "single",
            q: "A malicious message reached thousands of mailboxes and Teams chats. Which eDiscovery capability removes it across the organization?",
            options: ["Search and delete", "Place content locations on hold", "Create a review set", "Conversation threading"],
            answer: 0,
            explain: "Search and delete finds and deletes harmful content, including emails, Teams chats and Copilot data.",
            es: {
              q: "Un mensaje malicioso llegó a miles de buzones y chats de Teams. ¿Qué capacidad de eDiscovery lo quita en toda la organización?",
              options: ["Buscar y eliminar", "Poner en retención las ubicaciones de contenido", "Crear un conjunto de revisión", "Los hilos de conversación"],
              explain: "Buscar y eliminar encuentra y elimina contenido dañino, incluidos correos, chats de Teams y datos de Copilot."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Adding items to a review set copies them from their original location.", answer: true, explain: "Review sets are a secure, Microsoft-provided Azure Storage location." },
              { s: "eDiscovery managers can use natural language prompts to generate KeyQL queries with Copilot.", answer: true, explain: "The query can then be saved or run." },
              { s: "Any user can open eDiscovery cases without specific permissions.", answer: false, explain: "Users must be assigned the appropriate permissions." }
            ],
            es: {
              statements: [
                { s: "Agregar elementos a un conjunto de revisión los copia desde su ubicación original.", explain: "Los conjuntos de revisión son una ubicación segura de Azure Storage provista por Microsoft." },
                { s: "Los administradores de eDiscovery pueden generar consultas KeyQL con Copilot usando lenguaje natural.", explain: "Después pueden guardar o ejecutar la consulta." },
                { s: "Cualquier usuario puede abrir casos de eDiscovery sin permisos específicos.", explain: "Los usuarios necesitan tener asignados los permisos correspondientes." }
              ]
            }
          },
          {
            type: "multi",
            q: "Which two content locations can eDiscovery search?",
            options: ["Viva Engage", "Microsoft 365 Groups", "Azure SQL databases", "On-premises file servers", "AWS S3 buckets"],
            answers: [0, 1],
            explain: "Supported services include Exchange Online, Teams, Microsoft 365 Groups, OneDrive, SharePoint and Viva Engage.",
            es: {
              q: "¿Cuáles son dos ubicaciones de contenido que puede buscar eDiscovery?",
              options: ["Viva Engage", "Grupos de Microsoft 365", "Bases de datos de Azure SQL", "Servidores de archivos locales", "Buckets de AWS S3"],
              explain: "Los servicios admitidos incluyen Exchange Online, Teams, Grupos de Microsoft 365, OneDrive, SharePoint y Viva Engage."
            }
          }
        ]
      }
    },
    {
      id: "purview-audit",
      name: "Describe audit in Microsoft Purview",
      es: { name: "Descripción de la auditoría en Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-risk-compliance-governance/2-describe-audit",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "A bank must keep audit records of its traders' SharePoint activity for seven years. What does it need?",
            options: [
              "Audit (Premium) with a retention policy and the 10-year add-on license",
              "Audit (Standard), which keeps records for up to seven years",
              "An eDiscovery hold on the audit log",
              "A retention label applied to the unified audit log with a seven-year retain-only setting"
            ],
            answer: 0,
            explain: "Audit (Premium) retention policies keep records up to one year, and up to 10 years with the add-on license. Standard keeps 180 days.",
            es: {
              q: "Un banco debe conservar durante siete años los registros de auditoría de la actividad de sus operadores en SharePoint. ¿Qué necesita?",
              options: [
                "Auditoría (Premium) con una directiva de retención y la licencia complementaria de 10 años",
                "Auditoría (Estándar), que conserva registros hasta siete años",
                "Una retención de eDiscovery sobre el registro de auditoría",
                "Una etiqueta de retención aplicada al registro de auditoría unificado con la opción de solo conservar siete años"
              ],
              explain: "Las directivas de retención de Auditoría (Premium) conservan registros hasta un año, y hasta 10 años con la licencia complementaria. Estándar conserva 180 días."
            }
          },
          {
            type: "multi",
            q: "Which two methods give programmatic access to the unified audit log?",
            options: ["The Search-UnifiedAuditLog cmdlet", "The Audit Search Graph API", "The Service Trust Portal API", "The Compliance Manager score API", "Azure Resource Graph queries"],
            answers: [0, 1],
            explain: "Programmatic options include the Exchange Online PowerShell cmdlet, the Audit Search Graph API and the Office 365 Management Activity API.",
            es: {
              q: "¿Cuáles son dos métodos que dan acceso programático al registro de auditoría unificado?",
              options: ["El cmdlet Search-UnifiedAuditLog", "La API de Graph de búsqueda de auditoría", "La API del Portal de confianza de servicios", "La API de puntuación del Administrador de cumplimiento", "Las consultas de Azure Resource Graph"],
              explain: "Las opciones programáticas incluyen el cmdlet de PowerShell de Exchange Online, la API de Graph de búsqueda de auditoría y la API de actividad de administración de Office 365."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft 365 Copilot interactions are logged as CopilotInteraction events without extra configuration.", answer: true, explain: "Logging is automatic across apps like Teams, Outlook and Word." },
              { s: "Microsoft Security Copilot interactions are captured in Purview without any opt-in.", answer: false, explain: "A Copilot owner must opt in from the Security Copilot portal." },
              { s: "In Audit (Premium), Exchange and SharePoint records are retained for one year by default.", answer: true, explain: "Other activities default to 180 days unless a policy extends them." }
            ],
            es: {
              statements: [
                { s: "Las interacciones con Microsoft 365 Copilot se registran como eventos CopilotInteraction sin configuración adicional.", explain: "El registro es automático en aplicaciones como Teams, Outlook y Word." },
                { s: "Las interacciones con Microsoft Security Copilot se capturan en Purview sin necesidad de aceptación.", explain: "Un propietario de Copilot debe aceptarlo desde el portal de Security Copilot." },
                { s: "En Auditoría (Premium), los registros de Exchange y SharePoint se conservan un año de forma predeterminada.", explain: "Las demás actividades se conservan 180 días salvo que una directiva lo extienda." }
              ]
            }
          },
          {
            type: "single",
            q: "An investigator wants to know which terms a compromised user searched for in SharePoint Online before data was exfiltrated. What does this require?",
            options: ["Audit (Premium) intelligent insights", "Audit (Standard) export to CSV", "Activity explorer in DSPM", "Communication Compliance policy matches"],
            answer: 0,
            explain: "Intelligent insights include what users searched for in Exchange Online and SharePoint Online.",
            es: {
              q: "Un investigador quiere saber qué términos buscó un usuario comprometido en SharePoint Online antes de que se exfiltraran datos. ¿Qué se necesita?",
              options: ["Las conclusiones inteligentes de Auditoría (Premium)", "La exportación a CSV de Auditoría (Estándar)", "El explorador de actividad de DSPM", "Las coincidencias de directivas de Cumplimiento de comunicaciones"],
              explain: "Las conclusiones inteligentes incluyen lo que los usuarios buscaron en Exchange Online y SharePoint Online."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Audit (Standard).",
            parts: [
              "Audit (Standard) is ",
              { options: ["enabled by default", "disabled until an admin turns it on", "available only with an add-on"], answer: 0 },
              ", and search results can be exported to ",
              { options: ["a CSV file", "a review set", "a Power BI workspace"], answer: 0 },
              " for further analysis."
            ],
            explain: "Audit (Standard) works without extra configuration in most organizations, and results export to CSV.",
            es: {
              q: "Complete la afirmación sobre Auditoría (Estándar).",
              parts: [
                "Auditoría (Estándar) está ",
                { options: ["habilitada de forma predeterminada", "deshabilitada hasta que un administrador la activa", "disponible solo con un complemento"] },
                ", y los resultados de búsqueda se pueden exportar a ",
                { options: ["un archivo CSV", "un conjunto de revisión", "un área de trabajo de Power BI"] },
                " para analizarlos."
              ],
              explain: "Auditoría (Estándar) funciona sin configuración adicional en la mayoría de las organizaciones, y los resultados se exportan a CSV."
            }
          }
        ]
      }
    },
    {
      id: "data-lifecycle",
      name: "Describe Data Lifecycle Management",
      es: { name: "Descripción de la administración del ciclo de vida de los datos" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-risk-compliance-governance/6-describe-data-lifecycle-management",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "A user edits a document covered by a retain-for-three-years policy and then deletes it. What happens?",
            options: [
              "A copy is kept in a secure location the user doesn't normally see",
              "The deletion is blocked and the user sees a message until the retention period ends",
              "The document is moved to the user's manager",
              "The policy is removed from the site"
            ],
            answer: 0,
            explain: "Content stays in place; if it's edited or deleted, a copy is automatically kept in a secure location.",
            es: {
              q: "Un usuario edita un documento cubierto por una directiva de conservar tres años y después lo elimina. ¿Qué pasa?",
              options: [
                "Se guarda una copia en una ubicación segura que el usuario normalmente no ve",
                "La eliminación se bloquea y el usuario ve un mensaje hasta que termina el período de retención",
                "El documento se mueve al responsable del usuario",
                "La directiva se quita del sitio"
              ],
              explain: "El contenido queda en su lugar; si se edita o se elimina, se guarda automáticamente una copia en una ubicación segura."
            }
          },
          {
            type: "match",
            q: "Match each requirement to the retention outcome.",
            values: ["Retain-only", "Delete-only", "Retain and then delete"],
            targets: [
              { t: "Keep board minutes forever", answer: 0 },
              { t: "Remove Teams chats older than 90 days that have no business value", answer: 1 },
              { t: "Keep invoices for 10 years, then remove them", answer: 2 }
            ],
            explain: "The two actions, retain and delete, combine into these three outcomes.",
            es: {
              q: "Relacione cada requisito con el resultado de retención.",
              values: ["Solo conservar", "Solo eliminar", "Conservar y después eliminar"],
              targets: [
                { t: "Conservar las actas de directorio para siempre" },
                { t: "Eliminar los chats de Teams de más de 90 días sin valor para el negocio" },
                { t: "Conservar las facturas 10 años y después eliminarlas" }
              ],
              explain: "Las dos acciones, conservar y eliminar, se combinan en estos tres resultados."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "A document can have two retention labels at once.", answer: false, explain: "An email or document can only have a single retention label at a time." },
              { s: "Retention labels support disposition review before permanent deletion.", answer: true, explain: "Reviewers can check content before it's deleted." },
              { s: "Deleting content with no business value reduces the attack surface.", answer: true, explain: "It also lowers risk in litigation or a breach." }
            ],
            es: {
              statements: [
                { s: "Un documento puede tener dos etiquetas de retención a la vez.", explain: "Un correo o documento solo puede tener una etiqueta de retención a la vez." },
                { s: "Las etiquetas de retención admiten revisión para eliminación antes del borrado definitivo.", explain: "Los revisores pueden comprobar el contenido antes de eliminarlo." },
                { s: "Eliminar contenido sin valor para el negocio reduce la superficie de ataque.", explain: "También reduce el riesgo ante litigios o filtraciones." }
              ]
            }
          },
          {
            type: "single",
            q: "A document with a retention policy inherited from its site is moved to another site that has no policy. What happens to its retention settings?",
            options: [
              "They don't travel with it, though a copy is kept in the original workload's secure location",
              "They travel with the document to the new site",
              "The new site automatically adopts the old site's retention policy for that document and any others moved with it",
              "The document is deleted because it left the container"
            ],
            answer: 0,
            explain: "Items inherit policy settings from their container; if moved out, a copy is kept, but settings don't follow. Labels, in contrast, travel within the tenant.",
            es: {
              q: "Un documento con una directiva de retención heredada de su sitio se mueve a otro sitio sin directiva. ¿Qué pasa con su configuración de retención?",
              options: [
                "No viaja con él, aunque se guarda una copia en la ubicación segura de la carga de trabajo original",
                "Viaja con el documento al sitio nuevo",
                "El sitio nuevo adopta automáticamente la directiva de retención del sitio anterior para ese documento y los que se muevan con él",
                "El documento se elimina porque salió del contenedor"
              ],
              explain: "Los elementos heredan la directiva de su contenedor; si salen, se guarda una copia, pero la configuración no los sigue. Las etiquetas, en cambio, viajan dentro del inquilino."
            }
          },
          {
            type: "single",
            q: "A sales director's mailbox keeps hitting its storage limit, and he's deleting old emails the company may need. Which Data Lifecycle Management capability helps?",
            options: ["Auto-expanding mailbox archiving", "An inactive mailbox", "A delete-only retention policy", "An eDiscovery hold on the mailbox"],
            answer: 0,
            explain: "Mailbox archiving adds storage, with auto-expanding archiving for mailboxes over the standard limit.",
            es: {
              q: "El buzón de un director comercial llega seguido a su límite de almacenamiento y él borra correos viejos que la empresa podría necesitar. ¿Qué capacidad de la administración del ciclo de vida de los datos ayuda?",
              options: ["El archivado de buzón de expansión automática", "Un buzón inactivo", "Una directiva de retención de solo eliminar", "Una retención de eDiscovery en el buzón"],
              explain: "El archivado de buzones agrega espacio, con expansión automática para los buzones que superan el límite estándar."
            }
          }
        ]
      }
    },
    {
      id: "records-management",
      name: "Describe Microsoft Purview Records Management",
      es: { name: "Descripción de la Administración de registros de Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-risk-compliance-governance/7-describe-records-management",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "An admin wants to mark certain items as regulatory records, but the option doesn't appear in the retention label settings. Why?",
            options: [
              "It's off by default and must be enabled with PowerShell",
              "It requires Audit (Premium) to be turned on first for the whole tenant",
              "It's only available for SharePoint, not Exchange",
              "It must be requested from Microsoft support"
            ],
            answer: 0,
            explain: "Because regulatory records can have irreversible consequences, the option isn't available by default and is enabled with PowerShell.",
            es: {
              q: "Un administrador quiere marcar ciertos elementos como registros normativos, pero la opción no aparece en la configuración de la etiqueta de retención. ¿Por qué?",
              options: [
                "Está desactivada de forma predeterminada y se habilita con PowerShell",
                "Requiere activar primero Auditoría (Premium) para todo el inquilino",
                "Solo está disponible para SharePoint, no para Exchange",
                "Hay que pedírsela al soporte de Microsoft"
              ],
              explain: "Como los registros normativos pueden tener consecuencias irreversibles, la opción no está disponible por defecto y se habilita con PowerShell."
            }
          },
          {
            type: "multi",
            q: "Which two things happen when content is labeled as a record?",
            options: ["Restrictions block certain activities on it", "Proof of disposition is kept at the end of the retention period", "The content is encrypted with a customer key", "The content is moved to a review set", "The author loses read access"],
            answers: [0, 1],
            explain: "Labeling as a record puts restrictions in place, logs activities and keeps proof of disposition.",
            es: {
              q: "¿Cuáles son dos cosas que ocurren cuando un contenido se etiqueta como registro?",
              options: ["Se aplican restricciones que bloquean ciertas actividades", "Se conserva una prueba de eliminación al final del período de retención", "El contenido se cifra con una clave del cliente", "El contenido se mueve a un conjunto de revisión", "El autor pierde el acceso de lectura"],
              explain: "Etiquetar como registro aplica restricciones, registra las actividades y conserva la prueba de eliminación."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "A file plan can import a retention schedule from another system.", answer: true, explain: "It also shows all retention labels and their details in one place." },
              { s: "Retention periods of a regulatory record can be shortened after the label is applied.", answer: false, explain: "They can't be made shorter." },
              { s: "Users can apply retain and delete actions to emails with Outlook rules.", answer: true, explain: "That's one of the common use cases." }
            ],
            es: {
              statements: [
                { s: "Un plan de archivos puede importar un calendario de retención de otro sistema.", explain: "También muestra todas las etiquetas de retención y sus detalles en un solo lugar." },
                { s: "Los períodos de retención de un registro normativo se pueden acortar después de aplicar la etiqueta.", explain: "No se pueden acortar." },
                { s: "Los usuarios pueden aplicar acciones de conservar y eliminar a los correos con reglas de Outlook.", explain: "Es uno de los casos de uso habituales." }
              ]
            }
          },
          {
            type: "single",
            q: "Product documentation must be kept for five years after the product is discontinued, not after it was written. Which feature handles this?",
            options: ["Event-based retention", "A retain-only retention policy", "Disposition review", "Auto-expanding archiving"],
            answer: 0,
            explain: "Event-based retention starts the countdown when an event such as a product being discontinued is recorded.",
            es: {
              q: "La documentación de un producto debe conservarse cinco años después de que el producto se discontinúa, no después de escribirla. ¿Qué característica lo resuelve?",
              options: ["La retención basada en eventos", "Una directiva de retención de solo conservar", "La revisión para eliminación", "El archivado de expansión automática"],
              explain: "La retención basada en eventos empieza a contar cuando se registra un evento, como la discontinuación del producto."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about records management.",
            parts: [
              "Records management builds on ",
              { options: ["Data Lifecycle Management", "Information Protection", "Insider Risk Management"], answer: 0 },
              ", and at the end of a disposition review the reviewer either approves deletion or ",
              { options: ["extends the retention period", "applies a sensitivity label", "places the item on legal hold"], answer: 0 },
              "."
            ],
            explain: "Records management adds control for high-value items on top of DLM's retention capabilities.",
            es: {
              q: "Complete la afirmación sobre la administración de registros.",
              parts: [
                "La administración de registros se basa en ",
                { options: ["la administración del ciclo de vida de los datos", "Information Protection", "Insider Risk Management"] },
                ", y al final de una revisión para eliminación el revisor aprueba la eliminación o ",
                { options: ["extiende el período de retención", "aplica una etiqueta de confidencialidad", "pone el elemento en retención legal"] },
                "."
              ],
              explain: "La administración de registros agrega control para elementos de alto valor sobre las capacidades de retención de DLM."
            }
          }
        ]
      }
    }
  ]
});
