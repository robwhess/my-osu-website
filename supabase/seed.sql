SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict rlDGVh7wCJUIM1v6t9Oy3RUMGUdBPbLPROrzM0blHuST9yQiOrMfbuOSoSsSCTB

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."course" ("id", "number", "title", "description", "created_at", "terms") VALUES
	('cs261', 'CS 261', 'Data Structures', 'Techniques for storing and organizing data in a program', '2024-10-15 22:33:20.527808+00', '{fall}'),
	('cs290', 'CS 290', 'Web Development', 'Fundamentals of full-stack web app development', '2024-10-15 22:35:40.088099+00', '{fall}'),
	('cs362', 'CS 362', 'Software Engineering II', 'Processes and techniques for maintaining high quality software', '2024-10-15 22:36:28.898808+00', '{spring}'),
	('cs480', 'CS 480', 'Translators', 'How to build a modern compiler', '2024-10-15 22:37:08.595432+00', '{}'),
	('cs492', 'CS 492', 'Mobile Software Development', 'Development of native mobile clients', '2024-10-15 22:37:49.346802+00', '{winter}'),
	('cs493', 'CS 493', 'Cloud Application Development', 'Tools and techniques for building an HTTP API', '2024-10-15 22:38:32.614224+00', '{spring}'),
	('cs494', 'CS 494', 'Advanced Web Development', 'Modern tools and techniques for developing web clients', '2024-10-15 22:39:10.871521+00', '{winter}');


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."person" ("id", "created_at", "name", "email") VALUES
	(1, '2024-10-15 22:26:40.078632+00', 'Rob Hess', 'hessro@oregonstate.edu'),
	(2, '2026-07-20 17:08:34.395849+00', 'Steve Feng', 'fengzi@oregonstate.edu'),
	(3, '2026-07-20 17:08:51.674989+00', 'Stanley Eng', 'engst@oregonstate.edu'),
	(4, '2026-07-20 17:09:19.179879+00', 'Shubhangi Pandey', 'pandeys@oregonstate.edu');


--
-- Data for Name: course_term; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."course_term" ("id", "created_at", "course_id", "year", "term", "instructor_id", "links", "syllabus") VALUES
	('cs362-sp26', '2026-07-01 02:49:33.625699+00', 'cs362', 2026, 'spring', 1, '{"{\"url\": \"https://outlook.office.com/book/CS362@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled\", \"title\": \"CS 362 grading demo appointments\", \"description\": \"Use this page to sign up for grading demos for all assignments.\"}","{\"url\": \"https://canvas.oregonstate.edu/courses/2039368\", \"title\": \"CS 362 on Canvas\"}","{\"url\": \"https://oregonstate.zoom.us/j/99350551124?pwd=dHqez0vKdPnABmJ7aMl4dNawhgtf7f.1\", \"title\": \"CS 362 on Zoom\", \"description\": \"All in-person lectures will be broadcast in this Zoom meeting.\"}","{\"url\": \"https://edstem.org/us/courses/96641\", \"title\": \"CS 362 on Ed\", \"description\": \"We will use Ed for course Q & A – you should be automatically enrolled if you''re enrolled for this course.\"}","{\"url\": \"https://github.com/osu-cs362-sp26\", \"title\": \"CS 362 on GitHub\", \"description\": \"Find all lecture code repos and your own private assignment repos here.\"}"}', 'cs362/cs362-sp26.md'),
	('cs493-sp26', '2026-06-01 21:08:26.390458+00', 'cs493', 2026, 'spring', 1, '{"{\"url\": \"https://outlook.office.com/book/CS493@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled\", \"title\": \"CS 493 grading demo appointments\", \"description\": \"Use this page to sign up for grading demos for all assignments.\"}","{\"url\": \"https://canvas.oregonstate.edu/courses/2066268\", \"title\": \"CS 493 on Canvas\"}","{\"url\": \"https://oregonstate.zoom.us/j/96017875949?pwd=RPj7neChAcucSbjAvp1wGdquaynQUk.1\", \"title\": \"CS 493 on Zoom\", \"description\": \"All in-person lectures will be broadcast in this Zoom meeting.\"}","{\"url\": \"https://edstem.org/us/courses/96642\", \"title\": \"CS 493 on Ed\", \"description\": \"We will use Ed for course Q & A – you should be automatically enrolled if you''re enrolled for this course.\"}","{\"url\": \"https://github.com/osu-cs493-sp26\", \"title\": \"CS 493 on GitHub\", \"description\": \"Find all lecture code repos and your own private assignment repos here.\"}"}', 'cs493/cs493-sp26.md');


--
-- Data for Name: assignment_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."assignment_group" ("id", "created_at", "title", "description", "course_term_id") VALUES
	(1, '2026-08-07 18:14:31.622957+00', 'Programming Assignments', 'Programming assignments will be managed via GitHub Classroom. Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself. The assignment repository will at a minimum contain a `README.md` file containing the assignment description. There may also be additional skeleton files in the repository to help you get started with the assignment. To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.', 'cs493-sp26'),
	(2, '2026-08-08 21:08:56.146269+00', 'Final Project', 'For the final project in this course, you will work in teams to implement a complete RESTful API. You can find more info below.', 'cs493-sp26'),
	(3, '2026-08-16 23:25:15.859846+00', 'Programming Assignments', 'Programming assignments will be managed via GitHub Classroom. Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself. The assignment repository will at a minimum contain a `README.md` file containing the assignment description. There may also be additional skeleton files in the repository to help you get started with the assignment. To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.', 'cs362-sp26'),
	(4, '2026-08-16 23:25:39.009015+00', 'Final Project', 'For the final project in this course, you will work in teams to write tests for an application and set up a CI/CD pipeline to automatically test and deploy that application. The project will have three deliverables: a document where you simply form your team; the code implementing your tests and CI/CD pipeline; and a brief evaluation of your project team. Links will be released below where you can find out more about each of these deliverables.', 'cs362-sp26');


