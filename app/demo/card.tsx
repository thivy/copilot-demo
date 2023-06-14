"use client";

interface IProps {
  children: React.ReactNode;
}

export const Button = (props: IProps) => {
  return (
    <div className="bg-purple-400 border-purple-400 border-2 rounded-lg p-4 hover:bg-white hover:bg-opacity-5 hover:border-yellow-400">
      {props.children}
    </div>
  );
};
