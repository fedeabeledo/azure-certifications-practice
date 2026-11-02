// SC-900 > Introduction to Microsoft security solutions > Describe core infrastructure security services in Azure
Catalog.module("sc-900", {
  id: "azure-infra-security",
  name: "Describe core infrastructure security services in Azure",
  es: { name: "Descripción de los servicios principales de seguridad de la infraestructura en Azure" },
  url: "https://learn.microsoft.com/en-us/training/modules/describe-basic-security-capabilities-azure/",
  quiz: {
    added: "2026-11-01",
    items: [
      {
        type: "single",
        topic: "Web Application Firewall",
        q: "A public web app is hit by an HTTP flood at the application layer. Azure DDoS Protection is already enabled. What should be added?",
        options: ["A Web Application Firewall", "A second network security group", "Azure Firewall Premium with IDPS", "DDoS Network Protection instead of IP Protection"],
        answer: 0,
        explain: "DDoS Protection covers layers 3 and 4. Layer 7 attacks such as HTTP floods need a WAF.",
        es: {
          topic: "Firewall de aplicaciones web",
          q: "Una aplicación web pública recibe una inundación HTTP en la capa de aplicación. La protección contra DDoS de Azure ya está habilitada. ¿Qué se debe agregar?",
          options: ["Un firewall de aplicaciones web", "Un segundo grupo de seguridad de red", "Azure Firewall Premium con IDPS", "DDoS Network Protection en lugar de IP Protection"],
          explain: "La protección contra DDoS cubre las capas 3 y 4. Los ataques de capa 7, como las inundaciones HTTP, requieren un WAF."
        }
      },
      {
        type: "match",
        topic: "Infrastructure security services",
        q: "Match each requirement to the Azure service.",
        values: ["Azure Firewall", "Network security group", "Azure Bastion", "Azure Key Vault"],
        targets: [
          { t: "Centrally filter traffic across several subscriptions and VNets with FQDN rules", answer: 0 },
          { t: "Allow or deny traffic to a subnet based on source, destination, port and protocol", answer: 1 },
          { t: "RDP into VMs from the portal without public IPs on the VMs", answer: 2 },
          { t: "Keep connection strings out of application code", answer: 3 }
        ],
        explain: "Azure Firewall is centralized and stateful, NSGs filter within VNets, Bastion gives secure RDP/SSH and Key Vault stores secrets.",
        es: {
          topic: "Servicios de seguridad de infraestructura",
          q: "Relacione cada requisito con el servicio de Azure.",
          values: ["Azure Firewall", "Grupo de seguridad de red", "Azure Bastion", "Azure Key Vault"],
          targets: [
            { t: "Filtrar de forma centralizada el tráfico entre varias suscripciones y redes virtuales con reglas de FQDN" },
            { t: "Permitir o denegar el tráfico a una subred según origen, destino, puerto y protocolo" },
            { t: "Conectarse por RDP a máquinas virtuales desde el portal sin IP públicas en ellas" },
            { t: "Sacar las cadenas de conexión del código de la aplicación" }
          ],
          explain: "Azure Firewall es centralizado y con estado, los NSG filtran dentro de las redes virtuales, Bastion da RDP/SSH seguro y Key Vault guarda secretos."
        }
      },
      {
        type: "single",
        topic: "Network security groups",
        q: "An NSG has a custom rule with priority 200 that allows port 443, and another with priority 100 that denies all inbound traffic from the internet. What happens to inbound HTTPS from the internet?",
        options: ["It's denied, because the priority 100 rule is processed first", "It's allowed, because allow rules always win", "It's allowed, because the rule with the higher priority number takes precedence over the lower one", "Both rules are combined and the traffic is logged only"],
        answer: 0,
        explain: "Lower numbers are processed first, and processing stops at the first match.",
        es: {
          topic: "Grupos de seguridad de red",
          q: "Un NSG tiene una regla personalizada de prioridad 200 que permite el puerto 443 y otra de prioridad 100 que deniega todo el tráfico entrante desde internet. ¿Qué pasa con el HTTPS entrante desde internet?",
          options: ["Se deniega, porque la regla de prioridad 100 se procesa primero", "Se permite, porque las reglas de permiso siempre ganan", "Se permite, porque la regla con el número de prioridad más alto tiene precedencia sobre la más baja", "Se combinan ambas reglas y el tráfico solo se registra"],
          explain: "Los números más bajos se procesan primero, y el procesamiento se detiene en la primera coincidencia."
        }
      },
      {
        type: "multi",
        topic: "Azure DDoS Protection",
        q: "Which two benefits does Azure DDoS Protection add over default infrastructure-level protection?",
        options: ["Attack telemetry and alerting through Azure Monitor", "Thresholds tuned to the application's expected traffic", "Protection against HTTP floods at layer 7", "Automatic blocking of malicious FQDNs", "Protection for VMs without public IPs"],
        answers: [0, 1],
        explain: "Default protection has a high threshold and no telemetry; DDoS Protection adds tuned profiles, analytics and alerts. SQL injection is a WAF concern.",
        es: {
          topic: "Protección contra DDoS de Azure",
          q: "¿Cuáles son dos ventajas que agrega la protección contra DDoS de Azure frente a la protección predeterminada de la infraestructura?",
          options: ["Telemetría de ataques y alertas mediante Azure Monitor", "Umbrales ajustados al tráfico esperado de la aplicación", "Protección contra inundaciones HTTP en la capa 7", "Bloqueo automático de FQDN maliciosos", "Protección para máquinas virtuales sin IP pública"],
          explain: "La protección predeterminada tiene un umbral alto y no da telemetría; DDoS Protection suma perfiles ajustados, análisis y alertas. La inyección de SQL es tarea del WAF."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Network segmentation", s: "By default, traffic is allowed between different virtual networks.", answer: false, explain: "No traffic is allowed across VNets by default; it must be explicitly provisioned." },
          { topic: "Azure Bastion", s: "Azure Bastion is deployed per virtual network and also serves peered virtual networks.", answer: true, explain: "It's not deployed per VM or per subscription." },
          { topic: "Azure Key Vault", s: "Azure Key Vault is designed so that Microsoft doesn't see or extract your data.", answer: true, explain: "Secrets, keys and certificates are for your use only." }
        ],
        es: {
          statements: [
            { topic: "Segmentación de red", s: "De forma predeterminada, se permite el tráfico entre distintas redes virtuales.", explain: "No se permite tráfico entre redes virtuales de forma predeterminada; hay que habilitarlo de forma explícita." },
            { topic: "Azure Bastion", s: "Azure Bastion se implementa por red virtual y también sirve a las redes virtuales emparejadas.", explain: "No se implementa por máquina virtual ni por suscripción." },
            { topic: "Azure Key Vault", s: "Azure Key Vault está diseñado para que Microsoft no vea ni extraiga sus datos.", explain: "Los secretos, claves y certificados son solo para su uso." }
          ]
        }
      },
      {
        type: "dropdown",
        topic: "Azure Firewall",
        q: "Complete the statement about Azure Firewall tiers.",
        parts: [
          "Signature-based intrusion detection and prevention (IDPS) is a feature of Azure Firewall ",
          { options: ["Premium", "Basic", "Standard"], answer: 0 },
          ", while ",
          { options: ["Basic", "Premium", "Standard"], answer: 0 },
          " supports threat intelligence in alert mode only and targets small and medium-sized businesses."
        ],
        explain: "Premium adds IDPS with over 67,000 signatures; Basic is for SMBs with alert-only threat intelligence.",
        es: {
          topic: "Azure Firewall",
          q: "Complete la afirmación sobre los niveles de Azure Firewall.",
          parts: [
            "La detección y prevención de intrusiones basada en firmas (IDPS) es una característica de Azure Firewall ",
            { options: ["Premium", "Basic", "Standard"] },
            ", mientras que ",
            { options: ["Basic", "Premium", "Standard"] },
            " admite inteligencia sobre amenazas solo en modo de alerta y está pensado para pequeñas y medianas empresas."
          ],
          explain: "Premium suma IDPS con más de 67 000 firmas; Basic es para pymes, con inteligencia sobre amenazas solo de alerta."
        }
      },
      {
        type: "single",
        topic: "Network segmentation",
        q: "Web servers and database servers should be isolated so a compromised web server can't freely reach the databases. Which Zero Trust principle does segmenting them into subnets support most directly?",
        options: ["Assume breach", "Verify explicitly", "Use least privilege access", "Defense in depth"],
        answer: 0,
        explain: "Segmentation contains an attacker and limits lateral movement, which is the goal of assume breach.",
        es: {
          topic: "Segmentación de red",
          q: "Los servidores web y los de bases de datos deben aislarse para que un servidor web comprometido no llegue libremente a las bases de datos. ¿Qué principio de Confianza cero respalda más directamente separarlos en subredes?",
          options: ["Asumir que hay una vulneración", "Verificar explícitamente", "Usar el acceso con privilegios mínimos", "Defensa en profundidad"],
          explain: "La segmentación contiene al atacante y limita el movimiento lateral, que es el objetivo de asumir una vulneración."
        }
      },
      {
        type: "single",
        topic: "Azure Key Vault",
        q: "A financial institution needs keys generated and stored in tamper-resistant hardware that they never leave. Which option fits?",
        options: ["Azure Key Vault Premium tier", "Azure Key Vault Standard tier", "Azure Disk Encryption with platform-managed keys", "Key Vault Standard with soft delete"],
        answer: 0,
        explain: "The Premium tier offers HSM-protected keys; Standard uses software-based protection.",
        es: {
          topic: "Azure Key Vault",
          q: "Una entidad financiera necesita que las claves se generen y guarden en hardware resistente a manipulaciones del que nunca salgan. ¿Qué opción corresponde?",
          options: ["El nivel Premium de Azure Key Vault", "El nivel Estándar de Azure Key Vault", "Azure Disk Encryption con claves administradas por la plataforma", "Key Vault Estándar con eliminación temporal"],
          explain: "El nivel Premium ofrece claves protegidas por HSM; el Estándar usa protección por software."
        }
      },
      {
        type: "yesno",
        statements: [
          { topic: "Azure Firewall", s: "Azure Firewall is stateful.", answer: true, explain: "It tracks the state of active connections." },
          { topic: "Network security groups", s: "NSG default rules can be deleted.", answer: false, explain: "They can't be removed, only overridden by higher-priority rules." },
          { topic: "Azure DDoS Protection", s: "DDoS IP Protection includes DDoS rapid response support and cost protection.", answer: false, explain: "Those value-added services come with DDoS Network Protection." }
        ],
        es: {
          statements: [
            { topic: "Azure Firewall", s: "Azure Firewall es un firewall con estado.", explain: "Lleva el seguimiento del estado de las conexiones activas." },
            { topic: "Grupos de seguridad de red", s: "Las reglas predeterminadas de un NSG se pueden eliminar.", explain: "No se pueden quitar, solo invalidar con reglas de mayor prioridad." },
            { topic: "Protección contra DDoS de Azure", s: "DDoS IP Protection incluye el soporte de respuesta rápida ante DDoS y la protección de costos.", explain: "Esos servicios adicionales vienen con DDoS Network Protection." }
          ]
        }
      },
      {
        type: "single",
        topic: "Network security groups",
        q: "How do NSGs and Azure Firewall relate?",
        options: [
          "NSGs filter traffic within VNets; Azure Firewall is a centralized, stateful firewall across subscriptions and VNets",
          "Azure Firewall replaces NSGs entirely",
          "NSGs filter only outbound traffic from each subnet, while Azure Firewall filters only the inbound traffic from the internet",
          "NSGs are stateful; Azure Firewall is stateless"
        ],
        answer: 0,
        explain: "They complement each other for defense in depth.",
        es: {
          topic: "Grupos de seguridad de red",
          q: "¿Qué relación hay entre los NSG y Azure Firewall?",
          options: [
            "Los NSG filtran el tráfico dentro de las redes virtuales; Azure Firewall es un firewall centralizado y con estado entre suscripciones y redes",
            "Azure Firewall reemplaza por completo a los NSG",
            "Los NSG filtran solo el tráfico saliente de cada subred, mientras que Azure Firewall filtra solo el tráfico entrante desde internet",
            "Los NSG tienen estado; Azure Firewall no tiene estado"
          ],
          explain: "Se complementan para lograr defensa en profundidad."
        }
      },
      {
        type: "single",
        topic: "Azure Bastion",
        q: "A regulated company needs recordings of admin RDP sessions to VMs and wants Bastion deployed without a public IP. Which tier fits?",
        options: ["Premium", "Developer", "Basic", "Standard"],
        answer: 0,
        explain: "Premium adds session recording and private-only deployment.",
        es: {
          topic: "Azure Bastion",
          q: "Una empresa regulada necesita grabar las sesiones RDP de los administradores a las máquinas virtuales y quiere Bastion sin IP pública. ¿Qué nivel corresponde?",
          options: ["Premium", "Developer", "Basic", "Standard"],
          explain: "Premium suma la grabación de sesiones y la implementación solo privada."
        }
      },
      {
        type: "single",
        topic: "Web Application Firewall",
        q: "A globally distributed web app needs WAF protection that blocks attacks close to their source before traffic reaches its infrastructure. Where should WAF be deployed?",
        options: ["Azure Front Door", "Azure Application Gateway in one region", "Azure Firewall Premium in a hub VNet", "DDoS Network Protection"],
        answer: 0,
        explain: "WAF on Front Door provides global protection at the edge; Application Gateway WAF is regional.",
        es: {
          topic: "Firewall de aplicaciones web",
          q: "Una aplicación web distribuida globalmente necesita protección WAF que bloquee los ataques cerca de su origen antes de que el tráfico llegue a su infraestructura. ¿Dónde se debe implementar el WAF?",
          options: ["En Azure Front Door", "En Azure Application Gateway en una región", "Azure Firewall Premium en una red virtual central", "DDoS Network Protection"],
          explain: "El WAF en Front Door da protección global en el perímetro; el de Application Gateway es regional."
        }
      }
    ]
  },
  units: [
    {
      id: "ddos-protection",
      name: "Describe Azure DDoS protection",
      es: { name: "Descripción de la protección contra DDoS de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-basic-security-capabilities-azure/2-describe-azure-ddos-protection",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each description to the type of DDoS attack.",
            values: ["Volumetric", "Protocol", "Resource (application) layer"],
            targets: [
              { t: "Floods the network layer with seemingly legitimate traffic to exhaust bandwidth", answer: 0 },
              { t: "Exhausts server resources with false requests exploiting layer 3 and 4 weaknesses", answer: 1 },
              { t: "Targets web application packets to disrupt data between hosts", answer: 2 }
            ],
            explain: "These are the three most frequent DDoS attack types.",
            es: {
              q: "Relacione cada descripción con el tipo de ataque DDoS.",
              values: ["Volumétrico", "De protocolo", "De capa de recursos (aplicación)"],
              targets: [
                { t: "Inunda la capa de red con tráfico aparentemente legítimo para agotar el ancho de banda" },
                { t: "Agota los recursos del servidor con solicitudes falsas que explotan debilidades de las capas 3 y 4" },
                { t: "Ataca los paquetes de la aplicación web para interrumpir los datos entre hosts" }
              ],
              explain: "Son los tres tipos de ataque DDoS más frecuentes."
            }
          },
          {
            type: "single",
            q: "A company wants per-IP DDoS protection without the DDoS rapid response team or WAF discounts. Which tier fits?",
            options: ["DDoS IP Protection", "DDoS Network Protection", "Default infrastructure protection", "Azure Front Door WAF"],
            answer: 0,
            explain: "DDoS IP Protection is pay-per-protected-IP with the same core engineering but without the value-added services.",
            es: {
              q: "Una empresa quiere protección contra DDoS por IP sin el equipo de respuesta rápida ni los descuentos en WAF. ¿Qué nivel corresponde?",
              options: ["DDoS IP Protection", "DDoS Network Protection", "La protección predeterminada de la infraestructura", "El WAF de Azure Front Door"],
              explain: "DDoS IP Protection se paga por IP protegida, con la misma ingeniería principal pero sin los servicios adicionales."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about Azure DDoS Protection.",
            parts: [
              "Azure DDoS Protection protects at layers ",
              { options: ["3 and 4", "7 only", "3 to 7"], answer: 0 },
              ", and during an active attack it provides reports in ",
              { options: ["five-minute increments", "daily summaries only", "hourly summaries"], answer: 0 },
              "."
            ],
            explain: "It covers network and transport layers, with detailed reports every five minutes and a summary afterward.",
            es: {
              q: "Complete la afirmación sobre la protección contra DDoS de Azure.",
              parts: [
                "La protección contra DDoS de Azure protege en las capas ",
                { options: ["3 y 4", "7 únicamente", "3 a 7"] },
                ", y durante un ataque activo entrega informes en ",
                { options: ["intervalos de cinco minutos", "resúmenes diarios únicamente", "resúmenes por hora"] },
                "."
              ],
              explain: "Cubre las capas de red y transporte, con informes detallados cada cinco minutos y un resumen al final."
            }
          },
          {
            type: "multi",
            q: "Which two are recommended DDoS best practices?",
            options: ["Combine DDoS Protection with a WAF", "Have an incident response plan before an attack", "Rely on default protection for production apps", "Use NSGs instead of a WAF for layer 7", "Enable DDoS Protection only after an attack starts"],
            answers: [0, 1],
            explain: "Best practices include combining with a WAF, designing for resilience, enabling alerts and planning for incidents.",
            es: {
              q: "¿Cuáles son dos buenas prácticas recomendadas contra DDoS?",
              options: ["Combinar la protección contra DDoS con un WAF", "Tener un plan de respuesta a incidentes antes del ataque", "Confiar en la protección predeterminada para aplicaciones de producción", "Usar NSG en lugar de un WAF para la capa 7", "Habilitar DDoS Protection solo cuando empieza un ataque"],
              explain: "Las buenas prácticas incluyen combinar con un WAF, diseñar para la resiliencia, habilitar alertas y planificar los incidentes."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Adaptive tuning learns an application's traffic over time and adjusts its profile.", answer: true, explain: "The profile adjusts as traffic changes." },
              { s: "Default infrastructure DDoS protection provides attack telemetry and alerts.", answer: false, explain: "It provides no visibility into ongoing or historical attacks." },
              { s: "Mitigation flow logs can be streamed to Microsoft Sentinel.", answer: true, explain: "Or to another SIEM for near real-time monitoring." }
            ],
            es: {
              statements: [
                { s: "El ajuste adaptable aprende el tráfico de una aplicación con el tiempo y ajusta su perfil.", explain: "El perfil se ajusta a medida que cambia el tráfico." },
                { s: "La protección predeterminada de la infraestructura contra DDoS ofrece telemetría de ataques y alertas.", explain: "No da visibilidad sobre ataques en curso ni pasados." },
                { s: "Los registros de flujo de mitigación se pueden transmitir a Microsoft Sentinel.", explain: "O a otro SIEM para supervisión casi en tiempo real." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "azure-firewall",
      name: "Describe Azure Firewall",
      es: { name: "Descripción de Azure Firewall" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-basic-security-capabilities-azure/3-describe-what-azure-firewall",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "A company wants one place to define firewall rules and apply them to Azure Firewalls in many subscriptions. What should it use?",
            options: ["Azure Firewall Manager", "A network security group per subnet", "Azure Policy with a firewall initiative", "Microsoft Defender for Cloud"],
            answer: 0,
            explain: "Firewall Manager applies common firewall policies across firewalls in the tenant.",
            es: {
              q: "Una empresa quiere un solo lugar donde definir reglas de firewall y aplicarlas a instancias de Azure Firewall en muchas suscripciones. ¿Qué debe usar?",
              options: ["Azure Firewall Manager", "Un grupo de seguridad de red por subred", "Azure Policy con una iniciativa de firewall", "Microsoft Defender for Cloud"],
              explain: "Firewall Manager aplica directivas de firewall comunes a los firewalls del inquilino."
            }
          },
          {
            type: "match",
            q: "Match each NAT type to what it does in Azure Firewall.",
            values: ["SNAT", "DNAT"],
            targets: [
              { t: "Translates a resource's private IP to a public IP for traffic going to the internet", answer: 0 },
              { t: "Translates a public IP to a private IP so internet traffic reaches an internal service", answer: 1 }
            ],
            explain: "SNAT handles outbound traffic from the VNet; DNAT handles inbound traffic to private resources.",
            es: {
              q: "Relacione cada tipo de NAT con lo que hace en Azure Firewall.",
              values: ["SNAT", "DNAT"],
              targets: [
                { t: "Traduce la IP privada de un recurso a una IP pública para el tráfico que sale a internet" },
                { t: "Traduce una IP pública a una IP privada para que el tráfico de internet llegue a un servicio interno" }
              ],
              explain: "SNAT maneja el tráfico saliente de la red virtual; DNAT maneja el tráfico entrante hacia recursos privados."
            }
          },
          {
            type: "multi",
            q: "Which two are features of Azure Firewall?",
            options: ["Application-level filtering by FQDN", "Threat intelligence-based filtering", "Rules based on application security groups only", "Layer 7 DDoS mitigation", "OWASP rule sets for web apps"],
            answers: [0, 1],
            explain: "Azure Firewall offers network and application filtering, NAT, threat intelligence, logging and high availability.",
            es: {
              q: "¿Cuáles son dos características de Azure Firewall?",
              options: ["Filtrado a nivel de aplicación por FQDN", "Filtrado basado en inteligencia sobre amenazas", "Reglas basadas solo en grupos de seguridad de aplicaciones", "Mitigación de DDoS de capa 7", "Conjuntos de reglas OWASP para aplicaciones web"],
              explain: "Azure Firewall ofrece filtrado de red y de aplicación, NAT, inteligencia sobre amenazas, registros y alta disponibilidad."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "The recommended design is to deploy Azure Firewall on a centralized virtual network that other networks route through.", answer: true, explain: "That centralizes control across VNets and subscriptions." },
              { s: "Azure Firewall Standard is the most commonly used tier for production enterprise environments.", answer: true, explain: "It provides layer 3 to 7 filtering and threat intelligence." },
              { s: "Using the Azure Firewall plugin in Security Copilot requires no logs to be configured.", answer: false, explain: "Firewalls need structured IDPS logs sent to a Log Analytics workspace." }
            ],
            es: {
              statements: [
                { s: "El diseño recomendado es implementar Azure Firewall en una red virtual centralizada por la que pasen las demás redes.", explain: "Así se centraliza el control entre redes virtuales y suscripciones." },
                { s: "Azure Firewall Standard es el nivel más usado en entornos empresariales de producción.", explain: "Ofrece filtrado de las capas 3 a 7 e inteligencia sobre amenazas." },
                { s: "Usar el complemento de Azure Firewall en Security Copilot no requiere configurar registros.", explain: "Los firewalls necesitan registros estructurados de IDPS enviados a un área de trabajo de Log Analytics." }
              ]
            }
          },
          {
            type: "single",
            q: "Why can Azure Firewall stay available during failures or traffic spikes?",
            options: [
              "It has built-in high availability and can span multiple availability zones",
              "It runs on a single VM in your subscription that restarts automatically within seconds of a failure",
              "Each customer deploys a second firewall as a manual standby",
              "It falls back to NSG rules during an outage"
            ],
            answer: 0,
            explain: "Built-in high availability and zone support distribute the firewall across separate datacenters.",
            es: {
              q: "¿Por qué Azure Firewall puede seguir disponible ante fallas o picos de tráfico?",
              options: [
                "Tiene alta disponibilidad integrada y puede abarcar varias zonas de disponibilidad",
                "Se ejecuta en una sola máquina virtual de su suscripción que se reinicia automáticamente segundos después de una falla",
                "Cada cliente implementa un segundo firewall como respaldo manual",
                "Recurre a las reglas de los NSG durante una interrupción"
              ],
              explain: "La alta disponibilidad integrada y la compatibilidad con zonas reparten el firewall en centros de datos separados."
            }
          }
        ]
      }
    },
    {
      id: "web-application-firewall",
      name: "Describe Web Application Firewall",
      es: { name: "Descripción de Web Application Firewall" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-basic-security-capabilities-azure/4-describe-web-application-firewall",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each attack that WAF protects against to its description.",
            values: ["SQL injection", "Cross-site scripting", "HTTP flood", "Remote file inclusion"],
            targets: [
              { t: "Malicious SQL in input fields manipulates the backend database", answer: 0 },
              { t: "Injected scripts steal session tokens from other users' browsers", answer: 1 },
              { t: "High volumes of requests overwhelm the app at layer 7", answer: 2 },
              { t: "The app is tricked into running a malicious remote file", answer: 3 }
            ],
            explain: "These attacks are covered by the OWASP core rule set that WAF uses.",
            es: {
              q: "Relacione cada ataque contra el que protege el WAF con su descripción.",
              values: ["Inyección de SQL", "Scripting entre sitios", "Inundación HTTP", "Inclusión remota de archivos"],
              targets: [
                { t: "SQL malicioso en campos de entrada manipula la base de datos del back-end" },
                { t: "Scripts inyectados roban tokens de sesión desde los exploradores de otros usuarios" },
                { t: "Un gran volumen de solicitudes satura la aplicación en la capa 7" },
                { t: "Se engaña a la aplicación para que ejecute un archivo remoto malicioso" }
              ],
              explain: "Estos ataques están cubiertos por el conjunto de reglas principal de OWASP que usa el WAF."
            }
          },
          {
            type: "single",
            q: "What's the main advantage of a centralized WAF?",
            options: [
              "A newly discovered vulnerability can be patched in one place instead of in every app",
              "It inspects traffic between VMs inside the VNet",
              "It provides layer 3 and 4 DDoS mitigation for every public IP address in the virtual network",
              "It replaces secure coding practices"
            ],
            answer: 0,
            explain: "Centralized WAF simplifies security management and shortens exposure to new threats.",
            es: {
              q: "¿Cuál es la principal ventaja de un WAF centralizado?",
              options: [
                "Una vulnerabilidad nueva se corrige en un solo lugar en lugar de en cada aplicación",
                "Inspecciona el tráfico entre máquinas virtuales dentro de la red",
                "Mitiga ataques DDoS de las capas 3 y 4 para todas las IP públicas de la red virtual",
                "Reemplaza las prácticas de codificación segura"
              ],
              explain: "El WAF centralizado simplifica la administración de la seguridad y acorta la exposición a amenazas nuevas."
            }
          },
          {
            type: "multi",
            q: "Which two services can host Azure Web Application Firewall?",
            options: ["Azure Application Gateway", "Azure Front Door", "Azure Firewall", "Azure Load Balancer", "Azure DDoS Protection"],
            answers: [0, 1],
            explain: "WAF deploys with Application Gateway, Application Gateway for Containers, Front Door and Azure CDN.",
            es: {
              q: "¿Cuáles son dos servicios que pueden alojar Azure Web Application Firewall?",
              options: ["Azure Application Gateway", "Azure Front Door", "Azure Firewall", "Azure Load Balancer", "Azure DDoS Protection"],
              explain: "El WAF se implementa con Application Gateway, Application Gateway for Containers, Front Door y Azure CDN."
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about WAF deployment options.",
            parts: [
              "WAF on ",
              { options: ["Application Gateway", "Front Door", "Azure Firewall"], answer: 0 },
              " provides regional protection with deep HTTP inspection, while WAF on ",
              { options: ["Front Door", "Application Gateway", "Azure Load Balancer"], answer: 0 },
              " provides global protection closer to the source."
            ],
            explain: "Application Gateway WAF is regional; Front Door WAF is global.",
            es: {
              q: "Complete la afirmación sobre las opciones de implementación del WAF.",
              parts: [
                "El WAF en ",
                { options: ["Application Gateway", "Front Door", "Azure Firewall"] },
                " da protección regional con inspección profunda de HTTP, mientras que el WAF en ",
                { options: ["Front Door", "Application Gateway", "Azure Load Balancer"] },
                " da protección global más cerca del origen."
              ],
              explain: "El WAF de Application Gateway es regional; el de Front Door es global."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "WAF defends against threats in the OWASP core rule set.", answer: true, explain: "It's a baseline of generic attack detection rules." },
              { s: "Azure DDoS Protection alone covers HTTP floods at layer 7.", answer: false, explain: "Layer 7 floods need WAF." },
              { s: "Security Copilot can help investigate Azure WAF logs when the WAF plugin is enabled.", answer: true, explain: "The plugin must be turned on and configured." }
            ],
            es: {
              statements: [
                { s: "El WAF defiende contra las amenazas del conjunto de reglas principal de OWASP.", explain: "Es una base de reglas genéricas de detección de ataques." },
                { s: "La protección contra DDoS de Azure por sí sola cubre las inundaciones HTTP de la capa 7.", explain: "Las inundaciones de capa 7 requieren WAF." },
                { s: "Security Copilot puede ayudar a investigar los registros de Azure WAF cuando el complemento de WAF está habilitado.", explain: "El complemento se debe activar y configurar." }
              ]
            }
          }
        ]
      }
    },
    {
      id: "network-segmentation",
      name: "Describe network segmentation in Azure",
      es: { name: "Descripción de la segmentación de red en Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-basic-security-capabilities-azure/5-describe-network-segmentation",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "What is the fundamental building block for an organization's private network in Azure?",
            options: ["Azure Virtual Network", "A network security group", "A subnet", "Azure Firewall"],
            answer: 0,
            explain: "VNets provide private networking with Azure's scale, availability and isolation.",
            es: {
              q: "¿Cuál es el componente fundamental de la red privada de una organización en Azure?",
              options: ["Azure Virtual Network", "Un grupo de seguridad de red", "Una subred", "Azure Firewall"],
              explain: "Las redes virtuales ofrecen redes privadas con la escala, la disponibilidad y el aislamiento de Azure."
            }
          },
          {
            type: "multi",
            q: "Which two are main reasons for network segmentation?",
            options: ["Isolation of resources", "Governance policies set by the organization", "Replacing the need for a firewall", "Allowing all traffic between VNets by default", "Reducing the number of subscriptions"],
            answers: [0, 1],
            explain: "The reasons are grouping related assets, isolating resources and applying governance policies.",
            es: {
              q: "¿Cuáles son dos motivos principales para segmentar la red?",
              options: ["El aislamiento de los recursos", "Las directivas de gobernanza que define la organización", "Eliminar la necesidad de un firewall", "Permitir todo el tráfico entre redes virtuales de forma predeterminada", "Reducir la cantidad de suscripciones"],
              explain: "Los motivos son agrupar recursos relacionados, aislar recursos y aplicar directivas de gobernanza."
            }
          },
          {
            type: "single",
            q: "Two VNets in different regions need to communicate privately and with low latency. What should you use?",
            options: ["Global virtual network peering", "A site-to-site VPN over the internet", "Azure Bastion", "Azure Firewall Manager"],
            answer: 0,
            explain: "Peering across regions uses the Azure backbone, not the public internet.",
            es: {
              q: "Dos redes virtuales en regiones distintas deben comunicarse de forma privada y con baja latencia. ¿Qué debe usar?",
              options: ["El emparejamiento global de redes virtuales", "Una VPN de sitio a sitio por internet", "Azure Bastion", "Azure Firewall Manager"],
              explain: "El emparejamiento entre regiones usa la red troncal de Azure, no internet."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Resources in a virtual network can communicate outbound to the internet by default.", answer: true, explain: "Inbound access is controlled with public IPs or load balancers." },
              { s: "You can create only one virtual network per subscription.", answer: false, explain: "You can create multiple VNets per region per subscription." },
              { s: "Subnets let you give different parts of a VNet different security controls.", answer: true, explain: "For example, web and database tiers in separate subnets." }
            ],
            es: {
              statements: [
                { s: "Los recursos de una red virtual pueden comunicarse hacia internet de forma predeterminada.", explain: "El acceso entrante se controla con IP públicas o equilibradores de carga." },
                { s: "Solo se puede crear una red virtual por suscripción.", explain: "Se pueden crear varias redes virtuales por región y suscripción." },
                { s: "Las subredes permiten dar controles de seguridad distintos a partes de una red virtual.", explain: "Por ejemplo, los niveles web y de base de datos en subredes separadas." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about segmentation and Zero Trust.",
            parts: [
              "Network segmentation aligns with the Zero Trust principle of ",
              { options: ["assume breach", "verify explicitly", "least privilege"], answer: 0 },
              ", because it helps prevent an attacker from ",
              { options: ["spreading laterally through the network", "bypassing MFA", "launching DDoS attacks"], answer: 0 },
              "."
            ],
            explain: "Each segment boundary is a chance to inspect, filter and contain traffic.",
            es: {
              q: "Complete la afirmación sobre la segmentación y la Confianza cero.",
              parts: [
                "La segmentación de red se alinea con el principio de Confianza cero de ",
                { options: ["asumir una vulneración", "verificar explícitamente", "privilegios mínimos"] },
                ", porque ayuda a impedir que un atacante ",
                { options: ["se extienda lateralmente por la red", "eludir la MFA", "lanzar ataques DDoS"] },
                "."
              ],
              explain: "Cada límite entre segmentos es una oportunidad para inspeccionar, filtrar y contener el tráfico."
            }
          }
        ]
      }
    },
    {
      id: "network-security-groups",
      name: "Describe Azure Network Security Groups",
      es: { name: "Descripción de los grupos de seguridad de red de Azure" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-basic-security-capabilities-azure/6-describe-azure-network-security-groups",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "With only the default inbound rules in an NSG, which inbound traffic is allowed?",
            options: [
              "Traffic from the virtual network and from the Azure load balancer",
              "All traffic from the internet",
              "Only HTTPS from the internet and traffic from peered virtual networks in other regions",
              "Only traffic from the Azure load balancer"
            ],
            answer: 0,
            explain: "AllowVNetInBound and AllowAzureLoadBalancerInBound are processed before DenyAllInBound.",
            es: {
              q: "Con solo las reglas de entrada predeterminadas de un NSG, ¿qué tráfico entrante se permite?",
              options: [
                "El tráfico de la red virtual y del equilibrador de carga de Azure",
                "Todo el tráfico de internet",
                "Solo HTTPS desde internet y el tráfico de redes virtuales emparejadas en otras regiones",
                "Solo el tráfico del equilibrador de carga de Azure"
              ],
              explain: "AllowVNetInBound y AllowAzureLoadBalancerInBound se procesan antes que DenyAllInBound."
            }
          },
          {
            type: "single",
            q: "A multi-tier app adds web servers often. The team wants NSG rules to apply automatically to new web servers without tracking IP addresses. What should it use?",
            options: ["Application security groups", "Azure Firewall Manager", "Service tags", "A dynamic NSG per subnet"],
            answer: 0,
            explain: "ASGs group VMs; rules that reference the ASG apply to every VM added to it.",
            es: {
              q: "Una aplicación de varios niveles suma servidores web seguido. El equipo quiere que las reglas del NSG se apliquen solas a los servidores nuevos sin seguir direcciones IP. ¿Qué debe usar?",
              options: ["Grupos de seguridad de aplicaciones", "Azure Firewall Manager", "Etiquetas de servicio", "Un NSG dinámico por subred"],
              explain: "Los ASG agrupan máquinas virtuales; las reglas que referencian el ASG se aplican a cada máquina que se agrega."
            }
          },
          {
            type: "multi",
            q: "Which two information points are used to evaluate NSG security rules?",
            options: ["Source port", "Destination", "Application name", "URL path", "FQDN"],
            answers: [0, 1],
            explain: "Rules evaluate source, source port, destination, destination port and protocol.",
            es: {
              q: "¿Cuáles son dos datos que se usan para evaluar las reglas de seguridad de un NSG?",
              options: ["El puerto de origen", "El destino", "Nombre de la aplicación", "Ruta de la URL", "FQDN"],
              explain: "Las reglas evalúan origen, puerto de origen, destino, puerto de destino y protocolo."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "A subnet can have only one NSG associated with it.", answer: true, explain: "But one NSG can be associated with many subnets and NICs." },
              { s: "In an NSG, rules with higher priority numbers are processed first.", answer: false, explain: "Lower numbers are processed first." },
              { s: "The default AllowInternetOutBound rule allows outbound traffic to the internet.", answer: true, explain: "It's one of the three default outbound rules." }
            ],
            es: {
              statements: [
                { s: "Una subred solo puede tener un NSG asociado.", explain: "Pero un mismo NSG se puede asociar a muchas subredes e interfaces de red." },
                { s: "En un NSG, las reglas con números de prioridad más altos se procesan primero.", explain: "Los números más bajos se procesan primero." },
                { s: "La regla predeterminada AllowInternetOutBound permite el tráfico saliente hacia internet.", explain: "Es una de las tres reglas de salida predeterminadas." }
              ]
            }
          },
          {
            type: "dropdown",
            q: "Complete the statement about NSG rules.",
            parts: [
              "When traffic matches a rule, ",
              { options: ["processing stops", "all remaining rules are also evaluated", "the rule with the highest number wins"], answer: 0 },
              ", and you can use a ",
              { options: ["service tag", "application security group of the Azure service", "FQDN tag"], answer: 0 },
              " as source or destination to represent an Azure service's IP prefixes."
            ],
            explain: "First match wins, and service tags or ASGs reduce the number of rules needed.",
            es: {
              q: "Complete la afirmación sobre las reglas de un NSG.",
              parts: [
                "Cuando el tráfico coincide con una regla, ",
                { options: ["el procesamiento se detiene", "se evalúan también las reglas restantes", "gana la regla con el número más alto"] },
                ", y se puede usar una ",
                { options: ["etiqueta de servicio", "grupo de seguridad de aplicaciones del servicio de Azure", "etiqueta FQDN"] },
                " como origen o destino para representar los prefijos IP de un servicio de Azure."
              ],
              explain: "Gana la primera coincidencia, y las etiquetas de servicio o los ASG reducen la cantidad de reglas necesarias."
            }
          }
        ]
      }
    },
    {
      id: "azure-bastion",
      name: "Describe Azure Bastion",
      es: { name: "Descripción de Azure Bastion" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-basic-security-capabilities-azure/7-describe-azure-bastion-just-in-time-access",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "single",
            q: "Remote developers need RDP and SSH access to VMs, but the company doesn't want to expose management ports to the internet or give the VMs public IPs. What should it deploy?",
            options: ["Azure Bastion", "A public load balancer", "Just-in-time VM access with public IPs", "Azure Firewall DNAT rules for RDP"],
            answer: 0,
            explain: "Bastion provides RDP/SSH over TLS from the portal using the VMs' private IPs.",
            es: {
              q: "Desarrolladores remotos necesitan acceso RDP y SSH a máquinas virtuales, pero la empresa no quiere exponer puertos de administración a internet ni dar IP públicas a las máquinas. ¿Qué debe implementar?",
              options: ["Azure Bastion", "Un equilibrador de carga público", "Acceso Just-In-Time a máquinas virtuales con IP pública", "Reglas DNAT de Azure Firewall para RDP"],
              explain: "Bastion da RDP/SSH sobre TLS desde el portal usando las IP privadas de las máquinas virtuales."
            }
          },
          {
            type: "match",
            q: "Match each Bastion tier to its key characteristic.",
            values: ["Developer", "Basic", "Standard", "Premium"],
            targets: [
              { t: "Free, shared infrastructure for dev/test, one VM connection at a time", answer: 0 },
              { t: "Dedicated deployment with fixed capacity for moderate production needs", answer: 1 },
              { t: "Adds host scaling, shareable links, native client support and file transfer", answer: 2 },
              { t: "Adds session recording and private-only deployment", answer: 3 }
            ],
            explain: "Each tier builds on the previous one.",
            es: {
              q: "Relacione cada nivel de Bastion con su característica principal.",
              values: ["Developer", "Basic", "Standard", "Premium"],
              targets: [
                { t: "Infraestructura compartida y gratuita para desarrollo y pruebas, una conexión por vez" },
                { t: "Implementación dedicada con capacidad fija para necesidades moderadas de producción" },
                { t: "Suma escalado de hosts, vínculos compartibles, cliente nativo y transferencia de archivos" },
                { t: "Suma grabación de sesiones e implementación solo privada" }
              ],
              explain: "Cada nivel se construye sobre el anterior."
            }
          },
          {
            type: "multi",
            q: "Which two are benefits of Azure Bastion?",
            options: ["Protection against port scanning", "No NSGs needed on the Bastion subnet", "Session recording in the Basic tier", "Automatic patching of the target VMs", "MFA built into every RDP session"],
            answers: [0, 1],
            explain: "Bastion avoids exposing VMs, needs no NSGs on its subnet and is hardened by the platform.",
            es: {
              q: "¿Cuáles son dos ventajas de Azure Bastion?",
              options: ["La protección contra el examen de puertos", "No necesitar NSG en la subred de Bastion", "Grabación de sesiones en el nivel Básico", "Aplicación automática de parches a las máquinas de destino", "MFA integrada en cada sesión de RDP"],
              explain: "Bastion evita exponer las máquinas virtuales, no requiere NSG en su subred y la plataforma lo mantiene protegido."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Bastion traffic goes over TLS on port 443 and traverses firewalls that allow HTTPS.", answer: true, explain: "No extra ports need to be opened." },
              { s: "Native client connections are available on every Bastion tier.", answer: false, explain: "They're available on Standard and Premium." },
              { s: "With Bastion, VMs need an agent installed to accept connections.", answer: false, explain: "No public IP, agent or special client software is needed." }
            ],
            es: {
              statements: [
                { s: "El tráfico de Bastion va sobre TLS por el puerto 443 y atraviesa firewalls que permiten HTTPS.", explain: "No hace falta abrir puertos adicionales." },
                { s: "Las conexiones con cliente nativo están disponibles en todos los niveles de Bastion.", explain: "Están disponibles en Standard y Premium." },
                { s: "Con Bastion, las máquinas virtuales necesitan un agente instalado para aceptar conexiones.", explain: "No se necesita IP pública, agente ni software cliente especial." }
              ]
            }
          },
          {
            type: "single",
            q: "Why does Azure Bastion help protect against zero-day exploits?",
            options: [
              "It's a hardened, platform-managed service at the VNet perimeter that Azure keeps up to date",
              "It installs and updates an antivirus agent on every VM in the virtual network automatically, so each VM is patched against new threats",
              "It encrypts RDP traffic with a customer key",
              "It replaces the operating system on each VM"
            ],
            answer: 0,
            explain: "Hardening happens in one place, so you don't need to harden each VM against these exploits.",
            es: {
              q: "¿Por qué Azure Bastion ayuda a proteger contra vulnerabilidades de día cero?",
              options: [
                "Es un servicio protegido y administrado por la plataforma en el perímetro de la red virtual, que Azure mantiene actualizado",
                "Instala y actualiza automáticamente un agente antivirus en cada máquina virtual de la red, para que cada una quede protegida frente a amenazas nuevas",
                "Cifra el tráfico RDP con una clave del cliente",
                "Reemplaza el sistema operativo de cada máquina virtual"
              ],
              explain: "La protección se concentra en un solo lugar, así que no hace falta proteger cada máquina virtual contra estas vulnerabilidades."
            }
          }
        ]
      }
    },
    {
      id: "key-vault",
      name: "Describe Azure Key Vault",
      es: { name: "Descripción de Azure Key Vault" },
      url: "https://learn.microsoft.com/en-us/training/modules/describe-basic-security-capabilities-azure/8-describe-ways-azure-encrypts-data",
      quiz: {
        added: "2026-11-01",
        items: [
          {
            type: "match",
            q: "Match each problem to the Key Vault capability that solves it.",
            values: ["Secrets management", "Key management", "Certificate management"],
            targets: [
              { t: "Store API keys and passwords outside application code", answer: 0 },
              { t: "Create and control the encryption keys used to encrypt data", answer: 1 },
              { t: "Provision and automatically renew TLS/SSL certificates", answer: 2 }
            ],
            explain: "Key Vault covers secrets, keys and certificates.",
            es: {
              q: "Relacione cada problema con la capacidad de Key Vault que lo resuelve.",
              values: ["Administración de secretos", "Administración de claves", "Administración de certificados"],
              targets: [
                { t: "Guardar claves de API y contraseñas fuera del código de la aplicación" },
                { t: "Crear y controlar las claves de cifrado que protegen los datos" },
                { t: "Aprovisionar y renovar automáticamente certificados TLS/SSL" }
              ],
              explain: "Key Vault cubre secretos, claves y certificados."
            }
          },
          {
            type: "single",
            q: "How are callers authenticated and authorized to access a key vault?",
            options: [
              "Microsoft Entra ID authenticates; Azure RBAC or Key Vault access policies authorize",
              "Key Vault access policies authenticate; Azure RBAC authorizes",
              "Network rules authenticate; access policies authorize",
              "Azure Bastion authenticates the caller and Azure Firewall authorizes access to the vault"
            ],
            answer: 0,
            explain: "Entra ID verifies identity, then RBAC or access policies decide allowed operations.",
            es: {
              q: "¿Cómo se autentica y autoriza a quienes acceden a un almacén de claves?",
              options: [
                "Microsoft Entra ID autentica; Azure RBAC o las directivas de acceso de Key Vault autorizan",
                "Las directivas de acceso de Key Vault autentican; Azure RBAC autoriza",
                "Las reglas de red autentican; las directivas de acceso autorizan",
                "Azure Bastion autentica a quien llama y Azure Firewall autoriza el acceso al almacén"
              ],
              explain: "Entra ID verifica la identidad, y luego RBAC o las directivas de acceso deciden qué operaciones se permiten."
            }
          },
          {
            type: "multi",
            q: "Which two Azure services integrate with Key Vault?",
            options: ["Azure Disk Encryption", "Azure App Service", "Azure Bastion", "Azure DDoS Protection", "Network security groups"],
            answers: [0, 1],
            explain: "Key Vault integrates with Disk Encryption, SQL Database and SQL Server, App Service and certificate management.",
            es: {
              q: "¿Cuáles son dos servicios de Azure que se integran con Key Vault?",
              options: ["Azure Disk Encryption", "Azure App Service", "Azure Bastion", "Azure DDoS Protection", "Grupos de seguridad de red"],
              explain: "Key Vault se integra con Disk Encryption, SQL Database y SQL Server, App Service y la administración de certificados."
            }
          },
          {
            type: "yesno",
            statements: [
              { s: "Key Vault directly supports the Zero Trust principle of least privilege access.", answer: true, explain: "Apps and users get only the secrets they need." },
              { s: "Key Vault content is replicated within a region and to a secondary region.", answer: true, explain: "That provides high availability without admin action." },
              { s: "The Standard tier of Key Vault offers HSM-protected keys.", answer: false, explain: "HSM-protected keys come with the Premium tier." }
            ],
            es: {
              statements: [
                { s: "Key Vault respalda directamente el principio de Confianza cero de acceso con privilegios mínimos.", explain: "Las aplicaciones y los usuarios reciben solo los secretos que necesitan." },
                { s: "El contenido de Key Vault se replica dentro de una región y hacia una región secundaria.", explain: "Eso da alta disponibilidad sin intervención del administrador." },
                { s: "El nivel Estándar de Key Vault ofrece claves protegidas por HSM.", explain: "Las claves protegidas por HSM vienen con el nivel Premium." }
              ]
            }
          },
          {
            type: "single",
            q: "A team wants each application to access only its own secrets. What does Key Vault allow?",
            options: [
              "Creating a key vault per application and restricting its secrets to that app and team",
              "Storing all secrets in one shared vault that every application in the subscription can read",
              "One vault with a separate resource lock per secret",
              "Separate NSGs that filter which app reads each secret"
            ],
            answer: 0,
            explain: "Vaults can segregate secrets so apps access only the vault and operations they're allowed.",
            es: {
              q: "Un equipo quiere que cada aplicación acceda solo a sus propios secretos. ¿Qué permite Key Vault?",
              options: [
                "Crear un almacén de claves por aplicación y limitar sus secretos a esa aplicación y su equipo",
                "Guardar todos los secretos en un único almacén compartido que todas las aplicaciones de la suscripción pueden leer",
                "Un almacén con un bloqueo de recursos distinto por secreto",
                "NSG separados que filtran qué aplicación lee cada secreto"
              ],
              explain: "Los almacenes pueden separar secretos para que cada aplicación acceda solo al almacén y las operaciones permitidas."
            }
          }
        ]
      }
    }
  ]
});
