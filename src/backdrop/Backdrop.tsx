interface Props {
  onClick: () => void;
}

const Backdrop = ({ onClick }: Props) => {
  return <div className="backdrop" onClick={onClick}></div>;
};

export default Backdrop;
