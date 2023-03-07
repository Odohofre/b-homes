export default function SectionSubhead({ content, variant="", change=false }) {
  return (
    <h2
      className={`text-royal-blue  font-medium ${
        change == true ? variant : ""
      }`}
    >
      {content}
    </h2>
  );
}
