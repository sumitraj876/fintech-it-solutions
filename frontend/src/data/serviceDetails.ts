export type ServiceFAQ = { question: string; answer: string; };

export type ServiceDetail = {
  slug: string;
  businessProblem: string;
  ourSolution: string;
  deliverables: string[];
  techApproach: string[];
  exampleUseCases: string[];
  deliveryProcess: string[];
  faqs: ServiceFAQ[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'ai-ml',
    businessProblem: 'Manual classification and prediction are slow, error-prone, and cannot scale. You have data, but extracting actionable decisions from it is impossible without machine learning.',
    ourSolution: 'We build end-to-end ML pipelines. We handle data collection, feature engineering, model selection (Logistic Regression, Random Forests, XGBoost, or Neural Networks), and evaluation (Precision, Recall, F1). We deploy models via REST APIs or batch inference.',
    deliverables: ['Data audit and preparation script', 'Trained ML model with baseline comparisons', 'Evaluation report (ROC-AUC, confusion matrix)', 'API endpoint or batch inference pipeline', 'Model monitoring and retraining triggers'],
    techApproach: ['Python (pandas, scikit-learn, PyTorch)', 'MLflow for experiment tracking', 'FastAPI for model serving', 'Docker for containerization'],
    exampleUseCases: ['Fraud-risk classification', 'Customer churn prediction', 'Document classification', 'Quality-defect classification'],
    deliveryProcess: ['Data discovery & validation', 'Baseline modeling', 'Feature engineering & tuning', 'Evaluation & error analysis', 'Deployment & monitoring setup'],
    faqs: [{ question: 'How do you handle imbalanced datasets?', answer: 'We use techniques like SMOTE, class weights, and threshold tuning, evaluated against an F1-score rather than raw accuracy.' }]
  },
  {
    slug: 'generative-ai',
    businessProblem: 'Employees waste hours searching for information across PDFs, wikis, and emails. Generic LLMs hallucinate because they lack your internal business context.',
    ourSolution: 'We build Retrieval-Augmented Generation (RAG) systems. We ingest your documents, chunk them, create vector embeddings, and store them in a vector database. When a user asks a question, we retrieve the exact context and pass it to the LLM to generate a grounded answer with citations.',
    deliverables: ['Document ingestion pipeline (PDF, DOCX, HTML)', 'Vector database setup (e.g., pgvector)', 'RAG orchestration layer', 'Chat interface', 'Evaluation script for groundedness'],
    techApproach: ['LangChain or LlamaIndex', 'OpenAI API or self-hosted Llama 3', 'PostgreSQL + pgvector', 'React streaming UI'],
    exampleUseCases: ['Internal policy assistant', 'Technical documentation search', 'Customer support chatbot'],
    deliveryProcess: ['Data access audit', 'Ingestion pipeline build', 'Retrieval tuning', 'Prompt engineering', 'UI integration'],
    faqs: [{ question: 'How do you prevent hallucinations?', answer: 'We implement strict prompt instructions to say "I don\'t know" if the retrieved context does not contain the answer, and we provide source citations.' }]
  },
  {
    slug: 'full-stack',
    businessProblem: 'You need a reliable SaaS application or MVP but the last team left you with a fragile codebase, no tests, and scaling issues.',
    ourSolution: 'We build production-grade web apps. We design scalable databases (PostgreSQL), typed REST APIs (Node.js/Express), and responsive React frontends. We implement multi-tenant isolation and role-based access control.',
    deliverables: ['Responsive React frontend', 'REST API with validation (Zod)', 'Database schema and migrations', 'Authentication (JWT/OAuth)', 'CI/CD deployment pipeline'],
    techApproach: ['React + TypeScript', 'Node.js + Express', 'PostgreSQL', 'Redis for caching'],
    exampleUseCases: ['SaaS MVPs', 'Admin dashboards', 'Customer portals', 'B2B platforms'],
    deliveryProcess: ['Architecture design', 'Data modeling', 'API development', 'Frontend integration', 'Deployment & handover'],
    faqs: [{ question: 'Do you write tests?', answer: 'Yes, we use Vitest or Jest for unit tests and Playwright for E2E testing on critical paths.' }]
  },
  {
    slug: 'data-analytics',
    businessProblem: 'Your team spends days compiling Excel reports. By the time a report is ready, the data is outdated and business decisions are made on gut feeling.',
    ourSolution: 'We build automated ETL pipelines and interactive KPI dashboards. We define metrics consistently in code so every department sees the same number. Dashboards include drill-downs, date filters, and role-based visibility.',
    deliverables: ['ETL/ELT pipeline scripts', 'Data warehouse schema', 'Interactive KPI dashboard', 'Scheduled report generation', 'Data validation tests'],
    techApproach: ['Python + SQL', 'dbt for transformations', 'PowerBI or React + Recharts', 'Snowflake or PostgreSQL'],
    exampleUseCases: ['Executive KPI tracking', 'Sales forecasting dashboards', 'Marketing ROI analytics'],
    deliveryProcess: ['KPI definition workshop', 'Data source connection', 'Pipeline build', 'Dashboard design', 'UAT & handover'],
    faqs: [{ question: 'Can you connect to our existing database?', answer: 'Yes, we build read-only integrations to pull from PostgreSQL, MySQL, or Salesforce without impacting live performance.' }]
  },
  {
    slug: 'software-engineering',
    businessProblem: 'You have a working application that is impossible to maintain. Features take weeks, bugs are frequent, and onboarding new developers is a nightmare.',
    ourSolution: 'We perform a code audit and implement a modernization plan. We break down monoliths, add automated testing (unit and E2E), migrate to TypeScript, and establish CI/CD pipelines.',
    deliverables: ['Code audit report', 'Refactored application', 'Automated test suite', 'CI/CD pipeline', 'Documentation'],
    techApproach: ['TypeScript', 'Vitest / Jest', 'GitHub Actions', 'ESLint / Prettier'],
    exampleUseCases: ['Legacy app modernization', 'API migration', 'Test coverage expansion'],
    deliveryProcess: ['Assessment', 'Prioritization', 'Incremental refactor', 'Test implementation', 'Deployment'],
    faqs: [{ question: 'Will you rewrite everything?', answer: 'No, we prefer incremental strangler-fig pattern refactoring to minimize business disruption.' }]
  },
  {
    slug: 'cloud-devops',
    businessProblem: 'Deployments require manual SSH commands. There is no staging environment. Rollbacks take hours and cause downtime.',
    ourSolution: 'We implement Infrastructure as Code (IaC) and robust CI/CD. We set up staging and production environments, automated testing gates, and observability (logging and monitoring).',
    deliverables: ['Terraform/Pulumi scripts', 'CI/CD pipeline (GitHub Actions)', 'Dockerized application', 'Monitoring dashboards (Grafana/Datadog)', 'Runbooks'],
    techApproach: ['Docker', 'Kubernetes (if required)', 'Terraform', 'AWS or GCP'],
    exampleUseCases: ['Zero-downtime deployments', 'Auto-scaling setup', 'Disaster recovery planning'],
    deliveryProcess: ['Infrastructure audit', 'IaC implementation', 'CI/CD setup', 'Monitoring setup', 'Handover'],
    faqs: [{ question: 'Do you use Kubernetes?', answer: 'We evaluate the need. For small teams, Docker with ECS or Fly.io is often simpler and cheaper than Kubernetes.' }]
  },
  {
    slug: 'crm-development',
    businessProblem: 'Your sales team tracks leads in Excel. Deals fall through the cracks, follow-ups are missed, and management has no visibility into the pipeline.',
    ourSolution: 'We build custom CRM platforms tailored exactly to your sales workflow — no bloatware, just the leads, pipelines, and reports you actually use.',
    deliverables: ['Custom CRM web app', 'Sales pipeline dashboard', 'Automated follow-up workflows', 'Contact management', 'Reporting'],
    techApproach: ['React + TypeScript', 'Node.js + Express', 'PostgreSQL', 'REST APIs'],
    exampleUseCases: ['B2B sales tracking', 'Real estate lead management', 'Customer support ticketing'],
    deliveryProcess: ['Map sales workflow', 'Design data model', 'Build UI & API', 'Deploy & train team'],
    faqs: [{ question: 'Can it integrate with our email?', answer: 'Yes, we integrate with Gmail/Outlook APIs for email sync.' }]
  },
  {
    slug: 'erp-business',
    businessProblem: 'Inventory is tracked in one system, invoices in another, and purchase orders via email. Nobody knows the true stock level.',
    ourSolution: 'We build unified ERP modules that connect inventory, procurement, and finance into a single source of truth.',
    deliverables: ['Inventory management', 'Procurement workflow', 'Order tracking', 'Finance reporting'],
    techApproach: ['React', 'Node.js', 'PostgreSQL', 'Role-based access control'],
    exampleUseCases: ['Manufacturing ERP', 'Retail stock management', 'Supply chain tracking'],
    deliveryProcess: ['Process audit', 'Module design', 'Data migration', 'Go-live'],
    faqs: [{ question: 'Will it handle our existing data?', answer: 'We build migration scripts to import your existing Excel or SQL data safely.' }]
  },
  {
    slug: 'hrms-workforce',
    businessProblem: 'Leave requests happen over WhatsApp. Payroll requires manual Excel calculation. HR spends hours on admin.',
    ourSolution: 'A custom HRMS portal with self-service leave, attendance tracking, and payroll integration.',
    deliverables: ['Employee self-service portal', 'Leave & attendance tracker', 'Payroll export', 'Approval workflows'],
    techApproach: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth'],
    exampleUseCases: ['Mid-size company HR portal', 'Remote team attendance', 'Recruitment tracking'],
    deliveryProcess: ['HR policy review', 'Portal design', 'Integration', 'Rollout'],
    faqs: [{ question: 'Does it integrate with biometrics?', answer: 'Yes, if your device exposes an API, we integrate it.' }]
  },
  {
    slug: 'fintech-apps',
    businessProblem: 'Internal finance reporting is manual and error-prone. Reconciling payments takes days.',
    ourSolution: 'Secure internal fintech dashboards for transaction reconciliation and reporting. (We are not a regulated financial institution.)',
    deliverables: ['Financial dashboard', 'Reconciliation engine', 'Payment gateway integration', 'Audit logs'],
    techApproach: ['React', 'Node.js', 'PostgreSQL', 'Stripe/Razorpay APIs'],
    exampleUseCases: ['SaaS revenue dashboard', 'Payment reconciliation', 'Internal expense tracking'],
    deliveryProcess: ['Compliance audit', 'Architecture', 'Integration', 'Deployment'],
    faqs: [{ question: 'Do you handle compliance?', answer: 'We build the software; compliance audits must be done by your legal team.' }]
  },
  {
    slug: 'enterprise-ai',
    businessProblem: 'Your employees waste hours searching through PDFs, wikis, and old emails to find simple answers.',
    ourSolution: 'We integrate LLMs with your internal documents using RAG (Retrieval-Augmented Generation) so employees can just ask questions.',
    deliverables: ['Internal chatbot', 'Document ingestion pipeline', 'Vector database', 'Access controls'],
    techApproach: ['LangChain', 'OpenAI / Llama', 'Vector DB', 'React'],
    exampleUseCases: ['HR policy assistant', 'Technical documentation search', 'Contract review'],
    deliveryProcess: ['Data audit', 'Pipeline build', 'Evaluation', 'Deployment'],
    faqs: [{ question: 'Is our data safe?', answer: 'Yes, we use your own API keys or self-hosted models. We do not train on your data.' }]
  },
  {
    slug: 'business-intelligence',
    businessProblem: 'Reporting takes days of manual Excel work. By the time the report is ready, the data is outdated.',
    ourSolution: 'Automated data pipelines feeding real-time dashboards for executives.',
    deliverables: ['ETL pipelines', 'Executive dashboard', 'Automated reporting', 'Data warehouse'],
    techApproach: ['Python', 'SQL', 'Metabase / PowerBI', 'dbt'],
    exampleUseCases: ['Sales KPI dashboard', 'Marketing analytics', 'Operational reporting'],
    deliveryProcess: ['Metric definition', 'Pipeline build', 'Dashboard design', 'Handover'],
    faqs: [{ question: 'Can we use our existing data?', answer: 'Yes, we connect to your existing databases and tools.' }]
  },
  {
    slug: 'api-integration',
    businessProblem: 'Your CRM, ERP, and website don\'t talk to each other. Data is entered multiple times and often conflicts.',
    ourSolution: 'We build custom API integrations and webhooks to sync data between all your systems in real time.',
    deliverables: ['Custom REST APIs', 'Webhook processors', 'Data sync pipelines', 'Error monitoring'],
    techApproach: ['Node.js', 'Express', 'Zod', 'PostgreSQL'],
    exampleUseCases: ['CRM to ERP sync', 'Website order to inventory', 'Payment gateway webhooks'],
    deliveryProcess: ['API audit', 'Integration design', 'Implementation', 'Testing'],
    faqs: [{ question: 'What if the third-party API is bad?', answer: 'We build fault-tolerant queues (like Redis) to handle retries.' }]
  }
];

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((d) => d.slug === slug);
}