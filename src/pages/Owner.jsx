import useUser from '../features/auth/useUser'
import OwnerDashboard from '../features/owner/OwnerDashboard'
import Stats from '../features/owner/Stats'
import { useOwnerProjects } from '../features/projects/useOwnerProjects'

const Owner = () => {

  const {data} = useUser()
  const {projects , isLoading} = useOwnerProjects()


  return (
    <div className='h-screen'>
      <OwnerDashboard user={data?.user}/>
      <hr className='border-slate-900 my-3'/>
      <Stats loading={isLoading} projects={projects}/>
    </div>
  )
}

export default Owner