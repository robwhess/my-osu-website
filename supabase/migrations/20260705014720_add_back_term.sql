alter table "public"."course" add column "terms" public.term[] not null;

alter table "public"."course_term" add column "term" public.term;

drop type "public"."term__old_version_to_be_dropped";



