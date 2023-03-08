import Button from "./Button";

export default function PrimaryButton({text}) {
  return (
    <Button change={true} variant="text-white bg-royal-blue hover:text-royal-blue hover:bg-dark-100 px-[51px] py-5" content={text} />
  )
};

