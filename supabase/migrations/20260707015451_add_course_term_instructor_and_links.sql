alter table "public"."course_term" add column "instructor_id" bigint;

alter table "public"."course_term" add column "links" jsonb[];

alter table "public"."course_term" add constraint "course_term_instructor_id_fkey" FOREIGN KEY (instructor_id) REFERENCES public.person(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."course_term" validate constraint "course_term_instructor_id_fkey";