--
-- Data for Name: assignment; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."assignment" ("id", "created_at", "title", "description", "url", "due", "notes", "assignment_group_id") VALUES
	(1, '2026-08-07 18:18:05.637808+00', 'Assignment 1', 'API design and server implementation', 'https://classroom.github.com/a/OwgHgxO4', '2026-04-20 23:59:00', '{"Extension deadline: **Wednesday, 4/22/2026, 11:59pm** (no submissions after this)","Grading demo due: **Monday 5/4/2026, 11:59pm**","[Sign up for a grading demo here](https://outlook.office.com/book/CS493@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled)"}', 1),
	(2, '2026-08-07 18:20:56.353248+00', 'Assignment 2', 'Using Prisma and a database for API data storage', 'https://classroom.github.com/a/YXlOoajG', '2026-05-04 23:59:00', '{"Extension deadline: **Wednesday, 5/6/2026, 11:59pm** (no submissions after this)","Grading demo due: **Monday 5/18/2026, 11:59pm**","[Sign up for a grading demo here](https://outlook.office.com/book/CS493@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled)"}', 1),
	(3, '2026-08-07 18:22:03.83655+00', 'Assignment 3', 'API authentication and authorization', 'https://classroom.github.com/a/E0D-cbn6', '2026-05-18 23:59:00', '{"Extension deadline: **Wednesday, 5/20/2026, 11:59pm** (no submissions after this)","Grading demo due: **Monday 6/1/2026, 11:59pm**","[Sign up for a grading demo here](https://outlook.office.com/book/CS493@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled)"}', 1),
	(4, '2026-08-07 18:23:31.920908+00', 'Assignment 4', 'File uploads, file storage, and offline work', 'https://classroom.github.com/a/wAW0DdYu', '2026-06-01 23:59:00', '{"Extension deadline: **Wednesday, 6/3/2026, 11:59pm** (no submissions after this)","Grading demo due: **Friday 6/12/2026, 11:59pm**","[Sign up for a grading demo here](https://outlook.office.com/book/CS493@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled)"}', 1),
	(5, '2026-08-16 23:17:58.548485+00', 'Final Project Details', NULL, 'https://docs.google.com/document/d/1YGEjcimmjZT43rtKAG0srJNIIfPhW5UyfvhmsVDdjL8/edit?usp=sharing', NULL, '{"This assignment contains all the details of the final project itself.","Code for the final project is due at the time of your grading demo, which will be during finals week."}', 2),
	(6, '2026-08-16 23:19:43.997764+00', 'Final Project Proposal', NULL, 'https://docs.google.com/document/d/1yvbRrest9UOuR0503C8lkzH9LrmzchH0_MTk01reiCA/edit?usp=sharing', '2026-05-15 23:59:00', '{"Use [this Ed thread](https://edstem.org/us/courses/96642/discussion/8023805) to help connect with potential teammates.","Submit [this form](https://forms.gle/kbxP4GFZfXoUEcpr5) if you just want to be assigned to a random team."}', 2),
	(7, '2026-08-16 23:20:53.485596+00', 'Final Project Team Evaluation', NULL, 'https://docs.google.com/document/d/1B_6DyUl61oh6e-IRJtCaihDJN8T9nNVn5t1T2PRHnGM/edit?usp=sharing', '2026-06-12 23:59:00', '{"Note that this must be completed individually by every member of your team."}', 2),
	(8, '2026-08-16 23:22:55.644479+00', 'Final Project Demo Signup', NULL, 'https://outlook.office.com/book/CS493@OregonStateUniversity.onmicrosoft.com/s/EsUPnR82RES4TAHp3yYMNg2?ismsaljsauthenabled', NULL, '{"Sign up for a final project demo appointment using the link above.","Sign up for one demo appointment per team.","All team members must attend your demo unless prior arrangements have been made with Hess.","Code is due on GitHub at the time of your demo.","Come to the demo prepared to run your project from one of your team''s computers.","Final project demos will be held in person in Hess''s office (KEC 1109).","Remote attendance at a final project demo is possible *by request only*. If you''d like to attend your demo remotely via Zoom, please submit [this form](https://docs.google.com/forms/d/e/1FAIpQLSdPO0QtTolmEi6dp8WyHqG2bNEeFwqYmu6_OV1nKd9UbgDALg/viewform) at least 24 hours in advance. Please submit the form only once per team."}', 2),
	(9, '2026-08-16 23:31:30.455572+00', 'Assignment 1', 'Using Git and GitHub', 'https://docs.google.com/document/d/1QlyJ39QUDJ6GmSreOhW1wKF2p5A9DU1z5yW_1N-FIio/edit?usp=sharing', '2025-04-13 23:59:00', '{"Extension deadline: **Wednesday, 4/15/2026, 11:59pm** (no submissions after this)","Grading demo due: **Monday 4/27/2026, 11:59pm**","[Sign up for a grading demo here](https://outlook.office.com/book/CS362@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled)"}', 3),
	(11, '2026-08-16 23:32:39.571535+00', 'Assignment 2', 'Unit Testing and TDD', 'https://classroom.github.com/a/gsTY5X-6', '2026-04-27 23:59:00', '{"Extension deadline: **Wednesday, 4/29/2026, 11:59pm** (no submissions after this)","Grading demo due: **Monday 5/11/2026, 11:59pm**","[Sign up for a grading demo here](https://outlook.office.com/book/CS362@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled)"}', 3),
	(12, '2026-08-16 23:33:30.210111+00', 'Assignment 3', 'Integration tests for UI-based apps', 'https://classroom.github.com/a/65qD1lXe', '2026-05-11 23:59:00', '{"Extension deadline: **Wednesday, 5/13/2026, 11:59pm** (no submissions after this)","Grading demo due: **Monday 5/25/2026, 11:59pm**","[Sign up for a grading demo here](https://outlook.office.com/book/CS362@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled)"}', 3),
	(13, '2026-08-16 23:34:06.654258+00', 'Assignment 4', 'End-to-end tests for a complete application', 'https://classroom.github.com/a/x6ITdvTZ', '2026-05-26 23:59:00', '{"Extension deadline: **Wednesday, 5/28/2026, 11:59pm** (no submissions after this)","Grading demo due: **Monday 6/8/2026, 11:59pm**","[Sign up for a grading demo here](https://outlook.office.com/book/CS362@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled)"}', 3),
	(14, '2026-08-16 23:36:56.241025+00', 'Final Project Details', NULL, 'https://docs.google.com/document/d/1wpWZreY88RZvuYE8lNw-Fxf4CQBBOxBDo17Xer9NBw4/edit?usp=sharing', NULL, '{"This assignment contains all the details of the final project itself.","Code for the final project is due at the time of your grading demo, which will be during finals week."}', 4),
	(15, '2026-08-16 23:38:31.731285+00', 'Final Project Team Formation', NULL, 'https://docs.google.com/document/d/1xq7d2upkZ-fcjHELIB-6mWCwHYPi9b5zCoesYyeIQ74/edit?usp=sharing', '2026-05-18 23:59:00', '{"Use [this Ed thread](https://edstem.org/us/courses/96641/discussion/8042692) to help connect with potential teammates.","Submit [this form](https://forms.gle/g87aPBC5k3LumPwu9) if you just want to be assigned to a random team."}', 4),
	(16, '2026-08-16 23:39:36.726433+00', 'Final Project Team Evaluation', NULL, 'https://docs.google.com/document/d/1P93ZMRuFwJ6Fl_CNbM7xgusTDkH4jhfdrI98sc2LiVc/edit?usp=sharing', '2026-06-12 23:59:00', '{"Note that this must be completed individually by every member of your team."}', 4),
	(17, '2026-08-16 23:40:39.489901+00', 'Final Project Demo Signup', NULL, 'https://outlook.office.com/book/CS362@OregonStateUniversity.onmicrosoft.com/s/W3KzwpYqAEKbXTcp09l8MQ2?ismsaljsauthenabled', NULL, '{"Sign up for a final project demo appointment using the link above.","Sign up for one demo appointment per team.","All team members must attend your demo unless prior arrangements have been made with Hess.","Code is due on GitHub at the time of your demo.","Come to the demo prepared to run your project from one of your team''s computers.","Final project demos will be held in person in Hess''s office (KEC 1109).","Remote attendance at a final project demo is possible *by request only*. If you''d like to attend your demo remotely via Zoom, please submit [this form](https://docs.google.com/forms/d/e/1FAIpQLSfOCl8ibW9zEubiKUSLZsPGoU_CUOKM1ZLZgO_o9IK4BCfi-Q/viewform) at least 24 hours in advance. Please submit the form only once per team."}', 4);


