// AZ-900 > Describe Azure management and governance > Describe features and tools in Azure for governance and compliance
Catalog.module("az-900", {
  id: "governance-compliance",
  name: "Describe features and tools in Azure for governance and compliance",
  es: { name: "Descripción de las características y herramientas de Azure para la gobernanza y el cumplimiento" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Resource locks",
        q: "An administrator with the Owner role tries to delete a storage account and gets an error, although RBAC allows it. What is the most likely reason?",
        options: ["A Delete or ReadOnly resource lock is applied", "An Azure Policy initiative with an audit effect is assigned to it", "The account is tagged as mission-critical", "Microsoft Purview classified its data"],
        answer: 0,
        explain: "Locks apply regardless of RBAC permissions. Even an owner must remove the lock before deleting.",
        es: {
          topic: "Bloqueos de recursos",
          q: "Un administrador con el rol Propietario intenta eliminar una cuenta de almacenamiento y recibe un error, aunque RBAC lo permite. ¿Cuál es la causa más probable?",
          options: ["Tiene aplicado un bloqueo de recursos Delete o ReadOnly", "Tiene asignada una iniciativa de Azure Policy con efecto de auditoría", "Está etiquetada como crítica", "Microsoft Purview clasificó sus datos"],
          explain: "Los bloqueos se aplican sin importar los permisos de RBAC. Incluso un propietario debe quitar el bloqueo antes de eliminar."
        }
      },
      {
        type: "match",
        topic: "Governance tools",
        q: "Match each need to the Azure governance or compliance tool.",
        values: ["Azure Policy", "Resource locks", "Microsoft Purview", "Service Trust Portal"],
        targets: [
          { t: "Prevent VMs from being created outside approved sizes", answer: 0 },
          { t: "Stop anyone from accidentally deleting a production resource group", answer: 1 },
          { t: "Map the data estate with classification and end-to-end lineage", answer: 2 },
          { t: "Download Microsoft's audit reports on its cloud controls", answer: 3 }
        ],
        explain: "Policy enforces configuration rules, locks prevent deletion or changes, Purview governs data and the Service Trust Portal publishes Microsoft's compliance documentation.",
        es: {
          topic: "Herramientas de gobernanza",
          q: "Relacione cada necesidad con la herramienta de gobernanza o cumplimiento de Azure.",
          values: ["Azure Policy", "Bloqueos de recursos", "Microsoft Purview", "Portal de confianza de servicios"],
          targets: [
            { t: "Impedir que se creen máquinas virtuales fuera de los tamaños aprobados" },
            { t: "Evitar que alguien elimine por error un grupo de recursos de producción" },
            { t: "Mapear el patrimonio de datos con clasificación y linaje de extremo a extremo" },
            { t: "Descargar los informes de auditoría de Microsoft sobre sus controles en la nube" }
          ],
          explain: "Policy aplica reglas de configuración, los bloqueos impiden eliminar o cambiar, Purview gobierna los datos y el Portal de confianza de servicios publica la documentación de cumplimiento de Microsoft."
        }
      },
      {
        type: "single",
        topic: "Azure Policy",
        q: "A company assigns an Azure Policy that restricts VM sizes. What happens to VMs created before the assignment?",
        options: [
          "They're evaluated and flagged if noncompliant",
          "They're deleted automatically",
          "They're ignored, since policies apply only to new resources",
          "They're locked as ReadOnly until resized"
        ],
        answer: 0,
        explain: "Azure Policy evaluates and monitors existing resources too, highlighting noncompliance.",
        es: {
          topic: "Azure Policy",
          q: "Una empresa asigna una directiva de Azure Policy que restringe los tamaños de máquina virtual. ¿Qué pasa con las máquinas creadas antes de la asignación?",
          options: [
            "Se evalúan y se marcan si no cumplen",
            "Se eliminan automáticamente",
            "Se ignoran, porque las directivas solo aplican a recursos nuevos",
            "Se bloquean como ReadOnly hasta que se cambie su tamaño"
          ],
          explain: "Azure Policy también evalúa y supervisa los recursos existentes y señala los que no cumplen."
        }
      },
      {
        type: "multi",
        topic: "Microsoft Purview",
        q: "Which two are the main solution areas of Microsoft Purview?",
        options: ["Risk and compliance", "Unified data governance", "Cost analysis and budgets", "Infrastructure as code", "Service health monitoring"],
        answers: [0, 1],
        explain: "Purview comprises risk and compliance solutions and unified data governance.",
        es: {
          topic: "Microsoft Purview",
          q: "¿Cuáles son las dos áreas principales de soluciones de Microsoft Purview?",
          options: ["Riesgo y cumplimiento", "Gobernanza de datos unificada", "Análisis de costos y presupuestos", "Infraestructura como código", "Supervisión del estado del servicio"],
          explain: "Purview se compone de soluciones de riesgo y cumplimiento y de gobernanza de datos unificada."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Resource locks", s: "A lock placed on a resource group applies to the resources inside it.", answer: true, explain: "Locks are inherited." },
          { topic: "Azure Policy", s: "Azure Policy can automatically add a missing required tag to a resource.", answer: true, explain: "Some noncompliant configurations can be remediated automatically." },
          { topic: "Service Trust Portal", s: "All Service Trust Portal content is available without signing in.", answer: false, explain: "Some resources require signing in with a Microsoft Entra work or school account and accepting an NDA." }
        ],
        es: {
          statements: [
            { topic: "Bloqueos de recursos", s: "Un bloqueo aplicado a un grupo de recursos se aplica a los recursos que contiene.", explain: "Los bloqueos se heredan." },
            { topic: "Azure Policy", s: "Azure Policy puede agregar automáticamente a un recurso una etiqueta obligatoria que falta.", explain: "Algunas configuraciones que no cumplen se pueden corregir automáticamente." },
            { topic: "Portal de confianza de servicios", s: "Todo el contenido del Portal de confianza de servicios está disponible sin iniciar sesión.", explain: "Algunos recursos requieren iniciar sesión con una cuenta profesional o educativa de Microsoft Entra y aceptar un acuerdo de confidencialidad." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Resource locks",
        q: "Complete the statement about lock types.",
        parts: [
          "With a ",
          { options: ["Delete", "ReadOnly", "Reader"], answer: 0 },
          " lock, authorized users can still read and modify a resource, while a ",
          { options: ["ReadOnly", "Delete", "Contributor"], answer: 0 },
          " lock also blocks updates."
        ],
        explain: "Delete blocks deletion only; ReadOnly blocks deletion and updates, similar to restricting users to the Reader role.",
        es: {
          topic: "Bloqueos de recursos",
          q: "Complete la afirmación sobre los tipos de bloqueo.",
          parts: [
            "Con un bloqueo ",
            { options: ["Delete", "ReadOnly", "Reader"] },
            ", los usuarios autorizados todavía pueden leer y modificar un recurso, mientras que un bloqueo ",
            { options: ["ReadOnly", "Delete", "Contributor"] },
            " también impide las actualizaciones."
          ],
          explain: "Delete solo impide eliminar; ReadOnly impide eliminar y actualizar, como si los usuarios tuvieran solo el rol Lector."
        }
      },
      {
        type: "single",
        topic: "Azure Policy",
        q: "A team uses Copilot recommendations to propose infrastructure changes. How can the company make sure those changes still meet its required tags and allowed locations?",
        options: ["Assign Azure Policy definitions for those rules", "Add a Delete lock to every subscription", "Review the Service Trust Portal before each change", "Create a Purview data map"],
        answer: 0,
        explain: "Azure Policy enforces standards regardless of how a change was proposed, including AI-assisted changes.",
        es: {
          topic: "Azure Policy",
          q: "Un equipo usa recomendaciones de Copilot para proponer cambios de infraestructura. ¿Cómo puede la empresa asegurarse de que esos cambios cumplan sus etiquetas obligatorias y ubicaciones permitidas?",
          options: ["Asignar definiciones de Azure Policy para esas reglas", "Agregar un bloqueo Delete a cada suscripción", "Revisar el Portal de confianza de servicios antes de cada cambio", "Crear un mapa de datos de Purview"],
          explain: "Azure Policy aplica los estándares sin importar cómo se propuso el cambio, incluidos los cambios asistidos por IA."
        }
      },
      {
        type: "single",
        topic: "Microsoft Purview",
        q: "A company has data in Azure, on-premises SQL databases and Amazon S3, and needs to know where its sensitive data is stored. Which service fits?",
        options: ["Microsoft Purview", "Azure Policy", "Resource locks", "Azure Advisor"],
        answer: 0,
        explain: "Purview's unified data governance covers on-premises, multicloud and SaaS data and identifies where sensitive data lives.",
        es: {
          topic: "Microsoft Purview",
          q: "Una empresa tiene datos en Azure, en bases de datos SQL locales y en Amazon S3, y necesita saber dónde están sus datos confidenciales. ¿Qué servicio corresponde?",
          options: ["Microsoft Purview", "Azure Policy", "Los bloqueos de recursos", "Azure Advisor"],
          explain: "La gobernanza de datos unificada de Purview abarca datos locales, multinube y SaaS, e identifica dónde están los datos confidenciales."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Azure Policy", s: "An Azure Policy initiative groups related policy definitions toward a larger goal.", answer: true, explain: "For example, an initiative can contain over 100 definitions." },
          { topic: "Resource locks", s: "Resource locks can be managed only from the Azure portal.", answer: false, explain: "Also from PowerShell, the Azure CLI or an ARM template." },
          { topic: "Service Trust Portal", s: "In the Service Trust Portal, My Library can notify you when pinned documents are updated.", answer: true, explain: "You pin documents from All Documents." }
        ],
        es: {
          statements: [
            { topic: "Azure Policy", s: "Una iniciativa de Azure Policy agrupa definiciones de directivas relacionadas para un objetivo mayor.", explain: "Por ejemplo, una iniciativa puede contener más de 100 definiciones." },
            { topic: "Bloqueos de recursos", s: "Los bloqueos de recursos solo se pueden administrar desde Azure Portal.", explain: "También desde PowerShell, la CLI de Azure o una plantilla ARM." },
            { topic: "Portal de confianza de servicios", s: "En el Portal de confianza de servicios, Mi biblioteca puede avisarle cuando se actualizan los documentos fijados.", explain: "Los documentos se fijan desde Todos los documentos." }
          ]
        }
      },
      {
        type: "single",
        topic: "Resource locks",
        q: "A team must update a resource that has a ReadOnly lock. What must happen first?",
        options: ["Remove the lock, then make the change", "Assign the Owner role, which overrides the lock", "Create an Azure Policy exception", "Move the resource to another subscription"],
        answer: 0,
        explain: "Changing a locked resource is a two-step process: remove the lock, then perform the action you're allowed to.",
        es: {
          topic: "Bloqueos de recursos",
          q: "Un equipo debe actualizar un recurso que tiene un bloqueo ReadOnly. ¿Qué debe pasar primero?",
          options: ["Quitar el bloqueo y después hacer el cambio", "Asignar el rol Propietario, que anula el bloqueo", "Crear una excepción de Azure Policy", "Mover el recurso a otra suscripción"],
          explain: "Cambiar un recurso bloqueado es un proceso de dos pasos: quitar el bloqueo y después hacer la acción permitida."
        }
      },
      {
        type: "single",
        topic: "Azure Policy",
        q: "A policy is assigned at a resource group. Which resources does it apply to?",
        options: ["All resources in that resource group, including new ones", "Only the resource group object itself", "Only the resources that existed before the policy was assigned", "Every resource in the subscription"],
        answer: 0,
        explain: "Policies are inherited by everything beneath the scope where they're set.",
        es: {
          topic: "Azure Policy",
          q: "Se asigna una directiva en un grupo de recursos. ¿A qué recursos se aplica?",
          options: ["A todos los recursos de ese grupo, incluidos los nuevos", "Solo al objeto del grupo de recursos", "Solo a los recursos que ya existían antes de asignar la directiva", "A todos los recursos de la suscripción"],
          explain: "Las directivas las hereda todo lo que está debajo del ámbito donde se asignan."
        }
      },
      {
        type: "single",
        topic: "Service Trust Portal",
        q: "For how long are Service Trust Portal reports and documents available to download?",
        options: ["At least 12 months after publishing, or until a new version is available", "Only 30 days after publishing", "Only while the customer keeps an active Enterprise Agreement with Microsoft in place", "Indefinitely, with every past version kept"],
        answer: 0,
        explain: "Documents stay available for at least 12 months or until a new version replaces them.",
        es: {
          topic: "Portal de confianza de servicios",
          q: "¿Durante cuánto tiempo se pueden descargar los informes y documentos del Portal de confianza de servicios?",
          options: ["Al menos 12 meses desde su publicación o hasta que haya una versión nueva", "Solo 30 días después de su publicación", "Solo mientras el cliente mantenga vigente un Contrato Enterprise activo con Microsoft", "Indefinidamente, conservando todas las versiones anteriores"],
          explain: "Los documentos siguen disponibles al menos 12 meses o hasta que una versión nueva los reemplace."
        }
      }
    ]
  },
  units: [
    {
      id: "purview",
      name: "Describe the purpose of Microsoft Purview",
      es: { name: "Descripción del propósito de Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/2-describe-purpose-microsoft-purview",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "Which statement best describes Microsoft Purview?",
            options: [
              "A family of data governance, risk and compliance solutions with a unified view of your data",
              "A service that enforces rules on Azure resource configurations and blocks noncompliant deployments",
              "A tool that prevents resources from being deleted",
              "A calculator that estimates the cost of storing data"
            ],
            answer: 0,
            explain: "Purview unifies insights about on-premises, multicloud and SaaS data for governance, risk and compliance.",
            es: {
              q: "¿Qué afirmación describe mejor Microsoft Purview?",
              options: [
                "Una familia de soluciones de gobernanza de datos, riesgo y cumplimiento con una vista unificada de los datos",
                "Un servicio que aplica reglas a la configuración de los recursos de Azure y bloquea implementaciones no conformes",
                "Una herramienta que impide que se eliminen recursos",
                "Una calculadora que estima el costo de almacenar datos"
              ],
              explain: "Purview unifica la información sobre datos locales, multinube y SaaS para la gobernanza, el riesgo y el cumplimiento."
            }
          },
          {
            type: "multi",
            q: "Which two capabilities help Microsoft Purview keep you up to date on your data landscape?",
            options: ["Automated data discovery", "End-to-end data lineage", "Resource locks", "Budget alerts", "VM scale sets"],
            answers: [0, 1],
            explain: "Purview offers automated discovery, sensitive data classification and end-to-end lineage.",
            es: {
              q: "¿Cuáles son dos capacidades con las que Microsoft Purview lo mantiene al día sobre su panorama de datos?",
              options: ["La detección automatizada de datos", "El linaje de datos de extremo a extremo", "Los bloqueos de recursos", "Las alertas de presupuesto", "Los conjuntos de escalado de máquinas virtuales"],
              explain: "Purview ofrece detección automatizada, clasificación de datos confidenciales y linaje de extremo a extremo."
            }
          },
          {
            type: "match",
            q: "Match each goal to the Microsoft Purview solution area.",
            values: ["Risk and compliance", "Unified data governance"],
            targets: [
              { t: "Protect sensitive data in Teams, OneDrive and Exchange", answer: 0 },
              { t: "Create an up-to-date map of the data estate", answer: 1 },
              { t: "Manage regulatory compliance requirements", answer: 0 },
              { t: "Let data consumers find valuable data securely", answer: 1 }
            ],
            explain: "Risk and compliance builds on Microsoft 365 services; unified data governance maps and manages the data estate.",
            es: {
              q: "Relacione cada objetivo con el área de soluciones de Microsoft Purview.",
              values: ["Riesgo y cumplimiento", "Gobernanza de datos unificada"],
              targets: [
                { t: "Proteger datos confidenciales en Teams, OneDrive y Exchange" },
                { t: "Crear un mapa actualizado del patrimonio de datos" },
                { t: "Administrar los requisitos de cumplimiento normativo" },
                { t: "Permitir que los consumidores de datos encuentren datos valiosos de forma segura" }
              ],
              explain: "Riesgo y cumplimiento se apoya en servicios de Microsoft 365; la gobernanza de datos unificada mapea y administra el patrimonio de datos."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Purview data governance.",
            parts: [
              "Purview can govern data stored in Azure, SQL and Hive databases, locally and in ",
              { options: ["other clouds such as Amazon S3", "Azure only", "Microsoft 365 only"], answer: 0 },
              ", and it can identify ",
              { options: ["where sensitive data is stored", "which VMs are oversized", "which regions are cheapest"], answer: 0 },
              "."
            ],
            explain: "Unified data governance covers on-premises, multicloud and SaaS data and locates sensitive data.",
            es: {
              q: "Complete la afirmación sobre la gobernanza de datos de Purview.",
              parts: [
                "Purview puede gobernar datos almacenados en Azure, bases de datos SQL y Hive, en el entorno local y en ",
                { options: ["otras nubes como Amazon S3", "solo Azure", "solo Microsoft 365"] },
                ", y puede identificar ",
                { options: ["dónde están almacenados los datos confidenciales", "qué máquinas virtuales están sobredimensionadas", "qué regiones son más baratas"] },
                "."
              ],
              explain: "La gobernanza de datos unificada abarca datos locales, multinube y SaaS, y ubica los datos confidenciales."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Microsoft 365 is a core component of Purview's risk and compliance solutions.", answer: true, explain: "Teams, OneDrive and Exchange are among the services it uses." },
              { s: "Purview can only govern data stored in Azure.", answer: false, explain: "It also covers on-premises, multicloud and SaaS data." },
              { s: "Purview can help manage access to data in your estate at scale.", answer: true, explain: "It's one of the goals of unified data governance." }
            ],
            es: {
              statements: [
                { s: "Microsoft 365 es un componente central de las soluciones de riesgo y cumplimiento de Purview.", explain: "Teams, OneDrive y Exchange están entre los servicios que usa." },
                { s: "Purview solo puede gobernar datos almacenados en Azure.", explain: "También abarca datos locales, multinube y SaaS." },
                { s: "Purview puede ayudar a administrar el acceso a los datos de su patrimonio a escala.", explain: "Es uno de los objetivos de la gobernanza de datos unificada." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "azure-policy",
      name: "Describe the purpose of Azure Policy",
      es: { name: "Describir el propósito de Azure Policy" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "A company wants to prevent anyone from creating resources outside two approved regions, and to see which existing resources break the rule. What should it use?",
            options: ["Azure Policy", "A resource lock", "Microsoft Purview", "Cost Management budgets"],
            answer: 0,
            explain: "Azure Policy can prevent noncompliant resources from being created and highlights existing noncompliant resources.",
            es: {
              q: "Una empresa quiere impedir que se creen recursos fuera de dos regiones aprobadas y ver qué recursos existentes no cumplen la regla. ¿Qué debe usar?",
              options: ["Azure Policy", "Un bloqueo de recursos", "Microsoft Purview", "Los presupuestos de Cost Management"],
              explain: "Azure Policy puede impedir que se creen recursos que no cumplen y señala los recursos existentes que no cumplen."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure Policy.",
            parts: [
              "A group of related policy definitions is called an ",
              { options: ["initiative", "assignment", "lock"], answer: 0 },
              ", and a policy set at a high level is ",
              { options: ["inherited by everything beneath it", "applied only to that level", "applied only to new subscriptions"], answer: 0 },
              "."
            ],
            explain: "Initiatives group policies toward a larger goal, and policies are inherited down the hierarchy.",
            es: {
              q: "Complete la afirmación sobre Azure Policy.",
              parts: [
                "Un grupo de definiciones de directivas relacionadas se llama ",
                { options: ["iniciativa", "asignación", "bloqueo"] },
                ", y una directiva asignada en un nivel alto ",
                { options: ["la hereda todo lo que está debajo", "se aplica solo a ese nivel", "se aplica solo a suscripciones nuevas"] },
                "."
              ],
              explain: "Las iniciativas agrupan directivas para un objetivo mayor, y las directivas se heredan hacia abajo en la jerarquía."
            }
          },
          {
            type: "multi",
            q: "Which two statements about Azure Policy are true?",
            options: [
              "It includes built-in definitions for areas such as storage, networking and compute",
              "Resources can be marked as exceptions to a policy",
              "It evaluates only resources created after the policy",
              "It replaces the need for Azure RBAC",
              "It can only audit and never block a deployment"
            ],
            answers: [0, 1],
            explain: "Policy has built-in definitions, evaluates existing resources, can block noncompliant ones and allows exceptions. It doesn't replace RBAC.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre Azure Policy?",
              options: [
                "Incluye definiciones integradas para áreas como almacenamiento, redes y proceso",
                "Los recursos se pueden marcar como excepciones a una directiva",
                "Solo evalúa los recursos creados después de la directiva",
                "Reemplaza la necesidad de Azure RBAC",
                "Solo puede auditar y nunca bloquear una implementación"
              ],
              explain: "Policy tiene definiciones integradas, evalúa recursos existentes, puede bloquear los que no cumplen y permite excepciones. No reemplaza RBAC."
            }
          },
          {
            type: "single",
            q: "A policy allows only certain VM sizes. When is it invoked?",
            options: [
              "When a VM is created or resized, and it also evaluates existing VMs",
              "Only once a month, during a scheduled compliance scan of the whole subscription",
              "Only when the VM is deleted",
              "Only when a budget alert fires"
            ],
            answer: 0,
            explain: "The policy is invoked on create and resize, and Azure Policy keeps evaluating existing resources.",
            es: {
              q: "Una directiva permite solo ciertos tamaños de máquina virtual. ¿Cuándo se invoca?",
              options: [
                "Cuando se crea o se cambia el tamaño de una máquina virtual, y además evalúa las existentes",
                "Solo una vez por mes, durante un análisis de cumplimiento programado de toda la suscripción",
                "Solo cuando se elimina la máquina virtual",
                "Solo cuando se dispara una alerta de presupuesto"
              ],
              explain: "La directiva se invoca al crear y al cambiar el tamaño, y Azure Policy sigue evaluando los recursos existentes."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Azure Policy integrates with Azure DevOps pipelines for pre- and post-deployment phases.", answer: true, explain: "It applies CI/CD pipeline policies." },
              { s: "Changes proposed by Copilot or automation bypass Azure Policy.", answer: false, explain: "Policy enforces standards regardless of how a change was proposed." },
              { s: "Azure Policy can be set on a specific resource, resource group or subscription.", answer: true, explain: "Policies can be set at each level." }
            ],
            es: {
              statements: [
                { s: "Azure Policy se integra con las canalizaciones de Azure DevOps en las fases previas y posteriores a la implementación.", explain: "Aplica directivas a las canalizaciones de CI/CD." },
                { s: "Los cambios propuestos por Copilot o por automatizaciones evitan Azure Policy.", explain: "Policy aplica los estándares sin importar cómo se propuso el cambio." },
                { s: "Azure Policy se puede asignar en un recurso específico, un grupo de recursos o una suscripción.", explain: "Las directivas se pueden asignar en cada nivel." }
              ]
            }
          },
          {
            type: "single",
            q: "What is the goal of the built-in initiative Enable Monitoring in Azure Security Center?",
            options: [
              "To monitor all available security recommendations for all Azure resource types",
              "To apply a ReadOnly lock to every resource type that lacks endpoint protection",
              "To delete unencrypted SQL databases automatically",
              "To estimate the cost of Security Center"
            ],
            answer: 0,
            explain: "The initiative groups over 100 policy definitions, such as monitoring unencrypted SQL databases and missing endpoint protection.",
            es: {
              q: "¿Cuál es el objetivo de la iniciativa integrada Enable Monitoring in Azure Security Center?",
              options: [
                "Supervisar todas las recomendaciones de seguridad disponibles para todos los tipos de recursos de Azure",
                "Aplicar un bloqueo ReadOnly a todos los tipos de recursos que no tengan protección de puntos de conexión",
                "Eliminar automáticamente las bases de datos SQL sin cifrar",
                "Estimar el costo de Security Center"
              ],
              explain: "La iniciativa agrupa más de 100 definiciones de directivas, como supervisar bases de datos SQL sin cifrar y la falta de protección de puntos de conexión."
            }
          }
        ]
      }
    },
    {
      id: "resource-locks",
      name: "Describe the purpose of resource locks",
      es: { name: "Describir el propósito de bloqueos de recursos" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/4-describe-purpose-resource-locks",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "Admins must still be able to change a production database's settings, but nobody should be able to delete it by mistake. Which lock fits?",
            options: ["Delete", "ReadOnly", "Reader", "An Azure Policy initiative"],
            answer: 0,
            explain: "A Delete lock allows reading and modifying but blocks deletion. ReadOnly would also block changes.",
            es: {
              q: "Los administradores deben poder seguir cambiando la configuración de una base de datos de producción, pero nadie debería poder eliminarla por error. ¿Qué bloqueo corresponde?",
              options: ["Delete", "ReadOnly", "Reader", "Una iniciativa de Azure Policy"],
              explain: "Un bloqueo Delete permite leer y modificar pero impide eliminar. ReadOnly también impediría los cambios."
            }
          },
          {
            type: "match",
            q: "Match each behavior to the lock type.",
            values: ["Delete", "ReadOnly"],
            targets: [
              { t: "Users can modify the resource but can't delete it", answer: 0 },
              { t: "Users can read the resource but can't update or delete it", answer: 1 },
              { t: "Similar to restricting all users to the Reader role", answer: 1 }
            ],
            explain: "Delete blocks deletion only; ReadOnly blocks updates and deletion.",
            es: {
              q: "Relacione cada comportamiento con el tipo de bloqueo.",
              values: ["Delete", "ReadOnly"],
              targets: [
                { t: "Los usuarios pueden modificar el recurso pero no eliminarlo" },
                { t: "Los usuarios pueden leer el recurso pero no actualizarlo ni eliminarlo" },
                { t: "Se parece a limitar a todos los usuarios al rol Lector" }
              ],
              explain: "Delete solo impide eliminar; ReadOnly impide actualizar y eliminar."
            }
          },
          {
            type: "single",
            q: "Why use resource locks if Azure RBAC is already in place?",
            options: [
              "Because people with the right access could still delete critical resources by accident",
              "Because RBAC doesn't work for production resources",
              "Because locks reduce the cost of the resources",
              "Because locks replace the need for backups and disaster recovery plans for critical resources"
            ],
            answer: 0,
            explain: "Locks protect against accidental deletion or change even by users whose RBAC permissions allow it.",
            es: {
              q: "¿Por qué usar bloqueos de recursos si ya hay Azure RBAC?",
              options: [
                "Porque quienes tienen el acceso adecuado igual podrían eliminar por error recursos críticos",
                "Porque RBAC no funciona con recursos de producción",
                "Porque los bloqueos reducen el costo de los recursos",
                "Porque los bloqueos reemplazan las copias de seguridad y los planes de recuperación de los recursos críticos"
              ],
              explain: "Los bloqueos protegen contra eliminaciones o cambios accidentales, incluso de usuarios cuyos permisos de RBAC lo permiten."
            }
          },
          {
            type: "multi",
            q: "Which two scopes can a resource lock be applied to?",
            options: ["A resource group", "An entire subscription", "A Microsoft Entra user", "A billing zone", "An Azure region"],
            answers: [0, 1],
            explain: "Locks can be applied to individual resources, resource groups or subscriptions, and they're inherited.",
            es: {
              q: "¿Cuáles son dos ámbitos a los que se puede aplicar un bloqueo de recursos?",
              options: ["Un grupo de recursos", "Una suscripción completa", "Un usuario de Microsoft Entra", "Una zona de facturación", "Una región de Azure"],
              explain: "Los bloqueos se aplican a recursos individuales, grupos de recursos o suscripciones, y se heredan."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "An owner of a resource can delete it without removing its Delete lock.", answer: false, explain: "Locks apply regardless of RBAC; the lock must be removed first." },
              { s: "You can view and manage locks from the Locks section of a resource's Settings in the portal.", answer: true, explain: "Locks can also be managed with PowerShell, the CLI or ARM templates." },
              { s: "A lock on a resource group is inherited by all resources in it.", answer: true, explain: "Resource locks are inherited." }
            ],
            es: {
              statements: [
                { s: "Un propietario puede eliminar un recurso sin quitar su bloqueo Delete.", explain: "Los bloqueos se aplican sin importar RBAC; primero hay que quitar el bloqueo." },
                { s: "Puede ver y administrar los bloqueos en la sección Bloqueos de la configuración de un recurso en el portal.", explain: "También se administran con PowerShell, la CLI o plantillas ARM." },
                { s: "Un bloqueo en un grupo de recursos lo heredan todos sus recursos.", explain: "Los bloqueos de recursos se heredan." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "service-trust-portal",
      name: "Describe the purpose of the Service Trust Portal",
      es: { name: "Descripción de las ventajas del portal de confianza de servicios" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "An auditor asks for details about how Microsoft implements controls that protect its cloud services and customer data. Where should you look?",
            options: ["The Microsoft Service Trust Portal", "Azure Policy compliance view", "Microsoft Cost Management", "Azure Resource Manager"],
            answer: 0,
            explain: "The Service Trust Portal provides content and tools about Microsoft's security, privacy and compliance practices.",
            es: {
              q: "Un auditor pide detalles sobre cómo Microsoft implementa los controles que protegen sus servicios en la nube y los datos de los clientes. ¿Dónde debe buscar?",
              options: ["El Portal de confianza de servicios de Microsoft", "La vista de cumplimiento de Azure Policy", "Microsoft Cost Management", "Azure Resource Manager"],
              explain: "El Portal de confianza de servicios ofrece contenido y herramientas sobre las prácticas de seguridad, privacidad y cumplimiento de Microsoft."
            }
          },
          {
            type: "match",
            q: "Match each Service Trust Portal menu item to what it does.",
            values: ["My Library", "All Documents", "Service Trust Portal"],
            targets: [
              { t: "Holds pinned documents and can notify you of updates", answer: 0 },
              { t: "A single landing place for all documents on the portal", answer: 1 },
              { t: "Returns to the portal's home page", answer: 2 }
            ],
            explain: "My Library stores pinned documents, All Documents lists everything and the first item links home.",
            es: {
              q: "Relacione cada elemento del menú del Portal de confianza de servicios con lo que hace.",
              values: ["Mi biblioteca", "Todos los documentos", "Portal de confianza de servicios"],
              targets: [
                { t: "Guarda documentos fijados y puede avisar cuando se actualizan" },
                { t: "Un único lugar de entrada para todos los documentos del portal" },
                { t: "Vuelve a la página principal del portal" }
              ],
              explain: "Mi biblioteca guarda los documentos fijados, Todos los documentos los muestra a todos y el primer elemento lleva al inicio."
            }
          },
          {
            type: "single",
            q: "What do you need to access some resources on the Service Trust Portal?",
            options: [
              "Sign in with a Microsoft Entra work or school account and accept the non-disclosure agreement",
              "An Azure subscription with a ReadOnly lock",
              "An active Enterprise Agreement, an Azure subscription and a configured credit alert in Cost Management",
              "Nothing; every document is public"
            ],
            answer: 0,
            explain: "Some content requires an authenticated Microsoft cloud services account and accepting Microsoft's NDA for compliance materials.",
            es: {
              q: "¿Qué necesita para acceder a algunos recursos del Portal de confianza de servicios?",
              options: [
                "Iniciar sesión con una cuenta profesional o educativa de Microsoft Entra y aceptar el acuerdo de confidencialidad",
                "Una suscripción de Azure con un bloqueo ReadOnly",
                "Un Contrato Enterprise activo, una suscripción de Azure y una alerta de crédito configurada en Cost Management",
                "Nada; todos los documentos son públicos"
              ],
              explain: "Parte del contenido requiere una cuenta autenticada de servicios en la nube de Microsoft y aceptar el acuerdo de confidencialidad para materiales de cumplimiento."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The Service Trust Portal is available at servicetrust.microsoft.com.", answer: true, explain: "It's accessible from the web." },
              { s: "Documents in the Service Trust Portal remain available for at least 12 months after publishing or until a newer version appears.", answer: true, explain: "That's the stated availability." },
              { s: "The Service Trust Portal is where you enforce compliance rules on your own Azure resources.", answer: false, explain: "That's Azure Policy; the portal documents Microsoft's own practices." }
            ],
            es: {
              statements: [
                { s: "El Portal de confianza de servicios está disponible en servicetrust.microsoft.com.", explain: "Se accede desde la web." },
                { s: "Los documentos del Portal de confianza de servicios siguen disponibles al menos 12 meses desde su publicación o hasta que aparezca una versión más nueva.", explain: "Es la disponibilidad indicada." },
                { s: "El Portal de confianza de servicios es donde se aplican reglas de cumplimiento a sus propios recursos de Azure.", explain: "Eso es Azure Policy; el portal documenta las prácticas propias de Microsoft." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the Service Trust Portal.",
            parts: [
              "From ",
              { options: ["All Documents", "My Library", "the home page"], answer: 0 },
              " you can pin documents so they appear in ",
              { options: ["My Library", "All Documents", "Azure Policy"], answer: 0 },
              "."
            ],
            explain: "You pin documents from All Documents, and they show up in My Library.",
            es: {
              q: "Complete la afirmación sobre el Portal de confianza de servicios.",
              parts: [
                "Desde ",
                { options: ["Todos los documentos", "Mi biblioteca", "la página principal"] },
                " puede fijar documentos para que aparezcan en ",
                { options: ["Mi biblioteca", "Todos los documentos", "Azure Policy"] },
                "."
              ],
              explain: "Los documentos se fijan desde Todos los documentos y aparecen en Mi biblioteca."
            }
          }
        ]
      }
    }
  ]
});
