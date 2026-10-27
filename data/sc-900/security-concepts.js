// SC-900 > Introduction to security, compliance, and identity concepts > Describe security and compliance concepts
Catalog.module("sc-900", {
  id: "security-concepts",
  name: "Describe security and compliance concepts",
  es: { name: "Descripción de conceptos de seguridad y cumplimiento" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/",
  quiz: {
    added: "2026-10-26",
    items: [
      {
        type: "single",
        topic: "Shared responsibility",
        q: "An attacker compromises an employee's laptop and uses it to access cloud services as that employee. Under the shared responsibility model, who is responsible for securing that laptop?",
        options: ["The cloud provider, if the service is SaaS", "The customer, in every service model", "The cloud provider, if the service is PaaS", "The hardware manufacturer"],
        answer: 1,
        explain: "Endpoints that connect to your cloud services are always yours to secure, whatever the service model.",
        es: {
          topic: "Responsabilidad compartida",
          q: "Un atacante compromete la laptop de un empleado y la usa para acceder a servicios en la nube como ese empleado. Según el modelo de responsabilidad compartida, ¿quién es responsable de proteger esa laptop?",
          options: ["El proveedor de nube, si el servicio es SaaS", "El cliente, en todos los modelos de servicio", "El proveedor de nube, si el servicio es PaaS", "El fabricante del hardware"],
          explain: "Los dispositivos que se conectan a sus servicios en la nube siempre son responsabilidad suya, sin importar el modelo de servicio."
        }
      },
      {
        type: "single",
        topic: "Zero Trust",
        q: "Before granting access, a system evaluates the user's identity, sign-in location, device compliance, the data's classification and any anomalies. Which Zero Trust principle is being applied?",
        options: ["Verify explicitly", "Use least privileged access", "Assume breach", "Defense in depth"],
        answer: 0,
        explain: "Verify explicitly means authenticating and authorizing based on all available signals, not a single factor. Defense in depth is a layered strategy, not a Zero Trust principle.",
        es: {
          topic: "Confianza cero",
          q: "Antes de conceder acceso, un sistema evalúa la identidad del usuario, la ubicación de inicio de sesión, el cumplimiento del dispositivo, la clasificación de los datos y cualquier anomalía. ¿Qué principio de Confianza cero se aplica?",
          options: ["Verificar explícitamente", "Usar el acceso con privilegios mínimos", "Asumir que hay una vulneración", "Defensa en profundidad"],
          explain: "Verificar explícitamente significa autenticar y autorizar según todas las señales disponibles, no un solo factor. La defensa en profundidad es una estrategia por capas, no un principio de Confianza cero."
        }
      },
      {
        type: "match",
        topic: "Defense in depth",
        q: "Match each event to the property of the CIA triad it primarily affects.",
        values: ["Confidentiality", "Integrity", "Availability"],
        targets: [
          { t: "Ransomware encrypts data until a ransom is paid", answer: 2 },
          { t: "An attacker modifies financial records", answer: 1 },
          { t: "Customer records are exposed in a data breach", answer: 0 },
          { t: "A DDoS attack floods a service until it stops responding", answer: 2 }
        ],
        explain: "Stealing or exposing data hits confidentiality, modifying it hits integrity, and taking systems or data out of reach, as ransomware and DDoS do, hits availability.",
        es: {
          topic: "Defensa en profundidad",
          q: "Relacione cada evento con la propiedad de la tríada CIA a la que afecta principalmente.",
          values: ["Confidencialidad", "Integridad", "Disponibilidad"],
          targets: [
            { t: "Un ransomware cifra los datos hasta que se paga un rescate" },
            { t: "Un atacante modifica registros financieros" },
            { t: "Se exponen registros de clientes en una filtración de datos" },
            { t: "Un ataque DDoS satura un servicio hasta que deja de responder" }
          ],
          explain: "Robar o exponer datos afecta la confidencialidad, modificarlos afecta la integridad, y dejar sistemas o datos fuera de alcance, como hacen el ransomware y los DDoS, afecta la disponibilidad."
        }
      },
      {
        type: "multi",
        topic: "Encryption and hashing",
        q: "Which two statements about hashing are true?",
        options: [
          "The same input hashed with the same algorithm always produces the same hash",
          "Hashing is a one-way process",
          "Hashing requires a private key",
          "A hash can be decrypted with the right key",
          "Hashing makes data in transit readable only by the intended recipient"
        ],
        answers: [0, 1],
        explain: "Hashing is deterministic and one-way, and it doesn't use keys. Keeping data in transit private is the job of encryption, such as TLS.",
        es: {
          topic: "Cifrado y hash",
          q: "¿Cuáles son dos afirmaciones verdaderas sobre el hash?",
          options: [
            "La misma entrada con el mismo algoritmo siempre produce el mismo hash",
            "El hash es un proceso unidireccional",
            "El hash requiere una clave privada",
            "Un hash se puede descifrar con la clave correcta",
            "El hash hace que los datos en tránsito solo sean legibles para el destinatario"
          ],
          explain: "El hash es determinista y unidireccional, y no usa claves. Mantener privados los datos en tránsito es tarea del cifrado, como TLS."
        }
      },
      {
        type: "dropdown",
        topic: "Governance, risk, and compliance",
        q: "Complete the statement about compliance and security.",
        parts: [
          "Compliance defines the ",
          { options: ["maximum protections", "minimum standards", "optional guidelines"], answer: 1 },
          " that laws and regulations require, while security is ",
          { options: ["broader", "narrower", "identical"], answer: 0 },
          ", covering all the processes, technologies and practices that protect data and systems."
        ],
        explain: "Compliance is the required minimum. An organization can be compliant and still have significant security gaps.",
        es: {
          topic: "Gobernanza, riesgo y cumplimiento",
          q: "Complete la afirmación sobre cumplimiento y seguridad.",
          parts: [
            "El cumplimiento define los ",
            { options: ["máximos niveles de protección", "estándares mínimos", "lineamientos opcionales"] },
            " que exigen las leyes y regulaciones, mientras que la seguridad es ",
            { options: ["más amplia", "más acotada", "idéntica"] },
            " y abarca todos los procesos, tecnologías y prácticas que protegen los datos y los sistemas."
          ],
          explain: "El cumplimiento es el mínimo exigido. Una organización puede cumplir y aun así tener brechas de seguridad importantes."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Shared responsibility", s: "The customer is always responsible for identities and access, whatever the cloud service model.", answer: true, explain: "Identities and access are among the responsibilities you always retain." },
          { topic: "Defense in depth", s: "Network segmentation limits the damage an attacker can cause after compromising a single resource.", answer: true, explain: "Isolated zones keep a compromise in one zone from exposing everything else." },
          { topic: "Zero Trust", s: "Zero Trust is a single product that you can buy and deploy.", answer: false, explain: "Zero Trust is a security strategy, not a single product or technology." }
        ],
        es: {
          statements: [
            { topic: "Responsabilidad compartida", s: "El cliente siempre es responsable de las identidades y el acceso, sea cual sea el modelo de servicio en la nube.", explain: "Las identidades y el acceso están entre las responsabilidades que siempre conserva." },
            { topic: "Defensa en profundidad", s: "La segmentación de red limita el daño que puede causar un atacante después de comprometer un solo recurso.", explain: "Las zonas aisladas evitan que el compromiso de una zona exponga todo lo demás." },
            { topic: "Confianza cero", s: "Confianza cero es un producto único que se puede comprar e implementar.", explain: "Confianza cero es una estrategia de seguridad, no un producto ni una tecnología única." }
          ]
        }
      },
      {
        type: "single",
        topic: "Encryption and hashing",
        q: "Which type of device is designed specifically to store and protect cryptographic keys in tamper-resistant hardware?",
        options: ["A network security group (NSG)", "A hardware security module (HSM)", "A domain controller", "A SIEM"],
        answer: 1,
        explain: "HSMs are specialized, tamper-resistant devices for storing and protecting cryptographic keys.",
        es: {
          topic: "Cifrado y hash",
          q: "¿Qué tipo de dispositivo está diseñado específicamente para almacenar y proteger claves criptográficas en hardware resistente a manipulaciones?",
          options: ["Un grupo de seguridad de red (NSG)", "Un módulo de seguridad de hardware (HSM)", "Un controlador de dominio", "Un SIEM"],
          explain: "Los HSM son dispositivos especializados y resistentes a manipulaciones para almacenar y proteger claves criptográficas."
        }
      },
      {
        type: "single",
        topic: "Governance, risk, and compliance",
        q: "Which step of the risk management process continuously tracks identified risks, measures how effective the controls are and updates the assessment as the environment changes?",
        options: ["Identify", "Assess", "Respond", "Monitor"],
        answer: 3,
        explain: "Monitor is the ongoing step. Identify discovers risks, Assess scores them by impact and likelihood, and Respond decides how to handle each one.",
        es: {
          topic: "Gobernanza, riesgo y cumplimiento",
          q: "¿Qué paso del proceso de gestión de riesgos hace un seguimiento continuo de los riesgos identificados, mide la eficacia de los controles y actualiza la evaluación a medida que cambia el entorno?",
          options: ["Identificar", "Evaluar", "Responder", "Supervisar"],
          explain: "Supervisar es el paso continuo. Identificar descubre los riesgos, Evaluar los puntúa según impacto y probabilidad, y Responder decide cómo tratar cada uno."
        }
      },
      {
        type: "single",
        topic: "Shared responsibility",
        q: "Your company rolls out a SaaS AI assistant to its employees. Which responsibility remains with your company?",
        options: [
          "Hosting and securing the AI model",
          "Providing the platform's built-in content filtering",
          "Deciding which sensitive data the AI assistant is allowed to access",
          "Managing the compute infrastructure behind the service"
        ],
        answer: 2,
        explain: "The provider secures the model, the platform safety controls and the compute. You control what data the AI can reach, who can use it and how it's configured.",
        es: {
          topic: "Responsabilidad compartida",
          q: "Su empresa implementa un asistente de IA SaaS para sus empleados. ¿Qué responsabilidad sigue siendo de su empresa?",
          options: [
            "Hospedar y proteger el modelo de IA",
            "Proveer el filtrado de contenido integrado de la plataforma",
            "Decidir a qué datos confidenciales puede acceder el asistente de IA",
            "Administrar la infraestructura de cómputo detrás del servicio"
          ],
          explain: "El proveedor protege el modelo, los controles de seguridad de la plataforma y el cómputo. Usted controla a qué datos accede la IA, quién puede usarla y cómo se configura."
        }
      },
      {
        type: "single",
        topic: "Defense in depth",
        q: "Which defense-in-depth layer protects the boundary of a network from large-scale external attacks, for example with DDoS protection and perimeter firewalls?",
        options: ["Network security", "Perimeter security", "Compute security", "Physical security"],
        answer: 1,
        explain: "Perimeter security guards the network boundary with DDoS protection and perimeter firewalls. Network security controls traffic between resources inside the network.",
        es: {
          topic: "Defensa en profundidad",
          q: "¿Qué capa de la defensa en profundidad protege el límite de una red frente a ataques externos a gran escala, por ejemplo con protección contra DDoS y firewalls perimetrales?",
          options: ["Seguridad de red", "Seguridad perimetral", "Seguridad de cómputo", "Seguridad física"],
          explain: "La seguridad perimetral protege el límite de la red con protección contra DDoS y firewalls perimetrales. La seguridad de red controla el tráfico entre recursos dentro de la red."
        }
      },
      {
        type: "single",
        topic: "Zero Trust",
        q: "A security team segments access, encrypts data end to end and deploys analytics so it can detect intrusions quickly and limit the damage. Which Zero Trust principle drives these measures?",
        options: ["Verify explicitly", "Use least privileged access", "Assume breach", "Trust the internal network"],
        answer: 2,
        explain: "Assume breach means designing as if an attacker will get in: segmentation, end-to-end encryption and monitoring limit and expose the damage.",
        es: {
          topic: "Confianza cero",
          q: "Un equipo de seguridad segmenta el acceso, cifra los datos de extremo a extremo e implementa análisis para detectar intrusiones rápido y limitar el daño. ¿Qué principio de Confianza cero impulsa estas medidas?",
          options: ["Verificar explícitamente", "Usar el acceso con privilegios mínimos", "Asumir que hay una vulneración", "Confiar en la red interna"],
          explain: "Asumir que hay una vulneración significa diseñar como si un atacante fuera a entrar: la segmentación, el cifrado de extremo a extremo y la supervisión limitan y revelan el daño."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Encryption and hashing", s: "Asymmetric encryption is used in protocols such as HTTPS.", answer: true, explain: "HTTPS and email encryption rely on asymmetric encryption." },
          { topic: "Governance, risk, and compliance", s: "Transferring a risk can include measures such as buying insurance.", answer: true, explain: "Transfer is one of the four responses: accept, mitigate, transfer or avoid." },
          { topic: "Encryption and hashing", s: "Salting means adding the same random value to every password before hashing.", answer: false, explain: "Each password gets its own unique, randomly generated salt, so identical passwords produce different hashes." }
        ],
        es: {
          statements: [
            { topic: "Cifrado y hash", s: "El cifrado asimétrico se usa en protocolos como HTTPS.", explain: "HTTPS y el cifrado de correo se basan en el cifrado asimétrico." },
            { topic: "Gobernanza, riesgo y cumplimiento", s: "Transferir un riesgo puede incluir medidas como contratar un seguro.", explain: "Transferir es una de las cuatro respuestas: aceptar, mitigar, transferir o evitar." },
            { topic: "Cifrado y hash", s: "Agregar sal (salting) significa sumar el mismo valor aleatorio a todas las contraseñas antes de aplicar el hash.", explain: "Cada contraseña recibe su propia sal única y aleatoria, así que contraseñas idénticas producen hashes distintos." }
          ]
        }
      }
    ]
  },
  units: [
    {
      id: "shared-responsibility",
      name: "Describe the shared responsibility model",
      es: { name: "Describir el modelo de responsabilidad compartida" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/2-describe-shared-responsibility-model",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Your company adopts a SaaS service. Which responsibility does your company keep?",
            options: ["Configuring tenant-level settings", "Securing the application stack", "Patching the underlying infrastructure", "Running the runtime environment"],
            answer: 0,
            explain: "In SaaS you're responsible for access management, your data and tenant-level settings. The provider manages the application stack and infrastructure.",
            es: {
              q: "Su empresa adopta un servicio SaaS. ¿Qué responsabilidad conserva su empresa?",
              options: ["Configurar las opciones a nivel de inquilino", "Proteger la pila de la aplicación", "Aplicar parches a la infraestructura subyacente", "Operar el entorno de ejecución"],
              explain: "En SaaS usted es responsable de la administración del acceso, sus datos y la configuración a nivel de inquilino. El proveedor administra la pila de la aplicación y la infraestructura."
            }
          },
          {
            type: "multi",
            q: "Which two responsibilities always stay with the customer, regardless of the cloud service model?",
            options: [
              "Securing the endpoints that connect to cloud services",
              "The security configuration choices in your tenant",
              "Securing the physical datacenter",
              "Securing the host machines",
              "Patching the operating system in PaaS"
            ],
            answers: [0, 1],
            explain: "Data, identities and access, endpoints and configuration choices always stay with you. Datacenter and hosts are the provider's; in PaaS so is the OS.",
            es: {
              q: "¿Cuáles son dos responsabilidades que siempre quedan en manos del cliente, sin importar el modelo de servicio en la nube?",
              options: [
                "Proteger los dispositivos que se conectan a los servicios en la nube",
                "Las decisiones de configuración de seguridad de su inquilino",
                "Proteger el centro de datos físico",
                "Proteger los equipos host",
                "Aplicar parches al sistema operativo en PaaS"
              ],
              explain: "Los datos, las identidades y el acceso, los dispositivos y las decisiones de configuración siempre son suyos. El centro de datos y los hosts son del proveedor; en PaaS, también el sistema operativo."
            }
          },
          {
            type: "single",
            q: "An attacker embeds instructions in external data that an AI application processes, to manipulate the AI's outputs. What is this risk called, and who is responsible for mitigating it?",
            options: [
              "Prompt injection; the customer mitigates it through input validation, access controls and monitoring",
              "Prompt injection; only the AI provider can mitigate it",
              "A rainbow table attack; the customer mitigates it with salting",
              "A DDoS attack; the provider mitigates it at the perimeter"
            ],
            answer: 0,
            explain: "Prompt injection is an AI-specific risk that the customer addresses with input validation, access controls and monitoring, even when the provider secures the platform.",
            es: {
              q: "Un atacante inserta instrucciones en datos externos que procesa una aplicación de IA, para manipular sus resultados. ¿Cómo se llama este riesgo y quién es responsable de mitigarlo?",
              options: [
                "Inyección de prompts; la mitiga el cliente con validación de entradas, controles de acceso y supervisión",
                "Inyección de prompts; solo el proveedor de IA puede mitigarla",
                "Un ataque con tablas arcoíris; lo mitiga el cliente agregando sal",
                "Un ataque DDoS; lo mitiga el proveedor en el perímetro"
              ],
              explain: "La inyección de prompts es un riesgo propio de la IA que el cliente aborda con validación de entradas, controles de acceso y supervisión, aunque el proveedor proteja la plataforma."
            }
          },
          {
            type: "match",
            q: "Match each element to the layer of an AI-enabled application it belongs to.",
            values: ["AI platform", "AI application", "AI usage"],
            targets: [
              { t: "Model hosting and built-in content filtering", answer: 0 },
              { t: "The connectors and plugins the app enables", answer: 1 },
              { t: "Acceptable use policies and the inputs people provide", answer: 2 },
              { t: "The data sources the app connects to", answer: 1 }
            ],
            explain: "The platform is the infrastructure, model and platform safety controls. The application is how the app is configured, including data sources, connectors and plugins. Usage is how people use it and the policies around it.",
            es: {
              q: "Relacione cada elemento con la capa de una aplicación con IA a la que pertenece.",
              values: ["Plataforma de IA", "Aplicación de IA", "Uso de la IA"],
              targets: [
                { t: "El hospedaje del modelo y el filtrado de contenido integrado" },
                { t: "Los conectores y complementos que habilita la aplicación" },
                { t: "Las directivas de uso aceptable y las entradas que proporcionan las personas" },
                { t: "Los orígenes de datos a los que se conecta la aplicación" }
              ],
              explain: "La plataforma es la infraestructura, el modelo y los controles de seguridad de la plataforma. La aplicación es cómo está configurada, incluidos orígenes de datos, conectores y complementos. El uso es cómo la usan las personas y las directivas que lo rigen."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about IaaS responsibilities.",
            parts: [
              "In IaaS, the cloud provider secures ",
              { options: ["the operating systems", "the host machines", "the applications"], answer: 1 },
              ", and you're responsible for ",
              { options: ["the physical network", "the datacenter", "the operating systems"], answer: 2 },
              "."
            ],
            explain: "In IaaS the provider secures the datacenter, network hardware and hosts. Operating systems, applications, network controls and data are yours.",
            es: {
              q: "Complete la afirmación sobre las responsabilidades en IaaS.",
              parts: [
                "En IaaS, el proveedor de nube protege ",
                { options: ["los sistemas operativos", "los equipos host", "las aplicaciones"] },
                ", y usted es responsable de ",
                { options: ["la red física", "el centro de datos", "los sistemas operativos"] },
                "."
              ],
              explain: "En IaaS el proveedor protege el centro de datos, el hardware de red y los hosts. Los sistemas operativos, las aplicaciones, los controles de red y los datos son suyos."
            }
          },
          {
            type: "single",
            q: "A storage account is misconfigured and exposes sensitive data, even though the cloud platform itself is properly secured. Who is responsible for this exposure?",
            options: ["The cloud provider", "The customer", "Both equally, because storage is shared", "Nobody, because the platform is secure"],
            answer: 1,
            explain: "Configuration choices in your tenant are always your responsibility. A misconfiguration can expose data even on a properly secured platform.",
            es: {
              q: "Una cuenta de almacenamiento está mal configurada y expone datos confidenciales, aunque la plataforma en la nube está bien protegida. ¿Quién es responsable de esta exposición?",
              options: ["El proveedor de nube", "El cliente", "Ambos por igual, porque el almacenamiento es compartido", "Nadie, porque la plataforma es segura"],
              explain: "Las decisiones de configuración de su inquilino siempre son responsabilidad suya. Una mala configuración puede exponer datos incluso en una plataforma bien protegida."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Moving to the cloud makes security entirely the cloud provider's responsibility.", answer: false, explain: "Some responsibilities always stay with you: data, identities, endpoints and configuration." },
              { s: "In PaaS, the cloud provider takes on responsibility for the operating system and the runtime environment.", answer: true, explain: "PaaS adds the OS and runtime to what the provider secures." },
              { s: "Even when the provider secures the AI platform, you decide who in your organization can access AI applications.", answer: true, explain: "Identity and access management for AI apps stays with you." }
            ],
            es: {
              statements: [
                { s: "Migrar a la nube hace que la seguridad sea responsabilidad exclusiva del proveedor de nube.", explain: "Algunas responsabilidades siempre son suyas: los datos, las identidades, los dispositivos y la configuración." },
                { s: "En PaaS, el proveedor de nube asume la responsabilidad del sistema operativo y del entorno de ejecución.", explain: "PaaS suma el sistema operativo y el entorno de ejecución a lo que protege el proveedor." },
                { s: "Aunque el proveedor proteja la plataforma de IA, usted decide quién en su organización puede acceder a las aplicaciones de IA.", explain: "La administración de identidades y acceso de las aplicaciones de IA sigue siendo suya." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "defense-in-depth",
      name: "Describe defense in depth",
      es: { name: "Descripción de la defensa en profundidad" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/3-describe-defense-depth",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "A company combines multiple overlapping security controls so that, if one is breached, the next one still prevents unauthorized access to data. What is this strategy called?",
            options: ["Zero Trust", "Defense in depth", "The CIA triad", "Perimeter security"],
            answer: 1,
            explain: "Defense in depth is a layered approach instead of relying on a single perimeter. Perimeter security is just one of its layers.",
            es: {
              q: "Una empresa combina varios controles de seguridad superpuestos para que, si uno se vulnera, el siguiente siga impidiendo el acceso no autorizado a los datos. ¿Cómo se llama esta estrategia?",
              options: ["Confianza cero", "Defensa en profundidad", "La tríada CIA", "Seguridad perimetral"],
              explain: "La defensa en profundidad es un enfoque por capas en lugar de depender de un único perímetro. La seguridad perimetral es solo una de sus capas."
            }
          },
          {
            type: "match",
            q: "Match each control to the defense-in-depth layer it belongs to.",
            values: ["Perimeter security", "Network security", "Compute security", "Application security"],
            targets: [
              { t: "DDoS protection that filters attack traffic", answer: 0 },
              { t: "Network security groups that restrict traffic between resources", answer: 1 },
              { t: "Patching operating systems and closing unnecessary ports", answer: 2 },
              { t: "Input validation to prevent SQL injection", answer: 3 }
            ],
            explain: "DDoS protection guards the perimeter, NSGs and segmentation control internal traffic, patching and port hygiene protect compute, and input validation is application security.",
            es: {
              q: "Relacione cada control con la capa de la defensa en profundidad a la que pertenece.",
              values: ["Seguridad perimetral", "Seguridad de red", "Seguridad de cómputo", "Seguridad de aplicaciones"],
              targets: [
                { t: "Protección contra DDoS que filtra el tráfico de ataque" },
                { t: "Grupos de seguridad de red que restringen el tráfico entre recursos" },
                { t: "Aplicar parches a los sistemas operativos y cerrar puertos innecesarios" },
                { t: "Validación de entradas para prevenir inyección de SQL" }
              ],
              explain: "La protección contra DDoS cuida el perímetro, los NSG y la segmentación controlan el tráfico interno, los parches y el cierre de puertos protegen el cómputo, y la validación de entradas es seguridad de aplicaciones."
            }
          },
          {
            type: "single",
            q: "Which defense-in-depth layer is the innermost and most critical, focused on protecting the information that matters most?",
            options: ["Application security", "Identity and access", "Data security", "Physical security"],
            answer: 2,
            explain: "Data security sits at the center, with access controls, encryption and classification. Physical security is the outermost layer.",
            es: {
              q: "¿Qué capa de la defensa en profundidad es la más interna y crítica, centrada en proteger la información más importante?",
              options: ["Seguridad de aplicaciones", "Identidad y acceso", "Seguridad de los datos", "Seguridad física"],
              explain: "La seguridad de los datos está en el centro, con controles de acceso, cifrado y clasificación. La seguridad física es la capa más externa."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the CIA triad.",
            parts: [
              "Attackers who steal data are targeting ",
              { options: ["integrity", "confidentiality", "availability"], answer: 1 },
              ", and attackers who take systems offline are targeting ",
              { options: ["availability", "integrity", "confidentiality"], answer: 0 },
              "."
            ],
            explain: "Stealing data breaks confidentiality; taking systems offline breaks availability. Modifying records breaks integrity.",
            es: {
              q: "Complete la afirmación sobre la tríada CIA.",
              parts: [
                "Los atacantes que roban datos atacan la ",
                { options: ["integridad", "confidencialidad", "disponibilidad"] },
                ", y los que dejan fuera de línea los sistemas atacan la ",
                { options: ["disponibilidad", "integridad", "confidencialidad"] },
                "."
              ],
              explain: "Robar datos rompe la confidencialidad; dejar sistemas fuera de línea rompe la disponibilidad. Modificar registros rompe la integridad."
            }
          },
          {
            type: "single",
            q: "You compare the hash of a downloaded software file with the value published by the vendor. Which security property are you checking?",
            options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
            answer: 1,
            explain: "Verifying a file's hash against the publisher's value is an integrity check: it confirms the file wasn't modified.",
            es: {
              q: "Compara el hash de un archivo de software descargado con el valor publicado por el proveedor. ¿Qué propiedad de seguridad está comprobando?",
              options: ["Confidencialidad", "Integridad", "Disponibilidad", "No repudio"],
              explain: "Comparar el hash de un archivo con el valor del editor es una comprobación de integridad: confirma que el archivo no fue modificado."
            }
          },
          {
            type: "multi",
            q: "Which two controls primarily support availability?",
            options: [
              "Redundant infrastructure with automatic failover",
              "Regular backups with tested recovery plans",
              "Cryptographic hashing",
              "Digital signatures",
              "Data classification"
            ],
            answers: [0, 1],
            explain: "Redundancy, failover, load balancing, backups and DDoS protection keep systems reachable. Hashing and signatures protect integrity; classification guides data protection.",
            es: {
              q: "¿Cuáles son dos controles que contribuyen principalmente a la disponibilidad?",
              options: [
                "Infraestructura redundante con conmutación por error automática",
                "Copias de seguridad periódicas con planes de recuperación probados",
                "El hash criptográfico",
                "Las firmas digitales",
                "La clasificación de datos"
              ],
              explain: "La redundancia, la conmutación por error, el equilibrio de carga, las copias de seguridad y la protección contra DDoS mantienen los sistemas accesibles. El hash y las firmas protegen la integridad; la clasificación orienta la protección de los datos."
            }
          },
          {
            type: "single",
            q: "An attacker has obtained a user's valid password. Which defense-in-depth layer can still stop the attacker, for example with MFA and conditional access policies?",
            options: ["Perimeter security", "Identity and access", "Compute security", "Physical security"],
            answer: 1,
            explain: "Identity and access controls such as MFA, RBAC and conditional access can block access even when a password is compromised.",
            es: {
              q: "Un atacante obtuvo una contraseña válida de un usuario. ¿Qué capa de la defensa en profundidad todavía puede detenerlo, por ejemplo con MFA y directivas de acceso condicional?",
              options: ["Seguridad perimetral", "Identidad y acceso", "Seguridad de cómputo", "Seguridad física"],
              explain: "Los controles de identidad y acceso, como la MFA, el RBAC y el acceso condicional, pueden bloquear el acceso aunque la contraseña esté comprometida."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Unauthorized deletion of records is a violation of integrity.", answer: true, explain: "Removing records that should exist is a form of integrity violation." },
              { s: "Strong encryption of all data can never affect availability.", answer: false, explain: "If encryption keys are lost, data becomes permanently inaccessible, which hurts availability." },
              { s: "The physical security layer includes measures such as badge readers and surveillance cameras.", answer: true, explain: "Locked facilities, guards, badge readers and cameras are physical security controls." }
            ],
            es: {
              statements: [
                { s: "La eliminación no autorizada de registros es una violación de la integridad.", explain: "Quitar registros que deberían existir es una forma de violar la integridad." },
                { s: "Cifrar fuertemente todos los datos nunca puede afectar la disponibilidad.", explain: "Si se pierden las claves de cifrado, los datos quedan inaccesibles para siempre, lo que afecta la disponibilidad." },
                { s: "La capa de seguridad física incluye medidas como lectores de credenciales y cámaras de vigilancia.", explain: "Las instalaciones cerradas, los guardias, los lectores de credenciales y las cámaras son controles de seguridad física." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "zero-trust",
      name: "Describe the Zero Trust model",
      es: { name: "Descripción del modelo de Confianza cero" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/4-describe-zero-trust-model",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "Which Zero Trust principle is implemented through just-in-time (JIT) and just-enough-access (JEA)?",
            options: ["Verify explicitly", "Use least privileged access", "Assume breach", "Visibility, automation, and orchestration"],
            answer: 1,
            explain: "JIT grants access only when needed and JEA grants only the permissions a task requires. Both implement least privileged access.",
            es: {
              q: "¿Qué principio de Confianza cero se implementa mediante el acceso justo a tiempo (JIT) y el acceso suficiente (JEA)?",
              options: ["Verificar explícitamente", "Usar el acceso con privilegios mínimos", "Asumir que hay una vulneración", "Visibilidad, automatización y orquestación"],
              explain: "JIT concede acceso solo cuando se necesita y JEA concede solo los permisos que requiere una tarea. Ambos implementan el acceso con privilegios mínimos."
            }
          },
          {
            type: "match",
            q: "Match each practice to the Zero Trust guiding principle it reflects.",
            values: ["Verify explicitly", "Use least privileged access", "Assume breach"],
            targets: [
              { t: "Evaluate sign-in location, device compliance and anomalies before granting access", answer: 0 },
              { t: "Grant only the permissions a task requires, for only as long as needed", answer: 1 },
              { t: "Segment access so a compromised account can't reach everything", answer: 2 },
              { t: "Deploy analytics to detect a breach quickly and understand what was accessed", answer: 2 }
            ],
            explain: "Using all available signals is verify explicitly. Minimal, time-bound access is least privilege. Segmentation, encryption and monitoring come from assume breach.",
            es: {
              q: "Relacione cada práctica con el principio rector de Confianza cero que refleja.",
              values: ["Verificar explícitamente", "Usar el acceso con privilegios mínimos", "Asumir que hay una vulneración"],
              targets: [
                { t: "Evaluar la ubicación de inicio de sesión, el cumplimiento del dispositivo y las anomalías antes de conceder acceso" },
                { t: "Conceder solo los permisos que requiere una tarea y solo durante el tiempo necesario" },
                { t: "Segmentar el acceso para que una cuenta comprometida no llegue a todo" },
                { t: "Implementar análisis para detectar rápido una vulneración y entender a qué se accedió" }
              ],
              explain: "Usar todas las señales disponibles es verificar explícitamente. El acceso mínimo y limitado en el tiempo es privilegio mínimo. La segmentación, el cifrado y la supervisión vienen de asumir que hay una vulneración."
            }
          },
          {
            type: "single",
            q: "Which Zero Trust pillar aggregates and correlates signals from all the others and enables automated responses to threats?",
            options: ["Identities", "Networks", "Visibility, automation, and orchestration", "Infrastructure"],
            answer: 2,
            explain: "The seventh pillar integrates the signals from the other six, typically through SIEM and SOAR, to detect threats and respond automatically.",
            es: {
              q: "¿Qué pilar de Confianza cero agrega y correlaciona las señales de todos los demás y permite respuestas automatizadas a las amenazas?",
              options: ["Identidades", "Redes", "Visibilidad, automatización y orquestación", "Infraestructura"],
              explain: "El séptimo pilar integra las señales de los otros seis, normalmente mediante SIEM y SOAR, para detectar amenazas y responder automáticamente."
            }
          },
          {
            type: "multi",
            q: "Which two are among the seven foundational pillars of Zero Trust?",
            options: ["Devices", "Applications", "Perimeter firewalls", "Castle-and-moat", "Physical security"],
            answers: [0, 1],
            explain: "The pillars are identities, devices, applications, data, infrastructure, networks, and visibility, automation and orchestration. Castle-and-moat is the traditional model Zero Trust replaces.",
            es: {
              q: "¿Cuáles son dos de los siete pilares fundamentales de Confianza cero?",
              options: ["Dispositivos", "Aplicaciones", "Firewalls perimetrales", "Castillo y foso", "Seguridad física"],
              explain: "Los pilares son identidades, dispositivos, aplicaciones, datos, infraestructura, redes, y visibilidad, automatización y orquestación. El modelo de castillo y foso es el tradicional que Confianza cero reemplaza."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about the visibility, automation, and orchestration pillar.",
            parts: [
              "A ",
              { options: ["SOAR", "SIEM", "VPN"], answer: 1 },
              " ingests and correlates signals across all pillars to detect threats, while a ",
              { options: ["SIEM", "SOAR", "NSG"], answer: 1 },
              " uses those detections to trigger automated response playbooks."
            ],
            explain: "SIEM detects by correlating signals; SOAR responds by running automated playbooks.",
            es: {
              q: "Complete la afirmación sobre el pilar de visibilidad, automatización y orquestación.",
              parts: [
                "Un ",
                { options: ["SOAR", "SIEM", "VPN"] },
                " ingiere y correlaciona señales de todos los pilares para detectar amenazas, mientras que un ",
                { options: ["SIEM", "SOAR", "NSG"] },
                " usa esas detecciones para iniciar guías de respuesta automatizadas."
              ],
              explain: "El SIEM detecta correlacionando señales; el SOAR responde ejecutando guías automatizadas."
            }
          },
          {
            type: "single",
            q: "Employees use several unsanctioned cloud apps without formal approval (shadow IT). Which Zero Trust pillar addresses visibility into these apps?",
            options: ["Applications", "Devices", "Infrastructure", "Networks"],
            answer: 0,
            explain: "The applications pillar requires visibility into all apps in use, including shadow IT, and into the permissions they request and receive.",
            es: {
              q: "Los empleados usan varias aplicaciones en la nube no autorizadas, sin aprobación formal (shadow IT). ¿Qué pilar de Confianza cero se ocupa de tener visibilidad sobre ellas?",
              options: ["Aplicaciones", "Dispositivos", "Infraestructura", "Redes"],
              explain: "El pilar de aplicaciones exige visibilidad sobre todas las aplicaciones en uso, incluido el shadow IT, y sobre los permisos que solicitan y reciben."
            }
          },
          {
            type: "single",
            q: "Which statement best describes Zero Trust?",
            options: [
              "A firewall product that blocks untrusted traffic",
              "A security strategy that requires every access request to be authenticated and authorized, wherever it comes from",
              "A model that trusts everything inside the corporate network",
              "A regulation that defines minimum security standards"
            ],
            answer: 1,
            explain: "Zero Trust is a strategy, not a product: trust no one, verify everything. Trusting the internal network is the castle-and-moat model it replaces.",
            es: {
              q: "¿Qué afirmación describe mejor Confianza cero?",
              options: [
                "Un producto de firewall que bloquea el tráfico no confiable",
                "Una estrategia de seguridad que exige autenticar y autorizar cada solicitud de acceso, venga de donde venga",
                "Un modelo que confía en todo lo que está dentro de la red corporativa",
                "Una regulación que define estándares mínimos de seguridad"
              ],
              explain: "Confianza cero es una estrategia, no un producto: no confiar en nadie, verificarlo todo. Confiar en la red interna es el modelo de castillo y foso que reemplaza."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Zero Trust assumes that devices already connected to the corporate network can be trusted by default.", answer: false, explain: "Zero Trust trusts no network, device, user or application by default, even on a trusted network." },
              { s: "Identity is described as the primary control plane for modern security.", answer: true, explain: "Almost all successful attacks eventually rely on compromising or abusing an identity." },
              { s: "Network micro-segmentation creates boundaries within network zones, not just at the perimeter.", answer: true, explain: "The networks pillar includes deeper in-network micro-segmentation." }
            ],
            es: {
              statements: [
                { s: "Confianza cero asume que los dispositivos ya conectados a la red corporativa son confiables por defecto.", explain: "Confianza cero no confía por defecto en ninguna red, dispositivo, usuario ni aplicación, aunque esté en una red de confianza." },
                { s: "La identidad se describe como el plano de control principal de la seguridad moderna.", explain: "Casi todos los ataques exitosos terminan dependiendo de comprometer o abusar de una identidad." },
                { s: "La microsegmentación de red crea límites dentro de las zonas de red, no solo en el perímetro.", explain: "El pilar de redes incluye una microsegmentación más profunda dentro de la red." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "encryption-hashing",
      name: "Describe encryption and hashing",
      es: { name: "Descripción del cifrado y el código hash" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/5-describe-encryption-hashing",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "You need to encrypt large volumes of database records quickly, and both systems involved can share the same secret key securely. Which type of encryption fits best?",
            options: ["Symmetric encryption", "Asymmetric encryption", "Hashing", "Salting"],
            answer: 0,
            explain: "Symmetric encryption uses one key and is fast, which suits large amounts of data. Its weak point is key distribution, which this scenario has solved.",
            es: {
              q: "Necesita cifrar rápidamente grandes volúmenes de registros de una base de datos, y los dos sistemas involucrados pueden compartir la misma clave secreta de forma segura. ¿Qué tipo de cifrado es el más adecuado?",
              options: ["Cifrado simétrico", "Cifrado asimétrico", "Hash", "Agregado de sal"],
              explain: "El cifrado simétrico usa una sola clave y es rápido, lo que sirve para grandes volúmenes de datos. Su punto débil es la distribución de la clave, que en este escenario está resuelta."
            }
          },
          {
            type: "match",
            q: "Match each description to the mechanism it describes.",
            values: ["Symmetric encryption", "Asymmetric encryption", "Hashing"],
            targets: [
              { t: "Uses one shared key to encrypt and decrypt", answer: 0 },
              { t: "Uses a mathematically related public key and private key", answer: 1 },
              { t: "Is one-way and can't be reversed to recover the input", answer: 2 },
              { t: "Solves the key distribution problem", answer: 1 }
            ],
            explain: "Symmetric uses one key; asymmetric uses a key pair, and since the public key can be shared freely it solves key distribution. Hashing is one-way and keyless.",
            es: {
              q: "Relacione cada descripción con el mecanismo que describe.",
              values: ["Cifrado simétrico", "Cifrado asimétrico", "Hash"],
              targets: [
                { t: "Usa una sola clave compartida para cifrar y descifrar" },
                { t: "Usa una clave pública y una privada relacionadas matemáticamente" },
                { t: "Es unidireccional y no se puede revertir para recuperar la entrada" },
                { t: "Resuelve el problema de la distribución de claves" }
              ],
              explain: "El simétrico usa una clave; el asimétrico usa un par de claves y, como la pública se puede compartir libremente, resuelve la distribución. El hash es unidireccional y no usa claves."
            }
          },
          {
            type: "single",
            q: "In a multitenant environment, a company needs to protect data while it's being processed in memory, so that not even the operating system or hypervisor can see it. What provides this?",
            options: ["TLS", "Encryption at rest", "Confidential computing with secure enclaves", "Salting"],
            answer: 2,
            explain: "Data in use is protected by confidential computing, which processes data inside protected enclaves. TLS protects data in transit; encryption at rest protects stored data.",
            es: {
              q: "En un entorno multiinquilino, una empresa necesita proteger los datos mientras se procesan en memoria, de modo que ni el sistema operativo ni el hipervisor puedan verlos. ¿Qué lo permite?",
              options: ["TLS", "El cifrado en reposo", "La computación confidencial con enclaves seguros", "El agregado de sal"],
              explain: "Los datos en uso se protegen con computación confidencial, que los procesa dentro de enclaves protegidos. TLS protege los datos en tránsito; el cifrado en reposo protege los datos almacenados."
            }
          },
          {
            type: "single",
            q: "Anyone should be able to send you an encrypted message that only you can read. With asymmetric encryption, which key should senders use to encrypt it?",
            options: ["Your private key", "Your public key", "A shared symmetric key", "The sender's private key"],
            answer: 1,
            explain: "Data encrypted with your public key can only be decrypted with your private key, which only you hold.",
            es: {
              q: "Cualquiera debería poder enviarle un mensaje cifrado que solo usted pueda leer. Con cifrado asimétrico, ¿qué clave deben usar los remitentes para cifrarlo?",
              options: ["Su clave privada", "Su clave pública", "Una clave simétrica compartida", "La clave privada del remitente"],
              explain: "Los datos cifrados con su clave pública solo se pueden descifrar con su clave privada, que solo tiene usted."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about encryption by data state.",
            parts: [
              "Encrypting data ",
              { options: ["at rest", "in transit", "in use"], answer: 1 },
              " protects it from eavesdropping, and HTTPS achieves this by using ",
              { options: ["TLS", "a hardware security module", "a salt"], answer: 0 },
              "."
            ],
            explain: "Encryption in transit protects data moving across networks; HTTPS secures the connection with Transport Layer Security (TLS).",
            es: {
              q: "Complete la afirmación sobre el cifrado según el estado de los datos.",
              parts: [
                "Cifrar los datos ",
                { options: ["en reposo", "en tránsito", "en uso"] },
                " los protege de la interceptación, y HTTPS lo logra usando ",
                { options: ["TLS", "un módulo de seguridad de hardware", "una sal"] },
                "."
              ],
              explain: "El cifrado en tránsito protege los datos que viajan por las redes; HTTPS protege la conexión con Seguridad de la capa de transporte (TLS)."
            }
          },
          {
            type: "single",
            q: "Why are passwords salted before they are hashed?",
            options: [
              "To make the hash reversible for administrators",
              "So identical passwords produce different hashes, which makes precomputed rainbow tables ineffective",
              "To encrypt passwords while they travel over the network",
              "To shorten the hash so it takes less storage"
            ],
            answer: 1,
            explain: "A unique random salt per password means two users with the same password get different hashes, so precomputed lookup tables stop working.",
            es: {
              q: "¿Por qué se agrega sal a las contraseñas antes de aplicarles el hash?",
              options: [
                "Para que los administradores puedan revertir el hash",
                "Para que contraseñas idénticas produzcan hashes distintos, lo que inutiliza las tablas arcoíris precalculadas",
                "Para cifrar las contraseñas mientras viajan por la red",
                "Para acortar el hash y que ocupe menos espacio"
              ],
              explain: "Una sal única y aleatoria por contraseña hace que dos usuarios con la misma contraseña tengan hashes distintos, así que las tablas de búsqueda precalculadas dejan de funcionar."
            }
          },
          {
            type: "multi",
            q: "Which two are key management best practices?",
            options: [
              "Store keys separately from the data they protect",
              "Rotate keys regularly",
              "Store keys alongside the encrypted data for faster access",
              "Give every administrator access to all decryption keys",
              "Keep the same key indefinitely to avoid data loss"
            ],
            answers: [0, 1],
            explain: "Separate storage, HSMs, regular rotation and tight least-privilege access to keys are the listed practices.",
            es: {
              q: "¿Cuáles son dos buenas prácticas de administración de claves?",
              options: [
                "Almacenar las claves separadas de los datos que protegen",
                "Rotar las claves con regularidad",
                "Almacenar las claves junto a los datos cifrados para acceder más rápido",
                "Dar a todos los administradores acceso a todas las claves de descifrado",
                "Mantener la misma clave indefinidamente para evitar pérdida de datos"
              ],
              explain: "El almacenamiento separado, los HSM, la rotación periódica y un acceso estricto con privilegios mínimos son las prácticas listadas."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Hashing uses a key to convert an input into a fixed-length value.", answer: false, explain: "Hashing doesn't use keys." },
              { s: "Digital signatures verify both the authenticity and the integrity of data.", answer: true, explain: "A signature proves who sent the data and that it wasn't modified after signing." },
              { s: "Azure Key Vault provides a managed service for storing and managing keys, certificates and secrets.", answer: true, explain: "It's the cloud key management example the unit gives." }
            ],
            es: {
              statements: [
                { s: "El hash usa una clave para convertir una entrada en un valor de longitud fija.", explain: "El hash no usa claves." },
                { s: "Las firmas digitales verifican tanto la autenticidad como la integridad de los datos.", explain: "Una firma demuestra quién envió los datos y que no se modificaron después de firmarlos." },
                { s: "Azure Key Vault ofrece un servicio administrado para almacenar y administrar claves, certificados y secretos.", explain: "Es el ejemplo de administración de claves en la nube que da la unidad." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "grc",
      name: "Describe governance, risk, and compliance (GRC) concepts",
      es: { name: "Describir los conceptos de gobernanza, riesgo y cumplimiento (GRC)" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/6-describe-compliance-concepts",
      quiz: {
        added: "2026-10-26",
        items: [
          {
            type: "single",
            q: "An organization defines who can access corporate resources, who gets administrative privileges and for how long, and what happens when those rules are violated. Which GRC component does this describe?",
            options: ["Governance", "Risk", "Compliance", "Data residency"],
            answer: 0,
            explain: "Governance is the system of rules, practices and processes an organization uses to direct and control its activities.",
            es: {
              q: "Una organización define quién puede acceder a los recursos corporativos, quién obtiene privilegios administrativos y por cuánto tiempo, y qué pasa cuando se violan esas reglas. ¿Qué componente de GRC describe esto?",
              options: ["Gobernanza", "Riesgo", "Cumplimiento", "Residencia de datos"],
              explain: "La gobernanza es el sistema de reglas, prácticas y procesos que usa una organización para dirigir y controlar sus actividades."
            }
          },
          {
            type: "match",
            q: "Match each action to the risk response it represents.",
            values: ["Accept", "Mitigate", "Transfer", "Avoid"],
            targets: [
              { t: "Buying cyber insurance", answer: 2 },
              { t: "Implementing controls that reduce the risk", answer: 1 },
              { t: "Leaving a low-impact risk as it is", answer: 0 },
              { t: "Changing the process that creates the risk", answer: 3 }
            ],
            explain: "Accept low-impact risks, mitigate with controls, transfer through measures such as insurance, and avoid by changing the process that creates the risk.",
            es: {
              q: "Relacione cada acción con la respuesta al riesgo que representa.",
              values: ["Aceptar", "Mitigar", "Transferir", "Evitar"],
              targets: [
                { t: "Contratar un seguro de ciberriesgo" },
                { t: "Implementar controles que reducen el riesgo" },
                { t: "Dejar como está un riesgo de bajo impacto" },
                { t: "Cambiar el proceso que genera el riesgo" }
              ],
              explain: "Se aceptan los riesgos de bajo impacto, se mitigan con controles, se transfieren con medidas como seguros y se evitan cambiando el proceso que los genera."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about data-related compliance concepts.",
            parts: [
              "",
              { options: ["Data sovereignty", "Data residency", "Data privacy"], answer: 1 },
              " governs the physical locations where data can be stored, while ",
              { options: ["data residency", "data privacy", "data sovereignty"], answer: 2 },
              " means data is subject to the laws of the country or region where it's collected, held or processed."
            ],
            explain: "Residency is about where data can live and move. Sovereignty is about which jurisdictions' laws apply to it.",
            es: {
              q: "Complete la afirmación sobre los conceptos de cumplimiento relacionados con los datos.",
              parts: [
                "La ",
                { options: ["soberanía de datos", "residencia de datos", "privacidad de datos"] },
                " regula las ubicaciones físicas donde se pueden almacenar los datos, mientras que la ",
                { options: ["residencia de datos", "privacidad de datos", "soberanía de datos"] },
                " significa que los datos están sujetos a las leyes del país o región donde se recopilan, guardan o procesan."
              ],
              explain: "La residencia trata sobre dónde pueden estar y moverse los datos. La soberanía trata sobre qué leyes se les aplican."
            }
          },
          {
            type: "single",
            q: "A regulation requires an organization to let individuals access, correct or delete the personal information it holds about them. Which concept does this relate to?",
            options: ["Data residency", "Data sovereignty", "Data privacy", "Risk transfer"],
            answer: 2,
            explain: "Privacy laws give individuals rights over their personal data, such as access, correction and deletion, and require transparency and consent.",
            es: {
              q: "Una regulación exige que una organización permita a las personas acceder, corregir o eliminar la información personal que guarda sobre ellas. ¿Con qué concepto se relaciona?",
              options: ["Residencia de datos", "Soberanía de datos", "Privacidad de datos", "Transferencia del riesgo"],
              explain: "Las leyes de privacidad dan a las personas derechos sobre sus datos personales, como acceder, corregir y eliminar, y exigen transparencia y consentimiento."
            }
          },
          {
            type: "multi",
            q: "Which two are examples of internal risks?",
            options: ["Accidental data exposure by employees", "Insider threats", "Natural disasters", "Regulatory changes", "Cyberattacks by external groups"],
            answers: [0, 1],
            explain: "Internal risks come from within: accidental exposure, insider threats, fraud and process gaps. Disasters, regulation changes and outside attacks are external.",
            es: {
              q: "¿Cuáles son dos ejemplos de riesgos internos?",
              options: ["La exposición accidental de datos por parte de empleados", "Las amenazas internas", "Los desastres naturales", "Los cambios regulatorios", "Los ciberataques de grupos externos"],
              explain: "Los riesgos internos surgen de la propia organización: exposición accidental, amenazas internas, fraude y brechas de procesos. Los desastres, los cambios regulatorios y los ataques externos son riesgos externos."
            }
          },
          {
            type: "single",
            q: "In the risk management process, which step evaluates each risk based on its potential impact and likelihood to produce a risk score?",
            options: ["Identify", "Assess", "Respond", "Monitor"],
            answer: 1,
            explain: "Assess scores risks by impact and likelihood so you can prioritize. Identify discovers them; Respond decides what to do.",
            es: {
              q: "En el proceso de gestión de riesgos, ¿qué paso evalúa cada riesgo según su impacto posible y su probabilidad para obtener una puntuación de riesgo?",
              options: ["Identificar", "Evaluar", "Responder", "Supervisar"],
              explain: "Evaluar puntúa los riesgos según impacto y probabilidad para poder priorizar. Identificar los descubre; Responder decide qué hacer."
            }
          },
          {
            type: "single",
            q: "An organization meets every minimum requirement of the regulations that apply to it. Which statement is true?",
            options: [
              "It's fully secure, because compliance and security are the same",
              "It can still have significant security vulnerabilities, because compliance is only the required minimum",
              "It no longer needs risk management",
              "It no longer needs to know where its data is stored"
            ],
            answer: 1,
            explain: "Compliance is not the same as security. Doing only the regulatory minimum can leave real vulnerabilities.",
            es: {
              q: "Una organización cumple todos los requisitos mínimos de las regulaciones que le aplican. ¿Qué afirmación es verdadera?",
              options: [
                "Es completamente segura, porque cumplimiento y seguridad son lo mismo",
                "Puede seguir teniendo vulnerabilidades importantes, porque el cumplimiento es solo el mínimo exigido",
                "Ya no necesita gestionar riesgos",
                "Ya no necesita saber dónde se almacenan sus datos"
              ],
              explain: "El cumplimiento no es lo mismo que la seguridad. Hacer solo el mínimo regulatorio puede dejar vulnerabilidades reales."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "ISO 27001 is an international standard for information security management systems.", answer: true, explain: "That's how the unit describes ISO 27001." },
              { s: "The goal of risk management is to eliminate all risk.", answer: false, explain: "The goal is to understand risk well enough to make informed decisions, not to eliminate it." },
              { s: "Personal data includes information that can be indirectly linked to a person, such as location history.", answer: true, explain: "Personal data covers anything relating to an identified or identifiable individual, directly or indirectly." }
            ],
            es: {
              statements: [
                { s: "ISO 27001 es un estándar internacional para sistemas de gestión de la seguridad de la información.", explain: "Así describe la unidad a ISO 27001." },
                { s: "El objetivo de la gestión de riesgos es eliminar todo riesgo.", explain: "El objetivo es entender el riesgo lo suficiente para tomar decisiones informadas, no eliminarlo." },
                { s: "Los datos personales incluyen información que puede vincularse indirectamente con una persona, como el historial de ubicaciones.", explain: "Los datos personales abarcan todo lo relacionado con una persona identificada o identificable, de forma directa o indirecta." }
              ]
            }
          }
        ]
      }
    }
  ]
});
