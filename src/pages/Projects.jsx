import ProjectsHeader from '../features/projects/ProjectsHeader'
import ProjectsTable from '../features/projects/ProjectsTable'

const Projects = () => {
  return (
    <>
      <ProjectsHeader/>
      <hr className='border-slate-900 my-3'/>
      <ProjectsTable/>
    </>
  )
}

export default Projects