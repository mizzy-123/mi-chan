export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-[2rem] px-[5%] bg-transparent flex items-center z-[100] transition delay-[0.5s] justify-items-stretch">
      <a href="#" className="text-[1.5rem] font-[700] cursor-default mr-auto uppercase px-[2rem] py-[0.2rem] bg-transparent shadow-logo rounded-md hover:text-[#666] hover:inner-shadow">
        MI<span className="text-tertiary">DEV</span>
      </a>
      <nav className="flex justify-center w-full">
        <a href="" className="nav-a">
          Home
        </a>
        <a href="" className="nav-a">
          About
        </a>
        <a href="" className="nav-a">
          Services
        </a>
        <a href="" className="nav-a">
          Portfolio
        </a>
        <a href="" className="nav-a">
          testimonial
        </a>
      </nav>
    </header>
  );
}
