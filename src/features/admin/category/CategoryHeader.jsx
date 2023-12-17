import { useState } from 'react'
import Modal from '../../../ui/Modal'
import CreateCategory from './CreateCategory'
import * as RiIcon from 'react-icons/ri'

const CategoryHeader = () => {
    const [open,setOpen] = useState(false)

    return (
      <header className='flex items-center justify-between'>
          <h4 className='text-2xl font-semibold'>دسته بندی های سایت</h4>
          <button onClick={() => setOpen(true)} className='btn btn--primary w-[200px]'>
              <RiIcon.RiAddFill size={26}/>
               ایجاد دسته بندی
          </button>
          <Modal onClose={() => setOpen(!open)} open={open} title={"ایجاد دسته بندی"}>
            <CreateCategory onClose={() => setOpen(!open)}/>
          </Modal>
      </header>
    )
}

export default CategoryHeader