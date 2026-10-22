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
  // New Advanced Fields
  impact: { label: string; value: number; display: string }[];
  phases: { week: string; title: string; desc: string }[];
  latestModels: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'ai-ml',
    businessProblem: 'Manual classification and prediction are slow, error-prone, and cannot scale. You have data, but extracting actionable decisions from it is impossible without machine learning.',
    ourSolution: 'We build end-to-end ML pipelines. We handle data collection, feature engineering, model selection, and evaluation. We deploy models via REST APIs or batch inference.',
    deliverables: ['Data audit', 'Trained ML model', 'Evaluation report', 'API endpoint', 'Model monitoring'],
    techApproach: ['Python (pandas, scikit-learn)', 'PyTorch', 'MLflow', 'FastAPI'],
    exampleUseCases: ['Fraud-risk classification', 'Customer churn prediction', 'Document classification'],
    deliveryProcess: ['Data discovery', 'Baseline modeling', 'Feature engineering', 'Evaluation', 'Deployment'],
    faqs: [{ question: 'How do you handle imbalanced datasets?', answer: 'We use SMOTE, class weights, and threshold tuning evaluated on F1-score.' }],
    impact: [
      { label: 'Prediction Accuracy', value: 94, display: '94%' },
      { label: 'Manual Work Reduced', value: 80, display: '80%' },
      { label: 'Cost Savings', value: 35, display: '35%' }
    ],
    phases: [
      { week: 'Week 1-2', title: 'Data Audit & Cleaning', desc: 'We analyze your existing data quality and prepare it for modeling.' },
      { week: 'Week 3-4', title: 'Baseline & Training', desc: 'We train initial models and establish baseline metrics.' },
      { week: 'Week 5-6', title: 'Optimization', desc: 'We tune hyperparameters and improve feature engineering.' },
      { week: 'Week 7-8', title: 'Deployment', desc: 'We expose the model as a secure API and set up monitoring.' }
    ],
    latestModels: ['XGBoost 2.0', 'PyTorch 2.1', 'Scikit-learn 1.4', 'MLflow 2.10'],
    prerequisites: ['Historical labeled data (CSV/Excel)', 'Access to data source (Database/API)', 'Business domain expert', 'Clear definition of target metrics']
  },
  {
    slug: 'generative-ai',
    businessProblem: 'Employees waste hours searching for information across PDFs and emails. Generic LLMs hallucinate because they lack your internal business context.',
    ourSolution: 'We build Retrieval-Augmented Generation (RAG) systems. We ingest your documents, create vector embeddings, and generate grounded answers with citations.',
    deliverables: ['Document ingestion pipeline', 'Vector database setup', 'RAG orchestration layer', 'Chat interface'],
    techApproach: ['LangChain', 'OpenAI API / Llama 3', 'pgvector', 'React'],
    exampleUseCases: ['Internal policy assistant', 'Technical documentation search', 'Customer support chatbot'],
    deliveryProcess: ['Data access audit', 'Ingestion build', 'Retrieval tuning', 'Prompt engineering', 'UI integration'],
    faqs: [{ question: 'How do you prevent hallucinations?', answer: 'We implement strict prompt instructions to say "I don\'t know" if the retrieved context lacks the answer.' }],
    impact: [
      { label: 'Search Time Reduced', value: 90, display: '90%' },
      { label: 'Support Ticket Deflection', value: 45, display: '45%' },
      { label: 'Accuracy of Answers', value: 98, display: '98%' }
    ],
    phases: [
      { week: 'Week 1', title: 'Data Ingestion', desc: 'We connect to your data sources and extract text safely.' },
      { week: 'Week 2', title: 'Chunking & Embedding', desc: 'We split documents and create vector embeddings.' },
      { week: 'Week 3', title: 'Retrieval Tuning', desc: 'We tune the search algorithm to fetch the most relevant context.' },
      { week: 'Week 4', title: 'UI & Deployment', desc: 'We build the chat interface and deploy with rate limiting.' }
    ],
    latestModels: ['Llama 3 (70B)', 'GPT-4o', 'text-embedding-3-large', 'Claude 3.5 Sonnet'],
    prerequisites: ['Access to internal documents (PDF/DOCX)', 'API keys for LLM provider (OpenAI/Anthropic)', 'Server infra for vector database', 'List of approved data sources']
  },
  {
    slug: 'full-stack',
    businessProblem: 'You need a reliable SaaS application or MVP but the last team left you with a fragile codebase, no tests, and scaling issues.',
    ourSolution: 'We build production-grade web apps. We design scalable databases, typed REST APIs, and responsive React frontends with role-based access control.',
    deliverables: ['React frontend', 'REST API', 'Database schema', 'Authentication', 'CI/CD pipeline'],
    techApproach: ['React + TypeScript', 'Node.js + Express', 'PostgreSQL', 'Redis'],
    exampleUseCases: ['SaaS MVPs', 'Admin dashboards', 'Customer portals', 'B2B platforms'],
    deliveryProcess: ['Architecture design', 'Data modeling', 'API development', 'Frontend integration', 'Deployment'],
    faqs: [{ question: 'Do you write tests?', answer: 'Yes, we use Vitest for unit tests and Playwright for E2E testing on critical paths.' }],
    impact: [
      { label: 'Time to Market', value: 60, display: '60% Faster' },
      { label: 'Code Maintainability', value: 85, display: '85%' },
      { label: 'User Retention', value: 30, display: '30% Increase' }
    ],
    phases: [
      { week: 'Week 1-2', title: 'Architecture Design', desc: 'We design the database schema and API contracts.' },
      { week: 'Week 3-5', title: 'Backend Build', desc: 'We build the REST API with authentication and validation.' },
      { week: 'Week 6-8', title: 'Frontend Build', desc: 'We connect the React UI to the API.' },
      { week: 'Week 9', title: 'Testing & Deploy', desc: 'We run E2E tests and deploy to the cloud.' }
    ],
    latestModels: ['React 18', 'Node.js 22', 'PostgreSQL 16', 'Drizzle ORM', 'Tailwind CSS 3.4'],
    prerequisites: ['Product requirements document (PRD)', 'Brand guidelines (colors, logo, fonts)', 'API access to 3rd party services', 'A point of contact for weekly feedback']
  },
  {
    slug: 'data-analytics',
    businessProblem: 'Your team spends days compiling Excel reports. By the time a report is ready, the data is outdated.',
    ourSolution: 'We build automated ETL pipelines and interactive KPI dashboards. We define metrics consistently in code so every department sees the same number.',
    deliverables: ['ETL pipeline', 'Data warehouse schema', 'KPI dashboard', 'Scheduled reports'],
    techApproach: ['Python + SQL', 'dbt', 'PowerBI / Recharts', 'Snowflake / PostgreSQL'],
    exampleUseCases: ['Executive KPI tracking', 'Sales forecasting dashboards', 'Marketing ROI analytics'],
    deliveryProcess: ['KPI definition', 'Data connection', 'Pipeline build', 'Dashboard design', 'UAT'],
    faqs: [{ question: 'Can you connect to our existing database?', answer: 'Yes, we build read-only integrations to pull from PostgreSQL, MySQL, or Salesforce.' }],
    impact: [
      { label: 'Reporting Time Reduced', value: 75, display: '75%' },
      { label: 'Data Accuracy', value: 99, display: '99%' },
      { label: 'Decision Speed', value: 50, display: '50% Faster' }
    ],
    phases: [
      { week: 'Week 1', title: 'KPI Discovery', desc: 'We define exactly which metrics matter to your business.' },
      { week: 'Week 2-3', title: 'Pipeline Build', desc: 'We connect data sources and build the ETL pipeline.' },
      { week: 'Week 4', title: 'Dashboard Creation', desc: 'We design interactive dashboards with drill-downs.' },
      { week: 'Week 5', title: 'Handover', desc: 'We train your team to use the dashboards.' }
    ],
    latestModels: ['dbt Core 1.7', 'Apache Airflow 2.9', 'Snowflake', 'PowerBI', 'Metabase'],
    prerequisites: ['Read-only database access (SQL/NoSQL)', 'Definition of key KPIs and metrics', 'Access to existing BI tool (if any)', 'Sample of current reports']
  },
  {
    slug: 'software-engineering',
    businessProblem: 'You have a working application that is impossible to maintain. Features take weeks, bugs are frequent.',
    ourSolution: 'We perform a code audit and implement a modernization plan. We break down monoliths, add automated testing, and establish CI/CD pipelines.',
    deliverables: ['Code audit report', 'Refactored app', 'Automated test suite', 'CI/CD pipeline', 'Docs'],
    techApproach: ['TypeScript', 'Vitest / Jest', 'GitHub Actions', 'ESLint'],
    exampleUseCases: ['Legacy app modernization', 'API migration', 'Test coverage expansion'],
    deliveryProcess: ['Assessment', 'Prioritization', 'Incremental refactor', 'Test implementation', 'Deployment'],
    faqs: [{ question: 'Will you rewrite everything?', answer: 'No, we prefer incremental strangler-fig pattern refactoring to minimize disruption.' }],
    impact: [
      { label: 'Bug Rate Reduced', value: 70, display: '70%' },
      { label: 'Feature Velocity', value: 55, display: '55% Faster' },
      { label: 'Test Coverage', value: 80, display: '80%' }
    ],
    phases: [
      { week: 'Week 1', title: 'Code Audit', desc: 'We identify technical debt and bottlenecks.' },
      { week: 'Week 2-3', title: 'Test Coverage', desc: 'We write tests for critical paths to prevent regressions.' },
      { week: 'Week 4-5', title: 'Refactoring', desc: 'We incrementally refactor the fragile parts.' },
      { week: 'Week 6', title: 'CI/CD Setup', desc: 'We automate testing and deployment.' }
    ],
    latestModels: ['TypeScript 5.4', 'Vitest 1.6', 'Playwright 1.44', 'GitHub Actions'],
    prerequisites: ['Access to existing code repository (GitHub/Bitbucket)', 'Documentation of current architecture', 'List of critical bugs', 'Access to staging/production servers']
  },
  {
    slug: 'cloud-devops',
    businessProblem: 'Deployments require manual SSH commands. There is no staging environment. Rollbacks take hours.',
    ourSolution: 'We implement Infrastructure as Code (IaC) and robust CI/CD. We set up staging and production environments with automated testing gates.',
    deliverables: ['Terraform scripts', 'CI/CD pipeline', 'Dockerized app', 'Monitoring dashboards', 'Runbooks'],
    techApproach: ['Docker', 'Kubernetes', 'Terraform', 'AWS / GCP'],
    exampleUseCases: ['Zero-downtime deployments', 'Auto-scaling setup', 'Disaster recovery planning'],
    deliveryProcess: ['Infrastructure audit', 'IaC implementation', 'CI/CD setup', 'Monitoring setup', 'Handover'],
    faqs: [{ question: 'Do you use Kubernetes?', answer: 'We evaluate the need. For small teams, Docker with ECS is often simpler and cheaper.' }],
    impact: [
      { label: 'Deploy Time Reduced', value: 95, display: '95%' },
      { label: 'Downtime', value: 99.9, display: '99.9% Uptime' },
      { label: 'Infrastructure Cost', value: 30, display: '30% Savings' }
    ],
    phases: [
      { week: 'Week 1', title: 'Infra Audit', desc: 'We review your current cloud setup and security.' },
      { week: 'Week 2-3', title: 'IaC Setup', desc: 'We write Terraform scripts for reproducible environments.' },
      { week: 'Week 4', title: 'CI/CD Pipeline', desc: 'We automate builds and deployments with approval gates.' },
      { week: 'Week 5', title: 'Observability', desc: 'We set up Grafana/Prometheus for monitoring.' }
    ],
    latestModels: ['Terraform 1.8', 'Kubernetes 1.30', 'Docker 26', 'AWS ECS Fargate'],
    prerequisites: ['Cloud provider account (AWS/GCP/Azure)', 'Current architecture diagram', 'List of all environment variables', 'Access to DNS management portal']
  },
  {
    slug: 'crm-development',
    businessProblem: 'Your sales team tracks leads in Excel. Deals fall through the cracks and management has no visibility.',
    ourSolution: 'We build custom CRM platforms tailored exactly to your sales workflow â€” no bloatware, just what you actually use.',
    deliverables: ['Custom CRM web app', 'Sales pipeline dashboard', 'Automated workflows', 'Reporting'],
    techApproach: ['React + TypeScript', 'Node.js + Express', 'PostgreSQL'],
    exampleUseCases: ['B2B sales tracking', 'Real estate lead management', 'Support ticketing'],
    deliveryProcess: ['Map workflow', 'Design data model', 'Build UI & API', 'Deploy & train'],
    faqs: [{ question: 'Can it integrate with our email?', answer: 'Yes, we integrate with Gmail/Outlook APIs for email sync.' }],
    impact: [
      { label: 'Sales Conversion', value: 35, display: '35% Increase' },
      { label: 'Lead Response Time', value: 60, display: '60% Faster' },
      { label: 'Data Accuracy', value: 95, display: '95%' }
    ],
    phases: [
      { week: 'Week 1', title: 'Workflow Mapping', desc: 'We document your exact sales stages and requirements.' },
      { week: 'Week 2-3', title: 'Core Build', desc: 'We build the database and API for contacts and deals.' },
      { week: 'Week 4-5', title: 'UI Development', desc: 'We build the drag-and-drop pipeline dashboard.' },
      { week: 'Week 6', title: 'Training & Go-Live', desc: 'We migrate your Excel data and train the sales team.' }
    ],
    latestModels: ['React 18', 'PostgreSQL 16', 'React Query', 'Tailwind CSS'],
    prerequisites: ['Current sales pipeline process document', 'Export of existing leads/contacts (Excel/CSV)', 'Details of 3rd party integrations (e.g., Gmail)', 'List of user roles and permissions']
  },
  {
    slug: 'erp-business',
    businessProblem: 'Inventory is tracked in one system, invoices in another. Nobody knows the true stock level.',
    ourSolution: 'We build unified ERP modules that connect inventory, procurement, and finance into a single source of truth.',
    deliverables: ['Inventory management', 'Procurement workflow', 'Order tracking', 'Finance reporting'],
    techApproach: ['React', 'Node.js', 'PostgreSQL', 'Role-based access control'],
    exampleUseCases: ['Manufacturing ERP', 'Retail stock management', 'Supply chain tracking'],
    deliveryProcess: ['Process audit', 'Module design', 'Data migration', 'Go-live'],
    faqs: [{ question: 'Will it handle our existing data?', answer: 'We build migration scripts to import your existing Excel or SQL data safely.' }],
    impact: [
      { label: 'Stock Accuracy', value: 98, display: '98%' },
      { label: 'Order Processing Time', value: 50, display: '50% Faster' },
      { label: 'Inventory Costs', value: 20, display: '20% Reduced' }
    ],
    phases: [
      { week: 'Week 1-2', title: 'Process Audit', desc: 'We map your procurement and inventory workflows.' },
      { week: 'Week 3-5', title: 'Module Development', desc: 'We build the core inventory and order modules.' },
      { week: 'Week 6', title: 'Data Migration', desc: 'We migrate legacy data into the new system.' },
      { week: 'Week 7', title: 'Go-Live', desc: 'We run parallel testing and go live.' }
    ],
    latestModels: ['Node.js 22', 'PostgreSQL 16', 'Prisma ORM', 'React 18'],
    prerequisites: ['Current inventory and procurement workflow', 'Export of historical stock data', 'List of departments and approvers', 'Sample invoices and POs']
  },
  {
    slug: 'hrms-workforce',
    businessProblem: 'Leave requests happen over WhatsApp. Payroll requires manual Excel calculation.',
    ourSolution: 'A custom HRMS portal with self-service leave, attendance tracking, and payroll integration.',
    deliverables: ['Employee portal', 'Leave & attendance', 'Payroll export', 'Approval workflows'],
    techApproach: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth'],
    exampleUseCases: ['Company HR portal', 'Remote team attendance', 'Recruitment tracking'],
    deliveryProcess: ['HR policy review', 'Portal design', 'Integration', 'Rollout'],
    faqs: [{ question: 'Does it integrate with biometrics?', answer: 'Yes, if your device exposes an API, we integrate it.' }],
    impact: [
      { label: 'HR Admin Time Saved', value: 70, display: '70%' },
      { label: 'Leave Processing', value: 90, display: '90% Faster' },
      { label: 'Employee Satisfaction', value: 40, display: '40% Higher' }
    ],
    phases: [
      { week: 'Week 1', title: 'Policy Review', desc: 'We document your leave and attendance policies.' },
      { week: 'Week 2-3', title: 'Portal Build', desc: 'We build the employee self-service dashboard.' },
      { week: 'Week 4', title: 'Approval Workflows', desc: 'We set up automated manager approvals.' },
      { week: 'Week 5', title: 'Rollout', desc: 'We onboard employees and set up payroll exports.' }
    ],
    latestModels: ['React 18', 'JWT Auth', 'PostgreSQL 16', 'Node.js 22'],
    prerequisites: ['Company HR policy document', 'Current employee list (Excel)', 'Details of payroll software (for integration)', 'Leave and attendance rules']
  },
  {
    slug: 'fintech-apps',
    businessProblem: 'Internal finance reporting is manual and error-prone. Reconciling payments takes days.',
    ourSolution: 'Secure internal fintech dashboards for transaction reconciliation and reporting. (We are not a regulated financial institution.)',
    deliverables: ['Financial dashboard', 'Reconciliation engine', 'Payment integration', 'Audit logs'],
    techApproach: ['React', 'Node.js', 'PostgreSQL', 'Stripe/Razorpay APIs'],
    exampleUseCases: ['Revenue dashboard', 'Payment reconciliation', 'Expense tracking'],
    deliveryProcess: ['Compliance audit', 'Architecture', 'Integration', 'Deployment'],
    faqs: [{ question: 'Do you handle compliance?', answer: 'We build the software; compliance audits must be done by your legal team.' }],
    impact: [
      { label: 'Reconciliation Time', value: 80, display: '80% Faster' },
      { label: 'Reporting Accuracy', value: 99, display: '99%' },
      { label: 'Audit Readiness', value: 100, display: '100%' }
    ],
    phases: [
      { week: 'Week 1-2', title: 'Compliance Review', desc: 'We ensure the architecture meets security standards.' },
      { week: 'Week 3-4', title: 'Integration', desc: 'We connect to payment gateways and bank APIs.' },
      { week: 'Week 5', title: 'Reconciliation Engine', desc: 'We build automated matching rules.' },
      { week: 'Week 6', title: 'Audit Trail', desc: 'We implement immutable logging for all transactions.' }
    ],
    latestModels: ['Stripe API', 'Razorpay API', 'PostgreSQL 16', 'Node.js 22'],
    prerequisites: ['API access to payment gateway (Stripe/Razorpay)', 'List of compliance requirements', 'Sample of current financial reports', 'Access to bank/payment webhooks']
  },
  {
    slug: 'enterprise-ai',
    businessProblem: 'Employees waste hours searching through PDFs, wikis, and old emails to find simple answers.',
    ourSolution: 'We integrate LLMs with your internal documents using RAG so employees can just ask questions.',
    deliverables: ['Internal chatbot', 'Document ingestion', 'Vector database', 'Access controls'],
    techApproach: ['LangChain', 'OpenAI / Llama', 'Vector DB', 'React'],
    exampleUseCases: ['HR policy assistant', 'Technical documentation search', 'Contract review'],
    deliveryProcess: ['Data audit', 'Pipeline build', 'Evaluation', 'Deployment'],
    faqs: [{ question: 'Is our data safe?', answer: 'Yes, we use your own API keys or self-hosted models. We do not train on your data.' }],
    impact: [
      { label: 'Information Retrieval', value: 85, display: '85% Faster' },
      { label: 'Onboarding Time', value: 50, display: '50% Reduced' },
      { label: 'Employee Productivity', value: 40, display: '40% Increase' }
    ],
    phases: [
      { week: 'Week 1', title: 'Data Sourcing', desc: 'We identify and connect all internal knowledge bases.' },
      { week: 'Week 2', title: 'Vectorization', desc: 'We convert documents into searchable embeddings.' },
      { week: 'Week 3', title: 'Chat UI', desc: 'We build an internal chat interface with access controls.' },
      { week: 'Week 4', title: 'Evaluation', desc: 'We test answers against real employee questions.' }
    ],
    latestModels: ['GPT-4o', 'Llama 3', 'text-embedding-3-small', 'LangChain 0.2'],
    prerequisites: ['Access to internal knowledge bases (Confluence/Notion)', 'List of sensitive documents to exclude', 'User access roles', 'API keys for LLM and Embedding models']
  },
  {
    slug: 'business-intelligence',
    businessProblem: 'Reporting takes days of manual Excel work. By the time the report is ready, the data is outdated.',
    ourSolution: 'Automated data pipelines feeding real-time dashboards for executives.',
    deliverables: ['ETL pipelines', 'Executive dashboard', 'Automated reporting', 'Data warehouse'],
    techApproach: ['Python', 'SQL', 'Metabase / PowerBI', 'dbt'],
    exampleUseCases: ['Sales KPI dashboard', 'Marketing analytics', 'Operational reporting'],
    deliveryProcess: ['Metric definition', 'Pipeline build', 'Dashboard design', 'Handover'],
    faqs: [{ question: 'Can we use our existing data?', answer: 'Yes, we connect to your existing databases and tools.' }],
    impact: [
      { label: 'Report Delivery', value: 90, display: '90% Faster' },
      { label: 'Data Consistency', value: 100, display: '100%' },
      { label: 'Executive Visibility', value: 85, display: '85% Better' }
    ],
    phases: [
      { week: 'Week 1', title: 'Metric Definition', desc: 'We align with executives on what to measure.' },
      { week: 'Week 2-3', title: 'Pipeline Build', desc: 'We automate data extraction and transformation.' },
      { week: 'Week 4', title: 'Dashboard Design', desc: 'We build the executive dashboard.' },
      { week: 'Week 5', title: 'Self-Service', desc: 'We train teams to pull their own reports.' }
    ],
    latestModels: ['dbt 1.7', 'Metabase 0.50', 'Snowflake', 'PowerBI'],
    prerequisites: ['Data source connection details (DB/API)', 'Current reporting cadence', 'Access to any existing dashboards', 'Business stakeholder for KPI definition']
  },
  {
    slug: 'api-integration',
    businessProblem: 'Your CRM, ERP, and website don\'t talk to each other. Data is entered multiple times.',
    ourSolution: 'We build custom API integrations and webhooks to sync data between all your systems in real time.',
    deliverables: ['Custom REST APIs', 'Webhook processors', 'Data sync pipelines', 'Error monitoring'],
    techApproach: ['Node.js', 'Express', 'Zod', 'PostgreSQL'],
    exampleUseCases: ['CRM to ERP sync', 'Website order to inventory', 'Payment webhooks'],
    deliveryProcess: ['API audit', 'Integration design', 'Implementation', 'Testing'],
    faqs: [{ question: 'What if the third-party API is bad?', answer: 'We build fault-tolerant queues (like Redis) to handle retries.' }],
    impact: [
      { label: 'Manual Data Entry', value: 95, display: '95% Reduced' },
      { label: 'Sync Latency', value: 99, display: '< 1 Second' },
      { label: 'Data Errors', value: 90, display: '90% Fewer' }
    ],
    phases: [
      { week: 'Week 1', title: 'API Audit', desc: 'We review the documentation of all systems involved.' },
      { week: 'Week 2', title: 'Integration Design', desc: 'We design the data flow and error handling.' },
      { week: 'Week 3-4', title: 'Development', desc: 'We build the sync logic and webhook processors.' },
      { week: 'Week 5', title: 'Stress Testing', desc: 'We test with high volume to ensure reliability.' }
    ],
    latestModels: ['Node.js 22', 'Zod 3.23', 'Redis Queue', 'PostgreSQL 16'],
    prerequisites: ['API documentation of both systems', 'Sandbox/developer access for testing', 'List of fields to be synced', 'Details of expected data volume']
  }
];

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((d) => d.slug === slug);
}