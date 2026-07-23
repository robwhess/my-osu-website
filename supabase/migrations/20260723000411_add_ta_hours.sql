alter table "public"."hours" add column "course_term_id" text;

CREATE UNIQUE INDEX person_email_key ON public.person USING btree (email);

alter table "public"."hours" add constraint "hours_course_term_id_fkey" FOREIGN KEY (course_term_id) REFERENCES public.course_term(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."hours" validate constraint "hours_course_term_id_fkey";

alter table "public"."person" add constraint "person_email_key" UNIQUE using index "person_email_key";



