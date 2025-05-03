export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-2 md:mb-0">BrainBuddy</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="mt-2 md:mt-0">&copy; 2024 Focused Learning. All rights reserved.</div>
      </div>
    </footer>
  );
}
