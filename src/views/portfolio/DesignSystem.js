import React from "react";
// import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";

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

                        <p>IMAGE PLACEHOLDER FOR FENRIR LOGO AND COLOR PALETTE</p>

                        <p>Key features of Fenrir include:</p>
                        <ul>
                            <li>Figma + React</li>
                            <li>Scalability</li>
                            <li>Efficiency</li>
                            <li>Governance</li>
                        </ul>

                        <h2>The Problem</h2>

                        <p>Before Fenrir, the user experience across Arctic Wolf products varied depending on which designer, product manager, or team was involved. There was no unified visual language or shared understanding of how our products should look, feel, or behave. Some designers had created local consistency within their own product areas, but there was no scalable strategy or system connecting them. The first version of the design system was assembled reactively, and we neglected to consider long-term growth, standards, or maintainability. As the product suite expanded, the lack of cohesion became increasingly unsustainable.</p>

                        <p>PLACEHOLDER FOR QUOTES OR FEEDBACK</p>

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

                        <p>I customized the Figma component library, including responsive behaviors, and interaction patterns. I authored all accompanying UX documentation, including design patterns, usage guidance, responsive behavior rules, and file templates to support scalable design across teams. I regularly attended meetings to align across teams, collect feedback, and advocate for adoption. I also participated in an internal Hackathon, where I contributed directly to improving our Storybook documentation.</p>

                        <p>Throughout the second version of Fenrir, I worked closely with designers to ensure their respective product experiences were accounted for. I focused not just on current tooling, but with evolving features in mind. With their help, I was able to document component requirements, use cases, and edge scenarios, making sure that the system could scale with the evolution of our products.</p>

                        <p>In parallel, I worked to consider how the design system would support future mergers and acquisitions. Myself and the developers explored how incoming products and services would be evaluated, integrated, and aligned with our design standards, ensuring that Fenrir could provide a clear path to cohesion as the company continued to grow.</p>

                        <p>While Fenrir was evolving, I was also leading the design and implementation of a unified information architecture for Arctic Wolf's product suite. That parallel initiative allowed me to take insights from product teams across the organization and develop navigation rules, iconography guidelines, and terminology standards. This work directly informed the design system, creating alignment not just at the component level, but across the entire product experience. By bridging design systems and information architecture, I was able to bring disparate product areas closer together under a shared design and UX language.</p>

                        <h2>Approach & Process</h2>
                        <p>The evolution of Fenrir followed a deliberate, user-informed process grounded in collaboration, clarity, and scalability. I began by auditing existing libraries and gathering feedback from designers and  developers to understand opportunities for improvement. From there, I led the vision for a structured rebuild that prioritized accessibility, flexibility, and long-term maintainability. With just one developer actively supporting implementation, we focused on foundational UI patterns that could scale efficiently and reliably. The system matured into a governed, contribution-friendly framework. Throughout the process, I remained hands-on, partnering closely with engineering, and supporting the UX team through live coaching, async tutorials, and ongoing documentation.</p>

                        <h3>Phase 1: Laying the Foundation (v1)</h3>

                        <p>The need for a design system at Arctic Wolf became apparent as the UX team began noticing we were solving the same problems in different ways. During design reviews and team syncs, we realized that even for common elements like forms, buttons, or modals, each designer had their own solution. As the company scaled, so did the inconsistency, and it became clear we needed shared patterns. The first version of Fenrir grew from this alignment effort. Designers started creating reusable components in Figma, while developers built corresponding versions in code, often referencing external component libraries to replicate the functionality we envisioned. Without shared foundations or governance, the Figma and React components didn't always match perfectly. Because we were building everything from scratch, including components, spacing, states, and tokens, it required extra time and collaboration to get alignment on each element.</p>

                        <p>To make the most of the time we had, we started with the basics: form inputs, buttons, and typography. Once we had enough components in place for developers to begin using them, we created a domain to house basic documentation, gave the system a name and logo, and Fenrir became our unofficial, official design system. At that stage, it still lacked formal documentation, accessibility standards, and long-term scalability.</p>

                        <h4>Transitional Lessons</h4>
                        <p>As the first version of Fenrir was adopted across teams, the cracks began to show. While the system brought basic consistency to design and development, it quickly became clear that v1 was not scalable. Every component required manual effort to design, build, and maintain. As more teams began using the system in live products, developers discovered edge cases, bugs, and performance issues that required constant fixes. There was little time left to make progress on new components or improvements. At the same time, I was continuously updating Figma components and documentation to address feedback from both designers and developers, often needing to adjust for unexpected use cases or limitations in content flexibility.</p>

                        <p>On the development side, the lack of a mature contribution and governance process led to inconsistent implementation. An early attempt at a contribution model was rolled out to invite developers into the system's evolution, but without clear standards or accountability, components were built in different ways by different contributors. This inconsistency negatively impacted the user experience, and ultimately, the UX team remained responsible for addressing the fallout. Although the designs clearly reflected how components should function, the implementation often diverged in subtle but important ways.</p>

                        <p>From the UX side, feedback started to surface that even though the visual alignement was helpful, it lacked the flexibility to meet the needs of complex product requirements. Designers were forced to modify components to match product direction, which led to additional inconsistencies. Documentation was still light, though I worked to create a consistent format that included usage guidance, contextual rules, and a Do/Don't table to help teams understand how and when to use each component.</p>

                        <p>These challenges made it clear that Fenrir needed a second version, one built not just for reuse, but for true scalability. It had to accommodate flexible use cases, support sustainable development, and include the voices of the teams who relied on it every day.</p>

                        <h3>Phase 2: Maturing the System (v2)</h3>
                        <p>The second version of Fenrir began with a comprehensive audit of component libraries we could use as a more stable and scalable foundation. We knew we would not have a dedicated team to maintain Fenrir long term, so we needed a starting point that was accessible out of the box, well documented, and actively maintained by a trusted external organization. The goal was to reduce the ongoing development burden while improving usability, accessibility, and alignment. We also incorporated our existing brand guidelines from the Marketing team, including colors and typography, which gave us a reliable visual framework to build from.</p>

                        <p>To shape the direction of Fenrir v2, I conducted one-on-one interviews with every UX designer on the team. I asked what they felt the system was missing, what was working well, and what opportunities existed to improve. I also spoke with several developers across product teams to gather their perspectives, use cases, and frustrations with the original implementation. Their feedback was documented and used to directly influence design decisions, component prioritization, and areas for future scalability.</p>

                        <p>As the system evolved, I introduced dedicated design drop-in sessions for the UX team to increase feedback and surface gaps early. Senior developers became more involved, taking ownership of foundational architectural layers in our repositories to ensure the system was stable, testable, and scalable. Their leadership helped formalize code-side governance and brought consistency to how components were built and maintained.</p>

                        <p>At the same time, I expanded my expertise in Figma, learning how to build more intuitive, modular, and scalable components. My goal was to reduce friction for designers by creating a component library that was not only powerful but also easy to use. I focused on interaction states, layout logic, and smart defaults so designers could move quickly without having to tinker endlessly in the tool.</p>

                        <p>Documentation also matured during this phase. We expanded guidance to include not only component specifications but also broader design patterns and real-world examples from various product teams. This helped reinforce consistency and gave designers context for when and how to apply system elements effectively.</p>

                        <p>Governance became a formal part of the process through the introduction of a Fenrir UX Design Contribution workflow. Using Figma branching and review tools, designers now submit proposals for new patterns or updates alongside clear rationale, real product use cases, and cross-functional review. Contributions are evaluated collaboratively across design and engineering to ensure system-wide fit and feasibility.</p>

                        <h3>Bonus: Supporting Adoption</h3>
                        <p>Adoption of Fenrir grew steadily as the system began to prove its value. One of the key drivers on the UX side was the breadth of coverage it offered. Designers found that for nearly any scenario they encountered, the system already provided a component or pattern that could be adapted to fit. This made it easier to solve problems without reinventing the wheel and helped reinforce trust in the system's depth and reliability.</p>

                        <p>Another major factor in adoption was the formal contribution process introduced for UX designers. By creating a structured way for designers to propose new components or patterns, the process helped foster a sense of ownership and pride. Designers gained firsthand experience with how components need to scale, remain accessible, and support different product needs. This deeper understanding led to more thoughtful contributions and increased investment in the system's ongoing success.</p>

                        <p>To support learning and self-sufficiency, I created a series of short, async Figma tutorials by recording my screen and narrating quick walk-throughs based on team requests. These four-minute videos cover practical scenarios, such as how to use our Page Templates, how to configure and adapt DataGrids, and how to work effectively with layout options in Figma. This content has helped make the system more approachable and removed blockers without requiring scheduled training.</p>

                        <p>Finally, leadership support has played a significant role in adoption. Backing Fenrir as the expected standard for all product design across the company reinforced governance and elevated the system from a helpful resource to a core part of the product design process.</p>

                        <h2>Challenges & Lessons</h2>
                        <p>What was hard? What did you learn?</p>
                        <p className="ah-ha">the importance of design pattern documentation; not just the components themselves, but how they behave, interact with, respond, use case examples, loading states, error states, copywriting restrictions, etc.</p>
                        <p className="ah-ha">you need a brand for a design system; it has to be treated like any other Product at the company; with a name, a logo, and a dedicated supporting team</p>
                        <p className="ah-ha">like any set of standards, it needs governance and accountability to be adopted properly</p>
                        <p className="ah-ha">other departments like having a say in how things look and feel, and this can create challenging scenarios where the design system doens't align with somebody's opinion of how a problem should be solved; consistency can frustrate creative people</p>
                        <p className="ah-ha">Developer alignment takes time; different interpretations of components</p>
                        <p className="ah-ha">Designers initially resisted governance; finding components was hard, identifying patterns was hard, creating centralized patterns was hard, duplicate solutions, etc.</p>
                        <p className="ah-ha">Learned the value of meeting people where they are (e.g. coaching via live design reviews)</p>

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
