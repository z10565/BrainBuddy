const ArticlesLinks = [
    "https://www.psychiatry.org/patients-families/adhd/what-is-adhd", 
    "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd",
    "https://www.nhs.uk/conditions/adhd-children-teenagers/",
    "https://kidshealth.org/en/parents/adhd.html",
    "https://www.hopkinsmedicine.org/health/conditions-and-diseases/adhdadd",
    "https://raisingchildren.net.au/school-age/development/adhd/adhd",
  ];
  
  export default function Articles() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 py-10 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
            {ArticlesLinks.map((link, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F6EEFF] p-6 rounded-lg flex justify-center items-center hover:shadow-lg transition"
              >
                <img
                  src="src/icons/Aricles.svg" 
                  alt="Webinar"
                  className="w-24 h-24 object-contain"
                />
              </a>
            ))}
          </div>
        </main>
  
       
      </div>
    );
  }
  