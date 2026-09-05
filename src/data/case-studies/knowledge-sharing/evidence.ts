import uszanowankoEventImage from "../../../assets/case-studies/knowledge-sharing-uszanowanko-event.png";
import owaspPolandDay2023Image from "../../../assets/case-studies/knowledge-sharing-owasp-poland-day-2023.png";
import owaspPolandDay2023SpeakerImage from "../../../assets/case-studies/knowledge-sharing-owasp-poland-day-2023-speaker.png";
import owaspKrakowEventImage from "../../../assets/case-studies/knowledge-sharing-owasp-krakow-event.png";
import owaspKrakowPresentationImage from "../../../assets/case-studies/knowledge-sharing-owasp-krakow-presentation.png";
import publicationsOverviewImage from "../../../assets/case-studies/knowledge-sharing-publications-overview.jpg";
import academicProjectGoalsImage from "../../../assets/case-studies/knowledge-sharing-academic-project-goals.png";
import academicOwaspLectureImage from "../../../assets/case-studies/knowledge-sharing-academic-owasp-lecture.png";
import pathTraversalLearningMaterial from "../../../assets/case-studies/knowledge-sharing-path-traversal-learning-material.png";
import remoteWorkSecurityMaterial from "../../../assets/case-studies/knowledge-sharing-remote-work-security-material.png";

export const knowledgeSharingEvidence = {
    workshopMaterials: {
        pathTraversalImage: pathTraversalLearningMaterial,
        remoteWorkSecurityImage: remoteWorkSecurityMaterial,
    },

    publications: {
        overviewImage: publicationsOverviewImage,
    },

    sqlAndJql: {
        videoSrc: "/videos/work/knowledge-sharing-sql-filtering-data.mp4",
        links: {
            trainingDatabase:
                "https://github.com/MonikaAKrysiak/Kurs-SQL",
            linkedinAnnouncement:
                "https://www.linkedin.com/feed/update/urn:li:activity:7056884635229724672",
            linkedinRecap:
                "https://www.linkedin.com/feed/update/urn:li:activity:7062101194457907200",
        },
    },

    academic: {
        projectManagement: {
            projectGoalsImage: academicProjectGoalsImage,
        },
        owaspLecture: {
            image: academicOwaspLectureImage,
            links: {
                universityProfile:
                    "https://www.ue.katowice.pl/pracownicy/wydzial-informatyki-i-komunikacji/katedra-badan-operacyjnych/monika-krysiak.html",
                linkedin:
                    "https://www.linkedin.com/posts/monika-krysiak_chcia%C5%82am-bardzo-podzi%C4%99kowa%C4%87-pani-profesor-activity-7155960416077004800-soaw?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcvFK4BGUjj3r8RDOCh-xB42SmujxCx2UU",
            },
        },
    },


    uszanowanko: {
        eventImage: uszanowankoEventImage,
        videoSrc: "/videos/work/uszanowanko-programowanko.mp4",
        links: {
            eventPage:
                "https://uszanowanko.tsh.io/event/ten-ostatni-raz/",
            slides:
                "https://www.slideshare.net/slideshow/embed_code/key/jIXkjG8cj9ydz9",
            meetup:
                "https://www.meetup.com/pl-pl/uszanowanko-programowanko/events/296180121/?eventOrigin=group_past_events",
            linkedin:
                "https://www.linkedin.com/posts/monika-krysiak_dzi%C4%99kuj%C4%99-the-software-house-%C5%BCe-tydzie%C5%84-temu-activity-7122924070085509120-c24N?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcvFK4BGUjj3r8RDOCh-xB42SmujxCx2UU",
        },
    },

    owaspPolandDay2023: {
        eventImage: owaspPolandDay2023Image,
        speakerImage: owaspPolandDay2023SpeakerImage,
        links: {
            facebook:
                "https://www.facebook.com/OWASP.Poland/posts/czekamy-na-was-na-owasp-poland-day-2023/695215655963819/",
            eventbrite:
                "https://www.eventbrite.com/e/owasp-poland-day-2023-tickets-619776597487",
            linkedin:
                "https://www.linkedin.com/posts/monika-krysiak_dzi%C4%99kuj%C4%99-za-mo%C5%BCliwo%C5%9B%C4%87-wyst%C4%85pienia-na-owasp-activity-7115399759548313600-BpJm?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcvFK4BGUjj3r8RDOCh-xB42SmujxCx2UU",
        },
    },

    owaspKrakow: {
        eventImage: owaspKrakowEventImage,
        presentationImage: owaspKrakowPresentationImage,
        links: {
            meetup:
                "https://www.meetup.com/owasp-poland/events/299504715/",
            linkedinAnnouncement:
                "https://www.linkedin.com/posts/kubamackowski_owasp-meeting-in-krakow-security-in-development-activity-7171465969452736512-U6DO?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcvFK4BGUjj3r8RDOCh-xB42SmujxCx2UU",
            linkedinRecap:
                "https://www.linkedin.com/posts/monika-krysiak_bardzo-dzi%C4%99kuj%C4%99-wojciech-dworakowski-i-kuba-activity-7176196751056379905-oAzr?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcvFK4BGUjj3r8RDOCh-xB42SmujxCx2UU",
        },
    },
} as const;