export default function ImageCard({ href, children }) {
  return (
    <div className="max-w-sm shadow-lg rounded-lg overflow-hidden">
      <img src={href}
      width={387}
      height={256} className="object-cover" alt="" />
      <div className="py-10 px-5 bg-white">{children}</div>
    </div>
  );
}
