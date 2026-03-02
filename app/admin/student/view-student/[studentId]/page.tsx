import ViewStudent from '@/components/admin/ViewStudent';

const ViewStudentRouter = async ({ params }: { params: Promise<{ studentId: string }> }) => {
  const { studentId } = await params;
  return (
    <ViewStudent id={studentId}/>
  )
}

export default ViewStudentRouter