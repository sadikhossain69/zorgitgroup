interface TitleProps {
  title: string;
  classNames?: string;
}

export default function Title({ title, classNames = '' }: TitleProps) {
  return (
    <h4
      className={`text-xl font-semibold text-center capitalize text-title md:text-2xl ${classNames}`}
    >
      {title}
    </h4>
  );
}
