// AZ-900 > Describe cloud concepts > Describe the benefits of using cloud services
Catalog.module("az-900", {
  id: "cloud-benefits",
  name: "Describe the benefits of using cloud services",
  es: { name: "Descripción de las ventajas de usar servicios en la nube" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "High availability and scalability",
        q: "A developer needs more processing power for an app that runs on a single virtual machine. The team doesn't want to add more instances. What should the developer do?",
        options: ["Scale out by adding virtual machines", "Scale up by adding CPUs or RAM to the virtual machine", "Scale in by removing virtual machines", "Request a higher SLA so the VM gets more capacity"],
        answer: 1,
        explain: "Adding CPUs or RAM to the same virtual machine is vertical scaling (scale up). Adding instances is horizontal scaling, which the team ruled out.",
        es: {
          topic: "Alta disponibilidad y escalabilidad",
          q: "Un desarrollador necesita más capacidad de procesamiento para una aplicación que se ejecuta en una sola máquina virtual. El equipo no quiere agregar más instancias. ¿Qué debe hacer?",
          options: ["Escalar horizontalmente agregando máquinas virtuales", "Escalar verticalmente agregando CPU o RAM a la máquina virtual", "Reducir horizontalmente quitando máquinas virtuales", "Pedir un SLA más alto para que la máquina virtual rinda más"],
          explain: "Agregar CPU o RAM a la misma máquina virtual es escalado vertical. Agregar instancias es escalado horizontal, que el equipo descartó."
        }
      },
      {
        type: "match",
        topic: "Cloud benefits",
        q: "Match each description to the cloud benefit it illustrates.",
        values: ["High availability", "Scalability", "Reliability", "Predictability"],
        targets: [
          { t: "Uptime guaranteed in a service-level agreement", answer: 0 },
          { t: "Adding resources to handle a traffic peak", answer: 1 },
          { t: "Recovering from a regional failure and continuing to function", answer: 2 },
          { t: "Forecasting cloud spend from usage analytics", answer: 3 }
        ],
        explain: "High availability is about uptime, backed by SLAs. Scalability adjusts resources to demand. Reliability is recovering from failures and continuing to work. Predictability covers performance and cost forecasting.",
        es: {
          topic: "Ventajas de la nube",
          q: "Relacione cada descripción con la ventaja de la nube que ilustra.",
          values: ["Alta disponibilidad", "Escalabilidad", "Confiabilidad", "Previsibilidad"],
          targets: [
            { t: "Tiempo de actividad garantizado en un acuerdo de nivel de servicio" },
            { t: "Agregar recursos para atender un pico de tráfico" },
            { t: "Recuperarse de una falla regional y seguir funcionando" },
            { t: "Pronosticar el gasto en la nube a partir del análisis de uso" }
          ],
          explain: "La alta disponibilidad se refiere al tiempo de actividad, respaldado por SLA. La escalabilidad ajusta los recursos a la demanda. La confiabilidad es recuperarse de fallas y seguir funcionando. La previsibilidad abarca el pronóstico de rendimiento y de costos."
        }
      },
      {
        type: "single",
        topic: "Security and governance",
        q: "A team wants operating system patches and maintenance handled automatically, while it keeps deploying its own application code. Which approach fits best?",
        options: ["IaaS", "PaaS", "An on-premises datacenter", "Virtual machines managed by the team"],
        answer: 1,
        explain: "PaaS and SaaS take care of patches and maintenance automatically; PaaS still lets you deploy your own code. IaaS gives maximum security control but leaves OS patching to you.",
        es: {
          topic: "Seguridad y gobernanza",
          q: "Un equipo quiere que los parches y el mantenimiento del sistema operativo se gestionen automáticamente, mientras sigue implementando su propio código. ¿Qué enfoque es el más adecuado?",
          options: ["IaaS", "PaaS", "Un centro de datos local", "Máquinas virtuales administradas por el equipo"],
          explain: "PaaS y SaaS se ocupan de los parches y el mantenimiento automáticamente; PaaS además permite implementar código propio. IaaS da el máximo control de seguridad pero deja los parches del sistema operativo en sus manos."
        }
      },
      {
        type: "single",
        topic: "Manageability",
        q: "Which of the following is an example of management of the cloud, rather than management in the cloud?",
        options: ["Automatically replacing failing resources", "Using the Azure command line interface", "Calling management APIs from your own tools", "Running PowerShell scripts against your subscription"],
        answer: 0,
        explain: "Management of the cloud is what you can do with your resources: autoscale, deploy from templates, monitor health and replace failing resources, get alerts. Portal, CLI, APIs and PowerShell are management in the cloud: how you manage.",
        es: {
          topic: "Capacidad de administración",
          q: "¿Cuál de las siguientes opciones es un ejemplo de administración de la nube, y no de administración en la nube?",
          options: ["Reemplazar automáticamente los recursos que fallan", "Usar la interfaz de línea de comandos de Azure", "Llamar a las API de administración desde sus herramientas", "Ejecutar scripts de PowerShell contra su suscripción"],
          explain: "La administración de la nube es lo que se puede hacer con los recursos: escalar automáticamente, implementar desde plantillas, supervisar el estado y reemplazar recursos que fallan, recibir alertas. El portal, la CLI, las API y PowerShell son administración en la nube: cómo se administra."
        }
      },
      {
        type: "multi",
        topic: "Reliability and predictability",
        q: "Which two cloud concepts support performance predictability?",
        options: ["Autoscaling", "Load balancing", "The Azure Pricing Calculator", "Real-time cost tracking", "Governance templates"],
        answers: [0, 1],
        explain: "Autoscaling and load balancing, along with high availability, support performance predictability. The Pricing Calculator and cost tracking support cost predictability.",
        es: {
          topic: "Confiabilidad y previsibilidad",
          q: "¿Cuáles son dos conceptos de la nube que contribuyen a la previsibilidad del rendimiento?",
          options: ["El escalado automático", "El equilibrio de carga", "La Calculadora de precios de Azure", "El seguimiento de costos en tiempo real", "Las plantillas de gobernanza"],
          explain: "El escalado automático y el equilibrio de carga, junto con la alta disponibilidad, contribuyen a la previsibilidad del rendimiento. La Calculadora de precios y el seguimiento de costos contribuyen a la previsibilidad de costos."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Sustainability", s: "Turning off resources that aren't in use supports both sustainability and cost efficiency.", answer: true, explain: "Deallocating unused resources is a listed practice that supports sustainability and cost efficiency." },
          { topic: "High availability and scalability", s: "Scaling in means adding more virtual machines when demand increases.", answer: false, explain: "Scaling in removes resources when demand drops. Adding instances is scaling out." },
          { topic: "Security and governance", s: "Cloud providers are typically well suited to handle distributed denial of service (DDoS) attacks.", answer: true, explain: "The module notes providers are well suited to handle DDoS attacks, making your network more robust." }
        ],
        es: {
          statements: [
            { topic: "Sostenibilidad", s: "Apagar los recursos que no se usan contribuye tanto a la sostenibilidad como a la eficiencia de costos.", explain: "Desasignar recursos sin uso es una práctica listada que contribuye a la sostenibilidad y a la eficiencia de costos." },
            { topic: "Alta disponibilidad y escalabilidad", s: "Reducir horizontalmente significa agregar más máquinas virtuales cuando aumenta la demanda.", explain: "Reducir horizontalmente quita recursos cuando baja la demanda. Agregar instancias es escalar horizontalmente." },
            { topic: "Seguridad y gobernanza", s: "Los proveedores de nube suelen estar bien preparados para gestionar ataques de denegación de servicio distribuido (DDoS).", explain: "El módulo indica que los proveedores están bien preparados para gestionar ataques DDoS, lo que hace más robusta la red." }
          ]
        }
      },
      {
        type: "single",
        topic: "Sustainability",
        q: "Monitoring shows that several virtual machines consistently use a small fraction of their allocated CPU. Which sustainability-aligned practice applies?",
        options: [
          "Add more virtual machines to spread the load",
          "Keep them at their current size so there's headroom for future growth",
          "Right-size them to reduce overprovisioning",
          "Move them to an on-premises datacenter"
        ],
        answer: 2,
        explain: "Right-sizing, choosing efficient services and configurations, reduces overprovisioning and waste. Keeping idle capacity 'just in case' is the waste the practice targets.",
        es: {
          topic: "Sostenibilidad",
          q: "La supervisión muestra que varias máquinas virtuales usan siempre una pequeña parte de la CPU asignada. ¿Qué práctica alineada con la sostenibilidad corresponde?",
          options: [
            "Agregar más máquinas virtuales para repartir la carga",
            "Dejarlas con el tamaño actual para tener margen ante el crecimiento futuro",
            "Ajustar su tamaño para reducir el sobreaprovisionamiento",
            "Trasladarlas a un centro de datos local"
          ],
          explain: "Ajustar el tamaño, eligiendo servicios y configuraciones eficientes, reduce el sobreaprovisionamiento y el desperdicio. Mantener capacidad ociosa \"por las dudas\" es justamente el desperdicio que la práctica ataca."
        }
      },
      {
        type: "dropdown",
        topic: "Security and governance",
        q: "Complete the statement about cloud governance.",
        parts: [
          "Cloud-based ",
          { options: ["auditing", "autoscaling", "load balancing"], answer: 0 },
          " flags resources that are out of compliance with your baseline, and ",
          { options: ["alerts", "templates", "SLAs"], answer: 1 },
          " help ensure that new deployments meet your technical standards and regulatory requirements."
        ],
        explain: "Auditing flags noncompliant resources and suggests mitigations. Templates make deployments meet your standards and let you update resources at scale.",
        es: {
          topic: "Seguridad y gobernanza",
          q: "Complete la afirmación sobre la gobernanza en la nube.",
          parts: [
            "La ",
            { options: ["auditoría", "escalabilidad automática", "distribución de carga"] },
            " basada en la nube marca los recursos que no cumplen con su línea base, y las ",
            { options: ["alertas", "plantillas", "SLA"] },
            " ayudan a que las nuevas implementaciones cumplan sus estándares técnicos y requisitos normativos."
          ],
          explain: "La auditoría marca los recursos que no cumplen y sugiere mitigaciones. Las plantillas hacen que las implementaciones cumplan sus estándares y permiten actualizar recursos a escala."
        }
      },
      {
        type: "single",
        topic: "Reliability and predictability",
        q: "A company wants its applications to keep running even if one region suffers a catastrophic event. Which characteristic of the cloud makes this possible?",
        options: ["Vertical scaling of the most critical resources", "Its decentralized, multi-region design", "Deployment templates that recreate resources in the same region", "Pay-as-you-go pricing"],
        answer: 1,
        explain: "The cloud's decentralized design and global scale mean other regions keep running if one fails. That's the basis of cloud reliability.",
        es: {
          topic: "Confiabilidad y previsibilidad",
          q: "Una empresa quiere que sus aplicaciones sigan funcionando aunque una región sufra un evento catastrófico. ¿Qué característica de la nube lo hace posible?",
          options: ["El escalado vertical de los recursos más críticos", "Su diseño descentralizado en varias regiones", "Las plantillas de implementación que recrean recursos en la misma región", "Los precios de pago por uso"],
          explain: "El diseño descentralizado y la escala global de la nube hacen que otras regiones sigan funcionando si una falla. Esa es la base de la confiabilidad en la nube."
        }
      },
      {
        type: "single",
        topic: "High availability and scalability",
        q: "What does high availability focus on?",
        options: [
          "Adjusting the amount of resources to meet changing demand",
          "Keeping resources available despite disruptions",
          "Forecasting the cost of cloud spend",
          "Applying patches automatically"
        ],
        answer: 1,
        explain: "High availability is about keeping resources available when needed, whatever happens. Adjusting resources to demand is scalability; forecasting cost is predictability.",
        es: {
          topic: "Alta disponibilidad y escalabilidad",
          q: "¿En qué se centra la alta disponibilidad?",
          options: [
            "En ajustar la cantidad de recursos para satisfacer una demanda cambiante",
            "En mantener los recursos disponibles pese a las interrupciones",
            "En pronosticar el costo del gasto en la nube",
            "En aplicar parches automáticamente"
          ],
          explain: "La alta disponibilidad busca que los recursos estén disponibles cuando se necesitan, pase lo que pase. Ajustar recursos a la demanda es escalabilidad; pronosticar costos es previsibilidad."
        }
      },
      {
        type: "single",
        topic: "Manageability",
        q: "An operations team wants to automate recurring management tasks in its cloud environment. Which tools fit this need?",
        options: ["Service-level agreements", "The Azure Pricing Calculator", "CLI or PowerShell scripts", "DDoS protection"],
        answer: 2,
        explain: "The CLI and PowerShell, along with APIs, let you script and automate management. SLAs, the Pricing Calculator and DDoS protection serve other purposes.",
        es: {
          topic: "Capacidad de administración",
          q: "Un equipo de operaciones quiere automatizar tareas de administración recurrentes en su entorno en la nube. ¿Qué herramientas responden a esa necesidad?",
          options: ["Los acuerdos de nivel de servicio", "La Calculadora de precios de Azure", "Scripts de la CLI o de PowerShell", "La protección contra DDoS"],
          explain: "La CLI y PowerShell, junto con las API, permiten escribir scripts y automatizar la administración. Los SLA, la Calculadora de precios y la protección contra DDoS sirven para otros fines."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Reliability and predictability", s: "Reliability is one of the pillars of the Microsoft Azure Well-Architected Framework.", answer: true, explain: "The module describes reliability as one of the framework's pillars." },
          { topic: "Manageability", s: "Automatic alerts in the cloud are based on metrics that you configure.", answer: true, explain: "You receive automatic alerts based on configured metrics, so you see performance in real time." },
          { topic: "Sustainability", s: "Sustainability benefits in the cloud happen automatically, without any action from your team.", answer: false, explain: "The cloud supports sustainability when teams actively optimize: right-size, automate, monitor and keep optimizing." }
        ],
        es: {
          statements: [
            { topic: "Confiabilidad y previsibilidad", s: "La confiabilidad es uno de los pilares del Marco de buena arquitectura de Microsoft Azure.", explain: "El módulo describe la confiabilidad como uno de los pilares de ese marco." },
            { topic: "Capacidad de administración", s: "Las alertas automáticas en la nube se basan en métricas que usted configura.", explain: "Se reciben alertas automáticas según las métricas configuradas, para conocer el rendimiento en tiempo real." },
            { topic: "Sostenibilidad", s: "Las ventajas de sostenibilidad en la nube ocurren automáticamente, sin ninguna acción del equipo.", explain: "La nube contribuye a la sostenibilidad cuando los equipos optimizan de forma activa: ajustar el tamaño, automatizar, supervisar y seguir optimizando." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "ha-scalability",
      name: "Describe the benefits of high availability and scalability in the cloud",
      es: { name: "Descripción de las ventajas de la alta disponibilidad y la escalabilidad en la nube" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each action to the type of scaling it represents.",
            values: ["Vertical scaling", "Horizontal scaling"],
            targets: [
              { t: "Add more CPUs and RAM to an existing virtual machine", answer: 0 },
              { t: "Add more virtual machine instances during a traffic spike", answer: 1 },
              { t: "Lower the RAM of an over-specified virtual machine", answer: 0 },
              { t: "Remove containers after demand drops", answer: 1 }
            ],
            explain: "Vertical scaling changes the capabilities of a resource (scale up or down). Horizontal scaling changes the number of resources (scale out or in).",
            es: {
              q: "Relacione cada acción con el tipo de escalado que representa.",
              values: ["Escalado vertical", "Escalado horizontal"],
              targets: [
                { t: "Agregar más CPU y RAM a una máquina virtual existente" },
                { t: "Agregar más instancias de máquinas virtuales durante un pico de tráfico" },
                { t: "Reducir la RAM de una máquina virtual sobredimensionada" },
                { t: "Quitar contenedores después de que baja la demanda" }
              ],
              explain: "El escalado vertical cambia las capacidades de un recurso (aumentar o reducir). El escalado horizontal cambia la cantidad de recursos (escalar o reducir horizontalmente)."
            }
          },
          {
            type: "single",
            q: "Where are Azure's uptime guarantees for a service documented?",
            options: ["In service-level agreements (SLAs)", "In the Azure Well-Architected Framework", "In the shared responsibility model", "In the Azure Pricing Calculator"],
            answer: 0,
            explain: "Azure's uptime guarantees depend on the service and are part of its service-level agreements.",
            es: {
              q: "¿Dónde se documentan las garantías de tiempo de actividad de un servicio de Azure?",
              options: ["En los acuerdos de nivel de servicio (SLA)", "En el Marco de buena arquitectura de Azure", "En el modelo de responsabilidad compartida", "En la Calculadora de precios de Azure"],
              explain: "Las garantías de tiempo de actividad de Azure dependen del servicio y forman parte de sus acuerdos de nivel de servicio."
            }
          },
          {
            type: "single",
            q: "An application must remain available to users regardless of disruptions or events that occur. Which concept describes this goal?",
            options: ["Scalability", "High availability", "Cost predictability", "Governance"],
            answer: 1,
            explain: "High availability focuses on ensuring maximum availability regardless of disruptions. Scalability is about adjusting resources to demand.",
            es: {
              q: "Una aplicación debe seguir disponible para los usuarios sin importar las interrupciones o los eventos que ocurran. ¿Qué concepto describe este objetivo?",
              options: ["Escalabilidad", "Alta disponibilidad", "Previsibilidad de costos", "Gobernanza"],
              explain: "La alta disponibilidad se centra en garantizar la máxima disponibilidad sin importar las interrupciones. La escalabilidad consiste en ajustar los recursos a la demanda."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about types of scaling.",
            parts: [
              "Scaling up and down is ",
              { options: ["horizontal", "vertical", "geographic"], answer: 1 },
              " scaling, while scaling out and in is ",
              { options: ["vertical", "geographic", "horizontal"], answer: 2 },
              " scaling."
            ],
            explain: "Up and down change a resource's CPU or RAM (vertical). Out and in change the number of resources (horizontal).",
            es: {
              q: "Complete la afirmación sobre los tipos de escalado.",
              parts: [
                "Aumentar y reducir la capacidad de un recurso es escalado ",
                { options: ["horizontal", "vertical", "geográfico"] },
                ", mientras que agregar y quitar recursos es escalado ",
                { options: ["vertical", "geográfico", "horizontal"] },
                "."
              ],
              explain: "Aumentar y reducir cambia la CPU o la RAM de un recurso (vertical). Agregar y quitar cambia la cantidad de recursos (horizontal)."
            }
          },
          {
            type: "single",
            q: "A web app sees a steep jump in demand. The team wants capacity to grow automatically by adding instances rather than enlarging a single server. What should it use?",
            options: ["Vertical scaling", "Horizontal scaling", "A higher SLA", "A hardware purchase"],
            answer: 1,
            explain: "Adding instances, automatically or manually, is horizontal scaling (scale out). Vertical scaling would enlarge the single server.",
            es: {
              q: "Una aplicación web registra un salto brusco en la demanda. El equipo quiere que la capacidad crezca automáticamente agregando instancias en lugar de agrandar un único servidor. ¿Qué debe usar?",
              options: ["Escalado vertical", "Escalado horizontal", "Un SLA más alto", "Una compra de hardware"],
              explain: "Agregar instancias, automática o manualmente, es escalado horizontal. El escalado vertical agrandaría el único servidor."
            }
          },
          {
            type: "multi",
            q: "Which two are benefits of scalability in the cloud?",
            options: [
              "Handling increased demand by adding resources",
              "Reducing costs by reducing resources when demand drops",
              "Guaranteed 100% uptime for every service",
              "Removing the need for service-level agreements",
              "A fixed monthly cost regardless of demand"
            ],
            answers: [0, 1],
            explain: "Scalability lets you add resources for peaks and, because you pay for what you use, reduce them and the cost when demand drops.",
            es: {
              q: "¿Cuáles son dos ventajas de la escalabilidad en la nube?",
              options: [
                "Atender un aumento de la demanda agregando recursos",
                "Reducir costos disminuyendo recursos cuando baja la demanda",
                "Un tiempo de actividad garantizado del 100 % para todos los servicios",
                "Eliminar la necesidad de acuerdos de nivel de servicio",
                "Un costo mensual fijo sin importar la demanda"
              ],
              explain: "La escalabilidad permite agregar recursos para los picos y, como se paga lo que se usa, reducirlos junto con el costo cuando baja la demanda."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Horizontal scaling can be performed automatically or manually.", answer: true, explain: "Resources can be scaled out or in either automatically or manually." },
              { s: "Vertical scaling adds more virtual machines to a deployment.", answer: false, explain: "Vertical scaling changes a resource's CPU or RAM. Adding virtual machines is horizontal scaling." },
              { s: "Azure offers the same uptime guarantee for every service.", answer: false, explain: "Uptime guarantees depend on the service." }
            ],
            es: {
              statements: [
                { s: "El escalado horizontal se puede realizar de forma automática o manual.", explain: "Los recursos se pueden agregar o quitar de forma automática o manual." },
                { s: "El escalado vertical agrega más máquinas virtuales a una implementación.", explain: "El escalado vertical cambia la CPU o la RAM de un recurso. Agregar máquinas virtuales es escalado horizontal." },
                { s: "Azure ofrece la misma garantía de tiempo de actividad para todos los servicios.", explain: "Las garantías de tiempo de actividad dependen del servicio." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "reliability-predictability",
      name: "Describe the benefits of reliability and predictability in the cloud",
      es: { name: "Describir las ventajas de confiabilidad y previsibilidad en la nube" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "After a regional outage, an application keeps working by running from another region. Which cloud benefit does this illustrate?",
            options: ["Predictability", "Reliability", "Manageability", "Vertical scalability"],
            answer: 1,
            explain: "Reliability is the ability of a system to recover from failures and continue to function, supported by the cloud's decentralized, multi-region design.",
            es: {
              q: "Después de una interrupción regional, una aplicación sigue funcionando desde otra región. ¿Qué ventaja de la nube ilustra esto?",
              options: ["Previsibilidad", "Confiabilidad", "Capacidad de administración", "Escalabilidad vertical"],
              explain: "La confiabilidad es la capacidad de un sistema de recuperarse de fallas y seguir funcionando, respaldada por el diseño descentralizado y multirregión de la nube."
            }
          },
          {
            type: "match",
            q: "Match each capability to the type of predictability it supports.",
            values: ["Performance predictability", "Cost predictability"],
            targets: [
              { t: "Autoscaling deploys more resources when demand rises", answer: 0 },
              { t: "The Azure Pricing Calculator estimates potential spend", answer: 1 },
              { t: "Load balancing redirects traffic away from overloaded areas", answer: 0 },
              { t: "Tracking resource use in real time to forecast spend", answer: 1 }
            ],
            explain: "Performance predictability relies on autoscaling, load balancing and high availability. Cost predictability relies on tracking, monitoring, analytics and tools like the Pricing Calculator.",
            es: {
              q: "Relacione cada capacidad con el tipo de previsibilidad que respalda.",
              values: ["Previsibilidad del rendimiento", "Previsibilidad de costos"],
              targets: [
                { t: "El escalado automático implementa más recursos cuando aumenta la demanda" },
                { t: "La Calculadora de precios de Azure estima el gasto posible" },
                { t: "El equilibrio de carga desvía el tráfico de las zonas sobrecargadas" },
                { t: "El seguimiento del uso de recursos en tiempo real para pronosticar el gasto" }
              ],
              explain: "La previsibilidad del rendimiento se apoya en el escalado automático, el equilibrio de carga y la alta disponibilidad. La de costos se apoya en el seguimiento, la supervisión, el análisis y herramientas como la Calculadora de precios."
            }
          },
          {
            type: "single",
            q: "Which framework heavily influences both performance and cost predictability, and includes reliability as one of its pillars?",
            options: ["The Microsoft cloud shared responsibility model", "The Azure Well-Architected Framework", "Azure service-level agreements", "The consumption-based model"],
            answer: 1,
            explain: "The module ties both kinds of predictability to the Well-Architected Framework and names reliability as one of its pillars.",
            es: {
              q: "¿Qué marco influye fuertemente tanto en la previsibilidad del rendimiento como en la de costos, e incluye la confiabilidad como uno de sus pilares?",
              options: ["El modelo de responsabilidad compartida de la nube de Microsoft", "El Marco de buena arquitectura de Azure", "Los acuerdos de nivel de servicio de Azure", "El modelo basado en el consumo"],
              explain: "El módulo vincula ambos tipos de previsibilidad con el Marco de buena arquitectura y menciona la confiabilidad como uno de sus pilares."
            }
          },
          {
            type: "single",
            q: "Before migrating, the finance team wants an estimate of potential cloud spend. What should it use?",
            options: ["Azure Arc", "A service-level agreement", "The Azure Pricing Calculator", "A load balancer"],
            answer: 2,
            explain: "The Azure Pricing Calculator estimates potential cloud spend, which supports cost predictability.",
            es: {
              q: "Antes de migrar, el equipo de finanzas quiere una estimación del gasto posible en la nube. ¿Qué debe usar?",
              options: ["Azure Arc", "Un acuerdo de nivel de servicio", "La Calculadora de precios de Azure", "Un equilibrador de carga"],
              explain: "La Calculadora de precios de Azure estima el gasto posible en la nube, lo que contribuye a la previsibilidad de costos."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about reliability in the cloud.",
            parts: [
              "The cloud supports reliability through its ",
              { options: ["centralized", "decentralized", "single-site"], answer: 1 },
              " design, which lets you deploy resources in ",
              { options: ["a single datacenter", "regions around the world", "your on-premises network"], answer: 1 },
              "."
            ],
            explain: "A decentralized design with resources across global regions means that if one region fails, others keep running.",
            es: {
              q: "Complete la afirmación sobre la confiabilidad en la nube.",
              parts: [
                "La nube contribuye a la confiabilidad gracias a su diseño ",
                { options: ["centralizado", "descentralizado", "de un solo sitio"] },
                ", que permite implementar recursos en ",
                { options: ["un único centro de datos", "regiones de todo el mundo", "su red local"] },
                "."
              ],
              explain: "Un diseño descentralizado con recursos en regiones de todo el mundo hace que, si una región falla, las demás sigan funcionando."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "In some cases, your cloud environment can automatically shift to a different region with no action needed on your part.", answer: true, explain: "The module states this can happen automatically." },
              { s: "Load balancing is a concept that supports cost predictability.", answer: false, explain: "Load balancing supports performance predictability." },
              { s: "Reliability is the ability of a system to recover from failures and continue to function.", answer: true, explain: "That's the module's definition of reliability." }
            ],
            es: {
              statements: [
                { s: "En algunos casos, el entorno en la nube puede pasar automáticamente a otra región sin que usted tenga que hacer nada.", explain: "El módulo indica que esto puede ocurrir automáticamente." },
                { s: "El equilibrio de carga es un concepto que contribuye a la previsibilidad de costos.", explain: "El equilibrio de carga contribuye a la previsibilidad del rendimiento." },
                { s: "La confiabilidad es la capacidad de un sistema de recuperarse de fallas y seguir funcionando.", explain: "Es la definición de confiabilidad del módulo." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "security-governance",
      name: "Describe the benefits of security and governance in the cloud",
      es: { name: "Descripción de las ventajas de la seguridad y la gobernanza en la nube" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/4-security-governance-cloud",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Your company needs deployed resources to meet its technical standards and regulatory requirements, and to update them at scale when standards change. What helps most?",
            options: ["Configuring each resource manually", "Deployment templates", "Vertical scaling", "The Azure Pricing Calculator"],
            answer: 1,
            explain: "Templates make deployed resources meet your standards and requirements, and let you update resources at scale as standards change.",
            es: {
              q: "Su empresa necesita que los recursos implementados cumplan sus estándares técnicos y requisitos normativos, y poder actualizarlos a escala cuando cambien los estándares. ¿Qué ayuda más?",
              options: ["Configurar cada recurso manualmente", "Las plantillas de implementación", "El escalado vertical", "La Calculadora de precios de Azure"],
              explain: "Las plantillas hacen que los recursos implementados cumplan sus estándares y requisitos, y permiten actualizarlos a escala cuando cambian los estándares."
            }
          },
          {
            type: "single",
            q: "Which cloud capability flags resources that are out of compliance with your baseline and provides mitigation strategies?",
            options: ["Load balancing", "Autoscaling", "Cloud-based auditing", "Service-level agreements"],
            answer: 2,
            explain: "Cloud-based auditing identifies resources out of compliance with your baseline and suggests how to mitigate.",
            es: {
              q: "¿Qué capacidad de la nube marca los recursos que no cumplen con su línea base y propone estrategias de mitigación?",
              options: ["El equilibrio de carga", "El escalado automático", "La auditoría basada en la nube", "Los acuerdos de nivel de servicio"],
              explain: "La auditoría basada en la nube identifica los recursos que no cumplen con su línea base y sugiere cómo mitigarlo."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statements about choosing a cloud service type for security.",
            parts: [
              "If you want maximum control of security, choose ",
              { options: ["SaaS", "IaaS", "PaaS"], answer: 1 },
              ". If you want patches and maintenance taken care of automatically, choose ",
              { options: ["IaaS", "PaaS or SaaS", "an on-premises datacenter"], answer: 1 },
              "."
            ],
            explain: "IaaS gives you physical resources while you manage the OS and software, including patches. PaaS and SaaS handle patches and maintenance for you.",
            es: {
              q: "Complete las afirmaciones sobre cómo elegir un tipo de servicio en la nube según la seguridad.",
              parts: [
                "Si quiere el máximo control de la seguridad, elija ",
                { options: ["SaaS", "IaaS", "PaaS"] },
                ". Si quiere que los parches y el mantenimiento se gestionen automáticamente, elija ",
                { options: ["IaaS", "PaaS o SaaS", "un centro de datos local"] },
                "."
              ],
              explain: "IaaS le da recursos físicos mientras usted administra el sistema operativo y el software, incluidos los parches. PaaS y SaaS se ocupan de los parches y el mantenimiento."
            }
          },
          {
            type: "single",
            q: "A company is concerned about distributed denial of service (DDoS) attacks against its services. Which statement reflects the module?",
            options: [
              "The customer must handle DDoS attacks alone in every cloud service type",
              "Cloud providers are typically well suited to handle DDoS attacks",
              "DDoS attacks only affect on-premises environments, never cloud services",
              "DDoS protection is only available when you use IaaS"
            ],
            answer: 1,
            explain: "The module notes that cloud providers are typically well suited to handle DDoS attacks, which makes your network more robust and secure.",
            es: {
              q: "A una empresa le preocupan los ataques de denegación de servicio distribuido (DDoS) contra sus servicios. ¿Qué afirmación refleja el módulo?",
              options: [
                "El cliente debe gestionar solo los ataques DDoS en todos los tipos de servicio en la nube",
                "Los proveedores de nube suelen estar bien preparados para gestionar ataques DDoS",
                "Los ataques DDoS solo afectan a los entornos locales, nunca a los servicios en la nube",
                "La protección contra DDoS solo está disponible si usa IaaS"
              ],
              explain: "El módulo indica que los proveedores de nube suelen estar bien preparados para gestionar ataques DDoS, lo que hace más robusta y segura su red."
            }
          },
          {
            type: "multi",
            q: "Which two cloud capabilities support governance and compliance?",
            options: ["Templates that enforce your standards", "Cloud-based auditing", "Vertical scaling", "The Azure Pricing Calculator", "Load balancing"],
            answers: [0, 1],
            explain: "Templates keep deployments within your standards, and auditing flags resources that drift out of compliance. The other options address performance or cost.",
            es: {
              q: "¿Cuáles son dos capacidades de la nube que contribuyen a la gobernanza y el cumplimiento?",
              options: ["Las plantillas que aplican sus estándares", "La auditoría basada en la nube", "El escalado vertical", "La Calculadora de precios de Azure", "El equilibrio de carga"],
              explain: "Las plantillas mantienen las implementaciones dentro de sus estándares y la auditoría marca los recursos que dejan de cumplir. Las otras opciones apuntan al rendimiento o al costo."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Depending on your operating model, software patches and updates may be applied automatically.", answer: true, explain: "Automatic patching depends on the operating model and helps with governance and security." },
              { s: "With IaaS, the cloud provider manages the operating systems and installed software for you.", answer: false, explain: "IaaS gives you physical resources; you manage the OS and installed software, including patches." },
              { s: "Establishing a good governance footprint early helps keep your cloud environment updated, secure and well managed.", answer: true, explain: "That's the module's closing recommendation." }
            ],
            es: {
              statements: [
                { s: "Según su modelo operativo, los parches y las actualizaciones de software pueden aplicarse automáticamente.", explain: "La aplicación automática de parches depende del modelo operativo y ayuda a la gobernanza y la seguridad." },
                { s: "Con IaaS, el proveedor de nube administra por usted los sistemas operativos y el software instalado.", explain: "IaaS le da recursos físicos; usted administra el sistema operativo y el software instalado, incluidos los parches." },
                { s: "Establecer una buena gobernanza desde el principio ayuda a mantener el entorno en la nube actualizado, seguro y bien administrado.", explain: "Es la recomendación con la que cierra el módulo." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "manageability",
      name: "Describe the benefits of manageability in the cloud",
      es: { name: "Descripción de las ventajas de la capacidad de administración en la nube" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each capability to the type of manageability it belongs to.",
            values: ["Management of the cloud", "Management in the cloud"],
            targets: [
              { t: "Automatically replacing failing resources", answer: 0 },
              { t: "Running PowerShell scripts", answer: 1 },
              { t: "Receiving automatic alerts based on configured metrics", answer: 0 },
              { t: "Using a web portal", answer: 1 }
            ],
            explain: "Management of the cloud is about your resources: autoscaling, templates, health monitoring and alerts. Management in the cloud is how you manage: portal, CLI, APIs and PowerShell.",
            es: {
              q: "Relacione cada capacidad con el tipo de administración al que pertenece.",
              values: ["Administración de la nube", "Administración en la nube"],
              targets: [
                { t: "Reemplazar automáticamente los recursos que fallan" },
                { t: "Ejecutar scripts de PowerShell" },
                { t: "Recibir alertas automáticas según las métricas configuradas" },
                { t: "Usar un portal web" }
              ],
              explain: "La administración de la nube se refiere a sus recursos: escalado automático, plantillas, supervisión del estado y alertas. La administración en la nube es cómo administra: portal, CLI, API y PowerShell."
            }
          },
          {
            type: "multi",
            q: "Which two are ways you can manage your cloud environment and resources (management in the cloud)?",
            options: ["A command line interface", "APIs", "Automatic scaling", "Health monitoring", "Preconfigured templates"],
            answers: [0, 1],
            explain: "Management in the cloud lists a web portal, a CLI, APIs and PowerShell. Autoscaling, health monitoring and templates are management of the cloud.",
            es: {
              q: "¿Cuáles son dos formas de administrar su entorno y sus recursos en la nube (administración en la nube)?",
              options: ["Una interfaz de línea de comandos", "Las API", "El escalado automático", "La supervisión del estado", "Las plantillas preconfiguradas"],
              explain: "La administración en la nube incluye un portal web, una CLI, las API y PowerShell. El escalado automático, la supervisión del estado y las plantillas son administración de la nube."
            }
          },
          {
            type: "single",
            q: "An operations team wants to stop configuring each new resource by hand. Which capability addresses this?",
            options: ["Monitoring resource health in the portal after each deployment", "Deploying from a template", "Receiving alerts on configured metrics", "Scaling resources vertically"],
            answer: 1,
            explain: "Deploying from a preconfigured template removes the need for manual configuration and keeps configurations consistent.",
            es: {
              q: "Un equipo de operaciones quiere dejar de configurar a mano cada recurso nuevo. ¿Qué capacidad resuelve esto?",
              options: ["Supervisar el estado de los recursos en el portal después de cada implementación", "Implementar desde una plantilla", "Recibir alertas sobre métricas configuradas", "Escalar recursos verticalmente"],
              explain: "Implementar desde una plantilla preconfigurada elimina la configuración manual y mantiene configuraciones coherentes."
            }
          },
          {
            type: "single",
            q: "You want to learn about performance problems in real time without watching dashboards all day. What should you set up?",
            options: ["Metric-based alerts", "A deployment template that includes a monitoring dashboard", "A service-level agreement", "A PowerShell module"],
            answer: 0,
            explain: "Automatic alerts based on configured metrics keep you aware of performance in real time.",
            es: {
              q: "Quiere enterarse de los problemas de rendimiento en tiempo real sin mirar paneles todo el día. ¿Qué debe configurar?",
              options: ["Alertas basadas en métricas", "Una plantilla de implementación que incluya un panel de supervisión", "Un acuerdo de nivel de servicio", "Un módulo de PowerShell"],
              explain: "Las alertas automáticas basadas en métricas configuradas le permiten conocer el rendimiento en tiempo real."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about manageability.",
            parts: [
              "Automatically scaling resources based on need is an example of ",
              { options: ["management in the cloud", "management of the cloud", "cost predictability"], answer: 1 },
              ", while using a command line interface is an example of ",
              { options: ["management of the cloud", "management in the cloud", "reliability"], answer: 1 },
              "."
            ],
            explain: "Autoscaling is something you do with your resources (management of the cloud). A CLI is a way of managing (management in the cloud).",
            es: {
              q: "Complete la afirmación sobre la capacidad de administración.",
              parts: [
                "Escalar recursos automáticamente según la necesidad es un ejemplo de ",
                { options: ["administración en la nube", "administración de la nube", "previsibilidad de costos"] },
                ", mientras que usar una interfaz de línea de comandos es un ejemplo de ",
                { options: ["administración de la nube", "administración en la nube", "confiabilidad"] },
                "."
              ],
              explain: "El escalado automático es algo que se hace con los recursos (administración de la nube). Una CLI es una forma de administrar (administración en la nube)."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "In the cloud, you can monitor the health of resources and automatically replace failing resources.", answer: true, explain: "It's one of the listed capabilities of management of the cloud." },
              { s: "Cloud resources can only be managed through a web portal.", answer: false, explain: "You can also use a CLI, APIs and PowerShell." },
              { s: "Combining templates with CLI or PowerShell automation helps maintain consistent configurations.", answer: true, explain: "The module's example shows this combination reduces manual effort and keeps configurations consistent." }
            ],
            es: {
              statements: [
                { s: "En la nube se puede supervisar el estado de los recursos y reemplazar automáticamente los que fallan.", explain: "Es una de las capacidades listadas de la administración de la nube." },
                { s: "Los recursos en la nube solo se pueden administrar mediante un portal web.", explain: "También se pueden usar una CLI, las API y PowerShell." },
                { s: "Combinar plantillas con automatización por CLI o PowerShell ayuda a mantener configuraciones coherentes.", explain: "El ejemplo del módulo muestra que esa combinación reduce el trabajo manual y mantiene coherentes las configuraciones." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "sustainability",
      name: "Describe sustainability considerations in the cloud",
      es: { name: "Descripción de las consideraciones de sostenibilidad en la nube" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5a-describe-sustainability-cloud",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A development environment is only used during business hours. Which practice supports sustainability without affecting the team?",
            options: [
              "Leave it running so developers never wait",
              "Automatically shut it down overnight and on weekends",
              "Scale it up so it finishes work faster",
              "Duplicate it in a second region"
            ],
            answer: 1,
            explain: "Shutting down an environment outside business hours reduces unnecessary consumption while still meeting the team's needs.",
            es: {
              q: "Un entorno de desarrollo solo se usa en horario laboral. ¿Qué práctica contribuye a la sostenibilidad sin afectar al equipo?",
              options: [
                "Dejarlo encendido para que los desarrolladores nunca esperen",
                "Apagarlo automáticamente por la noche y los fines de semana",
                "Escalarlo verticalmente para que termine el trabajo más rápido",
                "Duplicarlo en una segunda región"
              ],
              explain: "Apagar un entorno fuera del horario laboral reduce el consumo innecesario y sigue cubriendo las necesidades del equipo."
            }
          },
          {
            type: "multi",
            q: "Which two practices support sustainability in the cloud?",
            options: [
              "Turning off or deallocating resources that aren't in use",
              "Scaling resources down when demand decreases",
              "Overprovisioning to handle any possible peak",
              "Keeping test environments running permanently",
              "Choosing the largest virtual machine size by default"
            ],
            answers: [0, 1],
            explain: "Deallocating unused resources and scaling down with demand reduce waste. The other options create the overprovisioning the practices aim to avoid.",
            es: {
              q: "¿Cuáles son dos prácticas que contribuyen a la sostenibilidad en la nube?",
              options: [
                "Apagar o desasignar los recursos que no se usan",
                "Reducir los recursos cuando disminuye la demanda",
                "Sobreaprovisionar para cubrir cualquier pico posible",
                "Mantener los entornos de prueba encendidos de forma permanente",
                "Elegir por defecto el tamaño de máquina virtual más grande"
              ],
              explain: "Desasignar recursos sin uso y reducirlos según la demanda disminuye el desperdicio. Las otras opciones generan el sobreaprovisionamiento que las prácticas buscan evitar."
            }
          },
          {
            type: "single",
            q: "Why can cloud computing improve resource efficiency compared with many on-premises environments?",
            options: [
              "Large-scale operation can improve utilization compared with isolated environments",
              "Cloud datacenters don't consume energy",
              "Customers no longer need to optimize their deployments",
              "Every cloud resource scales down automatically when it's idle"
            ],
            answer: 0,
            explain: "Large-scale operation can improve utilization compared with isolated on-premises environments. Teams still need to optimize to get the benefit.",
            es: {
              q: "¿Por qué la informática en la nube puede mejorar la eficiencia de los recursos frente a muchos entornos locales?",
              options: [
                "Porque operar a gran escala puede mejorar el aprovechamiento frente a entornos aislados",
                "Porque los centros de datos en la nube no consumen energía",
                "Porque los clientes ya no necesitan optimizar sus implementaciones",
                "Porque todos los recursos en la nube se reducen solos cuando están ociosos"
              ],
              explain: "Operar a gran escala puede mejorar el aprovechamiento frente a entornos locales aislados. Los equipos igual necesitan optimizar para obtener el beneficio."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about sustainability habits.",
            parts: [
              "At a fundamentals level, sustainability in the cloud is tied to good operational habits: right-size, ",
              { options: ["overprovision", "automate", "duplicate"], answer: 1 },
              ", monitor, and ",
              { options: ["continuously optimize", "buy capacity ahead", "centralize everything"], answer: 0 },
              "."
            ],
            explain: "The unit sums it up as right-size, automate, monitor and continuously optimize.",
            es: {
              q: "Complete la afirmación sobre los hábitos de sostenibilidad.",
              parts: [
                "En lo fundamental, la sostenibilidad en la nube está ligada a buenos hábitos operativos: ajustar el tamaño, ",
                { options: ["sobreaprovisionar", "automatizar", "duplicar"] },
                ", supervisar y ",
                { options: ["optimizar continuamente", "comprar capacidad por adelantado", "centralizar todo"] },
                "."
              ],
              explain: "La unidad lo resume en ajustar el tamaño, automatizar, supervisar y optimizar continuamente."
            }
          },
          {
            type: "single",
            q: "Which practice directly reduces overprovisioning?",
            options: [
              "Deploying extra capacity just in case",
              "Choosing efficient services and configurations",
              "Disabling monitoring to save resources",
              "Scaling up every time an alert fires"
            ],
            answer: 1,
            explain: "Choosing efficient services and configurations is the listed practice for reducing overprovisioning. Monitoring is needed to find optimization opportunities.",
            es: {
              q: "¿Qué práctica reduce directamente el sobreaprovisionamiento?",
              options: [
                "Implementar capacidad adicional por las dudas",
                "Elegir servicios y configuraciones eficientes",
                "Desactivar la supervisión para ahorrar recursos",
                "Escalar verticalmente cada vez que salta una alerta"
              ],
              explain: "Elegir servicios y configuraciones eficientes es la práctica listada para reducir el sobreaprovisionamiento. La supervisión es necesaria para encontrar oportunidades de optimización."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Using governance and monitoring to track usage trends supports sustainability.", answer: true, explain: "Tracking usage trends lets you optimize deployments over time." },
              { s: "Moving to the cloud makes workloads sustainable automatically, without any optimization.", answer: false, explain: "The cloud supports sustainability when teams actively optimize how resources are deployed and used." },
              { s: "Matching deployed resources to actual demand reduces waste.", answer: true, explain: "The unit names this as a way to reduce waste in Azure." }
            ],
            es: {
              statements: [
                { s: "Usar la gobernanza y la supervisión para seguir las tendencias de uso contribuye a la sostenibilidad.", explain: "Seguir las tendencias de uso permite optimizar las implementaciones con el tiempo." },
                { s: "Migrar a la nube hace que las cargas de trabajo sean sostenibles automáticamente, sin ninguna optimización.", explain: "La nube contribuye a la sostenibilidad cuando los equipos optimizan de forma activa cómo se implementan y usan los recursos." },
                { s: "Ajustar los recursos implementados a la demanda real reduce el desperdicio.", explain: "La unidad lo menciona como forma de reducir el desperdicio en Azure." }
              ]
            }
          }
        ]
      }
    }
  ]
});
