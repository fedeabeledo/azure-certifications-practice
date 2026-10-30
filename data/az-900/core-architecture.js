// AZ-900 > Describe Azure architecture and services > Describe the core architectural components of Azure
Catalog.module("az-900", {
  id: "core-architecture",
  name: "Describe the core architectural components of Azure",
  es: { name: "Describir los componentes arquitectónicos principales de Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Physical infrastructure",
        q: "A company wants its application to keep running even if a natural disaster takes down an entire Azure region. What should it use?",
        options: [
          "Several availability zones in the same region, with zone-redundant services",
          "Its paired region, configuring replication where needed",
          "A larger virtual machine size",
          "A second resource group in the same region with a copy of every resource"
        ],
        answer: 1,
        explain: "Availability zones protect against datacenter failures inside a region; a region-wide event needs a second region. Region pairs exist for that, but not every service replicates automatically, so the customer may need to configure it.",
        es: {
          topic: "Infraestructura física",
          q: "Una empresa quiere que su aplicación siga funcionando aunque un desastre natural deje fuera de servicio una región de Azure completa. ¿Qué debe usar?",
          options: [
            "Varias zonas de disponibilidad de la misma región, con servicios con redundancia de zona",
            "Su región emparejada, configurando la replicación donde haga falta",
            "Un tamaño de máquina virtual más grande",
            "Un segundo grupo de recursos en la misma región con una copia de cada recurso"
          ],
          explain: "Las zonas de disponibilidad protegen ante fallas de centros de datos dentro de una región; un evento que afecta a toda la región requiere una segunda región. Para eso están los pares de regiones, pero no todos los servicios replican automáticamente, así que el cliente puede tener que configurarlo."
        }
      },
      {
        type: "single",
        topic: "Management infrastructure",
        q: "An administrator needs to grant a team the same permissions across 15 subscriptions with a single role assignment. What should the administrator do?",
        options: [
          "Create the assignment on each resource group",
          "Group the subscriptions in a management group and assign the role there",
          "Move the subscriptions into one resource group and assign it there",
          "Create a new Azure account for the team"
        ],
        answer: 1,
        explain: "Permissions assigned on a management group are inherited by all subscriptions, resource groups and resources beneath it, so there's no need to script assignments one by one.",
        es: {
          topic: "Infraestructura de administración",
          q: "Un administrador necesita conceder a un equipo los mismos permisos en 15 suscripciones con una sola asignación de rol. ¿Qué debe hacer?",
          options: [
            "Crear la asignación en cada grupo de recursos",
            "Agrupar las suscripciones en un grupo de administración y asignar el rol ahí",
            "Mover las suscripciones a un grupo de recursos y asignar el rol ahí",
            "Crear una nueva cuenta de Azure para el equipo"
          ],
          explain: "Los permisos asignados en un grupo de administración los heredan todas las suscripciones, grupos de recursos y recursos que dependen de él, así que no hace falta hacer asignaciones una por una."
        }
      },
      {
        type: "match",
        topic: "Management infrastructure",
        q: "Match each description to the level of the Azure management hierarchy it describes.",
        values: ["Resource", "Resource group", "Subscription", "Management group"],
        targets: [
          { t: "A virtual network you deploy", answer: 0 },
          { t: "A unit of billing that gets its own invoice", answer: 2 },
          { t: "A container that can't be nested or renamed after creation", answer: 1 },
          { t: "The level where policies are inherited by all subscriptions beneath it", answer: 3 }
        ],
        explain: "Resources are the building blocks; resource groups hold them and can't be nested or renamed; subscriptions are units of management, billing and scale; management groups sit above subscriptions and pass down governance.",
        es: {
          topic: "Infraestructura de administración",
          q: "Relacione cada descripción con el nivel de la jerarquía de administración de Azure que describe.",
          values: ["Recurso", "Grupo de recursos", "Suscripción", "Grupo de administración"],
          targets: [
            { t: "Una red virtual que usted implementa" },
            { t: "Una unidad de facturación que tiene su propia factura" },
            { t: "Un contenedor que no se puede anidar ni cambiar de nombre después de crearlo" },
            { t: "El nivel donde las directivas se heredan a todas las suscripciones que dependen de él" }
          ],
          explain: "Los recursos son los bloques de construcción; los grupos de recursos los contienen y no se pueden anidar ni renombrar; las suscripciones son unidades de administración, facturación y escala; los grupos de administración están por encima de las suscripciones y transmiten la gobernanza."
        }
      },
      {
        type: "single",
        topic: "Azure accounts",
        q: "A student wants to explore Azure but doesn't have a credit card. Which offer fits?",
        options: ["The Azure free account", "The Azure free student account", "A pay-as-you-go subscription", "A Cloud Solution Provider plan"],
        answer: 1,
        explain: "The student offer can be created without a credit card and includes credit and free developer tools. The regular free account requires a card for identity verification.",
        es: {
          topic: "Cuentas de Azure",
          q: "Un estudiante quiere explorar Azure pero no tiene tarjeta de crédito. ¿Qué oferta le corresponde?",
          options: ["La cuenta gratuita de Azure", "La cuenta gratuita de Azure para estudiantes", "Una suscripción de pago por uso", "Un plan de Proveedor de soluciones en la nube"],
          explain: "La oferta para estudiantes se puede crear sin tarjeta de crédito e incluye crédito y herramientas de desarrollo gratuitas. La cuenta gratuita común requiere una tarjeta para verificar la identidad."
        }
      },
      {
        type: "multi",
        topic: "Physical infrastructure",
        q: "Which two statements about availability zones are true?",
        options: [
          "Each zone has independent power, cooling and networking",
          "Zones are linked by private, high-speed fiber",
          "Zones in a region are located in different geographies to avoid shared disasters",
          "Every Azure region supports availability zones",
          "All zones in a region share a single power supply"
        ],
        answers: [0, 1],
        explain: "Zones are physically separate datacenters within one region, each an isolation boundary with its own power, cooling and networking, linked by private fiber. Not every region supports zones.",
        es: {
          topic: "Infraestructura física",
          q: "¿Cuáles son dos afirmaciones verdaderas sobre las zonas de disponibilidad?",
          options: [
            "Cada zona tiene energía, refrigeración y red independientes",
            "Las zonas se unen con fibra privada de alta velocidad",
            "Las zonas de una región están en geografías distintas para evitar desastres compartidos",
            "Todas las regiones de Azure admiten zonas de disponibilidad",
            "Todas las zonas de una región comparten un único suministro eléctrico"
          ],
          explain: "Las zonas son centros de datos físicamente separados dentro de una región, cada uno un límite de aislamiento con su propia energía, refrigeración y red, unidos por fibra privada. No todas las regiones admiten zonas."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Physical infrastructure", s: "Every Azure region pair is located within a single geography, with no exceptions.", answer: false, explain: "Brazil South is paired with South Central US, outside its geography." },
          { topic: "Management infrastructure", s: "Granting access on a resource group applies that access to all resources inside it.", answer: true, explain: "Actions applied to a resource group affect all its resources." },
          { topic: "What is Azure", s: "Moving existing applications to virtual machines is a good start, but the cloud offers much more than a place to run VMs.", answer: true, explain: "The unit encourages modernizing one workload at a time after the initial move." }
        ],
        es: {
          statements: [
            { topic: "Infraestructura física", s: "Todos los pares de regiones de Azure están dentro de una misma geografía, sin excepciones.", explain: "Brasil Sur está emparejada con Centro y Sur de EE. UU., fuera de su geografía." },
            { topic: "Infraestructura de administración", s: "Conceder acceso a un grupo de recursos aplica ese acceso a todos los recursos que contiene.", explain: "Las acciones aplicadas a un grupo de recursos afectan a todos sus recursos." },
            { topic: "Qué es Azure", s: "Migrar aplicaciones existentes a máquinas virtuales es un buen comienzo, pero la nube ofrece mucho más que un lugar donde ejecutar máquinas virtuales.", explain: "La unidad propone modernizar una carga de trabajo a la vez después de la migración inicial." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Physical infrastructure",
        q: "Complete the statements about region pairs.",
        parts: [
          "When a service doesn't replicate data to its paired region automatically, ",
          { options: ["Microsoft", "the customer", "the region pair"], answer: 1 },
          " must configure recovery and replication. Data in a region pair continues to reside within ",
          { options: ["the same geography", "any geography", "a sovereign region"], answer: 0 },
          ", except for Brazil South."
        ],
        explain: "Not all services replicate or fail over automatically, so the customer configures it. Pairs keep data in the same geography for residency and compliance, with Brazil South as the exception.",
        es: {
          topic: "Infraestructura física",
          q: "Complete las afirmaciones sobre los pares de regiones.",
          parts: [
            "Cuando un servicio no replica automáticamente los datos en su región emparejada, ",
            { options: ["Microsoft", "el cliente", "el par de regiones"] },
            " debe configurar la recuperación y la replicación. Los datos de un par de regiones siguen residiendo en ",
            { options: ["la misma geografía", "cualquier geografía", "una región soberana"] },
            ", salvo en el caso de Brasil Sur."
          ],
          explain: "No todos los servicios replican ni conmutan por error automáticamente, así que el cliente lo configura. Los pares mantienen los datos en la misma geografía por residencia y cumplimiento, con Brasil Sur como excepción."
        }
      },
      {
        type: "single",
        topic: "Azure accounts",
        q: "A team works under a single Azure account and wants development, test and production kept apart, with separate costs and access rules. What should it create?",
        options: ["A separate Azure account per developer", "Separate subscriptions for each environment", "A single resource group for everything", "One availability zone per environment"],
        answer: 1,
        explain: "One account can hold several subscriptions; separating environments into subscriptions gives each its own billing and access boundary.",
        es: {
          topic: "Cuentas de Azure",
          q: "Un equipo trabaja con una sola cuenta de Azure y quiere separar desarrollo, pruebas y producción, con costos y reglas de acceso propios. ¿Qué debe crear?",
          options: ["Una cuenta de Azure distinta por desarrollador", "Suscripciones separadas para cada entorno", "Un único grupo de recursos para todo", "Una zona de disponibilidad por entorno"],
          explain: "Una cuenta puede tener varias suscripciones; separar los entornos en suscripciones le da a cada uno su propio límite de facturación y de acceso."
        }
      },
      {
        type: "single",
        topic: "Management infrastructure",
        q: "Which of the following is described as the basic building block of Azure?",
        options: ["A management group", "A subscription", "A resource", "A region"],
        answer: 2,
        explain: "Anything you create, provision or deploy in Azure, such as a VM, a virtual network or a database, is a resource.",
        es: {
          topic: "Infraestructura de administración",
          q: "¿Cuál de los siguientes elementos se describe como el bloque de construcción básico de Azure?",
          options: ["Un grupo de administración", "Una suscripción", "Un recurso", "Una región"],
          explain: "Todo lo que crea, aprovisiona o implementa en Azure, como una máquina virtual, una red virtual o una base de datos, es un recurso."
        }
      },
      {
        type: "single",
        topic: "Physical infrastructure",
        q: "Which of the following is a global Azure service that doesn't require you to choose a region when you use it?",
        options: ["Azure Traffic Manager", "A virtual machine", "A managed disk", "A specific VM size"],
        answer: 0,
        explain: "Microsoft Entra ID, Azure Traffic Manager and Azure DNS are global services. VMs and disks are deployed to a region, and some VM sizes exist only in certain regions.",
        es: {
          topic: "Infraestructura física",
          q: "¿Cuál de los siguientes es un servicio global de Azure que no requiere elegir una región para usarlo?",
          options: ["Azure Traffic Manager", "Una máquina virtual", "Un disco administrado", "Un tamaño de máquina virtual específico"],
          explain: "Microsoft Entra ID, Azure Traffic Manager y Azure DNS son servicios globales. Las máquinas virtuales y los discos se implementan en una región, y algunos tamaños solo existen en ciertas regiones."
        }
      },
      {
        type: "single",
        topic: "What is Azure",
        q: "A developer wants to add language, vision and generative AI capabilities to an existing application. Which Azure offering fits?",
        options: ["Azure DNS", "Azure OpenAI Service", "Azure management groups", "Availability zones"],
        answer: 1,
        explain: "Azure AI services and Azure OpenAI Service add language, vision, speech and generative AI capabilities to applications.",
        es: {
          topic: "Qué es Azure",
          q: "Un desarrollador quiere agregar capacidades de lenguaje, visión e IA generativa a una aplicación existente. ¿Qué oferta de Azure corresponde?",
          options: ["Azure DNS", "Azure OpenAI Service", "Los grupos de administración de Azure", "Las zonas de disponibilidad"],
          explain: "Los servicios de Azure AI y Azure OpenAI Service agregan capacidades de lenguaje, visión, voz e IA generativa a las aplicaciones."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Management infrastructure", s: "A single directory supports up to 10,000 management groups.", answer: true, explain: "That's one of the listed facts about management groups." },
          { topic: "Azure accounts", s: "You're charged as soon as you sign up for the Azure free account.", answer: false, explain: "The card is for identity verification; you aren't charged until you upgrade to a paid subscription." },
          { topic: "Physical infrastructure", s: "Zonal services, such as virtual machines, are pinned to a specific availability zone.", answer: true, explain: "With zonal services you pin the resource to a zone; zone-redundant services replicate across zones automatically." }
        ],
        es: {
          statements: [
            { topic: "Infraestructura de administración", s: "Un solo directorio admite hasta 10.000 grupos de administración.", explain: "Es uno de los datos listados sobre los grupos de administración." },
            { topic: "Cuentas de Azure", s: "Se le cobra apenas se registra en la cuenta gratuita de Azure.", explain: "La tarjeta sirve para verificar la identidad; no se cobra hasta que actualiza a una suscripción de pago." },
            { topic: "Infraestructura física", s: "Los servicios zonales, como las máquinas virtuales, se fijan a una zona de disponibilidad específica.", explain: "Con los servicios zonales el recurso se fija a una zona; los servicios con redundancia de zona replican entre zonas automáticamente." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "what-is-azure",
      name: "What is Microsoft Azure",
      es: { name: "Qué es Microsoft Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/2-what-microsoft-azure",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A team has already moved its existing applications to virtual machines in Azure and now wants to modernize gradually. Which approach does the unit describe?",
            options: [
              "Rewrite every application as cloud-native at once, then move them all to production together",
              "Modernize one workload at a time, such as moving to managed databases",
              "Keep everything on VMs permanently, since that's the main use of the cloud",
              "Move the applications back on-premises first"
            ],
            answer: 1,
            explain: "Migrating to VMs is a good start, and teams can then modernize workload by workload: managed databases, autoscaling web apps or event-driven services.",
            es: {
              q: "Un equipo ya migró sus aplicaciones existentes a máquinas virtuales en Azure y ahora quiere modernizarlas de forma gradual. ¿Qué enfoque describe la unidad?",
              options: [
                "Reescribir todas las aplicaciones como nativas de la nube de una vez y pasarlas juntas a producción",
                "Modernizar una carga de trabajo a la vez, por ejemplo pasando a bases de datos administradas",
                "Mantener todo en máquinas virtuales de forma permanente, ya que es el uso principal de la nube",
                "Volver a llevar primero las aplicaciones al entorno local"
              ],
              explain: "Migrar a máquinas virtuales es un buen comienzo, y después los equipos pueden modernizar carga por carga: bases de datos administradas, aplicaciones web con escalado automático o servicios basados en eventos."
            }
          },
          {
            type: "multi",
            q: "Which two Azure offerings let you add language, vision, speech or generative AI capabilities to your applications?",
            options: ["Azure AI services", "Azure OpenAI Service", "Azure DNS", "Azure Traffic Manager", "Microsoft Entra ID"],
            answers: [0, 1],
            explain: "Azure AI services and Azure OpenAI Service provide those capabilities. DNS and Traffic Manager are networking services; Entra ID handles identity.",
            es: {
              q: "¿Cuáles son dos ofertas de Azure que permiten agregar capacidades de lenguaje, visión, voz o IA generativa a sus aplicaciones?",
              options: ["Los servicios de Azure AI", "Azure OpenAI Service", "Azure DNS", "Azure Traffic Manager", "Microsoft Entra ID"],
              explain: "Los servicios de Azure AI y Azure OpenAI Service brindan esas capacidades. DNS y Traffic Manager son servicios de red; Entra ID gestiona la identidad."
            }
          },
          {
            type: "single",
            q: "An internal app has seasonal demand spikes. How does Azure help the company avoid paying for unused capacity all year?",
            options: [
              "By reserving capacity for the yearly peak in advance",
              "By scaling resources for the spike and back down afterward",
              "By moving the app to a sovereign region",
              "By assigning the app to a management group"
            ],
            answer: 1,
            explain: "The unit's example: scale up or out as demand grows, then scale back, so you don't pay for idle capacity year-round.",
            es: {
              q: "Una aplicación interna tiene picos de demanda estacionales. ¿Cómo ayuda Azure a la empresa a no pagar capacidad sin usar todo el año?",
              options: [
                "Reservando de antemano capacidad para el pico anual",
                "Permitiendo escalar los recursos durante el pico y reducirlos después",
                "Trasladando la aplicación a una región soberana",
                "Asignando la aplicación a un grupo de administración"
              ],
              explain: "El ejemplo de la unidad: escalar a medida que crece la demanda y luego reducir, para no pagar capacidad ociosa todo el año."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about what Azure offers.",
            parts: [
              "Azure provides ",
              { options: ["dozens of", "hundreds of", "exactly 65"], answer: 1 },
              " services, from running existing applications on ",
              { options: ["virtual machines", "only mainframes", "physical servers shipped to Microsoft"], answer: 0 },
              " to exploring new paradigms such as intelligent bots and generative AI."
            ],
            explain: "Azure has hundreds of services spanning VMs to generative AI. The number 65 refers to always-free services in the free account.",
            es: {
              q: "Complete la afirmación sobre lo que ofrece Azure.",
              parts: [
                "Azure ofrece ",
                { options: ["decenas de", "cientos de", "exactamente 65"] },
                " servicios, desde ejecutar aplicaciones existentes en ",
                { options: ["máquinas virtuales", "solo mainframes", "servidores físicos enviados a Microsoft"] },
                " hasta explorar nuevos paradigmas como bots inteligentes e IA generativa."
              ],
              explain: "Azure tiene cientos de servicios, desde máquinas virtuales hasta IA generativa. El número 65 corresponde a los servicios siempre gratuitos de la cuenta gratuita."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure services are limited to hosting virtual machines.", answer: false, explain: "Azure spans compute, networking, storage, databases, AI, identity, IoT, analytics and more." },
              { s: "Azure Machine Learning and Internet of Things (IoT) services are part of what Azure provides.", answer: true, explain: "Both are mentioned among Azure's offerings." },
              { s: "In Azure you can monitor the health of an application from a centralized dashboard.", answer: true, explain: "The unit's practical example includes centralized health monitoring." }
            ],
            es: {
              statements: [
                { s: "Los servicios de Azure se limitan a hospedar máquinas virtuales.", explain: "Azure abarca cómputo, redes, almacenamiento, bases de datos, IA, identidad, IoT, análisis y más." },
                { s: "Azure Machine Learning y los servicios de Internet de las cosas (IoT) forman parte de lo que ofrece Azure.", explain: "Ambos se mencionan entre las ofertas de Azure." },
                { s: "En Azure se puede supervisar el estado de una aplicación desde un panel centralizado.", explain: "El ejemplo práctico de la unidad incluye supervisión centralizada del estado." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "azure-accounts",
      name: "Get started with Azure accounts",
      es: { name: "Introducción a las cuentas de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/3-get-started-azure-accounts",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Your team uses one Azure account and wants to run development, testing and production workloads separately. What does the unit suggest?",
            options: ["Create a separate Azure account for each workload", "Create one subscription per environment", "Use one subscription with a single resource group and tag resources by environment", "Use a free student account for development"],
            answer: 1,
            explain: "After creating an account you can create additional subscriptions; a team might use one account with separate subscriptions per environment.",
            es: {
              q: "Su equipo usa una sola cuenta de Azure y quiere ejecutar por separado las cargas de desarrollo, pruebas y producción. ¿Qué sugiere la unidad?",
              options: ["Crear una cuenta de Azure distinta para cada carga", "Crear una suscripción por entorno", "Usar una suscripción con un único grupo de recursos y etiquetar los recursos por entorno", "Usar una cuenta gratuita para estudiantes en desarrollo"],
              explain: "Después de crear una cuenta se pueden crear suscripciones adicionales; un equipo puede usar una cuenta con suscripciones separadas por entorno."
            }
          },
          {
            type: "match",
            q: "Match each characteristic to the offer it belongs to.",
            values: ["Azure free account", "Azure free student account"],
            targets: [
              { t: "Requires a credit card for identity verification", answer: 0 },
              { t: "Can be created without a credit card", answer: 1 },
              { t: "Includes a credit to use in the first 30 days", answer: 0 },
              { t: "Includes a $100 credit and free developer tools", answer: 1 }
            ],
            explain: "The free account needs a phone, a card (for verification) and a Microsoft or GitHub account, with 30-day credit. The student offer gives $100 credit and developer tools without a card.",
            es: {
              q: "Relacione cada característica con la oferta a la que pertenece.",
              values: ["Cuenta gratuita de Azure", "Cuenta gratuita de Azure para estudiantes"],
              targets: [
                { t: "Requiere una tarjeta de crédito para verificar la identidad" },
                { t: "Se puede crear sin tarjeta de crédito" },
                { t: "Incluye un crédito para usar en los primeros 30 días" },
                { t: "Incluye un crédito de 100 USD y herramientas de desarrollo gratuitas" }
              ],
              explain: "La cuenta gratuita requiere teléfono, tarjeta (para verificación) y una cuenta de Microsoft o GitHub, con crédito por 30 días. La oferta para estudiantes da 100 USD de crédito y herramientas de desarrollo sin tarjeta."
            }
          },
          {
            type: "single",
            q: "What do you need in order to create and use Azure services?",
            options: ["A management group", "An Azure subscription", "A sovereign region", "An on-premises domain controller"],
            answer: 1,
            explain: "Creating and using Azure services requires a subscription. When you create an account, a subscription is created for you.",
            es: {
              q: "¿Qué necesita para crear y usar servicios de Azure?",
              options: ["Un grupo de administración", "Una suscripción de Azure", "Una región soberana", "Un controlador de dominio local"],
              explain: "Crear y usar servicios de Azure requiere una suscripción. Cuando crea una cuenta, se crea una suscripción automáticamente."
            }
          },
          {
            type: "multi",
            q: "Which two are ways to purchase Azure access?",
            options: [
              "Directly from Microsoft",
              "Through a Microsoft partner",
              "Only through a domain registrar",
              "Only by sending a purchase order to the datacenter in your region",
              "Only after completing an official Microsoft training course"
            ],
            answers: [0, 1],
            explain: "You can buy directly from Microsoft or through a partner; Cloud Solution Provider partners offer complete managed-cloud solutions.",
            es: {
              q: "¿Cuáles son dos formas de comprar acceso a Azure?",
              options: [
                "Directamente a Microsoft",
                "A través de un socio de Microsoft",
                "Solo a través de un registrador de dominios",
                "Solo enviando una orden de compra al centro de datos de su región",
                "Solo después de completar un curso oficial de Microsoft"
              ],
              explain: "Se puede comprar directamente a Microsoft o a través de un socio; los Proveedores de soluciones en la nube ofrecen soluciones completas de nube administrada."
            }
          },
          {
            type: "single",
            q: "When you sign up for the Azure free account, what is your credit card used for?",
            options: [
              "To charge you monthly for always-free services",
              "Only to verify your identity",
              "To pay in advance for the 12 months of popular products included in the offer",
              "To pay for support plans automatically"
            ],
            answer: 1,
            explain: "The card is used only to verify your identity. Charges start only if you upgrade.",
            es: {
              q: "Cuando se registra en la cuenta gratuita de Azure, ¿para qué se usa su tarjeta de crédito?",
              options: [
                "Para cobrarle mensualmente los servicios siempre gratuitos",
                "Solo para verificar su identidad",
                "Para pagar por adelantado los 12 meses de productos populares incluidos en la oferta",
                "Para pagar automáticamente planes de soporte"
              ],
              explain: "La tarjeta se usa solo para verificar su identidad. Los cargos empiezan únicamente si actualiza la suscripción."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The Azure free account includes access to more than 65 services that are always free.", answer: true, explain: "Along with 12 months of popular products and a 30-day credit." },
              { s: "After you create an Azure account, you can't create additional subscriptions.", answer: false, explain: "You're free to create additional subscriptions after creating an account." },
              { s: "Signing up for the Azure free account requires a Microsoft or GitHub account.", answer: true, explain: "You also need a phone number and a credit card." }
            ],
            es: {
              statements: [
                { s: "La cuenta gratuita de Azure incluye acceso a más de 65 servicios que son siempre gratuitos.", explain: "Además de 12 meses de productos populares y un crédito por 30 días." },
                { s: "Después de crear una cuenta de Azure, no se pueden crear suscripciones adicionales.", explain: "Después de crear una cuenta se pueden crear suscripciones adicionales libremente." },
                { s: "Para registrarse en la cuenta gratuita de Azure se necesita una cuenta de Microsoft o de GitHub.", explain: "También se necesitan un número de teléfono y una tarjeta de crédito." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "physical-infrastructure",
      name: "Describe Azure physical infrastructure",
      es: { name: "Descripción de la infraestructura física de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Which definition of an Azure region is correct?",
            options: [
              "A single datacenter with its own dedicated power, cooling and networking",
              "An area with one or more datacenters linked by a low-latency network",
              "A group of subscriptions that share billing",
              "A physically and logically isolated instance of Azure for government use"
            ],
            answer: 1,
            explain: "A region is a geographical area with one or more datacenters connected by low-latency networking. Isolated government instances are sovereign regions.",
            es: {
              q: "¿Qué definición de región de Azure es correcta?",
              options: [
                "Un único centro de datos con energía, refrigeración y red propias",
                "Un área con uno o más centros de datos unidos por una red de baja latencia",
                "Un grupo de suscripciones que comparten la facturación",
                "Una instancia de Azure aislada física y lógicamente para uso gubernamental"
              ],
              explain: "Una región es un área geográfica con uno o más centros de datos conectados por una red de baja latencia. Las instancias gubernamentales aisladas son regiones soberanas."
            }
          },
          {
            type: "match",
            q: "Match each example to its category of availability zone support.",
            values: ["Zonal service", "Zone-redundant service", "Non-regional service"],
            targets: [
              { t: "A virtual machine pinned to a specific zone", answer: 0 },
              { t: "Zone-redundant storage that the platform replicates across zones automatically", answer: 1 },
              { t: "A service always available from Azure geographies and resilient to region-wide outages", answer: 2 },
              { t: "A managed disk deployed in a chosen zone", answer: 0 }
            ],
            explain: "Zonal: you pin the resource to a zone (VMs, managed disks, IP addresses). Zone-redundant: automatic replication across zones (ZRS, SQL Database). Non-regional: always available and resilient to zone and region outages.",
            es: {
              q: "Relacione cada ejemplo con su categoría de compatibilidad con zonas de disponibilidad.",
              values: ["Servicio zonal", "Servicio con redundancia de zona", "Servicio no regional"],
              targets: [
                { t: "Una máquina virtual fijada a una zona específica" },
                { t: "El almacenamiento con redundancia de zona que la plataforma replica automáticamente entre zonas" },
                { t: "Un servicio siempre disponible desde las geografías de Azure y resistente a interrupciones de una región entera" },
                { t: "Un disco administrado implementado en una zona elegida" }
              ],
              explain: "Zonal: el recurso se fija a una zona (máquinas virtuales, discos administrados, direcciones IP). Con redundancia de zona: replicación automática entre zonas (ZRS, SQL Database). No regional: siempre disponible y resistente a interrupciones de zona y de región."
            }
          },
          {
            type: "single",
            q: "An application must survive the failure of a single datacenter, but its data must stay within one Azure region for compliance. What should you use?",
            options: ["Availability zones in that region", "The region's paired region, with geo-replication", "A sovereign region", "A single larger datacenter in the same region"],
            answer: 0,
            explain: "Spreading workloads across availability zones protects against datacenter failures while staying in the same region. A paired region would move data to another region.",
            es: {
              q: "Una aplicación debe sobrevivir a la falla de un solo centro de datos, pero sus datos deben quedarse en una región de Azure por cumplimiento. ¿Qué debe usar?",
              options: ["Zonas de disponibilidad de esa región", "La región emparejada, con replicación geográfica", "Una región soberana", "Un único centro de datos más grande en la misma región"],
              explain: "Repartir las cargas entre zonas de disponibilidad protege ante fallas de centros de datos sin salir de la región. Una región emparejada llevaría los datos a otra región."
            }
          },
          {
            type: "single",
            q: "Which statement about the Brazil South region is correct?",
            options: [
              "It's paired in both directions with another region in Brazil",
              "Its pair is South Central US, outside its geography",
              "It has no region pair, so it relies only on its availability zones for resiliency",
              "It's a sovereign region operated by 21Vianet"
            ],
            answer: 1,
            explain: "Brazil South's secondary region is South Central US, outside its geography, and South Central US's secondary isn't Brazil South.",
            es: {
              q: "¿Qué afirmación sobre la región Brasil Sur es correcta?",
              options: [
                "Está emparejada en ambos sentidos con otra región de Brasil",
                "Su par es Centro y Sur de EE. UU., fuera de su geografía",
                "No tiene región emparejada, así que depende solo de sus zonas de disponibilidad",
                "Es una región soberana operada por 21Vianet"
              ],
              explain: "La región secundaria de Brasil Sur es Centro y Sur de EE. UU., fuera de su geografía, y la secundaria de Centro y Sur de EE. UU. no es Brasil Sur."
            }
          },
          {
            type: "multi",
            q: "Which two are advantages of Azure region pairs?",
            options: [
              "Planned Azure updates are rolled out to one region of the pair at a time",
              "During an extensive outage, one region of every pair is prioritized for restoration",
              "Every Azure service automatically replicates data to the paired region",
              "Paired regions are always less than 50 miles apart",
              "Paired regions share a single datacenter"
            ],
            answers: [0, 1],
            explain: "Staggered updates and prioritized recovery are listed advantages. Not all services replicate automatically, and pairs are at least 300 miles apart.",
            es: {
              q: "¿Cuáles son dos ventajas de los pares de regiones de Azure?",
              options: [
                "Las actualizaciones planificadas de Azure se aplican a una región del par por vez",
                "Durante una interrupción amplia, se prioriza restaurar una región de cada par",
                "Todos los servicios de Azure replican automáticamente los datos en la región emparejada",
                "Las regiones emparejadas siempre están a menos de 50 millas",
                "Las regiones emparejadas comparten un único centro de datos"
              ],
              explain: "Las actualizaciones escalonadas y la recuperación prioritaria son ventajas listadas. No todos los servicios replican automáticamente, y los pares están a al menos 300 millas."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure resiliency.",
            parts: [
              "Every availability zone-enabled region has a minimum of ",
              { options: ["two", "three", "five"], answer: 1 },
              " availability zones, and most region pairs are at least ",
              { options: ["30 miles", "300 miles", "3,000 miles"], answer: 1 },
              " apart."
            ],
            explain: "Zone-enabled regions have at least three zones. Region pairs sit at least 300 miles apart within the same geography.",
            es: {
              q: "Complete la afirmación sobre la resiliencia de Azure.",
              parts: [
                "Toda región con zonas de disponibilidad tiene como mínimo ",
                { options: ["dos", "tres", "cinco"] },
                " zonas de disponibilidad, y la mayoría de los pares de regiones están separados por al menos ",
                { options: ["30 millas", "300 millas", "3.000 millas"] },
                "."
              ],
              explain: "Las regiones con zonas tienen al menos tres zonas. Los pares de regiones están a por lo menos 300 millas dentro de la misma geografía."
            }
          },
          {
            type: "single",
            q: "A US government agency needs an isolated instance of Azure, operated by screened US personnel, with additional compliance certifications. What should it use?",
            options: ["A US Gov sovereign region", "A China sovereign region", "A standard region pair", "An availability zone in East US"],
            answer: 0,
            explain: "US DoD and US Gov regions are physically and logically isolated Azure instances for US government agencies and partners, run by screened personnel.",
            es: {
              q: "Una agencia del gobierno de EE. UU. necesita una instancia aislada de Azure, operada por personal estadounidense investigado, con certificaciones de cumplimiento adicionales. ¿Qué debe usar?",
              options: ["Una región soberana US Gov", "Una región soberana de China", "Un par de regiones estándar", "Una zona de disponibilidad en Este de EE. UU."],
              explain: "Las regiones US DoD y US Gov son instancias de Azure aisladas física y lógicamente para agencias y socios del gobierno de EE. UU., operadas por personal investigado."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Some global services, such as Microsoft Entra ID and Azure DNS, don't require you to select a region.", answer: true, explain: "Entra ID, Traffic Manager and DNS are global services." },
              { s: "All Azure regions currently support availability zones.", answer: false, explain: "Not all regions support availability zones." },
              { s: "Microsoft directly maintains the datacenters of the Azure regions in China.", answer: false, explain: "China regions are available through a partnership with 21Vianet; Microsoft doesn't directly maintain those datacenters." }
            ],
            es: {
              statements: [
                { s: "Algunos servicios globales, como Microsoft Entra ID y Azure DNS, no requieren seleccionar una región.", explain: "Entra ID, Traffic Manager y DNS son servicios globales." },
                { s: "Todas las regiones de Azure admiten actualmente zonas de disponibilidad.", explain: "No todas las regiones admiten zonas de disponibilidad." },
                { s: "Microsoft mantiene directamente los centros de datos de las regiones de Azure en China.", explain: "Las regiones de China están disponibles mediante una asociación con 21Vianet; Microsoft no mantiene directamente esos centros de datos." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "management-infrastructure",
      name: "Describe Azure management infrastructure",
      es: { name: "Descripción de la infraestructura de administración de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "You're setting up a temporary development environment with several resources. What's the simplest way to remove everything when you're done?",
            options: [
              "Use one resource group, then delete it",
              "Delete a management group",
              "Delete the Azure account",
              "Move the resources to another region"
            ],
            answer: 0,
            explain: "Deleting a resource group deletes everything in it, which makes a dedicated group ideal for temporary environments.",
            es: {
              q: "Está armando un entorno de desarrollo temporal con varios recursos. ¿Cuál es la forma más simple de quitar todo al terminar?",
              options: [
                "Usar un grupo de recursos y después eliminarlo",
                "Eliminar un grupo de administración",
                "Eliminar la cuenta de Azure",
                "Mover los recursos a otra región"
              ],
              explain: "Eliminar un grupo de recursos elimina todo lo que contiene, por eso un grupo dedicado es ideal para entornos temporales."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the Azure management hierarchy.",
            parts: [
              "Resources are placed in ",
              { options: ["subscriptions", "resource groups", "management groups"], answer: 1 },
              ", which belong to ",
              { options: ["management groups", "resource groups", "subscriptions"], answer: 2 },
              ", which can be organized into ",
              { options: ["management groups", "subscriptions", "resource groups"], answer: 0 },
              "."
            ],
            explain: "Resources go into resource groups, resource groups into subscriptions, and subscriptions into management groups, up to the Tenant Root Group.",
            es: {
              q: "Complete la afirmación sobre la jerarquía de administración de Azure.",
              parts: [
                "Los recursos se colocan en ",
                { options: ["suscripciones", "grupos de recursos", "grupos de administración"] },
                ", que pertenecen a ",
                { options: ["grupos de administración", "grupos de recursos", "suscripciones"] },
                ", que a su vez se pueden organizar en ",
                { options: ["grupos de administración", "suscripciones", "grupos de recursos"] },
                "."
              ],
              explain: "Los recursos van en grupos de recursos, los grupos de recursos en suscripciones y las suscripciones en grupos de administración, hasta el grupo raíz del inquilino."
            }
          },
          {
            type: "single",
            q: "Your company wants to restrict VM locations to one region across dozens of production subscriptions, and subscription owners must not be able to override the rule. Where should you apply the policy?",
            options: ["On each virtual machine", "On each resource group inside the production subscriptions", "On a management group", "On the Azure account"],
            answer: 2,
            explain: "A policy on a management group is inherited by all subscriptions and VMs beneath it, and resource or subscription owners can't override it.",
            es: {
              q: "Su empresa quiere restringir la ubicación de las máquinas virtuales a una región en decenas de suscripciones de producción, y los propietarios de las suscripciones no deben poder anular la regla. ¿Dónde debe aplicar la directiva?",
              options: ["En cada máquina virtual", "En cada grupo de recursos de las suscripciones de producción", "En un grupo de administración", "En la cuenta de Azure"],
              explain: "Una directiva en un grupo de administración la heredan todas las suscripciones y máquinas virtuales que dependen de él, y los propietarios de recursos o suscripciones no pueden anularla."
            }
          },
          {
            type: "multi",
            q: "Which two statements about resource groups are true?",
            options: [
              "Every resource belongs to exactly one resource group at a time",
              "Deleting a resource group deletes all the resources in it",
              "Resource groups can be nested inside other resource groups",
              "Resource groups can be renamed after creation",
              "A resource can belong to two resource groups at once"
            ],
            answers: [0, 1],
            explain: "A resource is in exactly one group at a time and deleting the group deletes its contents. Resource groups can't be nested or renamed.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre los grupos de recursos?",
              options: [
                "Cada recurso pertenece a exactamente un grupo de recursos a la vez",
                "Eliminar un grupo de recursos elimina todos los recursos que contiene",
                "Los grupos de recursos se pueden anidar dentro de otros grupos de recursos",
                "Los grupos de recursos se pueden renombrar después de crearlos",
                "Un recurso puede pertenecer a dos grupos de recursos a la vez"
              ],
              explain: "Un recurso está en exactamente un grupo por vez y eliminar el grupo elimina su contenido. Los grupos de recursos no se pueden anidar ni renombrar."
            }
          },
          {
            type: "single",
            q: "Finance wants separate invoices for production and for development and testing. What should you do?",
            options: ["Create separate resource groups", "Create separate subscriptions", "Create separate availability zones", "Tag the resources with the environment name"],
            answer: 1,
            explain: "Subscriptions are billing boundaries: Azure generates separate billing reports and invoices for each one.",
            es: {
              q: "Finanzas quiere facturas separadas para producción y para desarrollo y pruebas. ¿Qué debe hacer?",
              options: ["Crear grupos de recursos separados", "Crear suscripciones separadas", "Crear zonas de disponibilidad separadas", "Etiquetar los recursos con el nombre del entorno"],
              explain: "Las suscripciones son límites de facturación: Azure genera informes de facturación y facturas separados para cada una."
            }
          },
          {
            type: "match",
            q: "Match each example to the type of subscription boundary it illustrates.",
            values: ["Billing boundary", "Access control boundary"],
            targets: [
              { t: "Azure generates a separate invoice for each subscription", answer: 0 },
              { t: "Development and production subscriptions have different access rules", answer: 1 },
              { t: "Production costs are tracked apart from development and testing costs", answer: 0 },
              { t: "Access-management policies are applied at the subscription level", answer: 1 }
            ],
            explain: "Subscriptions separate billing (invoices and cost tracking) and access control (policies applied at the subscription level).",
            es: {
              q: "Relacione cada ejemplo con el tipo de límite de suscripción que ilustra.",
              values: ["Límite de facturación", "Límite de control de acceso"],
              targets: [
                { t: "Azure genera una factura separada para cada suscripción" },
                { t: "Las suscripciones de desarrollo y producción tienen reglas de acceso distintas" },
                { t: "Los costos de producción se siguen por separado de los de desarrollo y pruebas" },
                { t: "Las directivas de administración del acceso se aplican a nivel de suscripción" }
              ],
              explain: "Las suscripciones separan la facturación (facturas y seguimiento de costos) y el control de acceso (directivas aplicadas a nivel de suscripción)."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Management groups can be nested up to six levels deep, not counting the root level or the subscription level.", answer: true, explain: "That allows a hierarchy that mirrors the organization." },
              { s: "A subscription can have more than one parent management group.", answer: false, explain: "Each management group and subscription can have only one parent." },
              { s: "Every Microsoft Entra tenant has a single top-level Tenant Root Group.", answer: true, explain: "All management groups and subscriptions fold up to it." }
            ],
            es: {
              statements: [
                { s: "Los grupos de administración se pueden anidar hasta seis niveles, sin contar el nivel raíz ni el de suscripción.", explain: "Eso permite una jerarquía que refleje la organización." },
                { s: "Una suscripción puede tener más de un grupo de administración primario.", explain: "Cada grupo de administración y cada suscripción pueden tener un solo primario." },
                { s: "Cada inquilino de Microsoft Entra tiene un único grupo raíz del inquilino en el nivel superior.", explain: "Todos los grupos de administración y suscripciones dependen de él." }
              ]
            }
          }
        ]
      }
    }
  ]
});
