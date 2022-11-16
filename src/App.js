import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  const menu = [
    {
      title: 'Home',
      icon: 'fa-solid fa-house'
    },
    {
      title: 'Chat',
      icon: 'fa-solid fa-comments'
    },
    {
      title: 'Manage',
      icon:'fa-solid fa-bars-progress'
    },
    {
      title: 'My Task',
      icon:'fa-solid fa-list-check'
    },
    {
      title: 'Setting',
      icon: 'fa-solid fa-gear'
    }

  ]

  return (
    <div className="flex">
      <div className={`${open ? 'w-72' : 'w-auto'} h-screen bg-slate-900 p-7`}>
        <div className={`${!open && 'justify-center'} flex gap-x-3 items-center pb-10 cursor-pointer`} onClick={() => setOpen(!open)}>
          <i className="fa-brands fa-teamspeak text-3xl text-white cursor-pointer" ></i>
          <h className={`${!open && 'hidden'} text-white text-2xl`}>Keyur Gohil</h>
        </div>

        <ul>
          {menu?.map((menuItem, index) => (
            <div className='flex gap-x-2 items-center p-4 cursor-pointer hover:bg-slate-50/10 rounded-full'>
              <i className={`${menuItem.icon} text-white text-xl`}></i>  
              <li className={`${!open && 'hidden'} text-white`}> 
                {menuItem.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        Home
      </div>
    </div>
  );
}

export default App;
