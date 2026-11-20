// SC-900 > Introduction to Microsoft Purview and Microsoft's privacy principles > Describe Microsoft's Service Trust portal and privacy principles
Catalog.module("sc-900", {
  id: "stp-privacy",
  name: "Describe Microsoft's Service Trust portal and privacy principles",
  es: { name: "Describir el portal de confianza de servicios y los principios de privacidad de Microsoft" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-compliance-management-capabilities-microsoft/",
  quiz: {
    added: "2026-11-19",
    items: [
      {
        type: "single",
        topic: "Service Trust Portal",
        q: "An auditor asks your company for evidence that Microsoft's cloud datacenters passed an independent ISO/IEC 27001 audit. Where do you get the report?",
        options: ["Service Trust Portal, Certifications, Regulations, and Standards", "Compliance Manager, using the improvement actions in its ISO/IEC 27001 assessment", "Microsoft Trust Center, privacy commitments page", "Microsoft Purview Audit, audit log search results"],
        answer: 0,
        explain: "The STP publishes audit reports produced by external auditors. Compliance Manager tracks your own controls, not Microsoft's audit reports.",
        es: {
          topic: "Portal de confianza de servicios",
          q: "Un auditor le pide a su empresa evidencia de que los centros de datos en la nube de Microsoft aprobaron una auditoría independiente de ISO/IEC 27001. ¿Dónde obtiene el informe?",
          options: ["Portal de confianza de servicios, Certificaciones, normativas y estándares", "Administrador de cumplimiento, con las acciones de mejora de su evaluación ISO/IEC 27001", "Centro de confianza de Microsoft, página de compromisos de privacidad", "Auditoría de Microsoft Purview, resultados de búsqueda del registro de auditoría"],
          explain: "El STP publica informes de auditoría elaborados por auditores externos. El Administrador de cumplimiento sigue sus propios controles, no los informes de auditoría de Microsoft."
        }
      },
      {
        type: "match",
        topic: "Microsoft privacy principles",
        q: "Match each customer concern to the area of Microsoft's privacy commitment that addresses it.",
        values: ["You control your data", "Know where your data is located", "Your data is secured at rest and in transit", "Microsoft defends your data"],
        targets: [
          { t: "We don't want our data used for advertising or marketing research", answer: 0 },
          { t: "Our regulator requires the data to stay within the EU", answer: 1 },
          { t: "We need TLS for traffic and AES-256 for stored data", answer: 2 },
          { t: "What happens if a government agency demands our data from Microsoft?", answer: 3 }
        ],
        explain: "The Trust Center frames the commitment in four areas: data control, data location, data security and data defense.",
        es: {
          topic: "Principios de privacidad de Microsoft",
          q: "Relacione cada inquietud del cliente con el área del compromiso de privacidad de Microsoft que la aborda.",
          values: ["Usted controla sus datos", "Sepa dónde están sus datos", "Sus datos están protegidos en reposo y en tránsito", "Microsoft defiende sus datos"],
          targets: [
            { t: "No queremos que nuestros datos se usen para publicidad o estudios de mercado" },
            { t: "Nuestro regulador exige que los datos permanezcan en la UE" },
            { t: "Necesitamos TLS para el tráfico y AES-256 para los datos almacenados" },
            { t: "¿Qué pasa si un organismo de gobierno le pide nuestros datos a Microsoft?" }
          ],
          explain: "El Centro de confianza organiza el compromiso en cuatro áreas: control, ubicación, seguridad y defensa de los datos."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Service Trust Portal", s: "Some Service Trust Portal resources require signing in with a Microsoft Entra organization account.", answer: true, explain: "Public content is open, but some resources need an authenticated user." },
          { topic: "Service Trust Portal", s: "Documents under Resources for your Organization are the same for every tenant.", answer: false, explain: "They're restricted by tenant, based on your subscription and permissions." },
          { topic: "Microsoft privacy principles", s: "Microsoft subprocessors are bound by the same contractual privacy commitments that Microsoft makes to customers.", answer: true, explain: "They can only perform the functions they were engaged for and are audited in advance." }
        ],
        es: {
          statements: [
            { topic: "Portal de confianza de servicios", s: "Algunos recursos del Portal de confianza de servicios requieren iniciar sesión con una cuenta profesional de Microsoft Entra.", explain: "El contenido público es abierto, pero algunos recursos necesitan un usuario autenticado." },
            { topic: "Portal de confianza de servicios", s: "Los documentos de Recursos para su organización son los mismos para todos los inquilinos.", explain: "Están restringidos por inquilino, según su suscripción y sus permisos." },
            { topic: "Principios de privacidad de Microsoft", s: "Los subencargados de Microsoft están sujetos a los mismos compromisos contractuales de privacidad que Microsoft asume con los clientes.", explain: "Solo pueden hacer las funciones para las que se los contrató y se auditan de antemano." }
          ]
        }
      },
      {
        type: "single",
        topic: "Microsoft privacy principles",
        q: "A law enforcement agency serves Microsoft a valid demand for a customer's mailbox data. Where legally permitted, what does Microsoft do first?",
        options: [
          "Notify the customer, share a copy of the request and redirect the agency to the customer",
          "Hand over the data and notify the customer afterward",
          "Give the agency read-only access to the tenant for the investigation",
          "Refuse the request outright, since Microsoft never discloses customer data under any law or court order"
        ],
        answer: 0,
        explain: "Microsoft's position is that government requests should go to the customer. It discloses data only as the customer directs or where required by law.",
        es: {
          topic: "Principios de privacidad de Microsoft",
          q: "Un organismo de seguridad le presenta a Microsoft una solicitud válida de los datos del buzón de un cliente. Cuando la ley lo permite, ¿qué hace Microsoft primero?",
          options: [
            "Notifica al cliente, le comparte una copia de la solicitud y deriva al organismo hacia el cliente",
            "Entrega los datos y después notifica al cliente",
            "Le da al organismo acceso de solo lectura al inquilino para la investigación",
            "Rechaza la solicitud de plano, porque Microsoft nunca divulga datos de clientes bajo ninguna ley ni orden judicial"
          ],
          explain: "La posición de Microsoft es que las solicitudes de gobierno deben dirigirse al cliente. Solo divulga datos según lo que indique el cliente o cuando la ley lo exige."
        }
      },
      {
        type: "multi",
        topic: "Service Trust Portal",
        q: "Which two kinds of content does the Reports, Whitepapers, and Artifacts section of the Service Trust Portal include?",
        options: ["Business continuity and disaster recovery documents", "Attestations of penetration tests run by third parties", "Your tenant's Compliance Manager score history", "Improvement actions assigned to your admins", "Your organization's audit log exports"],
        answers: [0, 1],
        explain: "That section covers BCP and DR, pen test and security assessments, privacy and data protection, and FAQs and whitepapers. Scores, improvement actions and audit logs belong to Purview.",
        es: {
          topic: "Portal de confianza de servicios",
          q: "¿Cuáles son dos tipos de contenido que incluye la sección Informes, notas del producto y artefactos del Portal de confianza de servicios?",
          options: ["Documentos de continuidad del negocio y recuperación ante desastres", "Certificaciones de pruebas de penetración hechas por terceros", "El historial de la puntuación del Administrador de cumplimiento de su inquilino", "Las acciones de mejora asignadas a sus administradores", "Las exportaciones del registro de auditoría de su organización"],
          explain: "Esa sección cubre BCP y DR, pruebas de penetración y evaluaciones de seguridad, privacidad y protección de datos, y preguntas frecuentes y notas. Las puntuaciones, acciones de mejora y registros de auditoría pertenecen a Purview."
        }
      },
      {
        type: "dropdown",
        topic: "Microsoft privacy principles",
        q: "Complete the statement about data security in the Microsoft Cloud.",
        parts: [
          "Microsoft protects data in transit with protocols such as ",
          { options: ["TLS and IPsec", "AES-256 and SHA-1", "SAML and OAuth"], answer: 0 },
          ", and gives customers control over their own keys and secrets through ",
          { options: ["Azure Key Vault", "the Service Trust Portal", "Microsoft Entra Connect"], answer: 0 },
          "."
        ],
        explain: "TLS and IPsec cover transport; encryption at rest goes up to AES-256; Key Vault lets you control keys and secrets.",
        es: {
          topic: "Principios de privacidad de Microsoft",
          q: "Complete la afirmación sobre la seguridad de los datos en Microsoft Cloud.",
          parts: [
            "Microsoft protege los datos en tránsito con protocolos como ",
            { options: ["TLS e IPsec", "AES-256 y SHA-1", "SAML y OAuth"] },
            ", y les da a los clientes control sobre sus propias claves y secretos mediante ",
            { options: ["Azure Key Vault", "el Portal de confianza de servicios", "Microsoft Entra Connect"] },
            "."
          ],
          explain: "TLS e IPsec cubren el transporte; el cifrado en reposo llega hasta AES-256; Key Vault permite controlar claves y secretos."
        }
      },
      {
        type: "single",
        topic: "Service Trust Portal",
        q: "A compliance officer wants an email whenever Microsoft updates the SOC 2 reports she relies on. What should she do in the Service Trust Portal?",
        options: ["Save the reports to My Library and configure notification settings", "Subscribe to the Microsoft Trust Center RSS feed", "Create an alert policy in Microsoft Purview Audit", "Add the SOC 2 reports as a custom assessment in Compliance Manager and enable alerts"],
        answer: 0,
        explain: "My Library collects documents in one place and can email you when Microsoft updates them, including documents in a subscribed series.",
        es: {
          topic: "Portal de confianza de servicios",
          q: "Una responsable de cumplimiento quiere recibir un correo cada vez que Microsoft actualiza los informes SOC 2 que usa. ¿Qué debe hacer en el Portal de confianza de servicios?",
          options: ["Guardar los informes en Mi biblioteca y configurar las notificaciones", "Suscribirse al RSS del Centro de confianza de Microsoft", "Crear una directiva de alertas en Auditoría de Microsoft Purview", "Agregar los informes SOC 2 como evaluación personalizada en el Administrador de cumplimiento y activar alertas"],
          explain: "Mi biblioteca reúne documentos en un lugar y puede avisarle por correo cuando Microsoft los actualiza, incluidos los documentos de una serie suscrita."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Microsoft privacy principles", s: "ISO/IEC 27018 is the international code of practice for cloud privacy that Microsoft complies with.", answer: true, explain: "It was the world's first international code of practice for cloud privacy." },
          { topic: "Microsoft privacy principles", s: "Customers choose the data location for services such as Azure and Microsoft 365, backed by contractual commitments.", answer: true, explain: "Microsoft offers data residency options around the world." },
          { topic: "Microsoft privacy principles", s: "Microsoft can use customer data to improve advertising if the data is anonymized.", answer: false, explain: "Microsoft doesn't share data with advertiser-supported services or mine it for advertising." }
        ],
        es: {
          statements: [
            { topic: "Principios de privacidad de Microsoft", s: "ISO/IEC 27018 es el código de prácticas internacional de privacidad en la nube que Microsoft cumple.", explain: "Fue el primer código de prácticas internacional de privacidad en la nube." },
            { topic: "Principios de privacidad de Microsoft", s: "Los clientes eligen la ubicación de los datos en servicios como Azure y Microsoft 365, con compromisos contractuales.", explain: "Microsoft ofrece opciones de residencia de datos en todo el mundo." },
            { topic: "Principios de privacidad de Microsoft", s: "Microsoft puede usar datos del cliente para mejorar la publicidad si los datos están anonimizados.", explain: "Microsoft no comparte datos con servicios financiados por publicidad ni los analiza con fines publicitarios." }
          ]
        }
      },
      {
        type: "single",
        topic: "Service Trust Portal",
        q: "A bank in Brazil needs Microsoft's guidance on meeting financial-sector regulations in its country. Which Service Trust Portal section fits best?",
        options: ["Industry and Regional Resources", "Certifications, Regulations, and Standards", "Reports, Whitepapers, and Artifacts", "Resources for your Organization"],
        answer: 0,
        explain: "Industry and Regional Resources includes Financial Services guidance by country or region, plus regional policy documents.",
        es: {
          topic: "Portal de confianza de servicios",
          q: "Un banco de Brasil necesita la guía de Microsoft para cumplir las normativas del sector financiero de su país. ¿Qué sección del Portal de confianza de servicios corresponde mejor?",
          options: ["Recursos regionales y del sector", "Certificaciones, normativas y estándares", "Informes, notas del producto y artefactos", "Recursos para su organización"],
          explain: "Recursos regionales y del sector incluye guías de Servicios financieros por país o región, además de documentos sobre políticas regionales."
        }
      },
      {
        type: "single",
        topic: "Microsoft privacy principles",
        q: "A customer asks how Microsoft protects encrypted data against a single compromised layer. What does the privacy commitment state?",
        options: [
          "Two or more independent encryption layers protect the data",
          "A single customer-managed key protects all data at rest",
          "Data at rest is encrypted only when the customer enables it",
          "Microsoft rotates one shared key across all tenants every day"
        ],
        answer: 0,
        explain: "Microsoft uses two or more independent encryption layers to protect against any single point of compromise.",
        es: {
          topic: "Principios de privacidad de Microsoft",
          q: "Un cliente pregunta cómo protege Microsoft los datos cifrados frente al compromiso de una sola capa. ¿Qué establece el compromiso de privacidad?",
          options: [
            "Dos o más capas de cifrado independientes protegen los datos",
            "Una única clave administrada por el cliente protege todos los datos en reposo",
            "Los datos en reposo se cifran solo cuando el cliente lo habilita",
            "Microsoft rota todos los días una clave compartida entre todos los inquilinos"
          ],
          explain: "Microsoft usa dos o más capas de cifrado independientes para protegerse de cualquier punto único de compromiso."
        }
      }
    ]
  },
  units: [
    {
      id: "service-trust-portal",
      name: "Describe the offerings of the Service Trust portal",
      es: { name: "Descripción de las ofertas del portal de confianza de servicios" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-compliance-management-capabilities-microsoft/2-describe-service-trust-portal",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "A procurement team evaluating Microsoft 365 wants to read third-party audit reports on how Microsoft protects customer data. What is the right source?",
            options: ["The Service Trust Portal", "Compliance Manager in the Microsoft Purview portal", "The Microsoft 365 admin center Service health page", "Microsoft Defender for Cloud regulatory compliance"],
            answer: 0,
            explain: "The STP is Microsoft's public site for audit reports by external auditors and Microsoft-authored whitepapers.",
            es: {
              q: "Un equipo de compras que evalúa Microsoft 365 quiere leer informes de auditoría de terceros sobre cómo Microsoft protege los datos de los clientes. ¿Cuál es la fuente correcta?",
              options: ["El Portal de confianza de servicios", "El Administrador de cumplimiento del portal de Microsoft Purview", "La página Estado del servicio del Centro de administración de Microsoft 365", "El cumplimiento normativo de Microsoft Defender for Cloud"],
              explain: "El STP es el sitio público de Microsoft para informes de auditores externos y notas del producto escritas por Microsoft."
            }
          },
          {
            type: "match",
            q: "Match each document to the Service Trust Portal section where you'd find it.",
            values: ["Certifications, Regulations, and Standards", "Reports, Whitepapers, and Artifacts", "Industry and Regional Resources", "Resources for your Organization"],
            targets: [
              { t: "ISO/IEC audit reports", answer: 0 },
              { t: "Attestation of a third-party penetration test", answer: 1 },
              { t: "Resources exclusively for US Government customers", answer: 2 },
              { t: "Documents limited to your tenant's subscription", answer: 3 }
            ],
            explain: "The landing page organizes content into these four categories.",
            es: {
              q: "Relacione cada documento con la sección del Portal de confianza de servicios donde lo encontraría.",
              values: ["Certificaciones, normativas y estándares", "Informes, notas del producto y artefactos", "Recursos regionales y del sector", "Recursos para su organización"],
              targets: [
                { t: "Informes de auditoría ISO/IEC" },
                { t: "Certificación de una prueba de penetración de terceros" },
                { t: "Recursos exclusivos para clientes del gobierno de EE. UU." },
                { t: "Documentos limitados a la suscripción de su inquilino" }
              ],
              explain: "La página principal organiza el contenido en estas cuatro categorías."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "My Library can email you when Microsoft updates a saved document.", answer: true, explain: "You set the frequency and an email address in your organization." },
              { s: "Saving one document of a series to My Library subscribes you to updates for the series.", answer: true, explain: "You get notifications when the series is updated." },
              { s: "The Service Trust Portal is where you configure your tenant's compliance controls.", answer: false, explain: "It publishes Microsoft's compliance information; you don't configure controls there." }
            ],
            es: {
              statements: [
                { s: "Mi biblioteca puede avisarle por correo cuando Microsoft actualiza un documento guardado.", explain: "Usted define la frecuencia y una dirección de correo de su organización." },
                { s: "Guardar en Mi biblioteca un documento de una serie lo suscribe a las actualizaciones de la serie.", explain: "Recibe notificaciones cuando se actualiza la serie." },
                { s: "El Portal de confianza de servicios es donde se configuran los controles de cumplimiento del inquilino.", explain: "Publica la información de cumplimiento de Microsoft; ahí no se configuran controles." }
              ]
            }
          },
          {
            type: "single",
            q: "A hospital's compliance team wants material on the capabilities Microsoft offers for the healthcare industry. Which section of the Service Trust Portal should it open?",
            options: ["Industry and Regional Resources", "Reports, Whitepapers, and Artifacts", "Certifications, Regulations, and Standards", "Resources for your Organization"],
            answer: 0,
            explain: "Industry and Regional Resources includes Healthcare and Life Sciences, Financial Services, Media and Entertainment, US Government and regional documents.",
            es: {
              q: "El equipo de cumplimiento de un hospital quiere material sobre las capacidades que Microsoft ofrece para el sector de la salud. ¿Qué sección del Portal de confianza de servicios debe abrir?",
              options: ["Recursos regionales y del sector", "Informes, notas del producto y artefactos", "Certificaciones, normativas y estándares", "Recursos para su organización"],
              explain: "Recursos regionales y del sector incluye Salud y ciencias de la vida, Servicios financieros, Medios y entretenimiento, Gobierno de EE. UU. y documentos regionales."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the Service Trust Portal.",
            parts: [
              "To access some resources, users must sign in with ",
              { options: ["a Microsoft Entra organization account", "a personal Microsoft account", "an Azure subscription Owner role"], answer: 0 },
              ", and the Reports, Whitepapers, and Artifacts section includes ",
              { options: ["business continuity and disaster recovery documents", "your tenant's audit log", "your Secure Score history"], answer: 0 },
              "."
            ],
            explain: "Authenticated access uses the Microsoft cloud services organization account; BCP and DR documents are one of that section's categories.",
            es: {
              q: "Complete la afirmación sobre el Portal de confianza de servicios.",
              parts: [
                "Para acceder a algunos recursos, los usuarios deben iniciar sesión con ",
                { options: ["una cuenta profesional de Microsoft Entra", "una cuenta personal de Microsoft", "el rol Propietario de una suscripción de Azure"] },
                ", y la sección Informes, notas del producto y artefactos incluye ",
                { options: ["documentos de continuidad del negocio y recuperación ante desastres", "el registro de auditoría de su inquilino", "el historial de su Secure Score"] },
                "."
              ],
              explain: "El acceso autenticado usa la cuenta profesional de los servicios en la nube de Microsoft; los documentos de BCP y DR son una de las categorías de esa sección."
            }
          }
        ]
      }
    },
    {
      id: "privacy-principles",
      name: "Describe Microsoft's privacy principles",
      es: { name: "Describir los principios de privacidad de Microsoft" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-compliance-management-capabilities-microsoft/3-describe-microsofts-privacy-principles",
      quiz: {
        added: "2026-11-19",
        items: [
          {
            type: "single",
            q: "A customer is worried that a Microsoft subcontractor with access to its data could use it for other purposes. What does Microsoft commit to?",
            options: [
              "Subprocessors can only perform the functions they were engaged for, under the same commitments",
              "Subprocessors can use the data for analytics if it's aggregated",
              "Subprocessors sign their own separate data processing contracts directly with each customer instead",
              "Subprocessors never access customer data under any circumstances"
            ],
            answer: 0,
            explain: "Subprocessors are bound by Microsoft's contractual privacy commitments and are audited in advance.",
            es: {
              q: "A un cliente le preocupa que un subcontratista de Microsoft con acceso a sus datos los use para otros fines. ¿Con qué se compromete Microsoft?",
              options: [
                "Los subencargados solo pueden hacer las funciones para las que se los contrató, con los mismos compromisos",
                "Los subencargados pueden usar los datos para análisis si están agregados",
                "Los subencargados firman, en cambio, sus propios contratos de tratamiento de datos directamente con cada cliente",
                "Los subencargados nunca acceden a datos de clientes bajo ninguna circunstancia"
              ],
              explain: "Los subencargados están sujetos a los compromisos contractuales de privacidad de Microsoft y se auditan de antemano."
            }
          },
          {
            type: "match",
            q: "Match each Microsoft practice to the privacy area it belongs to.",
            values: ["Data control", "Data location", "Data security", "Data defense"],
            targets: [
              { t: "You can access, modify or delete your data at any time", answer: 0 },
              { t: "Data residency options honored within geographic boundaries", answer: 1 },
              { t: "Encryption up to AES-256 for data at rest", answer: 2 },
              { t: "Challenging unlawful government demands in court", answer: 3 }
            ],
            explain: "These are the four areas the Microsoft Trust Center uses to describe the commitment.",
            es: {
              q: "Relacione cada práctica de Microsoft con el área de privacidad a la que pertenece.",
              values: ["Control de los datos", "Ubicación de los datos", "Seguridad de los datos", "Defensa de los datos"],
              targets: [
                { t: "Puede acceder a sus datos, modificarlos o eliminarlos en cualquier momento" },
                { t: "Opciones de residencia de datos respetadas dentro de límites geográficos" },
                { t: "Cifrado de hasta AES-256 para los datos en reposo" },
                { t: "Impugnar en los tribunales las solicitudes de gobierno ilegítimas" }
              ],
              explain: "Son las cuatro áreas que usa el Centro de confianza de Microsoft para describir el compromiso."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft gives governments direct access to customer data when the request is lawful.", answer: false, explain: "Microsoft doesn't give any government direct or unfettered access to customer data." },
              { s: "Microsoft uses customer data only to provide the services the customer chose, once the customer agrees.", answer: true, explain: "Your data belongs to you." },
              { s: "Microsoft's privacy promises are guaranteed in its standard contracts for commercial and public sector customers.", answer: true, explain: "The commitments are contractual, not just policy statements." }
            ],
            es: {
              statements: [
                { s: "Microsoft les da a los gobiernos acceso directo a los datos de los clientes cuando la solicitud es legal.", explain: "Microsoft no le da a ningún gobierno acceso directo ni irrestricto a los datos de los clientes." },
                { s: "Microsoft usa los datos del cliente solo para prestar los servicios que eligió, una vez que el cliente lo acepta.", explain: "Sus datos le pertenecen." },
                { s: "Las promesas de privacidad de Microsoft están garantizadas en sus contratos estándar para clientes comerciales y del sector público.", explain: "Los compromisos son contractuales, no solo declaraciones de política." }
              ]
            }
          },
          {
            type: "multi",
            q: "Which two statements describe how Microsoft protects data in the Microsoft Cloud?",
            options: ["Industry-standard protocols such as TLS and IPsec for data in transit", "Two or more independent encryption layers against a single point of compromise", "Encryption at rest only for customers who buy a premium add-on", "A single global encryption key shared by all tenants", "Customer data stored unencrypted to speed up processing"],
            answers: [0, 1],
            explain: "Microsoft encrypts data at rest (up to AES-256) and in transit, with multiple independent layers.",
            es: {
              q: "¿Cuáles son dos afirmaciones que describen cómo protege Microsoft los datos en Microsoft Cloud?",
              options: ["Protocolos estándar como TLS e IPsec para los datos en tránsito", "Dos o más capas de cifrado independientes frente a un punto único de compromiso", "Cifrado en reposo solo para los clientes que compran un complemento premium", "Una única clave de cifrado global compartida por todos los inquilinos", "Datos de clientes almacenados sin cifrar para acelerar el procesamiento"],
              explain: "Microsoft cifra los datos en reposo (hasta AES-256) y en tránsito, con varias capas independientes."
            }
          },
          {
            type: "single",
            q: "A European company must keep its Microsoft 365 data within the EU to satisfy its regulator. Which Microsoft privacy commitment addresses this?",
            options: ["Know where your data is located", "You control your data", "Microsoft defends your data", "Your data is secured at rest and in transit"],
            answer: 0,
            explain: "Data location commitments let customers choose where data is stored, backed by contracts and transparency.",
            es: {
              q: "Una empresa europea debe mantener sus datos de Microsoft 365 dentro de la UE para cumplir con su regulador. ¿Qué compromiso de privacidad de Microsoft lo aborda?",
              options: ["Sepa dónde están sus datos", "Usted controla sus datos", "Microsoft defiende sus datos", "Sus datos están protegidos en reposo y en tránsito"],
              explain: "Los compromisos de ubicación permiten elegir dónde se almacenan los datos, con contratos y transparencia."
            }
          }
        ]
      }
    }
  ]
});
