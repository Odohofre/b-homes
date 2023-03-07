export default function ImageCard({ href, children }) {
  return (
    <div className="max-w-sm border shadow-lg rounded-lg">
      <img src={href} className="object-cover h-auto" alt="" />
      <div className="py-10 px-5">{children}</div>
    </div>
  );
}
