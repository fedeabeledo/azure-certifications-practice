// SC-900: Microsoft Security, Compliance, and Identity Fundamentals. Paths and module order follow Microsoft Learn.
Catalog.cert({
  id: "sc-900",
  code: "SC-900",
  name: "Microsoft Security, Compliance, and Identity Fundamentals",
  es: { name: "Aspectos básicos de seguridad, cumplimiento e identidad de Microsoft" },
  studyGuide: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900",
  paths: [
    {
      id: "security-compliance-identity-concepts",
      name: "Introduction to security, compliance, and identity concepts",
      es: { name: "Introducción a los conceptos de seguridad, cumplimiento e identidad" },
      url: "https://learn.microsoft.com/en-us/training/paths/describe-concepts-of-security-compliance-identity/",
      modules: ["security-concepts", "identity-concepts"]
    },
    {
      id: "microsoft-entra",
      name: "Introduction to Microsoft Entra",
      es: { name: "Introducción a Microsoft Entra" },
      url: "https://learn.microsoft.com/en-us/training/paths/describe-capabilities-of-microsoft-identity-access/",
      modules: ["entra-identity-types", "entra-authentication", "entra-access-management"]
    },
    {
      id: "security-solutions",
      name: "Introduction to Microsoft security solutions",
      es: { name: "Introducción a las soluciones de seguridad de Microsoft" },
      url: "https://learn.microsoft.com/en-us/training/paths/describe-capabilities-of-microsoft-security-solutions/",
      modules: []
    },
    {
      id: "priva-purview",
      name: "Introduction to Microsoft Priva and Microsoft Purview",
      es: { name: "Introducción a Microsoft Priva y Microsoft Purview" },
      url: "https://learn.microsoft.com/en-us/training/paths/describe-capabilities-of-microsoft-compliance-solutions/",
      modules: []
    }
  ]
});
