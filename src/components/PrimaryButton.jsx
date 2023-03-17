import Button from "./Button";

export default function PrimaryButton({text}) {
  return (
    <Button change={true} variant="text-white bg-royal-blue hover:bg-sky-blue w-56 md:w-auto  md:px-[51px]  py-5" content={text} />
  )
};

