export default function Button({ content, change, variant }) {
  const classes = variant;
  return (
    <button
      type="button"
      className={`inline-block font-bold rounded-default ${classes}`}
    >
      {content}
    </button>
  );
}
