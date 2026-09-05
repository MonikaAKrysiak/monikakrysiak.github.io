import type { KnowledgeSharingPracticalExample } from "./index";
import { knowledgeSharingEvidence } from "./evidence";

export const knowledgeSharing = {
	header: {
		title: "Knowledge Sharing",

		summary:
			"Helping people understand complex topics by adapting knowledge to different audiences, contexts and learning styles.",

		focusAreas: [
			"Knowledge Sharing",
			"Learning Design",
			"Documentation",
			"Communication",
		],

		action: {
			label: "View my publications on Google Scholar",
			href: "https://scholar.google.com/citations?hl=pl&user=iEJNt0YAAAAJ&view_op=list_works&sortby=pubdate",
		},
	},

	overview: {
		title: "Overview",

		paragraphs: [
			"Throughout my career, I have treated knowledge sharing as an essential part of software quality. Well-written documentation, practical workshops and clear onboarding materials help teams work more effectively, make better decisions and build secure software with greater confidence.",
		],
	},

	audiences: {
		title: "Different Audiences",

		introduction:
			"The same topic may require a completely different approach depending on the audience, their experience and the context in which the knowledge will be used.",

		items: [
			{
				title: "Project teams",

				description:
					"In project work, teams often needed information that supported quick decisions, so I focused on documentation, discussions and examples that made the context easier to understand and apply.",
			},
			{
				title: "New team members",

				description:
					"During team changes, I created onboarding materials that helped new people understand systems, processes and exceptions without relying on the knowledge of a single team member.",
			},
			{
				title: "Students",

				description:
					"Because students had limited project experience, I translated technical and security topics into structured explanations, practical exercises and examples based on real situations.",
			},
			{
				title: "Professional community",

				description:
					"Conference and community audiences often included people with different levels of experience, so I used practical examples that could be adapted to their everyday work.",
			},
		],
	},

	practicalExamples: {
		title: "Making Complex Things Understandable",

		introduction:
			"Knowledge sharing is most valuable when it helps people solve real problems. These examples show how I translated complex topics into practical resources for different audiences.",

		items: [
			{
				title: "SQL and JQL for QA",

				context:
					"As part of a broader training programme for future QA engineers, I was responsible for designing the SQL and JQL module, focusing on skills testers use in their daily work.",

				approach:
					"Instead of teaching databases and query languages in isolation, I selected the concepts, queries and exercises that testers are most likely to use while investigating defects, preparing test data and verifying application behaviour.",

				outcome:
					"The module connected theory with realistic testing scenarios, helping participants understand not only how to write queries, but also when and why to use them.",

				meta: [
					{
						label: "Format",
						value: "Part of a broader QA training programme",
					},
					{
						label: "Audience",
						value: "Future QA engineers",
					},
					{
						label: "Topics",
						value: "SQL, JQL and databases",
					},
				],

				evidenceLabel: "View course evidence",
				evidenceCollapseLabel: "Hide course evidence",

				evidence: [
				{
					title: "Course excerpt: Filtering data",
					description:
   				"A short excerpt from one of more than 20 SQL and JQL lessons prepared for the course. The module also included setup instructions for the Beaver training environment, homework assignments and theory questions. I introduced data filtering using a dedicated training database and built the examples around practical QA scenarios, so participants could learn by working with data in a context similar to everyday testing tasks.",
					videoSrc: knowledgeSharingEvidence.sqlAndJql.videoSrc,
					linksAfterDescription: true,
					links: [
						{
							label: "View training database",
							href: knowledgeSharingEvidence.sqlAndJql.links.trainingDatabase,
						},
						{
							label: "View training announcement on LinkedIn",
							href: knowledgeSharingEvidence.sqlAndJql.links.linkedinAnnouncement,
						},
						{
							label: "View training recap on LinkedIn",
							href: knowledgeSharingEvidence.sqlAndJql.links.linkedinRecap,
						},
					],
				},
			],
			},
			{
				title: "Practical learning resources",

				context:
					"Technical and security topics often needed to be explained to people with different levels of experience and in a form they could use beyond a single session.",

				approach:
					"I created practical learning resources that combined concise explanations with examples, exercises, checklists and step-by-step guidance. I adapted the level of detail and format to the audience and the topic.",

				outcome:
					"The materials made complex topics easier to explore in practice and provided reusable resources that people could return to when they needed them.",

				meta: [
					{
						label: "Format",
						value: "Guides, exercises and supporting materials",
					},
					{
						label: "Audience",
						value: "People with different levels of experience",
					},
					{
						label: "Topics",
						value: "Application security and security awareness",
					},
				],

				resourceLink: {
					label: "View example resources in the Security Knowledge Base",
					href: "/en/work/security-knowledge-base#example-resources",
				},
				evidenceLabel: "View learning resource examples",
				evidenceCollapseLabel: "Hide learning resource examples",

				evidence: [
					{
						title: "Step-by-step application security learning material",
						layout: "learning-resource",
						description:
							"A learning resource explaining path traversal through practical PortSwigger Academy labs. It combined a short vulnerability overview with hands-on instructions, additional notes and examples showing why seemingly simple mitigations can still be bypassed.",
						image:
							knowledgeSharingEvidence.workshopMaterials.pathTraversalImage,
						alt:
							"Learning material about path traversal showing explanations, PortSwigger Academy lab instructions and an example of bypassing path traversal filtering.",
					},
					{
						title: "Security awareness material",
						layout: "learning-resource",
						description:
							"A practical resource about working securely outside the office. It translated security principles into everyday actions related to physical surroundings, devices, passwords and handling project or client data.",
						image:
							knowledgeSharingEvidence.workshopMaterials.remoteWorkSecurityImage,
						alt:
							"Security awareness material about secure remote work, with practical guidance on protecting screens, devices, passwords and project or client data.",
					},
				],
			},
			{
				title: "Technical articles",

				context:
					"Security and quality topics are often described in a way that feels abstract or difficult to connect with everyday engineering work.",

				approach:
					"I wrote articles that translated complex concepts into accessible guidance, using examples grounded in real QA and security scenarios.",

				outcome:
					"The articles made these topics easier to explore independently and provided reusable reference material for people working in software quality.",

				meta: [
					{
						label: "Format",
						value: "Technical articles",
					},
					{
						label: "Audience",
						value: "QA and software professionals",
					},
					{
						label: "Focus",
						value: "Security and quality in practice",
					},
				],
				previewDescription: "A selection from a broader academic and professional publication record.",
				previewImage: knowledgeSharingEvidence.publications.overviewImage,
				previewAlt: "A selection of physical academic and professional publications authored and co-authored by me.",
				evidenceLabel: "View selected publications",
				evidenceCollapseLabel: "Hide selected publications",

				evidence: [
					{
						title: "Zastosowanie ontologii w budowie semantycznego Internetu oraz modelowaniu wiedzy o organizacji",
						description:
							"My first academic publication, developed from my bachelor's thesis and co-authored with Dr Mariusz Żytniewski. It focused on the use of ontologies in the semantic web and organisational knowledge modelling.",
						linksAfterDescription: true,
						links: [
							{
								label: "View publication in BazEkon",
								href: "https://bazekon.icm.edu.pl/bazekon/element/bwmeta1.element.ekon-element-000171395895",
							},
						],
					},
					{
						title: "Wpływ zastosowań nowoczesnych technologii na atrakcyjność i popularność muzeów w Polsce",
						description:
							"A publication co-authored with Szymon Głowania exploring how modern technologies, including virtual experiences and online communication, can influence the attractiveness and popularity of museums.",
						linksAfterDescription: true,
						links: [
							{
								label: "View publication in BazEkon",
								href: "https://bazekon.icm.edu.pl/bazekon/element/bwmeta1.element.ekon-element-000171495190",
							},
						],
					},
					{
						title: "Metodyki zarządzania projektami IT i ich ryzykiem: przegląd i wykorzystanie",
						description:
							"A study co-authored with Szymon Głowania examining approaches to IT project management and methods used to manage project risk.",
						linksAfterDescription: true,
						links: [
							{
								label: "Read publication",
								href: "https://bibliotekanauki.pl/articles/591893.pdf",
							},
						],
					},
					{
						title: "The Cyber Threats Analysis for Web Applications Security in Industry 4.0",
						description:
							"A research publication co-authored with Prof. UE Anna Sołtysik-Piorunkiewicz, analysing web application security threats in the context of Industry 4.0.",
						linksAfterDescription: true,
						links: [
							{
								label: "View publication on Springer",
								href: "https://link.springer.com/chapter/10.1007/978-3-030-40417-8_8",
							},
						],
					},
					{
						title: "Security threats spotted by QA Engineers. Cybersecurity testing based on TSH projects",
						description:
							"A practical article showing how QA engineers can identify security risks in real software projects and incorporate security testing into everyday QA work.",
						linksAfterDescription: true,
						links: [
							{
								label: "Read article",
								href: "https://tsh.io/blog/cybersecurity-testing-owasp",
							},
						],
					},
					{
						title: "OWASP Top 10 Privacy Risks – use these best practices to protect your clients",
						description:
							"A practical exploration of the OWASP Top 10 Privacy Risks, connecting privacy threats with concrete considerations for web applications and software development.",
						linksAfterDescription: true,
						links: [
							{
								label: "Read article",
								href: "https://tsh.io/blog/owasp-top-10-privacy-risks",
							},
						],
					},
				],
			},
			{
				title: "Academic teaching",

				context:
					"I worked with students through regular Project Management classes and a guest lecture focused on practical topics from software quality and application security.",

				approach:
					"During the classes, I helped students translate project management theory into decisions, problems and situations they might encounter in team-based work. The guest lecture was built around examples from QA and application security.",

				outcome:
					"Both formats helped students connect academic knowledge with the realities of software projects and understand how different roles collaborate when building software.",

				meta: [
					{
						label: "Format",
						value: "Regular classes and a guest lecture",
					},
					{
						label: "Audience",
						value: "Students of Computer Science and Computer Science & Econometrics",
					},
					{
						label: "Topics",
						value: "Project management, QA and application security",
					},
				],
				evidenceLabel: "View teaching evidence",
				evidenceCollapseLabel: "Hide teaching evidence",
					evidence: [
						{
							title: "Project Management classes",
							layout: "academic",
							description:
								"As part of my doctoral teaching practice, I guided student teams through a semester-long project developed incrementally during the classes. Their work included defining project goals, creating a WBS, planning schedules and analysing project risks.",
							image:
								knowledgeSharingEvidence.academic.projectManagement.projectGoalsImage,
							alt:
								"Teaching materials from Project Management classes showing project goals and a Work Breakdown Structure.",
							linksAfterDescription: true,
							links: [
								{
									label: "Profile at the University of Economics in Katowice",
									href: knowledgeSharingEvidence.academic.owaspLecture.links.universityProfile,
								},
							],
						},
						{
							title: "Guest lecture: Application security and OWASP",
							layout: "academic",
							description:
								"I delivered the guest lecture “Alfabet bezpiecznej aplikacji i krytyczne zagrożenia cyfrowe – praktyczne zastosowania OWASP” as part of the Security Engineering course coordinated by Prof. UE Anna Sołtysik-Piorunkiewicz. The session used examples from QA and software projects to discuss critical application security risks and practical uses of OWASP.",
							image:
								knowledgeSharingEvidence.academic.owaspLecture.image,
							alt:
								"University of Economics in Katowice materials documenting my guest lecture on application security and practical uses of OWASP, including the lecture announcement and official thank-you.",
							linksAfterDescription: true,
							links: [
								{
									label: "My LinkedIn recap",
									href: knowledgeSharingEvidence.academic.owaspLecture.links.linkedin,
								},
							],
						},
					],
			},
			{
				title: "Community talks",

				context:
					"Security and quality communities bring together people with very different levels of experience, roles and expectations.",

				approach:
					"I prepared practical talks for events and communities such as OWASP Poland Day, OWASP Kraków and Uszanowanko Programowanko, adapting the examples and level of detail to each audience.",

				outcome:
					"The talks helped participants connect security concepts with everyday QA and engineering work and created space for questions and further discussion.",

				meta: [
					{
						label: "Format",
						value: "Conference and community talks",
					},
					{
						label: "Audience",
						value: "Security, QA and software enthusiasts",
					},
					{
						label: "Examples",
						value:
							"OWASP Poland Day, OWASP Kraków and Uszanowanko Programowanko",
					},
				],
				evidence: [
					{
						title: "OWASP Poland Day 2023",
						description:
							"A talk titled “Smuggling Security Into a Software Project. A Guide for Cunning QAs” presented at OWASP Poland Day 2023 in Zabrze.",
						image: knowledgeSharingEvidence.owaspPolandDay2023.eventImage,
						alt: "OWASP Poland Day 2023 graphic announcing Monika Krysiak’s talk “Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						secondaryImage:
							knowledgeSharingEvidence.owaspPolandDay2023.speakerImage,
						secondaryImageAlt:
							"OWASP Poland Day 2023 speaker graphic featuring Monika Krysiak and the talk “Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						links: [
							{
								label: "Event page",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.eventbrite,
							},
							{
								label: "OWASP Poland announcement",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.facebook,
							},
							{
								label: "My LinkedIn recap",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.linkedin,
							},
						],
					},
					{
						title: "Uszanowanko Programowanko",
						description:
							"A community talk about bringing application security into the everyday work of QA engineers.",
						image: knowledgeSharingEvidence.uszanowanko.eventImage,
						alt: "Uszanowanko Programowanko event graphic about cloud, accessibility and security.",
						videoSrc: knowledgeSharingEvidence.uszanowanko.videoSrc,
						links: [
							{
								label: "Talk page",
								href: knowledgeSharingEvidence.uszanowanko.links.eventPage,
							},
							{
								label: "Presentation",
								href: knowledgeSharingEvidence.uszanowanko.links.slides,
							},
							{
								label: "Event on Meetup",
								href: knowledgeSharingEvidence.uszanowanko.links.meetup,
							},
							{
								label: "My LinkedIn recap",
								href: knowledgeSharingEvidence.uszanowanko.links.linkedin,
							},
						],
					},
					{
						title: "OWASP Kraków Chapter",
						description: "A talk titled “Smuggling Security Into a Software Project. A Guide for Cunning QAs” presented at an OWASP Kraków Chapter meeting.",
						image: knowledgeSharingEvidence.owaspKrakow.eventImage,
						alt: "OWASP Kraków event graphic focused on security in the software development lifecycle.",
						secondaryImage: knowledgeSharingEvidence.owaspKrakow.presentationImage,
						secondaryImageAlt: "Title slide of the presentation “Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						secondaryImageLarge: true,
						links: [
							{
								label: "Event on Meetup",
								href: knowledgeSharingEvidence.owaspKrakow.links.meetup,
							},
							{
								label: "Event announcement",
								href: knowledgeSharingEvidence.owaspKrakow.links.linkedinAnnouncement,
							},
							{
								label: "My LinkedIn recap",
								href: knowledgeSharingEvidence.owaspKrakow.links.linkedinRecap,
							},
						],
					},
				],
			},
		] satisfies KnowledgeSharingPracticalExample[],
	},

	impact: {
		title: "Knowledge in Practice",

		introduction:
			"Knowledge sharing created value beyond individual sessions or materials. It supported everyday work, helped people become more independent and encouraged better technical conversations.",

		items: [
			{
				title: "Faster onboarding",

				description:
					"Clear materials and practical examples helped new team members understand systems, processes and project context more quickly.",
			},
			{
				title: "Greater independence",

				description:
					"People could return to structured resources when solving problems instead of relying solely on knowledge held by individual team members.",
			},
			{
				title: "Better questions",

				description:
					"Workshops, discussions and practical examples encouraged people to explore the reasons behind decisions rather than only follow instructions.",
			},
			{
				title: "Wider security awareness",

				description:
					"Security topics became part of everyday QA and engineering conversations instead of remaining limited to specialist activities.",
			},
			{
				title: "Reusable knowledge",

				description:
					"Articles, presentations, exercises and documentation continued to support learning after the original session or project had ended.",
			},
		],
	},

	reflection: {
		title: "What I Learned",

		paragraphs: [
			"Teaching, documentation and public speaking reinforced the same lesson: knowledge has value only when people can apply it in practice.",

			"Over time, I realised that good technical communication is not about demonstrating expertise. It is about understanding the audience, removing unnecessary complexity and helping people make better decisions.",

			"That mindset continues to shape how I work today - whether I am reviewing requirements, discussing security risks, writing documentation or collaborating with a development team.",
		],
	},
};