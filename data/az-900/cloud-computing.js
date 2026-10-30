// AZ-900 > Describe cloud concepts > Describe cloud computing
Catalog.module("az-900", {
            id: "cloud-computing",
            name: "Describe cloud computing",
            es: { name: "Descripción de la informática en la nube" },
            url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
            quiz: {
              added: "2026-10-26",
              items: [
                {
                  type: "match",
                  topic: "Consumption-based model",
                  q: "Your finance team asks you to classify several IT costs. Match each expense to its type.",
                  values: ["CapEx", "OpEx"],
                  targets: [
                    { t: "Buying servers and network hardware for a new datacenter", answer: 0 },
                    { t: "Monthly charges for cloud virtual machines", answer: 1 },
                    { t: "Paying up front for datacenter space", answer: 0 },
                    { t: "Cloud storage billed by how much you use", answer: 1 }
                  ],
                  explain: "CapEx is up-front spending on physical infrastructure such as servers, network hardware and datacenter space. Paying for cloud services as you consume them is OpEx.",
                  es: {
                    topic: "Modelo basado en el consumo",
                    q: "El equipo de finanzas le pide clasificar varios costos de TI. Relacione cada gasto con su tipo.",
                    values: ["CapEx", "OpEx"],
                    targets: [
                      { t: "Comprar servidores y hardware de red para un nuevo centro de datos" },
                      { t: "Cargos mensuales por máquinas virtuales en la nube" },
                      { t: "Pagar por adelantado el espacio del centro de datos" },
                      { t: "Almacenamiento en la nube facturado según el uso" }
                    ],
                    explain: "CapEx es el gasto inicial en infraestructura física, como servidores, hardware de red y espacio en el centro de datos. Pagar los servicios en la nube a medida que se consumen es OpEx."
                  }
                },
                {
                  type: "single",
                  topic: "Cloud models",
                  q: "A startup wants to avoid capital expenditures when it scales, pay only for the resources it uses, and never deal with hardware maintenance. Which cloud model fits best?",
                  options: ["Private cloud", "Hybrid cloud", "Public cloud", "Private cloud hosted by a third party"],
                  answer: 2,
                  explain: "No CapEx to scale and pay-per-use are public cloud traits. Any private cloud, even one hosted by a third party, still requires buying and maintaining hardware.",
                  es: {
                    topic: "Modelos de nube",
                    q: "Una startup quiere evitar gastos de capital al escalar, pagar solo por los recursos que usa y no ocuparse nunca del mantenimiento de hardware. ¿Qué modelo de nube es el más adecuado?",
                    options: ["Nube privada", "Nube híbrida", "Nube pública", "Nube privada hospedada por un tercero"],
                    explain: "Escalar sin CapEx y pagar por uso son rasgos de la nube pública. Cualquier nube privada, incluso hospedada por un tercero, sigue requiriendo comprar y mantener hardware."
                  }
                },
                {
                  type: "single",
                  topic: "Consumption-based model",
                  q: "An on-premises application slows down every quarter-end because the company underestimated how much capacity it needed. How does a cloud-based model address this?",
                  options: [
                    "Buying extra servers up front, sized for the highest expected peak",
                    "Adding virtual machines during the peak and removing them when demand drops",
                    "Signing a fixed annual capacity contract with the provider",
                    "Moving to a private cloud to get dedicated hardware"
                  ],
                  answer: 1,
                  explain: "The cloud lets you scale out at peak and back in afterward, paying only for what you use. Sizing for the peak up front is the traditional approach that leaves capacity idle.",
                  es: {
                    topic: "Modelo basado en el consumo",
                    q: "Una aplicación local se vuelve lenta cada cierre de trimestre porque la empresa subestimó la capacidad que necesitaba. ¿Cómo resuelve esto un modelo basado en la nube?",
                    options: [
                      "Comprando servidores adicionales por adelantado, dimensionados para el pico más alto esperado",
                      "Agregando máquinas virtuales durante el pico y quitándolas cuando baja la demanda",
                      "Firmando un contrato anual de capacidad fija con el proveedor",
                      "Migrando a una nube privada para tener hardware dedicado"
                    ],
                    explain: "La nube permite escalar durante el pico y reducir después, pagando solo lo que se usa. Dimensionar por adelantado para el pico es el enfoque tradicional que deja capacidad ociosa."
                  }
                },
                {
                  type: "multi",
                  topic: "Consumption-based model",
                  q: "Which two are benefits of the consumption-based model?",
                  options: [
                    "No upfront costs for hardware or datacenter infrastructure",
                    "A fixed monthly bill regardless of usage",
                    "The cloud provider becomes responsible for your data",
                    "The ability to release resources when demand decreases",
                    "A guaranteed lower cost than on-premises in every scenario"
                  ],
                  answers: [0, 3],
                  explain: "No upfront costs and releasing resources when demand drops are listed benefits. The bill follows usage, data always stays with you, and nothing guarantees lower cost in every case.",
                  es: {
                    topic: "Modelo basado en el consumo",
                    q: "¿Cuáles son dos ventajas del modelo basado en el consumo?",
                    options: [
                      "Sin costos iniciales de hardware ni de infraestructura del centro de datos",
                      "Una factura mensual fija independientemente del uso",
                      "El proveedor de nube pasa a ser responsable de sus datos",
                      "La posibilidad de liberar recursos cuando disminuye la demanda",
                      "Un costo garantizado menor que el local en cualquier escenario"
                    ],
                    explain: "No tener costos iniciales y liberar recursos cuando baja la demanda son ventajas listadas. La factura sigue al uso, los datos siempre son responsabilidad suya y nada garantiza un costo menor en todos los casos."
                  }
                },
                {
                  type: "yesno",
                  statements: [
                    { topic: "Cloud models", s: "In a multicloud scenario, an organization uses two or more public cloud providers.", answer: true, explain: "Multicloud means multiple public cloud providers, with resources and security managed in each." },
                    { topic: "Shared responsibility", s: "The cloud provider is responsible for the devices that are allowed to connect to your cloud environment.", answer: false, explain: "Devices allowed to connect, such as phones and computers, always stay with the customer." },
                    { topic: "Consumption-based model", s: "Under the consumption-based model, the cloud provider maintains the underlying power, cooling, hardware and networking.", answer: true, explain: "The provider maintains that infrastructure so you can focus on business problems." }
                  ],
                  es: {
                    statements: [
                      { topic: "Modelos de nube", s: "En un escenario multinube, una organización usa dos o más proveedores de nube pública.", explain: "Multinube significa varios proveedores de nube pública, con recursos y seguridad administrados en cada uno." },
                      { topic: "Responsabilidad compartida", s: "El proveedor de nube es responsable de los dispositivos que pueden conectarse a su entorno en la nube.", explain: "Los dispositivos que pueden conectarse, como teléfonos y computadoras, siempre son responsabilidad del cliente." },
                      { topic: "Modelo basado en el consumo", s: "En el modelo basado en el consumo, el proveedor de nube mantiene la energía, la refrigeración, el hardware y las redes subyacentes.", explain: "El proveedor mantiene esa infraestructura para que usted pueda enfocarse en los problemas del negocio." }
                    ]
                  }
                },
                {
                  type: "single",
                  topic: "Cloud models",
                  q: "A company runs part of its workloads in a private cloud in its own datacenter and the rest on Azure, in an interconnected hybrid environment. Who is responsible for hardware maintenance and updates in the private cloud?",
                  options: [
                    "Microsoft, because the environments are interconnected",
                    "Microsoft, as long as the servers are managed with Azure Arc",
                    "Responsibility is split evenly, as in PaaS",
                    "The company"
                  ],
                  answer: 3,
                  explain: "In a private cloud you are responsible for hardware maintenance and updates. Connecting it to Azure, or managing it with Azure Arc, doesn't move that to Microsoft.",
                  es: {
                    topic: "Modelos de nube",
                    q: "Una empresa ejecuta parte de sus cargas de trabajo en una nube privada en su propio centro de datos y el resto en Azure, en un entorno híbrido interconectado. ¿Quién es responsable del mantenimiento y las actualizaciones del hardware de la nube privada?",
                    options: [
                      "Microsoft, porque los entornos están interconectados",
                      "Microsoft, siempre que los servidores se administren con Azure Arc",
                      "La responsabilidad se reparte en partes iguales, como en PaaS",
                      "La empresa"
                    ],
                    explain: "En una nube privada, usted es responsable del mantenimiento y las actualizaciones del hardware. Conectarla a Azure o administrarla con Azure Arc no le traslada esa responsabilidad a Microsoft."
                  }
                },
                {
                  type: "single",
                  topic: "What is cloud computing",
                  q: "A company wants to place its services closer to users in several countries and design for regional resilience, without building physical datacenters in each region. Which characteristic of cloud computing does this rely on?",
                  options: ["Consumption-based pricing", "Global reach", "The shared responsibility model", "Tenant isolation in a private cloud"],
                  answer: 1,
                  explain: "Cloud platforms offer global reach: services near users and regional resilience without multiple physical datacenters.",
                  es: {
                    topic: "Qué es la informática en la nube",
                    q: "Una empresa quiere ubicar sus servicios más cerca de los usuarios en varios países y diseñar para la resiliencia regional, sin construir centros de datos físicos en cada región. ¿En qué característica de la informática en la nube se apoya?",
                    options: ["Precios basados en el consumo", "Alcance global", "El modelo de responsabilidad compartida", "El aislamiento de inquilinos de una nube privada"],
                    explain: "Las plataformas en la nube ofrecen alcance global: servicios cerca de los usuarios y resiliencia regional sin varios centros de datos físicos."
                  }
                },
                {
                  type: "single",
                  topic: "Cloud models",
                  q: "Which scenario is the best fit for Azure VMware Solution?",
                  options: [
                    "Managing servers that run in another public cloud from Azure",
                    "Running existing VMware workloads in Azure",
                    "Hosting a private cloud in a third-party offsite datacenter",
                    "Running databases as a managed service"
                  ],
                  answer: 1,
                  explain: "Azure VMware Solution runs VMware workloads in Azure. Managing servers in other clouds from Azure is Azure Arc.",
                  es: {
                    topic: "Modelos de nube",
                    q: "¿Qué escenario es el más adecuado para Azure VMware Solution?",
                    options: [
                      "Administrar desde Azure servidores que se ejecutan en otra nube pública",
                      "Ejecutar en Azure cargas de trabajo de VMware existentes",
                      "Hospedar una nube privada en un centro de datos externo de un tercero",
                      "Ejecutar bases de datos como servicio administrado"
                    ],
                    explain: "Azure VMware Solution ejecuta cargas de trabajo de VMware en Azure. Administrar desde Azure servidores de otras nubes corresponde a Azure Arc."
                  }
                },
                {
                  type: "dropdown",
                  topic: "Shared responsibility",
                  q: "Complete the statement about the shared responsibility model.",
                  parts: [
                    "Responsibility for ",
                    { options: ["the data stored in the cloud", "network controls", "the accounts and identities of your users"], answer: 1 },
                    " depends on the cloud service type, while ",
                    { options: ["the devices that connect to your cloud", "your data", "the physical network"], answer: 2 },
                    " is always the cloud provider's responsibility."
                  ],
                  explain: "Network controls vary by service type. The physical network always belongs to the provider; data, identities and devices always belong to you.",
                  es: {
                    topic: "Responsabilidad compartida",
                    q: "Complete la afirmación sobre el modelo de responsabilidad compartida.",
                    parts: [
                      "La responsabilidad sobre ",
                      { options: ["los datos almacenados en la nube", "los controles de red", "las cuentas e identidades de sus usuarios"] },
                      " depende del tipo de servicio en la nube, mientras que ",
                      { options: ["los dispositivos que se conectan a su nube", "sus datos", "la red física"] },
                      " siempre es responsabilidad del proveedor de nube."
                    ],
                    explain: "Los controles de red varían según el tipo de servicio. La red física siempre es del proveedor; los datos, las identidades y los dispositivos siempre son suyos."
                  }
                },
                {
                  type: "single",
                  topic: "Consumption-based model",
                  q: "A company sized its on-premises datacenter for growth that never happened. What is the most likely result?",
                  options: [
                    "Applications suffer degraded performance",
                    "The provider bills the unused capacity as OpEx",
                    "It overspends on infrastructure that sits idle",
                    "Responsibility for the idle servers shifts to the hardware vendor"
                  ],
                  answer: 2,
                  explain: "Overestimating means paying for idle infrastructure. Degraded performance is what happens when you underestimate.",
                  es: {
                    topic: "Modelo basado en el consumo",
                    q: "Una empresa dimensionó su centro de datos local para un crecimiento que nunca ocurrió. ¿Cuál es el resultado más probable?",
                    options: [
                      "Las aplicaciones sufren un rendimiento degradado",
                      "El proveedor factura la capacidad sin usar como OpEx",
                      "Gasta de más en infraestructura que queda ociosa",
                      "La responsabilidad sobre los servidores ociosos pasa al fabricante del hardware"
                    ],
                    explain: "Sobrestimar significa pagar por infraestructura ociosa. El rendimiento degradado es lo que ocurre cuando se subestima."
                  }
                },
                {
                  type: "single",
                  topic: "What is cloud computing",
                  q: "Which statement best describes cloud computing?",
                  options: [
                    "Renting rack space in a third-party datacenter to host your own servers",
                    "Running virtualization software on servers you buy, install and maintain in your own building",
                    "Delivering computing services such as VMs, storage and networking over the internet",
                    "Outsourcing the operation of your on-premises servers to a managed service provider"
                  ],
                  answer: 2,
                  explain: "Cloud computing is the delivery of computing services over the internet, and it extends to IoT, machine learning and AI.",
                  es: {
                    topic: "Qué es la informática en la nube",
                    q: "¿Qué afirmación describe mejor la informática en la nube?",
                    options: [
                      "Alquilar espacio en racks de un centro de datos de terceros para alojar servidores propios",
                      "Ejecutar software de virtualización en servidores que usted compra, instala y mantiene en su edificio",
                      "Entregar servicios de computación como máquinas virtuales, almacenamiento y redes por internet",
                      "Tercerizar la operación de sus servidores locales en un proveedor de servicios administrados"
                    ],
                    explain: "La informática en la nube es la entrega de servicios de computación a través de internet, y se extiende a IoT, aprendizaje automático e IA."
                  }
                },
                {
                  type: "yesno",
                  statements: [
                    { topic: "Cloud models", s: "A hybrid cloud can add a layer of security by letting you choose which services stay in your private cloud.", answer: true, explain: "Choosing what stays private and what goes public is one of the stated uses of hybrid cloud." },
                    { topic: "Consumption-based model", s: "Under pay-as-you-go pricing, you keep paying for virtual machines after you remove them.", answer: false, explain: "You pay only for what you use; removed resources stop costing money." },
                    { topic: "Shared responsibility", s: "PaaS distributes responsibility between the provider and the customer more evenly than IaaS or SaaS.", answer: true, explain: "PaaS sits in the middle: IaaS leans toward the customer and SaaS toward the provider." }
                  ],
                  es: {
                    statements: [
                      { topic: "Modelos de nube", s: "Una nube híbrida puede agregar una capa de seguridad al permitirle elegir qué servicios quedan en su nube privada.", explain: "Elegir qué queda en la nube privada y qué va a la pública es uno de los usos indicados de la nube híbrida." },
                      { topic: "Modelo basado en el consumo", s: "Con precios de pago por uso, se sigue pagando por las máquinas virtuales después de eliminarlas.", explain: "Solo se paga lo que se usa; los recursos eliminados dejan de generar costos." },
                      { topic: "Responsabilidad compartida", s: "PaaS reparte la responsabilidad entre el proveedor y el cliente de forma más equilibrada que IaaS o SaaS.", explain: "PaaS está en el medio: IaaS se inclina hacia el cliente y SaaS hacia el proveedor." }
                    ]
                  }
                }
              ]
            },
            units: [
              {
                id: "what-is-cloud",
                name: "What is cloud computing",
                es: { name: "¿Qué es la informática en la nube?" },
                url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/3-what-cloud-compute",
                quiz: {
                  added: "2026-10-26",
                  items: [
                    {
                      type: "multi",
                      q: "Cloud services extend beyond traditional IT infrastructure. Which two are examples of these extended offerings?",
                      options: ["Internet of Things (IoT)", "Machine learning (ML)", "Physical rack installation", "On-site network cabling", "Hardware procurement contracts"],
                      answers: [0, 1],
                      explain: "Beyond virtual machines, storage, databases and networking, cloud services include IoT, machine learning and AI. The other options are on-premises tasks, not cloud services.",
                      es: {
                        q: "Los servicios en la nube van más allá de la infraestructura de TI tradicional. ¿Cuáles son dos ejemplos de esas ofertas ampliadas?",
                        options: ["Internet de las cosas (IoT)", "Aprendizaje automático (ML)", "Instalación física de racks", "Cableado de red en el sitio", "Contratos de compra de hardware"],
                        explain: "Además de máquinas virtuales, almacenamiento, bases de datos y redes, los servicios en la nube incluyen IoT, aprendizaje automático e IA. Las otras opciones son tareas locales, no servicios en la nube."
                      }
                    },
                    {
                      type: "single",
                      q: "A retail team expects high traffic during a seasonal launch. Following a cloud approach, what should the team do?",
                      options: [
                        "Buy and configure extra physical servers months in advance",
                        "Add cloud compute capacity for the launch and scale it down afterward",
                        "Keep the extra capacity running permanently in case traffic returns",
                        "Delay the launch until a new datacenter is built"
                      ],
                      answer: 1,
                      explain: "Deploying capacity only for the launch and scaling down afterward improves agility and aligns spending to actual demand. Buying servers months ahead is the traditional approach the cloud avoids.",
                      es: {
                        q: "Un equipo de retail espera mucho tráfico durante un lanzamiento de temporada. Siguiendo un enfoque de nube, ¿qué debe hacer el equipo?",
                        options: [
                          "Comprar y configurar servidores físicos adicionales con meses de anticipación",
                          "Agregar capacidad de cómputo en la nube para el lanzamiento y reducirla después",
                          "Dejar la capacidad adicional siempre encendida por si vuelve el tráfico",
                          "Postergar el lanzamiento hasta construir un nuevo centro de datos"
                        ],
                        explain: "Implementar capacidad solo para el lanzamiento y reducirla después mejora la agilidad y alinea el gasto con la demanda real. Comprar servidores con meses de anticipación es el enfoque tradicional que la nube evita."
                      }
                    },
                    {
                      type: "dropdown",
                      q: "Complete the statement about how cloud computing changes infrastructure planning.",
                      parts: [
                        "Cloud computing changes infrastructure planning from ",
                        { options: ["on-demand provisioning", "long procurement cycles", "pay-as-you-go billing"], answer: 1 },
                        " to ",
                        { options: ["annual capacity planning", "hardware leasing", "on-demand provisioning"], answer: 2 },
                        "."
                      ],
                      explain: "At a fundamentals level, the cloud replaces long procurement cycles with on-demand provisioning, so teams can test faster, recover faster and adapt capacity.",
                      es: {
                        q: "Complete la afirmación sobre cómo la informática en la nube cambia la planificación de la infraestructura.",
                        parts: [
                          "La informática en la nube cambia la planificación de la infraestructura de ",
                          { options: ["el aprovisionamiento a petición", "los ciclos de compra largos", "la facturación de pago por uso"] },
                          " a ",
                          { options: ["la planificación anual de capacidad", "el alquiler de hardware", "el aprovisionamiento a petición"] },
                          "."
                        ],
                        explain: "En lo fundamental, la nube reemplaza los ciclos de compra largos por el aprovisionamiento a petición, de modo que los equipos pueden probar más rápido, recuperarse más rápido y adaptar la capacidad."
                      }
                    },
                    {
                      type: "single",
                      q: "A company needs to increase its IT infrastructure rapidly. In a traditional datacenter, this would mean waiting to build new facilities. Why doesn't the cloud have this constraint?",
                      options: [
                        "Because services delivered over the internet aren't limited by your own physical facilities",
                        "Because the company still buys the hardware, but it's installed faster",
                        "Because cloud providers don't use physical datacenters",
                        "Because the company signs a long-term capacity contract in advance"
                      ],
                      answer: 0,
                      explain: "Delivering services over the internet frees you from the physical limits of your own datacenter, so you can expand your IT footprint without building one. Cloud providers do still run physical datacenters.",
                      es: {
                        q: "Una empresa necesita ampliar rápidamente su infraestructura de TI. En un centro de datos tradicional, eso implicaría esperar a construir nuevas instalaciones. ¿Por qué la nube no tiene esa limitación?",
                        options: [
                          "Porque los servicios entregados por internet no dependen de sus propias instalaciones físicas",
                          "Porque la empresa sigue comprando el hardware, pero se instala más rápido",
                          "Porque los proveedores de nube no usan centros de datos físicos",
                          "Porque la empresa firma por adelantado un contrato de capacidad a largo plazo"
                        ],
                        explain: "Entregar servicios a través de internet libera de los límites físicos del centro de datos propio, así que se puede ampliar la infraestructura sin construir uno. Los proveedores de nube sí operan centros de datos físicos."
                      }
                    },
                    {
                      type: "match",
                      q: "Match each description to the approach it belongs to.",
                      values: ["Cloud computing", "Traditional datacenter"],
                      targets: [
                        { t: "Additional capacity is deployed for a peak and released afterward", answer: 0 },
                        { t: "Expansion waits for new facilities to be built", answer: 1 },
                        { t: "Spending follows actual demand", answer: 0 },
                        { t: "Extra servers are bought and configured months before they're needed", answer: 1 }
                      ],
                      explain: "The cloud provisions on demand and aligns spending to use. A traditional datacenter depends on procurement and construction ahead of demand.",
                      es: {
                        q: "Relacione cada descripción con el enfoque al que corresponde.",
                        values: ["Informática en la nube", "Centro de datos tradicional"],
                        targets: [
                          { t: "Se implementa capacidad adicional para un pico y se libera después" },
                          { t: "La ampliación espera a que se construyan nuevas instalaciones" },
                          { t: "El gasto sigue a la demanda real" },
                          { t: "Se compran y configuran servidores adicionales meses antes de necesitarlos" }
                        ],
                        explain: "La nube aprovisiona a petición y alinea el gasto con el uso. Un centro de datos tradicional depende de compras y construcción anticipadas a la demanda."
                      }
                    },
                    {
                      type: "yesno",
                      statements: [
                        { s: "Cloud computing is the delivery of computing services, such as virtual machines, storage, databases and networking, over the internet.", answer: true, explain: "That is the unit's definition of cloud computing." },
                        { s: "Cloud services are limited to traditional IT infrastructure such as virtual machines and storage.", answer: false, explain: "Cloud services also include IoT, machine learning and AI." },
                        { s: "Cloud platforms let teams place services closer to users without building multiple physical datacenters.", answer: true, explain: "Global reach lets you deploy near users and design for regional resilience." }
                      ],
                      es: {
                        statements: [
                          { s: "La informática en la nube es la entrega de servicios de computación, como máquinas virtuales, almacenamiento, bases de datos y redes, a través de internet.", explain: "Es la definición de informática en la nube que da la unidad." },
                          { s: "Los servicios en la nube se limitan a la infraestructura de TI tradicional, como máquinas virtuales y almacenamiento.", explain: "Los servicios en la nube también incluyen IoT, aprendizaje automático e IA." },
                          { s: "Las plataformas en la nube permiten ubicar servicios más cerca de los usuarios sin construir varios centros de datos físicos.", explain: "El alcance global permite implementar cerca de los usuarios y diseñar para la resiliencia regional." }
                        ]
                      }
                    }
                  ]
                }
              },
                            {
                id: "shared-responsibility",
                name: "Describe the shared responsibility model",
                es: { name: "Describir el modelo de responsabilidad compartida" },
                url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model",
                quiz: {
                  added: "2026-10-26",
                  items: [
                    {
                      type: "single",
                      q: "Your company moves an on-premises database to a managed cloud SQL database service. After the move, who is responsible for maintaining the database itself, including its updates?",
                      options: [
                        "Your organization, because it owns the data stored in the database",
                        "The cloud provider",
                        "Both parties equally, because PaaS splits every task in half",
                        "Your organization's database administrators, through an agent on the host"
                      ],
                      answer: 1,
                      explain: "With a cloud SQL database, the provider maintains the actual database. You stay responsible for the data you put into it, which is why owning the data doesn't make the database yours to patch.",
                      es: {
                        q: "Su empresa migra una base de datos local a un servicio administrado de base de datos SQL en la nube. Después de la migración, ¿quién es responsable de mantener la base de datos en sí, incluidas sus actualizaciones?",
                        options: [
                          "Su organización, porque es dueña de los datos almacenados en la base",
                          "El proveedor de nube",
                          "Ambas partes por igual, porque PaaS divide cada tarea a la mitad",
                          "Los administradores de bases de datos de su organización, mediante un agente en el host"
                        ],
                        explain: "Con una base de datos SQL en la nube, el proveedor mantiene la base de datos en sí. Usted sigue siendo responsable de los datos que carga, por eso ser dueño de los datos no lo hace responsable de aplicar parches a la base."
                      }
                    },
                    {
                      type: "multi",
                      q: "Which two items are always the customer's responsibility, regardless of the cloud service type?",
                      options: [
                        "Your stored data",
                        "The physical network connecting the datacenter's hosts",
                        "User and device identities",
                        "Operating systems of the virtual machines you run",
                        "Network controls"
                      ],
                      answers: [0, 2],
                      explain: "Data, devices that connect, and accounts and identities always stay with you. Operating systems and network controls depend on the service type; the physical network is always the provider's.",
                      es: {
                        q: "¿Cuáles son dos elementos que siempre son responsabilidad del cliente, sin importar el tipo de servicio en la nube?",
                        options: [
                          "Los datos que almacena",
                          "La red física que conecta los hosts del centro de datos",
                          "Las identidades de usuarios y dispositivos",
                          "Los sistemas operativos de las máquinas virtuales que ejecuta",
                          "Los controles de red"
                        ],
                        explain: "Los datos, los dispositivos que se conectan y las cuentas e identidades siempre son suyos. Los sistemas operativos y los controles de red dependen del tipo de servicio; la red física siempre es del proveedor."
                      }
                    },
                    {
                      type: "single",
                      q: "An administrator deploys a virtual machine in Azure and installs SQL Server on it. Which task does the administrator's company own?",
                      options: [
                        "Physical security of the host that runs the VM",
                        "Power and cooling for the datacenter",
                        "Patching and updating SQL Server",
                        "Maintenance of the physical network"
                      ],
                      answer: 2,
                      explain: "When you install the database on your own VM, database patches and updates are yours. Physical host, power, cooling and physical network always stay with the provider.",
                      es: {
                        q: "Un administrador implementa una máquina virtual en Azure e instala SQL Server en ella. ¿De qué tarea es responsable la empresa del administrador?",
                        options: [
                          "La seguridad física del host que ejecuta la máquina virtual",
                          "La energía y la refrigeración del centro de datos",
                          "Aplicar parches y actualizar SQL Server",
                          "El mantenimiento de la red física"
                        ],
                        explain: "Si instala la base de datos en su propia máquina virtual, los parches y las actualizaciones de la base son suyos. El host físico, la energía, la refrigeración y la red física siempre son del proveedor."
                      }
                    },
                    {
                      type: "match",
                      q: "Match each item to who is responsible for it under the shared responsibility model.",
                      values: ["Always the cloud provider", "Always the customer", "Depends on the service type"],
                      targets: [
                        { t: "Physical hosts", answer: 0 },
                        { t: "Devices allowed to connect to your cloud", answer: 1 },
                        { t: "Operating systems", answer: 2 },
                        { t: "Physical network", answer: 0 }
                      ],
                      explain: "Physical datacenter, network and hosts always belong to the provider. Devices, data and identities always belong to you. Operating systems, network controls, applications, and identity and access depend on the service type.",
                      es: {
                        q: "Relacione cada elemento con quién es responsable de él según el modelo de responsabilidad compartida.",
                        values: ["Siempre el proveedor de nube", "Siempre el cliente", "Depende del tipo de servicio"],
                        targets: [
                          { t: "Hosts físicos" },
                          { t: "Dispositivos que pueden conectarse a su nube" },
                          { t: "Sistemas operativos" },
                          { t: "Red física" }
                        ],
                        explain: "El centro de datos, la red y los hosts físicos siempre son del proveedor. Los dispositivos, los datos y las identidades siempre son suyos. Los sistemas operativos, los controles de red, las aplicaciones y la identidad y el acceso dependen del tipo de servicio."
                      }
                    },
                    {
                      type: "yesno",
                      statements: [
                        { s: "In every cloud service type, the customer remains responsible for the information and data stored in the cloud.", answer: true, explain: "Data and information always stay with the customer, whether the service is IaaS, PaaS or SaaS." },
                        { s: "Moving a workload from on-premises to IaaS shifts responsibility for the physical hosts to the cloud provider.", answer: true, explain: "Physical hosts, network and datacenter belong to the provider as soon as you leave on-premises, even in IaaS." },
                        { s: "In SaaS, responsibility for the accounts and identities of your users moves entirely to the cloud provider.", answer: false, explain: "Accounts and identities of people, services and devices always remain the customer's responsibility, even in SaaS." }
                      ],
                      es: {
                        statements: [
                          { s: "En todos los tipos de servicio en la nube, el cliente sigue siendo responsable de la información y los datos almacenados en la nube.", explain: "Los datos y la información siempre son del cliente, ya sea IaaS, PaaS o SaaS." },
                          { s: "Al migrar una carga de trabajo del entorno local a IaaS, la responsabilidad sobre los hosts físicos pasa al proveedor de nube.", explain: "Los hosts físicos, la red y el centro de datos pasan al proveedor en cuanto se deja el entorno local, incluso en IaaS." },
                          { s: "En SaaS, la responsabilidad sobre las cuentas e identidades de sus usuarios pasa por completo al proveedor de nube.", explain: "Las cuentas e identidades de personas, servicios y dispositivos siempre son responsabilidad del cliente, incluso en SaaS." }
                        ]
                      }
                    },
                    {
                      type: "dropdown",
                      q: "Complete the statements about cloud service types.",
                      parts: [
                        "The service type that places the most responsibility on the customer is ",
                        { options: ["SaaS", "IaaS", "PaaS"], answer: 1 },
                        ". The service type that distributes responsibility most evenly between the customer and the provider is ",
                        { options: ["PaaS", "SaaS", "IaaS"], answer: 0 },
                        "."
                      ],
                      explain: "IaaS leaves the most to the customer; the provider handles physical security, power and connectivity. PaaS is the middle ground between IaaS and SaaS.",
                      es: {
                        q: "Complete las afirmaciones sobre los tipos de servicio en la nube.",
                        parts: [
                          "El tipo de servicio que le asigna más responsabilidad al cliente es ",
                          { options: ["SaaS", "IaaS", "PaaS"] },
                          ". El tipo de servicio que reparte la responsabilidad de forma más equilibrada entre el cliente y el proveedor es ",
                          { options: ["PaaS", "SaaS", "IaaS"] },
                          "."
                        ],
                        explain: "IaaS le deja la mayor parte al cliente; el proveedor se ocupa de la seguridad física, la energía y la conectividad. PaaS es el punto medio entre IaaS y SaaS."
                      }
                    },
                    {
                      type: "single",
                      q: "Your company uses a PaaS service that relies on Microsoft Entra ID for sign-in. How is identity and access handled?",
                      hint: "Separate who runs the authentication platform from who decides who gets in.",
                      options: [
                        "You manage users, roles and policies, while the provider runs the authentication platform",
                        "The provider manages users, roles, policies and the authentication platform",
                        "You manage users, roles and policies, and you also run the authentication platform",
                        "The provider manages users and roles in PaaS, but you take them over in SaaS"
                      ],
                      answer: 0,
                      explain: "In PaaS and SaaS, identity and access is shared: you own users, roles and policies, and the provider operates the authentication platform such as Microsoft Entra ID.",
                      es: {
                        q: "Su empresa usa un servicio PaaS que depende de Microsoft Entra ID para el inicio de sesión. ¿Cómo se gestionan la identidad y el acceso?",
                        hint: "Separe quién opera la plataforma de autenticación de quién decide quién entra.",
                        options: [
                          "Usted administra usuarios, roles y directivas, y el proveedor opera la plataforma de autenticación",
                          "El proveedor administra usuarios, roles, directivas y la plataforma de autenticación",
                          "Usted administra usuarios, roles y directivas, y además opera la plataforma de autenticación",
                          "El proveedor administra usuarios y roles en PaaS, pero usted los asume en SaaS"
                        ],
                        explain: "En PaaS y SaaS, la identidad y el acceso son compartidos: usted es responsable de usuarios, roles y directivas, y el proveedor opera la plataforma de autenticación, como Microsoft Entra ID."
                      }
                    }
                  ]
                }
              },
              {
                id: "cloud-models",
                name: "Define cloud models",
                es: { name: "Definición de modelos en la nube" },
                url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-define-cloud-models",
                quiz: {
                  added: "2026-10-26",
                  items: [
                    {
                      type: "single",
                      q: "A retailer runs its workloads in a private cloud. Every holiday season, demand spikes for a few weeks. The company wants to absorb the spike without buying more hardware, and keep customer records in its private infrastructure. Which cloud model should it use?",
                      options: ["Public cloud", "Multicloud", "Hybrid cloud", "Private cloud with additional servers"],
                      answer: 2,
                      explain: "Hybrid cloud lets a private cloud surge into public cloud resources for temporary demand while you choose what stays private. Buying servers violates the no-hardware requirement.",
                      es: {
                        q: "Un minorista ejecuta sus cargas de trabajo en una nube privada. Cada temporada de fiestas, la demanda se dispara durante algunas semanas. La empresa quiere absorber el pico sin comprar más hardware y mantener los registros de clientes en su infraestructura privada. ¿Qué modelo de nube debe usar?",
                        options: ["Nube pública", "Multinube", "Nube híbrida", "Nube privada con servidores adicionales"],
                        explain: "La nube híbrida permite que una nube privada se expanda a recursos de nube pública ante una demanda temporal, mientras usted elige qué queda en la parte privada. Comprar servidores incumple el requisito de no sumar hardware."
                      }
                    },
                    {
                      type: "multi",
                      q: "Which two are characteristics of a private cloud?",
                      options: [
                        "You have complete control over resources and security",
                        "No capital expenditures to scale up",
                        "Data isn't collocated with other tenants' data",
                        "You pay only for what you use",
                        "Anyone who wants to purchase services can use the resources"
                      ],
                      answers: [0, 2],
                      explain: "Complete control and data kept apart from other tenants are private cloud traits. No CapEx, pay-per-use and general availability describe public cloud.",
                      es: {
                        q: "¿Cuáles son dos características de una nube privada?",
                        options: [
                          "Tiene control total sobre los recursos y la seguridad",
                          "No hay gastos de capital para escalar",
                          "Los datos no comparten ubicación con los de otros inquilinos",
                          "Solo paga lo que usa",
                          "Cualquiera que quiera comprar servicios puede usar los recursos"
                        ],
                        explain: "El control total y los datos separados de otros inquilinos son rasgos de la nube privada. Sin CapEx, el pago por uso y la disponibilidad general describen a la nube pública."
                      }
                    },
                    {
                      type: "single",
                      q: "A company started its cloud journey with one public provider. It now uses some features from a second public provider while it gradually migrates there, and manages resources and security in both. Which scenario describes this?",
                      options: ["Hybrid cloud", "Multicloud", "Private cloud", "Public cloud"],
                      answer: 1,
                      explain: "Multicloud means two or more public cloud providers. Hybrid combines public and private, and there's no private cloud in this scenario.",
                      es: {
                        q: "Una empresa empezó su camino a la nube con un proveedor público. Ahora usa algunas funciones de un segundo proveedor público mientras migra gradualmente a él, y administra recursos y seguridad en ambos. ¿Qué escenario describe esta situación?",
                        options: ["Nube híbrida", "Multinube", "Nube privada", "Nube pública"],
                        explain: "Multinube significa dos o más proveedores de nube pública. La híbrida combina pública y privada, y en este escenario no hay nube privada."
                      }
                    },
                    {
                      type: "match",
                      q: "Match each requirement to the Azure solution that meets it.",
                      values: ["Azure Arc", "Azure VMware Solution", "Microsoft Entra ID"],
                      targets: [
                        { t: "Manage servers in your datacenter and workloads on another public cloud from one place", answer: 0 },
                        { t: "Run your existing VMware workloads in Azure", answer: 1 },
                        { t: "Manage a hybrid configuration of Azure and on-premises resources", answer: 0 }
                      ],
                      explain: "Azure Arc manages public, private, hybrid and multicloud environments. Azure VMware Solution runs VMware workloads in Azure. Microsoft Entra ID is not a solution for either requirement.",
                      es: {
                        q: "Relacione cada requisito con la solución de Azure que lo cumple.",
                        values: ["Azure Arc", "Azure VMware Solution", "Microsoft Entra ID"],
                        targets: [
                          { t: "Administrar desde un solo lugar servidores de su centro de datos y cargas de trabajo en otra nube pública" },
                          { t: "Ejecutar en Azure sus cargas de trabajo de VMware existentes" },
                          { t: "Administrar una configuración híbrida de recursos de Azure y locales" }
                        ],
                        explain: "Azure Arc administra entornos públicos, privados, híbridos y multinube. Azure VMware Solution ejecuta cargas de trabajo de VMware en Azure. Microsoft Entra ID no resuelve ninguno de los dos requisitos."
                      }
                    },
                    {
                      type: "dropdown",
                      q: "Complete the statement about private clouds.",
                      parts: [
                        "A private cloud can be hosted ",
                        { options: ["only in your own on-site datacenter", "on-site or in a dedicated offsite datacenter", "only in a public cloud region"], answer: 1 },
                        ", and ",
                        { options: ["you are", "the cloud provider is", "the hardware vendor is"], answer: 0 },
                        " responsible for its hardware maintenance and updates."
                      ],
                      explain: "A private cloud can live on-site or in a dedicated offsite datacenter, even one run by a third party. Either way, you are responsible for hardware maintenance and updates.",
                      es: {
                        q: "Complete la afirmación sobre las nubes privadas.",
                        parts: [
                          "Una nube privada puede hospedarse ",
                          { options: ["solo en su propio centro de datos local", "en el sitio o en un centro de datos externo dedicado", "solo en una región de nube pública"] },
                          ", y ",
                          { options: ["usted es", "el proveedor de nube es", "el fabricante del hardware es"] },
                          " responsable del mantenimiento y las actualizaciones de su hardware."
                        ],
                        explain: "Una nube privada puede estar en el sitio o en un centro de datos externo dedicado, incluso operado por un tercero. En cualquier caso, usted es responsable del mantenimiento y las actualizaciones del hardware."
                      }
                    },
                    {
                      type: "yesno",
                      statements: [
                        { s: "In a hybrid cloud, you determine where to run your applications.", answer: true, explain: "Hybrid cloud gives the most flexibility, including deciding where each application runs." },
                        { s: "With a public cloud, you pay only for the resources you use and have no capital expenditures to scale up.", answer: true, explain: "Both are listed public cloud characteristics." },
                        { s: "A public cloud gives you complete control over resources and security.", answer: false, explain: "Complete control is a private cloud trait. In public cloud you don't have complete control over resources and security." }
                      ],
                      es: {
                        statements: [
                          { s: "En una nube híbrida, usted decide dónde se ejecutan sus aplicaciones.", explain: "La nube híbrida ofrece la mayor flexibilidad, incluida la decisión de dónde se ejecuta cada aplicación." },
                          { s: "Con una nube pública, solo paga por los recursos que usa y no tiene gastos de capital para escalar.", explain: "Ambas son características listadas de la nube pública." },
                          { s: "Una nube pública le da control total sobre los recursos y la seguridad.", explain: "El control total es un rasgo de la nube privada. En la nube pública no tiene control total sobre los recursos y la seguridad." }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                id: "consumption-model",
                name: "Describe the consumption-based model",
                es: { name: "Describir el modelo basado en el consumo" },
                url: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/6-describe-consumption-based-model",
                quiz: {
                  added: "2026-10-26",
                  items: [
                    {
                      type: "single",
                      q: "Your CFO asks how moving workloads to the cloud changes the company's IT budget. Which explanation is correct?",
                      options: [
                        "Spending shifts from operational expenditure to capital expenditure",
                        "Spending shifts from up-front purchases to paying for what you consume",
                        "Operational expenditure disappears, because the provider owns the hardware",
                        "The company needs a large capital purchase first, and only then starts paying for actual usage"
                      ],
                      answer: 1,
                      explain: "Paying for cloud services as you consume them is OpEx, replacing up-front CapEx on servers, network hardware and datacenter space.",
                      es: {
                        q: "Su director financiero pregunta cómo cambia el presupuesto de TI al llevar cargas de trabajo a la nube. ¿Qué explicación es correcta?",
                        options: [
                          "El gasto pasa de gasto operativo a gasto de capital",
                          "El gasto pasa de compras iniciales a pagar por lo que se consume",
                          "El gasto operativo desaparece, porque el proveedor es dueño del hardware",
                          "La empresa necesita primero una gran compra de capital y recién después empieza a pagar por uso"
                        ],
                        explain: "Pagar los servicios en la nube a medida que se consumen es OpEx, y reemplaza el CapEx inicial en servidores, hardware de red y espacio en el centro de datos."
                      }
                    },
                    {
                      type: "dropdown",
                      q: "Complete the statement about IT expenditure types.",
                      parts: [
                        "Capital expenditure (CapEx) refers to ",
                        { options: ["ongoing spending on services over time", "up-front spending on physical infrastructure", "spending on staff training"], answer: 1 },
                        ", while operational expenditure (OpEx) refers to ",
                        { options: ["ongoing spending on services over time", "the purchase of datacenter space", "one-time hardware upgrades"], answer: 0 },
                        "."
                      ],
                      explain: "CapEx is up-front spending on things like servers, network hardware and datacenter space. OpEx is ongoing spending on services, which is how cloud computing is classified.",
                      es: {
                        q: "Complete la afirmación sobre los tipos de gasto de TI.",
                        parts: [
                          "El gasto de capital (CapEx) se refiere a ",
                          { options: ["el gasto continuo en servicios a lo largo del tiempo", "el gasto inicial en infraestructura física", "el gasto en capacitación del personal"] },
                          ", mientras que el gasto operativo (OpEx) se refiere a ",
                          { options: ["el gasto continuo en servicios a lo largo del tiempo", "la compra de espacio en el centro de datos", "las mejoras únicas de hardware"] },
                          "."
                        ],
                        explain: "El CapEx es el gasto inicial en elementos como servidores, hardware de red y espacio en el centro de datos. El OpEx es el gasto continuo en servicios, que es como se clasifica la informática en la nube."
                      }
                    },
                    {
                      type: "multi",
                      q: "Which two problems of traditional datacenter capacity planning does the consumption-based model help avoid?",
                      options: [
                        "Paying for idle capacity after overestimating",
                        "Keeping responsibility for the data you store in your own systems",
                        "Slow apps after underestimating demand",
                        "Managing the identities of your users",
                        "Classifying the sensitivity of the data your applications collect"
                      ],
                      answers: [0, 2],
                      explain: "Estimating capacity in advance leads to idle spending if you overestimate and poor performance if you underestimate. In the cloud you adjust resources to actual demand. Data and identities stay your responsibility either way.",
                      es: {
                        q: "¿Cuáles son dos problemas de la planificación de capacidad de un centro de datos tradicional que el modelo basado en el consumo ayuda a evitar?",
                        options: [
                          "Pagar capacidad ociosa por sobrestimar",
                          "La responsabilidad sobre los datos que almacena en sus propios sistemas",
                          "Aplicaciones lentas por subestimar la demanda",
                          "La administración de las identidades de sus usuarios",
                          "La clasificación de la confidencialidad de los datos que recopilan sus aplicaciones"
                        ],
                        explain: "Estimar la capacidad por adelantado genera gasto ocioso si se sobrestima y mal rendimiento si se subestima. En la nube los recursos se ajustan a la demanda real. Los datos y las identidades siguen siendo responsabilidad suya en ambos casos."
                      }
                    },
                    {
                      type: "single",
                      q: "Your on-premises application is underperforming because you underestimated demand. What does fixing this typically involve?",
                      options: [
                        "Adding virtual machines within minutes and removing them later",
                        "Ordering, installing and provisioning additional hardware, power and cooling",
                        "Releasing unused resources to lower the bill",
                        "Changing the pay-as-you-go pricing tier"
                      ],
                      answer: 1,
                      explain: "In a traditional datacenter, more capacity means ordering, installing and provisioning hardware, power and cooling. Adding and removing VMs on demand is what the cloud allows.",
                      es: {
                        q: "Su aplicación local tiene bajo rendimiento porque subestimó la demanda. ¿Qué implica normalmente resolverlo?",
                        options: [
                          "Agregar máquinas virtuales en minutos y quitarlas después",
                          "Pedir, instalar y aprovisionar hardware, energía y refrigeración adicionales",
                          "Liberar recursos sin usar para reducir la factura",
                          "Cambiar el nivel de precios de pago por uso"
                        ],
                        explain: "En un centro de datos tradicional, sumar capacidad significa pedir, instalar y aprovisionar hardware, energía y refrigeración. Agregar y quitar máquinas virtuales a petición es lo que permite la nube."
                      }
                    },
                    {
                      type: "single",
                      q: "Traffic to a cloud-hosted application drops sharply after a product launch. What should you do to keep costs aligned with demand?",
                      options: [
                        "Keep all virtual machines running so they're ready for the next launch",
                        "Buy dedicated hardware for the next peak",
                        "Scale back in by removing the virtual machines you no longer need",
                        "Move the application back on-premises"
                      ],
                      answer: 2,
                      explain: "In the cloud you pay only for what you use, so you scale in when traffic subsides. Idle virtual machines keep generating cost.",
                      es: {
                        q: "El tráfico de una aplicación hospedada en la nube cae bruscamente después del lanzamiento de un producto. ¿Qué debe hacer para mantener los costos alineados con la demanda?",
                        options: [
                          "Mantener todas las máquinas virtuales encendidas para tenerlas listas en el próximo lanzamiento",
                          "Comprar hardware dedicado para el próximo pico",
                          "Reducir horizontalmente quitando las máquinas virtuales que ya no necesita",
                          "Volver a llevar la aplicación al entorno local"
                        ],
                        explain: "En la nube solo se paga lo que se usa, así que se reduce la capacidad cuando baja el tráfico. Las máquinas virtuales ociosas siguen generando costo."
                      }
                    },
                    {
                      type: "single",
                      q: "Which statement describes the pay-as-you-go pricing model used by cloud providers?",
                      options: [
                        "You pay a fixed annual fee that covers unlimited usage",
                        "You pay for the maximum capacity you might ever need",
                        "You typically pay only for the services you consume",
                        "You pay only for resources while they are idle"
                      ],
                      answer: 2,
                      explain: "Pay-as-you-go means paying for what you consume, which helps you plan and manage operating costs, run infrastructure efficiently and scale as needs change.",
                      es: {
                        q: "¿Qué afirmación describe el modelo de precios de pago por uso de los proveedores de nube?",
                        options: [
                          "Paga una tarifa anual fija que cubre un uso ilimitado",
                          "Paga por la capacidad máxima que podría llegar a necesitar",
                          "Normalmente paga solo por los servicios que consume",
                          "Paga por los recursos solo mientras están ociosos"
                        ],
                        explain: "Pago por uso significa pagar lo que se consume, lo que ayuda a planificar y administrar los costos operativos, usar la infraestructura de forma eficiente y escalar según cambien las necesidades."
                      }
                    },
                    {
                      type: "yesno",
                      statements: [
                        { s: "Under the consumption-based model, you rent compute power and storage and release those resources when you're done.", answer: true, explain: "Instead of buying and maintaining infrastructure, you rent it and release it when you no longer need it." },
                        { s: "Cloud computing is classified as a capital expenditure because you pay for resources as you use them.", answer: false, explain: "Paying as you consume is an operational expenditure, not CapEx." },
                        { s: "Pay-as-you-go pricing helps you plan and manage operating costs.", answer: true, explain: "It's one of the listed benefits of cloud pricing, along with efficiency and scaling." }
                      ],
                      es: {
                        statements: [
                          { s: "En el modelo basado en el consumo, se alquila capacidad de cómputo y almacenamiento y se liberan esos recursos al terminar.", explain: "En lugar de comprar y mantener infraestructura, se alquila y se libera cuando ya no se necesita." },
                          { s: "La informática en la nube se clasifica como gasto de capital porque los recursos se pagan a medida que se usan.", explain: "Pagar a medida que se consume es gasto operativo, no CapEx." },
                          { s: "Los precios de pago por uso ayudan a planificar y administrar los costos operativos.", explain: "Es una de las ventajas listadas de los precios en la nube, junto con la eficiencia y el escalado." }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          });