--
-- Data for Name: hours; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."hours" ("id", "created_at", "day", "start", "end", "location", "videoconference_link", "extra_info", "type", "person_id", "course_term_id") VALUES
	(1, '2024-10-15 22:27:43.04173+00', 'Wednesday', '11:05:00', '12:30:00', 'KEC 1109', NULL, NULL, 'office', 1, NULL),
	(2, '2024-10-15 22:28:34.879354+00', 'Thursday', '14:30:00', '16:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/589990808?pwd=ViszY2Z4eGtoUDh4NEw0QWkzckJMQT09', NULL, 'office', 1, NULL),
	(3, '2026-07-20 17:12:30.547447+00', 'Monday', '08:00:00', '10:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/3821452144?pwd=MkwyS0NCWkI1K2JFWVhNSzZBNFNaUT09', NULL, 'office', 4, 'cs493-sp26'),
	(4, '2026-07-20 17:13:39.077055+00', 'Wednesday', '09:00:00', '10:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/3821452144?pwd=MkwyS0NCWkI1K2JFWVhNSzZBNFNaUT09', NULL, 'office', 4, 'cs493-sp26'),
	(5, '2026-07-20 17:14:13.783286+00', 'Tuesday', '09:00:00', '12:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/3821452144?pwd=MkwyS0NCWkI1K2JFWVhNSzZBNFNaUT09', NULL, 'grading', 4, 'cs493-sp26'),
	(6, '2026-07-20 17:14:48.625375+00', 'Thursday', '09:00:00', '12:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/3821452144?pwd=MkwyS0NCWkI1K2JFWVhNSzZBNFNaUT09', NULL, 'grading', 4, 'cs493-sp26'),
	(7, '2026-07-20 17:15:19.707594+00', 'Friday', '08:00:00', '12:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/3821452144?pwd=MkwyS0NCWkI1K2JFWVhNSzZBNFNaUT09', NULL, 'grading', 4, 'cs493-sp26'),
	(8, '2026-07-20 17:16:26.358261+00', 'Monday', '08:30:00', '10:30:00', 'Zoom', 'https://oregonstate.zoom.us/j/6643017248?pwd=ZVlzTDIvQVYrUnp1WFllRitsU1lwQT09', NULL, 'office', 2, 'cs362-sp26'),
	(9, '2026-07-20 17:16:58.1448+00', 'Tuesday', '08:30:00', '10:30:00', 'Zoom', 'https://oregonstate.zoom.us/j/6643017248?pwd=ZVlzTDIvQVYrUnp1WFllRitsU1lwQT09', NULL, 'office', 2, 'cs362-sp26'),
	(10, '2026-07-20 17:17:43.602908+00', 'Wednesday', '13:00:00', '16:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/6643017248?pwd=ZVlzTDIvQVYrUnp1WFllRitsU1lwQT09', NULL, 'grading', 2, 'cs362-sp26'),
	(11, '2026-07-20 17:18:20.389696+00', 'Thursday', '13:00:00', '16:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/6643017248?pwd=ZVlzTDIvQVYrUnp1WFllRitsU1lwQT09', NULL, 'grading', 2, 'cs362-sp26'),
	(12, '2026-07-20 17:18:52.09546+00', 'Friday', '08:30:00', '12:30:00', 'Zoom', 'https://oregonstate.zoom.us/j/6643017248?pwd=ZVlzTDIvQVYrUnp1WFllRitsU1lwQT09', NULL, 'grading', 2, 'cs362-sp26'),
	(13, '2026-07-20 17:19:24.46901+00', 'Monday', '11:00:00', '12:00:00', 'KEC Atrium', NULL, NULL, 'office', 3, 'cs362-sp26'),
	(14, '2026-07-20 17:19:53.833703+00', 'Wednesday', '10:00:00', '11:00:00', 'KEC Atrium', NULL, NULL, 'office', 3, 'cs362-sp26'),
	(15, '2026-07-20 17:20:25.044235+00', 'Tuesday', '10:00:00', '11:30:00', 'KEC Atrium', NULL, NULL, 'grading', 3, 'cs362-sp26'),
	(16, '2026-07-20 17:20:55.613067+00', 'Thursday', '10:00:00', '11:30:00', 'KEC Atrium', NULL, NULL, 'grading', 3, 'cs362-sp26');


