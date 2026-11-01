// AZ-900 > Describe Azure management and governance > Describe cost management in Azure
Catalog.module("az-900", {
  id: "cost-management",
  name: "Describe cost management in Azure",
  es: { name: "Descripción de la administración de costos en Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Cost optimization",
        q: "A production SQL workload runs 24/7 on the same VM size and isn't expected to change for years. Which pricing option offers the best long-term savings?",
        options: ["Reservations", "Spot pricing", "Pay-as-you-go", "Azure Marketplace billing"],
        answer: 0,
        explain: "Reservations suit stable, predictable, long-running workloads with a one- or three-year commitment. Spot capacity can be evicted at any time.",
        es: {
          topic: "Optimización de costos",
          q: "Una carga de SQL de producción se ejecuta 24/7 en el mismo tamaño de máquina virtual y no se espera que cambie en años. ¿Qué opción de precios ofrece el mayor ahorro a largo plazo?",
          options: ["Las reservas", "Los precios de Spot", "El pago por uso", "La facturación de Azure Marketplace"],
          explain: "Las reservas son adecuadas para cargas estables, predecibles y de larga duración, con un compromiso de uno o tres años. La capacidad de Spot se puede desalojar en cualquier momento."
        }
      },
      {
        type: "match",
        topic: "Cost Management",
        q: "Match each situation to the type of cost alert it generates.",
        values: ["Budget alert", "Credit alert", "Department spending quota alert"],
        targets: [
          { t: "Monthly spend for a dev/test subscription reaches 80% of the limit you set", answer: 0 },
          { t: "An Enterprise Agreement customer has used 90% of its Azure Prepayment", answer: 1 },
          { t: "An EA department reaches 75% of its configured quota", answer: 2 }
        ],
        explain: "Budget alerts fire at thresholds you define; credit alerts fire at 90% and 100% of EA Prepayment; department quota alerts are EA-specific.",
        es: {
          topic: "Cost Management",
          q: "Relacione cada situación con el tipo de alerta de costos que genera.",
          values: ["Alerta de presupuesto", "Alerta de crédito", "Alerta de cuota de gasto del departamento"],
          targets: [
            { t: "El gasto mensual de una suscripción de desarrollo y pruebas llega al 80 % del límite que definió" },
            { t: "Un cliente con Contrato Enterprise usó el 90 % de su Prepago de Azure" },
            { t: "Un departamento con EA llega al 75 % de su cuota configurada" }
          ],
          explain: "Las alertas de presupuesto se disparan en los umbrales que usted define; las de crédito, al 90 % y 100 % del Prepago de EA; las de cuota de departamento son propias de EA."
        }
      },
      {
        type: "single",
        topic: "Tags",
        q: "Finance wants monthly cost reports per internal cost center across many resource groups and subscriptions. What should the team apply to resources?",
        options: ["A CostCenter tag", "A resource lock", "A separate region per team", "A Spot pricing policy"],
        answer: 0,
        explain: "Tags group resources for cost reporting and allocation to internal cost centers, regardless of where they're deployed.",
        es: {
          topic: "Etiquetas",
          q: "Finanzas quiere informes de costos mensuales por centro de costos interno entre muchos grupos de recursos y suscripciones. ¿Qué debe aplicar el equipo a los recursos?",
          options: ["Una etiqueta CostCenter", "Un bloqueo de recursos", "Una región distinta por equipo", "Una directiva de precios de Spot"],
          explain: "Las etiquetas agrupan recursos para informar costos y asignarlos a centros de costos internos, sin importar dónde estén implementados."
        }
      },
      {
        type: "multi",
        topic: "Cost factors",
        q: "Which two factors can change the price of the same virtual machine?",
        options: ["The region where it's deployed", "Operating system licensing", "The name of the resource group", "The number of tags applied", "The color theme of the portal"],
        answers: [0, 1],
        explain: "Resource settings such as OS licensing, cores and storage, plus the region, affect cost. Names and tags don't change the price.",
        es: {
          topic: "Factores de costo",
          q: "¿Cuáles son dos factores que pueden cambiar el precio de la misma máquina virtual?",
          options: ["La región donde se implementa", "Las licencias del sistema operativo", "El nombre del grupo de recursos", "La cantidad de etiquetas aplicadas", "El tema de color del portal"],
          explain: "La configuración del recurso, como las licencias del sistema operativo, los núcleos y el almacenamiento, además de la región, afectan el costo. Los nombres y las etiquetas no cambian el precio."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Pricing calculator", s: "Adding resources to the pricing calculator provisions them in a trial state.", answer: false, explain: "Nothing is provisioned and you aren't charged; it's for estimates only." },
          { topic: "Cost factors", s: "Some inbound data transfers into Azure datacenters are free.", answer: true, explain: "Outbound transfers are priced by billing zone." },
          { topic: "Tags", s: "Resources inherit tags from their resource group automatically.", answer: false, explain: "Resources don't inherit tags from subscriptions or resource groups." }
        ],
        es: {
          statements: [
            { topic: "Calculadora de precios", s: "Agregar recursos a la calculadora de precios los aprovisiona en un estado de prueba.", explain: "No se aprovisiona nada ni se cobra; solo sirve para estimar." },
            { topic: "Factores de costo", s: "Algunas transferencias de datos entrantes a los centros de datos de Azure son gratuitas.", explain: "Las transferencias salientes se cobran según la zona de facturación." },
            { topic: "Etiquetas", s: "Los recursos heredan automáticamente las etiquetas de su grupo de recursos.", explain: "Los recursos no heredan etiquetas de suscripciones ni de grupos de recursos." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Cost Management",
        q: "Complete the statement about budgets.",
        parts: [
          "A budget can be scoped to a subscription, resource group or service type, and when it reaches its threshold it can ",
          { options: ["trigger automation that shuts down nonproduction resources", "move the resources to a cheaper region", "convert the resources to Spot pricing"], answer: 0 },
          ". In the Azure portal, budgets are defined by ",
          { options: ["cost", "consumption usage only", "number of resources"], answer: 0 },
          "."
        ],
        explain: "Budgets can trigger automation and alerts. In the portal they're defined by cost; the Consumption API also allows usage-based budgets.",
        es: {
          topic: "Cost Management",
          q: "Complete la afirmación sobre los presupuestos.",
          parts: [
            "Un presupuesto puede abarcar una suscripción, un grupo de recursos o un tipo de servicio, y al llegar al umbral puede ",
            { options: ["disparar una automatización que apague recursos que no son de producción", "mover los recursos a una región más barata", "pasar los recursos a precios de Spot"] },
            ". En Azure Portal, los presupuestos se definen por ",
            { options: ["costo", "uso de consumo únicamente", "cantidad de recursos"] },
            "."
          ],
          explain: "Los presupuestos pueden disparar automatizaciones y alertas. En el portal se definen por costo; la API de consumo también permite presupuestos por uso."
        }
      },
      {
        type: "single",
        topic: "Cost factors",
        q: "A team deletes a VM to save money, but charges continue. What is the most likely cause?",
        options: [
          "Associated resources such as disks and network interfaces weren't deprovisioned",
          "Deleted VMs keep billing for 30 days in case the deletion needs to be reverted",
          "The pricing calculator is still running an estimate",
          "Tags on the VM keep generating charges"
        ],
        answer: 0,
        explain: "Provisioning a VM also creates storage and networking resources that may not be removed with it, so maintaining the environment matters.",
        es: {
          topic: "Factores de costo",
          q: "Un equipo elimina una máquina virtual para ahorrar, pero los cargos siguen. ¿Cuál es la causa más probable?",
          options: [
            "Los recursos asociados, como discos e interfaces de red, no se desaprovisionaron",
            "Las máquinas virtuales eliminadas se siguen facturando 30 días por si hay que revertir la eliminación",
            "La calculadora de precios sigue ejecutando una estimación",
            "Las etiquetas de la máquina virtual siguen generando cargos"
          ],
          explain: "Aprovisionar una máquina virtual también crea recursos de almacenamiento y red que pueden no eliminarse con ella; por eso importa mantener el entorno."
        }
      },
      {
        type: "single",
        topic: "Cost optimization",
        q: "A company runs a mix of web and API workloads that shift between VM sizes and other compute services. It wants a commitment discount without locking into one instance type. What fits?",
        options: ["Azure savings plan for compute", "Reservations for one VM family", "Spot Virtual Machines", "A department spending quota"],
        answer: 0,
        explain: "A savings plan commits to an hourly spend on eligible compute for one or three years and applies savings across services.",
        es: {
          topic: "Optimización de costos",
          q: "Una empresa ejecuta cargas web y de API que cambian entre tamaños de máquina virtual y otros servicios de proceso. Quiere un descuento por compromiso sin atarse a un tipo de instancia. ¿Qué corresponde?",
          options: ["El plan de ahorro de Azure para proceso", "Reservas para una familia de máquinas virtuales", "Las máquinas virtuales de Spot", "Una cuota de gasto por departamento"],
          explain: "El plan de ahorro compromete un gasto por hora en proceso elegible durante uno o tres años y aplica el ahorro entre servicios."
        }
      },
      {
        type: "single",
        topic: "Pricing calculator",
        q: "Which tool should you use to estimate Azure costs, now that the Total Cost of Ownership (TCO) calculator has been retired?",
        options: ["The pricing calculator", "Cost analysis", "Azure Advisor", "The Service Trust Portal"],
        answer: 0,
        explain: "The pricing calculator estimates costs before deployment. Cost analysis reviews actual spend after resources exist.",
        es: {
          topic: "Calculadora de precios",
          q: "¿Qué herramienta debe usar para estimar costos de Azure, ahora que se retiró la calculadora del costo total de propiedad (TCO)?",
          options: ["La calculadora de precios", "El análisis de costos", "Azure Advisor", "El Portal de confianza de servicios"],
          explain: "La calculadora de precios estima costos antes de implementar. El análisis de costos revisa el gasto real cuando los recursos ya existen."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Cost factors", s: "Moving data within Europe is generally cheaper than moving it from Europe to Asia.", answer: true, explain: "Network traffic cost depends on geography and billing zones." },
          { topic: "Cost factors", s: "Billing zones and availability zones are the same thing.", answer: false, explain: "A billing zone groups regions for data-transfer pricing." },
          { topic: "Cost optimization", s: "A workload that starts as interruptible may later need to move from Spot to a more predictable pricing model.", answer: true, explain: "Pricing choices should be reviewed as usage changes." }
        ],
        es: {
          statements: [
            { topic: "Factores de costo", s: "Mover datos dentro de Europa suele ser más barato que moverlos de Europa a Asia.", explain: "El costo del tráfico de red depende de la geografía y las zonas de facturación." },
            { topic: "Factores de costo", s: "Las zonas de facturación y las zonas de disponibilidad son lo mismo.", explain: "Una zona de facturación agrupa regiones para el precio de transferencia de datos." },
            { topic: "Optimización de costos", s: "Una carga que empieza siendo interrumpible puede necesitar pasar después de Spot a un modelo de precios más predecible.", explain: "Las opciones de precios se deben revisar a medida que cambia el uso." }
          ]
        }
      },
      {
        type: "single",
        topic: "Cost factors",
        q: "A team buys a preconfigured backup solution from a third-party vendor through Azure Marketplace. How is it billed?",
        options: [
          "Azure services used plus the vendor's charges, with a structure set by the vendor",
          "Only the underlying Azure services, at no extra cost",
          "A flat Microsoft fee identical for all Marketplace products, regardless of the vendor or usage",
          "Nothing, since Marketplace items are always free"
        ],
        answer: 0,
        explain: "Marketplace purchases may include both Azure usage and the vendor's services; the vendor sets the billing structure.",
        es: {
          topic: "Factores de costo",
          q: "Un equipo compra una solución de copias de seguridad preconfigurada de un proveedor externo en Azure Marketplace. ¿Cómo se factura?",
          options: [
            "Los servicios de Azure usados más los cargos del proveedor, con una estructura que define el proveedor",
            "Solo los servicios de Azure subyacentes, sin costo adicional",
            "Una tarifa fija de Microsoft igual para todos los productos de Marketplace, sin importar el proveedor ni el uso",
            "No se factura, porque los productos de Marketplace siempre son gratuitos"
          ],
          explain: "Las compras en Marketplace pueden incluir el uso de Azure y los servicios del proveedor; el proveedor define la estructura de facturación."
        }
      },
      {
        type: "single",
        topic: "Tags",
        q: "A company wants every new resource to include an Owner tag, and wants removed tags to be reapplied. What should it use?",
        options: ["Azure Policy", "Cost analysis", "The pricing calculator", "Spot pricing"],
        answer: 0,
        explain: "Azure Policy can require tags on new resources and reapply tags that were removed.",
        es: {
          topic: "Etiquetas",
          q: "Una empresa quiere que todo recurso nuevo tenga una etiqueta Owner y que las etiquetas eliminadas se vuelvan a aplicar. ¿Qué debe usar?",
          options: ["Azure Policy", "El análisis de costos", "La calculadora de precios", "Los precios de Spot"],
          explain: "Azure Policy puede exigir etiquetas en los recursos nuevos y volver a aplicar las que se eliminaron."
        }
      }
    ]
  },
  units: [
    {
      id: "cost-factors",
      name: "Describe factors that can affect costs in Azure",
      es: { name: "Describir factores que pueden afectar a los costos en Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-describe-factors-affect-costs-azure",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "A nightly batch data-processing job can be interrupted and restarted without harm. Which option can reduce its cost the most?",
            options: ["Azure Spot Virtual Machines", "A three-year reservation", "Pay-as-you-go on dedicated VMs", "A larger VM size"],
            answer: 0,
            explain: "Spot VMs use unused capacity at lower prices but can be evicted, which suits interruptible workloads.",
            es: {
              q: "Un proceso de datos por lotes nocturno se puede interrumpir y reiniciar sin problemas. ¿Qué opción puede reducir más su costo?",
              options: ["Las máquinas virtuales de Spot de Azure", "Una reserva a tres años", "El pago por uso en máquinas dedicadas", "Un tamaño de máquina virtual más grande"],
              explain: "Las máquinas virtuales de Spot usan capacidad sin usar a menor precio pero pueden desalojarse, lo que encaja con cargas interrumpibles."
            }
          },
          {
            type: "match",
            q: "Match each example to the cost factor it illustrates.",
            values: ["Geography", "Subscription type", "Azure Marketplace", "Maintenance"],
            targets: [
              { t: "The same storage account costs more in one region than another", answer: 0 },
              { t: "A free account includes credit for the first 30 days", answer: 1 },
              { t: "A third-party vendor charges for its preconfigured web server", answer: 2 },
              { t: "Orphaned disks keep billing after a VM is deleted", answer: 3 }
            ],
            explain: "Regional pricing reflects geography, usage allowances depend on the subscription type, vendors bill through Marketplace, and leftover resources are a maintenance issue.",
            es: {
              q: "Relacione cada ejemplo con el factor de costo que ilustra.",
              values: ["Geografía", "Tipo de suscripción", "Azure Marketplace", "Mantenimiento"],
              targets: [
                { t: "La misma cuenta de almacenamiento cuesta más en una región que en otra" },
                { t: "Una cuenta gratuita incluye crédito para los primeros 30 días" },
                { t: "Un proveedor externo cobra por su servidor web preconfigurado" },
                { t: "Los discos huérfanos se siguen cobrando después de eliminar la máquina virtual" }
              ],
              explain: "El precio regional refleja la geografía, las asignaciones de uso dependen del tipo de suscripción, los proveedores cobran por Marketplace y los recursos que quedan son un tema de mantenimiento."
            }
          },
          {
            type: "single",
            q: "Why can the same Azure resource cost different amounts in different regions?",
            options: [
              "Power, labor, taxes and fees vary by location",
              "Each region uses a different currency for billing",
              "Prices depend on how many tags the resource has",
              "Only the region closest to the customer is discounted"
            ],
            answer: 0,
            explain: "Global infrastructure brings global pricing differences driven by local costs.",
            es: {
              q: "¿Por qué el mismo recurso de Azure puede costar distinto en regiones diferentes?",
              options: [
                "La energía, la mano de obra, los impuestos y las tasas varían según la ubicación",
                "Cada región factura en una moneda distinta",
                "El precio depende de cuántas etiquetas tenga el recurso",
                "Solo tiene descuento la región más cercana al cliente"
              ],
              explain: "La infraestructura global trae diferencias de precio globales, impulsadas por los costos locales."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about network traffic costs.",
            parts: [
              "Data ",
              { options: ["leaving", "entering", "stored in"], answer: 0 },
              " Azure datacenters is priced based on ",
              { options: ["billing zones", "availability zones", "resource groups"], answer: 0 },
              ", while some inbound transfers are free."
            ],
            explain: "Outbound data transfer pricing is based on billing zones, which are geographic groupings of regions for billing.",
            es: {
              q: "Complete la afirmación sobre los costos de tráfico de red.",
              parts: [
                "Los datos que ",
                { options: ["salen de", "entran a", "se guardan en"] },
                " los centros de datos de Azure se cobran según las ",
                { options: ["zonas de facturación", "zonas de disponibilidad", "grupos de recursos"] },
                ", mientras que algunas transferencias entrantes son gratuitas."
              ],
              explain: "El precio de la transferencia de datos saliente se basa en zonas de facturación, que son agrupaciones geográficas de regiones con fines de facturación."
            }
          },
          {
            type: "multi",
            q: "Which two are discount options for predictable or flexible compute usage?",
            options: ["Reservations", "Azure savings plan for compute", "Resource locks", "Billing zones", "Azure Marketplace certification"],
            answers: [0, 1],
            explain: "Reservations commit to specific resources and savings plans commit to an hourly spend, both for one or three years.",
            es: {
              q: "¿Cuáles son dos opciones de descuento para un uso de proceso predecible o flexible?",
              options: ["Las reservas", "El plan de ahorro de Azure para proceso", "Los bloqueos de recursos", "Las zonas de facturación", "La certificación de Azure Marketplace"],
              explain: "Las reservas comprometen recursos específicos y los planes de ahorro, un gasto por hora; ambos por uno o tres años."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "With pay-as-you-go, using more compute in a billing cycle means paying more for that cycle.", answer: true, explain: "You pay for what you use during each billing cycle." },
              { s: "All solutions in Azure Marketplace are certified and compliant with Azure policies and standards.", answer: true, explain: "Certification policies vary by solution type." },
              { s: "Azure Spot capacity is guaranteed for the life of the workload.", answer: false, explain: "Spot workloads can be evicted when Azure needs the capacity back." }
            ],
            es: {
              statements: [
                { s: "Con el pago por uso, usar más proceso en un ciclo de facturación significa pagar más en ese ciclo.", explain: "Se paga lo que se usa en cada ciclo de facturación." },
                { s: "Todas las soluciones de Azure Marketplace están certificadas y cumplen las directivas y estándares de Azure.", explain: "Las directivas de certificación varían según el tipo de solución." },
                { s: "La capacidad de Spot de Azure está garantizada durante toda la vida de la carga.", explain: "Las cargas de Spot se pueden desalojar cuando Azure necesita recuperar la capacidad." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "pricing-calculator",
      name: "Explore the pricing calculator",
      es: { name: "Exploración de la calculadora de precios" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/3-compare-pricing-total-cost-of-ownership-calculators",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "A team plans a new web app with an App Service plan, a managed database and storage, and wants to compare monthly costs across regions and tiers before deploying. What should it use?",
            options: ["The pricing calculator", "Cost analysis in Cost Management", "Azure Service Health", "A budget alert"],
            answer: 0,
            explain: "The pricing calculator models a solution and compares estimates across regions, tiers and redundancy before anything is deployed.",
            es: {
              q: "Un equipo planifica una aplicación web nueva con un plan de App Service, una base de datos administrada y almacenamiento, y quiere comparar costos mensuales entre regiones y niveles antes de implementar. ¿Qué debe usar?",
              options: ["La calculadora de precios", "El análisis de costos de Cost Management", "Azure Service Health", "Una alerta de presupuesto"],
              explain: "La calculadora de precios modela una solución y compara estimaciones entre regiones, niveles y redundancia antes de implementar nada."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The pricing calculator's results are only estimates.", answer: true, explain: "It's for information purposes only." },
              { s: "You're charged for the services you select in the pricing calculator.", answer: false, explain: "Nothing is provisioned and nothing is charged." },
              { s: "The Total Cost of Ownership (TCO) calculator has been retired.", answer: true, explain: "The pricing calculator remains available." }
            ],
            es: {
              statements: [
                { s: "Los resultados de la calculadora de precios son solo estimaciones.", explain: "Es solo con fines informativos." },
                { s: "Se le cobran los servicios que selecciona en la calculadora de precios.", explain: "No se aprovisiona ni se cobra nada." },
                { s: "La calculadora del costo total de propiedad (TCO) se retiró.", explain: "La calculadora de precios sigue disponible." }
              ]
            }
          },
          {
            type: "multi",
            q: "Which two can you account for in a pricing calculator estimate for storage?",
            options: ["The access tier", "The redundancy option", "The resource lock level", "The Azure Policy assignment", "The Advisor score"],
            answers: [0, 1],
            explain: "The calculator accounts for storage type, access tier and redundancy, along with compute and network costs.",
            es: {
              q: "¿Cuáles son dos elementos que puede tener en cuenta en una estimación de almacenamiento de la calculadora de precios?",
              options: ["El nivel de acceso", "La opción de redundancia", "El nivel de bloqueo del recurso", "La asignación de Azure Policy", "La puntuación de Advisor"],
              explain: "La calculadora considera el tipo de almacenamiento, el nivel de acceso y la redundancia, además de los costos de proceso y red."
            }
          },
          {
            type: "single",
            q: "How do teams commonly use a pricing calculator estimate after creating it?",
            options: [
              "As a baseline for budget approval, revisited when the architecture changes",
              "As a binding price quote that Microsoft must honor for the rest of the contract term",
              "As a deployment template that provisions the resources",
              "As a replacement for monitoring actual spend"
            ],
            answer: 0,
            explain: "The estimate is a planning baseline; actual spend is tracked later with Cost Management.",
            es: {
              q: "¿Cómo suelen usar los equipos una estimación de la calculadora de precios después de crearla?",
              options: [
                "Como base para aprobar el presupuesto, revisándola cuando cambia la arquitectura",
                "Como una cotización vinculante que Microsoft debe respetar durante todo el contrato",
                "Como una plantilla de implementación que aprovisiona los recursos",
                "Como reemplazo de la supervisión del gasto real"
              ],
              explain: "La estimación es una base de planificación; el gasto real se sigue después con Cost Management."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the pricing calculator.",
            parts: [
              "You can estimate ",
              { options: ["individual resources, a full solution or an example scenario", "only virtual machines", "only resources that are already deployed"], answer: 0 },
              ", and the estimate ",
              { options: ["doesn't provision anything", "creates the resources in a test subscription", "reserves capacity for 30 days"], answer: 0 },
              "."
            ],
            explain: "The calculator supports individual resources, solutions and example scenarios, and never provisions resources.",
            es: {
              q: "Complete la afirmación sobre la calculadora de precios.",
              parts: [
                "Puede estimar ",
                { options: ["recursos individuales, una solución completa o un escenario de ejemplo", "solo máquinas virtuales", "solo recursos ya implementados"] },
                ", y la estimación ",
                { options: ["no aprovisiona nada", "crea los recursos en una suscripción de prueba", "reserva capacidad por 30 días"] },
                "."
              ],
              explain: "La calculadora admite recursos individuales, soluciones y escenarios de ejemplo, y nunca aprovisiona recursos."
            }
          }
        ]
      }
    },
    {
      id: "cost-management-tool",
      name: "Describe the Microsoft Cost Management tool",
      es: { name: "Describir la herramienta Microsoft Cost Management" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/6-describe-azure-tool",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "After a deployment, a manager wants to see where costs accrue by subscription, resource group and service, and how they trend over the month. Which Cost Management feature fits?",
            options: ["Cost analysis", "The pricing calculator", "Credit alerts", "Resource tags"],
            answer: 0,
            explain: "Cost analysis shows aggregated and accumulated costs in various views to identify where spend accrues and trends.",
            es: {
              q: "Después de una implementación, un gerente quiere ver dónde se acumulan los costos por suscripción, grupo de recursos y servicio, y cómo evolucionan en el mes. ¿Qué característica de Cost Management corresponde?",
              options: ["El análisis de costos", "La calculadora de precios", "Las alertas de crédito", "Las etiquetas de recursos"],
              explain: "El análisis de costos muestra costos agregados y acumulados en distintas vistas para identificar dónde se acumula el gasto y sus tendencias."
            }
          },
          {
            type: "match",
            q: "Match each alert type to who it applies to or how it's triggered.",
            values: ["Budget alert", "Credit alert", "Department spending quota alert"],
            targets: [
              { t: "Generated automatically at 90% and 100% of Azure Prepayment", answer: 1 },
              { t: "Fires when spending reaches a threshold you define in a budget", answer: 0 },
              { t: "Emails department owners when a fixed share of the quota is reached", answer: 2 }
            ],
            explain: "Credit and department quota alerts are for Enterprise Agreement customers; budget alerts use thresholds you set.",
            es: {
              q: "Relacione cada tipo de alerta con a quién aplica o cómo se dispara.",
              values: ["Alerta de presupuesto", "Alerta de crédito", "Alerta de cuota de gasto del departamento"],
              targets: [
                { t: "Se genera automáticamente al 90 % y al 100 % del Prepago de Azure" },
                { t: "Se dispara cuando el gasto llega a un umbral que definió en un presupuesto" },
                { t: "Envía un correo a los responsables del departamento al alcanzar una parte fija de la cuota" }
              ],
              explain: "Las alertas de crédito y de cuota de departamento son para clientes con Contrato Enterprise; las de presupuesto usan umbrales que usted define."
            }
          },
          {
            type: "single",
            q: "A team wants nonproduction resources to shut down automatically when a monthly spending threshold is reached. What should it configure?",
            options: ["A budget that triggers automation", "A credit alert", "A resource tag named Shutdown", "A pricing calculator estimate"],
            answer: 0,
            explain: "Budgets can trigger automation that suspends or modifies resources when a threshold is reached.",
            es: {
              q: "Un equipo quiere que los recursos que no son de producción se apaguen automáticamente al llegar a un umbral de gasto mensual. ¿Qué debe configurar?",
              options: ["Un presupuesto que dispare una automatización", "Una alerta de crédito", "Una etiqueta de recurso llamada Shutdown", "Una estimación en la calculadora de precios"],
              explain: "Los presupuestos pueden disparar automatizaciones que suspenden o modifican recursos al alcanzar un umbral."
            }
          },
          {
            type: "multi",
            q: "Which two statements about budget alerts are true?",
            options: [
              "They can be created in the Azure portal or through the Azure Consumption API",
              "An alert email is sent to the budget's recipient list",
              "They're available only to Enterprise Agreement customers",
              "They fire only at 90% and 100% of the budget",
              "They're generated by Azure Advisor"
            ],
            answers: [0, 1],
            explain: "Budget alerts use thresholds you define, appear in cost alerts and email the recipients. Fixed 90%/100% thresholds describe credit alerts.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre las alertas de presupuesto?",
              options: [
                "Se pueden crear en Azure Portal o con la API de consumo de Azure",
                "Se envía un correo de alerta a la lista de destinatarios del presupuesto",
                "Solo están disponibles para clientes con Contrato Enterprise",
                "Solo se disparan al 90 % y al 100 % del presupuesto",
                "Las genera Azure Advisor"
              ],
              explain: "Las alertas de presupuesto usan umbrales que usted define, aparecen en las alertas de costos y envían correo a los destinatarios. Los umbrales fijos de 90 % y 100 % corresponden a las alertas de crédito."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Cost Management can help you notice accidentally provisioned resources before the invoice arrives.", answer: true, explain: "Cost analysis and alerts surface unexpected spend." },
              { s: "Azure Prepayment was previously called monetary commitment.", answer: true, explain: "It's for organizations with Enterprise Agreements." },
              { s: "Budgets can only be scoped to an entire subscription.", answer: false, explain: "They can be based on a subscription, resource group, service type or other criteria." }
            ],
            es: {
              statements: [
                { s: "Cost Management puede ayudar a detectar recursos aprovisionados por error antes de que llegue la factura.", explain: "El análisis de costos y las alertas muestran el gasto inesperado." },
                { s: "El Prepago de Azure antes se llamaba compromiso monetario.", explain: "Es para organizaciones con Contratos Enterprise." },
                { s: "Los presupuestos solo pueden abarcar una suscripción completa.", explain: "Se pueden basar en una suscripción, un grupo de recursos, un tipo de servicio u otros criterios." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Cost Management.",
            parts: [
              "Cost Management lets you check resource costs, create ",
              { options: ["alerts based on spend", "virtual machines", "resource locks"], answer: 0 },
              " and create ",
              { options: ["budgets that can automate resource management", "pricing estimates for new regions", "policies that enforce tags"], answer: 0 },
              "."
            ],
            explain: "The three pillars are cost analysis, cost alerts and budgets.",
            es: {
              q: "Complete la afirmación sobre Cost Management.",
              parts: [
                "Cost Management permite revisar los costos de los recursos, crear ",
                { options: ["alertas basadas en el gasto", "máquinas virtuales", "bloqueos de recursos"] },
                " y crear ",
                { options: ["presupuestos que pueden automatizar la administración de recursos", "estimaciones de precios para regiones nuevas", "directivas que exijan etiquetas"] },
                "."
              ],
              explain: "Los tres pilares son el análisis de costos, las alertas de costos y los presupuestos."
            }
          }
        ]
      }
    },
    {
      id: "tags",
      name: "Describe the purpose of tags",
      es: { name: "Describir el propósito de las etiquetas" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/7-describe-purpose-of-tags",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each tag usage to the purpose it serves.",
            values: ["Cost management", "Security", "Governance and compliance", "Operations management"],
            targets: [
              { t: "Allocating spend to internal cost centers", answer: 0 },
              { t: "Classifying data as public or confidential", answer: 1 },
              { t: "Identifying resources that must meet ISO 27001", answer: 2 },
              { t: "Grouping resources by how critical their availability is", answer: 3 }
            ],
            explain: "Tags support resource, cost, operations, security, governance and automation scenarios.",
            es: {
              q: "Relacione cada uso de etiquetas con el propósito que cumple.",
              values: ["Administración de costos", "Seguridad", "Gobernanza y cumplimiento", "Administración de operaciones"],
              targets: [
                { t: "Asignar el gasto a centros de costos internos" },
                { t: "Clasificar datos como públicos o confidenciales" },
                { t: "Identificar recursos que deben cumplir ISO 27001" },
                { t: "Agrupar recursos según cuán crítica es su disponibilidad" }
              ],
              explain: "Las etiquetas sirven para escenarios de recursos, costos, operaciones, seguridad, gobernanza y automatización."
            }
          },
          {
            type: "single",
            q: "What does a resource tag consist of?",
            options: ["A name and a value", "A policy and an assignment", "A lock and a scope", "A region and a billing zone"],
            answer: 0,
            explain: "Each tag is a name/value pair, and a resource can have one or more tags.",
            es: {
              q: "¿De qué se compone una etiqueta de recurso?",
              options: ["Un nombre y un valor", "Una directiva y una asignación", "Un bloqueo y un ámbito", "Una región y una zona de facturación"],
              explain: "Cada etiqueta es un par nombre-valor, y un recurso puede tener una o más etiquetas."
            }
          },
          {
            type: "multi",
            q: "Which two can you use to add, modify or delete resource tags?",
            options: ["Azure CLI", "Azure Resource Manager templates", "The pricing calculator", "Azure Service Health", "The Service Trust Portal"],
            answers: [0, 1],
            explain: "Tags can be managed through the portal, PowerShell, the Azure CLI, ARM templates or the REST API.",
            es: {
              q: "¿Cuáles son dos herramientas con las que puede agregar, modificar o eliminar etiquetas de recursos?",
              options: ["La CLI de Azure", "Las plantillas de Azure Resource Manager", "La calculadora de precios", "Azure Service Health", "El Portal de confianza de servicios"],
              explain: "Las etiquetas se administran con el portal, PowerShell, la CLI de Azure, plantillas ARM o la API REST."
            }
          },
          {
            type: "single",
            q: "A team applies an Environment tag to a resource group. What happens to the resources inside it?",
            options: [
              "Nothing; resources don't inherit tags from the resource group",
              "They inherit the tag automatically",
              "They inherit it, but only if they're created after the tag was applied",
              "The tag is copied to them once a day"
            ],
            answer: 0,
            explain: "Tags aren't inherited from subscriptions or resource groups, which allows different schemas at each level. Azure Policy can apply them if needed.",
            es: {
              q: "Un equipo aplica una etiqueta Environment a un grupo de recursos. ¿Qué pasa con los recursos que contiene?",
              options: [
                "Nada; los recursos no heredan etiquetas del grupo de recursos",
                "Heredan la etiqueta automáticamente",
                "La heredan, pero solo si se crean después de aplicar la etiqueta",
                "La etiqueta se les copia una vez por día"
              ],
              explain: "Las etiquetas no se heredan de suscripciones ni de grupos de recursos, lo que permite esquemas distintos en cada nivel. Azure Policy puede aplicarlas si hace falta."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "You must apply every tag in your schema to every resource.", answer: false, explain: "For example, only mission-critical resources might carry an Impact tag." },
              { s: "Tags can help scope automation in tools such as Azure DevOps.", answer: true, explain: "Workload and application tags identify resources in complex deployments." },
              { s: "Environment, Owner, CostCenter and Workload are a practical starter tag set.", answer: true, explain: "They support filtering costs, finding owners and scoping automation." }
            ],
            es: {
              statements: [
                { s: "Debe aplicar todas las etiquetas de su esquema a todos los recursos.", explain: "Por ejemplo, solo los recursos críticos podrían tener una etiqueta Impact." },
                { s: "Las etiquetas pueden ayudar a delimitar automatizaciones en herramientas como Azure DevOps.", explain: "Las etiquetas de carga de trabajo y aplicación identifican recursos en implementaciones complejas." },
                { s: "Environment, Owner, CostCenter y Workload son un conjunto inicial práctico de etiquetas.", explain: "Sirven para filtrar costos, encontrar responsables y delimitar automatizaciones." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about enforcing tags.",
            parts: [
              "To require a tag on every new resource, use ",
              { options: ["Azure Policy", "Cost analysis", "a resource lock"], answer: 0 },
              ", which can also ",
              { options: ["reapply tags that were removed", "move resources between regions", "lower the price of tagged resources"], answer: 0 },
              "."
            ],
            explain: "Azure Policy enforces tagging rules and can reapply removed tags.",
            es: {
              q: "Complete la afirmación sobre la aplicación obligatoria de etiquetas.",
              parts: [
                "Para exigir una etiqueta en cada recurso nuevo, use ",
                { options: ["Azure Policy", "el análisis de costos", "un bloqueo de recursos"] },
                ", que además puede ",
                { options: ["volver a aplicar etiquetas eliminadas", "mover recursos entre regiones", "bajar el precio de los recursos etiquetados"] },
                "."
              ],
              explain: "Azure Policy aplica reglas de etiquetado y puede volver a aplicar las etiquetas eliminadas."
            }
          }
        ]
      }
    },
    {
      id: "cost-optimization",
      name: "Describe cost optimization options in Azure",
      es: { name: "Descripción de las opciones de optimización de costos en Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/7a-describe-cost-optimization-options",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each workload to the pricing option that fits best.",
            values: ["Reservations", "Azure savings plan for compute", "Spot pricing"],
            targets: [
              { t: "A production database that runs 24/7 with stable resource needs", answer: 0 },
              { t: "Steady compute usage that moves among different compute services", answer: 1 },
              { t: "Batch rendering jobs that can restart if interrupted", answer: 2 },
              { t: "Test jobs where the lowest cost matters most", answer: 2 }
            ],
            explain: "Reservations suit predictable workloads, savings plans suit steady but flexible compute, and Spot suits interruptible work.",
            es: {
              q: "Relacione cada carga de trabajo con la opción de precios más adecuada.",
              values: ["Reservas", "Plan de ahorro de Azure para proceso", "Precios de Spot"],
              targets: [
                { t: "Una base de datos de producción que funciona 24/7 con necesidades estables" },
                { t: "Un uso de proceso constante que se mueve entre distintos servicios de proceso" },
                { t: "Trabajos de renderizado por lotes que pueden reiniciarse si se interrumpen" },
                { t: "Trabajos de prueba donde lo que más importa es el menor costo" }
              ],
              explain: "Las reservas sirven para cargas predecibles, los planes de ahorro para un proceso constante pero flexible, y Spot para trabajo interrumpible."
            }
          },
          {
            type: "single",
            q: "What do you commit to with an Azure savings plan for compute?",
            options: ["An hourly spend amount for one or three years", "A specific VM family and size", "A fixed number of Spot evictions", "A monthly budget alert"],
            answer: 0,
            explain: "Savings plans commit to an hourly spend on eligible compute, not to a specific instance type.",
            es: {
              q: "¿Qué se compromete con un plan de ahorro de Azure para proceso?",
              options: ["Un monto de gasto por hora durante uno o tres años", "Una familia y un tamaño de máquina virtual específicos", "Una cantidad fija de desalojos de Spot", "Una alerta de presupuesto mensual"],
              explain: "Los planes de ahorro comprometen un gasto por hora en proceso elegible, no un tipo de instancia."
            }
          },
          {
            type: "single",
            q: "A workload began as a test that ran on Spot VMs, but it has become business-critical. What should the team consider?",
            options: [
              "Moving it to a more predictable pricing model",
              "Keeping it on Spot to keep costs lowest",
              "Adding tags so Spot capacity isn't reclaimed",
              "Opening a budget alert to prevent evictions"
            ],
            answer: 0,
            explain: "Spot capacity can be reclaimed, so critical workloads should move to a predictable option.",
            es: {
              q: "Una carga empezó como prueba en máquinas virtuales de Spot, pero se volvió crítica para el negocio. ¿Qué debería considerar el equipo?",
              options: [
                "Pasarla a un modelo de precios más predecible",
                "Mantenerla en Spot para que el costo siga siendo mínimo",
                "Agregar etiquetas para que no se recupere la capacidad de Spot",
                "Crear una alerta de presupuesto para evitar desalojos"
              ],
              explain: "La capacidad de Spot se puede recuperar, así que las cargas críticas deben pasar a una opción predecible."
            }
          },
          {
            type: "multi",
            q: "Which two statements about Spot Virtual Machines are true?",
            options: [
              "They use unused Azure capacity at reduced prices",
              "Azure can reclaim the capacity when it's needed",
              "They require a three-year commitment",
              "They're the best fit for 24/7 production databases",
              "They can't be used for batch jobs"
            ],
            answers: [0, 1],
            explain: "Spot is cheap, evictable capacity, suited to fault-tolerant or interruptible workloads.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre las máquinas virtuales de Spot?",
              options: [
                "Usan capacidad de Azure sin usar a precios reducidos",
                "Azure puede recuperar la capacidad cuando la necesita",
                "Requieren un compromiso de tres años",
                "Son lo mejor para bases de datos de producción 24/7",
                "No se pueden usar para trabajos por lotes"
              ],
              explain: "Spot es capacidad barata y desalojable, adecuada para cargas tolerantes a fallas o interrumpibles."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Reservations apply discounted pricing to usage that matches the reserved capacity.", answer: true, explain: "You commit for one or three years." },
              { s: "Once chosen, a workload's pricing option should never be reviewed.", answer: false, explain: "Choices should be reviewed regularly as usage patterns change." },
              { s: "Shifting a workload that became stable from on-demand usage to a commitment model can improve long-term cost efficiency.", answer: true, explain: "Commitment discounts reward predictable usage." }
            ],
            es: {
              statements: [
                { s: "Las reservas aplican precios con descuento al uso que coincide con la capacidad reservada.", explain: "El compromiso es por uno o tres años." },
                { s: "Una vez elegida, la opción de precios de una carga no se debe revisar nunca.", explain: "Las opciones se deben revisar con regularidad a medida que cambian los patrones de uso." },
                { s: "Pasar una carga que se volvió estable del uso a demanda a un modelo de compromiso puede mejorar la eficiencia de costos a largo plazo.", explain: "Los descuentos por compromiso premian el uso predecible." }
              ]
            }
          }
        ]
      }
    }
  ]
});
