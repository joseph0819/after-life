export default function Home({ onEnter }) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl font-extrabold mb-6">
            THE FOUNDER AFTER-LIFE
          </h1>
          <button
            onClick={onEnter}
            className="bg-orange-500 px-6 py-3 font-bold"
          >
            ENTER
          </button>
        </div>
      </div>
    );
  }
  