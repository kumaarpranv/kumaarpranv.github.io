

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
          width: "550px",
          height: "350px",
          maxHeight: "350px",
          maxWidth: "550px",
        }}
        src={"/certificates/"+image} alt="me" />
    </div>
    </a>
  );
}
