export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      assignment: {
        Row: {
          assignment_group_id: number
          created_at: string
          description: string | null
          due: string | null
          id: number
          notes: string[]
          title: string
          url: string
        }
        Insert: {
          assignment_group_id: number
          created_at?: string
          description?: string | null
          due?: string | null
          id?: number
          notes?: string[]
          title: string
          url: string
        }
        Update: {
          assignment_group_id?: number
          created_at?: string
          description?: string | null
          due?: string | null
          id?: number
          notes?: string[]
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "assignment_assignment_group_id_fkey"
            columns: ["assignment_group_id"]
            isOneToOne: false
            referencedRelation: "assignment_group"
            referencedColumns: ["id"]
          },
        ]
      }
      assignment_group: {
        Row: {
          course_term_id: string
          created_at: string
          description: string | null
          id: number
          title: string
        }
        Insert: {
          course_term_id: string
          created_at?: string
          description?: string | null
          id?: number
          title: string
        }
        Update: {
          course_term_id?: string
          created_at?: string
          description?: string | null
          id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "assignment_group_course_term_id_fkey"
            columns: ["course_term_id"]
            isOneToOne: false
            referencedRelation: "course_term"
            referencedColumns: ["id"]
          },
        ]
      }
      course: {
        Row: {
          created_at: string
          description: string | null
          id: string
          number: string
          terms: Database["public"]["Enums"]["term"][]
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id: string
          number: string
          terms: Database["public"]["Enums"]["term"][]
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          number?: string
          terms?: Database["public"]["Enums"]["term"][]
          title?: string
        }
        Relationships: []
      }
      course_term: {
        Row: {
          course_id: string
          created_at: string
          id: string
          instructor_id: number | null
          links: Json[] | null
          syllabus: string | null
          term: Database["public"]["Enums"]["term"] | null
          year: number
        }
        Insert: {
          course_id: string
          created_at?: string
          id: string
          instructor_id?: number | null
          links?: Json[] | null
          syllabus?: string | null
          term?: Database["public"]["Enums"]["term"] | null
          year: number
        }
        Update: {
          course_id?: string
          created_at?: string
          id?: string
          instructor_id?: number | null
          links?: Json[] | null
          syllabus?: string | null
          term?: Database["public"]["Enums"]["term"] | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "course_term_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "course"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_term_instructor_id_fkey"
            columns: ["instructor_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["id"]
          },
        ]
      }
      hours: {
        Row: {
          course_term_id: string | null
          created_at: string
          day: string
          end: string
          extra_info: string | null
          id: number
          location: string
          person_id: number
          start: string
          type: Database["public"]["Enums"]["hours_type"]
          videoconference_link: string | null
        }
        Insert: {
          course_term_id?: string | null
          created_at?: string
          day: string
          end: string
          extra_info?: string | null
          id?: number
          location: string
          person_id: number
          start: string
          type?: Database["public"]["Enums"]["hours_type"]
          videoconference_link?: string | null
        }
        Update: {
          course_term_id?: string | null
          created_at?: string
          day?: string
          end?: string
          extra_info?: string | null
          id?: number
          location?: string
          person_id?: number
          start?: string
          type?: Database["public"]["Enums"]["hours_type"]
          videoconference_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hours_course_term_id_fkey"
            columns: ["course_term_id"]
            isOneToOne: false
            referencedRelation: "course_term"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hours_person_id_fkey"
            columns: ["person_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["id"]
          },
        ]
      }
      person: {
        Row: {
          created_at: string
          email: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      section: {
        Row: {
          course_term_id: string
          created_at: string
          crn: number
          day: string
          end: string
          extra_info: string | null
          id: number
          location: string
          location_link: string | null
          section: string
          start: string
          type: Database["public"]["Enums"]["section_type"]
          videoconference_link: string | null
        }
        Insert: {
          course_term_id: string
          created_at?: string
          crn?: number
          day: string
          end: string
          extra_info?: string | null
          id?: number
          location: string
          location_link?: string | null
          section: string
          start: string
          type?: Database["public"]["Enums"]["section_type"]
          videoconference_link?: string | null
        }
        Update: {
          course_term_id?: string
          created_at?: string
          crn?: number
          day?: string
          end?: string
          extra_info?: string | null
          id?: number
          location?: string
          location_link?: string | null
          section?: string
          start?: string
          type?: Database["public"]["Enums"]["section_type"]
          videoconference_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lecture_course_term_id_fkey"
            columns: ["course_term_id"]
            isOneToOne: false
            referencedRelation: "course_term"
            referencedColumns: ["id"]
          },
        ]
      }
      section_leader: {
        Row: {
          created_at: string
          person_id: number
          section_id: number
        }
        Insert: {
          created_at?: string
          person_id: number
          section_id: number
        }
        Update: {
          created_at?: string
          person_id?: number
          section_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "section_leader_person_id_fkey"
            columns: ["person_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "section_leader_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "section"
            referencedColumns: ["id"]
          },
        ]
      }
      textbook: {
        Row: {
          author: string | null
          course_term_id: string | null
          created_at: string
          description: string | null
          id: number
          link: string | null
          title: string
        }
        Insert: {
          author?: string | null
          course_term_id?: string | null
          created_at?: string
          description?: string | null
          id?: number
          link?: string | null
          title: string
        }
        Update: {
          author?: string | null
          course_term_id?: string | null
          created_at?: string
          description?: string | null
          id?: number
          link?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "textbook_course_term_id_fkey"
            columns: ["course_term_id"]
            isOneToOne: false
            referencedRelation: "course_term"
            referencedColumns: ["id"]
          },
        ]
      }
      topic: {
        Row: {
          course_term_id: string
          created_at: string
          id: number
          is_current: boolean
          materials: Json[]
          readings: Json[]
          section: number | null
          title: string
          weeks: number[]
        }
        Insert: {
          course_term_id: string
          created_at?: string
          id?: number
          is_current?: boolean
          materials?: Json[]
          readings?: Json[]
          section?: number | null
          title: string
          weeks: number[]
        }
        Update: {
          course_term_id?: string
          created_at?: string
          id?: number
          is_current?: boolean
          materials?: Json[]
          readings?: Json[]
          section?: number | null
          title?: string
          weeks?: number[]
        }
        Relationships: [
          {
            foreignKeyName: "topic_course_term_id_fkey"
            columns: ["course_term_id"]
            isOneToOne: false
            referencedRelation: "course_term"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topic_section_fkey"
            columns: ["section"]
            isOneToOne: false
            referencedRelation: "section"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      hours_type: "office" | "grading"
      section_type: "lecture" | "recitation" | "lab"
      term: "fall" | "winter" | "spring" | "summer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      hours_type: ["office", "grading"],
      section_type: ["lecture", "recitation", "lab"],
      term: ["fall", "winter", "spring", "summer"],
    },
  },
} as const

