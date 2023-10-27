import { useState } from 'react';
import Sidebar from '../components/profile/Sidebar';
import AddProduct from '../components/profile/AddProduct';
function Profile() {
  const [components, setComponents] = useState(<AddProduct />);
  return (
    <>
      <main
        className={`w-full flex flex-col justify-start items-start 
        px-10 sm:px-12 md:px-20 lg:px-24 xl:px-36`}
      >
        <Sidebar component={components} setComponent={setComponents} />
        {components}
      </main>
    </>
  );
}

export default Profile;
