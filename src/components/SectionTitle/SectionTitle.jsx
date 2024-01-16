const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto font-serif text-black text-center md:w-4/12 my-8">
            <p className="text-green-700  mb-2">**** {subHeading} ****</p>
            <h3 className="text-3xl text-green-700 uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;