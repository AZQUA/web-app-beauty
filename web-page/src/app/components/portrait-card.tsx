const PortraitCard = ({ imageUrl , text}: any ) => {
    return (
    <div className="flex justify-center items-start p-4">
        <div className="w-70 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Moitié haute : Image */}
            <div className="h-70 w-full">
                <img
                    src={imageUrl || "/placeholder.svg?height=320&width=256&query=portrait image"}
                    alt="Portrait"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Moitié basse : Texte */}
            <div className="h-70 w-full flex items-center justify-center p-3">
                <p className="text-center text-gray-700">{text || "Votre texte ici"}</p>
            </div>
        </div>
    </div>
    )
};

export default PortraitCard;