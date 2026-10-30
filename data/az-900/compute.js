// AZ-900 > Describe Azure architecture and services > Describe Azure compute services
Catalog.module("az-900", {
  id: "compute",
  name: "Describe Azure compute services",
  es: { name: "Descripción de los servicios de proceso de Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Azure Functions",
        q: "Code must run only when a user uploads an image, finish in a few seconds, and the team doesn't want to maintain any VMs or containers. Which compute option fits best?",
        options: ["Azure Virtual Machines", "Azure Kubernetes Service", "Azure Functions", "Azure Virtual Desktop"],
        answer: 2,
        explain: "Functions are event-driven and serverless: an event wakes the code, it finishes quickly and you pay only for the CPU time used. VMs and AKS would keep resources running.",
        es: {
          topic: "Azure Functions",
          q: "Un código debe ejecutarse solo cuando un usuario sube una imagen, terminar en pocos segundos, y el equipo no quiere mantener máquinas virtuales ni contenedores. ¿Qué opción de proceso es la más adecuada?",
          options: ["Azure Virtual Machines", "Azure Kubernetes Service", "Azure Functions", "Azure Virtual Desktop"],
          explain: "Functions es sin servidor y basado en eventos: un evento activa el código, termina rápido y solo se paga el tiempo de CPU usado. Las máquinas virtuales y AKS mantendrían recursos en ejecución."
        }
      },
      {
        type: "match",
        topic: "Compute options",
        q: "Match each requirement to the compute option that fits it best.",
        values: ["Virtual machines", "Containers", "Azure Functions", "Azure App Service"],
        targets: [
          { t: "Total control over the operating system and custom software", answer: 0 },
          { t: "Microservices whose parts scale independently", answer: 1 },
          { t: "Event-driven code billed only while it runs", answer: 2 },
          { t: "Web apps and REST APIs without managing infrastructure", answer: 3 }
        ],
        explain: "VMs give full OS control (IaaS). Containers suit microservices. Functions are serverless and event-driven. App Service hosts web apps and APIs with the infrastructure managed for you.",
        es: {
          topic: "Opciones de proceso",
          q: "Relacione cada requisito con la opción de proceso que mejor le corresponde.",
          values: ["Máquinas virtuales", "Contenedores", "Azure Functions", "Azure App Service"],
          targets: [
            { t: "Control total del sistema operativo y del software personalizado" },
            { t: "Microservicios cuyas partes escalan de forma independiente" },
            { t: "Código basado en eventos que se cobra solo mientras se ejecuta" },
            { t: "Aplicaciones web y API REST sin administrar infraestructura" }
          ],
          explain: "Las máquinas virtuales dan control total del sistema operativo (IaaS). Los contenedores sirven para microservicios. Functions es sin servidor y basado en eventos. App Service hospeda aplicaciones web y API con la infraestructura administrada."
        }
      },
      {
        type: "single",
        topic: "Virtual machines",
        q: "A company runs identical web servers on VMs and wants them to scale out automatically on a schedule and during load peaks, with traffic distributed among them. What should it use?",
        options: ["Availability sets", "Virtual machine scale sets", "A single larger VM", "Azure Virtual Desktop host pools"],
        answer: 1,
        explain: "Scale sets manage groups of identical, load-balanced VMs and scale them automatically by demand or schedule. Availability sets improve resiliency but don't scale.",
        es: {
          topic: "Máquinas virtuales",
          q: "Una empresa ejecuta servidores web idénticos en máquinas virtuales y quiere que escalen automáticamente según un horario y durante los picos de carga, con el tráfico repartido entre ellos. ¿Qué debe usar?",
          options: ["Conjuntos de disponibilidad", "Conjuntos de escalado de máquinas virtuales", "Una sola máquina virtual más grande", "Grupos de hosts de Azure Virtual Desktop"],
          explain: "Los conjuntos de escalado administran grupos de máquinas virtuales idénticas con equilibrio de carga y las escalan automáticamente según la demanda o un horario. Los conjuntos de disponibilidad mejoran la resiliencia pero no escalan."
        }
      },
      {
        type: "multi",
        topic: "Containers",
        q: "Which two are PaaS container offerings that remove container management overhead?",
        options: ["Azure Container Instances", "Azure Container Apps", "Azure Virtual Machines", "Virtual machine availability sets", "Azure Virtual Desktop"],
        answers: [0, 1],
        explain: "Container Instances and Container Apps are both PaaS; you upload containers and the service runs them. Container Apps adds built-in load balancing and scaling.",
        es: {
          topic: "Contenedores",
          q: "¿Cuáles son dos ofertas de contenedores PaaS que eliminan la carga de administrar contenedores?",
          options: ["Azure Container Instances", "Azure Container Apps", "Azure Virtual Machines", "Conjuntos de disponibilidad de máquinas virtuales", "Azure Virtual Desktop"],
          explain: "Container Instances y Container Apps son PaaS; se suben los contenedores y el servicio los ejecuta. Container Apps suma equilibrio de carga y escalado integrados."
        }
      },
      {
        type: "single",
        topic: "Azure Virtual Desktop",
        q: "Contractors need to use corporate Windows apps from their personal devices, and the company doesn't want app data stored on those devices. Which service fits best?",
        options: ["Azure Functions", "Azure Virtual Desktop", "Azure Container Instances", "Azure IoT Edge"],
        answer: 1,
        explain: "Azure Virtual Desktop keeps desktops and apps in Azure-hosted sessions, reducing data exposure on local devices, and works from many device types.",
        es: {
          topic: "Azure Virtual Desktop",
          q: "Unos contratistas necesitan usar aplicaciones corporativas de Windows desde sus dispositivos personales, y la empresa no quiere que los datos de las aplicaciones queden en esos dispositivos. ¿Qué servicio es el más adecuado?",
          options: ["Azure Functions", "Azure Virtual Desktop", "Azure Container Instances", "Azure IoT Edge"],
          explain: "Azure Virtual Desktop mantiene los escritorios y las aplicaciones en sesiones hospedadas en Azure, lo que reduce la exposición de datos en los dispositivos locales, y funciona desde muchos tipos de dispositivo."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Virtual machines", s: "Update domains group VMs that can be rebooted together during planned maintenance.", answer: true, explain: "Fault domains, by contrast, group VMs that share a power or network failure point." },
          { topic: "Azure Functions", s: "Durable Functions are stateless.", answer: false, explain: "Durable Functions are the stateful option; functions are stateless by default." },
          { topic: "AI, machine learning, and IoT", s: "Azure IoT Edge lets some workloads run closer to where data is generated.", answer: true, explain: "IoT Edge extends cloud capabilities to edge devices." }
        ],
        es: {
          statements: [
            { topic: "Máquinas virtuales", s: "Los dominios de actualización agrupan las máquinas virtuales que se pueden reiniciar juntas durante el mantenimiento planificado.", explain: "Los dominios de error, en cambio, agrupan máquinas virtuales que comparten un punto de falla de energía o de red." },
            { topic: "Azure Functions", s: "Durable Functions son funciones sin estado.", explain: "Durable Functions es la opción con estado; las funciones son sin estado por defecto." },
            { topic: "IA, aprendizaje automático e IoT", s: "Azure IoT Edge permite ejecutar algunas cargas de trabajo más cerca de donde se generan los datos.", explain: "IoT Edge extiende las capacidades de la nube a los dispositivos perimetrales." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Virtual machines",
        q: "Complete the statement about VM size families.",
        parts: [
          "For a large enterprise database, choose the ",
          { options: ["B-series", "M-series", "F-series"], answer: 1 },
          ", and for high-throughput storage and data processing, choose the ",
          { options: ["L-series", "N-series", "D-series"], answer: 0 },
          "."
        ],
        explain: "M-series has a large memory footprint for big enterprise databases. L-series is storage optimized. N-series is GPU enabled; D-series is general purpose.",
        es: {
          topic: "Máquinas virtuales",
          q: "Complete la afirmación sobre las familias de tamaños de máquinas virtuales.",
          parts: [
            "Para una base de datos empresarial grande, elija la ",
            { options: ["serie B", "serie M", "serie F"] },
            ", y para almacenamiento y procesamiento de datos de alto rendimiento, elija la ",
            { options: ["serie L", "serie N", "serie D"] },
            "."
          ],
          explain: "La serie M tiene mucha memoria para grandes bases de datos empresariales. La serie L está optimizada para almacenamiento. La serie N tiene GPU; la serie D es de uso general."
        }
      },
      {
        type: "single",
        topic: "AI, machine learning, and IoT",
        q: "A data science team needs to experiment with, train and manage the lifecycle of its own custom models. Which Azure option fits?",
        options: ["Azure AI services", "Azure Machine Learning", "Azure IoT Central", "Azure App Service"],
        answer: 1,
        explain: "Azure Machine Learning is for custom model development and management. Azure AI services provide prebuilt features through APIs.",
        es: {
          topic: "IA, aprendizaje automático e IoT",
          q: "Un equipo de ciencia de datos necesita experimentar, entrenar y administrar el ciclo de vida de sus propios modelos personalizados. ¿Qué opción de Azure corresponde?",
          options: ["Los servicios de Azure AI", "Azure Machine Learning", "Azure IoT Central", "Azure App Service"],
          explain: "Azure Machine Learning sirve para desarrollar y administrar modelos personalizados. Los servicios de Azure AI ofrecen funciones prediseñadas mediante API."
        }
      },
      {
        type: "single",
        topic: "Application hosting",
        q: "A web app needs a background task that runs a script in the same context as the app, either on a schedule or when triggered. Which App Service feature fits?",
        options: ["API apps", "WebJobs", "Mobile apps", "Deployment slots for DNS"],
        answer: 1,
        explain: "WebJobs run programs or scripts in the same context as a web, API or mobile app, scheduled or triggered, often for background tasks.",
        es: {
          topic: "Hospedaje de aplicaciones",
          q: "Una aplicación web necesita una tarea en segundo plano que ejecute un script en el mismo contexto que la aplicación, según un horario o cuando se active. ¿Qué característica de App Service corresponde?",
          options: ["Aplicaciones de API", "WebJobs", "Aplicaciones móviles", "Ranuras de implementación para DNS"],
          explain: "WebJobs ejecuta programas o scripts en el mismo contexto que una aplicación web, de API o móvil, de forma programada o al activarse, a menudo para tareas en segundo plano."
        }
      },
      {
        type: "single",
        topic: "Containers",
        q: "A company deploys a large fleet of containers and needs a service to manage their lifecycle. What should it use?",
        options: ["Azure Container Instances", "Azure Kubernetes Service", "Azure Functions", "Virtual machine availability sets"],
        answer: 1,
        explain: "AKS is a container orchestration service that simplifies managing a fleet of containers. Container Instances is the simplest way to run a single container.",
        es: {
          topic: "Contenedores",
          q: "Una empresa implementa una gran flota de contenedores y necesita un servicio que administre su ciclo de vida. ¿Qué debe usar?",
          options: ["Azure Container Instances", "Azure Kubernetes Service", "Azure Functions", "Conjuntos de disponibilidad de máquinas virtuales"],
          explain: "AKS es un servicio de orquestación de contenedores que simplifica la administración de una flota. Container Instances es la forma más simple de ejecutar un solo contenedor."
        }
      },
      {
        type: "single",
        topic: "Virtual machines",
        q: "You deploy an Azure VM from a prebuilt image. Who is responsible for patching and updating the operating system inside the VM?",
        options: ["Microsoft, because the image came from Azure", "You, because VMs are IaaS", "The image publisher", "Nobody; VMs update themselves"],
        answer: 1,
        explain: "VMs remove the need to buy hardware, but as IaaS you still manage patching, updates and configuration inside the VM.",
        es: {
          topic: "Máquinas virtuales",
          q: "Implementa una máquina virtual de Azure a partir de una imagen prediseñada. ¿Quién es responsable de aplicar parches y actualizar el sistema operativo dentro de la máquina virtual?",
          options: ["Microsoft, porque la imagen vino de Azure", "Usted, porque las máquinas virtuales son IaaS", "El editor de la imagen", "Nadie; las máquinas virtuales se actualizan solas"],
          explain: "Las máquinas virtuales eliminan la necesidad de comprar hardware, pero como son IaaS usted sigue administrando parches, actualizaciones y configuración dentro de ellas."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Application hosting", s: "App Service supports languages and frameworks such as Java, PHP, Python and Node.js.", answer: true, explain: "It also supports .NET and .NET Core, on Windows or Linux." },
          { topic: "Azure Virtual Desktop", s: "Azure Virtual Desktop integrates with Microsoft Entra ID for identity and access controls.", answer: true, explain: "That's one of the key points of the unit." },
          { topic: "Containers", s: "Each container runs its own operating system that you connect to and manage.", answer: false, explain: "Unlike VMs, you don't manage the operating system for a container." }
        ],
        es: {
          statements: [
            { topic: "Hospedaje de aplicaciones", s: "App Service admite lenguajes y marcos como Java, PHP, Python y Node.js.", explain: "También admite .NET y .NET Core, en Windows o Linux." },
            { topic: "Azure Virtual Desktop", s: "Azure Virtual Desktop se integra con Microsoft Entra ID para los controles de identidad y acceso.", explain: "Es uno de los puntos clave de la unidad." },
            { topic: "Contenedores", s: "Cada contenedor ejecuta su propio sistema operativo al que usted se conecta y administra.", explain: "A diferencia de las máquinas virtuales, en un contenedor no se administra el sistema operativo." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "virtual-machines",
      name: "Describe Azure virtual machines",
      es: { name: "Descripción de máquinas virtuales de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/2-virtual-machines",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "An application requires total control over the operating system, custom software and a custom hosting configuration. Which Azure compute option fits best?",
            options: ["Azure Functions", "Azure Virtual Machines", "Azure Container Apps", "Azure App Service"],
            answer: 1,
            explain: "VMs are IaaS: you control the OS and installed software, which suits custom software and hosting configurations.",
            es: {
              q: "Una aplicación requiere control total del sistema operativo, software personalizado y una configuración de hospedaje propia. ¿Qué opción de proceso de Azure es la más adecuada?",
              options: ["Azure Functions", "Azure Virtual Machines", "Azure Container Apps", "Azure App Service"],
              explain: "Las máquinas virtuales son IaaS: usted controla el sistema operativo y el software instalado, lo que sirve para software y configuraciones de hospedaje personalizados."
            }
          },
          {
            type: "match",
            q: "Match each workload to the VM family designed for it.",
            values: ["B-series", "E-series", "F-series", "N-series"],
            targets: [
              { t: "Dev/test workloads with occasional CPU spikes", answer: 0 },
              { t: "In-memory databases and analytics", answer: 1 },
              { t: "CPU-intensive application tiers", answer: 2 },
              { t: "AI training and inference", answer: 3 }
            ],
            explain: "B is burstable and cost-efficient, E is memory optimized, F is compute optimized and N is GPU enabled.",
            es: {
              q: "Relacione cada carga de trabajo con la familia de máquinas virtuales diseñada para ella.",
              values: ["Serie B", "Serie E", "Serie F", "Serie N"],
              targets: [
                { t: "Cargas de desarrollo y pruebas con picos ocasionales de CPU" },
                { t: "Bases de datos en memoria y análisis" },
                { t: "Niveles de aplicación con uso intensivo de CPU" },
                { t: "Entrenamiento e inferencia de IA" }
              ],
              explain: "La serie B es ampliable y económica, la E está optimizada para memoria, la F para proceso y la N tiene GPU."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the VM size name Standard_D2s_v5.",
            parts: [
              "In Standard_D2s_v5, the \"2\" indicates ",
              { options: ["the hardware generation", "the number of vCPUs", "the region"], answer: 1 },
              ", and the \"s\" indicates ",
              { options: ["Premium SSD support", "a spot instance", "a second data disk"], answer: 0 },
              "."
            ],
            explain: "D is the family (general purpose), 2 is the vCPU count, s means Premium SSD support and v5 is the hardware generation.",
            es: {
              q: "Complete la afirmación sobre el nombre de tamaño de máquina virtual Standard_D2s_v5.",
              parts: [
                "En Standard_D2s_v5, el \"2\" indica ",
                { options: ["la generación de hardware", "la cantidad de vCPU", "la región"] },
                ", y la \"s\" indica ",
                { options: ["compatibilidad con SSD Premium", "una instancia de acceso puntual", "un segundo disco de datos"] },
                "."
              ],
              explain: "D es la familia (uso general), 2 es la cantidad de vCPU, s significa compatibilidad con SSD Premium y v5 es la generación de hardware."
            }
          },
          {
            type: "single",
            q: "You need to create and manage a group of identical, load-balanced VMs that scale in or out automatically. What should you use?",
            options: ["Availability sets with fault domains", "Virtual machine scale sets", "Fault domains", "A generalized VM image"],
            answer: 1,
            explain: "Scale sets centralize configuration, integrate with load balancing and scale automatically by demand or schedule.",
            es: {
              q: "Necesita crear y administrar un grupo de máquinas virtuales idénticas, con equilibrio de carga, que escalen automáticamente. ¿Qué debe usar?",
              options: ["Conjuntos de disponibilidad con dominios de error", "Conjuntos de escalado de máquinas virtuales", "Dominios de error", "Una imagen generalizada de máquina virtual"],
              explain: "Los conjuntos de escalado centralizan la configuración, se integran con el equilibrio de carga y escalan automáticamente según la demanda o un horario."
            }
          },
          {
            type: "single",
            q: "In an availability set, how are VMs that share a potential power or network failure point grouped?",
            options: ["By update domain", "By fault domain", "By resource group", "By scale set"],
            answer: 1,
            explain: "Fault domains group VMs that share a failure point. Update domains group VMs that can be rebooted together during planned maintenance.",
            es: {
              q: "En un conjunto de disponibilidad, ¿cómo se agrupan las máquinas virtuales que comparten un posible punto de falla de energía o de red?",
              options: ["Por dominio de actualización", "Por dominio de error", "Por grupo de recursos", "Por conjunto de escalado"],
              explain: "Los dominios de error agrupan máquinas virtuales que comparten un punto de falla. Los dominios de actualización agrupan las que se pueden reiniciar juntas durante el mantenimiento planificado."
            }
          },
          {
            type: "multi",
            q: "Which two are resources you choose when you provision an Azure VM?",
            options: [
              "Size: purpose, number of processor cores and amount of RAM",
              "Networking: VNet, public IP and ports",
              "A management group to host the VM",
              "A sovereign region license",
              "Microsoft-managed operating system patching for the VM"
            ],
            answers: [0, 1],
            explain: "You choose size, storage disks and networking. OS patching stays with you, and management groups organize subscriptions, not VMs.",
            es: {
              q: "¿Cuáles son dos recursos que se eligen al aprovisionar una máquina virtual de Azure?",
              options: [
                "El tamaño: propósito, cantidad de núcleos de procesador y cantidad de RAM",
                "La red: red virtual, dirección IP pública y configuración de puertos",
                "Un grupo de administración donde hospedar la máquina virtual",
                "Una licencia de región soberana",
                "La aplicación de parches del sistema operativo administrada por Microsoft"
              ],
              explain: "Se eligen el tamaño, los discos de almacenamiento y la red. Los parches del sistema operativo siguen a su cargo, y los grupos de administración organizan suscripciones, no máquinas virtuales."
            }
          },
          {
            type: "single",
            q: "A company keeps failover capacity in Azure so it can run critical workloads there if its primary site becomes unavailable. Which VM use case is this?",
            options: ["Testing and development", "Disaster recovery", "Lift and shift migration", "Cloud application hosting"],
            answer: 1,
            explain: "Disaster recovery means keeping failover capacity in Azure for when the primary site is down.",
            es: {
              q: "Una empresa mantiene capacidad de conmutación por error en Azure para ejecutar allí sus cargas críticas si su sitio principal deja de estar disponible. ¿Qué caso de uso de máquinas virtuales es este?",
              options: ["Pruebas y desarrollo", "Recuperación ante desastres", "Migración tal cual (lift and shift)", "Hospedaje de aplicaciones en la nube"],
              explain: "La recuperación ante desastres consiste en mantener capacidad de conmutación por error en Azure para cuando el sitio principal no está disponible."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Availability sets add a separate cost on top of the VM instances.", answer: false, explain: "Availability sets themselves don't add cost; you pay for the VM instances." },
              { s: "In regions that support availability zones, zone-based designs are often preferred over availability sets.", answer: true, explain: "Zones provide broader failure isolation." },
              { s: "A VM image is a template that already includes an operating system and can include other tools.", answer: true, explain: "Images let you deploy VMs quickly with an OS and tools such as web hosting components." }
            ],
            es: {
              statements: [
                { s: "Los conjuntos de disponibilidad agregan un costo aparte además de las instancias de máquinas virtuales.", explain: "Los conjuntos de disponibilidad no agregan costo; se pagan las instancias de máquinas virtuales." },
                { s: "En las regiones que admiten zonas de disponibilidad, suelen preferirse los diseños basados en zonas antes que los conjuntos de disponibilidad.", explain: "Las zonas ofrecen un aislamiento de fallas más amplio." },
                { s: "Una imagen de máquina virtual es una plantilla que ya incluye un sistema operativo y puede incluir otras herramientas.", explain: "Las imágenes permiten implementar máquinas virtuales rápidamente con un sistema operativo y herramientas como componentes de hospedaje web." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "virtual-desktop",
      name: "Describe Azure Virtual Desktop",
      es: { name: "Descripción de Azure Virtual Desktop" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/4-virtual-desktop",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A support team works in shifts and needs every shift to get the same tools, access policies and security controls on standardized cloud-hosted desktops. Which service fits best?",
            options: ["Azure Functions", "Azure Virtual Desktop", "Azure Container Instances", "Azure App Service"],
            answer: 1,
            explain: "Azure Virtual Desktop centralizes desktop and app delivery, which is exactly the unit's support-team example.",
            es: {
              q: "Un equipo de soporte trabaja por turnos y necesita que cada turno tenga las mismas herramientas, directivas de acceso y controles de seguridad en escritorios estandarizados hospedados en la nube. ¿Qué servicio es el más adecuado?",
              options: ["Azure Functions", "Azure Virtual Desktop", "Azure Container Instances", "Azure App Service"],
              explain: "Azure Virtual Desktop centraliza la entrega de escritorios y aplicaciones, que es justamente el ejemplo del equipo de soporte de la unidad."
            }
          },
          {
            type: "single",
            q: "Which service does Azure Virtual Desktop integrate with for identity and access controls?",
            options: ["Azure DNS", "Microsoft Entra ID", "Azure IoT Hub", "Azure Kubernetes Service"],
            answer: 1,
            explain: "Users connect through Microsoft Entra ID, which handles identity and access for Azure Virtual Desktop.",
            es: {
              q: "¿Con qué servicio se integra Azure Virtual Desktop para los controles de identidad y acceso?",
              options: ["Azure DNS", "Microsoft Entra ID", "Azure IoT Hub", "Azure Kubernetes Service"],
              explain: "Los usuarios se conectan a través de Microsoft Entra ID, que gestiona la identidad y el acceso de Azure Virtual Desktop."
            }
          },
          {
            type: "multi",
            q: "Which two are benefits of Azure Virtual Desktop?",
            options: [
              "It helps reduce data exposure on local devices",
              "It centralizes desktop and app delivery in Azure",
              "It requires installing every app locally on each device",
              "It supports only single-session experiences",
              "It can only be used from inside the corporate office"
            ],
            answers: [0, 1],
            explain: "Apps and data can stay in Azure-hosted sessions and delivery is centralized. It supports single- and multi-session and works from many locations and devices.",
            es: {
              q: "¿Cuáles son dos ventajas de Azure Virtual Desktop?",
              options: [
                "Ayuda a reducir la exposición de datos en los dispositivos locales",
                "Centraliza la entrega de escritorios y aplicaciones en Azure",
                "Exige instalar cada aplicación localmente en cada dispositivo",
                "Solo admite experiencias de sesión única",
                "Solo se puede usar desde dentro de la oficina corporativa"
              ],
              explain: "Las aplicaciones y los datos pueden quedar en sesiones hospedadas en Azure y la entrega está centralizada. Admite sesión única y multisesión y funciona desde muchos lugares y dispositivos."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure Virtual Desktop.",
            parts: [
              "Azure Virtual Desktop supports ",
              { options: ["only single-session", "single-session and multi-session", "only multi-session"], answer: 1 },
              " Windows experiences, and apps and data can remain in ",
              { options: ["Azure-hosted sessions", "local hard drives", "removable USB devices"], answer: 0 },
              "."
            ],
            explain: "AVD offers both session types and keeps apps and data in Azure-hosted sessions instead of on local devices.",
            es: {
              q: "Complete la afirmación sobre Azure Virtual Desktop.",
              parts: [
                "Azure Virtual Desktop admite experiencias de Windows ",
                { options: ["solo de sesión única", "de sesión única y multisesión", "solo multisesión"] },
                ", y las aplicaciones y los datos pueden quedar en ",
                { options: ["sesiones hospedadas en Azure", "discos duros locales", "dispositivos USB extraíbles"] },
                "."
              ],
              explain: "AVD ofrece ambos tipos de sesión y mantiene las aplicaciones y los datos en sesiones hospedadas en Azure en lugar de en los dispositivos locales."
            }
          },
          {
            type: "single",
            q: "Many user groups need a full desktop experience with centralized management. Compared with building separate VM-based desktop environments for each group, what does the unit say about Azure Virtual Desktop?",
            options: [
              "It's often easier to operate",
              "It always costs less than any VM",
              "It requires one subscription per user",
              "It only works for a single user group"
            ],
            answer: 0,
            explain: "For a full desktop for many users with centralized management, AVD is often easier to operate than separate VM-based desktops per group.",
            es: {
              q: "Muchos grupos de usuarios necesitan una experiencia de escritorio completa con administración centralizada. Frente a armar entornos de escritorio separados basados en máquinas virtuales para cada grupo, ¿qué dice la unidad sobre Azure Virtual Desktop?",
              options: [
                "Suele ser más fácil de operar",
                "Siempre cuesta menos que cualquier máquina virtual",
                "Requiere una suscripción por usuario",
                "Solo funciona para un único grupo de usuarios"
              ],
              explain: "Para ofrecer un escritorio completo a muchos usuarios con administración centralizada, AVD suele ser más fácil de operar que escritorios separados basados en máquinas virtuales por grupo."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure Virtual Desktop lets users securely access Windows desktops and apps from many device types and locations.", answer: true, explain: "That's the core definition of the service." },
              { s: "With Azure Virtual Desktop, desktops and apps run on the user's local device.", answer: false, explain: "Desktops and apps stay in the cloud instead of on local devices." },
              { s: "Azure Virtual Desktop is a desktop and application virtualization service.", answer: true, explain: "It's a managed option for remote desktop access." }
            ],
            es: {
              statements: [
                { s: "Azure Virtual Desktop permite que los usuarios accedan de forma segura a escritorios y aplicaciones de Windows desde muchos tipos de dispositivo y ubicaciones.", explain: "Es la definición central del servicio." },
                { s: "Con Azure Virtual Desktop, los escritorios y las aplicaciones se ejecutan en el dispositivo local del usuario.", explain: "Los escritorios y las aplicaciones quedan en la nube en lugar de en los dispositivos locales." },
                { s: "Azure Virtual Desktop es un servicio de virtualización de escritorios y aplicaciones.", explain: "Es una opción administrada para el acceso a escritorios remotos." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "containers",
      name: "Describe Azure containers",
      es: { name: "Descripción de los contenedores de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-containers",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "You need the fastest and simplest way to run a single container in Azure, without managing virtual machines or adopting extra services. What should you use?",
            options: ["Azure Kubernetes Service", "Azure Container Instances", "Azure Virtual Machines", "Virtual machine scale sets"],
            answer: 1,
            explain: "Azure Container Instances is the fastest, simplest way to run a container; it's PaaS, so you upload the container and the service runs it.",
            es: {
              q: "Necesita la forma más rápida y simple de ejecutar un solo contenedor en Azure, sin administrar máquinas virtuales ni adoptar servicios adicionales. ¿Qué debe usar?",
              options: ["Azure Kubernetes Service", "Azure Container Instances", "Azure Virtual Machines", "Conjuntos de escalado de máquinas virtuales"],
              explain: "Azure Container Instances es la forma más rápida y simple de ejecutar un contenedor; es PaaS, así que se sube el contenedor y el servicio lo ejecuta."
            }
          },
          {
            type: "match",
            q: "Match each description to the Azure container service.",
            values: ["Azure Container Instances", "Azure Container Apps", "Azure Kubernetes Service"],
            targets: [
              { t: "The fastest and simplest way to run a container", answer: 0 },
              { t: "PaaS with built-in load balancing and scaling", answer: 1 },
              { t: "Orchestrates the lifecycle of a fleet of containers", answer: 2 }
            ],
            explain: "Container Instances is the quick start, Container Apps adds load balancing and scaling, and AKS provides deep orchestration.",
            es: {
              q: "Relacione cada descripción con el servicio de contenedores de Azure.",
              values: ["Azure Container Instances", "Azure Container Apps", "Azure Kubernetes Service"],
              targets: [
                { t: "La forma más rápida y simple de ejecutar un contenedor" },
                { t: "PaaS con equilibrio de carga y escalado integrados" },
                { t: "Orquesta el ciclo de vida de una flota de contenedores" }
              ],
              explain: "Container Instances es el inicio rápido, Container Apps suma equilibrio de carga y escalado, y AKS ofrece orquestación profunda."
            }
          },
          {
            type: "single",
            q: "A website is split into front-end, back-end and storage containers. The back end reaches capacity while the other parts are fine. What do containers let you do?",
            options: [
              "Scale just the back end",
              "Scale all three parts together, since they share one OS",
              "Move the whole website to a larger VM",
              "Restart the front end to free up capacity for the back end"
            ],
            answer: 0,
            explain: "In a microservice architecture each part can be maintained, scaled or updated independently.",
            es: {
              q: "Un sitio web está dividido en contenedores de front-end, back-end y almacenamiento. El back-end llega a su capacidad mientras las otras partes están bien. ¿Qué permiten hacer los contenedores?",
              options: [
                "Escalar únicamente el back-end",
                "Escalar las tres partes juntas, porque comparten un sistema operativo",
                "Trasladar todo el sitio a una máquina virtual más grande",
                "Reiniciar el front-end para liberarle capacidad al back-end"
              ],
              explain: "En una arquitectura de microservicios cada parte se puede mantener, escalar o actualizar de forma independiente."
            }
          },
          {
            type: "multi",
            q: "Which two statements describe how containers differ from virtual machines?",
            options: [
              "You don't manage the operating system for a container",
              "Containers are lightweight and can restart quickly after a crash",
              "Each container runs its own full operating system that you manage",
              "Only one container can run on a host",
              "Containers can't be scaled out dynamically"
            ],
            answers: [0, 1],
            explain: "Containers are lighter and more agile than VMs: no OS to manage, quick to create, scale and restart, and many can run on one host.",
            es: {
              q: "¿Cuáles son dos afirmaciones que describen en qué se diferencian los contenedores de las máquinas virtuales?",
              options: [
                "En un contenedor no se administra el sistema operativo",
                "Los contenedores son livianos y se reinician rápido después de una falla",
                "Cada contenedor ejecuta su propio sistema operativo completo que usted administra",
                "Solo puede ejecutarse un contenedor por host",
                "Los contenedores no se pueden escalar horizontalmente de forma dinámica"
              ],
              explain: "Los contenedores son más livianos y ágiles que las máquinas virtuales: no hay sistema operativo que administrar, se crean, escalan y reinician rápido, y muchos pueden correr en un host."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about containers in Azure.",
            parts: [
              "One of the most popular container engines is ",
              { options: ["Docker", "Hyper-V", "Kubernetes"], answer: 0 },
              ", and Azure Container Instances is a ",
              { options: ["IaaS", "PaaS", "SaaS"], answer: 1 },
              " offering."
            ],
            explain: "Docker is a popular container engine supported by Azure. Kubernetes is an orchestrator (AKS), not an engine. Container Instances is PaaS.",
            es: {
              q: "Complete la afirmación sobre los contenedores en Azure.",
              parts: [
                "Uno de los motores de contenedores más populares es ",
                { options: ["Docker", "Hyper-V", "Kubernetes"] },
                ", y Azure Container Instances es una oferta ",
                { options: ["IaaS", "PaaS", "SaaS"] },
                "."
              ],
              explain: "Docker es un motor de contenedores popular que Azure admite. Kubernetes es un orquestador (AKS), no un motor. Container Instances es PaaS."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure Kubernetes Service is a container orchestration service.", answer: true, explain: "AKS manages the lifecycle of containers in a fleet." },
              { s: "Azure Container Apps requires you to manage the underlying virtual machines.", answer: false, explain: "Container Apps is PaaS and removes container management overhead." },
              { s: "A microservice architecture breaks a solution into smaller, independent pieces.", answer: true, explain: "That lets you maintain, scale or update each piece independently." }
            ],
            es: {
              statements: [
                { s: "Azure Kubernetes Service es un servicio de orquestación de contenedores.", explain: "AKS administra el ciclo de vida de los contenedores de una flota." },
                { s: "Azure Container Apps exige administrar las máquinas virtuales subyacentes.", explain: "Container Apps es PaaS y elimina la carga de administrar contenedores." },
                { s: "Una arquitectura de microservicios divide una solución en piezas más pequeñas e independientes.", explain: "Eso permite mantener, escalar o actualizar cada pieza por separado." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "functions",
      name: "Describe Azure Functions",
      es: { name: "Descripción de Azure Functions" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/6-functions",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A team wants code that runs only when an event occurs, without keeping any VMs or containers provisioned when there are no events. Which service fits?",
            options: ["Azure Virtual Machines", "Azure Container Apps", "Azure Functions", "Azure Virtual Desktop"],
            answer: 2,
            explain: "With Azure Functions, an event wakes the function, so resources don't need to stay provisioned between events.",
            es: {
              q: "Un equipo quiere un código que se ejecute solo cuando ocurre un evento, sin mantener máquinas virtuales ni contenedores aprovisionados cuando no hay eventos. ¿Qué servicio corresponde?",
              options: ["Azure Virtual Machines", "Azure Container Apps", "Azure Functions", "Azure Virtual Desktop"],
              explain: "Con Azure Functions un evento activa la función, así que no hace falta mantener recursos aprovisionados entre eventos."
            }
          },
          {
            type: "single",
            q: "How does Azure charge for a function running in the serverless model?",
            options: [
              "A fixed monthly fee per function",
              "Only for the CPU time used",
              "For a dedicated VM that stays running all month to host the function",
              "Per user who calls the function"
            ],
            answer: 1,
            explain: "Functions run when triggered and resources are deallocated when they finish, so you're charged only for CPU time while running.",
            es: {
              q: "¿Cómo cobra Azure una función que se ejecuta en el modelo sin servidor?",
              options: [
                "Una tarifa mensual fija por función",
                "Solo el tiempo de CPU usado",
                "Una máquina virtual dedicada que queda encendida todo el mes para alojar la función",
                "Por cada usuario que llama a la función"
              ],
              explain: "Las funciones se ejecutan cuando se activan y los recursos se liberan al terminar, así que solo se cobra el tiempo de CPU durante la ejecución."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about function state.",
            parts: [
              "By default, functions are ",
              { options: ["stateful", "stateless", "persistent"], answer: 1 },
              ". Functions that keep track of prior activity through a context are called ",
              { options: ["Durable Functions", "WebJobs", "Container Apps"], answer: 0 },
              "."
            ],
            explain: "Stateless functions behave as if they restart on each event; Durable Functions are the stateful option.",
            es: {
              q: "Complete la afirmación sobre el estado de las funciones.",
              parts: [
                "De forma predeterminada, las funciones son ",
                { options: ["con estado", "sin estado", "persistentes"] },
                ". Las funciones que registran la actividad previa mediante un contexto se llaman ",
                { options: ["Durable Functions", "WebJobs", "Container Apps"] },
                "."
              ],
              explain: "Las funciones sin estado se comportan como si se reiniciaran en cada evento; Durable Functions es la opción con estado."
            }
          },
          {
            type: "multi",
            q: "Which two scenarios are a good fit for Azure Functions?",
            options: [
              "Work triggered by a REST request that completes within seconds",
              "Processing a message sent by another Azure service",
              "A process that must keep a VM running around the clock",
              "Providing full Windows desktops to remote workers",
              "Orchestrating a fleet of containers"
            ],
            answers: [0, 1],
            explain: "Functions suit quick work triggered by an event, timer or message. Always-on VMs, desktops and container fleets are other services.",
            es: {
              q: "¿Cuáles son dos escenarios adecuados para Azure Functions?",
              options: [
                "Trabajo activado por una solicitud REST que termina en segundos",
                "Procesar un mensaje enviado por otro servicio de Azure",
                "Un proceso que debe mantener una máquina virtual encendida todo el día",
                "Ofrecer escritorios completos de Windows a trabajadores remotos",
                "Orquestar una flota de contenedores"
              ],
              explain: "Functions sirve para trabajo rápido activado por un evento, un temporizador o un mensaje. Las máquinas virtuales siempre encendidas, los escritorios y las flotas de contenedores son otros servicios."
            }
          },
          {
            type: "single",
            q: "Demand for a processing task is highly variable and unpredictable. Why might Azure Functions be a good choice?",
            options: [
              "Functions scale automatically based on demand",
              "Functions require you to pre-provision capacity for the peak",
              "Functions run on a fixed number of instances",
              "Functions only run during business hours"
            ],
            answer: 0,
            explain: "Functions scale automatically with demand, which suits variable workloads.",
            es: {
              q: "La demanda de una tarea de procesamiento es muy variable e impredecible. ¿Por qué Azure Functions podría ser una buena opción?",
              options: [
                "Porque Functions escala automáticamente según la demanda",
                "Porque Functions exige aprovisionar capacidad para el pico",
                "Porque Functions se ejecuta en una cantidad fija de instancias",
                "Porque Functions solo se ejecuta en horario laboral"
              ],
              explain: "Functions escala automáticamente con la demanda, lo que sirve para cargas variables."
            }
          },
          {
            type: "single",
            q: "A team's function app now needs to run on a virtual network and be completely isolated. Which statement is correct?",
            options: [
              "Functions can only ever run in the serverless model",
              "It can be deployed outside the serverless model to run on virtual networks in isolation",
              "The team must rewrite it for VMs, since functions can't join a VNet",
              "Virtual networks are only available for Azure Virtual Desktop"
            ],
            answer: 1,
            explain: "Functions are also a general compute platform: you can move the project to a non-serverless environment for scaling control, virtual networks and isolation.",
            es: {
              q: "Ahora la aplicación de funciones de un equipo necesita ejecutarse en una red virtual y estar completamente aislada. ¿Qué afirmación es correcta?",
              options: [
                "Las funciones solo pueden ejecutarse en el modelo sin servidor",
                "Se puede implementar fuera del modelo sin servidor para ejecutarse en redes virtuales de forma aislada",
                "El equipo debe reescribirlo para máquinas virtuales, porque no se une a redes",
                "Las redes virtuales solo están disponibles para Azure Virtual Desktop"
              ],
              explain: "Functions también es una plataforma de proceso general: el proyecto se puede llevar a un entorno que no sea sin servidor para controlar el escalado, usar redes virtuales y aislarlo."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "With Azure Functions, resources must stay provisioned even when there are no events.", answer: false, explain: "An event wakes the function; resources are deallocated when it finishes." },
              { s: "Azure Functions is a serverless compute option.", answer: true, explain: "It doesn't require maintaining VMs or containers." },
              { s: "A function can be triggered by a timer.", answer: true, explain: "Functions respond to events, timers or messages from other services." }
            ],
            es: {
              statements: [
                { s: "Con Azure Functions, los recursos deben quedar aprovisionados aunque no haya eventos.", explain: "Un evento activa la función; los recursos se liberan al terminar." },
                { s: "Azure Functions es una opción de proceso sin servidor.", explain: "No requiere mantener máquinas virtuales ni contenedores." },
                { s: "Una función se puede activar con un temporizador.", explain: "Las funciones responden a eventos, temporizadores o mensajes de otros servicios." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "ai-ml-iot",
      name: "Describe AI, machine learning, and IoT/Edge services in Azure",
      es: { name: "Descripción de los servicios de IA, aprendizaje automático e IoT/Edge en Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/12a-describe-ai-ml-iot-edge-services",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each requirement to the Azure service category that fits it.",
            values: ["Azure AI services", "Azure Machine Learning", "Azure IoT services"],
            targets: [
              { t: "Add speech recognition through an API without training a model", answer: 0 },
              { t: "Build, train and manage a custom model", answer: 1 },
              { t: "Collect telemetry from thousands of connected devices", answer: 2 },
              { t: "Extract text from documents with prebuilt capabilities", answer: 0 }
            ],
            explain: "Prebuilt AI features via APIs are Azure AI services; custom models are Azure Machine Learning; connected devices and telemetry are IoT services.",
            es: {
              q: "Relacione cada requisito con la categoría de servicio de Azure que le corresponde.",
              values: ["Servicios de Azure AI", "Azure Machine Learning", "Servicios de Azure IoT"],
              targets: [
                { t: "Agregar reconocimiento de voz mediante una API sin entrenar un modelo" },
                { t: "Crear, entrenar y administrar un modelo personalizado" },
                { t: "Recopilar telemetría de miles de dispositivos conectados" },
                { t: "Extraer texto de documentos con capacidades prediseñadas" }
              ],
              explain: "Las funciones de IA prediseñadas mediante API son servicios de Azure AI; los modelos personalizados, Azure Machine Learning; los dispositivos conectados y la telemetría, los servicios de IoT."
            }
          },
          {
            type: "single",
            q: "Which Azure service enables secure, bi-directional communication between cloud services and IoT devices?",
            options: ["Azure IoT Central", "Azure IoT Hub", "Azure IoT Edge", "Azure Machine Learning"],
            answer: 1,
            explain: "IoT Hub handles secure two-way communication. IoT Central is a simplified SaaS platform; IoT Edge runs workloads on edge devices.",
            es: {
              q: "¿Qué servicio de Azure permite una comunicación segura y bidireccional entre los servicios en la nube y los dispositivos IoT?",
              options: ["Azure IoT Central", "Azure IoT Hub", "Azure IoT Edge", "Azure Machine Learning"],
              explain: "IoT Hub gestiona la comunicación segura en ambos sentidos. IoT Central es una plataforma SaaS simplificada; IoT Edge ejecuta cargas en dispositivos perimetrales."
            }
          },
          {
            type: "single",
            q: "A factory needs some processing to run on devices close to where data is generated, applying model updates locally. Which service enables this?",
            options: ["Azure IoT Edge", "Azure IoT Central", "Azure DNS", "Azure Virtual Desktop"],
            answer: 0,
            explain: "IoT Edge extends cloud capabilities to edge devices so workloads can run near the data, applying insights and model updates from the cloud.",
            es: {
              q: "Una fábrica necesita que parte del procesamiento se ejecute en dispositivos cercanos a donde se generan los datos, aplicando actualizaciones de modelos de forma local. ¿Qué servicio lo permite?",
              options: ["Azure IoT Edge", "Azure IoT Central", "Azure DNS", "Azure Virtual Desktop"],
              explain: "IoT Edge extiende las capacidades de la nube a los dispositivos perimetrales para que las cargas se ejecuten cerca de los datos, aplicando información y actualizaciones de modelos desde la nube."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure IoT and AI services.",
            parts: [
              "Azure IoT Central is a simplified ",
              { options: ["IaaS", "PaaS", "SaaS"], answer: 2 },
              " IoT platform, while Azure OpenAI Service supports ",
              { options: ["generative AI", "DNS resolution", "VM scaling"], answer: 0 },
              " scenarios such as chat and content generation."
            ],
            explain: "IoT Central is SaaS for solution builders. Azure OpenAI Service supports generative AI with built-in security and governance controls.",
            es: {
              q: "Complete la afirmación sobre los servicios de IoT e IA de Azure.",
              parts: [
                "Azure IoT Central es una plataforma de IoT ",
                { options: ["IaaS", "PaaS", "SaaS"] },
                " simplificada, mientras que Azure OpenAI Service admite escenarios de ",
                { options: ["IA generativa", "resolución de DNS", "escalado de máquinas virtuales"] },
                ", como chat y generación de contenido."
              ],
              explain: "IoT Central es SaaS para creadores de soluciones. Azure OpenAI Service admite IA generativa con controles de seguridad y gobernanza integrados."
            }
          },
          {
            type: "single",
            q: "At a fundamentals level, how should agentic AI be understood in Azure?",
            options: [
              "As a separate compute category, like VMs or containers",
              "As a pattern combining Azure AI with your app logic",
              "As a type of IoT device",
              "As a storage tier optimized for AI training data"
            ],
            answer: 1,
            explain: "Agentic applications combine a model with instructions, context and tools; in Azure you build them from AI services and Azure OpenAI plus your logic, not as a separate compute category.",
            es: {
              q: "En lo fundamental, ¿cómo debe entenderse la IA agéntica en Azure?",
              options: [
                "Como una categoría de proceso aparte, como los contenedores",
                "Como un patrón que combina Azure AI con la lógica de su aplicación",
                "Como un tipo de dispositivo IoT",
                "Como un nivel de almacenamiento para datos de IA"
              ],
              explain: "Las aplicaciones agénticas combinan un modelo con instrucciones, contexto y herramientas; en Azure se construyen con los servicios de IA y Azure OpenAI más su lógica, no como una categoría de proceso aparte."
            }
          },
          {
            type: "multi",
            q: "Which two are Azure IoT services?",
            options: ["Azure IoT Hub", "Azure IoT Edge", "Azure Machine Learning", "Azure OpenAI Service", "Azure DNS"],
            answers: [0, 1],
            explain: "IoT Hub, IoT Central and IoT Edge are the IoT services in the unit.",
            es: {
              q: "¿Cuáles son dos servicios de Azure IoT?",
              options: ["Azure IoT Hub", "Azure IoT Edge", "Azure Machine Learning", "Azure OpenAI Service", "Azure DNS"],
              explain: "IoT Hub, IoT Central e IoT Edge son los servicios de IoT de la unidad."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure OpenAI Service includes built-in security and governance controls.", answer: true, explain: "The unit mentions them for generative AI scenarios." },
              { s: "Azure Machine Learning is the best fit when you only need prebuilt AI features through an API.", answer: false, explain: "Prebuilt API features are Azure AI services; Machine Learning is for custom models." },
              { s: "Azure AI services include capabilities for language, speech, vision and document processing.", answer: true, explain: "Those are the common scenarios listed." }
            ],
            es: {
              statements: [
                { s: "Azure OpenAI Service incluye controles de seguridad y gobernanza integrados.", explain: "La unidad los menciona para los escenarios de IA generativa." },
                { s: "Azure Machine Learning es la mejor opción cuando solo necesita funciones de IA prediseñadas mediante una API.", explain: "Las funciones prediseñadas mediante API son servicios de Azure AI; Machine Learning es para modelos personalizados." },
                { s: "Los servicios de Azure AI incluyen capacidades de lenguaje, voz, visión y procesamiento de documentos.", explain: "Son los escenarios habituales listados." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "app-hosting",
      name: "Describe application hosting options",
      es: { name: "Describir las opciones de hospedaje de aplicaciones" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/7-describe-application-hosting-options",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A team wants to host a web app in Python with automatic scaling and high availability, deploying continuously from GitHub, without managing infrastructure. What should it use?",
            options: ["Azure Virtual Machines", "Azure App Service", "Azure Virtual Desktop", "Azure IoT Hub"],
            answer: 1,
            explain: "App Service hosts web apps, APIs and mobile back ends in many languages, with automatic scaling, high availability and automated deployments from GitHub, Azure DevOps or any Git repo.",
            es: {
              q: "Un equipo quiere hospedar una aplicación web en Python con escalado automático y alta disponibilidad, implementando de forma continua desde GitHub, sin administrar infraestructura. ¿Qué debe usar?",
              options: ["Azure Virtual Machines", "Azure App Service", "Azure Virtual Desktop", "Azure IoT Hub"],
              explain: "App Service hospeda aplicaciones web, API y back-ends móviles en muchos lenguajes, con escalado automático, alta disponibilidad e implementaciones automatizadas desde GitHub, Azure DevOps o cualquier repositorio Git."
            }
          },
          {
            type: "match",
            q: "Match each requirement to the App Service app style that fits it.",
            values: ["Web apps", "API apps", "WebJobs", "Mobile apps"],
            targets: [
              { t: "Run a PowerShell script on a schedule in the same context as an app", answer: 2 },
              { t: "Publish a REST API with full Swagger support", answer: 1 },
              { t: "A back end for iOS and Android apps with push notifications", answer: 3 },
              { t: "An ASP.NET site hosted on Windows or Linux", answer: 0 }
            ],
            explain: "WebJobs run background programs or scripts; API apps host REST APIs with Swagger; Mobile apps build iOS and Android back ends; Web apps host sites in many frameworks.",
            es: {
              q: "Relacione cada requisito con el estilo de aplicación de App Service que le corresponde.",
              values: ["Aplicaciones web", "Aplicaciones de API", "WebJobs", "Aplicaciones móviles"],
              targets: [
                { t: "Ejecutar un script de PowerShell según un horario en el mismo contexto que una aplicación" },
                { t: "Publicar una API REST con compatibilidad completa con Swagger" },
                { t: "Un back-end para aplicaciones de iOS y Android con notificaciones push" },
                { t: "Un sitio ASP.NET hospedado en Windows o Linux" }
              ],
              explain: "WebJobs ejecuta programas o scripts en segundo plano; las aplicaciones de API hospedan API REST con Swagger; las aplicaciones móviles crean back-ends para iOS y Android; las aplicaciones web hospedan sitios en muchos marcos."
            }
          },
          {
            type: "single",
            q: "Which application hosting option gives you maximum control of the hosting environment?",
            options: ["Azure App Service", "Containers", "Virtual machines", "WebJobs"],
            answer: 2,
            explain: "VMs give maximum control and let you configure the environment exactly as you want. On the hosting spectrum, App Service requires the least operational effort.",
            es: {
              q: "¿Qué opción de hospedaje de aplicaciones le da el máximo control del entorno de hospedaje?",
              options: ["Azure App Service", "Contenedores", "Máquinas virtuales", "WebJobs"],
              explain: "Las máquinas virtuales dan el máximo control y permiten configurar el entorno exactamente como se quiera. En el espectro de hospedaje, App Service requiere el menor esfuerzo operativo."
            }
          },
          {
            type: "multi",
            q: "Which two statements about Azure App Service are true?",
            options: [
              "It supports both Windows and Linux",
              "It supports automated deployments from GitHub, Azure DevOps or any Git repo",
              "It requires you to patch the host operating system",
              "It only supports .NET applications",
              "It can only host static web pages"
            ],
            answers: [0, 1],
            explain: "App Service runs on Windows and Linux, supports continuous deployment and many languages, and handles the infrastructure for you.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre Azure App Service?",
              options: [
                "Admite tanto Windows como Linux",
                "Admite implementaciones automatizadas desde GitHub, Azure DevOps o cualquier repositorio Git",
                "Exige aplicar parches al sistema operativo del host",
                "Solo admite aplicaciones .NET",
                "Solo puede hospedar páginas web estáticas"
              ],
              explain: "App Service funciona en Windows y Linux, admite implementación continua y muchos lenguajes, y se ocupa de la infraestructura por usted."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure App Service.",
            parts: [
              "Azure App Service is an ",
              { options: ["HTTP", "SMB", "FTP-only"], answer: 0 },
              "-based service, and on the hosting spectrum it requires ",
              { options: ["less operational effort", "more control and configuration", "more operating system patching"], answer: 0 },
              " than virtual machines."
            ],
            explain: "App Service is HTTP-based for web apps, REST APIs and mobile back ends, and sits at the low-operational-effort end compared with VMs.",
            es: {
              q: "Complete la afirmación sobre Azure App Service.",
              parts: [
                "Azure App Service es un servicio basado en ",
                { options: ["HTTP", "SMB", "solo FTP"] },
                ", y en el espectro de hospedaje requiere ",
                { options: ["menos esfuerzo operativo", "más control y configuración", "más parches del sistema operativo"] },
                " que las máquinas virtuales."
              ],
              explain: "App Service se basa en HTTP para aplicaciones web, API REST y back-ends móviles, y se ubica en el extremo de menor esfuerzo operativo frente a las máquinas virtuales."
            }
          },
          {
            type: "single",
            q: "Which App Service capability provides high availability for hosted apps?",
            options: ["Built-in load balancing and traffic manager", "Availability sets that you configure manually", "A dedicated domain controller", "Manual failover scripts"],
            answer: 0,
            explain: "App Service's built-in load balancing and traffic manager provide high availability, shared by all app styles.",
            es: {
              q: "¿Qué capacidad de App Service ofrece alta disponibilidad para las aplicaciones hospedadas?",
              options: ["El equilibrio de carga y el administrador de tráfico integrados", "Conjuntos de disponibilidad que usted configura manualmente", "Un controlador de dominio dedicado", "Scripts manuales de conmutación por error"],
              explain: "El equilibrio de carga y el administrador de tráfico integrados de App Service ofrecen alta disponibilidad, compartida por todos los estilos de aplicación."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "All App Service app styles are hosted on the same infrastructure and share its benefits.", answer: true, explain: "Web, API, WebJobs and mobile apps share deployment, security, scaling and availability features." },
              { s: "WebJobs can only run on a schedule, never in response to a trigger.", answer: false, explain: "WebJobs can be scheduled or run by a trigger." },
              { s: "Containers let you isolate and individually manage different aspects of a hosting solution.", answer: true, explain: "That's what makes containers a compelling hosting option." }
            ],
            es: {
              statements: [
                { s: "Todos los estilos de aplicación de App Service se hospedan en la misma infraestructura y comparten sus ventajas.", explain: "Las aplicaciones web, de API, WebJobs y móviles comparten las funciones de implementación, seguridad, escalado y disponibilidad." },
                { s: "WebJobs solo se puede ejecutar según un horario, nunca en respuesta a un desencadenador.", explain: "WebJobs se puede programar o ejecutar mediante un desencadenador." },
                { s: "Los contenedores permiten aislar y administrar por separado distintos aspectos de una solución de hospedaje.", explain: "Eso es lo que hace de los contenedores una opción de hospedaje atractiva." }
              ]
            }
          }
        ]
      }
    }
  ]
});
