
type BodyProps = {
    isOpen: boolean;
    children: React.ReactNode;
};



const Body =({children, isOpen}: BodyProps ) => {
    const Class = isOpen ? "ml-26 xl:ml-55 ": "";
    return (
        <div className = {Class}>{children}</div>
    )
}

export default Body;