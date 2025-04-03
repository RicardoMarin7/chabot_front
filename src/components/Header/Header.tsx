const Header: React.FC = () => {
  return (
    <header
      className="px-4 md:px-0 left-0 z-20 flex items-center h-16 w-full bg-bgColor md:bg-transparent overflow-hidden"
    >
      <div className="w-full justify-between sm:flex-col">
        <div className="flex items-center gap-x-2 justify-center">
          <a
            aria-label="Chatbot Example"
            className="group flex h-8 items-center hover:filter-none sm:relative"
            href="/"
          >
            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-accent-one to-accent-two xs:block z-10 mb-0.5 ms-2 text-2xl group-hover:text-accent-one">
              Chatbot Example
            </strong>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
