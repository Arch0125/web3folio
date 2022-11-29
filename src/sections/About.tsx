export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 py-24 bg-bottom bg-no-repeat fill-screen snap-start snap-always md:px-32 bg-waveMobile lg:bg-wave"
    >
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className="mb-4 text-3xl font-bold md:text-4xl md:mb-8">About</p>
        <div className="mb-8 text-lg md:text-xl md:mb-16">
          <p className="mb-4">
          I'm currently diving into the world of Decentralised Finance and exploring different aspects of it, the ways it can be made more accessible to the users, more secure and efficient that its current state. Mainly my focus has been working on payment streams for which I'm working on implementations of EIP-1620 to make ERC20 native streams. Also trying to make under-collateralised loans as safe as possible using the magic of streams. 
          </p>
          <p>
            In addition to development, I enjoy playing CS:GO, travelling, watching documentaries, listening to music, reading
            non-fiction and attending fun meet-ups.
          </p>
        </div>
        <a
          href="https://www.canva.com/design/DAEyUQhWpg8/IwnuUJD6gle44GvS8r1hFw/view?utm_content=DAEyUQhWpg8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-1 bg-white border-2 border-gray-700 rounded-full shadow-md md:text-lg">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};
