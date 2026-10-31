import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { PageHeader } from '../../components/ui/PageHeader';

export default function TermsOfService() {
  return (
    <>
      <PageHeader eyebrow="LEGAL" title="Terms of Service" description="Last updated: October 30, 2026" />
      <Section className="bg-jet">
        <Container size="narrow">
          <div className="prose prose-invert max-w-none text-offwhite/70 space-y-8">
            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">1. Introduction</h2>
              <p className="text-base leading-relaxed mb-4">Welcome to FINTECH IT SOLUTIONS. These Terms of Service ("Terms") govern your access to and use of the FINTECH IT SOLUTIONS website (<a href="https://www.fintechitsolutions.in" className="text-pink hover:underline">www.fintechitsolutions.in</a>) and any related digital services, communications, and content.</p>
              <p className="text-base leading-relaxed mb-4">By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">2. Company Information</h2>
              <p className="text-base leading-relaxed mb-4">FINTECH IT SOLUTIONS is a technology services company founded in 2024 by Sumit Kumar. Our services include Artificial Intelligence & Machine Learning, Generative AI, Full-Stack Development, Data Analytics, Software Engineering, Cloud & DevOps, CRM, ERP, HRMS, FinTech Applications, Enterprise AI, Business Intelligence, and API & System Integration.</p>
              <p className="text-base leading-relaxed mb-4">Official Email: <a href="mailto:hello@fintechitsolutions.in" className="text-pink hover:underline">hello@fintechitsolutions.in</a></p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">3. Website Eligibility and Acceptable Use</h2>
              <p className="text-base leading-relaxed mb-4">Our website is intended for business and professional audiences. By using this website, you confirm that you are legally capable of entering into binding agreements in your jurisdiction.</p>
              <p className="text-base leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use our website for any unlawful purpose or in violation of any applicable laws.</li>
                <li>Attempt to gain unauthorized access to our systems, servers, or networks.</li>
                <li>Introduce viruses, malware, or any other harmful or disruptive code.</li>
                <li>Interfere with or disrupt the operation of our website or services.</li>
                <li>Collect or harvest information about other users without consent.</li>
                <li>Use automated systems (bots, scrapers) to access our website without permission.</li>
                <li>Impersonate any person or entity or misrepresent your affiliation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">4. Website Information</h2>
              <p className="text-base leading-relaxed mb-4">The content on our website is provided for general informational purposes. While we strive to keep information accurate and up to date, we make no warranties or representations regarding the accuracy, completeness, reliability, or suitability of any information on the website.</p>
              <p className="text-base leading-relaxed mb-4">Any concepts, prototypes, demos, or case studies shown on this website are illustrative and may not represent actual client engagements. Where real client work is referenced, appropriate permissions are obtained.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">5. Service Inquiries and Proposals</h2>
              <p className="text-base leading-relaxed mb-4">Submitting a contact form, sending an email, or otherwise communicating with FINTECH IT SOLUTIONS does not create a binding contract for services.</p>
              <p className="text-base leading-relaxed mb-4">Any pricing estimates, timelines, or proposal information shared through the website or email are preliminary and non-binding. All services are governed by a separate signed agreement, statement of work (SOW), or written contract.</p>
              <p className="text-base leading-relaxed mb-4">We reserve the right to decline any inquiry or engagement at our discretion.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">6. Client Responsibilities</h2>
              <p className="text-base leading-relaxed mb-4">Where a client engages FINTECH IT SOLUTIONS for services, the client agrees to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide accurate and complete information necessary for project execution.</li>
                <li>Ensure timely feedback and approvals as required.</li>
                <li>Comply with applicable laws in their business operations.</li>
                <li>Safeguard credentials and access provided by FINTECH IT SOLUTIONS.</li>
                <li>Promptly notify us of any issues or concerns.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">7. Third-Party Services</h2>
              <p className="text-base leading-relaxed mb-4">Our website may integrate with or link to third-party services, tools, or platforms. We do not control these third-party services and are not responsible for their content, privacy practices, or terms.</p>
              <p className="text-base leading-relaxed mb-4">Your use of third-party services is governed by their respective terms and policies. We recommend reviewing them before use.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">8. Intellectual Property</h2>
              <p className="text-base leading-relaxed mb-4">All content on this website, including text, graphics, logos, icons, images, videos, code, and design, is the property of FINTECH IT SOLUTIONS or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws.</p>
              <p className="text-base leading-relaxed mb-4">You may not copy, reproduce, distribute, modify, display, or create derivative works from any content without express written permission from FINTECH IT SOLUTIONS.</p>
              <p className="text-base leading-relaxed mb-4">For more details, please see our <a href="/license" className="text-pink hover:underline">Licensing & Intellectual Property page</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">9. Confidentiality</h2>
              <p className="text-base leading-relaxed mb-4">Any confidential information shared between you and FINTECH IT SOLUTIONS during the course of a business relationship should be handled responsibly and through appropriate channels. Information submitted via general website forms is not automatically treated as confidential.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">10. Website Availability</h2>
              <p className="text-base leading-relaxed mb-4">We aim to keep our website available at all times. However, we do not guarantee uninterrupted access. The website may be temporarily unavailable due to maintenance, updates, technical issues, or circumstances beyond our control.</p>
              <p className="text-base leading-relaxed mb-4">We reserve the right to modify, suspend, or discontinue any part of the website at any time without prior notice.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">11. Warranty Disclaimer</h2>
              <p className="text-base leading-relaxed mb-4">The website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
              <p className="text-base leading-relaxed mb-4">FINTECH IT SOLUTIONS does not warrant that the website will be error-free, secure, uninterrupted, or free of viruses or other harmful components.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">12. Limitation of Liability</h2>
              <p className="text-base leading-relaxed mb-4">To the maximum extent permitted by applicable law, FINTECH IT SOLUTIONS, its founder, employees, or partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or services.</p>
              <p className="text-base leading-relaxed mb-4">This includes, without limitation, loss of profits, data, goodwill, or business opportunities, even if we have been advised of the possibility of such damages.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">13. Indemnity</h2>
              <p className="text-base leading-relaxed mb-4">You agree to indemnify, defend, and hold harmless FINTECH IT SOLUTIONS from any claims, damages, losses, liabilities, costs, or expenses (including reasonable legal fees) arising from your violation of these Terms or your misuse of the website.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">14. Suspension and Termination</h2>
              <p className="text-base leading-relaxed mb-4">We reserve the right to suspend or terminate your access to the website at any time, without notice, if we believe you have violated these Terms or engaged in activities that may harm FINTECH IT SOLUTIONS, its users, or third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">15. Governing Law and Jurisdiction</h2>
              <p className="text-base leading-relaxed mb-4">These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in India.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">16. Changes to These Terms</h2>
              <p className="text-base leading-relaxed mb-4">We may update these Terms from time to time to reflect changes in our services, technology, or legal requirements. The revised Terms will be posted on this page with an updated effective date.</p>
              <p className="text-base leading-relaxed mb-4">Your continued use of the website after changes are posted constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-offwhite mb-3">17. Contact Information</h2>
              <p className="text-base leading-relaxed mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
              <ul className="list-none pl-0 space-y-1 mb-4">
                <li><strong className="text-offwhite">Organization:</strong> FINTECH IT SOLUTIONS</li>
                <li><strong className="text-offwhite">Website:</strong> <a href="https://www.fintechitsolutions.in" className="text-pink hover:underline">www.fintechitsolutions.in</a></li>
                <li><strong className="text-offwhite">Official Email:</strong> <a href="mailto:hello@fintechitsolutions.in" className="text-pink hover:underline">hello@fintechitsolutions.in</a></li>
                <li><strong className="text-offwhite">Country:</strong> India</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}