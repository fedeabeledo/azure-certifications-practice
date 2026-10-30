// SC-900 > Introduction to Microsoft Entra > Describe the access management capabilities of Microsoft Entra
Catalog.module("sc-900", {
  id: "entra-access-management",
  name: "Describe the access management capabilities of Microsoft Entra",
  es: { name: "Describir las funcionalidades de administración de acceso de Microsoft Entra" },
  url: "https://learn.microsoft.com/en-us/training/modules/explore-access-management-capabilities/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Conditional Access",
        q: "Users of Microsoft 365 Copilot must sign in with phishing-resistant MFA, while other apps accept any MFA. Which Conditional Access feature makes this possible?",
        options: ["Authentication strengths", "Security defaults", "Session controls with App Control", "Named locations"],
        answer: 0,
        explain: "Authentication strength is a grant control that specifies which method combinations are allowed, so sensitive resources can require phishing-resistant MFA.",
        es: {
          topic: "Acceso condicional",
          q: "Los usuarios de Microsoft 365 Copilot deben iniciar sesión con MFA resistente al phishing, mientras que las demás aplicaciones aceptan cualquier MFA. ¿Qué característica del acceso condicional lo permite?",
          options: ["Los niveles de autenticación", "Los valores predeterminados de seguridad", "Los controles de sesión con App Control", "Las ubicaciones con nombre"],
          explain: "El nivel de autenticación es un control de concesión que especifica qué combinaciones de métodos se permiten, así que los recursos sensibles pueden exigir MFA resistente al phishing."
        }
      },
      {
        type: "single",
        topic: "Global Secure Access",
        q: "A company wants to replace its VPN so remote users get access only to specific private apps instead of the whole network. Which solution fits?",
        options: ["Microsoft Entra Private Access", "Microsoft Entra Internet Access", "Azure RBAC", "Microsoft Entra password protection"],
        answer: 0,
        explain: "Private Access replaces legacy VPNs with Zero Trust Network Access, granting per-app access to private resources.",
        es: {
          topic: "Acceso seguro global",
          q: "Una empresa quiere reemplazar su VPN para que los usuarios remotos accedan solo a aplicaciones privadas específicas y no a toda la red. ¿Qué solución corresponde?",
          options: ["Microsoft Entra Private Access", "Microsoft Entra Internet Access", "Azure RBAC", "La protección de contraseñas de Microsoft Entra"],
          explain: "Private Access reemplaza las VPN heredadas con acceso a la red de confianza cero (ZTNA), que concede acceso por aplicación a los recursos privados."
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra roles and RBAC",
        q: "A helpdesk lead needs to create users and reset group memberships, but nothing else in Microsoft Entra. Following least privilege, which built-in role should be assigned?",
        options: ["Global administrator", "User administrator", "Billing administrator", "Security administrator"],
        answer: 1,
        explain: "User administrator manages all aspects of users and groups. Global administrator would grant far more than needed.",
        es: {
          topic: "Roles de Microsoft Entra y RBAC",
          q: "Un responsable de soporte técnico necesita crear usuarios y modificar pertenencias a grupos, y nada más en Microsoft Entra. Según los privilegios mínimos, ¿qué rol integrado se debe asignar?",
          options: ["Administrador global", "Administrador de usuarios", "Administrador de facturación", "Administrador de seguridad"],
          explain: "El administrador de usuarios administra todos los aspectos de usuarios y grupos. El administrador global daría mucho más de lo necesario."
        }
      },
      {
        type: "match",
        topic: "Conditional Access",
        q: "Match each element to the part of a Conditional Access policy it belongs to.",
        values: ["Assignment", "Access control"],
        targets: [
          { t: "Sign-in risk from Microsoft Entra ID Protection", answer: 0 },
          { t: "Require the device to be marked as compliant", answer: 1 },
          { t: "Named locations and trusted IP ranges", answer: 0 },
          { t: "Sign-in frequency session control", answer: 1 }
        ],
        explain: "Assignments define who, what, where and when (users, resources, network, conditions). Access controls are block, grant requirements and session controls.",
        es: {
          topic: "Acceso condicional",
          q: "Relacione cada elemento con la parte de una directiva de acceso condicional a la que pertenece.",
          values: ["Asignación", "Control de acceso"],
          targets: [
            { t: "El riesgo de inicio de sesión de Microsoft Entra ID Protection" },
            { t: "Requerir que el dispositivo esté marcado como compatible" },
            { t: "Las ubicaciones con nombre y los intervalos de IP de confianza" },
            { t: "El control de sesión de frecuencia de inicio de sesión" }
          ],
          explain: "Las asignaciones definen quién, qué, dónde y cuándo (usuarios, recursos, red, condiciones). Los controles de acceso son el bloqueo, los requisitos de concesión y los controles de sesión."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Conditional Access", s: "Conditional Access policies are enforced before first-factor authentication.", answer: false, explain: "They're enforced after first-factor authentication completes." },
          { topic: "Global Secure Access", s: "Microsoft Entra Internet Access for Microsoft Services is included with Microsoft Entra ID P1 or P2.", answer: true, explain: "Internet Access for all internet traffic needs the Entra Suite or a standalone license." },
          { topic: "Microsoft Entra roles and RBAC", s: "Azure RBAC roles control access to Microsoft Entra resources like users and groups.", answer: false, explain: "Azure RBAC controls Azure resources like VMs and storage; Microsoft Entra RBAC controls users, groups and apps." }
        ],
        es: {
          statements: [
            { topic: "Acceso condicional", s: "Las directivas de acceso condicional se aplican antes de la autenticación del primer factor.", explain: "Se aplican después de completar la autenticación del primer factor." },
            { topic: "Acceso seguro global", s: "Microsoft Entra Internet Access para Microsoft Services está incluido con Microsoft Entra ID P1 o P2.", explain: "Internet Access para todo el tráfico de internet requiere Entra Suite o una licencia independiente." },
            { topic: "Roles de Microsoft Entra y RBAC", s: "Los roles de Azure RBAC controlan el acceso a recursos de Microsoft Entra como usuarios y grupos.", explain: "Azure RBAC controla recursos de Azure como máquinas virtuales y almacenamiento; Microsoft Entra RBAC controla usuarios, grupos y aplicaciones." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Global Secure Access",
        q: "Complete the statement about Global Secure Access.",
        parts: [
          "Global Secure Access is Microsoft's ",
          { options: ["Security Service Edge (SSE)", "SIEM", "data loss prevention"], answer: 0 },
          " solution, and it uses a ",
          { options: ["client on the end-user device", "domain controller agent", "VPN gateway in each region"], answer: 0 },
          " to route specific traffic profiles through the service."
        ],
        explain: "Global Secure Access is an SSE solution; the Global Secure Access client controls network traffic at the device.",
        es: {
          topic: "Acceso seguro global",
          q: "Complete la afirmación sobre el acceso seguro global.",
          parts: [
            "El acceso seguro global es la solución de ",
            { options: ["Security Service Edge (SSE)", "SIEM", "prevención de pérdida de datos"] },
            " de Microsoft, y usa un ",
            { options: ["cliente en el dispositivo del usuario final", "agente en el controlador de dominio", "puerta de enlace VPN en cada región"] },
            " para enrutar perfiles de tráfico específicos a través del servicio."
          ],
          explain: "El acceso seguro global es una solución SSE; el cliente de acceso seguro global controla el tráfico de red en el dispositivo."
        }
      },
      {
        type: "single",
        topic: "Conditional Access",
        q: "An organization wants to block downloads of sensitive documents from unmanaged devices but still let users view them in the browser. Which Conditional Access control fits?",
        options: ["Block access", "A session control (App Control)", "Require a password change", "Require terms of use"],
        answer: 1,
        explain: "App Control uses Defender for Cloud Apps signals to block download, cut, copy and print within an allowed session.",
        es: {
          topic: "Acceso condicional",
          q: "Una organización quiere bloquear la descarga de documentos sensibles desde dispositivos no administrados, pero seguir permitiendo verlos en el explorador. ¿Qué control de acceso condicional corresponde?",
          options: ["Bloquear el acceso", "Un control de sesión (App Control)", "Requerir cambiar la contraseña", "Requerir términos de uso"],
          explain: "App Control usa señales de Defender for Cloud Apps para bloquear la descarga, cortar, copiar e imprimir dentro de una sesión permitida."
        }
      },
      {
        type: "multi",
        topic: "Global Secure Access",
        q: "Which two are features of Microsoft Entra Internet Access?",
        options: ["Web content filtering", "Prompt injection protection", "Quick Access to private resources by FQDN", "Custom banned password lists", "Privileged role activation"],
        answers: [0, 1],
        explain: "Internet Access includes web content filtering, universal Conditional Access, TLS inspection, threat intelligence, prompt injection protection and universal CAE. Quick Access belongs to Private Access.",
        es: {
          topic: "Acceso seguro global",
          q: "¿Cuáles son dos características de Microsoft Entra Internet Access?",
          options: ["El filtrado de contenido web", "La protección contra inyección de prompts", "El acceso rápido a recursos privados por FQDN", "Las listas personalizadas de contraseñas prohibidas", "La activación de roles con privilegios"],
          explain: "Internet Access incluye filtrado de contenido web, acceso condicional universal, inspección de TLS, inteligencia sobre amenazas, protección contra inyección de prompts y CAE universal. El acceso rápido pertenece a Private Access."
        }
      },
      {
        type: "single",
        topic: "Microsoft Entra roles and RBAC",
        q: "You want one user to manage app registrations only for the Contoso Expense Reports app, using a role you define. What do you need?",
        options: [
          "A custom role at object scope",
          "A built-in role with its permissions edited",
          "An Azure RBAC role at subscription scope",
          "A Conditional Access policy that targets the app and the user"
        ],
        answer: 0,
        explain: "Custom roles are created from a preset list of permissions and can be assigned at object scope, such as one app. Built-in roles can't be modified.",
        es: {
          topic: "Roles de Microsoft Entra y RBAC",
          q: "Quiere que un usuario administre registros de aplicaciones solo para la aplicación Contoso Expense Reports, con un rol que usted defina. ¿Qué necesita?",
          options: [
            "Un rol personalizado en el ámbito del objeto",
            "Un rol integrado con sus permisos editados",
            "Un rol de Azure RBAC en el ámbito de la suscripción",
            "Una directiva de acceso condicional dirigida a la aplicación y al usuario"
          ],
          explain: "Los roles personalizados se crean a partir de una lista predefinida de permisos y se pueden asignar en el ámbito de un objeto, como una aplicación. Los roles integrados no se pueden modificar."
        }
      },
      {
        type: "single",
        topic: "Conditional Access",
        q: "Which Conditional Access condition brings risk signals from Microsoft Purview adaptive protection into access decisions?",
        options: ["Insider risk", "Device platform", "Client apps", "Filters for devices"],
        answer: 0,
        explain: "The insider risk condition uses Purview adaptive protection signals, for example to block AI services when insider risk is elevated.",
        es: {
          topic: "Acceso condicional",
          q: "¿Qué condición del acceso condicional incorpora señales de riesgo de la protección adaptable de Microsoft Purview a las decisiones de acceso?",
          options: ["El riesgo interno", "La plataforma del dispositivo", "Las aplicaciones cliente", "Los filtros para dispositivos"],
          explain: "La condición de riesgo interno usa señales de la protección adaptable de Purview, por ejemplo para bloquear servicios de IA cuando el riesgo interno es elevado."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Microsoft Entra roles and RBAC", s: "Teams and SharePoint use Microsoft Entra roles for administrative access.", answer: true, explain: "Exchange and Intune have their own RBAC systems; Teams and SharePoint don't." },
          { topic: "Global Secure Access", s: "Source IP restoration keeps location-based Conditional Access accurate even when traffic passes through the SSE proxy.", answer: true, explain: "It restores the original user IP in the sign-in logs." },
          { topic: "Conditional Access", s: "When several assignments are configured in one policy, satisfying any one of them triggers the policy.", answer: false, explain: "Assignments are logically ANDed; all must be satisfied." }
        ],
        es: {
          statements: [
            { topic: "Roles de Microsoft Entra y RBAC", s: "Teams y SharePoint usan roles de Microsoft Entra para el acceso administrativo.", explain: "Exchange e Intune tienen sus propios sistemas de RBAC; Teams y SharePoint no." },
            { topic: "Acceso seguro global", s: "La restauración de la IP de origen mantiene preciso el acceso condicional basado en la ubicación aunque el tráfico pase por el proxy SSE.", explain: "Restaura la IP original del usuario en los registros de inicio de sesión." },
            { topic: "Acceso condicional", s: "Cuando se configuran varias asignaciones en una directiva, basta con cumplir una para que se active.", explain: "Las asignaciones se combinan con un Y lógico; hay que cumplirlas todas." }
          ]
        }
      },
      {
        type: "single",
        topic: "Global Secure Access",
        q: "A company wants to stop employees from copying data into personal or unauthorized foreign Microsoft 365 tenants. Which capability fits?",
        options: ["Universal tenant restrictions", "Web content filtering by category", "Quick Access", "Custom roles"],
        answer: 0,
        explain: "Universal tenant restrictions, part of Internet Access for Microsoft Services, prevent data exfiltration to unauthorized tenants or personal accounts.",
        es: {
          topic: "Acceso seguro global",
          q: "Una empresa quiere impedir que los empleados copien datos en inquilinos de Microsoft 365 personales o ajenos no autorizados. ¿Qué capacidad corresponde?",
          options: ["Las restricciones de inquilinos", "El filtrado web por categoría", "El acceso rápido", "Los roles personalizados"],
          explain: "Las restricciones universales de inquilinos, parte de Internet Access para Microsoft Services, evitan la filtración de datos hacia inquilinos no autorizados o cuentas personales."
        }
      }
    ]
  },
  units: [
    {
      id: "conditional-access",
      name: "Describe Conditional Access",
      es: { name: "Descripción del acceso condicional" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-access-management-capabilities/2-describe-conditional-access-azure-ad",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "dropdown",
            q: "Complete the statement about Conditional Access.",
            parts: [
              "Conditional Access is Microsoft's ",
              { options: ["Zero Trust policy engine", "password vault", "SIEM solution"], answer: 0 },
              ", and at their simplest its policies are ",
              { options: ["if-then statements", "firewall rules", "encryption keys"], answer: 0 },
              "."
            ],
            explain: "Conditional Access takes signals into account to enforce decisions: if a user wants to access a resource, then they must complete an action.",
            es: {
              q: "Complete la afirmación sobre el acceso condicional.",
              parts: [
                "El acceso condicional es el ",
                { options: ["motor de directivas de Confianza cero", "almacén de contraseñas", "solución SIEM"] },
                " de Microsoft, y en su forma más simple sus directivas son ",
                { options: ["instrucciones si-entonces", "reglas de firewall", "claves de cifrado"] },
                "."
              ],
              explain: "El acceso condicional tiene en cuenta señales para aplicar decisiones: si un usuario quiere acceder a un recurso, entonces debe completar una acción."
            }
          },
          {
            type: "single",
            q: "Which authentication strength restricts access to methods like Windows Hello for Business, FIDO2 security keys and certificate-based authentication (multifactor)?",
            options: ["Multifactor authentication strength", "Passwordless MFA strength", "Phishing-resistant MFA strength", "Security defaults"],
            answer: 2,
            explain: "Phishing-resistant MFA strength requires methods that interact with the sign-in surface. Passwordless MFA strength also allows Authenticator phone sign-in.",
            es: {
              q: "¿Qué nivel de autenticación restringe el acceso a métodos como Windows Hello para empresas, llaves FIDO2 y la autenticación basada en certificados (multifactor)?",
              options: ["Nivel de autenticación multifactor", "Nivel de MFA sin contraseña", "Nivel de MFA resistente al phishing", "Valores predeterminados de seguridad"],
              explain: "El nivel de MFA resistente al phishing exige métodos que interactúan con la superficie de inicio de sesión. El nivel sin contraseña también permite el inicio de sesión telefónico con Authenticator."
            }
          },
          {
            type: "match",
            q: "Match each requirement to the Conditional Access assignment it uses.",
            values: ["Users", "Target resources", "Network", "Conditions"],
            targets: [
              { t: "Apply the policy only to members of the Finance group", answer: 0 },
              { t: "Apply the policy when someone registers security information", answer: 1 },
              { t: "Exclude sign-ins from the head office's trusted IP range", answer: 2 },
              { t: "Apply the policy only to iOS and Android devices", answer: 3 }
            ],
            explain: "Users and groups are the users assignment; user actions are target resources; trusted IPs are network; device platform is a condition.",
            es: {
              q: "Relacione cada requisito con la asignación de acceso condicional que usa.",
              values: ["Usuarios", "Recursos de destino", "Red", "Condiciones"],
              targets: [
                { t: "Aplicar la directiva solo a los miembros del grupo Finanzas" },
                { t: "Aplicar la directiva cuando alguien registra información de seguridad" },
                { t: "Excluir los inicios de sesión desde el intervalo de IP de confianza de la sede central" },
                { t: "Aplicar la directiva solo a dispositivos iOS y Android" }
              ],
              explain: "Los usuarios y grupos son la asignación de usuarios; las acciones del usuario son recursos de destino; las IP de confianza son la red; la plataforma del dispositivo es una condición."
            }
          },
          {
            type: "multi",
            q: "Which two are grant requirements available in Conditional Access?",
            options: ["Require a compliant device", "Require a hybrid joined device", "Require a custom banned password", "Require a Temporary Access Pass", "Require a VPN connection to the corporate network"],
            answers: [0, 1],
            explain: "Grant requirements include MFA, authentication strength, compliant device, hybrid joined device, approved client app, password change and terms of use.",
            es: {
              q: "¿Cuáles son dos requisitos de concesión disponibles en el acceso condicional?",
              options: ["Requerir un dispositivo compatible", "Requerir un dispositivo unido híbrido", "Requerir una contraseña prohibida personalizada", "Requerir un pase de acceso temporal", "Requerir una conexión VPN a la red corporativa"],
              explain: "Los requisitos de concesión incluyen MFA, nivel de autenticación, dispositivo compatible, dispositivo unido híbrido, aplicación cliente aprobada, cambio de contraseña y términos de uso."
            }
          },
          {
            type: "single",
            q: "An organization wants to block access to Microsoft Security Copilot whenever a user's insider risk is elevated. What should it use?",
            options: ["A Conditional Access policy using insider risk", "Security defaults", "A custom role without Copilot permissions", "Password protection"],
            answer: 0,
            explain: "Conditional Access can protect AI services, including blocking access when insider risk is elevated.",
            es: {
              q: "Una organización quiere bloquear el acceso a Microsoft Security Copilot cuando el riesgo interno de un usuario es elevado. ¿Qué debe usar?",
              options: ["Una directiva de acceso condicional con riesgo interno", "Los valores predeterminados de seguridad", "Un rol personalizado sin permisos sobre Copilot", "La protección de contraseñas"],
              explain: "El acceso condicional puede proteger servicios de IA, incluido bloquear el acceso cuando el riesgo interno es elevado."
            }
          },
          {
            type: "single",
            q: "What is the minimum license required to use Conditional Access?",
            options: ["Microsoft Entra ID Free", "Microsoft Entra ID P1", "Microsoft Entra ID P2", "Microsoft Entra Suite"],
            answer: 1,
            explain: "Conditional Access requires P1 or P2. Free tenants can use security defaults instead.",
            es: {
              q: "¿Cuál es la licencia mínima necesaria para usar el acceso condicional?",
              options: ["Microsoft Entra ID Free", "Microsoft Entra ID P1", "Microsoft Entra ID P2", "Microsoft Entra Suite"],
              explain: "El acceso condicional requiere P1 o P2. Los inquilinos Free pueden usar los valores predeterminados de seguridad."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Conditional Access is intended to be the frontline of defense against denial-of-service attacks.", answer: false, explain: "It isn't, though it can use signals from those events." },
              { s: "Conditional Access policies can target workload identities and agent identities.", answer: true, explain: "This extends Zero Trust to AI workloads." },
              { s: "Block access is the most restrictive access control decision.", answer: true, explain: "It prevents access under the specified conditions." }
            ],
            es: {
              statements: [
                { s: "El acceso condicional está pensado como primera línea de defensa contra ataques de denegación de servicio.", explain: "No lo está, aunque puede usar señales de esos eventos." },
                { s: "Las directivas de acceso condicional pueden dirigirse a identidades de carga de trabajo e identidades de agente.", explain: "Esto extiende la Confianza cero a las cargas de trabajo de IA." },
                { s: "Bloquear acceso es la decisión de control de acceso más restrictiva.", explain: "Impide el acceso en las condiciones especificadas." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "global-secure-access",
      name: "Describe Global Secure Access in Microsoft Entra",
      es: { name: "Descripción del acceso seguro global en Microsoft Entra" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-access-management-capabilities/2a-describe-global-secure-access",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each capability to the Global Secure Access component.",
            values: ["Microsoft Entra Internet Access", "Internet Access for Microsoft Services", "Microsoft Entra Private Access"],
            targets: [
              { t: "TLS inspection of encrypted internet traffic", answer: 0 },
              { t: "Compliant network check before accessing Entra ID-integrated apps", answer: 1 },
              { t: "Quick Access to resources defined by FQDN, IP and ports", answer: 2 },
              { t: "App Discovery of private applications in use", answer: 2 }
            ],
            explain: "Internet Access is the SWG for internet and SaaS; Internet Access for Microsoft Services covers Microsoft 365 traffic; Private Access provides ZTNA to private apps.",
            es: {
              q: "Relacione cada capacidad con el componente del acceso seguro global.",
              values: ["Microsoft Entra Internet Access", "Internet Access para Microsoft Services", "Microsoft Entra Private Access"],
              targets: [
                { t: "Inspección de TLS del tráfico de internet cifrado" },
                { t: "Comprobación de red compatible antes de acceder a aplicaciones integradas con Entra ID" },
                { t: "Acceso rápido a recursos definidos por FQDN, IP y puertos" },
                { t: "Detección de las aplicaciones privadas en uso" }
              ],
              explain: "Internet Access es la puerta de enlace web segura para internet y SaaS; Internet Access para Microsoft Services cubre el tráfico de Microsoft 365; Private Access ofrece ZTNA a aplicaciones privadas."
            }
          },
          {
            type: "single",
            q: "A company wants Conditional Access to apply even to internet destinations that aren't federated with Microsoft Entra ID. Which Internet Access feature provides this?",
            options: ["Universal Conditional Access", "Source IP restoration", "Quick Access", "Enriched Microsoft 365 logs"],
            answer: 0,
            explain: "Universal Conditional Access applies policies to all internet destinations through Internet Access.",
            es: {
              q: "Una empresa quiere que el acceso condicional se aplique incluso a destinos de internet que no están federados con Microsoft Entra ID. ¿Qué característica de Internet Access lo ofrece?",
              options: ["El acceso condicional universal", "La restauración de la IP de origen", "El acceso rápido", "Los registros enriquecidos de Microsoft 365"],
              explain: "El acceso condicional universal aplica directivas a todos los destinos de internet mediante Internet Access."
            }
          },
          {
            type: "single",
            q: "What does a network connector do in Microsoft Entra Private Access?",
            options: [
              "Brokers traffic to the private resource",
              "Filters websites by content category",
              "Syncs passwords to on-premises AD",
              "Stores banned password lists"
            ],
            answer: 0,
            explain: "Private Access uses enterprise applications as containers for private resources and a connector to broker the traffic.",
            es: {
              q: "¿Qué hace un conector de red en Microsoft Entra Private Access?",
              options: [
                "Intermedia el tráfico hacia el recurso privado",
                "Filtra sitios web por categoría de contenido",
                "Sincroniza contraseñas con AD local",
                "Guarda las listas de contraseñas prohibidas"
              ],
              explain: "Private Access usa aplicaciones empresariales como contenedores de recursos privados y un conector que intermedia el tráfico."
            }
          },
          {
            type: "multi",
            q: "Which two security challenges does Security Service Edge help address?",
            options: [
              "Limiting lateral movement via VPN",
              "A perimeter for internet assets",
              "Classifying documents with sensitivity labels before they're shared",
              "Managing Azure subscription budgets",
              "Replacing Windows Hello for Business"
            ],
            answers: [0, 1],
            explain: "SSE also helps improve service in remote locations like branch offices.",
            es: {
              q: "¿Cuáles son dos desafíos de seguridad que Security Service Edge ayuda a resolver?",
              options: [
                "Limitar el movimiento lateral por VPN",
                "Un perímetro para los recursos en internet",
                "Clasificar documentos con etiquetas de confidencialidad antes de compartirlos",
                "Administrar los presupuestos de las suscripciones de Azure",
                "Reemplazar Windows Hello para empresas"
              ],
              explain: "SSE también ayuda a mejorar el servicio en ubicaciones remotas, como sucursales."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about licensing.",
            parts: [
              "Microsoft Entra Internet Access requires ",
              { options: ["the Microsoft Entra Suite or a standalone license", "only Microsoft Entra ID Free", "an Azure Firewall"], answer: 0 },
              ", while Internet Access for Microsoft Services is included with Microsoft Entra ID ",
              { options: ["P1 or P2", "Free", "Verified ID"], answer: 0 },
              "."
            ],
            explain: "Internet Access for all traffic needs the Entra Suite or a standalone license; the Microsoft Services variant comes with P1 or P2.",
            es: {
              q: "Complete la afirmación sobre las licencias.",
              parts: [
                "Microsoft Entra Internet Access requiere ",
                { options: ["Microsoft Entra Suite o una licencia independiente", "solo Microsoft Entra ID Free", "un Azure Firewall"] },
                ", mientras que Internet Access para Microsoft Services viene incluido con Microsoft Entra ID ",
                { options: ["P1 o P2", "Free", "Verified ID"] },
                "."
              ],
              explain: "Internet Access para todo el tráfico requiere Entra Suite o una licencia independiente; la variante para Microsoft Services viene con P1 o P2."
            }
          },
          {
            type: "single",
            q: "Administrators want to find unauthorized AI applications employees are using across the organization. Which Global Secure Access capability helps?",
            options: ["Shadow AI discovery", "Source IP restoration", "Custom roles", "Password writeback"],
            answer: 0,
            explain: "Shadow AI discovery identifies unmanaged AI apps so admins can understand and control AI usage.",
            es: {
              q: "Los administradores quieren encontrar las aplicaciones de IA no autorizadas que usan los empleados en la organización. ¿Qué capacidad del acceso seguro global ayuda?",
              options: ["La detección de IA en la sombra", "La restauración de la IP de origen", "Los roles personalizados", "La escritura diferida de contraseñas"],
              explain: "La detección de IA en la sombra identifica aplicaciones de IA no administradas para que los administradores entiendan y controlen su uso."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Per-app Access lets each enterprise application have its own resource definitions, user assignments and Conditional Access policies.", answer: true, explain: "It's more granular than Quick Access." },
              { s: "Universal Continuous Access Evaluation can adjust or block access in near real time when something changes.", answer: true, explain: "Apps and Entra communicate constantly." },
              { s: "Microsoft Entra Private Access grants broad network-level connectivity like a traditional VPN.", answer: false, explain: "It uses ZTNA to grant per-app access." }
            ],
            es: {
              statements: [
                { s: "El acceso por aplicación permite que cada aplicación empresarial tenga sus propias definiciones de recursos, asignaciones de usuarios y directivas de acceso condicional.", explain: "Es más granular que el acceso rápido." },
                { s: "La evaluación continua de acceso universal puede ajustar o bloquear el acceso casi en tiempo real cuando algo cambia.", explain: "Las aplicaciones y Entra se comunican constantemente." },
                { s: "Microsoft Entra Private Access concede conectividad amplia a nivel de red como una VPN tradicional.", explain: "Usa ZTNA para conceder acceso por aplicación." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "roles-rbac",
      name: "Describe Microsoft Entra roles and role-based access control (RBAC)",
      es: { name: "Descripción de los roles de Microsoft Entra y el control de acceso basado en roles (RBAC)" },
      url: "https://learn.microsoft.com/en-us/training/modules/explore-access-management-capabilities/3-describe-azure-role-based-access-control",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "match",
            q: "Match each built-in role to its category of Microsoft Entra roles.",
            values: ["Microsoft Entra specific", "Service-specific", "Cross-service"],
            targets: [
              { t: "Groups Administrator", answer: 0 },
              { t: "Exchange Administrator", answer: 1 },
              { t: "Security Administrator", answer: 2 },
              { t: "Compliance Administrator", answer: 2 }
            ],
            explain: "Entra-specific roles manage Entra resources; service-specific roles manage one Microsoft 365 service; cross-service roles span several services.",
            es: {
              q: "Relacione cada rol integrado con su categoría de roles de Microsoft Entra.",
              values: ["Específico de Microsoft Entra", "Específico del servicio", "Entre servicios"],
              targets: [
                { t: "Administrador de grupos" },
                { t: "Administrador de Exchange" },
                { t: "Administrador de seguridad" },
                { t: "Administrador de cumplimiento" }
              ],
              explain: "Los roles específicos de Entra administran recursos de Entra; los específicos del servicio administran un servicio de Microsoft 365; los roles entre servicios abarcan varios servicios."
            }
          },
          {
            type: "single",
            q: "Who automatically becomes a global administrator of a Microsoft Entra tenant?",
            options: ["The person who signs up for the tenant", "Every member user", "The first guest invited", "Nobody until a role is assigned"],
            answer: 0,
            explain: "The person who signs up for the tenant automatically becomes a global administrator.",
            es: {
              q: "¿Quién se convierte automáticamente en administrador global de un inquilino de Microsoft Entra?",
              options: ["La persona que registra el inquilino", "Todos los usuarios miembros", "El primer invitado", "Nadie hasta que se asigne un rol"],
              explain: "La persona que registra el inquilino se convierte automáticamente en administrador global."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about custom roles.",
            parts: [
              "Granting permissions with a custom role starts by creating a ",
              { options: ["role definition", "Conditional Access policy", "security group"], answer: 0 },
              " and then creating a ",
              { options: ["role assignment", "banned password list", "named location"], answer: 0 },
              " at a specified scope."
            ],
            explain: "Custom roles are a two-step process: define the permissions, then assign the role to users or groups at a scope.",
            es: {
              q: "Complete la afirmación sobre los roles personalizados.",
              parts: [
                "Conceder permisos con un rol personalizado empieza por crear una ",
                { options: ["definición de rol", "directiva de acceso condicional", "grupo de seguridad"] },
                " y luego crear una ",
                { options: ["asignación de rol", "lista de contraseñas prohibidas", "ubicación con nombre"] },
                " en un ámbito especificado."
              ],
              explain: "Los roles personalizados son un proceso de dos pasos: definir los permisos y luego asignar el rol a usuarios o grupos en un ámbito."
            }
          },
          {
            type: "single",
            q: "An administrator needs to grant someone permission to manage virtual machines in a resource group. Which access control system applies?",
            options: ["Azure RBAC", "Microsoft Entra RBAC", "Exchange RBAC", "Security defaults"],
            answer: 0,
            explain: "Azure RBAC controls Azure resources like VMs and storage through Azure Resource Manager.",
            es: {
              q: "Un administrador necesita dar a alguien permiso para administrar máquinas virtuales en un grupo de recursos. ¿Qué sistema de control de acceso se aplica?",
              options: ["Azure RBAC", "Microsoft Entra RBAC", "El RBAC de Exchange", "Los valores predeterminados de seguridad"],
              explain: "Azure RBAC controla recursos de Azure como máquinas virtuales y almacenamiento mediante Azure Resource Manager."
            }
          },
          {
            type: "multi",
            q: "Which two statements about Microsoft Entra roles are true?",
            options: [
              "The permissions of built-in roles can't be modified",
              "Custom roles require a Microsoft Entra ID P1 or P2 license",
              "Custom roles can use permissions that built-in roles don't have",
              "Billing administrators can create and manage all users",
              "Teams has its own separate RBAC system"
            ],
            answers: [0, 1],
            explain: "Built-in roles are fixed; custom roles pick from the same permissions used by built-in roles and need P1 or P2.",
            es: {
              q: "¿Cuáles son dos afirmaciones verdaderas sobre los roles de Microsoft Entra?",
              options: [
                "Los permisos de los roles integrados no se pueden modificar",
                "Los roles personalizados requieren una licencia de Microsoft Entra ID P1 o P2",
                "Los roles personalizados pueden usar permisos que los roles integrados no tienen",
                "Los administradores de facturación pueden crear y administrar todos los usuarios",
                "Teams tiene su propio sistema de RBAC separado"
              ],
              explain: "Los roles integrados son fijos; los personalizados eligen entre los mismos permisos que usan los integrados y requieren P1 o P2."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Assigning least privilege limits the damage that could be done with a compromised account.", answer: true, explain: "It also limits what AI tools running under those credentials can reach." },
              { s: "The Billing administrator role can make purchases and manage subscriptions.", answer: true, explain: "It also manages support tickets and monitors service health." },
              { s: "Microsoft Entra RBAC and Azure RBAC store role definitions in the same data store.", answer: false, explain: "They use different data stores and policy decision points." }
            ],
            es: {
              statements: [
                { s: "Asignar privilegios mínimos limita el daño que puede causar una cuenta comprometida.", explain: "También limita lo que pueden alcanzar las herramientas de IA que usan esas credenciales." },
                { s: "El rol Administrador de facturación puede hacer compras y administrar suscripciones.", explain: "También administra incidencias de soporte y supervisa el estado del servicio." },
                { s: "Microsoft Entra RBAC y Azure RBAC guardan las definiciones de roles en el mismo almacén de datos.", explain: "Usan almacenes de datos y puntos de decisión de directivas diferentes." }
              ]
            }
          }
        ]
      }
    }
  ]
});
