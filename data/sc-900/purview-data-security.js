// SC-900 > Introduction to Microsoft Purview and Microsoft's privacy principles > Describe the data security solutions of Microsoft Purview
Catalog.module("sc-900", {
  id: "purview-data-security",
  name: "Describe the data security solutions of Microsoft Purview",
  es: { name: "Descripción de las soluciones de seguridad de datos de Microsoft Purview" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-solutions/",
  quiz: {
    added: "2026-11-19",
    items: [
      {
        type: "single",
        topic: "Data classification",
        q: "A law firm wants to detect its own engagement letters, which have no fixed pattern like an ID number, across SharePoint and Exchange. Which classification method fits?",
        options: ["A custom trainable classifier seeded with sample letters", "A custom sensitive information type with a regular expression", "A named entity sensitive information type for person names", "An exact data match classifier built from a client database"],
        answer: 0,
        explain: "Trainable classifiers learn what content is, which suits documents unique to an organization with no reliable pattern.",
        es: {
          topic: "Clasificación de datos",
          q: "Un estudio jurídico quiere detectar sus propias cartas de compromiso, que no tienen un patrón fijo como un número de identificación, en SharePoint y Exchange. ¿Qué método de clasificación corresponde?",
          options: ["Un clasificador entrenable personalizado alimentado con cartas de ejemplo", "Un tipo de información confidencial personalizado con una expresión regular", "Un tipo de información confidencial de entidad con nombre para nombres de personas", "Un clasificador de coincidencia exacta de datos creado con una base de clientes"],
          explain: "Los clasificadores entrenables aprenden qué es el contenido, lo que sirve para documentos propios de una organización sin un patrón confiable."
        }
      },
      {
        type: "single",
        topic: "Adaptive protection",
        q: "Insider Risk Management raises a user to the Elevated risk level. Without any admin action, the user is now blocked from sharing sensitive files externally. What made this happen?",
        options: ["Adaptive protection assigned a DLP policy based on the risk level", "A sensitivity label policy required a justification for the change", "A Conditional Access sign-in risk policy blocked the session", "Communication compliance quarantined the user's messages"],
        answer: 0,
        explain: "Adaptive protection dynamically applies DLP, Data Lifecycle Management and Conditional Access controls according to insider risk levels.",
        es: {
          topic: "Protección adaptable",
          q: "Insider Risk Management eleva a un usuario al nivel de riesgo Elevado. Sin que ningún administrador haga nada, el usuario ya no puede compartir archivos confidenciales fuera de la organización. ¿Qué lo provocó?",
          options: ["La protección adaptable asignó una directiva DLP según el nivel de riesgo", "Una directiva de etiquetas de confidencialidad exigió una justificación para el cambio", "Una directiva de acceso condicional de riesgo de inicio de sesión bloqueó la sesión", "El cumplimiento de comunicaciones puso en cuarentena los mensajes del usuario"],
          explain: "La protección adaptable aplica dinámicamente controles de DLP, administración del ciclo de vida de los datos y acceso condicional según los niveles de riesgo interno."
        }
      },
      {
        type: "match",
        topic: "Microsoft Purview data security",
        q: "Match each requirement to the Microsoft Purview solution that meets it.",
        values: ["Sensitivity labels", "Data loss prevention", "Insider Risk Management", "Data Security Posture Management"],
        targets: [
          { t: "Encrypt a document so protection travels with it outside the company", answer: 0 },
          { t: "Block a Teams message that contains a credit card number", answer: 1 },
          { t: "Detect a departing employee downloading large volumes of files", answer: 2 },
          { t: "See which AI agents access sensitive data without policies in place", answer: 3 }
        ],
        explain: "Labels protect content, DLP acts on sharing, IRM detects risky user behavior, and DSPM gives a unified posture view, including AI observability.",
        es: {
          topic: "Seguridad de datos de Microsoft Purview",
          q: "Relacione cada requisito con la solución de Microsoft Purview que lo cumple.",
          values: ["Etiquetas de confidencialidad", "Prevención de pérdida de datos", "Insider Risk Management", "Administración de la posición de seguridad de los datos"],
          targets: [
            { t: "Cifrar un documento para que la protección viaje con él fuera de la empresa" },
            { t: "Bloquear un mensaje de Teams que contiene un número de tarjeta de crédito" },
            { t: "Detectar a un empleado que se va descargando grandes volúmenes de archivos" },
            { t: "Ver qué agentes de IA acceden a datos confidenciales sin directivas aplicadas" }
          ],
          explain: "Las etiquetas protegen el contenido, DLP actúa sobre el uso compartido, IRM detecta comportamiento riesgoso y DSPM da una vista unificada de la posición, incluida la observabilidad de IA."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Sensitivity labels", s: "A document can have a Confidential label and a Finance label applied at the same time.", answer: false, explain: "Each item can only have one sensitivity label at a time." },
          { topic: "Data classification", s: "Trainable classifiers can classify encrypted items.", answer: false, explain: "Classifiers only work with items that aren't encrypted." },
          { topic: "Data loss prevention", s: "DLP alerts are routed to the Microsoft Defender portal and combined into incidents.", answer: true, explain: "That gives a comprehensive view of potential policy violations." }
        ],
        es: {
          statements: [
            { topic: "Etiquetas de confidencialidad", s: "Un documento puede tener aplicadas al mismo tiempo una etiqueta Confidencial y una etiqueta Finanzas.", explain: "Cada elemento solo puede tener una etiqueta de confidencialidad a la vez." },
            { topic: "Clasificación de datos", s: "Los clasificadores entrenables pueden clasificar elementos cifrados.", explain: "Los clasificadores solo funcionan con elementos que no están cifrados." },
            { topic: "Prevención de pérdida de datos", s: "Las alertas de DLP se envían al portal de Microsoft Defender y se combinan en incidentes.", explain: "Eso da una vista completa de las posibles infracciones de directivas." }
          ]
        }
      },
      {
        type: "single",
        topic: "Data Security Investigations",
        q: "After a breach, a security team must find out which of 40,000 exfiltrated files contain exposed credentials or IP, and it has no forensic tools. Which solution fits?",
        options: ["Microsoft Purview Data Security Investigations", "Microsoft Purview eDiscovery with a legal hold", "Content explorer in Information Protection", "Microsoft Purview Audit (Premium)"],
        answer: 0,
        explain: "Data Security Investigations uses generative AI (vector search, categorization and examination) to find the riskiest content in incident data.",
        es: {
          topic: "Investigaciones de seguridad de datos",
          q: "Después de una filtración, un equipo de seguridad debe averiguar cuáles de 40 000 archivos exfiltrados contienen credenciales expuestas o propiedad intelectual, y no tiene herramientas forenses. ¿Qué solución corresponde?",
          options: ["Investigaciones de seguridad de datos de Microsoft Purview", "eDiscovery de Microsoft Purview con una retención legal", "El explorador de contenido de Information Protection", "Auditoría de Microsoft Purview (Premium)"],
          explain: "Investigaciones de seguridad de datos usa IA generativa (búsqueda vectorial, categorización y examen) para encontrar el contenido más riesgoso de los datos del incidente."
        }
      },
      {
        type: "multi",
        topic: "Data loss prevention",
        q: "Which two locations can a Microsoft Purview DLP policy protect?",
        options: ["Files on Windows 11 and macOS devices", "On-premises file shares", "Azure virtual network flow logs", "Domain controller security event logs", "Firewall rules in Azure Firewall"],
        answers: [0, 1],
        explain: "DLP covers Microsoft 365 services, Office apps, Windows and macOS endpoints, non-Microsoft cloud apps, on-premises file shares and SharePoint, Fabric and Power BI, and Edge for Business.",
        es: {
          topic: "Prevención de pérdida de datos",
          q: "¿Cuáles son dos ubicaciones que puede proteger una directiva DLP de Microsoft Purview?",
          options: ["Archivos en dispositivos Windows 11 y macOS", "Recursos compartidos de archivos locales", "Los registros de flujo de redes virtuales de Azure", "Los registros de eventos de seguridad de los controladores de dominio", "Las reglas de firewall de Azure Firewall"],
          explain: "DLP cubre servicios de Microsoft 365, aplicaciones de Office, puntos de conexión Windows y macOS, aplicaciones en la nube que no son de Microsoft, recursos compartidos y SharePoint locales, Fabric y Power BI, y Edge para empresas."
        }
      },
      {
        type: "dropdown",
        topic: "Sensitivity labels",
        q: "Complete the statement about sensitivity labels and Microsoft 365 Copilot.",
        parts: [
          "When Copilot builds a response from several labeled items, the response inherits ",
          { options: ["the most restrictive label", "the label of the first item read", "no label at all"], answer: 0 },
          ", and for encrypted content Copilot first checks ",
          { options: ["whether the user has permission to access it", "whether the label has a watermark", "whether DSPM has scanned the item"], answer: 0 },
          "."
        ],
        explain: "Copilot honors labels: it inherits the highest-priority label and respects encryption permissions.",
        es: {
          topic: "Etiquetas de confidencialidad",
          q: "Complete la afirmación sobre las etiquetas de confidencialidad y Microsoft 365 Copilot.",
          parts: [
            "Cuando Copilot arma una respuesta a partir de varios elementos etiquetados, la respuesta hereda ",
            { options: ["la etiqueta más restrictiva", "la etiqueta del primer elemento leído", "ninguna etiqueta"] },
            ", y en el contenido cifrado Copilot primero comprueba ",
            { options: ["si el usuario tiene permiso para acceder a él", "si la etiqueta tiene una marca de agua", "si DSPM analizó el elemento"] },
            "."
          ],
          explain: "Copilot respeta las etiquetas: hereda la de mayor prioridad y respeta los permisos del cifrado."
        }
      },
      {
        type: "single",
        topic: "Insider Risk Management",
        q: "Before creating any insider risk policy, a CISO wants to know where the organization's highest user risk is concentrated. What should the team use?",
        options: ["Insider risk analytics", "A data theft by departing users policy", "The DSPM asset explorer", "Activity explorer filtered by label downgrades"],
        answer: 0,
        explain: "Insider risk analytics evaluates potential risks without requiring any prior policy setup, to help decide which policies to configure.",
        es: {
          topic: "Insider Risk Management",
          q: "Antes de crear cualquier directiva de riesgo interno, un CISO quiere saber dónde se concentra el mayor riesgo de usuarios de la organización. ¿Qué debe usar el equipo?",
          options: ["El análisis de riesgos internos", "Una directiva de robo de datos por usuarios que se van", "El explorador de recursos de DSPM", "El explorador de actividad filtrado por bajadas de etiqueta"],
          explain: "El análisis de riesgos internos evalúa los posibles riesgos sin necesidad de configurar directivas antes, para decidir cuáles configurar."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Adaptive protection", s: "When a user's insider risk level drops, the controls adaptive protection applied relax automatically.", answer: true, explain: "Risk levels update continuously, and controls follow them." },
          { topic: "Data Security Posture Management", s: "DSPM only covers Microsoft 365 workloads.", answer: false, explain: "It also covers Azure, Fabric and non-Microsoft platforms such as Google Cloud, Snowflake and Databricks." },
          { topic: "Data Security Investigations", s: "Data Security Investigations is billed pay-as-you-go instead of per user.", answer: true, explain: "You pay for the storage and processing you use." }
        ],
        es: {
          statements: [
            { topic: "Protección adaptable", s: "Cuando baja el nivel de riesgo interno de un usuario, los controles que aplicó la protección adaptable se relajan automáticamente.", explain: "Los niveles de riesgo se actualizan continuamente y los controles los siguen." },
            { topic: "Administración de la posición de seguridad de los datos", s: "DSPM solo cubre cargas de trabajo de Microsoft 365.", explain: "También cubre Azure, Fabric y plataformas de terceros como Google Cloud, Snowflake y Databricks." },
            { topic: "Investigaciones de seguridad de datos", s: "Investigaciones de seguridad de datos se factura con pago por uso en lugar de por usuario.", explain: "Paga por el almacenamiento y el procesamiento que usa." }
          ]
        }
      },
      {
        type: "single",
        topic: "Data loss prevention",
        q: "Employees paste customer data into third-party generative AI sites from Edge on onboarded Windows devices. The company wants to warn them and let them override with a justification. What should it configure?",
        options: ["An endpoint DLP policy with a block with override action", "A sensitivity label with a watermark", "A Risky AI usage policy in Insider Risk Management that blocks the paste", "A trainable classifier for AI prompts"],
        answer: 0,
        explain: "Endpoint DLP can warn or block sharing sensitive data with third-party AI sites; block with override captures a justification. IRM detects risk but doesn't block the paste.",
        es: {
          topic: "Prevención de pérdida de datos",
          q: "Los empleados pegan datos de clientes en sitios de IA generativa de terceros desde Edge en dispositivos Windows incorporados. La empresa quiere avisarles y permitirles continuar con una justificación. ¿Qué debe configurar?",
          options: ["Una directiva DLP de punto de conexión con la acción bloquear con invalidación", "Una etiqueta de confidencialidad con marca de agua", "Una directiva de uso riesgoso de IA en Insider Risk Management que bloquee el pegado", "Un clasificador entrenable para indicaciones de IA"],
          explain: "DLP de punto de conexión puede advertir o bloquear el envío de datos confidenciales a sitios de IA de terceros; bloquear con invalidación registra una justificación. IRM detecta el riesgo, pero no bloquea el pegado."
        }
      },
      {
        type: "single",
        topic: "Sensitivity labels",
        q: "A company wants every new Teams team marked Highly Confidential to block guest access, without automatically labeling the files inside. Which label scope should it use?",
        options: ["Groups & sites", "Files & other data assets", "Emails", "Meetings"],
        answer: 0,
        explain: "The Groups & sites scope protects containers through access settings; it doesn't label individual items.",
        es: {
          topic: "Etiquetas de confidencialidad",
          q: "Una empresa quiere que cada equipo nuevo de Teams marcado como Altamente confidencial bloquee el acceso de invitados, sin etiquetar automáticamente los archivos que contiene. ¿Qué ámbito de etiqueta debe usar?",
          options: ["Grupos y sitios", "Archivos y otros recursos de datos", "Correos electrónicos", "Reuniones"],
          explain: "El ámbito Grupos y sitios protege los contenedores mediante la configuración de acceso; no etiqueta elementos individuales."
        }
      },
      {
        type: "single",
        topic: "Data classification",
        q: "A retailer wants DLP to detect only its real loyalty card numbers stored in a customer database, not any number with the same format. Which classification gives the fewest false positives?",
        options: ["An exact data match (EDM) classifier", "A custom sensitive information type with a regex", "A built-in credit card sensitive information type", "A pre-trained classifier for financial documents"],
        answer: 0,
        explain: "EDM references exact values from a database, so it matches real values rather than anything with the right shape.",
        es: {
          topic: "Clasificación de datos",
          q: "Un comercio quiere que DLP detecte solo sus números reales de tarjeta de fidelidad guardados en una base de clientes, no cualquier número con el mismo formato. ¿Qué clasificación da menos falsos positivos?",
          options: ["Un clasificador de coincidencia exacta de datos (EDM)", "Un tipo de información confidencial personalizado con una regex", "El tipo de información confidencial integrado de tarjeta de crédito", "Un clasificador preentrenado para documentos financieros"],
          explain: "EDM usa valores exactos de una base de datos, así que detecta valores reales y no cualquier cosa con el formato correcto."
        }
      }
    ]
  },
  units: [
    {
      id: "data-classification",
      name: "Describe the data classification capabilities of Microsoft Purview Information Protection",
      es: { name: "Descripción de las funcionalidades de clasificación de datos de Microsoft Purview Information Protection" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-solutions/2-identify-sensitive-data",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "match",
            q: "Match each element of a sensitive information type to its role.",
            values: ["Primary element", "Supporting element", "Confidence level", "Proximity"],
            targets: [
              { t: "The nine-digit pattern the SIT looks for", answer: 0 },
              { t: "The keyword \"Social Security Number\" found near the digits", answer: 1 },
              { t: "Low, medium or high, based on how much evidence is found", answer: 2 },
              { t: "The maximum number of characters between keyword and pattern", answer: 3 }
            ],
            explain: "These components together determine when a SIT reports a match.",
            es: {
              q: "Relacione cada elemento de un tipo de información confidencial con su función.",
              values: ["Elemento principal", "Elemento de apoyo", "Nivel de confianza", "Proximidad"],
              targets: [
                { t: "El patrón de nueve dígitos que busca el SIT" },
                { t: "La palabra clave \"Social Security Number\" encontrada cerca de los dígitos" },
                { t: "Bajo, medio o alto, según cuánta evidencia se encuentra" },
                { t: "La cantidad máxima de caracteres entre la palabra clave y el patrón" }
              ],
              explain: "Estos componentes juntos determinan cuándo un SIT informa una coincidencia."
            }
          },
          {
            type: "single",
            q: "An admin raises a SIT's confidence level from low to high. What's the expected effect?",
            options: [
              "Fewer false positives, but some true matches may be missed",
              "More matches overall, because weaker evidence is now enough to report a match",
              "The SIT starts working on encrypted files",
              "Proximity stops being evaluated"
            ],
            answer: 0,
            explain: "A high confidence level returns fewer false positives but might miss more true matches.",
            es: {
              q: "Un administrador sube el nivel de confianza de un SIT de bajo a alto. ¿Qué efecto se espera?",
              options: [
                "Menos falsos positivos, aunque puede pasar por alto algunas coincidencias reales",
                "Más coincidencias en total, porque ahora alcanza con evidencia más débil para informar una coincidencia",
                "El SIT empieza a funcionar con archivos cifrados",
                "La proximidad deja de evaluarse"
              ],
              explain: "Un nivel de confianza alto devuelve menos falsos positivos, pero puede pasar por alto más coincidencias reales."
            }
          },
          {
            type: "single",
            q: "An analyst needs to see that a user changed a document's label from Confidential to Public and then copied it to a USB drive. Which tool shows this?",
            options: ["Activity explorer", "Content explorer", "The DSPM asset explorer", "Compliance Manager"],
            answer: 0,
            explain: "Activity explorer shows actions on content, such as label downgrades, and endpoint DLP signals like copies to USB. Content explorer shows a snapshot of classified items.",
            es: {
              q: "Un analista necesita ver que un usuario cambió la etiqueta de un documento de Confidencial a Público y después lo copió a un USB. ¿Qué herramienta lo muestra?",
              options: ["El explorador de actividad", "El explorador de contenido", "El explorador de recursos de DSPM", "El Administrador de cumplimiento"],
              explain: "El explorador de actividad muestra acciones sobre el contenido, como bajadas de etiqueta, y señales de DLP de punto de conexión como copias a USB. El explorador de contenido muestra una instantánea de los elementos clasificados."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Built-in sensitive information types can be edited directly by admins.", answer: false, explain: "You can't edit them, but you can copy one as a template." },
              { s: "Access to content explorer is highly restricted because it lets users read scanned files.", answer: true, explain: "Users need a designated content explorer role group." },
              { s: "The same SITs that protect email can detect sensitive data pasted into Microsoft 365 Copilot prompts.", answer: true, explain: "Classification extends to AI prompts and responses." }
            ],
            es: {
              statements: [
                { s: "Los administradores pueden editar directamente los tipos de información confidencial integrados.", explain: "No se pueden editar, pero se pueden copiar como plantilla." },
                { s: "El acceso al explorador de contenido está muy restringido porque permite leer los archivos analizados.", explain: "Los usuarios necesitan un grupo de roles designado del explorador de contenido." },
                { s: "Los mismos SIT que protegen el correo pueden detectar datos confidenciales pegados en indicaciones de Microsoft 365 Copilot.", explain: "La clasificación se extiende a indicaciones y respuestas de IA." }
              ]
            }
          },
          {
            type: "single",
            q: "What's the first step when creating a custom trainable classifier?",
            options: [
              "Seed it with samples that are definitely in the category and samples that definitely aren't",
              "Write a regular expression, a keyword list and a proximity window for the category",
              "Upload a hashed table of exact values",
              "Publish it to SharePoint and wait for matches"
            ],
            answer: 0,
            explain: "Seeding builds the prediction model; you then verify results and publish once accuracy stabilizes.",
            es: {
              q: "¿Cuál es el primer paso al crear un clasificador entrenable personalizado?",
              options: [
                "Alimentarlo con ejemplos que sin duda son de la categoría y ejemplos que sin duda no lo son",
                "Escribir una expresión regular, una lista de palabras clave y una ventana de proximidad para la categoría",
                "Cargar una tabla con hash de valores exactos",
                "Publicarlo en SharePoint y esperar coincidencias"
              ],
              explain: "La alimentación con ejemplos crea el modelo de predicción; después se verifican los resultados y se publica cuando la precisión se estabiliza."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about named entity SITs.",
            parts: [
              "Named entity SITs detect names, physical addresses and ",
              { options: ["medical terms and conditions", "credit card numbers", "Azure resource IDs"], answer: 0 },
              ". A SIT that detects all physical addresses worldwide is ",
              { options: ["bundled", "unbundled", "exact data match"], answer: 0 },
              "."
            ],
            explain: "Bundled named entity SITs detect all matches in a class; unbundled ones have a narrow focus, such as one country's addresses.",
            es: {
              q: "Complete la afirmación sobre los SIT de entidad con nombre.",
              parts: [
                "Los SIT de entidad con nombre detectan nombres, direcciones físicas y ",
                { options: ["términos y afecciones médicas", "números de tarjeta de crédito", "identificadores de recursos de Azure"] },
                ". Un SIT que detecta todas las direcciones físicas del mundo es ",
                { options: ["agrupado", "no agrupado", "de coincidencia exacta de datos"] },
                "."
              ],
              explain: "Los SIT de entidad con nombre agrupados detectan todas las coincidencias de una clase; los no agrupados tienen un foco acotado, como las direcciones de un país."
            }
          }
        ]
      }
    },
    {
      id: "sensitivity-labels",
      name: "Describe sensitivity labels and policies in Microsoft Purview Information Protection",
      es: { name: "Descripción de las etiquetas y directivas de confidencialidad en Microsoft Purview Information Protection" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-solutions/3-describe-sensitivity-labels-policies",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "A third-party archiving app needs to read which sensitivity label a document has so it can apply its own protection. Why is that possible?",
            options: [
              "Labels are stored in clear text in the content's metadata",
              "Labels are stored in a Microsoft Entra attribute of the author",
              "Labels are only visible through the Purview portal API",
              "Labels are embedded as an invisible watermark in the content"
            ],
            answer: 0,
            explain: "Label metadata is clear text, so other apps can read it; the MIP SDK also lets third-party apps apply protection.",
            es: {
              q: "Una aplicación de archivado de terceros necesita leer qué etiqueta de confidencialidad tiene un documento para aplicar su propia protección. ¿Por qué es posible?",
              options: [
                "Las etiquetas se guardan en texto claro en los metadatos del contenido",
                "Las etiquetas se guardan en un atributo de Microsoft Entra del autor",
                "Las etiquetas solo se ven mediante la API del portal de Purview",
                "Las etiquetas se insertan como una marca de agua invisible en el contenido"
              ],
              explain: "Los metadatos de la etiqueta están en texto claro, así que otras aplicaciones pueden leerlos; el SDK de MIP también permite que apliquen protección."
            }
          },
          {
            type: "multi",
            q: "Which two settings are configured in a sensitivity label policy rather than in the label itself?",
            options: ["A default label for new documents and emails", "Mandatory labeling before saving or sending", "The encryption permissions for each group", "The watermark text and header", "The sensitive information types that trigger auto-labeling"],
            answers: [0, 1],
            explain: "Label policies publish labels to users and set defaults, justification, mandatory labeling and help links. Encryption, markings and auto-labeling conditions are label settings.",
            es: {
              q: "¿Cuáles son dos configuraciones que se definen en una directiva de etiquetas de confidencialidad y no en la etiqueta?",
              options: ["Una etiqueta predeterminada para documentos y correos nuevos", "El etiquetado obligatorio antes de guardar o enviar", "Los permisos de cifrado de cada grupo", "El texto de la marca de agua y del encabezado", "Los tipos de información confidencial que activan el etiquetado automático"],
              explain: "Las directivas publican las etiquetas a los usuarios y definen la predeterminada, la justificación, el etiquetado obligatorio y los vínculos de ayuda. El cifrado, las marcas y las condiciones de etiquetado automático son configuraciones de la etiqueta."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Watermarks can be applied to emails and meeting invites.", answer: false, explain: "Watermarks apply to documents and Loop components and pages; emails get headers or footers." },
              { s: "A user can change a default label applied by a policy.", answer: true, explain: "Users can always change the default if they think it's wrong." },
              { s: "A label can classify content without applying any protection.", answer: true, explain: "The tag still persists and generates usage reports." }
            ],
            es: {
              statements: [
                { s: "Las marcas de agua se pueden aplicar a correos e invitaciones a reuniones.", explain: "Se aplican a documentos y a componentes y páginas de Loop; los correos llevan encabezados o pies de página." },
                { s: "Un usuario puede cambiar la etiqueta predeterminada que aplica una directiva.", explain: "Los usuarios siempre pueden cambiarla si creen que es incorrecta." },
                { s: "Una etiqueta puede clasificar contenido sin aplicar ninguna protección.", explain: "La etiqueta igual persiste y genera informes de uso." }
              ]
            }
          },
          {
            type: "single",
            q: "Users keep replacing Confidential with Public on documents to share them easily. The company wants them to explain why each time. What should it configure?",
            options: ["Require a justification for label changes in the label policy", "Mandatory labeling in the label policy", "A DLP policy tip on every SharePoint share", "Encryption with a 7-day content expiration configured on the Confidential label"],
            answer: 0,
            explain: "Label policies can require users to justify removing a label or replacing it with a lower-sensitivity one.",
            es: {
              q: "Los usuarios reemplazan seguido Confidencial por Público en los documentos para compartirlos más fácil. La empresa quiere que expliquen el motivo cada vez. ¿Qué debe configurar?",
              options: ["Exigir una justificación para los cambios de etiqueta en la directiva", "El etiquetado obligatorio en la directiva de etiquetas", "Una sugerencia de directiva DLP en cada uso compartido de SharePoint", "Cifrado con vencimiento del contenido a los 7 días configurado en la etiqueta Confidencial"],
              explain: "Las directivas de etiquetas pueden exigir que el usuario justifique quitar una etiqueta o reemplazarla por una de menor confidencialidad."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about label scopes.",
            parts: [
              "The scope selected by default for new labels is ",
              { options: ["Files & other data assets", "Groups & sites", "Meetings"], answer: 0 },
              ", and the Meetings scope requires ",
              { options: ["the Files and Emails scopes", "the Groups & sites scope", "a Teams Premium license"], answer: 0 },
              " to also be selected."
            ],
            explain: "Files & other data assets is the default; Meetings depends on Files and Emails.",
            es: {
              q: "Complete la afirmación sobre los ámbitos de las etiquetas.",
              parts: [
                "El ámbito seleccionado de forma predeterminada en las etiquetas nuevas es ",
                { options: ["Archivos y otros recursos de datos", "Grupos y sitios", "Reuniones"] },
                ", y el ámbito Reuniones requiere que también estén seleccionados ",
                { options: ["los ámbitos Archivos y Correos electrónicos", "el ámbito Grupos y sitios", "una licencia de Teams Premium"] },
                "."
              ],
              explain: "Archivos y otros recursos de datos es el predeterminado; Reuniones depende de Archivos y Correos electrónicos."
            }
          },
          {
            type: "single",
            q: "To reduce oversharing, a company wants links to documents in a sensitive SharePoint site to default to people in the organization only. How can sensitivity labels help?",
            options: ["Configure the label to set the default sharing link type", "Apply a watermark that says Internal Only", "Publish the label only to internal users through the label policy", "Require a justification for label changes"],
            answer: 0,
            explain: "Labels can set the default sharing link type for SharePoint sites and individual documents.",
            es: {
              q: "Para reducir el uso compartido excesivo, una empresa quiere que los vínculos a documentos de un sitio de SharePoint sensible sean, de forma predeterminada, solo para personas de la organización. ¿Cómo ayudan las etiquetas de confidencialidad?",
              options: ["Configurando la etiqueta para definir el tipo de vínculo de uso compartido predeterminado", "Aplicando una marca de agua que diga Solo uso interno", "Publicar la etiqueta solo para usuarios internos mediante la directiva de etiquetas", "Exigiendo una justificación para los cambios de etiqueta"],
              explain: "Las etiquetas pueden definir el tipo de vínculo de uso compartido predeterminado para sitios de SharePoint y documentos individuales."
            }
          }
        ]
      }
    },
    {
      id: "data-loss-prevention",
      name: "Describe data loss prevention in Microsoft Purview",
      es: { name: "Descripción de la prevención de pérdida de datos en Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-solutions/4-describe-data-loss-prevention",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "Finance users sometimes need to email bank details to a new supplier. The company wants DLP to stop accidental sends but allow justified ones. Which action fits?",
            options: ["Block with override, capturing the user's justification", "Block without the override option", "Show a policy tip only, without blocking", "Lock the item and move it to a secure quarantine location until reviewed"],
            answer: 0,
            explain: "Block with override stops the action by default but lets the user continue with a recorded justification.",
            es: {
              q: "Los usuarios de Finanzas a veces necesitan enviar datos bancarios por correo a un proveedor nuevo. La empresa quiere que DLP frene los envíos accidentales, pero permita los justificados. ¿Qué acción corresponde?",
              options: ["Bloquear con invalidación, registrando la justificación del usuario", "Bloquear sin opción de invalidación", "Mostrar solo una sugerencia de directiva, sin bloquear", "Bloquear el elemento y moverlo a una ubicación de cuarentena segura hasta que se revise"],
              explain: "Bloquear con invalidación detiene la acción de forma predeterminada, pero permite continuar con una justificación registrada."
            }
          },
          {
            type: "multi",
            q: "Which two activities can endpoint DLP audit or restrict on a Windows 11 device?",
            options: ["Copying a sensitive file to a USB drive", "Printing a sensitive document", "Changing the device's BitLocker recovery key", "Installing Windows updates", "Joining the device to Microsoft Entra ID"],
            answers: [0, 1],
            explain: "Endpoint DLP covers creating, renaming, copying to removable media or network shares, printing and access by unallowed apps and browsers.",
            es: {
              q: "¿Cuáles son dos actividades que DLP de punto de conexión puede auditar o restringir en un dispositivo Windows 11?",
              options: ["Copiar un archivo confidencial a un USB", "Imprimir un documento confidencial", "Cambiar la clave de recuperación de BitLocker del dispositivo", "Instalar actualizaciones de Windows", "Unir el dispositivo a Microsoft Entra ID"],
              explain: "DLP de punto de conexión cubre crear, renombrar, copiar a medios extraíbles o recursos compartidos de red, imprimir y el acceso desde aplicaciones y exploradores no permitidos."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "DLP activities are recorded in the Microsoft 365 Audit log by default.", answer: true, explain: "They're also routed to Activity explorer." },
              { s: "A DLP policy can be scoped to an administrative unit.", answer: true, explain: "Administrative units let delegated admins manage only their members." },
              { s: "DLP detects sensitive items only with a simple text scan for keywords.", answer: false, explain: "It uses deep content analysis: regex, function validation, proximity and machine learning." }
            ],
            es: {
              statements: [
                { s: "Las actividades de DLP se registran en el registro de auditoría de Microsoft 365 de forma predeterminada.", explain: "También se envían al explorador de actividad." },
                { s: "Una directiva DLP se puede limitar a una unidad administrativa.", explain: "Las unidades administrativas permiten que administradores delegados administren solo a sus miembros." },
                { s: "DLP detecta elementos confidenciales solo con un análisis simple de texto en busca de palabras clave.", explain: "Usa análisis profundo del contenido: regex, validación de funciones, proximidad y aprendizaje automático." }
              ]
            }
          },
          {
            type: "single",
            q: "A DLP analyst is overwhelmed by hundreds of alerts a day. Which Security Copilot capability, embedded in the DLP alerts queue, categorizes and prioritizes them autonomously?",
            options: ["The Alert Triage Agent", "Alert summarization", "The Phishing Triage Agent", "The Threat Intelligence Briefing Agent"],
            answer: 0,
            explain: "The Alert Triage Agent evaluates DLP alerts on content, exfiltration and policy risk and prioritizes them. Summarization describes one alert at a time.",
            es: {
              q: "Un analista de DLP está desbordado por cientos de alertas por día. ¿Qué capacidad de Security Copilot, integrada en la cola de alertas de DLP, las categoriza y prioriza de forma autónoma?",
              options: ["El agente de evaluación de alertas", "El resumen de alertas", "El agente de evaluación de phishing", "El agente de informes de inteligencia sobre amenazas"],
              explain: "El agente de evaluación de alertas analiza las alertas de DLP según el riesgo del contenido, de exfiltración y de la directiva, y las prioriza. El resumen describe una alerta por vez."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about DLP in Microsoft Teams.",
            parts: [
              "When a DLP policy blocks a Teams chat message, ",
              { options: ["the sensitive information isn't displayed", "the whole chat is deleted", "the sender's account is disabled"], answer: 0 },
              ", and the user can select ",
              { options: ["What can I do?", "Report a problem", "Request access"], answer: 0 },
              " to learn why."
            ],
            explain: "For Teams chat, the sensitive information isn't shown and the policy tip explains the block.",
            es: {
              q: "Complete la afirmación sobre DLP en Microsoft Teams.",
              parts: [
                "Cuando una directiva DLP bloquea un mensaje de chat de Teams, ",
                { options: ["la información confidencial no se muestra", "se elimina todo el chat", "se deshabilita la cuenta del remitente"] },
                ", y el usuario puede seleccionar ",
                { options: ["¿Qué puedo hacer?", "Informar de un problema", "Solicitar acceso"] },
                " para saber por qué."
              ],
              explain: "En los chats de Teams, la información confidencial no se muestra y la sugerencia de directiva explica el bloqueo."
            }
          },
          {
            type: "single",
            q: "Users upload customer files to an unmanaged cloud storage app from their browser. Which DLP location covers this inline web traffic?",
            options: ["Microsoft Edge for Business", "Exchange Online", "On-premises file shares", "Microsoft Fabric and Power BI workspaces"],
            answer: 0,
            explain: "DLP in Edge for Business covers inline web traffic to unmanaged cloud apps.",
            es: {
              q: "Los usuarios suben archivos de clientes a una aplicación de almacenamiento en la nube no administrada desde el explorador. ¿Qué ubicación de DLP cubre ese tráfico web en línea?",
              options: ["Microsoft Edge para empresas", "Exchange Online", "Recursos compartidos de archivos locales", "Áreas de trabajo de Microsoft Fabric y Power BI"],
              explain: "DLP en Edge para empresas cubre el tráfico web en línea hacia aplicaciones en la nube no administradas."
            }
          }
        ]
      }
    },
    {
      id: "insider-risk",
      name: "Describe insider risk management in Microsoft Purview",
      es: { name: "Descripción de la administración de riesgos internos en Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-solutions/5-describe-insider-risk-management",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "match",
            q: "Match each activity to the insider risk management workflow stage.",
            values: ["Policies", "Triage", "Investigate", "Action"],
            targets: [
              { t: "Choose a template and the users and indicators in scope", answer: 0 },
              { t: "Open a case from a Needs review alert or dismiss it", answer: 1 },
              { t: "Review user activity and the data risk graph in a case", answer: 2 },
              { t: "Escalate a case to eDiscovery (Premium)", answer: 3 }
            ],
            explain: "The five stages are policies, alerts, triage, investigate and action.",
            es: {
              q: "Relacione cada actividad con la etapa del flujo de trabajo de administración de riesgos internos.",
              values: ["Directivas", "Evaluación", "Investigación", "Acción"],
              targets: [
                { t: "Elegir una plantilla y los usuarios e indicadores incluidos" },
                { t: "Abrir un caso desde una alerta Necesita revisión o descartarla" },
                { t: "Revisar la actividad del usuario y el gráfico de riesgo de datos en un caso" },
                { t: "Escalar un caso a eDiscovery (Premium)" }
              ],
              explain: "Las cinco etapas son directivas, alertas, evaluación, investigación y acción."
            }
          },
          {
            type: "single",
            q: "HR wants employees who just received a poor performance review to be brought into scope of insider risk policies. What makes this possible?",
            options: ["An HR data connector feeding employment stressor events", "A Conditional Access policy for risky users", "A sensitivity label applied to the performance review document itself", "Communication compliance scanning HR emails"],
            answer: 0,
            explain: "Risky user behavior policies use HR data connectors to bring affected users into scope.",
            es: {
              q: "RR. HH. quiere que los empleados que acaban de recibir una mala evaluación de desempeño queden dentro del alcance de las directivas de riesgo interno. ¿Qué lo permite?",
              options: ["Un conector de datos de RR. HH. que aporta eventos de estrés laboral", "Una directiva de acceso condicional para usuarios riesgosos", "Una etiqueta de confidencialidad aplicada al propio documento de la evaluación de desempeño", "El cumplimiento de comunicaciones analizando los correos de RR. HH."],
              explain: "Las directivas de comportamiento riesgoso del usuario usan conectores de datos de RR. HH. para incluir a los usuarios afectados."
            }
          },
          {
            type: "multi",
            q: "Which two scenarios do insider risk management policy templates address?",
            options: ["A misconfigured Copilot Studio agent sending sensitive data to the wrong recipients", "Misuse of patient records in a healthcare organization", "A brute-force attack against a domain controller", "A phishing email delivered to many mailboxes", "An unpatched CVE on employee laptops"],
            answers: [0, 1],
            explain: "Templates include risky agents (preview) and patient data misuse, among others. External attacks belong to Defender products.",
            es: {
              q: "¿Cuáles son dos escenarios que cubren las plantillas de directivas de administración de riesgos internos?",
              options: ["Un agente de Copilot Studio mal configurado que envía datos confidenciales a destinatarios equivocados", "El uso indebido de historias clínicas en una organización de salud", "Un ataque de fuerza bruta contra un controlador de dominio", "Un correo de phishing entregado en muchos buzones", "Una CVE sin parche en las laptops de los empleados"],
              explain: "Las plantillas incluyen agentes riesgosos (versión preliminar) y uso indebido de datos de pacientes, entre otras. Los ataques externos corresponden a productos de Defender."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Insider risk management can capture screen evidence from online and offline devices.", answer: true, explain: "Forensic evidence gives investigators visual context." },
              { s: "Executives can be placed in priority user groups for more aggressive risk scoring.", answer: true, explain: "Users in high-risk positions get closer monitoring." },
              { s: "Insider risk management shows reviewers users' full identities by default, with no privacy controls.", answer: false, explain: "It follows a privacy-by-design architecture that balances privacy and risk." }
            ],
            es: {
              statements: [
                { s: "La administración de riesgos internos puede capturar evidencia visual de dispositivos en línea y sin conexión.", explain: "La evidencia forense les da contexto visual a los investigadores." },
                { s: "Los ejecutivos se pueden incluir en grupos de usuarios prioritarios con una puntuación de riesgo más estricta.", explain: "Los usuarios en puestos de alto riesgo se supervisan más de cerca." },
                { s: "La administración de riesgos internos les muestra a los revisores la identidad completa de los usuarios por defecto, sin controles de privacidad.", explain: "Sigue una arquitectura de privacidad desde el diseño que equilibra privacidad y riesgo." }
              ]
            }
          },
          {
            type: "single",
            q: "An investigator wants an interactive map of the users, devices, cloud resources and data flows tied to an insider risk case. Which tool, powered by a Sentinel integration, provides it?",
            options: ["The data risk graph", "The user activity chart", "Content explorer", "Case notes"],
            answer: 0,
            explain: "The data risk graph maps connections between users, devices, cloud resources and data flows.",
            es: {
              q: "Un investigador quiere un mapa interactivo de los usuarios, dispositivos, recursos en la nube y flujos de datos vinculados a un caso de riesgo interno. ¿Qué herramienta, basada en una integración con Sentinel, lo ofrece?",
              options: ["El gráfico de riesgo de datos", "El gráfico de actividad del usuario", "El explorador de contenido", "Las notas del caso"],
              explain: "El gráfico de riesgo de datos mapea las conexiones entre usuarios, dispositivos, recursos en la nube y flujos de datos."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the Risky AI usage template.",
            parts: [
              "The Risky AI usage template detects activities such as ",
              { options: ["prompt injection attacks", "expired certificates", "failed MFA registrations"], answer: 0 },
              ", and its insights are integrated into ",
              { options: ["Microsoft Defender XDR", "Microsoft Entra ID Protection", "Azure Monitor"], answer: 0 },
              "."
            ],
            explain: "It detects prompt injection, access to protected materials and sending sensitive data to uncontrolled AI services; insights flow to Defender XDR.",
            es: {
              q: "Complete la afirmación sobre la plantilla de uso riesgoso de IA.",
              parts: [
                "La plantilla de uso riesgoso de IA detecta actividades como ",
                { options: ["ataques de inyección de indicaciones", "certificados vencidos", "registros de MFA fallidos"] },
                ", y sus conclusiones se integran en ",
                { options: ["Microsoft Defender XDR", "Microsoft Entra ID Protection", "Azure Monitor"] },
                "."
              ],
              explain: "Detecta inyección de indicaciones, acceso a materiales protegidos y envío de datos confidenciales a servicios de IA sin control; las conclusiones llegan a Defender XDR."
            }
          }
        ]
      }
    },
    {
      id: "adaptive-protection",
      name: "Describe adaptive protection in Microsoft Purview",
      es: { name: "Descripción de la protección adaptable en Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-solutions/6-describe-adaptive-protection",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "multi",
            q: "Which two control surfaces does adaptive protection use to apply protection based on insider risk levels?",
            options: ["Microsoft Purview Data Loss Prevention", "Microsoft Entra Conditional Access", "Microsoft Defender for Endpoint device isolation", "Microsoft Entra Privileged Identity Management", "Microsoft Defender for Cloud Apps session policies"],
            answers: [0, 1],
            explain: "The three control surfaces are DLP, Data Lifecycle Management and Conditional Access.",
            es: {
              q: "¿Cuáles son dos superficies de control que usa la protección adaptable para aplicar protección según los niveles de riesgo interno?",
              options: ["Prevención de pérdida de datos de Microsoft Purview", "Acceso condicional de Microsoft Entra", "El aislamiento de dispositivos de Microsoft Defender para punto de conexión", "Privileged Identity Management de Microsoft Entra", "Las directivas de sesión de Microsoft Defender for Cloud Apps"],
              explain: "Las tres superficies de control son DLP, la administración del ciclo de vida de los datos y el acceso condicional."
            }
          },
          {
            type: "single",
            q: "A user at the Elevated risk level starts deleting files from OneDrive. How does adaptive protection help the investigation?",
            options: [
              "A retention label policy preserves the deleted content for 120 days",
              "Deleted files are moved to the user's manager's OneDrive",
              "The deletions are blocked until an admin approves each one in the Purview portal",
              "A copy of each file is sent to Microsoft Defender XDR"
            ],
            answer: 0,
            explain: "Through Data Lifecycle Management, content an Elevated-risk user deletes from SharePoint, OneDrive or Exchange Online is preserved for 120 days.",
            es: {
              q: "Un usuario con nivel de riesgo Elevado empieza a eliminar archivos de OneDrive. ¿Cómo ayuda la protección adaptable a la investigación?",
              options: [
                "Una directiva de etiquetas de retención conserva el contenido eliminado durante 120 días",
                "Los archivos eliminados se mueven al OneDrive del responsable del usuario",
                "Las eliminaciones se bloquean hasta que un administrador aprueba cada una en el portal de Purview",
                "Se envía una copia de cada archivo a Microsoft Defender XDR"
              ],
              explain: "Mediante la administración del ciclo de vida de los datos, el contenido que un usuario de riesgo Elevado elimina de SharePoint, OneDrive o Exchange Online se conserva 120 días."
            }
          },
          {
            type: "match",
            q: "An organization configures adaptive protection in DLP. Match each risk level to the control it would typically get.",
            values: ["Minor", "Moderate", "Elevated"],
            targets: [
              { t: "A policy tip about handling sensitive data", answer: 0 },
              { t: "A warning that requires a justification to share", answer: 1 },
              { t: "Blocked from sharing sensitive data outside the organization", answer: 2 }
            ],
            explain: "Controls scale with the insider risk level, from education to blocking.",
            es: {
              q: "Una organización configura la protección adaptable en DLP. Relacione cada nivel de riesgo con el control que normalmente recibiría.",
              values: ["Menor", "Moderado", "Elevado"],
              targets: [
                { t: "Una sugerencia de directiva sobre el manejo de datos confidenciales" },
                { t: "Una advertencia que exige una justificación para compartir" },
                { t: "Bloqueo para compartir datos confidenciales fuera de la organización" }
              ],
              explain: "Los controles escalan con el nivel de riesgo interno, desde la educación hasta el bloqueo."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Insider risk levels are calculated by Insider Risk Management.", answer: true, explain: "They're based on each user's behavior and the risk indicators in the organization's policies." },
              { s: "Admins must manually move users between risk levels.", answer: false, explain: "Levels update continuously and automatically." },
              { s: "With Conditional Access, a Minor-risk user might be asked to accept terms of use before opening an app.", answer: true, explain: "Controls can be light for lower levels." }
            ],
            es: {
              statements: [
                { s: "Los niveles de riesgo interno los calcula Insider Risk Management.", explain: "Se basan en el comportamiento de cada usuario y en los indicadores de riesgo de las directivas." },
                { s: "Los administradores deben mover manualmente a los usuarios entre niveles de riesgo.", explain: "Los niveles se actualizan de forma continua y automática." },
                { s: "Con el acceso condicional, a un usuario de riesgo Menor se le podría pedir que acepte términos de uso antes de abrir una aplicación.", explain: "Los controles pueden ser leves para los niveles bajos." }
              ]
            }
          },
          {
            type: "single",
            q: "Why does adaptive protection reduce the number of DLP policies an organization has to maintain?",
            options: [
              "The right DLP policy is assigned automatically as each user's risk level changes",
              "It merges all DLP policies into one tenant-wide policy that applies to every user equally",
              "It replaces DLP policies with sensitivity labels",
              "It only applies DLP to users in priority user groups"
            ],
            answer: 0,
            explain: "Instead of static policies for every scenario, policies follow users' current risk levels.",
            es: {
              q: "¿Por qué la protección adaptable reduce la cantidad de directivas DLP que una organización tiene que mantener?",
              options: [
                "La directiva DLP adecuada se asigna automáticamente a medida que cambia el nivel de riesgo de cada usuario",
                "Combina todas las directivas DLP en una única directiva para todo el inquilino que se aplica igual a todos",
                "Reemplaza las directivas DLP por etiquetas de confidencialidad",
                "Solo aplica DLP a los usuarios de grupos prioritarios"
              ],
              explain: "En lugar de directivas estáticas para cada escenario, las directivas siguen el nivel de riesgo actual de los usuarios."
            }
          }
        ]
      }
    },
    {
      id: "dspm",
      name: "Describe Data Security Posture Management",
      es: { name: "Describir la administración de la posición de seguridad de los datos" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-solutions/6a-describe-data-security-posture-management",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "A data security lead wants guided workflows for goals like Prevent oversharing of sensitive data, with one-click policies and progress metrics. Which DSPM page provides them?",
            options: ["Objectives", "Asset explorer", "AI observability", "Reports"],
            answer: 0,
            explain: "Objectives present security goals as cards with metrics, prioritized actions and one-click policies.",
            es: {
              q: "Un responsable de seguridad de datos quiere flujos guiados para objetivos como Evitar el uso compartido excesivo de datos confidenciales, con directivas en un clic y métricas de avance. ¿Qué página de DSPM los ofrece?",
              options: ["Objetivos", "Explorador de recursos", "Observabilidad de IA", "Informes"],
              explain: "Los objetivos presentan metas de seguridad como tarjetas con métricas, acciones priorizadas y directivas en un clic."
            }
          },
          {
            type: "single",
            q: "A company suspects sensitive data sits in Snowflake and Databricks outside any managed location. Which DSPM capability helps uncover this shadow data?",
            options: ["Asset explorer across Microsoft and non-Microsoft locations", "Content explorer in Information Protection", "Activity explorer filtered by endpoint", "Insider risk analytics run across the third-party connectors"],
            answer: 0,
            explain: "The asset explorer shows unlabeled or classified data by workload, including non-Microsoft locations, to uncover shadow data.",
            es: {
              q: "Una empresa sospecha que hay datos confidenciales en Snowflake y Databricks fuera de cualquier ubicación administrada. ¿Qué capacidad de DSPM ayuda a descubrir esos datos en la sombra?",
              options: ["El explorador de recursos en ubicaciones de Microsoft y de terceros", "El explorador de contenido de Information Protection", "El explorador de actividad filtrado por punto de conexión", "El análisis de riesgos internos ejecutado sobre los conectores de terceros"],
              explain: "El explorador de recursos muestra datos sin etiquetar o clasificados por carga de trabajo, incluidas ubicaciones de terceros, para descubrir datos en la sombra."
            }
          },
          {
            type: "multi",
            q: "Which two questions about an organization's data does DSPM aim to answer?",
            options: ["Who can access it?", "How is it protected?", "Which VMs host it?", "Which CVEs affect it?", "Which firewall rules allow it?"],
            answers: [0, 1],
            explain: "DSPM answers what data you have, where it's stored, who can access it and how it's protected.",
            es: {
              q: "¿Cuáles son dos preguntas sobre los datos de una organización que DSPM busca responder?",
              options: ["¿Quién puede acceder a ellos?", "¿Cómo están protegidos?", "¿Qué máquinas virtuales los alojan?", "¿Qué CVE los afectan?", "¿Qué reglas de firewall los permiten?"],
              explain: "DSPM responde qué datos tiene, dónde están almacenados, quién puede acceder a ellos y cómo están protegidos."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "AI agents in DSPM can remove public sharing links, with actions reviewed and audited.", answer: true, explain: "You review, approve or customize the automated actions, and they're always audited." },
              { s: "DSPM shows how many items or users a remediation will affect before you apply it.", answer: true, explain: "Impact prediction visuals show the scope of the change." },
              { s: "The AI observability page lists only Microsoft 365 Copilot activity.", answer: false, explain: "It inventories all AI apps and agents with activity in the last 30 days, Microsoft and non-Microsoft." }
            ],
            es: {
              statements: [
                { s: "Los agentes de IA de DSPM pueden quitar vínculos de uso compartido públicos, con acciones revisadas y auditadas.", explain: "Usted revisa, aprueba o personaliza las acciones automáticas, y siempre se auditan." },
                { s: "DSPM muestra cuántos elementos o usuarios afectará una corrección antes de aplicarla.", explain: "Los elementos visuales de predicción de impacto muestran el alcance del cambio." },
                { s: "La página de observabilidad de IA enumera solo la actividad de Microsoft 365 Copilot.", explain: "Inventaría todas las aplicaciones y agentes de IA con actividad en los últimos 30 días, de Microsoft y de terceros." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about DSPM.",
            parts: [
              "DSPM focuses on ",
              { options: ["the data itself", "network infrastructure", "endpoint configuration"], answer: 0 },
              ", and to integrate partner solutions for sources like Google Cloud it uses a ",
              { options: ["Microsoft Sentinel data lake", "Log Analytics workspace in each region", "Defender for Cloud connector"], answer: 0 },
              "."
            ],
            explain: "DSPM centers on data rather than infrastructure; a setup task configures a Sentinel data lake for non-Microsoft sources.",
            es: {
              q: "Complete la afirmación sobre DSPM.",
              parts: [
                "DSPM se centra en ",
                { options: ["los datos en sí", "la infraestructura de red", "la configuración de los puntos de conexión"] },
                ", y para integrar soluciones de partners para orígenes como Google Cloud usa un ",
                { options: ["lago de datos de Microsoft Sentinel", "área de trabajo de Log Analytics en cada región", "conector de Defender for Cloud"] },
                "."
              ],
              explain: "DSPM se centra en los datos y no en la infraestructura; una tarea de configuración prepara un lago de datos de Sentinel para orígenes de terceros."
            }
          },
          {
            type: "single",
            q: "An AI agent built in Copilot Studio reads sensitive financial files, and no DLP policy covers it. How does DSPM respond?",
            options: [
              "It surfaces the risk and recommends a policy you can apply in one click",
              "It deletes the agent automatically",
              "It blocks the agent through Conditional Access",
              "It opens an eDiscovery case for the agent's owner and places their mailbox on hold"
            ],
            answer: 0,
            explain: "AI observability surfaces the gap and recommends corrective actions, such as one-click policies.",
            es: {
              q: "Un agente de IA creado en Copilot Studio lee archivos financieros confidenciales y ninguna directiva DLP lo cubre. ¿Cómo responde DSPM?",
              options: [
                "Muestra el riesgo y recomienda una directiva que puede aplicar en un clic",
                "Elimina el agente automáticamente",
                "Bloquea el agente mediante el acceso condicional",
                "Abre un caso de eDiscovery para el propietario del agente y pone su buzón en retención"
              ],
              explain: "La observabilidad de IA muestra la brecha y recomienda acciones correctivas, como directivas en un clic."
            }
          }
        ]
      }
    },
    {
      id: "data-security-investigations",
      name: "Describe Microsoft Purview Data Security Investigations",
      es: { name: "Descripción de las investigaciones de seguridad de datos de Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-purview-data-solutions/6b-describe-data-security-investigations",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "match",
            q: "Match each Data Security Investigations AI capability to what it does.",
            values: ["Vector search", "Categorization", "Examination"],
            targets: [
              { t: "Finds files about client contracts even without those exact words", answer: 0 },
              { t: "Sorts impacted content by subject and risk level", answer: 1 },
              { t: "Scans file content for exposed credentials or vulnerabilities", answer: 2 }
            ],
            explain: "The three AI capabilities move from finding relevant data to understanding the danger it represents.",
            es: {
              q: "Relacione cada capacidad de IA de Investigaciones de seguridad de datos con lo que hace.",
              values: ["Búsqueda vectorial", "Categorización", "Examen"],
              targets: [
                { t: "Encuentra archivos sobre contratos de clientes aunque no tengan esas palabras exactas" },
                { t: "Ordena el contenido afectado por tema y nivel de riesgo" },
                { t: "Analiza el contenido de los archivos en busca de credenciales expuestas o vulnerabilidades" }
              ],
              explain: "Las tres capacidades de IA van de encontrar los datos relevantes a entender el peligro que representan."
            }
          },
          {
            type: "single",
            q: "Investigators found sensitive files that should be removed, but legal may need them back later. Which action should they take?",
            options: ["Soft purge the items", "Hard purge the items", "Apply a retention label for 120 days", "Export the items to a removable drive"],
            answer: 0,
            explain: "Soft purge moves items to a recoverable deleted state; hard purge deletes them permanently.",
            es: {
              q: "Los investigadores encontraron archivos confidenciales que hay que quitar, pero el área legal podría necesitarlos después. ¿Qué acción deben tomar?",
              options: ["Hacer una purga temporal de los elementos", "Hacer una purga definitiva de los elementos", "Aplicar una etiqueta de retención por 120 días", "Exportar los elementos a una unidad extraíble"],
              explain: "La purga temporal pasa los elementos a un estado eliminado recuperable; la definitiva los elimina de forma permanente."
            }
          },
          {
            type: "multi",
            q: "From which two solutions can an investigation be started directly in Data Security Investigations?",
            options: ["An Insider Risk Management case", "A Microsoft Defender XDR alert", "A Compliance Manager assessment", "A Service Trust Portal report", "An Azure Policy compliance scan"],
            answers: [0, 1],
            explain: "It integrates with Insider Risk Management, Defender XDR, DSPM and the unified audit log.",
            es: {
              q: "¿Desde qué dos soluciones se puede iniciar una investigación directamente en Investigaciones de seguridad de datos?",
              options: ["Un caso de Insider Risk Management", "Una alerta de Microsoft Defender XDR", "Una evaluación del Administrador de cumplimiento", "Un informe del Portal de confianza de servicios", "Un análisis de cumplimiento de Azure Policy"],
              explain: "Se integra con Insider Risk Management, Defender XDR, DSPM y el registro de auditoría unificado."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Data Security Investigations can be used proactively, before any incident happens.", answer: true, explain: "You can scan data sources or a sample of users to find policy gaps." },
              { s: "Actions taken in Data Security Investigations are recorded in the audit log.", answer: true, explain: "That creates a record for compliance and legal purposes." },
              { s: "Data Security Investigations requires a dedicated enterprise plan per user.", answer: false, explain: "It's pay-as-you-go, based on storage and processing." }
            ],
            es: {
              statements: [
                { s: "Investigaciones de seguridad de datos se puede usar de forma proactiva, antes de que ocurra un incidente.", explain: "Puede analizar orígenes de datos o una muestra de usuarios para encontrar brechas en las directivas." },
                { s: "Las acciones tomadas en Investigaciones de seguridad de datos quedan en el registro de auditoría.", explain: "Eso crea un registro con fines legales y de cumplimiento." },
                { s: "Investigaciones de seguridad de datos requiere un plan empresarial dedicado por usuario.", explain: "Es de pago por uso, según almacenamiento y procesamiento." }
              ]
            }
          },
          {
            type: "single",
            q: "DSPM detects a possible exfiltration event and the team routes it to Data Security Investigations. How is the new investigation scoped?",
            options: [
              "Automatically to the recently exfiltrated data",
              "To every file in the tenant",
              "To the mailboxes of all users in the same department",
              "To the items under legal hold in eDiscovery"
            ],
            answer: 0,
            explain: "Routing a DSPM finding scopes the investigation to the recently exfiltrated data.",
            es: {
              q: "DSPM detecta un posible evento de exfiltración y el equipo lo deriva a Investigaciones de seguridad de datos. ¿Cuál es el alcance de la nueva investigación?",
              options: [
                "Automáticamente, los datos exfiltrados recientemente",
                "Todos los archivos del inquilino",
                "Los buzones de todos los usuarios del mismo departamento",
                "Los elementos en retención legal de eDiscovery"
              ],
              explain: "Derivar un hallazgo de DSPM limita la investigación a los datos exfiltrados recientemente."
            }
          }
        ]
      }
    }
  ]
});
