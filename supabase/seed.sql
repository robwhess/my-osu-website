SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict Df1adUR7okxIahHSUN7Wk9giGfe7QKSzlUIKBKj1aN9xRkE6LxN3hwQh90Gtvoo

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



--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: course_term; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: hours; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: lecture; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: textbook; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Name: hours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."hours_id_seq"', 1, false);


--
-- Name: lecture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."lecture_id_seq"', 1, false);


--
-- Name: person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."person_id_seq"', 1, false);


--
-- Name: textbook_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."textbook_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict Df1adUR7okxIahHSUN7Wk9giGfe7QKSzlUIKBKj1aN9xRkE6LxN3hwQh90Gtvoo

RESET ALL;