--
-- Data for Name: lecture; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."lecture" ("id", "created_at", "section", "day", "start", "end", "location", "videoconference_link", "extra_info", "location_link", "course_term_id", "crn") VALUES
	(2, '2026-07-01 02:51:48.924317+00', '001', 'Mon, Wed', '16:00:00', '17:50:00', 'LPSC 125', 'https://oregonstate.zoom.us/j/99350551124?pwd=dHqez0vKdPnABmJ7aMl4dNawhgtf7f.1', NULL, 'https://map.oregonstate.edu/?id=2243#!m/1027734?share', 'cs362-sp26', 52342),
	(1, '2026-06-30 20:01:07.080816+00', '001', 'Mon, Wed', '12:00:00', '13:50:00', 'ROG 230', 'https://oregonstate.zoom.us/j/96017875949?pwd=RPj7neChAcucSbjAvp1wGdquaynQUk.1', NULL, 'https://map.oregonstate.edu/?id=2243#!m/1027606?share', 'cs493-sp26', 61444);


--
-- Data for Name: textbook; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."textbook" ("id", "created_at", "title", "author", "link", "description", "course_term_id") VALUES
	(1, '2026-07-04 15:36:49.372502+00', 'No textbook for this course', NULL, NULL, 'Readings will come from a curated collection of articles and documentation from the internet.', 'cs493-sp26');


