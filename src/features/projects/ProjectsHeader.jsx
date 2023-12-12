import * as RiIcon from 'react-icons/ri'

const ProjectsHeader = () => {
  return (
    <header className='flex items-center justify-between'>
        <h4 className='text-2xl font-semibold'>پروژه های شما</h4>
        <button className='btn btn--primary w-[150px]'>
            <RiIcon.RiAddFill size={26}/>
            پروژه جدید
        </button>
    </header>
  )
}

export default ProjectsHeader