/* eslint-disable react/prop-types */
const SectionTitle = ({ heading }) => {
    return (
        <div className="text-center my-8 w-[400px] mx-auto">
            <h3 className="text-4xl uppercase border-y-4 py-4 text-[#E8E8E8]">{heading}</h3>
        </div>
    );
};

export default SectionTitle;