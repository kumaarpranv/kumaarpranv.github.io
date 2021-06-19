

export default function CertificateCard({ title, href, image }) {
  return (
    <a
      className="mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        <img className="h-20 w-8 min-w-lg text-gray-900 dark:text-gray-100" 
        style={{
          width: "1200px",
          height: "1000px",
          maxHeight: "1200px",
          maxWidth: "1000px",
        }}
        src={"/certificates/"+image} alt="me" />
    </div>
    </a>
  );
}
