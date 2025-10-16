const PortraitCard = ({ imageUrl , text, description}: any ) => {
    return (
    <div className="flex pt-10">
        <div className="xl:w-70 w-55 xl:bg-white bg-transparent xl:rounded-lg xl:shadow-lg overflow-hidden shadow-none">
            {/* Moitié haute : Image */}
            <div className="xl:h-70 xl:w-full w-35 xl:ml-0 ml-10 h-35">
                <img
                    src={imageUrl || "/placeholder.svg?height=320&width=256&query=portrait image"}
                    alt={description}
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>

            {/* Moitié basse : Texte */}
            <div className="xl:h-70 w-full flex items-center justify-center p-3 bg-white h-35 shadow-lg xl:rounded-none rounded-lg">
                <p className="text-center text-xs text-gray-700">{text || "Votre texte ici"}</p>
            </div>
        </div>
    </div>
    )
};


export default PortraitCard;
