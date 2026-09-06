import type { KnowledgeSharingPracticalExample } from "./index";
import { knowledgeSharingEvidence } from "./evidence";

export const knowledgeSharing = {
	header: {
		title: "Dzielenie się wiedzą",

		summary:
			"Pomagam innym zrozumieć złożone zagadnienia, dopasowując sposób przekazywania wiedzy do różnych odbiorców, kontekstów i sposobów uczenia się.",

		focusAreas: [
			"Dzielenie się wiedzą",
			"Projektowanie materiałów edukacyjnych",
			"Dokumentacja",
			"Komunikacja",
		],

		action: {
			label: "Zobacz moje publikacje w Google Scholar",
			href: "https://scholar.google.com/citations?hl=pl&user=iEJNt0YAAAAJ&view_op=list_works&sortby=pubdate",
		},
	},

	overview: {
		title: "Przegląd",

		paragraphs: [
			"W swojej karierze zawsze traktowałam dzielenie się wiedzą jako ważny element budowania jakości oprogramowania. Dobra dokumentacja, praktyczne warsztaty i przemyślane materiały onboardingowe pomagają zespołom pracować skuteczniej, podejmować lepsze decyzje i z większą pewnością tworzyć bezpieczne aplikacje.",
		],
	},

	audiences: {
		title: "Różni odbiorcy",

		introduction:
			"Ten sam temat może wymagać zupełnie innego podejścia w zależności od odbiorców, ich doświadczenia oraz kontekstu, w którym będą wykorzystywać wiedzę.",

		items: [
			{
				title: "Zespoły projektowe",

				description:
					"W projektach najważniejsze było szybkie podejmowanie decyzji, dlatego przygotowywałam dokumentację, prowadziłam dyskusje i tworzyłam materiały ułatwiające zrozumienie kontekstu.",
			},
			{
				title: "Nowe osoby w zespole",

				description:
					"Podczas zmian w zespole tworzyłam materiały onboardingowe, które pomagały zrozumieć systemy, procesy i wyjątki bez konieczności polegania na wiedzy jednej osoby.",
			},
			{
				title: "Studenci",

				description:
					"Pracując ze studentami, tłumaczyłam zagadnienia techniczne, bezpieczeństwo i zarządzanie projektami za pomocą praktycznych ćwiczeń oraz przykładów z rzeczywistych projektów.",
			},
			{
				title: "Społeczność branżowa",

				description:
					"Podczas konferencji i spotkań społeczności dostosowywałam przekaz do poziomu doświadczenia uczestników, opierając go na praktycznych przykładach przydatnych w codziennej pracy.",
			},
		],
	},

	practicalExamples: {
		title: "Upraszczanie złożonych tematów",

		introduction:
			"Dzielenie się wiedzą ma największą wartość wtedy, gdy pomaga rozwiązywać rzeczywiste problemy. Te przykłady pokazują różne sposoby, w jakie przekładałam złożone zagadnienia na praktyczne materiały.",

		items: [
			{
				title: "SQL i JQL dla QA",

				context:
					"W ramach większego programu szkoleniowego dla osób rozpoczynających pracę w QA odpowiadałam za przygotowanie modułu dotyczącego SQL i JQL, skupionego na praktycznych umiejętnościach wykorzystywanych w codziennej pracy testera.",

				approach:
					"Zamiast omawiać bazy danych i języki zapytań w oderwaniu od praktyki, wybrałam zagadnienia, zapytania i ćwiczenia przydatne podczas analizy błędów, przygotowywania danych testowych oraz weryfikacji działania aplikacji.",

				outcome:
					"Moduł łączył teorię z realistycznymi scenariuszami testowymi, pomagając uczestnikom zrozumieć nie tylko, jak tworzyć zapytania, ale również kiedy i dlaczego warto z nich korzystać.",

				meta: [
					{
						label: "Forma",
						value: "Część większego programu szkoleniowego",
					},
					{
						label: "Odbiorcy",
						value: "Osoby rozpoczynające pracę w QA",
					},
					{
						label: "Tematy",
						value: "SQL, JQL i bazy danych",
					},
				],

				evidenceLabel: "Pokaż materiały z kursu",
				evidenceCollapseLabel: "Ukryj materiały z kursu",

				evidence: [
				{
					title: "Fragment kursu: filtrowanie danych",
					description:
    					"Krótki fragment jednej z ponad 20 lekcji SQL i JQL przygotowanych w ramach kursu. Moduł obejmował również instrukcję konfiguracji środowiska szkoleniowego Beaver, zadania domowe oraz pytania z teorii. Filtrowanie danych omawiałam na dedykowanej bazie szkoleniowej, a przykłady osadzałam w praktycznych scenariuszach QA, dzięki czemu uczestnicy mogli uczyć się pracy z danymi w kontekście zbliżonym do codziennych zadań testera.",
					videoSrc: knowledgeSharingEvidence.sqlAndJql.videoSrc,
					linksAfterDescription: true,
					links: [
						{
							label: "Zobacz bazę szkoleniową",
							href: knowledgeSharingEvidence.sqlAndJql.links.trainingDatabase,
						},
						{
							label: "Zobacz zapowiedź szkolenia na LinkedIn",
							href: knowledgeSharingEvidence.sqlAndJql.links.linkedinAnnouncement,
						},
						{
							label: "Zobacz podsumowanie szkolenia na LinkedIn",
							href: knowledgeSharingEvidence.sqlAndJql.links.linkedinRecap,
						},
					],
				},
			],
			},
			{
    			title: "Praktyczne materiały edukacyjne",

				context:
					"Zagadnienia techniczne i związane z bezpieczeństwem często wymagały wyjaśnienia osobom o różnym poziomie doświadczenia oraz w formie, z której można było korzystać również po zakończeniu spotkania.",

				approach:
					"Tworzyłam praktyczne materiały edukacyjne łączące krótkie wyjaśnienia z przykładami, ćwiczeniami, checklistami i instrukcjami krok po kroku. Poziom szczegółowości i formę dopasowywałam do odbiorców oraz omawianego tematu.",

				outcome:
					"Materiały ułatwiały poznawanie złożonych tematów w praktyce i pozostawały źródłem wiedzy, do którego można było wracać w razie potrzeby.",

				meta: [
					{
						label: "Forma",
						value: "Poradniki, ćwiczenia i materiały pomocnicze",
					},
					{
						label: "Odbiorcy",
						value: "Osoby o różnym poziomie doświadczenia",
					},
					{
						label: "Tematy",
						value: "Bezpieczeństwo aplikacji i świadomość bezpieczeństwa",
					},
				],

				resourceLink: {
					label: "Zobacz przykładowe materiały w Security Knowledge Base",
					href: "/pl/work/security-knowledge-base#example-resources",
				},

				evidenceLabel: "Pokaż przykładowe materiały",
				evidenceCollapseLabel: "Ukryj przykładowe materiały",

				evidence: [
					{
						title: "Materiał edukacyjny AppSec krok po kroku",
						layout: "learning-resource",
						description:
							"Krótki fragment jednej z ponad 20 lekcji SQL i JQL, które przygotowałam w ramach kursu. Moduł oparłam na praktycznych ćwiczeniach z wykorzystaniem dedykowanej bazy szkoleniowej, a przykłady tworzyłam na podstawie scenariuszy QA zamiast oderwanych od kontekstu zapytań. Dzięki temu uczestnicy mogli ćwiczyć filtrowanie danych w sytuacjach zbliżonych do codziennej pracy testera. Moduł obejmował również instrukcję konfiguracji środowiska szkoleniowego Beaver, zadania domowe oraz pytania z teorii.",
						image:
							knowledgeSharingEvidence.workshopMaterials.pathTraversalImage,
						alt:
							"Materiał edukacyjny o path traversal zawierający wyjaśnienia, instrukcje do laboratoriów PortSwigger Academy oraz przykład obejścia filtrowania ścieżki.",
					},
					{
						title: "Materiał zwiększający świadomość bezpieczeństwa",
						layout: "learning-resource",
						description:
							"Praktyczny materiał dotyczący bezpiecznej pracy poza biurem. Przekładał zasady bezpieczeństwa na codzienne działania związane z otoczeniem, urządzeniami, hasłami oraz ochroną danych projektowych i klientów.",
						image:
							knowledgeSharingEvidence.workshopMaterials.remoteWorkSecurityImage,
						alt:
							"Materiał o bezpiecznej pracy zdalnej zawierający praktyczne wskazówki dotyczące ochrony ekranu, urządzeń, haseł oraz danych projektowych i klientów.",
					},
				],
			},
			{
				title: "Artykuły techniczne",

				context:
					"Zagadnienia związane z bezpieczeństwem i jakością są często opisywane w sposób abstrakcyjny lub trudny do połączenia z codzienną pracą inżynierską.",

				approach:
					"Pisałam artykuły, które przekładały złożone pojęcia na praktyczne wskazówki, wykorzystując jasne wyjaśnienia oraz przykłady osadzone w rzeczywistych sytuacjach z obszaru QA i bezpieczeństwa.",

				outcome:
					"Artykuły ułatwiały samodzielne poznawanie tematów i stanowiły materiały referencyjne, do których można było później wracać.",

				meta: [
					{
						label: "Forma",
						value: "Artykuły techniczne",
					},
					{
						label: "Odbiorcy",
						value: "Specjaliści QA i osoby z branży IT",
					},
					{
						label: "Tematy",
						value: "Bezpieczeństwo i jakość w praktyce",
					},
				],
				previewDescription:	"Wybrane pozycje z szerszego dorobku naukowego i branżowego.",
				previewImage: knowledgeSharingEvidence.publications.overviewImage,
				previewAlt: "Wybrane fizyczne publikacje naukowe i branżowe mojego autorstwa i współautorstwa.",
				evidenceLabel: "Pokaż wybrane publikacje",
				evidenceCollapseLabel: "Ukryj wybrane publikacje",

				evidence: [
					{
						title: "Zastosowanie ontologii w budowie semantycznego Internetu oraz modelowaniu wiedzy o organizacji",
						description:
							"Moja pierwsza publikacja naukowa, rozwijająca temat pracy licencjackiej i współtworzona z dr Mariuszem Żytniewskim. Dotyczyła zastosowania ontologii w semantycznym Internecie oraz modelowaniu wiedzy o organizacji.",
						linksAfterDescription: true,
						links: [
							{
								label: "Zobacz publikację w BazEkon",
								href: "https://bazekon.icm.edu.pl/bazekon/element/bwmeta1.element.ekon-element-000171395895",
							},
						],
					},
					{
						title: "Wpływ zastosowań nowoczesnych technologii na atrakcyjność i popularność muzeów w Polsce",
						description:
							"Publikacja współautorstwa z Szymonem Głowanią poświęcona wykorzystaniu nowoczesnych technologii, w tym wirtualnych doświadczeń i komunikacji online, oraz ich wpływowi na atrakcyjność i popularność muzeów.",
						linksAfterDescription: true,
						links: [
							{
								label: "Zobacz publikację w BazEkon",
								href: "https://bazekon.icm.edu.pl/bazekon/element/bwmeta1.element.ekon-element-000171495190",
							},
						],
					},
					{
						title: "Metodyki zarządzania projektami IT i ich ryzykiem: przegląd i wykorzystanie",
						description:
							"Publikacja współautorstwa z Szymonem Głowanią poświęcona podejściom do zarządzania projektami IT oraz metodom wykorzystywanym w zarządzaniu ryzykiem projektowym.",
						linksAfterDescription: true,
						links: [
							{
								label: "Przeczytaj publikację",
								href: "https://bibliotekanauki.pl/articles/591893.pdf",
							},
						],
					},
					{
						title: "The Cyber Threats Analysis for Web Applications Security in Industry 4.0",
						description:
							"Publikacja naukowa współautorstwa z prof. UE Anną Sołtysik-Piorunkiewicz, analizująca zagrożenia bezpieczeństwa aplikacji webowych w kontekście Industry 4.0.",
						linksAfterDescription: true,
						links: [
							{
								label: "Zobacz publikację w Springer",
								href: "https://link.springer.com/chapter/10.1007/978-3-030-40417-8_8",
							},
						],
					},
					{
						title: "Security threats spotted by QA Engineers. Cybersecurity testing based on TSH projects",
						description:
							"Praktyczny artykuł pokazujący, w jaki sposób QA Engineer może identyfikować zagrożenia bezpieczeństwa w rzeczywistych projektach i włączać testy bezpieczeństwa do codziennej pracy QA.",
						linksAfterDescription: true,
						links: [
							{
								label: "Przeczytaj artykuł",
								href: "https://tsh.io/blog/cybersecurity-testing-owasp",
							},
						],
					},
					{
						title: "OWASP Top 10 Privacy Risks – use these best practices to protect your clients",
						description:
							"Praktyczne omówienie OWASP Top 10 Privacy Risks, łączące zagrożenia dla prywatności z konkretnymi aspektami projektowania i rozwijania aplikacji webowych.",
						linksAfterDescription: true,
						links: [
							{
								label: "Przeczytaj artykuł",
								href: "https://tsh.io/blog/owasp-top-10-privacy-risks",
							},
						],
					},
				],
			},
			{
				title: "Zajęcia akademickie",

				context:
					"Pracowałam ze studentami zarówno podczas regularnych ćwiczeń z zarządzania projektami, jak i w ramach gościnnego wystąpienia poświęconego praktycznym zagadnieniom z obszaru jakości i bezpieczeństwa.",

				approach:
					"Podczas ćwiczeń pomagałam studentom przekładać teorię zarządzania projektami na decyzje, problemy i sytuacje spotykane w pracy zespołowej. Wystąpienie gościnne opierałam natomiast na praktycznych przykładach z pracy w QA i bezpieczeństwie aplikacji.",

				outcome:
					"Obie formy pozwalały studentom lepiej połączyć wiedzę akademicką z realiami pracy przy projektach informatycznych i zobaczyć, jak różne role współpracują przy tworzeniu oprogramowania.",

				meta: [
					{
						label: "Forma",
						value: "Regularne ćwiczenia i wystąpienie gościnne",
					},
					{
						label: "Odbiorcy",
						value: "Studenci kierunków Informatyka i Ekonometria oraz Informatyka",
					},
					{
						label: "Tematy",
						value:
							"Zarządzanie projektami, QA i bezpieczeństwo aplikacji",
					},
				],
				evidenceLabel: "Pokaż materiały dydaktyczne",
				evidenceCollapseLabel: "Ukryj materiały dydaktyczne",
					evidence: [
						{
							title: "Ćwiczenia z Zarządzania Projektem",
							layout: "academic",
							description:
								"W ramach praktyk doktoranckich prowadziłam zespoły studentów przez rozwijany przez cały semestr projekt. W kolejnych etapach określali cele projektu, tworzyli WBS, planowali harmonogram i analizowali ryzyka projektowe.",
							image:
								knowledgeSharingEvidence.academic.projectManagement.projectGoalsImage,
							alt:
								"Materiały dydaktyczne z ćwiczeń z Zarządzania Projektem pokazujące cele projektu zaliczeniowego i strukturę WBS.",
							linksAfterDescription: true,
							links: [
								{
									label: "Profil na Uniwersytecie Ekonomicznym w Katowicach",
									href: knowledgeSharingEvidence.academic.owaspLecture.links.universityProfile,
								},
							],
						},
						{
							title: "Wykład gościnny: bezpieczeństwo aplikacji i OWASP",
							layout: "academic",
							description:
								"Poprowadziłam gościnny wykład „Alfabet bezpiecznej aplikacji i krytyczne zagrożenia cyfrowe – praktyczne zastosowania OWASP” w ramach przedmiotu Inżynieria bezpieczeństwa koordynowanego przez prof. UE Annę Sołtysik-Piorunkiewicz. Na przykładach z pracy w QA i projektach informatycznych omawiałam krytyczne zagrożenia dla aplikacji oraz praktyczne wykorzystanie OWASP.",
							image:
								knowledgeSharingEvidence.academic.owaspLecture.image,
							alt:
								"Materiały Uniwersytetu Ekonomicznego w Katowicach dokumentujące mój gościnny wykład o bezpieczeństwie aplikacji i praktycznym wykorzystaniu OWASP: zapowiedź wykładu oraz oficjalne podziękowanie.",
							linksAfterDescription: true,
							links: [
								{
									label: "Moje podsumowanie na LinkedIn",
									href: knowledgeSharingEvidence.academic.owaspLecture.links.linkedin,
								},
							],
						},
					],
			},
			{
				title: "Wystąpienia dla społeczności",

				context:
					"Społeczności związane z bezpieczeństwem i wytwarzaniem oprogramowania skupiają osoby o różnym doświadczeniu, rolach i oczekiwaniach.",

				approach:
					"Przygotowywałam praktyczne wystąpienia dla wydarzeń i społeczności takich jak OWASP Poland Day, OWASP Kraków czy Uszanowanko Programowanko, dopasowując przykłady i poziom szczegółowości do odbiorców.",

				outcome:
					"Wystąpienia pomagały uczestnikom łączyć zagadnienia bezpieczeństwa z codzienną pracą w QA i tworzeniu oprogramowania, a także tworzyły przestrzeń do pytań i dalszej dyskusji.",

				meta: [
					{
						label: "Forma",
						value: "Wystąpienia konferencyjne i społecznościowe",
					},
					{
						label: "Odbiorcy",
						value:
							"Osoby zainteresowane bezpieczeństwem, QA i tworzeniem oprogramowania",
					},
					{
						label: "Przykłady",
						value:
							"OWASP Poland Day, OWASP Kraków i Uszanowanko Programowanko",
					},
				],

				evidence: [
					{
						title: "OWASP Poland Day 2023",
						description:
							"Wystąpienie „Smuggling Security Into a Software Project. A Guide for Cunning QAs” podczas OWASP Poland Day 2023 w Zabrzu.",
						image: knowledgeSharingEvidence.owaspPolandDay2023.eventImage,
						alt: "Grafika OWASP Poland Day 2023 zapowiadająca wystąpienie Moniki Krysiak „Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						secondaryImage:
							knowledgeSharingEvidence.owaspPolandDay2023.speakerImage,
						secondaryImageAlt:
							"Grafika OWASP Poland Day 2023 przedstawiająca Monikę Krysiak jako prelegentkę wystąpienia „Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						links: [
							{
								label: "Strona wydarzenia",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.eventbrite,
							},
							{
								label: "Zapowiedź OWASP Poland",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.facebook,
							},
							{
								label: "Moje podsumowanie na LinkedIn",
								href: knowledgeSharingEvidence.owaspPolandDay2023.links.linkedin,
							},
						],
					},
					{
						title: "Uszanowanko Programowanko",
						description:
							"Wystąpienie o bezpieczeństwie aplikacji w codziennej pracy QA, przygotowane dla społeczności Uszanowanko Programowanko.",
						image: knowledgeSharingEvidence.uszanowanko.eventImage,
						alt: "Grafika wydarzenia Uszanowanko Programowanko z hasłem o chmurach, dostępności i bezpieczeństwie.",
						videoSrc: knowledgeSharingEvidence.uszanowanko.videoSrc,
						links: [
							{
								label: "Strona wystąpienia",
								href: knowledgeSharingEvidence.uszanowanko.links.eventPage,
							},
							{
								label: "Prezentacja",
								href: knowledgeSharingEvidence.uszanowanko.links.slides,
							},
							{
								label: "Wydarzenie na Meetup",
								href: knowledgeSharingEvidence.uszanowanko.links.meetup,
							},
							{
								label: "Moje podsumowanie na LinkedIn",
								href: knowledgeSharingEvidence.uszanowanko.links.linkedin,
							},
						],
					},
					{
						title: "OWASP Kraków Chapter",
						description: "Wystąpienie „Smuggling Security Into a Software Project. A Guide for Cunning QAs” podczas spotkania OWASP Kraków Chapter.",
						image: knowledgeSharingEvidence.owaspKrakow.eventImage,
						alt: "Grafika wydarzenia OWASP Kraków poświęconego bezpieczeństwu w cyklu wytwarzania oprogramowania.",
						secondaryImage: knowledgeSharingEvidence.owaspKrakow.presentationImage,
						secondaryImageAlt: "Slajd tytułowy prezentacji „Smuggling Security Into a Software Project. A Guide for Cunning QAs”.",
						secondaryImageLarge: true,
						links: [
							{
								label: "Wydarzenie na Meetup",
								href: knowledgeSharingEvidence.owaspKrakow.links.meetup,
							},
							{
								label: "Zapowiedź wydarzenia",
								href: knowledgeSharingEvidence.owaspKrakow.links.linkedinAnnouncement,
							},
							{
								label: "Moje podsumowanie na LinkedIn",
								href: knowledgeSharingEvidence.owaspKrakow.links.linkedinRecap,
							},
						],
					},
				],
			},
		] satisfies KnowledgeSharingPracticalExample[],
	},

	impact: {
		title: "Materiały, do których można wracać",

		introduction:
			"Dzielenie się wiedzą przynosiło wartość również po zakończeniu spotkań i szkoleń. Wspierało codzienną pracę, zwiększało samodzielność i pomagało prowadzić lepsze rozmowy techniczne.",

		items: [
			{
				title: "Szybszy onboarding",

				description:
					"Przejrzyste materiały i praktyczne przykłady pomagały nowym osobom szybciej zrozumieć systemy, procesy oraz kontekst projektu.",
			},
			{
				title: "Większa samodzielność",

				description:
					"Uporządkowane materiały pozwalały samodzielnie wracać do potrzebnych informacji zamiast polegać wyłącznie na wiedzy pojedynczych osób w zespole.",
			},
			{
				title: "Lepsze pytania",

				description:
					"Warsztaty, dyskusje i praktyczne przykłady zachęcały do szukania powodów stojących za decyzjami zamiast jedynie wykonywania instrukcji.",
			},
			{
				title: "Szersza świadomość bezpieczeństwa",

				description:
					"Zagadnienia bezpieczeństwa stawały się częścią codziennych rozmów w QA i zespołach inżynierskich, a nie tematem podejmowanym wyłącznie przez specjalistów.",
			},
			{
				title: "Wiedza wielokrotnego użytku",

				description:
					"Artykuły, prezentacje, ćwiczenia i dokumentacja wspierały dalszą naukę również po zakończeniu konkretnego spotkania lub projektu.",
			},
		],
	},

	reflection: {
		title: "Czego się nauczyłam",

		paragraphs: [
			"Prowadzenie szkoleń, tworzenie dokumentacji i występowanie na konferencjach utwierdziły mnie w przekonaniu, że wiedza ma wartość tylko wtedy, gdy można ją wykorzystać w praktyce.",

			"Z czasem zrozumiałam, że dobra komunikacja techniczna nie polega na pokazywaniu swojej wiedzy. Jej celem jest zrozumienie odbiorców, usuwanie niepotrzebnej złożoności i pomaganie innym w podejmowaniu lepszych decyzji.",

			"To podejście wykorzystuję również w codziennej pracy - podczas analizy wymagań, rozmów o bezpieczeństwie, tworzenia dokumentacji i współpracy z zespołami projektowymi.",
		],
	},
};
