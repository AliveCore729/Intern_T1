import { createClient } from '@/utils/supabase/server'
import { CourseTile } from './CourseTile'

export async function CourseList() {
  const supabase = await createClient()

  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="col-span-full p-6 glass-panel rounded-2xl border border-red-500/30 bg-red-500/10 text-red-200">
        <h3 className="font-bold text-lg mb-2">Failed to load courses</h3>
        <p>There was an error connecting to the database: {error.message}</p>
        <p className="mt-2 text-sm text-red-300">
          Have you set up your Supabase environment variables and created the courses table?
        </p>
      </div>
    )
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="col-span-full p-6 glass-panel rounded-2xl text-center text-text-muted py-12">
        <p>No courses found. Add some data to your Supabase table.</p>
      </div>
    )
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseTile key={course.id} course={course} delay={index + 3} />
      ))}
    </>
  )
}
