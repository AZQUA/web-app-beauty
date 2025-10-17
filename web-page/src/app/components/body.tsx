
type BodyProps = {
    isOpen: boolean;
    children: React.ReactNode;
};



const Body =({children, isOpen}: BodyProps ) => {
    const Class = isOpen ? "ml-26 xl:ml-55 ": "";
    return (
        <div className = {`transition-all duration-300 esase-in-out ${Class}`}>{children}</div>
    )
}

export default Body;