--
-- Data for Name: topic; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."topic" ("id", "created_at", "title", "weeks", "materials", "readings", "is_current", "course_term_id") VALUES
	(1, '2026-08-02 04:00:24.698846+00', 'API Rate Limiting and Redis', '{7}', '{"{\"url\": \"https://docs.google.com/document/d/1UViQCrmRRntELmNsqVT89vuFpuoU_M13py-VS_5CJxI/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs493-sp26/rate-limiting\", \"title\": \"Example code\", \"description\": \"GitHub repo for code written in lecture\"}"}', '{"{\"url\": \"https://stripe.com/blog/rate-limiters\", \"title\": \"Scaling your API with rate limiters\", \"description\": \"Paul Tarjan (Stripe Engineering Blog)\"}","{\"url\": \"https://blog.figma.com/an-alternative-approach-to-rate-limiting-f8a06cf7c94c\", \"title\": \"An alternative approach to rate limiting\", \"description\": \"Nikrad Mahdi (Figma Design Blog)\"}","{\"url\": \"https://en.wikipedia.org/wiki/Token_bucket\", \"title\": \"Token bucket\", \"description\": \"Wikipedia\"}","{\"url\": \"https://redis.io/topics/data-types-intro\", \"title\": \"An introduction to Redis data types and abstractions\", \"description\": \"Redis docs\"}","{\"url\": \"https://redis.io/commands\", \"title\": \"Redis commands\", \"description\": \"Redis docs\"}"}', false, 'cs493-sp26'),
	(2, '2026-08-02 04:00:24.701562+00', 'Performing Offline Work with RabbitMQ', '{8,9}', '{"{\"url\": \"https://docs.google.com/document/d/1NYUXJIECZp33r8dAIdXNcZh5OBRRPlC6kGRvSmsF0EQ/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs493-sp26/offline-work\", \"title\": \"Example code\", \"description\": \"GitHub repo for code written in lecture\"}"}', '{"{\"url\": \"https://aws.amazon.com/message-queue/\", \"title\": \"Message Queues\", \"description\": \"AWS Docs\"}","{\"url\": \"https://aws.amazon.com/pub-sub-messaging/\", \"title\": \"Pub/Sub Messaging\", \"description\": \"AWS Docs\"}","{\"url\": \"https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html\", \"title\": \"\\\"Hello World!\\\"\", \"description\": \"RabbitMQ Tutorials\"}","{\"url\": \"https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html\", \"title\": \"Work Queues\", \"description\": \"RabbitMQ Tutorials\"}"}', false, 'cs493-sp26'),
	(3, '2026-08-02 04:00:24.702295+00', 'API Authentication and Authorization', '{6}', '{"{\"url\": \"https://docs.google.com/document/d/1uQjeMG2GtLFSdB0yBdkZroKojnuaCykt_6Tl4c09E2s/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs493-sp26/auth\", \"title\": \"Example code\", \"description\": \"GitHub repo for code written in lecture\"}"}', '{"{\"url\": \"https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52\", \"title\": \"Securing Node.js RESTful APIs with JSON Web Tokens\", \"description\": \"Adnan Rahić (freeCodeCamp.org)\"}","{\"url\": \"https://jwt.io/introduction/\", \"title\": \"Introduction to JSON Web Tokens\", \"description\": \"JWT.IO\"}","{\"url\": \"https://en.wikipedia.org/wiki/JSON_Web_Token\", \"title\": \"JSON Web Token\", \"description\": \"Wikipedia\"}","{\"url\": \"https://www.npmjs.com/package/bcryptjs\", \"title\": \"bcrypt.js\", \"description\": \"npm\"}"}', false, 'cs493-sp26'),
	(4, '2026-08-02 04:00:24.702628+00', 'Course Intro', '{1}', '{"{\"url\": \"https://docs.google.com/document/d/1L9pKt1GmBeBiQgTWswDkgwPHLW9mRz4ObrNDXGBp97s/edit?usp=sharing\", \"title\": \"Lecture notes\"}"}', '{"{\"url\": \"https://restfulapi.net/\", \"title\": \"What is REST\", \"description\": \"restfulapi.net\"}","{\"url\": \"https://git-scm.com/book/en/v2\", \"title\": \"Chapters 1 and 2\", \"description\": \"Pro Git\"}"}', false, 'cs493-sp26'),
	(5, '2026-08-02 04:00:24.702889+00', 'RESTful API Design', '{1,2}', '{"{\"url\": \"https://docs.google.com/document/d/1AYg6cE2JYTkDvu0JxiyNbNFrMc3fZxQqoHZqim81voM/edit?usp=sharing\", \"title\": \"Lecture notes\"}"}', '{"{\"url\": \"https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/\", \"title\": \"Best practices for REST API design\", \"description\": \"John Au-Yeung and Ryan Donovan (The Overflow, the Stack Overflow blog)\"}","{\"url\": \"https://www.oreilly.com/learning/how-to-design-a-restful-api-architecture-from-a-human-language-spec\", \"title\": \"How to design a RESTful API architecture from a human-language spec\", \"description\": \"Filipe Ximenes and Flávio Juvenal (O''Reilly)\"}","{\"url\": \"https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design\", \"title\": \"API Design\", \"description\": \"Microsoft\"}"}', false, 'cs493-sp26'),
	(6, '2026-08-02 04:00:24.703378+00', 'Setting up a GraphQL API with Apollo', '{10}', '{"{\"url\": \"https://docs.google.com/document/d/1p8oSwiijRUdVYj3arF4O2j0OLZFN73ejKAdxV7mwrt4/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs493-sp26/graphql-api\", \"title\": \"Example code\", \"description\": \"GitHub repo for code written in lecture\"}"}', '{"{\"url\": \"https://graphql.org/learn/queries/\", \"title\": \"Queries and Mutations\", \"description\": \"GraphQL Docs\"}","{\"url\": \"https://www.apollographql.com/docs/apollo-server\", \"title\": \"Introduction to Apollo Server\", \"description\": \"Apollo Docs\"}","{\"url\": \"https://www.apollographql.com/docs/apollo-server/schema/schema/\", \"title\": \"Schema basics\", \"description\": \"Apollo Docs\"}","{\"url\": \"https://www.apollographql.com/docs/apollo-server/data/resolvers\", \"title\": \"Resolvers\", \"description\": \"Apollo Docs\"}","{\"url\": \"https://www.apollographql.com/docs/apollo-server/integrations/mern\", \"title\": \"Teaching the MERN stack to speak GraphQL\", \"description\": \"Apollo Docs\"}","{\"url\": \"https://www.apollographql.com/docs/apollo-server/api/express-middleware\", \"title\": \"API Reference: expressMiddleware\", \"description\": \"Apollo docs\"}","{\"url\": \"https://www.apollographql.com/docs/apollo-server/api/apollo-server\", \"title\": \"API Reference: ApolloServer\", \"description\": \"Apollo docs\"}"}', false, 'cs493-sp26'),
	(7, '2026-08-02 04:00:24.703531+00', 'Containerization with Docker', '{3}', '{"{\"url\": \"https://docs.google.com/document/d/1XhtakMCZU1CH-ZX4Q_5z1EPzL3lo5oQ2E-NDkG4R4sM/edit?usp=sharing\", \"title\": \"Lecture notes\"}"}', '{"{\"url\": \"https://docs.docker.com/engine/docker-overview/\", \"title\": \"Docker overview\", \"description\": \"Docker docs\"}","{\"url\": \"https://docs.docker.com/get-started/\", \"title\": \"Get started with Docker\", \"description\": \"Docker docs\"}","{\"url\": \"https://docs.docker.com/engine/reference/builder/\", \"title\": \"Dockerfile reference\", \"description\": \"Docker docs\"}","{\"url\": \"https://docs.docker.com/storage/volumes/\", \"title\": \"Use volumes\", \"description\": \"Docker docs\"}","{\"url\": \"https://docs.docker.com/network/\", \"title\": \"Networking overview\", \"description\": \"Docker docs\"}","{\"url\": \"https://docs.docker.com/network/network-tutorial-standalone/\", \"title\": \"Networking with standalone containers\", \"description\": \"Docker docs\"}","{\"url\": \"https://docs.docker.com/compose/overview/\", \"title\": \"Overview of Docker Compose\", \"description\": \"Docker docs\"}","{\"url\": \"https://docs.docker.com/compose/compose-file/\", \"title\": \"Compose file version 3 reference\", \"description\": \"Docker docs\"}"}', false, 'cs493-sp26'),
	(12, '2026-08-02 04:00:26.443081+00', 'Course Intro', '{1}', '{"{\"url\": \"https://docs.google.com/document/d/1xX6GRthVDqvTK1GCeAAkHCdKH6GNv4x-1L6ngAuMQPo/edit?usp=sharing\", \"title\": \"Lecture notes\"}"}', '{"{\"url\": \"https://abseil.io/resources/swe-book/html/ch01.html\", \"title\": \"What is Software Engineering\", \"description\": \"Titus Waters (Chapter 1 of Software Engineering at Google)\"}"}', false, 'cs362-sp26'),
	(8, '2026-08-02 04:00:24.703761+00', 'Working with a Database using Prisma ORM', '{4,5}', '{"{\"url\": \"https://docs.google.com/document/d/1ZjXZg-OEGnX0J8tUaML0wA33fABdjgTW52brr-k3v5s/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs493-sp26/using-prisma\", \"title\": \"Example code\", \"description\": \"GitHub repo for code written in lecture\"}"}', '{"{\"url\": \"https://www.prisma.io/docs/orm\", \"title\": \"Introduction to Prisma ORM\", \"description\": \"Prisma Docs\"}","{\"url\": \"https://hub.docker.com/_/postgres\", \"title\": \"Official Postgres Image\", \"description\": \"Docker Hub\"}","{\"url\": \"https://neon.com/postgresql/tutorial\", \"title\": \"PostgreSQL Tutorial\", \"description\": \"Neon\"}","{\"url\": \"https://www.prisma.io/docs/orm/prisma-schema/overview\", \"title\": \"Overview of Prisma Schema\", \"description\": \"Prisma Docs\"}","{\"url\": \"https://www.prisma.io/docs/orm/more/best-practices\", \"title\": \"Prisma Best Practices\", \"description\": \"Prisma Docs\"}","{\"url\": \"https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/mental-model\", \"title\": \"Understanding Migrations\", \"description\": \"Prisma Docs\"}","{\"url\": \"https://www.prisma.io/docs/orm/prisma-client/queries/crud\", \"title\": \"CRUD\", \"description\": \"Prisma Docs\"}","{\"url\": \"https://zod.dev/basics\", \"title\": \"Zod Basic Usage\", \"description\": \"Zod Docs\"}","{\"url\": \"https://expressjs.com/en/guide/error-handling.html\", \"title\": \"Express Error Handling\", \"description\": \"Express Docs\"}","{\"url\": \"https://www.prisma.io/docs/v6/orm/prisma-client/queries/pagination\", \"title\": \"Pagination in Prisma\", \"description\": \"Prisma Docs\"}","{\"url\": \"https://www.prisma.io/docs/orm/prisma-schema/data-model/relations\", \"title\": \"Relations in Prisma\", \"description\": \"Prisma Docs\"}"}', false, 'cs493-sp26'),
	(19, '2026-08-02 04:00:26.445352+00', 'Unit Testing and the Jest Testing Framework', '{3}', '{"{\"url\": \"https://docs.google.com/document/d/1kTbcXqFVreDtsG2fbncoZ77Z5YiQobCn18Nibu4Lt50/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs362-sp26/unit-testing-with-jest\", \"title\": \"Example code\", \"description\": \"code written during lecture\"}"}', '{"{\"url\": \"https://abseil.io/resources/swe-book/html/ch12.html\", \"title\": \"Unit Testing\", \"description\": \"Erik Kuefler (Chapter 12 of Software Engineering at Google)\"}","{\"url\": \"https://jestjs.io/docs/getting-started\", \"title\": \"Getting Started with Jest\", \"description\": \"Jest Docs\"}","{\"url\": \"https://jestjs.io/docs/using-matchers\", \"title\": \"Using Matchers\", \"description\": \"Jest Docs\"}","{\"url\": \"https://robertmarshall.dev/blog/arrange-act-and-assert-pattern-the-three-as-of-unit-testing/\", \"title\": \"Arrange, Act and Assert Pattern: The Three A''s of Unit Testing\", \"description\": \"Robert Marshall\"}","{\"url\": \"https://cpojer.net/posts/building-a-javascript-testing-framework#building-a-testing-framework\", \"title\": \"Building a JavaScript Testing Framework\", \"description\": \"Christoph Nakazawa\"}"}', false, 'cs362-sp26'),
	(9, '2026-08-02 04:00:24.703836+00', 'Storing File Data', '{7}', '{"{\"url\": \"https://docs.google.com/document/d/1FD1RY28hHCzeIirL1r9eMtTqr-fa4biBG7e-tKXpub8/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs493-sp26/file-storage\", \"title\": \"Example code\", \"description\": \"GitHub repo for code written in lecture\"}"}', '{"{\"url\": \"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST\", \"title\": \"POST (info on multipart form-data)\", \"description\": \"MDN\"}","{\"url\": \"https://expressjs.com/en/resources/middleware/multer.html\", \"title\": \"Multer\", \"description\": \"Express docs\"}","{\"url\": \"https://www.mongodb.com/blog/post/building-mongodb-applications-binary-files-using-gridfs-part-2\", \"title\": \"Building MongoDB Applications with Binary Files Using GridFS: Part 2\", \"description\": \"Jay Runkel (MongoDB blog)\"}","{\"url\": \"https://docs.mongodb.com/manual/core/gridfs/\", \"title\": \"GridFS\", \"description\": \"MongoDB docs\"}","{\"url\": \"http://mongodb.github.io/node-mongodb-native/3.2/tutorials/gridfs/streaming/\", \"title\": \"The GridFS API\", \"description\": \"MongoDB Node.js driver docs\"}","{\"url\": \"https://nodejs.org/api/stream.html\", \"title\": \"Stream\", \"description\": \"Node.js docs\"}"}', false, 'cs493-sp26'),
	(17, '2026-08-02 04:00:26.445255+00', 'UI-Based Integration Testing', '{4,5}', '{"{\"url\": \"https://docs.google.com/document/d/1Q9ih-CIUsUwnsaCUhjjIaP05gCvC7Ftr9sUZvsPpn8g/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs362-sp26/ui-integration-testing\", \"title\": \"Example code\", \"description\": \"code written during lecture\"}"}', '{"{\"url\": \"https://github.com/jsdom/jsdom#readme\", \"title\": \"JSDOM\"}","{\"url\": \"https://jestjs.io/docs/tutorial-jquery\", \"title\": \"DOM Manipulation\", \"description\": \"Jest Docs\"}","{\"url\": \"https://testing-library.com/docs/dom-testing-library/intro\", \"title\": \"DOM Testing Library Introduction\", \"description\": \"Testing Library Docs\"}","{\"url\": \"https://testing-library.com/docs/user-event/intro\", \"title\": \"User Event Library Introduction\", \"description\": \"Testing Library Docs\"}","{\"url\": \"https://github.com/testing-library/jest-dom#readme\", \"title\": \"jest-dom\"}","{\"url\": \"https://jestjs.io/docs/snapshot-testing\", \"title\": \"Snapshot Testing\", \"description\": \"Jest Docs\"}"}', false, 'cs362-sp26'),
	(10, '2026-08-02 04:00:24.704036+00', 'Setting up a Server with Node.js and Express', '{2,3}', '{"{\"url\": \"https://docs.google.com/document/d/1Bxlcxy1A4jqa0Mqu1AZKr4f27b4I5E3yRFj4uosdMGQ/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs493-sp26/server-setup\", \"title\": \"Example code\", \"description\": \"GitHub repo for code written in lecture\"}"}', '{"{\"url\": \"http://eloquentjavascript.net/20_node.html\", \"title\": \"Node.js\", \"description\": \"Eloquent Javascript, Chapter 20\"}","{\"url\": \"https://docs.npmjs.com/getting-started/installing-npm-packages-locally\", \"title\": \"How to Install Local Packages\", \"description\": \"npm docs\"}","{\"url\": \"https://docs.npmjs.com/getting-started/using-a-package.json\", \"title\": \"Working with package.json\", \"description\": \"npm docs\"}","{\"url\": \"https://expressjs.com/en/starter/hello-world.html\", \"title\": \"Hello world example\", \"description\": \"Express docs\"}","{\"url\": \"https://expressjs.com/en/starter/basic-routing.html\", \"title\": \"Basic routing\", \"description\": \"Express docs\"}","{\"url\": \"https://expressjs.com/en/guide/routing.html\", \"title\": \"Routing\", \"description\": \"Express docs\"}","{\"url\": \"https://expressjs.com/en/guide/writing-middleware.html\", \"title\": \"Writing middleware for use in Express apps\", \"description\": \"Express docs\"}","{\"url\": \"https://www.getpostman.com/docs/postman/sending_api_requests/requests\", \"title\": \"Requests\", \"description\": \"Postman\"}","{\"url\": \"https://www.getpostman.com/docs/postman/sending_api_requests/responses\", \"title\": \"Responses\", \"description\": \"Postman\"}","{\"url\": \"https://www.getpostman.com/docs/postman/scripts/test_scripts\", \"title\": \"Test scripts\", \"description\": \"Postman\"}","{\"url\": \"https://www.getpostman.com/docs/postman/scripts/test_examples\", \"title\": \"Test examples\", \"description\": \"Postman\"}"}', false, 'cs493-sp26'),
	(11, '2026-08-02 04:00:26.443326+00', 'A Team-Based Workflow for using Git and GitHub', '{7}', '{"{\"url\": \"https://docs.google.com/document/d/1Uzencnr7c6dorZvG53g27G57B8lIowoctNTZosUsiuM/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs362-sp26/github-flow\", \"title\": \"Example code\", \"description\": \"code written during lecture\"}"}', '{"{\"url\": \"https://abseil.io/resources/swe-book/html/ch09.html\", \"title\": \"Code Review\", \"description\": \"Tom Manshreck and Caitlin Sadowski (Chapter 9 of Software Engineering at Google)\"}","{\"url\": \"https://docs.github.com/en/get-started/quickstart/github-flow\", \"title\": \"GitHub flow\", \"description\": \"GitHub Docs\"}","{\"url\": \"https://githubflow.github.io/\", \"title\": \"GitHub Flow\"}","{\"url\": \"https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow\", \"title\": \"Git Feature Branch Workflow\", \"description\": \"Atlassian\"}","{\"url\": \"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell\", \"title\": \"Git Branches - Branching in a Nutshell\", \"description\": \"Pro Git\"}","{\"url\": \"https://www.atlassian.com/git/tutorials/using-branches/git-merge\", \"title\": \"Git Merge\", \"description\": \"Atlassian\"}","{\"url\": \"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests\", \"title\": \"About pull requests\", \"description\": \"GitHub Docs\"}","{\"url\": \"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches\", \"title\": \"About protected branches\", \"description\": \"GitHub Docs\"}"}', false, 'cs362-sp26'),
	(13, '2026-08-02 04:00:26.443421+00', 'Git and GitHub: An Individual''s Perspective', '{1,2}', '{"{\"url\": \"https://docs.google.com/document/d/1OvD4CHSYbJ7fWG6NtoLE5ekia6RnKJRRCS-OSUN8XZM/edit?usp=sharing\", \"title\": \"Lecture notes\"}"}', '{"{\"url\": \"https://git-scm.com/book/en/v2/\", \"title\": \"Getting Started [with Git]\", \"description\": \"Chapter 1 of Pro Git by Scott Chacon and Ben Straub\"}","{\"url\": \"https://git-scm.com/book/en/v2/\", \"title\": \"Git Basics\", \"description\": \"Chapter 2 of Pro Git by Scott Chacon and Ben Straub\"}","{\"url\": \"https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet\", \"title\": \"Git cheat sheet\", \"description\": \"Atlassian\"}","{\"url\": \"https://training.github.com/\", \"title\": \"Git cheat sheet\", \"description\": \"GitHub\"}","{\"url\": \"https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts\", \"title\": \"Git merge conflicts\", \"description\": \"Atlassian\"}"}', false, 'cs362-sp26'),
	(15, '2026-08-02 04:00:26.443162+00', 'Test-Driven Development: A Case Study', '{4}', '{"{\"url\": \"https://docs.google.com/document/d/1cCiUGRj5IBUTbWgyXwS8j4b5kwA4VlsrsTls7exuX48/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs362-sp26/tdd-case-study\", \"title\": \"Example code\", \"description\": \"code written during lecture\"}"}', '{"{\"url\": \"https://www.jamesshore.com/v2/books/aoad2/test-driven_development\", \"title\": \"Test-Driven Development\", \"description\": \"James Shore and Shane Warden (from The Art of Agile Development)\"}","{\"url\": \"https://www.jamesshore.com/v2/projects/lunch-and-learn/incremental-tdd\", \"title\": \"Incremental Test-Driven Development\", \"description\": \"James Shore\"}","{\"url\": \"https://kentcdodds.com/blog/when-i-follow-tdd\", \"title\": \"When I follow TDD\", \"description\": \"Kent C. Dodds\"}"}', false, 'cs362-sp26'),
	(18, '2026-08-02 04:00:26.445011+00', 'End-to-End Testing with Cypress', '{7,8}', '{"{\"url\": \"https://docs.google.com/document/d/1YQK068Fpqllgw_6ZJ4sZvSlNS1b2QM3N8I_nQMpE_cg/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs362-sp26/e2e-testing\", \"title\": \"Example code\", \"description\": \"code written during lecture\"}"}', '{"{\"url\": \"https://abseil.io/resources/swe-book/html/ch14.html\", \"title\": \"Larger Testing\", \"description\": \"Joseph Graves (Chapter 14 of Software Engineering at Google)\"}","{\"url\": \"https://docs.cypress.io/guides/core-concepts/introduction-to-cypress\", \"title\": \"Introduction to Cypress\", \"description\": \"Cypress Docs\"}","{\"url\": \"https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests\", \"title\": \"Writing and Organizing Tests\", \"description\": \"Cypress Docs\"}","{\"url\": \"https://docs.cypress.io/guides/end-to-end-testing/testing-your-app\", \"title\": \"Testing Your App\", \"description\": \"Cypress Docs\"}","{\"url\": \"https://docs.cypress.io/guides/references/assertions\", \"title\": \"Assertions\", \"description\": \"Cypress Docs\"}","{\"url\": \"https://testing-library.com/docs/cypress-testing-library/intro\", \"title\": \"Cypress Testing Library\", \"description\": \"Testing Library Docs\"}","{\"url\": \"https://docs.cypress.io/guides/references/best-practices\", \"title\": \"Best Practices\", \"description\": \"Cypress Docs\"}"}', false, 'cs362-sp26'),
	(16, '2026-08-02 04:00:26.445176+00', 'Test Doubles', '{5,6}', '{"{\"url\": \"https://docs.google.com/document/d/1NB775R2seFx5YmMeDeiCEnTCw3uGoEzDKGcHjkYAAvI/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs362-sp26/test-doubles\", \"title\": \"Example code\", \"description\": \"code written during lecture\"}"}', '{"{\"url\": \"https://abseil.io/resources/swe-book/html/ch13.html\", \"title\": \"Test Doubles\", \"description\": \"Andrew Trenk and Dillon Bly (Chapter 13 of Software Engineering at Google)\"}","{\"url\": \"https://martinfowler.com/bliki/TestDouble.html\", \"title\": \"TestDouble\", \"description\": \"Martin Fowler\"}","{\"url\": \"https://martinfowler.com/articles/mocksArentStubs.html\", \"title\": \"Mocks Aren''t Stubs\", \"description\": \"Martin Fowler\"}","{\"url\": \"http://xunitpatterns.com/Test%20Double.html\", \"title\": \"Test Double\", \"description\": \"xUnit Patterns\"}","{\"url\": \"https://jestjs.io/docs/mock-functions\", \"title\": \"Mock Functions\", \"description\": \"Jest Documentation\"}","{\"url\": \"https://mswjs.io/docs/\", \"title\": \"Introduction to Mock Service Worker\", \"description\": \"MSW Documentation\"}"}', false, 'cs362-sp26'),
	(20, '2026-08-02 04:00:26.445526+00', 'Software Testing Fundamentals', '{2}', '{"{\"url\": \"https://docs.google.com/document/d/1aCfeMbS_DJxe-ZorQMee3oPXvRsKWPKxu2XxaBnqHhc/edit?usp=sharing\", \"title\": \"Lecture notes\"}"}', '{"{\"url\": \"https://abseil.io/resources/swe-book/html/ch11.html\", \"title\": \"Testing Overview\", \"description\": \"Adam Bender (Chapter 11 of Software Engineering at Google)\"}","{\"url\": \"https://testing.googleblog.com/2013/08/testing-on-toilet-test-behavior-not.html\", \"title\": \"Test Behavior, Not Implementation\", \"description\": \"Andrew Trenk (Google Testing Blog)\"}","{\"url\": \"https://learn.microsoft.com/en-us/training/modules/visual-studio-test-concepts/4-different-types-of-testing\", \"title\": \"Different types of testing and the testing pyramid\", \"description\": \"Microsoft Training\"}","{\"url\": \"https://martinfowler.com/bliki/TestPyramid.html\", \"title\": \"TestPyramid\", \"description\": \"Martin Fowler\"}","{\"url\": \"https://kentcdodds.com/blog/write-tests\", \"title\": \"Write Tests.  Not too many.  Mostly integration.\", \"description\": \"Kent C. Dodds\"}","{\"url\": \"https://www.jamesshore.com/v2/books/aoad2/test-driven_development\", \"title\": \"Test-Driven Development\", \"description\": \"James Shore and Shane Warden (from The Art of Agile Development)\"}"}', false, 'cs362-sp26'),
	(14, '2026-08-02 04:00:26.444369+00', 'Continuous Integration and Continuous Delivery with GitHub Actions', '{9,10}', '{"{\"url\": \"https://docs.google.com/document/d/1q64GcApt1mikM2FGEq_kgh_eFS5gXZBen8D0FFsGXk0/edit?usp=sharing\", \"title\": \"Lecture notes\"}","{\"url\": \"https://github.com/osu-cs362-sp26/ci-cd\", \"title\": \"Example code\", \"description\": \"code written during lecture\"}"}', '{"{\"url\": \"https://abseil.io/resources/swe-book/html/ch23.html\", \"title\": \"Continuous Integration\", \"description\": \"Rachel Tannenbaum (Chapter 23 of Software Engineering at Google)\"}","{\"url\": \"https://www.martinfowler.com/articles/continuousIntegration.html\", \"title\": \"Continuous Integration\", \"description\": \"Martin Fowler\"}","{\"url\": \"https://abseil.io/resources/swe-book/html/ch24.html\", \"title\": \"Continuous Delivery\", \"description\": \"Radha Narayan, Bobbi Jones, Sheri Shipe, and David Owens (Chapter 24 of Software Engineering at Google)\"}","{\"url\": \"https://martinfowler.com/bliki/ContinuousDelivery.html\", \"title\": \"Continuous Delivery\", \"description\": \"Martin Fowler\"}","{\"url\": \"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions\", \"title\": \"Understanding GitHub Actions\", \"description\": \"GitHub Docs\"}","{\"url\": \"https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts\", \"title\": \"Storing workflow data as artifacts\", \"description\": \"GitHub Docs\"}","{\"url\": \"https://docs.github.com/en/actions/using-workflows/reusing-workflows\", \"title\": \"Reusing workflows\", \"description\": \"GitHub Docs\"}"}', false, 'cs362-sp26');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id", "type") VALUES
	('syllabus', 'syllabus', NULL, '2026-08-06 00:04:04.264753+00', '2026-08-06 00:04:04.264753+00', true, false, NULL, '{text/markdown}', NULL, 'STANDARD');


