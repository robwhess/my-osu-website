SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict av4FRIDT9XUBw4p1FIj7Dnq9S18c9hs9zTrIdYmfJyAhnCcLFwZqfPeg810yZsf

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
	(1, '2024-10-15 22:26:40.078632+00', 'Rob Hess', 'hessro@oregonstate.edu');


--
-- Data for Name: course_term; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."course_term" ("id", "created_at", "course_id", "year", "term", "instructor_id", "links", "syllabus") VALUES
	('cs362-sp26', '2026-07-01 02:49:33.625699+00', 'cs362', 2026, 'spring', 1, '{"{\"url\": \"https://outlook.office.com/book/CS362@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled\", \"title\": \"CS 362 grading demo appointments\", \"description\": \"Use this page to sign up for grading demos for all assignments.\"}","{\"url\": \"https://canvas.oregonstate.edu/courses/2039368\", \"title\": \"CS 362 on Canvas\"}","{\"url\": \"https://oregonstate.zoom.us/j/99350551124?pwd=dHqez0vKdPnABmJ7aMl4dNawhgtf7f.1\", \"title\": \"CS 362 on Zoom\", \"description\": \"All in-person lectures will be broadcast in this Zoom meeting.\"}","{\"url\": \"https://edstem.org/us/courses/96641\", \"title\": \"CS 362 on Ed\", \"description\": \"We will use Ed for course Q & A – you should be automatically enrolled if you''re enrolled for this course.\"}","{\"url\": \"https://github.com/osu-cs362-sp26\", \"title\": \"CS 362 on GitHub\", \"description\": \"Find all lecture code repos and your own private assignment repos here.\"}"}', 'cs362/cs362-sp26.md'),
	('cs493-sp26', '2026-06-01 21:08:26.390458+00', 'cs493', 2026, 'spring', 1, '{"{\"url\": \"https://outlook.office.com/book/CS493@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled\", \"title\": \"CS 493 grading demo appointments\", \"description\": \"Use this page to sign up for grading demos for all assignments.\"}","{\"url\": \"https://canvas.oregonstate.edu/courses/2066268\", \"title\": \"CS 493 on Canvas\"}","{\"url\": \"https://oregonstate.zoom.us/j/96017875949?pwd=RPj7neChAcucSbjAvp1wGdquaynQUk.1\", \"title\": \"CS 493 on Zoom\", \"description\": \"All in-person lectures will be broadcast in this Zoom meeting.\"}","{\"url\": \"https://edstem.org/us/courses/96642\", \"title\": \"CS 493 on Ed\", \"description\": \"We will use Ed for course Q & A – you should be automatically enrolled if you''re enrolled for this course.\"}","{\"url\": \"https://github.com/osu-cs493-sp26\", \"title\": \"CS 493 on GitHub\", \"description\": \"Find all lecture code repos and your own private assignment repos here.\"}"}', 'cs493/cs493-sp26.md');


--
-- Data for Name: hours; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."hours" ("id", "created_at", "day", "start", "end", "location", "videoconference_link", "extra_info", "type", "person_id") VALUES
	(1, '2024-10-15 22:27:43.04173+00', 'Wednesday', '11:05:00', '12:30:00', 'KEC 1109', NULL, NULL, 'office', 1),
	(2, '2024-10-15 22:28:34.879354+00', 'Thursday', '14:30:00', '16:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/589990808?pwd=ViszY2Z4eGtoUDh4NEw0QWkzckJMQT09', NULL, 'office', 1);


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
-- Name: hours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."hours_id_seq"', 2, true);


--
-- Name: lecture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."lecture_id_seq"', 2, true);


--
-- Name: person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."person_id_seq"', 1, true);


--
-- Name: textbook_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."textbook_id_seq"', 1, true);


--
-- PostgreSQL database dump complete
--

-- \unrestrict av4FRIDT9XUBw4p1FIj7Dnq9S18c9hs9zTrIdYmfJyAhnCcLFwZqfPeg810yZsf

RESET ALL;
