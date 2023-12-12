import * as RiIcon from 'react-icons/ri'
import { useState } from 'react';
import Modal from '../../ui/Modal';
import CreateForm from './CreateForm';

const ProjectsHeader = () => {

  const [open,setOpen] = useState(false)

  return (
    <header className='flex items-center justify-between'>
        <h4 className='text-2xl font-semibold'>پروژه های شما</h4>
        <button onClick={() => setOpen(true)} className='btn btn--primary w-[150px]'>
            <RiIcon.RiAddFill size={26}/>
            پروژه جدید
        </button>
        <Modal onClose={() => setOpen(!open)} open={open}>
          <CreateForm/>
        </Modal>
    </header>
  )
}

export default ProjectsHeader