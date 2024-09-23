interface Props {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ variant, children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${variant} ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