--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: iceberg_namespaces; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: iceberg_tables; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id", "user_metadata") VALUES
	('cc33e623-bcff-4d0b-80a8-6c8fa45f4bff', 'syllabus', 'cs362/cs362-sp26.md', NULL, '2026-08-06 00:04:37.374775+00', '2026-08-06 00:04:37.374775+00', '2026-08-06 00:04:37.374775+00', '{"eTag": "\"3f01373d26197bbfd32d5461c7ac0132\"", "size": 15194, "mimetype": "text/markdown", "cacheControl": "max-age=3600", "lastModified": "2026-08-06T00:04:37.371Z", "contentLength": 15194, "httpStatusCode": 200}', '23981b59-84a7-400b-9bd9-81b4edac0cce', NULL, NULL),
	('5314a269-4666-463b-905a-3ddcc9be0a82', 'syllabus', 'cs493/cs493-sp26.md', NULL, '2026-08-06 00:04:51.271525+00', '2026-08-06 00:04:51.271525+00', '2026-08-06 00:04:51.271525+00', '{"eTag": "\"532d7734399d51b8267150ecf639488f\"", "size": 15674, "mimetype": "text/markdown", "cacheControl": "max-age=3600", "lastModified": "2026-08-06T00:04:51.269Z", "contentLength": 15674, "httpStatusCode": 200}', 'b69fb460-9621-468a-8e50-ccd9b3da4a93', NULL, NULL);


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Name: assignment_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."assignment_group_id_seq"', 4, true);


--
-- Name: assignment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."assignment_id_seq"', 17, true);


--
-- Name: hours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."hours_id_seq"', 16, true);


--
-- Name: lecture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."lecture_id_seq"', 2, true);


--
-- Name: person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."person_id_seq"', 4, true);


--
-- Name: textbook_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."textbook_id_seq"', 1, true);


--
-- Name: topic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."topic_id_seq"', 20, true);


--
-- PostgreSQL database dump complete
--

-- \unrestrict rlDGVh7wCJUIM1v6t9Oy3RUMGUdBPbLPROrzM0blHuST9yQiOrMfbuOSoSsSCTB

RESET ALL;
