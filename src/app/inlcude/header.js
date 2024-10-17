import Image from 'next/image';
export default function Header() {
  return (
    <header className='mt-2 mx-2 border-bottom  py-2 '>
      <div className='d-flex  justify-content-start mb-2 align-items-center gap-4'>
        <img alt="men" width="200" src="/logo.png"  />
      </div>
    </header>
  
  );
}
