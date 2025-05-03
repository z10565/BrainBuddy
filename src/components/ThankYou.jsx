export default function ThankYou() {
    return (
      <div className="h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Thank You for Subscribing!</h1>
          <p className="text-lg mb-6">Join our parenting community on Discord:</p>
          <a
            href="https://discord.gg/w3ZuXPuUKa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          >
            Join Discord
          </a>
        </div>
      </div>
    );
  }
  