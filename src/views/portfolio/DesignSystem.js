import React from "react";
// import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";
import timeline from "assets/portfolio/timeline.png";

const CaseStudy = () => {
    return (
        <>
            <PortfolioHeader
                headerImage="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                // routes={PortfolioRoutes}
                imageAlt="placeholder"
                headerTitle="Fenrir"
                headerSubtitle="Design by System, Not by Accident"
                headerDescription="Fenrir is a full-serve design system, providing a comprehensive set of Figma components for UX designers and a complementary set of React components for developers."
                headerDisciplines={[
                    "Design Systems",
                    "Information Architecture",
                    "Governance & Contribution",
                    "System Thinking"
                ]}
            />
            <div className="feature feature-width">
                <div className="content flex column">
                    <div className="article">
                        <h2>Overview</h2>
                        <p>At Arctic Wolf, I led the creation and evolution of Fenrir, an internal design system built to support UX and development teams. What began as a foundational set of components became a fully governed, scalable system used to drive consistency, and improve designer/developer collaboration. As the UX Manager and Product Owner of the design system, I oversaw its growth across two major releases; each focused on deeper alignment, higher adoption, and long-term sustainability.</p>

                        <div className="quote">
                            <p><i>Fenrir, an infamous and powerful wolf from Norse mythology, was said to be carefully controlled to prevent chaos being wrought on the world. Our design system is similarly intended to be powerful and robust, while preventing disorder.</i></p>
                        </div>

                        <h2>The Problem</h2>

                        <p>Before Fenrir, the user experience across Arctic Wolf products varied depending on which designer, product manager, or team was involved. There was no unified visual language or shared understanding of how our products should look, feel, or behave. Some designers had created local consistency within their own product areas, but there was no scalable strategy or system connecting them. The first version of the design system was assembled reactively, and we neglected to consider long-term growth, standards, or maintainability. As the product suite expanded, the lack of cohesion became increasingly unsustainable.</p>

                        <h3>Before Fenrir:</h3>

                        <ul>
                            <li>UI and UX inconsistencies</li>
                            <li>Siloed design</li>
                            <li>Lack of governance</li>
                            <li>Difficulty onboarding new designers & developers</li>
                            <li>Duplicate efforts</li>
                            <li>No unified product brand presence</li>
                        </ul>

                        <h2>My Role</h2>
                        <p>I acted as the product owner of the Fenrir design system, responsible for both its strategic vision and hands-on execution. I worked closely with the developers building the React implementation, advocating for accessibility and scalability. I participated in the foundational audit that determined which system we would build from, pushing for criteria like clear usability standards, robust documentation, strong community support, and a Figma library to start from.</p>

                        <p>I authored all accompanying UX documentation, including design patterns, usage guidance, responsive behavior rules, and file templates to support scalable design across teams. I regularly attended meetings to align across teams, collect feedback, and advocate for adoption. I also participated in an internal Hackathon, where I contributed directly to improving our Storybook documentation.</p>

                        <p>Throughout the second version of Fenrir, I worked closely with designers to ensure their respective product experiences were accounted for. I focused not just on current tooling, but with evolving features in mind. With their help, I was able to document component requirements, use cases, and edge scenarios, making sure that the system could scale with the evolution of our products.</p>

                        <p>In parallel, I considered how the design system would support future mergers and acquisitions. I explored how incoming products and services would be evaluated, integrated, and aligned with our design standards, ensuring that Fenrir could provide a clear path to cohesion as the company continued to grow.</p>

                        <p>PLACEHOLDER FOR INFORMATION ARCHITECTURE OBSCURED PREVIEW</p>

                        <p>While Fenrir was evolving, I was also building a unified information architecture for Arctic Wolf's product suite. That parallel initiative allowed me to take insights from product teams across the organization and develop navigation rules, iconography guidelines, and terminology standards. This work directly informed the design system, creating alignment not just at the component level, but across the entire product experience. By bridging the design system and information architecture, I was able to bring disparate product experiences closer together under a shared design and UX language.</p>

                        <h2>Approach & Process</h2>
                        <p>The evolution of the design system followed a deliberate, user-informed process grounded in collaboration, clarity, and scalability. I remained hands-on, partnering closely with engineering, supporting the UX team through live coaching, async tutorials, and ongoing documentation, as well as coaching individual developers and their teams on leveraging the design system.</p>

                        <h3>Phase 1: Laying the Foundation (v1)</h3>

                        <p>The need for a design system at Arctic Wolf became apparent as the UX team began noticing we were solving the same problems in different ways. During design reviews and team syncs, we realized that even for common elements like forms, buttons, or modals, each designer had their own solution. As the company scaled, so did the inconsistency, and it became clear we needed shared patterns.</p>

                        <p>The design system was created as an effort to address this alignment need. UX Designers started creating reusable components in Figma, while developers built corresponding versions in code, often referencing various component libraries to replicate the functionality that UX envisioned.</p>

                        <p>However, without shared foundations or governance, the Figma and React components didn't always match perfectly. Additionally, because we were building everything from scratch, including spacing, states, and tokens, it required extra time and collaboration to get alignment on each element.</p>

                    </div>

                    <div className="full-width">
                        <img src={timeline} alt="Fenrir timeline of progress" />
                    </div>

                    <div className="article">
                        <p>Just by observing the most common areas of overlap and duplicated effort, I was able to identify the most valuable elements we would need to start with: form inputs, buttons, and typography. Once we had enough React components in place for developers to begin using them, a domain was created for the documentation, and I gave the system a name and a logo, and Fenrir became the first unofficial, official design system at Arctic Wolf.</p>

                        <p>PLACEHOLDER FOR FENRIR V1 DOCUMENTATION</p>

                        <h3>Phase 2: Cracks in the Foundation (v1)</h3>

                        <p>As the first version of Fenrir was adopted across teams, the cracks began to show. While we did have consistency in design and development, it quickly became clear that v1 was not scalable. Every component required manual effort to design, build, and maintain. As more teams began using the system in live products, we discovered edge cases, bugs, and performance issues that required constant fixes. There was little time left to make progress on new components or improvements.</p>

                        <p className="ah-ha pain">Contribution Model introduced more problems than solved them</p>
                        <p className="ah-ha pain">Manual, unscalable component creation</p>
                        <p className="ah-ha pain">Frequent redesigns</p>

                        <p>UX feedback started to surface that even though the visual alignment was helpful, it lacked the flexibility to meet the needs of complex product requirements. Designers were forced to modify components to match product direction, which led to additional inconsistencies. At this stage, documentation was still light, but did include usage guidance, contextual rules, and a Do/Don't table to help teams understand how and when to use each component.</p>

                        <p className="ah-ha pain">Component overrides reintroduced inconsistency</p>
                        <p className="ah-ha pain">Limited flexibility for complex needs</p>
                        <p className="ah-ha pain">Documentation was helpful but sparse</p>

                        <p>PLACEHOLDER FOR DO/DON'T SCREENSHOT</p>

                        <p>These challenges made it clear that Fenrir needed a second version, one built not just for reuse, but for true scalability. It had to accommodate flexible use cases, support sustainable development, and include the voices of the teams who relied on it every day.</p>

                        <h3>Phase 3: Patching the Cracks and Maturing the System (v2)</h3>

                        <p>We knew for the second version of Fenrir, that we wanted an existing component library as the foundation. Knowing we would not have a dedicated team to maintain Fenrir long-term, and acknowledging the pitfalls of a Contribution Model, we needed a starting point that was accessible out of the box, documented thoroughly, and actively maintained by a trusted external organization. The goal was to reduce the ongoing development burden while improving usability, accessibility, and alignment. We would incorporate our existing brand guidelines from the Marketing team, including colors and typography, which gave us a reliable visual framework to build from.</p>

                        <p>To shape the direction of Fenrir v2, I conducted interviews with UX designers, asking what was working well, and what opportunities for improvement existed. I also spoke with developers to gather their use cases, and frustrations with Fenrir. This feedback directly influenced design decisions, component prioritization, and areas for future scalability.</p>

                        <p>PLACEHOLDER FOR SCREENSHOT OF FENRIR ROADMAP TRACKER</p>

                        <p>As the system evolved, I introduced dedicated design drop-in sessions for the UX team to increase feedback and identify gaps early. Senior developers became more involved, taking ownership of foundational architectural layers in our repositories to ensure the system was stable, testable, and scalable. Their leadership helped formalize code-side governance and brought consistency to how components were built and maintained.</p>

                        <p>PLACEHOLDER FOR DESIGNER QUOTE ABOUT DESIGN DROP-INS</p>

                        <p>At the same time, I expanded my expertise in Figma, learning how to build more intuitive, modular, and scalable components. My goal was to reduce friction for designers by creating a component library that was not only powerful but also easy to use. I focused on interaction states, layout logic, and smart defaults so designers could move quickly without having to tinker endlessly in the tool.</p>

                        <p>PLACEHOLDER FOR FIGMA COMPONENT EXAMPLE</p>

                        <p>Documentation also matured during this phase. We expanded guidance to include not only component specifications but also broader design patterns and real-world examples from various product teams. This helped reinforce consistency and gave designers context for when and how to apply system elements effectively.</p>

                        <p>PLACEHOLDER FOR DESIGN TEMPLATE</p>

                        <p>Governance became a formal part of the process through the introduction of a Fenrir UX Design Contribution workflow. Using Figma branching and review tools, designers now submit proposals for new patterns or updates alongside clear rationale, real product use cases, and cross-functional review. Contributions are evaluated collaboratively across design and engineering to ensure system-wide fit and feasibility.</p>

                        <h3>Phase 4: Supporting Adoption</h3>

                        <p>Adoption of Fenrir grew steadily as designers and developers saw its value first-hand. One of the key drivers was the breadth of coverage it offered. Designers found that for nearly any scenario they encountered, the system already provided a component or pattern that could be adapted to fit. Desginers were able to refocus their time on strategic initiatives and crafting creative ways to solve problems instead of designing from scratch for every feature. Fenrir made it easier to solve problems without reinventing the wheel and helped reinforce trust in the system's depth and reliability.</p>

                        <p>Another major factor in adoption was the formal contribution process introduced for UX designers. By creating a structured way for designers to propose new components or patterns, the process helped foster a sense of ownership and pride. Designers gained first-hand experience with how components need to scale, remain accessible, and support different product needs. This deeper understanding led to more thoughtful contributions and increased investment in the system's ongoing success.</p>

                        <p>To support learning and self-sufficiency, I created a series of short, async Figma tutorials by recording my screen and narrating quick walk-throughs based on team requests. These four-minute videos cover practical scenarios, such as how to use our Page Templates, how to configure and adapt DataGrids, and how to work effectively with layout options in Figma. This content has helped make the system more approachable and removed blockers without requiring scheduled training.</p>

                        <p>PLACEHOLDER FOR ONE OF THE FIGMA TUTORIAL VIDEOS</p>

                        <p>Finally, leadership support played a significant role in adoption. Backing Fenrir as the expected standard for all product design across the company reinforced governance and elevated the system from a helpful resource to a core part of the product design process.</p>

                        <h2>Challenges & Lessons</h2>
                        <p>What was hard? What did you learn?</p>
                        <p className="ah-ha lesson">I realized that for a design system to be valued and adopted, it has to be treated like any other product in the company. Early on, without a distinct identity, Fenrir was seen as a set of files rather than a critical, shared resource. To shift perception, I gave it a clear brand: a name, a logo, and a presence in company communications. This branding created visibility, helped position the design system as a trusted product, and reinforced its role as an essential tool for building consistent, scalable user experiences.</p>
                        <p className="ah-ha lesson">Many developer questions, bug reports, and requests for missing components were being raised in different places, often going unanswered or getting lost. To address this, we funneled discussions into a single place, where developers could ask questions, surface gaps, share use cases, and report issues. This single communication channel made it easier to track feedback, identify patterns, and respond quickly, while reinforcing Fenrir as a living system open to constructive critique. This became a collaborative forum that not only resolved immediate needs but also guided the system's ongoing growth and evolution.</p>
                        <p className="ah-ha lesson">While designers were using the system, their focus often remained on solving problems only within their own product areas. This limited perspective slowed adoption and sometimes led to patterns that could not be reused elsewhere. To address this, we introduced a formal contribution model for new patterns and the expansion of existing ones. By requiring designers to document use cases, consider scalability, and think about how a component might be consumed by other teams, we strengthened both the stability of the system and the depth of understanding among contributors. This process not only improved pattern quality but also increased a sense of shared ownership and accountability across the design team.</p>
                        <p className="ah-ha lesson">We learned the importance of detailed design pattern documentation when wee saw that, even with the correct components available, designers and developers often implemented them differently. Without clear guidance, there were inconsistencies in how components behaved, responded, or were adapted to specific use cases, as well as variations in copywriting and handling of loading or error states. To address this, we took full ownership of documenting not only the components themselves, but also their behaviors, interactions, example use cases, state variations, and copywriting constraints. This depth of documentation reduced misinterpretation, improved adoption speed, and ensured patterns were implemented consistently across all teams.</p>
                        <p className="ah-ha lesson">like any set of standards, it needs governance and accountability to be adopted properly</p>
                        <p className="ah-ha lesson">other departments like having a say in how things look and feel, and this can create challenging scenarios where the design system doens't align with somebody's opinion of how a problem should be solved; consistency can frustrate creative people</p>
                        <p className="ah-ha lesson">Developer alignment takes time; different interpretations of components</p>
                        <p className="ah-ha lesson">Designers initially resisted governance; finding components was hard, identifying patterns was hard, creating centralized patterns was hard, duplicate solutions, etc.</p>
                        <p className="ah-ha lesson">Learned the value of meeting people where they are (e.g. coaching via live design reviews)</p>

                        <h2>Impact & Outcomes</h2>
                        <p>What changed as a result of your work? Use metrics if possible.</p>
                        <ul>
                            <li>Increased adoption across product teams (e.g. % of teams using Fenrir v2)</li>
                            <li>Reduce design and development time</li>
                            <li>Fewer inconsistencies across interfaces</li>
                            <li>Greater cross-functional alignment and trust in UX</li>
                        </ul>

                        <h2>What's Next</h2>
                        <p>Show this as an ongoing, living system</p>
                        <ul>
                            <li>M&A onboarding support</li>
                            <li>Continuing to evolve componment set based on product needs</li>
                            <li>Improving design pattern documentation</li>
                            <li>Exploring a dedicated design + engineering team for ongoing support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudy;
