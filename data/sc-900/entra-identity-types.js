// SC-900 > Introduction to Microsoft Entra > Describe the function and identity types of Microsoft Entra ID
Catalog.module("sc-900", {
  id: "entra-identity-types",
  name: "Describe the function and identity types of Microsoft Entra ID",
  es: { name: "Describir la función y los tipos de identidad de Microsoft Entra ID" },
  url: "https://learn.microsoft.com/en-us/training/modules/explore-basic-services-identity-types/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Microsoft Entra family",
        q: "A company wants to detect risky users and risky sign-ins automatically, and require MFA when sign-in risk is medium or high. Which Microsoft Entra product provides this?",
        options: ["Microsoft Entra ID Protection", "Microsoft Entra Private Access", "Microsoft Entra Verified ID", "Microsoft Entra Domain Services"],
        answer: 0,
        explain: "ID Protection detects identity-based risks and can remediate them with risk-based Conditional Access policies, such as requiring MFA for medium or high risk.",
        es: {
          topic: "Familia Microsoft Entra",
          q: "Una empresa quiere detectar automáticamente usuarios e inicios de sesión riesgosos, y exigir MFA cuando el riesgo de inicio de sesión sea medio o alto. ¿Qué producto de Microsoft Entra lo ofrece?",
          options: ["Microsoft Entra ID Protection", "Microsoft Entra Private Access", "Microsoft Entra Verified ID", "Microsoft Entra Domain Services"],
          explain: "ID Protection detecta riesgos basados en la identidad y puede corregirlos con directivas de acceso condicional basadas en riesgo, como exigir MFA ante riesgo medio o alto."
        }
      },
      {
        type: "match",
        topic: "Identity types",
        q: "Match each description to the type of identity.",
        values: ["Service principal", "System-assigned managed identity", "User-assigned managed identity", "Agent identity"],
        targets: [
          { t: "Created in each tenant where a registered application is used", answer: 0 },
          { t: "Deleted automatically when its Azure resource is deleted", answer: 1 },
          { t: "A standalone resource that can be assigned to several service instances", answer: 2 },
          { t: "An instance created from a blueprint, with a human sponsor", answer: 3 }
        ],
        explain: "Service principals are identities for registered apps. System-assigned managed identities share their resource's lifecycle; user-assigned ones are standalone. Agent identities come from blueprints and have sponsors.",
        es: {
          topic: "Tipos de identidad",
          q: "Relacione cada descripción con el tipo de identidad.",
          values: ["Entidad de servicio", "Identidad administrada asignada por el sistema", "Identidad administrada asignada por el usuario", "Identidad de agente"],
          targets: [
            { t: "Se crea en cada inquilino donde se usa una aplicación registrada" },
            { t: "Se elimina automáticamente cuando se elimina su recurso de Azure" },
            { t: "Un recurso independiente que se puede asignar a varias instancias de servicio" },
            { t: "Una instancia creada a partir de un plano técnico, con un patrocinador humano" }
          ],
          explain: "Las entidades de servicio son identidades de aplicaciones registradas. Las identidades administradas asignadas por el sistema comparten el ciclo de vida de su recurso; las asignadas por el usuario son independientes. Las identidades de agente surgen de planos técnicos y tienen patrocinadores."
        }
      },
      {
        type: "single",
        topic: "Hybrid identity",
        q: "A company is starting a new hybrid identity deployment to synchronize its on-premises Active Directory with Microsoft Entra ID. Which tool does Microsoft recommend?",
        options: ["Microsoft Entra Connect Sync", "Microsoft Entra Cloud Sync", "Microsoft Entra Domain Services", "Microsoft Entra Verified ID"],
        answer: 1,
        explain: "Cloud Sync is the recommended tool; Connect Sync is an earlier tool being replaced, and new features are built primarily on Cloud Sync.",
        es: {
          topic: "Identidad híbrida",
          q: "Una empresa empieza una nueva implementación de identidad híbrida para sincronizar su Active Directory local con Microsoft Entra ID. ¿Qué herramienta recomienda Microsoft?",
          options: ["Microsoft Entra Connect Sync", "Microsoft Entra Cloud Sync", "Microsoft Entra Domain Services", "Microsoft Entra Verified ID"],
          explain: "Cloud Sync es la herramienta recomendada; Connect Sync es una herramienta anterior que se está reemplazando, y las funciones nuevas se desarrollan principalmente sobre Cloud Sync."
        }
      },
      {
        type: "multi",
        topic: "Microsoft Entra ID",
        q: "Which two statements about a Microsoft Entra tenant are true?",
        options: [
          "It has a unique tenant ID and a domain name such as contoso.onmicrosoft.com",
          "It serves as a security and administrative boundary",
          "It can contain several directories",
          "It's the same thing as an Azure region",
          "It can hold users but not devices"
        ],
        answers: [0, 1],
        explain: "A tenant is an instance of Entra ID for one organization, with a unique ID and domain, acting as a security and administrative boundary. It has exactly one directory.",
        es: {
          topic: "Microsoft Entra ID",
          q: "¿Cuáles son dos afirmaciones verdaderas sobre un inquilino de Microsoft Entra?",
          options: [
            "Tiene un identificador de inquilino único y un nombre de dominio como contoso.onmicrosoft.com",
            "Funciona como límite de seguridad y de administración",
            "Puede contener varios directorios",
            "Es lo mismo que una región de Azure",
            "Puede contener usuarios pero no dispositivos"
          ],
          explain: "Un inquilino es una instancia de Entra ID para una organización, con un identificador y un dominio únicos, que funciona como límite de seguridad y administración. Tiene exactamente un directorio."
        }
      },
      {
        type: "single",
        topic: "External identities",
        q: "A company wants consultants to access its Office 365 and line-of-business apps using their own credentials, while it keeps control of its corporate data. Which External ID capability fits?",
        options: ["B2B collaboration in the workforce tenant", "CIAM in an external tenant", "Microsoft Entra Domain Services", "B2B direct connect"],
        answer: 0,
        explain: "B2B collaboration lets business guests access your Office 365, SaaS and line-of-business apps by authenticating with their home organization.",
        es: {
          topic: "Identidades externas",
          q: "Una empresa quiere que unos consultores accedan a sus aplicaciones de Office 365 y de línea de negocio con sus propias credenciales, manteniendo el control de sus datos corporativos. ¿Qué capacidad de External ID corresponde?",
          options: ["Colaboración B2B en el inquilino de personal", "CIAM en un inquilino externo", "Microsoft Entra Domain Services", "Conexión directa B2B"],
          explain: "La colaboración B2B permite que los invitados empresariales accedan a sus aplicaciones de Office 365, SaaS y de línea de negocio autenticándose con su organización de origen."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Microsoft Entra Agent ID", s: "Agent identities don't have their own credentials; they rely on their blueprint to acquire tokens.", answer: true, explain: "The blueprint holds the credentials and acquires tokens on the agents' behalf." },
          { topic: "Identity types", s: "Microsoft Entra joined devices are generally owned by the organization.", answer: true, explain: "Registered devices cover BYOD; joined devices are typically organization-owned." },
          { topic: "Microsoft Entra family", s: "Microsoft Entra Verified ID is based on proprietary Microsoft standards.", answer: false, explain: "Verified ID is based on open decentralized identity (DID) standards." }
        ],
        es: {
          statements: [
            { topic: "Microsoft Entra Agent ID", s: "Las identidades de agente no tienen credenciales propias; dependen de su plano técnico para obtener tokens.", explain: "El plano técnico guarda las credenciales y obtiene tokens en nombre de los agentes." },
            { topic: "Tipos de identidad", s: "Los dispositivos unidos a Microsoft Entra suelen ser propiedad de la organización.", explain: "Los dispositivos registrados cubren el escenario BYOD; los unidos suelen ser de la organización." },
            { topic: "Familia Microsoft Entra", s: "Microsoft Entra Verified ID se basa en estándares propietarios de Microsoft.", explain: "Verified ID se basa en estándares abiertos de identidad descentralizada (DID)." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Microsoft Entra family",
        q: "Complete the statement about Microsoft Entra licensing.",
        parts: [
          "Privileged Identity Management (PIM) is included in Microsoft Entra ID ",
          { options: ["Free", "P1", "P2"], answer: 2 },
          ", which comes with ",
          { options: ["Microsoft 365 E5", "Microsoft 365 Business Premium", "the Azure free account"], answer: 0 },
          "."
        ],
        explain: "P2 adds risk-based Conditional Access, ID Protection and PIM and is included with Microsoft 365 E5 and EMS E5. Business Premium includes P1.",
        es: {
          topic: "Familia Microsoft Entra",
          q: "Complete la afirmación sobre las licencias de Microsoft Entra.",
          parts: [
            "Privileged Identity Management (PIM) está incluido en Microsoft Entra ID ",
            { options: ["Free", "P1", "P2"] },
            ", que viene con ",
            { options: ["Microsoft 365 E5", "Microsoft 365 Empresa Premium", "la cuenta gratuita de Azure"] },
            "."
          ],
          explain: "P2 suma el acceso condicional basado en riesgo, ID Protection y PIM, y viene con Microsoft 365 E5 y EMS E5. Empresa Premium incluye P1."
        }
      },
      {
        type: "single",
        topic: "Identity types",
        q: "An administrator wants to target a Conditional Access policy at a set of users and devices that share the same access needs. Which type of group should be used?",
        options: ["A security group", "A Microsoft 365 group", "A distribution list in Exchange only", "An administrative unit"],
        answer: 0,
        explain: "Security groups manage user and device access and can be used with Conditional Access. Microsoft 365 groups can only contain users and serve collaboration.",
        es: {
          topic: "Tipos de identidad",
          q: "Un administrador quiere aplicar una directiva de acceso condicional a un conjunto de usuarios y dispositivos con las mismas necesidades de acceso. ¿Qué tipo de grupo debe usar?",
          options: ["Un grupo de seguridad", "Un grupo de Microsoft 365", "Solo una lista de distribución de Exchange", "Una unidad administrativa"],
          explain: "Los grupos de seguridad administran el acceso de usuarios y dispositivos y se pueden usar con el acceso condicional. Los grupos de Microsoft 365 solo contienen usuarios y sirven para colaborar."
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra Agent ID",
        q: "A company runs AI agents built on AWS Bedrock and wants each to have a governed identity in Microsoft Entra. Which statement is correct?",
        options: [
          "Microsoft Entra Agent ID only supports agents built on Microsoft platforms",
          "Agent ID is platform-agnostic; third-party agents can be integrated with the Microsoft Entra Auth SDK or workload identity federation",
          "The agents must be rebuilt in Azure first",
          "Third-party agents can only use guest user accounts"
        ],
        answer: 1,
        explain: "Agent ID works with agents from Microsoft and non-Microsoft platforms, such as AWS Bedrock and n8n.",
        es: {
          topic: "Microsoft Entra Agent ID",
          q: "Una empresa ejecuta agentes de IA creados en AWS Bedrock y quiere que cada uno tenga una identidad gobernada en Microsoft Entra. ¿Qué afirmación es correcta?",
          options: [
            "Microsoft Entra Agent ID solo admite agentes creados en plataformas de Microsoft",
            "Agent ID no depende de la plataforma; los agentes de terceros se integran con el SDK de autenticación de Microsoft Entra o la federación de identidades de carga de trabajo",
            "Primero hay que volver a crear los agentes en Azure",
            "Los agentes de terceros solo pueden usar cuentas de invitado"
          ],
          explain: "Agent ID funciona con agentes de plataformas de Microsoft y de terceros, como AWS Bedrock y n8n."
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra ID",
        q: "What does the identity secure score in Microsoft Entra ID represent?",
        options: [
          "The number of users in the tenant",
          "A percentage indicating how aligned you are with Microsoft's best-practice security recommendations",
          "The tenant's uptime SLA",
          "The license tier of the tenant"
        ],
        answer: 1,
        explain: "The identity secure score measures identity security posture as a percentage, with improvement actions tailored to your configuration.",
        es: {
          topic: "Microsoft Entra ID",
          q: "¿Qué representa la puntuación de seguridad de la identidad en Microsoft Entra ID?",
          options: [
            "La cantidad de usuarios del inquilino",
            "Un porcentaje que indica cuánto se ajusta a las recomendaciones de seguridad de Microsoft",
            "El SLA de disponibilidad del inquilino",
            "El nivel de licencia del inquilino"
          ],
          explain: "La puntuación de seguridad de la identidad mide la postura de seguridad de identidades como porcentaje, con acciones de mejora adaptadas a su configuración."
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra family",
        q: "When a new employee joins, which Microsoft Entra product automatically provisions the right access based on the employee's role?",
        options: ["Microsoft Entra ID Governance", "Microsoft Entra Internet Access", "Microsoft Entra Verified ID", "Microsoft Entra Workload ID"],
        answer: 0,
        explain: "ID Governance automates access requests, assignments and reviews, including assigning and removing access through the identity lifecycle.",
        es: {
          topic: "Familia Microsoft Entra",
          q: "Cuando ingresa un empleado nuevo, ¿qué producto de Microsoft Entra aprovisiona automáticamente el acceso adecuado según su rol?",
          options: ["Microsoft Entra ID Governance", "Microsoft Entra Internet Access", "Microsoft Entra Verified ID", "Microsoft Entra Workload ID"],
          explain: "ID Governance automatiza las solicitudes, las asignaciones y las revisiones de acceso, incluido asignar y quitar acceso a lo largo del ciclo de vida de la identidad."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Hybrid identity", s: "SCIM is becoming the de facto standard for provisioning.", answer: true, explain: "Cloud Sync uses SCIM to provision and deprovision users and groups." },
          { topic: "External identities", s: "B2B collaboration guests sign in with credentials created and stored in your tenant.", answer: false, explain: "There are no credentials associated with business guests; they authenticate with their home organization or identity provider." },
          { topic: "Identity types", s: "Managed identities can be used at no extra cost.", answer: true, explain: "They're automatically managed and free to use." }
        ],
        es: {
          statements: [
            { topic: "Identidad híbrida", s: "SCIM se está convirtiendo en el estándar de facto para el aprovisionamiento.", explain: "Cloud Sync usa SCIM para aprovisionar y desaprovisionar usuarios y grupos." },
            { topic: "Identidades externas", s: "Los invitados de colaboración B2B inician sesión con credenciales creadas y guardadas en su inquilino.", explain: "Los invitados empresariales no tienen credenciales asociadas; se autentican con su organización o proveedor de identidades de origen." },
            { topic: "Tipos de identidad", s: "Las identidades administradas se pueden usar sin costo adicional.", explain: "Se administran automáticamente y su uso es gratuito." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "microsoft-entra",
      name: "Describe Microsoft Entra",
      es: { name: "Describa Microsoft Entra" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-basic-services-identity-types/1a-describe-microsoft-entra",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each scenario to the Microsoft Entra product that fits it.",
            values: ["Microsoft Entra Private Access", "Microsoft Entra Internet Access", "Microsoft Entra ID Governance", "Microsoft Entra Verified ID"],
            targets: [
              { t: "A remote employee reaches a corporate network printer without a VPN", answer: 0 },
              { t: "Web content filtering by category and domain for internet and SaaS access", answer: 1 },
              { t: "Access assigned automatically to new employees and removed when they leave", answer: 2 },
              { t: "A graduate presents a digital diploma that an employer can verify independently", answer: 3 }
            ],
            explain: "Private Access secures private apps without VPN, Internet Access secures internet and SaaS access, ID Governance automates the identity lifecycle and Verified ID issues verifiable credentials.",
            es: {
              q: "Relacione cada escenario con el producto de Microsoft Entra que le corresponde.",
              values: ["Microsoft Entra Private Access", "Microsoft Entra Internet Access", "Microsoft Entra ID Governance", "Microsoft Entra Verified ID"],
              targets: [
                { t: "Un empleado remoto accede a una impresora de la red corporativa sin VPN" },
                { t: "Filtrado de contenido web por categoría y dominio para el acceso a internet y a SaaS" },
                { t: "El acceso se asigna automáticamente a los empleados nuevos y se quita cuando se van" },
                { t: "Un graduado presenta un diploma digital que un empleador puede verificar por su cuenta" }
              ],
              explain: "Private Access protege aplicaciones privadas sin VPN, Internet Access protege el acceso a internet y SaaS, ID Governance automatiza el ciclo de vida de la identidad y Verified ID emite credenciales verificables."
            }
          },
          {
            type: "single",
            q: "GitHub Actions workflows need an identity to access Azure subscriptions. Which Microsoft Entra product manages identities like this?",
            options: ["Microsoft Entra Workload ID", "Microsoft Entra External ID", "Microsoft Entra Verified ID", "Microsoft Entra Private Access"],
            answer: 0,
            explain: "Workload ID manages identities for applications, services and containers, with adaptive policies and custom security attributes.",
            es: {
              q: "Los flujos de trabajo de GitHub Actions necesitan una identidad para acceder a suscripciones de Azure. ¿Qué producto de Microsoft Entra administra identidades como esta?",
              options: ["Microsoft Entra Workload ID", "Microsoft Entra External ID", "Microsoft Entra Verified ID", "Microsoft Entra Private Access"],
              explain: "Workload ID administra identidades para aplicaciones, servicios y contenedores, con directivas adaptables y atributos de seguridad personalizados."
            }
          },
          {
            type: "single",
            q: "A company needs risk-based Conditional Access, Microsoft Entra ID Protection and Privileged Identity Management. What is the minimum Microsoft Entra ID license?",
            options: ["Microsoft Entra ID Free", "Microsoft Entra ID P1", "Microsoft Entra ID P2", "Microsoft Entra Suite without P1"],
            answer: 2,
            explain: "P2 adds risk-based Conditional Access, ID Protection and PIM. P1 adds Conditional Access and hybrid identity; the Entra Suite requires P1.",
            es: {
              q: "Una empresa necesita acceso condicional basado en riesgo, Microsoft Entra ID Protection y Privileged Identity Management. ¿Cuál es la licencia mínima de Microsoft Entra ID?",
              options: ["Microsoft Entra ID Free", "Microsoft Entra ID P1", "Microsoft Entra ID P2", "Microsoft Entra Suite sin P1"],
              explain: "P2 suma el acceso condicional basado en riesgo, ID Protection y PIM. P1 suma el acceso condicional y la identidad híbrida; Entra Suite requiere P1."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Microsoft Entra licensing.",
            parts: [
              "Conditional Access and hybrid identity support are added in Microsoft Entra ID ",
              { options: ["Free", "P1", "P2"], answer: 1 },
              ", and the Microsoft Entra Suite requires a Microsoft Entra ID ",
              { options: ["Free", "P1", "Microsoft 365 E5"], answer: 1 },
              " subscription."
            ],
            explain: "P1 adds Conditional Access, hybrid identity and advanced groups. The Entra Suite bundles five products and requires P1.",
            es: {
              q: "Complete la afirmación sobre las licencias de Microsoft Entra.",
              parts: [
                "El acceso condicional y la compatibilidad con identidad híbrida se suman en Microsoft Entra ID ",
                { options: ["Free", "P1", "P2"] },
                ", y Microsoft Entra Suite requiere una suscripción de Microsoft Entra ID ",
                { options: ["Free", "P1", "Microsoft 365 E5"] },
                "."
              ],
              explain: "P1 suma el acceso condicional, la identidad híbrida y grupos avanzados. Entra Suite agrupa cinco productos y requiere P1."
            }
          },
          {
            type: "multi",
            q: "Which two products are included in the Microsoft Entra Suite?",
            options: ["Microsoft Entra Private Access", "Microsoft Entra Internet Access", "Microsoft Entra Domain Services", "Microsoft Entra Workload ID", "Microsoft Entra External ID"],
            answers: [0, 1],
            explain: "The suite includes Private Access, Internet Access, ID Governance, ID Protection and premium Verified ID capabilities.",
            es: {
              q: "¿Cuáles son dos productos incluidos en Microsoft Entra Suite?",
              options: ["Microsoft Entra Private Access", "Microsoft Entra Internet Access", "Microsoft Entra Domain Services", "Microsoft Entra Workload ID", "Microsoft Entra External ID"],
              explain: "La suite incluye Private Access, Internet Access, ID Governance, ID Protection y las capacidades prémium de Verified ID."
            }
          },
          {
            type: "single",
            q: "Where do administrators configure and manage all Microsoft Entra products?",
            options: ["The Microsoft Entra admin center", "The Azure Pricing Calculator", "The Microsoft Purview portal only", "Each product's own separate portal"],
            answer: 0,
            explain: "All Microsoft Entra products are managed from a single web portal, the Microsoft Entra admin center.",
            es: {
              q: "¿Dónde configuran y administran los administradores todos los productos de Microsoft Entra?",
              options: ["En el Centro de administración de Microsoft Entra", "En la Calculadora de precios de Azure", "Solo en el portal de Microsoft Purview", "En un portal separado para cada producto"],
              explain: "Todos los productos de Microsoft Entra se administran desde un único portal web, el Centro de administración de Microsoft Entra."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Every tenant of Microsoft 365, Azure or Dynamics CRM Online is automatically a Microsoft Entra tenant.", answer: true, explain: "Each starts with an initial domain like contoso.onmicrosoft.com." },
              { s: "Microsoft Entra ID Free includes self-service password reset.", answer: true, explain: "Free provides user and group management, basic reporting and SSPR." },
              { s: "Microsoft Entra ID Protection provides VPN-less access to private apps.", answer: false, explain: "That's Microsoft Entra Private Access; ID Protection detects identity-based risks." }
            ],
            es: {
              statements: [
                { s: "Todo inquilino de Microsoft 365, Azure o Dynamics CRM Online es automáticamente un inquilino de Microsoft Entra.", explain: "Cada uno empieza con un dominio inicial como contoso.onmicrosoft.com." },
                { s: "Microsoft Entra ID Free incluye el restablecimiento de contraseña de autoservicio.", explain: "Free ofrece administración de usuarios y grupos, informes básicos y SSPR." },
                { s: "Microsoft Entra ID Protection ofrece acceso sin VPN a aplicaciones privadas.", explain: "Eso es Microsoft Entra Private Access; ID Protection detecta riesgos basados en la identidad." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "entra-id",
      name: "Describe Microsoft Entra ID",
      es: { name: "Describir Microsoft Entra ID" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-basic-services-identity-types/2-describe-azure-active-directory",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A security team wants an objective measure of its identity security posture, with improvement actions tailored to its configuration. Which Microsoft Entra ID feature fits?",
            options: ["Identity secure score", "Multi-tenant configuration", "The directory", "Self-service password reset"],
            answer: 0,
            explain: "The identity secure score is a percentage indicating alignment with Microsoft's best-practice recommendations, with tailored improvement actions.",
            es: {
              q: "Un equipo de seguridad quiere una medida objetiva de su postura de seguridad de identidades, con acciones de mejora adaptadas a su configuración. ¿Qué característica de Microsoft Entra ID corresponde?",
              options: ["La puntuación de seguridad de la identidad", "La configuración multiinquilino", "El directorio", "El restablecimiento de contraseña de autoservicio"],
              explain: "La puntuación de seguridad de la identidad es un porcentaje que indica cuánto se ajusta a las recomendaciones de Microsoft, con acciones de mejora adaptadas."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about tenants and directories.",
            parts: [
              "A Microsoft Entra tenant consists of ",
              { options: ["only one", "up to ten", "an unlimited number of"], answer: 0 },
              " directory, and the tenant serves as a ",
              { options: ["security and administrative boundary", "billing region", "network subnet"], answer: 0 },
              " for the organization."
            ],
            explain: "A tenant holds a single directory of users, groups, devices and apps, and acts as a security and administrative boundary.",
            es: {
              q: "Complete la afirmación sobre inquilinos y directorios.",
              parts: [
                "Un inquilino de Microsoft Entra tiene ",
                { options: ["un único", "hasta diez", "una cantidad ilimitada de"] },
                " directorio, y el inquilino funciona como ",
                { options: ["límite de seguridad y de administración", "región de facturación", "subred de red"] },
                " para la organización."
              ],
              explain: "Un inquilino contiene un único directorio de usuarios, grupos, dispositivos y aplicaciones, y funciona como límite de seguridad y de administración."
            }
          },
          {
            type: "single",
            q: "After acquiring another company, an organization now runs more than one instance of Microsoft Entra ID. What is this called?",
            options: ["A multitenant organization", "A hybrid identity", "A replica set", "A management group"],
            answer: 0,
            explain: "An organization with more than one Entra ID instance is multitenant; mergers and acquisitions are a common reason.",
            es: {
              q: "Después de adquirir otra empresa, una organización ahora ejecuta más de una instancia de Microsoft Entra ID. ¿Cómo se llama esto?",
              options: ["Una organización multiinquilino", "Una identidad híbrida", "Un conjunto de réplicas", "Un grupo de administración"],
              explain: "Una organización con más de una instancia de Entra ID es multiinquilino; las fusiones y adquisiciones son un motivo habitual."
            }
          },
          {
            type: "multi",
            q: "Which two describe how Microsoft Entra ID can be deployed?",
            options: [
              "Synchronized with an existing on-premises Active Directory",
              "Used as a standalone service",
              "Usable only if an on-premises Active Directory exists",
              "Available only to Dynamics 365 customers",
              "Deployed as a firewall appliance"
            ],
            answers: [0, 1],
            explain: "Entra ID can be synchronized with on-premises AD or other directories, or used standalone.",
            es: {
              q: "¿Cuáles son dos formas en que se puede implementar Microsoft Entra ID?",
              options: [
                "Sincronizado con un Active Directory local existente",
                "Usado como servicio independiente",
                "Utilizable solo si existe un Active Directory local",
                "Disponible solo para clientes de Dynamics 365",
                "Implementado como dispositivo de firewall"
              ],
              explain: "Entra ID se puede sincronizar con AD local u otros directorios, o usarse de forma independiente."
            }
          },
          {
            type: "single",
            q: "Developers want users to sign in to their new app with the credentials they already have. How does Microsoft Entra ID help?",
            options: [
              "It provides a standards-based approach for adding single sign-on to apps",
              "It requires every user to create a new password for each app",
              "It replaces the app's business logic",
              "It hosts the app's front end"
            ],
            answer: 0,
            explain: "Developers use Entra ID to add SSO with existing credentials, and APIs to build personalized experiences with organizational data.",
            es: {
              q: "Unos desarrolladores quieren que los usuarios inicien sesión en su nueva aplicación con las credenciales que ya tienen. ¿Cómo ayuda Microsoft Entra ID?",
              options: [
                "Ofrece un enfoque basado en estándares para agregar inicio de sesión único a las aplicaciones",
                "Exige que cada usuario cree una contraseña nueva para cada aplicación",
                "Reemplaza la lógica de negocio de la aplicación",
                "Hospeda el front-end de la aplicación"
              ],
              explain: "Los desarrolladores usan Entra ID para agregar inicio de sesión único con credenciales existentes, y API para crear experiencias personalizadas con datos de la organización."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The identity secure score is available in all editions of Microsoft Entra ID.", answer: true, explain: "It's not limited to premium editions." },
              { s: "The terms Microsoft Entra directory and Microsoft Entra tenant are often used interchangeably.", answer: true, explain: "The directory is the logical container inside the tenant." },
              { s: "Azure subscribers must buy a separate license before they can use Microsoft Entra ID at all.", answer: false, explain: "Subscribers to Azure, Microsoft 365 or Dynamics 365 automatically have access; premium licenses are optional upgrades." }
            ],
            es: {
              statements: [
                { s: "La puntuación de seguridad de la identidad está disponible en todas las ediciones de Microsoft Entra ID.", explain: "No se limita a las ediciones prémium." },
                { s: "Los términos directorio de Microsoft Entra e inquilino de Microsoft Entra suelen usarse como sinónimos.", explain: "El directorio es el contenedor lógico dentro del inquilino." },
                { s: "Los suscriptores de Azure deben comprar una licencia aparte para poder usar Microsoft Entra ID.", explain: "Los suscriptores de Azure, Microsoft 365 o Dynamics 365 tienen acceso automáticamente; las licencias prémium son mejoras opcionales." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "identity-types",
      name: "Describe types of identities",
      es: { name: "Describir tipos de identidades" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-basic-services-identity-types/3-describe-identity-types",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each user to the user identity category.",
            values: ["Internal member", "External guest", "External member", "Internal guest"],
            targets: [
              { t: "An employee who authenticates with the organization's Entra ID and has UserType Member", answer: 0 },
              { t: "A consultant who authenticates with their own social identity and has UserType Guest", answer: 1 },
              { t: "A Contoso user in Fabrikam's directory who signs in with their Contoso account and has UserType Member", answer: 2 },
              { t: "A vendor given a local account in your tenant but set to UserType Guest (legacy)", answer: 3 }
            ],
            explain: "Categories combine how the user authenticates (internal or external) with the UserType property (member or guest). Internal guest is a legacy scenario.",
            es: {
              q: "Relacione cada usuario con la categoría de identidad de usuario.",
              values: ["Miembro interno", "Invitado externo", "Miembro externo", "Invitado interno"],
              targets: [
                { t: "Un empleado que se autentica con el Entra ID de la organización y tiene UserType Member" },
                { t: "Un consultor que se autentica con su propia identidad social y tiene UserType Guest" },
                { t: "Un usuario de Contoso en el directorio de Fabrikam que inicia sesión con su cuenta de Contoso y tiene UserType Member" },
                { t: "Un proveedor con una cuenta local en su inquilino pero configurado como UserType Guest (heredado)" }
              ],
              explain: "Las categorías combinan cómo se autentica el usuario (interna o externamente) con la propiedad UserType (miembro o invitado). El invitado interno es un escenario heredado."
            }
          },
          {
            type: "single",
            q: "A developer enables an identity directly on a VM, and that identity should be deleted automatically when the VM is deleted. Which type of identity is this?",
            options: ["User-assigned managed identity", "System-assigned managed identity", "Service principal with a client secret", "External member"],
            answer: 1,
            explain: "A system-assigned managed identity is tied to the resource's lifecycle and is deleted with it.",
            es: {
              q: "Un desarrollador habilita una identidad directamente en una máquina virtual, y esa identidad debe eliminarse automáticamente cuando se elimine la máquina. ¿Qué tipo de identidad es?",
              options: ["Identidad administrada asignada por el usuario", "Identidad administrada asignada por el sistema", "Entidad de servicio con un secreto de cliente", "Miembro externo"],
              explain: "Una identidad administrada asignada por el sistema está ligada al ciclo de vida del recurso y se elimina con él."
            }
          },
          {
            type: "single",
            q: "Several instances of an app need to share one identity that must persist even if those instances are deleted. Which type of identity should you use?",
            options: ["System-assigned managed identity", "User-assigned managed identity", "Internal guest", "Microsoft Entra registered device"],
            answer: 1,
            explain: "A user-assigned managed identity is a standalone resource assigned to one or more instances and must be deleted explicitly.",
            es: {
              q: "Varias instancias de una aplicación necesitan compartir una identidad que debe persistir aunque se eliminen esas instancias. ¿Qué tipo de identidad debe usar?",
              options: ["Identidad administrada asignada por el sistema", "Identidad administrada asignada por el usuario", "Invitado interno", "Dispositivo registrado en Microsoft Entra"],
              explain: "Una identidad administrada asignada por el usuario es un recurso independiente que se asigna a una o más instancias y se debe eliminar de forma explícita."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about device identities.",
            parts: [
              "A personal phone used in a bring-your-own-device scenario is typically ",
              { options: ["Microsoft Entra registered", "Microsoft Entra joined", "Microsoft Entra hybrid joined"], answer: 0 },
              ", while a device joined to both on-premises Active Directory and Microsoft Entra ID is ",
              { options: ["Microsoft Entra registered", "Microsoft Entra joined", "Microsoft Entra hybrid joined"], answer: 2 },
              "."
            ],
            explain: "Registered devices support BYOD; joined devices are org-owned; hybrid joined devices belong to both on-premises AD and Entra ID.",
            es: {
              q: "Complete la afirmación sobre las identidades de dispositivo.",
              parts: [
                "Un teléfono personal usado en un escenario de traiga su propio dispositivo suele estar ",
                { options: ["registrado en Microsoft Entra", "unido a Microsoft Entra", "unido a Microsoft Entra híbrido"] },
                ", mientras que un dispositivo unido tanto a Active Directory local como a Microsoft Entra ID está ",
                { options: ["registrado en Microsoft Entra", "unido a Microsoft Entra", "unido a Microsoft Entra híbrido"] },
                "."
              ],
              explain: "Los dispositivos registrados cubren el escenario BYOD; los unidos son de la organización; los unidos híbridos pertenecen a AD local y a Entra ID."
            }
          },
          {
            type: "single",
            q: "A team needs a group that gives members access to a shared mailbox, calendar, files and SharePoint site. Which group type fits?",
            options: ["A security group", "A Microsoft 365 group", "A dynamic device group", "A management group"],
            answer: 1,
            explain: "Microsoft 365 groups group users by collaboration needs and give access to shared mailboxes, calendars, files and SharePoint sites.",
            es: {
              q: "Un equipo necesita un grupo que dé a sus miembros acceso a un buzón compartido, un calendario, archivos y un sitio de SharePoint. ¿Qué tipo de grupo corresponde?",
              options: ["Un grupo de seguridad", "Un grupo de Microsoft 365", "Un grupo dinámico de dispositivos", "Un grupo de administración"],
              explain: "Los grupos de Microsoft 365 agrupan usuarios según sus necesidades de colaboración y dan acceso a buzones compartidos, calendarios, archivos y sitios de SharePoint."
            }
          },
          {
            type: "multi",
            q: "In Microsoft Entra, which two are workload identities?",
            options: ["Applications and service principals", "Managed identities", "Guest users", "Hybrid joined devices", "Microsoft 365 groups"],
            answers: [0, 1],
            explain: "Workload identities are applications, service principals and managed identities.",
            es: {
              q: "En Microsoft Entra, ¿cuáles son dos identidades de carga de trabajo?",
              options: ["Las aplicaciones y entidades de servicio", "Las identidades administradas", "Los usuarios invitados", "Los dispositivos unidos híbridos", "Los grupos de Microsoft 365"],
              explain: "Las identidades de carga de trabajo son las aplicaciones, las entidades de servicio y las identidades administradas."
            }
          },
          {
            type: "single",
            q: "An administrator wants users to be added to and removed from a group automatically based on rules. Which group setting should be used?",
            options: ["Assigned membership", "Dynamic membership", "Guest membership", "Microsoft 365 membership"],
            answer: 1,
            explain: "Dynamic membership uses rules to add and remove identities automatically; assigned membership is manual.",
            es: {
              q: "Un administrador quiere que los usuarios se agreguen y se quiten de un grupo automáticamente según reglas. ¿Qué configuración de grupo debe usar?",
              options: ["Pertenencia asignada", "Pertenencia dinámica", "Pertenencia de invitado", "Pertenencia de Microsoft 365"],
              explain: "La pertenencia dinámica usa reglas para agregar y quitar identidades automáticamente; la asignada es manual."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Security group members can include devices and service principals.", answer: true, explain: "They can include users, devices, other groups, service principals and agent identities." },
              { s: "Microsoft 365 group members can include devices.", answer: false, explain: "Microsoft 365 groups can only include users." },
              { s: "By default, guests have limited privileges compared with members.", answer: true, explain: "The UserType property affects default privileges." }
            ],
            es: {
              statements: [
                { s: "Los miembros de un grupo de seguridad pueden incluir dispositivos y entidades de servicio.", explain: "Pueden incluir usuarios, dispositivos, otros grupos, entidades de servicio e identidades de agente." },
                { s: "Los miembros de un grupo de Microsoft 365 pueden incluir dispositivos.", explain: "Los grupos de Microsoft 365 solo pueden incluir usuarios." },
                { s: "De forma predeterminada, los invitados tienen privilegios limitados en comparación con los miembros.", explain: "La propiedad UserType afecta los privilegios predeterminados." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "agent-id",
      name: "Describe Microsoft Entra Agent ID",
      es: { name: "Descripción del identificador de Microsoft Entra Agent" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-basic-services-identity-types/3a-describe-microsoft-entra-agent-id",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "An organization wants a reusable template that defines a class of AI agent, holds the credentials used to create agent instances and lets administrators apply policies to all agents of that type. What is this called?",
            options: ["An agent identity blueprint", "An agent identity", "A managed identity", "A service principal secret"],
            answer: 0,
            explain: "Blueprints define a type of agent and hold credentials; agent identities are the individual instances created from them.",
            es: {
              q: "Una organización quiere una plantilla reutilizable que defina una clase de agente de IA, guarde las credenciales usadas para crear instancias de agentes y permita aplicar directivas a todos los agentes de ese tipo. ¿Cómo se llama?",
              options: ["Un plano técnico de identidad de agente", "Una identidad de agente", "Una identidad administrada", "Un secreto de entidad de servicio"],
              explain: "Los planos técnicos definen un tipo de agente y guardan las credenciales; las identidades de agente son las instancias individuales creadas a partir de ellos."
            }
          },
          {
            type: "match",
            q: "Match each description to the agent authentication pattern.",
            values: ["Attended (on-behalf-of)", "Unattended"],
            targets: [
              { t: "The agent uses delegated permissions granted by a user", answer: 0 },
              { t: "The agent acts autonomously with its own assigned roles", answer: 1 },
              { t: "The agent calls an API under the user's authority", answer: 0 },
              { t: "The agent operates with no user present", answer: 1 }
            ],
            explain: "Attended agents act on behalf of a user with delegated permissions; unattended agents act under their own authority.",
            es: {
              q: "Relacione cada descripción con el patrón de autenticación del agente.",
              values: ["Atendido (en nombre de)", "Desatendido"],
              targets: [
                { t: "El agente usa permisos delegados que concede un usuario" },
                { t: "El agente actúa de forma autónoma con sus propios roles asignados" },
                { t: "El agente llama a una API bajo la autoridad del usuario" },
                { t: "El agente opera sin un usuario presente" }
              ],
              explain: "Los agentes atendidos actúan en nombre de un usuario con permisos delegados; los desatendidos actúan bajo su propia autoridad."
            }
          },
          {
            type: "single",
            q: "Agents created months ago for a short pilot are still running in production, with permissions nobody has reviewed. Which risk does this describe?",
            options: ["Agent sprawl", "Prompt injection", "Token expiration", "Federation"],
            answer: 0,
            explain: "Agent sprawl is the uncontrolled expansion of agents without visibility, management or lifecycle controls.",
            es: {
              q: "Agentes creados hace meses para una prueba piloto corta siguen ejecutándose en producción, con permisos que nadie revisó. ¿Qué riesgo describe esto?",
              options: ["La proliferación de agentes", "La inyección de prompts", "El vencimiento de tokens", "La federación"],
              explain: "La proliferación de agentes es la expansión descontrolada de agentes sin visibilidad, administración ni controles de ciclo de vida."
            }
          },
          {
            type: "multi",
            q: "Which two capabilities does Microsoft Entra Agent ID integrate to protect agent access?",
            options: [
              "Conditional access policies that evaluate agent risk",
              "An agent registry for centralized discovery and metadata",
              "Granting agents high-privilege administrator roles by default",
              "Giving each agent identity its own long-lived password",
              "Letting users consent to any permission for an agent"
            ],
            answers: [0, 1],
            explain: "Agent ID integrates Conditional Access, ID Protection, ID Governance and an agent registry. High-privilege roles and powerful consents are blocked for agents.",
            es: {
              q: "¿Cuáles son dos capacidades que integra Microsoft Entra Agent ID para proteger el acceso de los agentes?",
              options: [
                "Directivas de acceso condicional que evalúan el riesgo del agente",
                "Un registro de agentes para descubrimiento y metadatos centralizados",
                "Conceder por defecto roles de administrador con privilegios elevados a los agentes",
                "Dar a cada identidad de agente su propia contraseña de larga duración",
                "Permitir que los usuarios consientan cualquier permiso para un agente"
              ],
              explain: "Agent ID integra el acceso condicional, ID Protection, ID Governance y un registro de agentes. Los roles con privilegios elevados y los consentimientos poderosos están bloqueados para los agentes."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about agent identities.",
            parts: [
              "Each agent identity has a ",
              { options: ["sponsor", "password", "subscription"], answer: 0 },
              ", the human user or group accountable for it, and relies on its ",
              { options: ["blueprint", "user's password", "VPN gateway"], answer: 0 },
              " to acquire authentication tokens."
            ],
            explain: "Agent identities have a unique ID, a display name and a sponsor, and get tokens through their blueprint because they have no credentials of their own.",
            es: {
              q: "Complete la afirmación sobre las identidades de agente.",
              parts: [
                "Cada identidad de agente tiene un ",
                { options: ["patrocinador", "contraseña", "suscripción"] },
                ", el usuario o grupo humano responsable, y depende de su ",
                { options: ["plano técnico", "contraseña del usuario", "puerta de enlace VPN"] },
                " para obtener tokens de autenticación."
              ],
              explain: "Las identidades de agente tienen un identificador único, un nombre para mostrar y un patrocinador, y obtienen tokens mediante su plano técnico porque no tienen credenciales propias."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft Entra Agent ID only works with agents built on Microsoft platforms.", answer: false, explain: "It's platform-agnostic and supports third-party agents such as those on AWS Bedrock and n8n." },
              { s: "Agents are blocked from being granted many high-privilege roles or permissions.", answer: true, explain: "This follows the principle of least privilege." },
              { s: "AI agents are vulnerable to attacks like prompt injection that don't affect traditional applications.", answer: true, explain: "It's one of the reasons agents need dedicated identities and governance." }
            ],
            es: {
              statements: [
                { s: "Microsoft Entra Agent ID solo funciona con agentes creados en plataformas de Microsoft.", explain: "No depende de la plataforma y admite agentes de terceros, como los de AWS Bedrock y n8n." },
                { s: "A los agentes se les impide recibir muchos roles o permisos con privilegios elevados.", explain: "Esto sigue el principio de privilegios mínimos." },
                { s: "Los agentes de IA son vulnerables a ataques como la inyección de prompts, que no afectan a las aplicaciones tradicionales.", explain: "Es una de las razones por las que los agentes necesitan identidades y gobernanza propias." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "hybrid-identity",
      name: "Describe hybrid identity",
      es: { name: "Descripción de identidad híbrida" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-basic-services-identity-types/4-describe-concept-of-hybrid-identity",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Which tool does Microsoft recommend for synchronizing on-premises Active Directory with Microsoft Entra ID in new hybrid identity deployments?",
            options: ["Microsoft Entra Cloud Sync", "Microsoft Entra Connect Sync", "Microsoft Entra Domain Services", "Azure File Sync"],
            answer: 0,
            explain: "Cloud Sync is the recommended path forward; Connect Sync is an earlier tool being replaced.",
            es: {
              q: "¿Qué herramienta recomienda Microsoft para sincronizar Active Directory local con Microsoft Entra ID en nuevas implementaciones de identidad híbrida?",
              options: ["Microsoft Entra Cloud Sync", "Microsoft Entra Connect Sync", "Microsoft Entra Domain Services", "Azure File Sync"],
              explain: "Cloud Sync es el camino recomendado; Connect Sync es una herramienta anterior que se está reemplazando."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about hybrid identity.",
            parts: [
              "Hybrid identity is accomplished through ",
              { options: ["provisioning", "encryption", "peering"], answer: 0 },
              " and ",
              { options: ["synchronization", "federation only", "replication to Azure Files"], answer: 0 },
              "."
            ],
            explain: "Inter-directory provisioning creates identities across directories, and synchronization keeps on-premises users and groups matching the cloud.",
            es: {
              q: "Complete la afirmación sobre la identidad híbrida.",
              parts: [
                "La identidad híbrida se logra mediante el ",
                { options: ["aprovisionamiento", "cifrado", "emparejamiento"] },
                " y la ",
                { options: ["sincronización", "federación únicamente", "replicación en Azure Files"] },
                "."
              ],
              explain: "El aprovisionamiento entre directorios crea identidades entre directorios, y la sincronización mantiene alineados los usuarios y grupos locales con la nube."
            }
          },
          {
            type: "single",
            q: "What is the System for Cross-domain Identity Management (SCIM) used for in hybrid identity?",
            options: [
              "A standard to automate exchanging user or group identity information between identity domains",
              "A protocol for encrypting data at rest",
              "A method for assigning RBAC roles",
              "A type of multifactor authentication"
            ],
            answer: 0,
            explain: "The Cloud Sync agent uses SCIM to provision and deprovision users and groups; SCIM is becoming the de facto provisioning standard.",
            es: {
              q: "¿Para qué se usa el sistema de administración de identidades entre dominios (SCIM) en la identidad híbrida?",
              options: [
                "Es un estándar para automatizar el intercambio de información de identidad de usuarios o grupos entre dominios de identidad",
                "Es un protocolo para cifrar datos en reposo",
                "Es un método para asignar roles de RBAC",
                "Es un tipo de autenticación multifactor"
              ],
              explain: "El agente de Cloud Sync usa SCIM para aprovisionar y desaprovisionar usuarios y grupos; SCIM se está convirtiendo en el estándar de facto de aprovisionamiento."
            }
          },
          {
            type: "multi",
            q: "Which two are benefits of Microsoft Entra Cloud Sync?",
            options: [
              "Simplified deployment with a lightweight provisioning agent",
              "High availability through multiple agents",
              "Requires deploying a full synchronization server farm",
              "Stores its provisioning configuration only on-premises",
              "Doesn't support multi-forest environments"
            ],
            answers: [0, 1],
            explain: "Cloud Sync offers simplified deployment, high availability through multiple agents and support for disconnected multi-forest environments; its configuration is stored in Entra ID.",
            es: {
              q: "¿Cuáles son dos ventajas de Microsoft Entra Cloud Sync?",
              options: [
                "Implementación simplificada con un agente de aprovisionamiento liviano",
                "Alta disponibilidad mediante varios agentes",
                "Exige implementar una granja completa de servidores de sincronización",
                "Guarda su configuración de aprovisionamiento solo en el entorno local",
                "No admite entornos con varios bosques"
              ],
              explain: "Cloud Sync ofrece implementación simplificada, alta disponibilidad con varios agentes y compatibilidad con entornos de varios bosques desconectados; su configuración se guarda en Entra ID."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft Entra Connect Sync is being replaced by Microsoft Entra Cloud Sync.", answer: true, explain: "New features are developed primarily on Cloud Sync." },
              { s: "The Cloud Sync provisioning agent can be deployed in an on-premises or IaaS-hosted environment.", answer: true, explain: "Only the agent is deployed; configuration lives in Entra ID." },
              { s: "The most common inter-directory provisioning scenario is provisioning a user from Microsoft Entra ID into on-premises Active Directory.", answer: false, explain: "The common scenario is a user already in Active Directory being provisioned into Microsoft Entra ID." }
            ],
            es: {
              statements: [
                { s: "Microsoft Entra Connect Sync se está reemplazando por Microsoft Entra Cloud Sync.", explain: "Las funciones nuevas se desarrollan principalmente sobre Cloud Sync." },
                { s: "El agente de aprovisionamiento de Cloud Sync se puede implementar en un entorno local o hospedado en IaaS.", explain: "Solo se implementa el agente; la configuración vive en Entra ID." },
                { s: "El escenario más común de aprovisionamiento entre directorios es aprovisionar un usuario de Microsoft Entra ID en Active Directory local.", explain: "El escenario habitual es un usuario que ya está en Active Directory y se aprovisiona en Microsoft Entra ID." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "external-identities",
      name: "Describe external identities",
      es: { name: "Describir identidades externas" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-basic-services-identity-types/5-describe-external-identities",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A company wants to publish a consumer-facing app and manage its customers' sign-up and sign-in with Microsoft Entra External ID. Which tenant configuration should it use?",
            options: ["A workforce tenant configuration", "An external tenant configuration", "A multitenant workforce configuration", "A sovereign tenant"],
            answer: 1,
            explain: "External tenants are used exclusively for External ID scenarios that publish apps to consumers or business customers.",
            es: {
              q: "Una empresa quiere publicar una aplicación para consumidores y administrar el registro y el inicio de sesión de sus clientes con Microsoft Entra External ID. ¿Qué configuración de inquilino debe usar?",
              options: ["Una configuración de inquilino de personal", "Una configuración de inquilino externo", "Una configuración de personal multiinquilino", "Un inquilino soberano"],
              explain: "Los inquilinos externos se usan exclusivamente para escenarios de External ID que publican aplicaciones para consumidores o clientes empresariales."
            }
          },
          {
            type: "single",
            q: "With B2B collaboration, how do business guests authenticate?",
            options: [
              "With credentials your organization creates and stores for them",
              "With their home organization or identity provider; your organization then checks their eligibility for guest collaboration",
              "With a shared password sent by email",
              "They don't authenticate at all"
            ],
            answer: 1,
            explain: "No credentials are associated with business guests in your tenant; they authenticate at home and you check their eligibility.",
            es: {
              q: "Con la colaboración B2B, ¿cómo se autentican los invitados empresariales?",
              options: [
                "Con credenciales que su organización crea y guarda para ellos",
                "Con su organización o proveedor de identidades de origen; luego su organización verifica si pueden colaborar como invitados",
                "Con una contraseña compartida enviada por correo",
                "No se autentican"
              ],
              explain: "Los invitados empresariales no tienen credenciales asociadas en su inquilino; se autentican en su origen y usted verifica que cumplan los requisitos."
            }
          },
          {
            type: "match",
            q: "Match each scenario to the External ID approach.",
            values: ["B2B collaboration", "B2B direct connect", "CIAM in an external tenant"],
            targets: [
              { t: "Guests access Office 365 and line-of-business apps in your workforce tenant", answer: 0 },
              { t: "Teams Connect shared channels with another organization, without adding guests", answer: 1 },
              { t: "Self-service registration and social sign-in for a consumer app", answer: 2 }
            ],
            explain: "B2B collaboration brings guests into the workforce tenant; direct connect uses mutual trust for shared channels; CIAM in an external tenant serves consumer apps.",
            es: {
              q: "Relacione cada escenario con el enfoque de External ID.",
              values: ["Colaboración B2B", "Conexión directa B2B", "CIAM en un inquilino externo"],
              targets: [
                { t: "Los invitados acceden a Office 365 y aplicaciones de línea de negocio en su inquilino de personal" },
                { t: "Canales compartidos de Teams Connect con otra organización, sin agregar invitados" },
                { t: "Registro de autoservicio e inicio de sesión social para una aplicación de consumidores" }
              ],
              explain: "La colaboración B2B suma invitados al inquilino de personal; la conexión directa usa confianza mutua para canales compartidos; el CIAM en un inquilino externo sirve a aplicaciones de consumidores."
            }
          },
          {
            type: "multi",
            q: "Which two features are part of the customer identity and access management (CIAM) capabilities in Microsoft Entra External ID?",
            options: ["Self-service registration", "Customer account management", "Deploying domain controllers", "Group Policy for consumer devices", "A VPN gateway for each customer"],
            answers: [0, 1],
            explain: "CIAM includes self-service registration, personalized sign-in with SSO across social and enterprise identities, and customer account management.",
            es: {
              q: "¿Cuáles son dos características de las capacidades de administración de identidades y acceso de clientes (CIAM) de Microsoft Entra External ID?",
              options: ["El registro de autoservicio", "La administración de cuentas de clientes", "La implementación de controladores de dominio", "La directiva de grupo para dispositivos de consumidores", "Una puerta de enlace VPN para cada cliente"],
              explain: "El CIAM incluye registro de autoservicio, inicio de sesión personalizado con SSO entre identidades sociales y empresariales, y administración de cuentas de clientes."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about tenant configurations.",
            parts: [
              "A ",
              { options: ["workforce", "external", "sovereign"], answer: 0 },
              " tenant configuration is for your employees and internal business apps, and you can invite ",
              { options: ["business partners and guests", "only consumers", "no external users"], answer: 0 },
              " to it."
            ],
            explain: "Workforce tenants serve employees and internal resources and can include invited business guests; external tenants serve consumer and customer apps.",
            es: {
              q: "Complete la afirmación sobre las configuraciones de inquilino.",
              parts: [
                "Una configuración de inquilino de ",
                { options: ["personal", "externo", "soberano"] },
                " es para sus empleados y aplicaciones internas, y se puede invitar a ",
                { options: ["socios empresariales e invitados", "solo consumidores", "ningún usuario externo"] },
                "."
              ],
              explain: "Los inquilinos de personal sirven a empleados y recursos internos y pueden incluir invitados empresariales; los externos sirven a aplicaciones para consumidores y clientes."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "External identities can range from corporate or government-issued accounts to social identity providers like Google or Facebook.", answer: true, explain: "Users can bring their own identities." },
              { s: "B2B direct connect users are added as guests in your directory.", answer: false, explain: "They access shared resources directly from their home tenant and aren't added as guests." },
              { s: "An external tenant configuration is used exclusively for External ID scenarios.", answer: true, explain: "It's for publishing apps to consumers or business customers." }
            ],
            es: {
              statements: [
                { s: "Las identidades externas pueden ir desde cuentas corporativas o emitidas por gobiernos hasta proveedores de identidades sociales como Google o Facebook.", explain: "Los usuarios pueden traer sus propias identidades." },
                { s: "Los usuarios de conexión directa B2B se agregan como invitados en su directorio.", explain: "Acceden a los recursos compartidos directamente desde su inquilino de origen y no se agregan como invitados." },
                { s: "Una configuración de inquilino externo se usa exclusivamente para escenarios de External ID.", explain: "Sirve para publicar aplicaciones para consumidores o clientes empresariales." }
              ]
            }
          }
        ]
      }
    }
  ]
});
