export default function Button({ content, change, variant }) {
  const classes = variant;
  return (
    <button
      type="button"
      className={`inline-block font-medium rounded-default  ${
        change == true ? classes : "text-white bg-royal-blue px-[51px] py-5"
      }`}
    >
      {content}
    </button>
  );
}
