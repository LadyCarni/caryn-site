import React from "react";
// import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";
import timeline from "assets/portfolio/timeline.png";
import InformationArchitecture from "assets/portfolio/IA preview.png";
import Fenrirv1Docs from "assets/portfolio/Fenrir v1 docs.png";
import FenrirDoDont from "assets/portfolio/Fenrirdodont.png";
import FenrirStickers from "assets/portfolio/Fenrir Stickers.jpg";

const CaseStudy = () => {
    return (
        <>
            <PortfolioHeader
                headerImage={FenrirStickers}
                // routes={PortfolioRoutes}
                imageAlt="placeholder"
                headerTitle="Fenrir"
                headerSubtitle="Design by System, Not by Accident"
                headerDescription="Establishing a governed, evolving design system that unites designers and developers, streamlines product delivery, and ensures every user touchpoint is consistent and accessible."
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

                        <p>While Fenrir was evolving, I was also building a unified information architecture for Arctic Wolf's product suite. That parallel initiative allowed me to take insights from product teams across the organization and develop navigation rules, iconography guidelines, and terminology standards. This work directly informed the design system, creating alignment not just at the component level, but across the entire product experience. By bridging the design system and information architecture, I was able to bring disparate product experiences closer together under a shared design and UX language.</p>
                    </div>

                    <div className="full-width">
                        <img src={InformationArchitecture} alt="Information Architecture diagram" />
                        <span className="image-caption">Information Architecture (IA) diagram</span>
                    </div>

                    <div className="article">

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

                        <img src={Fenrirv1Docs} alt="Fenrir v1 docs" />
                        <span className="image-caption">Fenrir v1 docs</span>

                        <h3>Phase 2: Cracks in the Foundation (v1)</h3>

                        <p>As the first version of Fenrir was adopted across teams, the cracks began to show. While we did have consistency in design and development, it quickly became clear that v1 was not scalable. Every component required manual effort to design, build, and maintain. As more teams began using the system in live products, we discovered edge cases, bugs, and performance issues that required constant fixes. There was little time left to make progress on new components or improvements.</p>

                        <p className="ah-ha pain">Contribution Model introduced more problems than solved them</p>
                        <p className="ah-ha pain">Manual, unscalable component creation</p>
                        <p className="ah-ha pain">Frequent redesigns</p>

                        <p>UX feedback started to surface that even though the visual alignment was helpful, it lacked the flexibility to meet the needs of complex product requirements. Designers were forced to modify components to match product direction, which led to additional inconsistencies. At this stage, documentation was still light, but did include usage guidance, contextual rules, and a Do/Don't table to help teams understand how and when to use each component.</p>

                        <p className="ah-ha pain">Component overrides reintroduced inconsistency</p>
                        <p className="ah-ha pain">Limited flexibility for complex needs</p>
                        <p className="ah-ha pain">Documentation was helpful but sparse</p>

                        <img src={FenrirDoDont} alt="Fenrir v1 docs with guidelines" />
                        <span className="image-caption">Usage guidelines in Fenrir v1</span>

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

                        <div className="ah-ha lesson">
                            <div className="lesson-content">
                                <h3>Branding the design system</h3>
                                <p>For a design system to be valued and adopted, it must be treated like any other product in the company. Early on, without a distinct identity, Fenrir was seen as a collection of files rather than a critical, shared resource. To shift perception, I created a clear brand with a name, a logo, and a visible presence in company communications. This positioned Fenrir as a trusted product and reinforced its role as an essential tool for building consistent, scalable user experiences.</p>
                            </div>
                        </div>

                        <div className="ah-ha lesson">
                            <div className="lesson-content">
                                <h3>Centralizing feedback and support</h3>
                                <p>Developer questions, bug reports, and component requests were initially scattered across multiple channels, often going unanswered or lost. We consolidated all discussions into a single, dedicated space where developers could ask questions, surface gaps, share use cases, and report issues. This streamlined tracking, improved response times, and created a collaborative forum that informed both immediate fixes and long-term system growth.</p>
                            </div>
                        </div>

                        <div className="ah-ha lesson">
                            <div className="lesson-content">
                                <h3>Documenting patterns in depth</h3>
                                <p>Even with components available, designers and developers sometimes implemented them differently, leading to inconsistencies in behavior, responsiveness, and states. To address this, my development partner and I documented each pattern in detail, including behaviors, interactions, example use cases, state variations, and copywriting guidelines. This reduced misinterpretation, sped up adoption, and ensured consistency across teams.</p>
                            </div>
                        </div>

                        <div className="ah-ha lesson">
                            <div className="lesson-content">
                                <h3>Introducing a contribution model</h3>
                                <p>While designers used the system, their focus often stayed within their own product areas, leading to solutions that couldn't easily be reused elsewhere. I introduced a formal contribution model for adding or expanding patterns, requiring documented use cases, scalability considerations, and cross-team applicability. This not only improved the quality and reusability of patterns but also increased shared ownership and accountability within the design team.</p>
                            </div>
                        </div>

                        <div className="ah-ha lesson">
                            <div className="lesson-content">
                                <h3>Balancing consistency with creative input</h3>
                                <p>Other departments often wanted a say in visual and interaction decisions, which sometimes conflicted with established design system patterns. In some cases, enforced consistency frustrated creative contributors seeking more flexibility. This was addressed by building relationships, explaining the rationale for system decisions, and incorporating valid feedback into updates when appropriate. This approach preserved system consistency while strengthening cross-team trust and buy-in.</p>
                            </div>
                        </div>

                        <h2>Impact & Outcomes</h2>
                        <p>What changed as a result of your work? Use metrics if possible.</p>
                        <ul>
                            <li>Increased adoption across product teams (e.g. % of teams using Fenrir v2)</li>
                            <li>Reduce design and development time</li>
                            <li>Fewer inconsistencies across interfaces</li>
                            <li>Greater cross-functional alignment and trust in UX</li>
                        </ul>

                        <h2>What's Next</h2>
                        <p>Fenrir will continue to evolve as a living, adaptable system that grows with the organization's needs. Key focus areas moving forward include:</p>
                        <ul>
                            <li><b>Mergers and Acquisitions Onboarding Support.</b> We will establish clear processes that allow newly acquired products and services to be integrated quickly and effectively into the Arctic Wolf product suite using Fenrir, ensuring a consistent and cohesive user experience across the expanded portfolio.</li>
                            <li><b>Component Evolution</b> Components will continue to be expanded and refined to address emerging product requirements, new interaction patterns, and accessibility best practices.</li>
                            <li><b>Enhanced Documentation</b> Design pattern documentation will continue to evolve to contain deeper examples, responsive behavior guidelines, and cross-product implementation notes.</li>
                            <li><b>Dedicated Support Team Exploration</b> We will explore practical options for scaling and sustaining Fenrir so it continues to meet the needs of both designers and developers. This may include establishing a dedicated, cross-disciplinary design and engineering team, embedding design system responsibilities into specific roles, or allocating rotational time from existing team members. The goal is to strengthen governance, improve scalability, and create capacity for proactive improvements. With the right support model, we can enable UX to work faster and more effectively, while helping developers implement patterns more consistently, reduce bugs, and minimize edge cases.</li>
                        </ul>

                        <h2>Conclusion</h2>
                        <p>Fenrir has evolved from an informal set of shared files into a scalable, governed design system that supports both designers and developers in creating consistent, high-quality user experiences. The transition from v1 to v2 addressed the gaps that slowed adoption, reduced duplication, and established a reliable foundation for accessibility, documentation, and long-term growth. What began as a way to align design practices has become a critical product in its own right, embedded into the workflows of teams across the organization.</p>

                        <p>Looking ahead, Fenrir will continue to mature as a living system that supports mergers and acquisitions, expands its component and pattern library, and refines documentation to enable faster, more consistent implementation. While dedicated resources remain limited, the system's proven impact positions it as a high-value investment opportunity. Scaling governance and support will not only accelerate UX delivery but also reduce developer rework, minimize bugs, and strengthen the overall user experience across Arctic Wolf's product suite.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudy;
