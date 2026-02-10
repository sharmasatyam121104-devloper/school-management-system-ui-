import Viweteacher from '@/components/admin/ViewTeacher'



const ViewTeacherRouter = async ({ params }: { params: Promise<{ teacherId: string }> }) => {
  const { teacherId } = await params;
  return (
    <Viweteacher id={teacherId}/>
  )
}

export default ViewTeacherRouter