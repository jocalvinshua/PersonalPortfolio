export default function Contact() {
  const contacts = [
    {
      name: "Email",
      href: "mailto:jcalvin.dev@gmail.com",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png", // Gmail
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joshua-calvin-12a7a2319/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      name: "GitHub",
      href: "https://github.com/jocalvinshua",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
  ];

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-20 scroll text-center"
    >
      <h4 className="mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-5xl font-Ovo mb-6">Get in Touch</h2>

      <p className="max-w-xl mx-auto mb-12 font-Ovo text-gray-600 dark:text-gray-300">
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {contacts.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/30 hover:-translate-y-1 hover:shadow-md transition duration-300 bg-white dark:bg-darkHover"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-8 h-8"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
